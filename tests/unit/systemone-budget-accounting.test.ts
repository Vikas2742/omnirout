import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { ComboLike } from "../../open-sse/services/combo/types.ts";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "systemone-budget-accounting-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-budget-accounting-secret";
Object.assign(process.env, { NODE_ENV: "test" });
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { upsertTokenLimit } = await import("../../src/lib/db/tokenLimits.ts");
const { upsertKeyQuotaLimits, getKeyQuotaCounters } = await import("../../src/lib/db/keyQuota.ts");
const { recordKeyQuotaUsage } = await import("../../src/domain/keyQuota.ts");
const { addWindowTokens, checkTokenLimits } =
  await import("../../open-sse/services/tokenLimitCounter.ts");
const { createSystemOnePost } = await import("../../src/app/api/v1/_shared/systemoneRoutes.ts");
const { handleSystemOneProxy } = await import("../../open-sse/handlers/systemone.ts");
const { resolveSystemOneModel } = await import("../../open-sse/config/systemoneRegistry.ts");

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});
const input = { state: "synthetic", questions: { q: { type: "noul", instructions: "Evaluate" } } };
const native = {
  model: "jev-1.13.0",
  answers: { q: { type: "noul", noul: 0.6 } },
  usage: { input_tokens: 7, output_tokens: 3 },
};
const request = (model: string, key: string) =>
  new Request("http://synthetic.invalid/v1/systemone", {
    method: "POST",
    headers: { authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, ...input }),
  });

for (const scope of ["provider", "model"] as const) {
  test(`combo skips exhausted resolved ${scope} without selecting its credential`, async () => {
    const name = `skip-${scope}`;
    const key = await keys.createApiKey(name, "synthetic-machine");
    const limit = upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: scope,
      scopeValue: scope === "provider" ? "typesafe" : "jev-latest",
      tokenLimit: 10,
    });
    addWindowTokens(limit, 10);
    const combo = await createCombo({
      name,
      strategy: "priority",
      models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
      config: { maxRetries: 0 },
    });
    const selected: string[] = [];
    const post = createSystemOnePost({
      resolveAlias: async (id) => id,
      getCombo: async () => combo as unknown as ComboLike,
      getCombos: async () => [],
      getSettings: () => ({}),
      getCredentials: async (provider) => {
        selected.push(provider);
        return { apiKey: "synthetic" };
      },
      clearRecovered: async () => {},
      proxy: async () => Response.json(native),
    });
    assert.equal((await post(request(name, key.key))).status, 200);
    assert.deepEqual(selected, ["cloudflare-ai"]);
  });
}

test("all token-rejected members preserve native 429 and Retry-After", async () => {
  const key = await keys.createApiKey("all-denied", "synthetic-machine");
  const limit = upsertTokenLimit({
    apiKeyId: key.id,
    scopeType: "provider",
    scopeValue: "typesafe",
    tokenLimit: 10,
  });
  addWindowTokens(limit, 10);
  const combo = await createCombo({
    name: "all-denied",
    strategy: "priority",
    models: ["typesafe/jev-latest", "typesafe/jev-preview"],
    config: { maxRetries: 0 },
  });
  const post = createSystemOnePost({
    getCombo: async () => combo as unknown as ComboLike,
    getCombos: async () => [],
    getSettings: () => ({}),
    getCredentials: async () => assert.fail("must reject before credential selection"),
  });
  const response = await post(request(String(combo.name), key.key));
  assert.equal(response.status, 429);
  assert.match(response.headers.get("retry-after") || "", /^\d+$/);
  const body = await response.json();
  assert.equal(body.detail.error_type, "token_limit_exceeded");
  assert.match(body.detail.message, /Token limit exceeded/);
  assert.equal(body.error, undefined);
});

