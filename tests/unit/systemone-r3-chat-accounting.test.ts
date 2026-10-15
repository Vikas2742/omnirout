import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

const dir = fs.mkdtempSync(path.join(tmpdir(), "systemone-r3-chat-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "synthetic-r3-chat-secret";
Object.assign(process.env, { NODE_ENV: "test" });
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createProviderConnection } = await import("../../src/lib/db/providers.ts");
const { updatePricing } = await import("../../src/lib/db/settings/pricing.ts");
const { upsertTokenLimit, getWindowUsage } = await import("../../src/lib/db/tokenLimits.ts");
const { POST } = await import("../../src/app/api/v1/chat/completions/route.ts");
const { getApiKeyUsageLimitStatus } = await import("../../src/lib/usage/apiKeyUsageLimits.ts");
const { listLedgerEntries } = await import("../../src/lib/db/costLedger.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
const { spendBatchWriter } = await import("../../src/lib/spend/batchWriter.ts");
const originalFetch = globalThis.fetch;
let fetches = 0;
globalThis.fetch = async (url) => {
  assert.equal(String(url), "https://api.openai.com/v1/chat/completions");
  fetches++;
  return Response.json({
    id: "synthetic-chat",
    object: "chat.completion",
    model: "gpt-4o",
    created: 1,
    choices: [
      { index: 0, message: { role: "assistant", content: "synthetic" }, finish_reason: "stop" },
    ],
    usage: { prompt_tokens: 7, completion_tokens: 3, total_tokens: 10 },
  });
};
test.after(async () => {
  globalThis.fetch = originalFetch;
  await waitForCallLogSaves(10000);
  spendBatchWriter.flush();
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});
test("real chat POST retains bare-only token accounting and counts history without double-counting its ledger", async () => {
  await createProviderConnection({
    provider: "openai",
    name: "synthetic-r3-chat",
    authType: "apikey",
    apiKey: "synthetic-chat-upstream",
    isActive: true,
    testStatus: "active",
  });
  await updatePricing({ openai: { "gpt-4o": { input: 1, output: 1 } } });
  const key = await keys.createApiKey("r3-chat", "synthetic");
  await keys.updateApiKeyPermissions(key.id, { usageLimitEnabled: true, dailyUsageLimitUsd: 1 });
  const limits = [
    upsertTokenLimit({ apiKeyId: key.id, scopeType: "global", tokenLimit: 10 }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "provider",
      scopeValue: "openai",
      tokenLimit: 10,
    }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "gpt-4o",
      tokenLimit: 10,
    }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "openai/gpt-4o",
      tokenLimit: 10,
    }),
  ];
  const request = () =>
    new Request("http://synthetic.invalid/v1/chat/completions", {
      method: "POST",
      headers: { authorization: `Bearer ${key.key}`, "content-type": "application/json" },
      body: JSON.stringify({
        model: "openai/gpt-4o",
        stream: false,
        messages: [{ role: "user", content: "synthetic" }],
      }),
    });
  const first = await POST(request());
  assert.equal(first.status, 200, await first.clone().text());
  await first.text();
  await new Promise((resolve) => setImmediate(resolve));
  // Preserve legacy cold-window behavior: history is seeded before its recorder
  // increment. System One's opt-in aliases must not change this chat behavior.
  assert.deepEqual(
    limits.map((limit) => getWindowUsage(limit)),
    [20, 20, 20, 0]
  );
  const status = await getApiKeyUsageLimitStatus({
    id: key.id,
    usageLimitEnabled: true,
    dailyUsageLimitUsd: 1,
  });
  assert.equal(status.dailySpentUsd, 0.00001);
  const rows = listLedgerEntries(key.id);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].serviceTier, "standard");
  assert.ok(Math.abs(rows[0].amountUsd - 0.00001) < 1e-12);
  const second = await POST(request());
  assert.equal(second.status, 429);
  assert.equal(fetches, 1);
});
