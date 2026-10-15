import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { discoverGoogleFlowWebSocket } from "../../open-sse/services/googleFlowWebConnect.ts";
import { downloadGoogleFlowMedia } from "../../open-sse/services/googleFlowWebMedia.ts";

// No real browser/CDP connection: discovery is exercised only against our own fake HTTP server.
for (const kind of ["valid", "redirect", "authority", "oversize", "credentials"] as const) {
  test(`CDP fake discovery ${kind}`, async () => {
    let endpoint = "";
    const server = createServer((_request, response) => {
      if (kind === "redirect") {
        response.writeHead(302, { Location: "http://example.com" });
        response.end();
        return;
      }
      if (kind === "oversize") {
        response.end("x".repeat(65537));
        return;
      }
      response.end(
        JSON.stringify({
          webSocketDebuggerUrl:
            kind === "authority"
              ? "ws://example.com/devtools/browser/fake"
              : kind === "credentials"
                ? endpoint.replace("ws://", "ws://user:password@")
                : endpoint,
        })
      );
    });
    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    assert.ok(address && typeof address === "object");
    const cdp = `http://127.0.0.1:${address.port}`;
    endpoint = cdp.replace("http:", "ws:") + "/devtools/browser/fake";
    try {
      if (kind === "valid") assert.equal(await discoverGoogleFlowWebSocket(cdp), endpoint);
      else await assert.rejects(discoverGoogleFlowWebSocket(cdp), /attach|CDP|Chrome/i);
    } finally {
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  });
}
for (const kind of ["declared cap", "stream cap", "empty", "fetch flags"] as const) {
  test(`in-page media downloader ${kind}`, async () => {
    const original = globalThis.fetch;
    let cancelled = false;
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        if (kind !== "empty") controller.enqueue(new Uint8Array(9));
        if (kind !== "stream cap") controller.close();
      },
      cancel() {
        cancelled = true;
      },
    });
    globalThis.fetch = async (_url, options) => {
      assert.equal(options?.credentials, "omit");
      assert.equal(options?.redirect, "error");
      if (kind === "fetch flags") throw new Error("flags verified");
      return new Response(stream, {
        headers: kind === "declared cap" ? { "content-length": "9" } : {},
      });
    };
    try {
      await assert.rejects(
        downloadGoogleFlowMedia({
          url: "https://flow-content.google/image/00000001-0000-4000-8000-000000000001",
          maxBytes: 8,
        }),
        /cap|Empty|flags/
      );
      if (kind === "stream cap" || kind === "declared cap") assert.equal(cancelled, true);
    } finally {
      globalThis.fetch = original;
    }
  });
}
