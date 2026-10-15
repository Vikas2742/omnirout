import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
process.env.API_KEY_SECRET = "synthetic-review-secret";
Object.assign(process.env, { NODE_ENV: "test" });
process.env.DATA_DIR = fs.mkdtempSync(process.env.TMPDIR! + "/native-budget-");
const core = await import("../../src/lib/db/core.ts");
const providers = await import("../../src/lib/db/providers.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { upsertTokenLimit } = await import("../../src/lib/db/tokenLimits.ts");
const { addWindowTokens, checkTokenLimits } =
  await import("../../open-sse/services/tokenLimitCounter.ts");
const { POST } = await import("../../src/app/api/v1/systemone/route.ts");
const { waitForCallLogSaves } = await import("../../src/lib/usage/callLogs.ts");
const native = {
  model: "jev-1.13.0",
  answers: { q: { type: "noul", noul: 0.6 } },
  usage: { input_tokens: 10, output_tokens: 0 },
};
const request = (model: string, key: string) =>
  new Request("http://review.invalid/v1/systemone", {
    method: "POST",
    headers: { authorization: "Bearer " + key },
    body: JSON.stringify({
      model,
      state: "review",
      questions: { q: { type: "noul", instructions: "Evaluate" } },
    }),
  });
const oldFetch = globalThis.fetch;
let dispatches = 0;
globalThis.fetch = async () => {
  dispatches++;
  return Response.json(native);
};
await providers.createProviderConnection({
  provider: "typesafe",
  authType: "apikey",
  apiKey: "synthetic-review-token",
  name: "synthetic-review",
  isActive: true,
  testStatus: "active",
});
test.after(async () => {
  globalThis.fetch = oldFetch;
  await waitForCallLogSaves(10000);
  core.resetDbInstance();
  fs.rmSync(process.env.DATA_DIR!, { recursive: true, force: true });
});
test("native exported POST: exhausted model token budget cannot be bypassed with a one-member combo", async () => {
  const key = await keys.createApiKey("native-model-limit", "synthetic-machine");
  const limit = upsertTokenLimit({
    apiKeyId: key.id,
    scopeType: "model",
    scopeValue: "typesafe/jev-latest",
    tokenLimit: 10,
  });
  addWindowTokens(limit, 10);
  await createCombo({
    name: "native-budget-bypass",
    strategy: "priority",
    models: ["typesafe/jev-latest"],
    config: { maxRetries: 0 },
  });
  const before = dispatches;
  const direct = await POST(request("typesafe/jev-latest", key.key));
  assert.equal(direct.status, 429);
  assert.equal(dispatches, before);
  const combo = await POST(request("native-budget-bypass", key.key));
  console.log(
    "NATIVE_COMBO_BUDGET",
    JSON.stringify({
      direct: direct.status,
      combo: combo.status,
      extraFetches: dispatches - before,
    })
  );
  assert.equal(combo.status, 429, "same exhausted model must be denied through a combo");
  assert.equal(dispatches, before);
});
test("native exported POST: successful System One input tokens debit the global token budget", async () => {
  const key = await keys.createApiKey("native-global-limit", "synthetic-machine");
  upsertTokenLimit({ apiKeyId: key.id, scopeType: "global", tokenLimit: 10 });
  const first = await POST(request("typesafe/jev-latest", key.key));
  assert.equal(first.status, 200);
  await first.text();
  await waitForCallLogSaves(10000);
  await new Promise((resolve) => setImmediate(resolve));
  const breach = checkTokenLimits(key.id, "typesafe", "jev-latest");
  const second = await POST(request("typesafe/jev-latest", key.key));
  console.log(
    "NATIVE_ACCOUNTING",
    JSON.stringify({ first: first.status, second: second.status, breach })
  );
  assert.equal(second.status, 429, "first response consumed all 10 tokens; second must be denied");
  assert.ok(breach);
});