test("combo rechecks key quota consumed during an earlier failed member", async () => {
  const key = await keys.createApiKey("midflight-quota", "synthetic-machine");
  upsertKeyQuotaLimits(key.id, { tpmLimit: 10 });
  const combo = await createCombo({
    name: "midflight-quota",
    strategy: "priority",
    models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
    config: { maxRetries: 0 },
  });
  let attempts = 0;
  const post = createSystemOnePost({
    getCombo: async () => combo as unknown as ComboLike,
    getCombos: async () => [],
    getSettings: () => ({}),
    getCredentials: async () => ({ apiKey: "synthetic" }),
    proxy: async () => {
      attempts++;
      recordKeyQuotaUsage(key.id, 10);
      return Response.json(
        { detail: { error_type: "server_error", message: "synthetic" } },
        { status: 503 }
      );
    },
  });
  assert.equal((await post(request(String(combo.name), key.key))).status, 429);
  assert.equal(attempts, 1);
});

test("fresh global cap rejects the request after a 10-token success with native token error", async () => {
  const key = await keys.createApiKey("global-native-error", "synthetic-machine");
  upsertTokenLimit({ apiKeyId: key.id, scopeType: "global", tokenLimit: 10 });
  let fetches = 0;
  const post = createSystemOnePost({
    getCombo: async () => null,
    getCredentials: async () => ({ apiKey: "synthetic" }),
    clearRecovered: async () => {},
    proxy: async (options) =>
      handleSystemOneProxy({
        ...options,
        fetchImpl: async () => {
          fetches++;
          return Response.json(native);
        },
        saveCallLogImpl: async () => {},
        recordCostImpl: () => {},
        calculateCostImpl: async () => ({ priced: false, costUsd: 0 }),
      }),
  });
  assert.equal((await post(request("typesafe/jev-latest", key.key))).status, 200);
  await new Promise((resolve) => setImmediate(resolve));
  const response = await post(request("typesafe/jev-latest", key.key));
  assert.equal(response.status, 429);
  assert.equal((await response.json()).detail.error_type, "token_limit_exceeded");
  assert.match(response.headers.get("retry-after") || "", /^\d+$/);
  assert.equal(fetches, 1);
});

test("success records input plus output once; failed and pre-aborted attempts record nothing", async () => {
  const key = await keys.createApiKey("accounting", "synthetic-machine");
  for (const scope of ["global", "provider", "model"] as const) {
    upsertTokenLimit({
      apiKeyId: key.id,
      scopeType: scope,
      scopeValue: scope === "provider" ? "typesafe" : scope === "model" ? "jev-latest" : "",
      tokenLimit: 10,
    });
  }
  upsertKeyQuotaLimits(key.id, { tpmLimit: 10, rpmLimit: 1 });
  const options = {
    target: resolveSystemOneModel("typesafe/jev-latest")!,
    body: input,
    credentials: { apiKey: "synthetic" },
    apiKeyId: key.id,
    saveCallLogImpl: async () => {},
    recordCostImpl: () => {},
    calculateCostImpl: async () => ({ priced: false, costUsd: 0 }),
  };
  assert.equal(
    (
      await handleSystemOneProxy({
        ...options,
        fetchImpl: async () =>
          Response.json(
            { detail: { error_type: "server_error", message: "synthetic" } },
            { status: 503 }
          ),
      })
    ).status,
    503
  );
  const controller = new AbortController();
  controller.abort();
  assert.equal(
    (
      await handleSystemOneProxy({
        ...options,
        signal: controller.signal,
        fetchImpl: async () => assert.fail("pre-abort must not fetch"),
      })
    ).status,
    499
  );
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(checkTokenLimits(key.id, "typesafe", "jev-latest"), null);
  assert.equal(getKeyQuotaCounters(key.id).rpmUsed, 0);
  assert.equal(getKeyQuotaCounters(key.id).tpmUsed, 0);
  assert.equal(
    (await handleSystemOneProxy({ ...options, fetchImpl: async () => Response.json(native) }))
      .status,
    200
  );
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(checkTokenLimits(key.id, "typesafe", "jev-latest")?.tokensUsed, 10);
  assert.equal(getKeyQuotaCounters(key.id).tpmUsed, 10);
  assert.equal(getKeyQuotaCounters(key.id).rpmUsed, 1);
});
