import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
const dir = fs.mkdtempSync(path.join(process.env.TMPDIR!, "real-post-review-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "synthetic-independent-real-post-secret";
Object.assign(process.env, { NODE_ENV: "test" });
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const providers = await import("../../src/lib/db/providers.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { upsertTokenLimit, getWindowUsage } = await import("../../src/lib/db/tokenLimits.ts");
const { POST } = await import("../../src/app/api/v1/systemone/route.ts");
const { getApiKeyUsageLimitStatus } = await import("../../src/lib/usage/apiKeyUsageLimits.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
const { spendBatchWriter } = await import("../../src/lib/spend/batchWriter.ts");
const originalFetch = globalThis.fetch;
let fetches = 0;
globalThis.fetch = async (url) => {
  assert.equal(String(url), "https://api.typesafe.ai/v1/systemone");
  fetches++;
  return Response.json({
    model: "jev-1.13.0",
    answers: { q: { type: "noul", noul: 0.5 } },
    usage: { input_tokens: 1000000, output_tokens: 0 },
  });
};
await providers.createProviderConnection({
  provider: "typesafe",
  name: "synthetic-independent",
  authType: "apikey",
  apiKey: "synthetic-provider-token",
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
const request = (model: string, key: string) =>
  new Request("http://review.invalid/v1/systemone", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      model,
      state: "synthetic",
      questions: { q: { type: "noul", instructions: "Evaluate" } },
    }),
  });
for (const comboMode of [false, true]) {
  test(`real exported POST enforces fresh qualified model cap (${comboMode ? "combo" : "direct"})`, async () => {
    const key = await keys.createApiKey(`real-qualified-${comboMode}`, "synthetic");
    const limit = upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: "model",
      scopeValue: "typesafe/jev-latest",
      tokenLimit: 1000000,
    });
    const model = comboMode ? `real-qualified-${comboMode}` : "typesafe/jev-latest";
    if (comboMode)
      await createCombo({
        name: model,
        strategy: "priority",
        models: ["typesafe/jev-latest"],
        config: { maxRetries: 0 },
      });
    const before = fetches;
    assert.equal((await POST(request(model, key.key))).status, 200);
    const second = await POST(request(model, key.key));
    console.log(
      "REAL_QUALIFIED",
      JSON.stringify({
        comboMode,
        secondStatus: second.status,
        windowUsage: getWindowUsage(limit),
        fetches: fetches - before,
      })
    );
    assert.equal(second.status, 429);
  });
}
for (const scope of ["provider", "model"] as const) {
  test(`real exported POST must enforce its own advanced ${scope} counter on direct dispatch`, async () => {
    const key = await keys.createApiKey(`real-direct-${scope}`, "synthetic");
    const limit = upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: scope,
      scopeValue: scope === "provider" ? "typesafe" : "jev-latest",
      tokenLimit: 1000000,
    });
    const before = fetches;
    assert.equal((await POST(request("typesafe/jev-latest", key.key))).status, 200);
    const afterFirst = getWindowUsage(limit);
    const second = await POST(request("typesafe/jev-latest", key.key));
    console.log(
      "REAL_DIRECT_RESOLVED",
      JSON.stringify({
        scope,
        afterFirst,
        secondStatus: second.status,
        afterSecond: getWindowUsage(limit),
        fetches: fetches - before,
      })
    );
    assert.equal(afterFirst, 1000000);
    assert.equal(second.status, 429);
  });
}
test("control: real POST global cap advances once and prevents a second fetch", async () => {
  const key = await keys.createApiKey("real-global-control", "synthetic");
  const limit = upsertTokenLimit({ apiKeyId: key.id, scopeType: "global", tokenLimit: 1000000 });
  const before = fetches;
  assert.equal((await POST(request("typesafe/jev-latest", key.key))).status, 200);
  await new Promise((resolve) => setImmediate(resolve));
  await waitForCallLogSaves(10000);
  const second = await POST(request("typesafe/jev-latest", key.key));
  const db = core.getDbInstance();
  const ledger = db
    .prepare("SELECT COUNT(*) AS n FROM request_cost_ledger WHERE api_key_id = ?")
    .get(key.id) as { n: number };
  const logs = db
    .prepare("SELECT COUNT(*) AS n FROM call_logs WHERE api_key_id = ?")
    .get(key.id) as { n: number };
  console.log(
    "REAL_GLOBAL_CONTROL",
    JSON.stringify({
      secondStatus: second.status,
      windowUsage: getWindowUsage(limit),
      fetches: fetches - before,
      ledger,
      logs,
    })
  );
  assert.equal(second.status, 429);
  assert.equal(getWindowUsage(limit), 1000000);
  assert.equal(fetches - before, 1);
  assert.equal(ledger.n, 1);
  assert.equal(logs.n, 1);
});
test("real exported POST records spend used by API-key daily/weekly USD usage limits", async () => {
  const key = await keys.createApiKey("real-usd-usage", "synthetic");
  await keys.updateApiKeyPermissions(key.id, {
    usageLimitEnabled: true,
    dailyUsageLimitUsd: 0.01,
    weeklyUsageLimitUsd: 0.01,
  });
  const before = fetches;
  const first = await POST(request("typesafe/jev-latest", key.key));
  assert.equal(first.status, 200);
  assert.ok(
    Number(first.headers.get("x-omniroute-response-cost")) > 0.01,
    "response must show actual cost exceeding limit"
  );
  await new Promise((resolve) => setImmediate(resolve));
  await waitForCallLogSaves(10000);
  const status = await getApiKeyUsageLimitStatus({
    id: key.id,
    usageLimitEnabled: true,
    dailyUsageLimitUsd: 0.01,
    weeklyUsageLimitUsd: 0.01,
  });
  const db = core.getDbInstance();
  const history = db
    .prepare("SELECT COUNT(*) AS n FROM usage_history WHERE api_key_id = ?")
    .get(key.id);
  const ledger = db
    .prepare(
      "SELECT COUNT(*) AS n, SUM(amount_usd) AS amount FROM request_cost_ledger WHERE api_key_id = ?"
    )
    .get(key.id);
  const logs = db.prepare("SELECT COUNT(*) AS n FROM call_logs WHERE api_key_id = ?").get(key.id);
  const second = await POST(request("typesafe/jev-latest", key.key));
  console.log(
    "REAL_USD_USAGE",
    JSON.stringify({
      firstCost: first.headers.get("x-omniroute-response-cost"),
      status,
      history,
      ledger,
      logs,
      secondStatus: second.status,
      fetches: fetches - before,
    })
  );
  assert.equal(second.status, 429, "daily/weekly API-key USD cap must stop more paid inference");
});
