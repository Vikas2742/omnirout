// Ported reviewer assertions are unchanged; setup uses real POST accumulation instead of seeded counters.
import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
const dir = fs.mkdtempSync(path.join(tmpdir(), "independent-budget-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "independent-synthetic-secret";
Object.assign(process.env, { NODE_ENV: "test" });
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createProviderConnection } = await import("../../src/lib/db/providers.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { upsertTokenLimit, getWindowUsage } = await import("../../src/lib/db/tokenLimits.ts");
const { checkTokenLimits } = await import("../../open-sse/services/tokenLimitCounter.ts");
const { POST } = await import("../../src/app/api/v1/systemone/route.ts");
const { setBudget } = await import("../../src/domain/costRules.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
const { spendBatchWriter } = await import("../../src/lib/spend/batchWriter.ts");
const originalFetch = globalThis.fetch;
let fetches = 0;
let inputTokens = 7;
globalThis.fetch = async (url) => {
  assert.equal(String(url), "https://api.typesafe.ai/v1/systemone");
  fetches++;
  return Response.json({ ...native, usage: { input_tokens: inputTokens, output_tokens: 3 } });
};
await createProviderConnection({
  provider: "typesafe",
  name: "synthetic-review-budget",
  authType: "apikey",
  apiKey: "synthetic-upstream",
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
const body = { state: "synthetic", questions: { q: { type: "noul", instructions: "Evaluate" } } };
const native = {
  model: "jev-1.13.0",
  answers: { q: { type: "noul", noul: 0.5 } },
  usage: { input_tokens: 7, output_tokens: 3 },
};
function request(model: string, key: string) {
  return new Request("http://review.invalid/v1/systemone", {
    method: "POST",
    headers: { authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, ...body }),
  });
}
async function harness(name: string, comboMode: boolean) {
  inputTokens = 7;
  const key = await keys.createApiKey(name, "synthetic");
  if (comboMode)
    await createCombo({
      name,
      strategy: "priority",
      models: ["typesafe/jev-latest"],
      config: { maxRetries: 0 },
    });
  let startFetches = fetches,
    startLogs = 0,
    startCosts = 0;
  const counts = () => {
    const db = core.getDbInstance();
    const logs = db
      .prepare("SELECT COUNT(*) AS n FROM call_logs WHERE api_key_id = ?")
      .get(key.id) as { n: number };
    const costs = db
      .prepare("SELECT COUNT(*) AS n FROM request_cost_ledger WHERE api_key_id = ?")
      .get(key.id) as { n: number };
    return {
      fetches: fetches - startFetches,
      logs: logs.n - startLogs,
      costs: costs.n - startCosts,
    };
  };
  return {
    key,
    post: POST,
    model: comboMode ? name : "typesafe/jev-latest",
    counts,
    accumulate: async (tokens = 7) => {
      inputTokens = tokens;
      assert.equal((await POST(request("typesafe/jev-latest", key.key))).status, 200);
      await waitForCallLogSaves(10000);
      const n = counts();
      startFetches = fetches;
      startLogs += n.logs;
      startCosts += n.costs;
      inputTokens = 7;
    },
  };
}
for (const comboMode of [false, true]) {
  test(`fresh qualified model cap must advance and block second ${comboMode ? "combo" : "direct"} request`, async () => {
    const h = await harness(`qualified-${comboMode}`, comboMode);
    const limit = upsertTokenLimit({
      apiKeyId: h.key.id,
      scopeType: "model",
      scopeValue: "typesafe/jev-latest",
      tokenLimit: 10,
    });
    assert.equal((await h.post(request(h.model, h.key.key))).status, 200);
    await waitForCallLogSaves(10000);
    const recorded = getWindowUsage(limit);
    const second = await h.post(request(h.model, h.key.key));
    console.log(
      "QUALIFIED_CAP",
      JSON.stringify({ comboMode, recorded, secondStatus: second.status, ...h.counts() })
    );
    assert.equal(second.status, 429, "10-token success must exhaust the 10-token model cap");
    assert.equal(recorded, 10);
    assert.deepEqual(h.counts(), { fetches: 1, logs: 1, costs: 1 });
  });
}
for (const scope of ["provider", "model"] as const) {
  test(`direct dispatch must reject an exhausted resolved ${scope} cap`, async () => {
    const h = await harness(`direct-${scope}`, false);
    upsertTokenLimit({
      apiKeyId: h.key.id,
      scopeType: scope,
      scopeValue: scope === "provider" ? "typesafe" : "jev-latest",
      tokenLimit: 10,
    });
    await h.accumulate();
    assert.equal(checkTokenLimits(h.key.id, "typesafe", "jev-latest")?.tokensUsed, 10);
    const result = await h.post(request(h.model, h.key.key));
    console.log(
      "DIRECT_RESOLVED_CAP",
      JSON.stringify({ scope, status: result.status, ...h.counts() })
    );
    assert.equal(result.status, 429, "exhausted resolved cap must reject before fetch");
    assert.equal(h.counts().fetches, 0);
  });
}
test("all-dollar-rejected combo must return Retry-After", async () => {
  const h = await harness("dollar-retry-after", true);
  setBudget(h.key.id, { dailyLimitUsd: 0.01 });
  await h.accumulate(1000000);
  const result = await h.post(request(h.model, h.key.key));
  console.log(
    "DOLLAR_REJECTION",
    JSON.stringify({
      status: result.status,
      retryAfter: result.headers.get("retry-after"),
      body: await result.clone().json(),
      ...h.counts(),
    })
  );
  assert.equal(result.status, 429);
  assert.equal(h.counts().fetches, 0);
  assert.match(
    result.headers.get("retry-after") || "",
    /^\d+$/,
    "all policy-rejected members need a usable reset hint"
  );
});
