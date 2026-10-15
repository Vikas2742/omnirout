import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

const dir = fs.mkdtempSync(path.join(tmpdir(), "systemone-r3-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "synthetic-r3-secret";
// A concrete calendar reset makes the weekly Retry-After assertion deterministic.
process.env.OMNIROUTE_API_KEY_WEEKLY_WINDOW = "calendar";
process.env.OMNIROUTE_API_KEY_WEEKLY_WINDOW_TIMEZONE = "UTC";
Object.assign(process.env, { NODE_ENV: "test" });
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createProviderConnection } = await import("../../src/lib/db/providers.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { upsertTokenLimit, getWindowUsage } = await import("../../src/lib/db/tokenLimits.ts");
const { recordTokenUsage } = await import("../../open-sse/services/tokenLimitCounter.ts");
const { POST } = await import("../../src/app/api/v1/systemone/route.ts");
const { getApiKeyUsageLimitStatus } = await import("../../src/lib/usage/apiKeyUsageLimits.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
const { spendBatchWriter } = await import("../../src/lib/spend/batchWriter.ts");
const { listLedgerEntries, aggregateLedger } = await import("../../src/lib/db/costLedger.ts");
const { setBudget, checkBudget } = await import("../../src/domain/costRules.ts");
const { upsertKeyQuotaLimits, getKeyQuotaCounters } = await import("../../src/lib/db/keyQuota.ts");
const originalFetch = globalThis.fetch;
let fetches = 0;
let usage = { input_tokens: 7, output_tokens: 3 };
globalThis.fetch = async (url) => {
  assert.equal(String(url), "https://api.typesafe.ai/v1/systemone");
  fetches++;
  return Response.json({ model: "jev-1.13.0", answers: { q: { type: "noul", noul: 0.5 } }, usage });
};
await createProviderConnection({
  provider: "typesafe",
  name: "synthetic-r3",
  authType: "apikey",
  apiKey: "synthetic-r3-upstream",
  isActive: true,
  testStatus: "active",
});
test.after(async () => {
  globalThis.fetch = originalFetch;
  await waitForCallLogSaves(10000);
  spendBatchWriter.flush();
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});
const request = (key: string, model = "typesafe/jev-latest") =>
  new Request("http://synthetic.invalid/v1/systemone", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      model,
      state: "synthetic",
      questions: { q: { type: "noul", instructions: "Evaluate" } },
    }),
  });
