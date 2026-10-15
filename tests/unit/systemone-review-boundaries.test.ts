import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
const dataDir = fs.mkdtempSync(
  path.join(process.env.TMPDIR || process.cwd(), ".review-systemone-")
);
process.env.DATA_DIR = dataDir;
Object.assign(process.env, { NODE_ENV: "test" });
process.env.API_KEY_SECRET = "review-synthetic-secret";
const core = await import("../../src/lib/db/core.ts");
const providers = await import("../../src/lib/db/providers.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const auth = await import("../../src/sse/services/auth.ts");
const { createSystemOnePost } = await import("../../src/app/api/v1/_shared/systemoneRoutes.ts");
const { enforceSystemOnePolicy } = await import("../../src/app/api/v1/_shared/systemonePolicy.ts");
const { handleSystemOneProxy } = await import("../../open-sse/handlers/systemone.ts");
const { resolveSystemOneModel } = await import("../../open-sse/config/systemoneRegistry.ts");
const { clearAllModelLockouts } = await import("../../open-sse/services/accountFallback.ts");
const native = {
  model: "jev-1.13.0",
  answers: { x: { type: "noul", noul: 0.5 } },
  usage: { input_tokens: 1, output_tokens: 0 },
};
const input = { state: "s", questions: { x: { type: "noul", instructions: "i" } } };
const request = (model: string, key?: string, pathname = "/v1/systemone", signal?: AbortSignal) =>
  new Request(`http://localhost${pathname}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(key ? { authorization: `Bearer ${key}` } : {}),
    },
    body: JSON.stringify({ model, ...input }),
    signal,
  });
const defaults = {
  resolveAlias: async (id: string) => id,
  enforcePolicy: async () => ({ rejection: null, apiKeyInfo: null }),
  getCredentials: async () => ({ apiKey: "synthetic-token" }),
  clearRecovered: async () => {},
  getCombos: async () => [],
  getSettings: () => ({}),
};
test.after(() => {
  clearAllModelLockouts();
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test("local per-target timeout must fall over rather than latch a caller-aborted 499", async () => {
  const seen: string[] = [];
  const post = createSystemOnePost({
    ...defaults,
    getCombo: async () => ({
      name: "deadline",
      strategy: "priority",
      models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
      config: { maxRetries: 0, targetTimeoutMs: 30 },
    }),
    proxy: async (options) => {
      seen.push(options.target.provider);
      return handleSystemOneProxy({
        ...options,
        saveCallLogImpl: async () => {},
        calculateCostImpl: async () => ({ priced: false, costUsd: 0 }),
        fetchImpl: async (_url, init) => {
          if (options.target.provider === "typesafe")
            return new Promise<Response>((_resolve, reject) => {
              init!.signal!.addEventListener("abort", () => reject(init!.signal!.reason), {
                once: true,
              });
            });
          return Response.json({ success: true, result: native });
        },
        credentials: {
          ...options.credentials,
          providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
        },
      });
    },
  });
  const response = await post(request("deadline"));
  assert.equal(response.status, 200, JSON.stringify({ seen, body: await response.clone().json() }));
  assert.deepEqual(seen, ["typesafe", "cloudflare-ai"]);
});

test("model policy rejection must have TypeSafe detail envelope", async () => {
  const key = await keys.createApiKey("restricted", "review-machine", [], {
    modelAccessMode: "restricted",
    allowedModels: ["typesafe/jev-preview"],
  });
  const result = await enforceSystemOnePolicy(
    request("typesafe/jev-latest", key.key),
    "typesafe/jev-latest"
  );
  assert.equal(result.rejection?.status, 403);
  const body = await result.rejection!.json();
  assert.ok(body.detail?.error_type && body.detail?.message, JSON.stringify(body));
});

test("a chat-only key must not use the case-insensitive V1 rewrite to bypass endpoint policy", async () => {
  const key = await keys.createApiKey("chat only", "review-machine");
  await keys.updateApiKeyPermissions(key.id, { allowedEndpoints: ["chat"] });
  const post = createSystemOnePost({
    ...defaults,
    getCombo: async () => null,
    enforcePolicy: enforceSystemOnePolicy,
    proxy: async () => Response.json(native),
  });
  assert.equal((await post(request("typesafe/jev-latest", key.key))).status, 403);
  const response = await post(request("typesafe/jev-latest", key.key, "/V1/systemone"));
  assert.equal(response.status, 403, await response.clone().text());
});

test("an aborted combo before any upstream must still return a TypeSafe-native error", async () => {
  const controller = new AbortController();
  controller.abort();
  const post = createSystemOnePost({
    ...defaults,
    getCombo: async () => ({
      name: "aborted",
      strategy: "priority",
      models: ["typesafe/jev-latest"],
      config: { maxRetries: 0 },
    }),
    proxy: async () => {
      throw new Error("must not fetch");
    },
  });
  const response = await post(request("aborted", undefined, "/v1/systemone", controller.signal));
  assert.equal(response.status, 499);
  const body = await response.json();
  assert.ok(body.detail?.error_type, JSON.stringify(body));
});

test("a pre-aborted request must not log a nonexistent upstream attempt", async () => {
  const controller = new AbortController();
  controller.abort();
  let fetches = 0;
  const logs: unknown[] = [];
  const response = await handleSystemOneProxy({
    target: resolveSystemOneModel("typesafe/jev-latest")!,
    body: input,
    credentials: { apiKey: "synthetic-key" },
    signal: controller.signal,
    saveCallLogImpl: async (row) => {
      logs.push(row);
    },
    fetchImpl: async () => {
      fetches++;
      return Response.json(native);
    },
  });
  assert.equal(response.status, 499);
  assert.equal(fetches, 0);
  assert.equal(logs.length, 0, "no real upstream fetch was attempted");
});

test("policy allows optional-key mode and rejects missing/unknown keys when required", async () => {
  const settings = await import("../../src/lib/db/settings.ts");
  await settings.updateSettings({ requireApiKey: false });
  const old = process.env.REQUIRE_API_KEY;
  delete process.env.REQUIRE_API_KEY;
  try {
    assert.equal(
      (await enforceSystemOnePolicy(request("typesafe/jev-latest"), "typesafe/jev-latest"))
        .rejection,
      null
    );
    assert.equal(
      (
        await enforceSystemOnePolicy(
          request("typesafe/jev-latest", "unknown-synthetic-key"),
          "typesafe/jev-latest"
        )
      ).rejection?.status,
      401
    );
    await settings.updateSettings({ requireApiKey: true });
    assert.equal(
      (await enforceSystemOnePolicy(request("typesafe/jev-latest"), "typesafe/jev-latest"))
        .rejection?.status,
      401
    );
    const key = await keys.createApiKey("valid", "review-machine");
    assert.equal(
      (await enforceSystemOnePolicy(request("typesafe/jev-latest", key.key), "typesafe/jev-latest"))
        .rejection,
      null
    );
  } finally {
    await settings.updateSettings({ requireApiKey: false });
    if (old === undefined) delete process.env.REQUIRE_API_KEY;
    else process.env.REQUIRE_API_KEY = old;
  }
});

test("B2: native policy normalization preserves status and Retry-After", async () => {
  const { systemOnePolicyRejection } =
    await import("../../src/app/api/v1/_shared/systemonePolicy.ts");
  for (const status of [401, 403, 429]) {
    const result = await systemOnePolicyRejection(
      Response.json(
        { error: { message: "Synthetic policy denial" } },
        { status, headers: { "Retry-After": "60" } }
      )
    );
    assert.equal(result!.status, status);
    assert.equal(result!.headers.get("retry-after"), "60");
    assert.deepEqual(await result!.json(), {
      detail: {
        error_type: status === 429 ? "rate_limit_error" : "authentication_error",
        message: "Synthetic policy denial",
      },
    });
  }
});

test("B3: combo checks each model but consumes exactly one request, including skipped members", async () => {
  const { createCombo } = await import("../../src/lib/db/combos.ts");
  await createCombo({
    name: "restricted-r1",
    strategy: "priority",
    models: ["cloudflare-ai/jev", "typesafe/jev-latest"],
    config: { maxRetries: 0 },
  });
  const key = await keys.createApiKey("restricted-r1", "synthetic-machine", [], {
    modelAccessMode: "restricted",
    allowedModels: ["typesafe/jev-latest"],
  });
  await keys.updateApiKeyPermissions(key.id, { rateLimits: [{ limit: 1, window: 60 }] });
  const seen: string[] = [];
  const post = createSystemOnePost({
    ...defaults,
    enforcePolicy: enforceSystemOnePolicy,
    getCombo: async () => ({
      name: "restricted-r1",
      strategy: "priority",
      models: ["cloudflare-ai/jev", "typesafe/jev-latest"],
      config: { maxRetries: 0 },
    }),
    proxy: async ({ target }) => {
      seen.push(target.provider);
      return Response.json(native);
    },
  });
  assert.equal((await post(request("restricted-r1", key.key))).status, 200);
  assert.deepEqual(seen, ["typesafe"], "the denied Cloudflare member must not dispatch");
  const second = await post(request("restricted-r1", key.key));
  assert.equal(second.status, 429);
  assert.ok(second.headers.get("retry-after"));
  assert.equal((await second.json()).detail.error_type, "rate_limit_error");
  assert.deepEqual(seen, ["typesafe"], "next client request must be limited before dispatch");
});

test("real exact-model lock is consulted on next System One selection, not clef or chat", async () => {
  const connection = (await providers.createProviderConnection({
    provider: "cloudflare-ai",
    name: "review cf",
    authType: "apikey",
    apiKey: "synthetic-key",
    isActive: true,
    testStatus: "active",
    providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
  })) as { id: string };
  const response = await handleSystemOneProxy({
    target: resolveSystemOneModel("cf/jev")!,
    body: input,
    credentials: {
      apiKey: "synthetic-key",
      connectionId: connection.id,
      providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
    },
    resolveProxyImpl: async () => ({ proxy: null }),
    saveCallLogImpl: async () => {},
    fetchImpl: async () =>
      Response.json(
        { success: false, errors: [{ code: 7003, message: "rate limited" }] },
        { status: 429, headers: { "retry-after": "60" } }
      ),
  });
  assert.equal(response.status, 429);
  const jev = await auth.getProviderCredentialsWithQuotaPreflight(
    "cloudflare-ai",
    null,
    [connection.id],
    "jev"
  );
  assert.ok(jev && "allRateLimited" in jev && jev.allRateLimited, JSON.stringify(jev));
  for (const model of ["clef", "@cf/meta/synthetic-chat"]) {
    const credentials = await auth.getProviderCredentialsWithQuotaPreflight(
      "cloudflare-ai",
      null,
      [connection.id],
      model
    );
    assert.ok(
      credentials && "apiKey" in credentials && credentials.apiKey,
      `not available: ${model}`
    );
  }
});
