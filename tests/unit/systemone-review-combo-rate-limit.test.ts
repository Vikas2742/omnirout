import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

const dataDir = fs.mkdtempSync(path.join(tmpdir(), ".review-combo-rate-limit-"));
process.env.DATA_DIR = dataDir;
Object.assign(process.env, { NODE_ENV: "test" });
process.env.API_KEY_SECRET = "review-probe-secret";
const core = await import("../../src/lib/db/core.ts");
const providers = await import("../../src/lib/db/providers.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { updateApiKeyPermissions } = keys;
const route = await import("../../src/app/api/v1/systemone/route.ts");

test.after(async () => {
  const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
  await waitForCallLogSaves(10_000);
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test("one rate-limited API-key combo request should be able to fail over", async () => {
  await providers.createProviderConnection({
    provider: "cloudflare-ai",
    name: "CF",
    authType: "apikey",
    apiKey: "cf-key",
    isActive: true,
    testStatus: "active",
    providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
  });
  await providers.createProviderConnection({
    provider: "typesafe",
    name: "TS",
    authType: "apikey",
    apiKey: "ts-key",
    isActive: true,
    testStatus: "active",
  });
  await createCombo({
    name: "review-fallback",
    strategy: "priority",
    models: ["cloudflare-ai/jev", "typesafe/jev-latest"],
    config: { maxRetries: 0 },
  });
  const key = await keys.createApiKey("review", "review-machine");
  await updateApiKeyPermissions(key.id, { rateLimits: [{ limit: 1, window: 60 }] });
  const seen: string[] = [];
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    seen.push(String(url).includes("cloudflare.com") ? "cloudflare" : "typesafe");
    return seen.length === 1
      ? Response.json(
          { success: false, errors: [{ message: "Insufficient balance" }] },
          { status: 402 }
        )
      : Response.json({
          model: "jev-1.13.0",
          answers: { x: { ok: true } },
          usage: { input_tokens: 1, output_tokens: 0 },
        });
  };
  try {
    const response = await route.POST(
      new Request("http://localhost/v1/systemone", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${key.key}` },
        body: JSON.stringify({
          model: "review-fallback",
          state: "s",
          questions: { x: { type: "noul", instructions: "i" } },
        }),
      })
    );
    assert.equal(
      response.status,
      200,
      JSON.stringify({ seen, body: await response.clone().json() })
    );
    assert.deepEqual(seen, ["cloudflare", "typesafe"]);
  } finally {
    globalThis.fetch = oldFetch;
  }
});
