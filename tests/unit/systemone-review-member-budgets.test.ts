import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
process.env.API_KEY_SECRET = "synthetic-review-secret";
Object.assign(process.env, { NODE_ENV: "test" });
process.env.DATA_DIR = fs.mkdtempSync(process.env.TMPDIR! + "/independent-policy-");
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const combos = await import("../../src/lib/db/combos.ts");
const { createSystemOnePost } = await import("../../src/app/api/v1/_shared/systemoneRoutes.ts");
const { enforceSystemOnePolicy } = await import("../../src/app/api/v1/_shared/systemonePolicy.ts");

const { setBudget, recordCost, checkBudget } = await import("../../src/domain/costRules.ts");
const { upsertTokenLimit } = await import("../../src/lib/db/tokenLimits.ts");
const { addWindowTokens } = await import("../../open-sse/services/tokenLimitCounter.ts");

const input = {
  state: { text: "review" },
  questions: { q: { type: "noul", instructions: "Evaluate" } },
};
const native = {
  model: "jev-1.13.0",
  answers: { q: { type: "noul", noul: 0.7 } },
  usage: { input_tokens: 10, output_tokens: 0 },
};
const request = (model: string, key?: string, pathname = "/v1/systemone", signal?: AbortSignal) =>
  new Request("http://review.invalid" + pathname, {
    method: "POST",
    headers: key ? { authorization: "Bearer " + key } : undefined,
    body: JSON.stringify({ model, ...input }),
    signal,
  });
const creds = {
  apiKey: "review-synthetic",
  providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
};
const overrides = {
  resolveAlias: async (id: string) => id,
  getCredentials: async () => creds,
  clearRecovered: async () => {},
  getSettings: () => ({}),
  getCombos: async () => [],
  enforcePolicy: async () => ({ apiKeyInfo: null, rejection: null }),
};
const combo = (name: string, models = ["typesafe/jev-latest", "cloudflare-ai/jev"]) => ({
  name,
  strategy: "priority",
  models,
  config: { maxRetries: 0, targetTimeoutMs: 1000 },
});
const oldFetch = globalThis.fetch;
test.after(() => {
  globalThis.fetch = oldFetch;
  core.resetDbInstance();
  fs.rmSync(process.env.DATA_DIR!, { recursive: true, force: true });
});
test("budget already exhausted before combo is rejected", async () => {
  const name = "initial-budget";
  const c = combo(name);
  await combos.createCombo(c);
  const key = await keys.createApiKey(name, "synthetic");
  setBudget(key.id, { dailyLimitUsd: 0.01 });
  recordCost(key.id, 0.02);
  assert.equal(checkBudget(key.id).allowed, false);
  const post = createSystemOnePost({
    ...overrides,
    enforcePolicy: enforceSystemOnePolicy,
    getCombo: async () => c,
    proxy: async () => {
      assert.fail("budget must reject");
    },
  });
  assert.equal((await post(request(name, key.key))).status, 429);
});
test("each member rechecks dollar budget consumed while earlier member was running", async () => {
  const name = "midflight-budget";
  const c = combo(name);
  await combos.createCombo(c);
  const key = await keys.createApiKey(name, "synthetic");
  setBudget(key.id, { dailyLimitUsd: 0.01 });
  const seen: string[] = [];
  const post = createSystemOnePost({
    ...overrides,
    enforcePolicy: enforceSystemOnePolicy,
    getCombo: async () => c,
    proxy: async ({ target }) => {
      seen.push(target.provider);
      if (target.provider === "typesafe") {
        recordCost(key.id, 0.02);
        assert.equal(checkBudget(key.id).allowed, false);
        return Response.json(
          { detail: { error_type: "server_error", message: "synthetic failure" } },
          { status: 503 }
        );
      }
      return Response.json(native);
    },
  });
  const r = await post(request(name, key.key));
  console.log(
    "BUDGET_PROBE",
    JSON.stringify({ status: r.status, seen, budget: checkBudget(key.id) })
  );
  assert.equal(r.status, 429, "spent key must not dispatch paid fallback");
  assert.deepEqual(seen, ["typesafe"]);
});
test("combo must not bypass an exhausted model token budget that blocks direct dispatch", async () => {
  const name = "token-budget";
  const c = combo(name, ["typesafe/jev-latest"]);
  await combos.createCombo(c);
  const key = await keys.createApiKey(name, "synthetic");
  const limit = upsertTokenLimit({
    apiKeyId: key.id,
    scopeType: "model",
    scopeValue: "typesafe/jev-latest",
    tokenLimit: 10,
  });
  addWindowTokens(limit, 10);
  const direct = await enforceSystemOnePolicy(
    request("typesafe/jev-latest", key.key),
    "typesafe/jev-latest"
  );
  assert.equal(direct.rejection?.status, 429);
  let dispatched = 0;
  const post = createSystemOnePost({
    ...overrides,
    enforcePolicy: enforceSystemOnePolicy,
    getCombo: async () => c,
    proxy: async () => {
      dispatched++;
      return Response.json(native);
    },
  });
  const r = await post(request(name, key.key));
  console.log(
    "TOKEN_PROBE",
    JSON.stringify({ direct: direct.rejection?.status, combo: r.status, dispatched })
  );
  assert.equal(r.status, 429, "combo must enforce resolved member token limits");
  assert.equal(dispatched, 0);
});