async function native429(response: Response, errorType = "token_limit_exceeded") {
  assert.equal(response.status, 429);
  assert.match(response.headers.get("retry-after") || "", /^\d+$/);
  const body = await response.json();
  assert.equal(body.detail.error_type, errorType);
  assert.equal(typeof body.detail.message, "string");
  assert.equal(body.error, undefined);
}
for (const scope of ["global", "provider", "model"] as const) {
  test(`real POST direct ${scope} cap rejects after success overshoots allowance`, async () => {
    usage = { input_tokens: 7, output_tokens: 3 };
    const key = await keys.createApiKey(`r3-direct-${scope}`, "synthetic");
    const limit = upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: scope,
      scopeValue: scope === "provider" ? "typesafe" : scope === "model" ? "jev-latest" : "",
      tokenLimit: 9,
    });
    const before = fetches;
    assert.equal((await POST(request(key.key))).status, 200);
    assert.equal(getWindowUsage(limit), 10);
    await native429(await POST(request(key.key)));
    assert.equal(fetches - before, 1);
  });
}
for (const combo of [false, true]) {
  test(`real POST qualified 7+3 token success blocks next ${combo ? "combo" : "direct"}`, async () => {
    usage = { input_tokens: 7, output_tokens: 3 };
    const key = await keys.createApiKey(`r3-qualified-${combo}`, "synthetic");
    const limit = upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "typesafe/jev-latest",
      tokenLimit: 10,
    });
    const model = `r3-qualified-${combo}`;
    if (combo)
      await createCombo({
        name: model,
        strategy: "priority",
        models: ["typesafe/jev-latest"],
        config: { maxRetries: 0 },
      });
    const before = fetches;
    assert.equal((await POST(request(key.key))).status, 200);
    assert.equal(getWindowUsage(limit), 10);
    await native429(await POST(request(key.key, combo ? model : undefined)));
    assert.equal(fetches - before, 1);
  });
}
test("real POST advances global/provider/bare/qualified exactly once; legacy chat recorder stays bare-only", async () => {
  usage = { input_tokens: 7, output_tokens: 3 };
  const key = await keys.createApiKey("r3-deduplicate", "synthetic");
  const limits = [
    upsertTokenLimit({ apiKeyId: key.id, scopeType: "global", tokenLimit: 20 }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "provider",
      scopeValue: "typesafe",
      tokenLimit: 20,
    }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "jev-latest",
      tokenLimit: 20,
    }),
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "typesafe/jev-latest",
      tokenLimit: 20,
    }),
  ];
  const before = fetches;
  assert.equal((await POST(request(key.key))).status, 200);
  assert.deepEqual(
    limits.map((limit) => getWindowUsage(limit)),
    [10, 10, 10, 10]
  );
  // The four-argument signature used by chat must NOT opt into qualified matching.
  recordTokenUsage(key.id, "typesafe", "jev-latest", 10);
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(
    limits.map((limit) => getWindowUsage(limit)),
    [20, 20, 20, 10]
  );
  await native429(await POST(request(key.key)));
  assert.equal(fetches - before, 1);
});
for (const period of ["daily", "weekly"] as const) {
  test(`real POST $0.042 spend exhausts independent ${period} $0.01 usage limit`, async () => {
    usage = { input_tokens: 1000000, output_tokens: 0 };
    const key = await keys.createApiKey(`r3-usd-${period}`, "synthetic");
    const permissions = {
      usageLimitEnabled: true,
      dailyUsageLimitUsd: period === "daily" ? 0.01 : null,
      weeklyUsageLimitUsd: period === "weekly" ? 0.01 : null,
    };
    await keys.updateApiKeyPermissions(key.id, permissions);
    const before = fetches;
    const first = await POST(request(key.key));
    assert.equal(first.status, 200);
    assert.equal(Number(first.headers.get("x-omniroute-response-cost")), 0.042);
    const status = await getApiKeyUsageLimitStatus({ id: key.id, ...permissions });
    assert.equal(period === "daily" ? status.dailySpentUsd : status.weeklySpentUsd, 0.042);
    const rows = listLedgerEntries(key.id);
    assert.equal(rows.length, 1);
    assert.equal(rows[0].serviceTier, "systemone");
    assert.equal(rows[0].amountUsd, 0.042);
    const history = core
      .getDbInstance()
      .prepare("SELECT COUNT(*) AS n FROM usage_history WHERE api_key_id = ?")
      .get(key.id) as { n: number };
    assert.equal(history.n, 0);
    await native429(await POST(request(key.key)), "rate_limit_error");
    assert.equal(fetches - before, 1);
  });
}
test("real POST spend remains once in ledger, metered budget and monthly quota; dollar rejection retains reset hint", async () => {
  usage = { input_tokens: 1000000, output_tokens: 0 };
  const key = await keys.createApiKey("r3-dollar-reset", "synthetic");
  setBudget(key.id, { dailyLimitUsd: 0.01 });
  upsertKeyQuotaLimits(key.id, { monthlyAmountUsd: 0.01 });
  const before = fetches;
  assert.equal((await POST(request(key.key))).status, 200);
  assert.equal(checkBudget(key.id).periodUsed, 0.042);
  assert.equal(aggregateLedger(key.id, "2000-01-01T00:00:00.000Z").amountUsd, 0.042);
  assert.equal(getKeyQuotaCounters(key.id).monthlyAmountUsd, 0.042);
  // Remove monthly quota so the rejection exercises the dollar candidate gate.
  upsertKeyQuotaLimits(key.id, { monthlyAmountUsd: 0 });
  await createCombo({
    name: "r3-dollar-reset",
    strategy: "priority",
    models: ["typesafe/jev-latest"],
    config: { maxRetries: 0 },
  });
  await native429(await POST(request(key.key, "r3-dollar-reset")), "rate_limit_error");
  assert.equal(fetches - before, 1);
});
