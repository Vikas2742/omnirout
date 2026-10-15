import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(process.env.TMPDIR || process.cwd(), "systemone-r1-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-r1-secret";
const core = await import("../../src/lib/db/core.ts");
const { createSystemOnePost } = await import("../../src/app/api/v1/_shared/systemoneRoutes.ts");
const { applyComboTargetExhaustion } =
  await import("../../open-sse/services/combo/targetExhaustion.ts");
test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

const input = { state: "s", questions: { x: { type: "noul", instructions: "i" } } };
const native = { model: "jev-1.13.0", answers: {}, usage: { input_tokens: 1, output_tokens: 0 } };
const request = (signal?: AbortSignal) =>
  new Request("http://localhost/v1/systemone", {
    method: "POST",
    body: JSON.stringify({ model: "fallback", ...input }),
    signal,
  });

for (const failure of [
  "missing",
  "expired",
  "limited",
  "denied",
  401,
  402,
  403,
  404,
  408,
  429,
  500,
  502,
  503,
  504,
  499,
  400,
  413,
  422,
] as const) {
  test(`A1: ${failure} ${[400, 413, 422].includes(Number(failure)) ? "stops" : "fails over"} without exhausting the next provider`, async () => {
    const selections: string[] = [];
    const attempts: string[] = [];
    const stop = [400, 413, 422].includes(Number(failure));
    const post = createSystemOnePost({
      resolveAlias: async (id) => id,
      enforcePolicy: async () => ({
        rejection: null,
        apiKeyInfo: failure === "denied" ? { allowedConnections: ["allowed"] } : null,
      }),
      getCombo: async () => ({
        name: "fallback",
        strategy: "priority",
        models:
          failure === "denied"
            ? [
                {
                  kind: "model",
                  provider: "typesafe",
                  model: "jev-latest",
                  connectionId: "denied",
                  id: "first",
                },
                "cloudflare-ai/jev",
              ]
            : ["typesafe/jev-latest", "cloudflare-ai/jev"],
        config: { maxRetries: 0 },
      }),
      getCombos: async () => [],
      getSettings: () => ({}),
      clearRecovered: async () => {},
      getCredentials: async (provider) => {
        selections.push(provider);
        if (provider === "typesafe") {
          if (failure === "missing") return null;
          if (failure === "expired") return { allExpired: true };
          if (failure === "limited") return { allRateLimited: true };
        }
        return { apiKey: "synthetic-token" };
      },
      proxy: async ({ target }) => {
        attempts.push(target.provider);
        return target.provider === "typesafe"
          ? Response.json(
              {
                detail: {
                  error_type:
                    failure === 400 || failure === 422 ? "api_usage_error" : "server_error",
                  message: "synthetic member failure",
                },
              },
              { status: Number(failure) }
            )
          : Response.json(native);
      },
    });
    const response = await post(request());
    assert.equal(response.status, stop ? failure : 200, await response.clone().text());
    if (stop) assert.deepEqual(attempts, ["typesafe"]);
    else assert.equal(attempts.at(-1), "cloudflare-ai");
    assert.equal(selections.includes("cloudflare-ai"), !stop);
  });
}

test("A1: caller abort stops the combo and preserves native 499", async () => {
  const controller = new AbortController();
  let attempts = 0;
  const post = createSystemOnePost({
    enforcePolicy: async () => ({ rejection: null, apiKeyInfo: null }),
    getCombo: async () => ({
      name: "fallback",
      models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
      config: { maxRetries: 0 },
    }),
    getCombos: async () => [],
    getSettings: () => ({}),
    getCredentials: async () => ({ apiKey: "synthetic-token" }),
    proxy: async () => {
      attempts++;
      controller.abort();
      return Response.json(
        { detail: { error_type: "request_aborted", message: "Caller aborted" } },
        { status: 499 }
      );
    },
  });
  const response = await post(request(controller.signal));
  assert.equal(response.status, 499);
  assert.equal((await response.json()).detail.error_type, "request_aborted");
  assert.equal(attempts, 1);
});

for (const status of [401, 403]) {
  test(`A1: #8133 ${status} exhaustion stays on failed provider`, () => {
    const sets = {
      exhaustedProviders: new Set<string>(),
      exhaustedConnections: new Set<string>(),
      transientRateLimitedProviders: new Set<string>(),
    };
    applyComboTargetExhaustion(
      {
        kind: "model",
        stepId: "first",
        executionKey: "first",
        modelStr: "typesafe/jev-latest",
        provider: "typesafe",
        providerId: "typesafe",
        connectionId: null,
        weight: 1,
        label: null,
      },
      {
        result: { status },
        fallbackResult: {},
        errorText: "Invalid credential",
        rawModel: "jev-latest",
        isTokenLimitBreach: false,
        allAccountsRateLimited: false,
        requestScopedFailure: false,
        sets,
        log: { info: () => {}, debug: () => {}, warn: () => {}, error: () => {} },
        tag: "TEST",
        exhaustedLogLevel: "info",
      }
    );
    assert.deepEqual([...sets.exhaustedProviders], ["typesafe"]);
    assert.equal(sets.exhaustedProviders.has("cloudflare-ai"), false);
  });
}
