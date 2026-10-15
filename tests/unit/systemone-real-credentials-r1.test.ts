import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "systemone-credential-r1-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-credential-r1";
const core = await import("../../src/lib/db/core.ts");
const providers = await import("../../src/lib/db/providers.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { POST } = await import("../../src/app/api/v1/systemone/route.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
test.after(async () => {
  await waitForCallLogSaves(10_000);
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

for (const failure of ["expired", 401, 402, 422] as const) {
  test(`A1: real POST credential selection and upstream ${failure} ${failure === 422 ? "stops" : "fails over"}`, async () => {
    const ts = await providers.createProviderConnection({
      provider: "typesafe",
      name: `TS-${failure}`,
      authType: "apikey",
      apiKey: "synthetic-ts",
      isActive: true,
      testStatus: failure === "expired" ? "expired" : "active",
    });
    const cf = await providers.createProviderConnection({
      provider: "cloudflare-ai",
      name: `CF-${failure}`,
      authType: "apikey",
      apiKey: "synthetic-cf",
      isActive: true,
      testStatus: "active",
      providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
    });
    const model = `real-fallback-${failure}`;
    await createCombo({
      name: model,
      strategy: "priority",
      models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
      config: { maxRetries: 0 },
    });
    const key = await keys.createApiKey(model, "synthetic-machine");
    await keys.updateApiKeyPermissions(key.id, {
      allowedConnections: [String(ts.id), String(cf.id)],
    });
    const seen: string[] = [];
    const oldFetch = globalThis.fetch;
    globalThis.fetch = async (url) => {
      const provider = String(url).includes("cloudflare.com") ? "cloudflare-ai" : "typesafe";
      seen.push(provider);
      if (provider === "typesafe")
        return Response.json(
          {
            detail: {
              error_type: failure === 422 ? "api_usage_error" : "authentication_error",
              message: "Synthetic failure",
            },
          },
          { status: Number(failure) }
        );
      return Response.json({
        success: true,
        result: {
          state: "Completed",
          result: {
            model: "jev-1.13.0",
            answers: {},
            usage: { input_tokens: 1, output_tokens: 0 },
          },
        },
      });
    };
    try {
      const response = await POST(
        new Request("http://localhost/v1/systemone", {
          method: "POST",
          headers: { "content-type": "application/json", authorization: `Bearer ${key.key}` },
          body: JSON.stringify({
            model,
            state: "s",
            questions: { x: { type: "noul", instructions: "i" } },
          }),
        })
      );
      assert.equal(response.status, failure === 422 ? 422 : 200, await response.clone().text());
      assert.deepEqual(
        seen,
        failure === "expired"
          ? ["cloudflare-ai"]
          : failure === 422
            ? ["typesafe"]
            : ["typesafe", "cloudflare-ai"]
      );
    } finally {
      globalThis.fetch = oldFetch;
    }
  });
}
