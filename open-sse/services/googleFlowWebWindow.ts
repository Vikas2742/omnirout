import type { Browser, BrowserContext } from "playwright-core";

/** A separate visible window can remain behind other apps without taking focus. */
export async function openGoogleFlowWindow(
  browser: Browser,
  context: BrowserContext,
  timeoutMs: number
) {
  const session = await browser.newBrowserCDPSession();
  let targetId: string | undefined;
  let identify!: (id: string | undefined) => void;
  const targetReady = new Promise<string | undefined>((resolve) => {
    identify = resolve;
  });
  // Register before createTarget: Playwright may emit the page before CDP replies.
  const owned = context.waitForEvent("page", {
    timeout: timeoutMs,
    predicate: async (candidate) => {
      const id = await targetReady;
      if (!id) return false;
      try {
        const pageSession = await context.newCDPSession(candidate);
        try {
          const { targetInfo } = await pageSession.send("Target.getTargetInfo");
          return targetInfo.targetId === id;
        } finally {
          await pageSession.detach().catch(() => {}); // A candidate may already be closed.
        }
      } catch {
        return false; // Ignore unrelated pages that close while being identified.
      }
    },
  });
  void owned.catch(() => {}); // Creation may outlast the bounded page-event wait.
  try {
    ({ targetId } = await session.send("Target.createTarget", {
      url: "about:blank",
      newWindow: true,
      background: true,
    }));
    identify(targetId);
    return await owned;
  } catch (error) {
    // If no Page could be acquired, close only the exact target we created.
    if (targetId) await session.send("Target.closeTarget", { targetId }).catch(() => {});
    throw error;
  } finally {
    identify(undefined);
    await session.detach().catch(() => {}); // Never disconnect or close the shared browser.
  }
}
