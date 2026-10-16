import type { Browser, Page } from "playwright-core";
import type { GoogleFlowWebConfig } from "./googleFlowWebConfig.ts";
import type { GoogleFlowWebRequest } from "../handlers/imageGeneration/providers/googleFlowWebRequest.ts";
import { connectGoogleFlowBrowser } from "./googleFlowWebConnect.ts";
import { fetchGoogleFlowMedia } from "./googleFlowWebMedia.ts";
import { acquireGoogleFlowSlot } from "./googleFlowWebQueue.ts";
import { GoogleFlowWebError, parseGoogleFlowResponse } from "./googleFlowWebResponse.ts";
import { assertGoogleFlowVisible, configureGoogleFlowPage } from "./googleFlowWebUi.ts";
import { openGoogleFlowWindow } from "./googleFlowWebWindow.ts";

const CLEANUP_MS = 1000;
async function closeOwnedPage(page: Page): Promise<void> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([
      // Keep handling late rejection after the cleanup deadline (including synchronous throws).
      Promise.resolve()
        .then(() => page.close())
        .catch(() => {}),
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, CLEANUP_MS);
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
}

/** Only connect is injectable: hermetic tests fake Playwright, not the UI/response contract. */
export function createGoogleFlowWebBridge(
  connect: (url: string) => Promise<Browser> = connectGoogleFlowBrowser
) {
  let cached: { url: string; browser: Browser } | undefined;
  return {
    async generate(
      input: GoogleFlowWebRequest,
      config: GoogleFlowWebConfig,
      signal?: AbortSignal
    ): Promise<Array<{ b64_json: string; revised_prompt?: string }>> {
      const release = await acquireGoogleFlowSlot(config.queueTimeoutMs, signal);
      let page: Page | undefined;
      let submitted = false;
      let finished = false;
      const controller = new AbortController();
      const abort = () => controller.abort();
      signal?.addEventListener("abort", abort, { once: true });
      if (signal?.aborted) abort();
      const timer = setTimeout(abort, config.timeoutMs);
      const cancellation = () =>
        new GoogleFlowWebError(
          "cancelled",
          submitted
            ? "The image may still have been generated in Flow; waiting was cancelled or timed out. Inspect the project before another request. No retry was attempted."
            : "Flow image generation cancelled or timed out before submission; no image was submitted.",
          signal?.aborted ? 499 : 504
        );
      const check = () => {
        if (controller.signal.aborted || finished) throw cancellation();
      };
      const step = async <T>(operation: Promise<T>): Promise<T> => {
        let listener: () => void;
        const stopped = new Promise<never>((_resolve, reject) => {
          listener = () => reject(cancellation());
          controller.signal.addEventListener("abort", listener, { once: true });
        });
        try {
          check();
          return await Promise.race([operation, stopped]);
        } finally {
          controller.signal.removeEventListener("abort", listener!);
        }
      };
      try {
        check();
        if (!cached || cached.url !== config.cdpUrl || !cached.browser.isConnected()) {
          const browser = await step(
            connect(config.cdpUrl).catch((error: unknown) => {
              if (error instanceof Error && error.name === "TimeoutError")
                throw new GoogleFlowWebError(
                  "browser_attach_timeout",
                  "Attaching to Chrome over CDP timed out; a discarded/frozen tab can block attach. Use a dedicated Chrome profile for Flow or activate/close frozen tabs. No image was submitted.",
                  504
                );
              throw error;
            })
          );
          cached = { url: config.cdpUrl, browser };
          browser.on("disconnected", () => {
            if (cached?.browser === browser) cached = undefined;
          });
        }
        const context = cached.browser.contexts()[0];
        if (!context)
          throw new GoogleFlowWebError(
            "browser_unavailable",
            "Attached Chrome has no default context; open Flow in Chrome first."
          );
        check();
        const owned = openGoogleFlowWindow(cached.browser, context, config.timeoutMs).then(
          async (created) => {
            if (finished || controller.signal.aborted) {
              await closeOwnedPage(created);
              throw cancellation();
            }
            page = created;
            return created;
          }
        );
        page = await step(owned);
        page.setDefaultTimeout(Math.min(config.timeoutMs, 15000));
        const projectUrl = `https://flow.google.com/project/${config.projectId}`;
        await step(
          page.goto(projectUrl, { waitUntil: "domcontentloaded", timeout: config.timeoutMs })
        );
        const location = new URL(page.url());
        if (
          location.origin !== "https://flow.google.com" ||
          location.pathname !== `/project/${config.projectId}`
        )
          throw new GoogleFlowWebError(
            "sign_in_required",
            "Sign in to Flow in the attached browser and open the configured project.",
            403
          );
        await step(configureGoogleFlowPage(page, input, check));
        await step(assertGoogleFlowVisible(page));
        check();
        const responsePromise = page.waitForResponse(
          (response) => {
            try {
              const url = new URL(response.url());
              return (
                url.origin === "https://flow.google.com" &&
                url.pathname === "/_/AiSandboxAngularFrontend/data/batchexecute" &&
                url.searchParams.get("rpcids") === "ogiZ0b" &&
                response.request().method() === "POST"
              );
            } catch {
              return false;
            }
          },
          { timeout: config.timeoutMs }
        );
        // A click can reach Flow before Playwright acknowledges it. All later failures are uncertain.
        void responsePromise.catch(() => {}); // page close rejects an already-registered response wait
        check();
        submitted = true;
        await step(page.locator("button").filter({ hasText: "arrow_forward" }).click());
        const response = await step(responsePromise);
        if (!response.ok())
          throw new GoogleFlowWebError(
            "upstream_error",
            "Flow generation failed; inspect the project in the browser. Do not automatically resubmit."
          );
        const media = parseGoogleFlowResponse(await step(response.text()), input.n, input.prompt);
        const images: Array<{ b64_json: string; revised_prompt?: string }> = [];
        for (const item of media) {
          check();
          images.push({
            b64_json: await step(fetchGoogleFlowMedia(page, item)),
            ...(item.revisedPrompt !== undefined ? { revised_prompt: item.revisedPrompt } : {}),
          });
        }
        return images;
      } catch (error) {
        if (controller.signal.aborted) throw cancellation();
        if (error instanceof GoogleFlowWebError) throw error;
        throw new GoogleFlowWebError(
          "browser_error",
          submitted
            ? "Flow browser operation failed; the image may still have been generated in Flow. Inspect the browser; no retry was attempted."
            : "Cannot use attached Chrome. Sign in to Flow in the attached browser and check its UI and admin CDP configuration."
        );
      } finally {
        finished = true;
        clearTimeout(timer);
        signal?.removeEventListener("abort", abort);
        // Owned resource only. A stuck close must not hold the global slot or replace the result.
        try {
          if (page) await closeOwnedPage(page);
        } finally {
          release();
        }
      }
    },
  };
}
export const googleFlowWebBrowser = createGoogleFlowWebBridge();
