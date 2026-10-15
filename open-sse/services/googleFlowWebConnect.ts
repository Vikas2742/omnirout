import { get } from "node:http";
import { GoogleFlowWebError } from "./googleFlowWebResponse.ts";

/** Native HTTP avoids OmniRoute's outbound proxy and Playwright's proxy-aware HTTP discovery. */
export async function discoverGoogleFlowWebSocket(cdpUrl: string): Promise<string> {
  const origin = new URL(cdpUrl);
  return new Promise((resolve, reject) => {
    const fail = () =>
      reject(
        new GoogleFlowWebError(
          "browser_unavailable",
          "Cannot attach to the configured loopback Chrome; check the admin CDP endpoint."
        )
      );
    const request = get(
      new URL("/json/version", origin),
      { agent: false, timeout: 5000 },
      (response) => {
        if (response.statusCode !== 200) {
          response.destroy();
          fail();
          return;
        }
        const chunks: Buffer[] = [];
        let size = 0;
        response.on("data", (chunk: Buffer) => {
          size += chunk.length;
          if (size > 65536) {
            response.destroy();
            fail();
          } else chunks.push(chunk);
        });
        response.on("error", fail);
        response.on("end", () => {
          try {
            const data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            const ws = new URL(data.webSocketDebuggerUrl);
            if (
              ws.protocol !== "ws:" ||
              ws.host !== origin.host ||
              ws.username ||
              ws.password ||
              ws.hash ||
              ws.search ||
              !/^\/devtools\/browser\/[a-zA-Z0-9-]+$/.test(ws.pathname)
            ) {
              fail();
              return;
            }
            resolve(ws.href);
          } catch {
            fail();
          }
        });
      }
    );
    // Socket inactivity alone does not bound a server that trickles response bytes.
    const deadline = setTimeout(() => {
      request.destroy();
      fail();
    }, 5000);
    request.once("close", () => clearTimeout(deadline));
    request.on("timeout", () => {
      request.destroy();
      fail();
    });
    request.on("error", fail);
  });
}
export async function connectGoogleFlowBrowser(cdpUrl: string) {
  const endpoint = await discoverGoogleFlowWebSocket(cdpUrl);
  const { chromium } = await import("playwright-core");
  return chromium.connectOverCDP(endpoint, { timeout: 10000 });
}
