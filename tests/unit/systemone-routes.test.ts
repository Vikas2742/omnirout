import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";

const dataDir = fs.mkdtempSync(path.join(tmpdir(), ".systemone-route-test-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-route-secret";
const core = await import("../../src/lib/db/core.ts");
const { createSystemOnePost } = await import("../../src/app/api/v1/_shared/systemoneRoutes.ts");
const { v1SystemOneSchema } = await import("../../src/shared/validation/schemas/systemone.ts");
const { buildSystemOneCatalogModels } =
  await import("../../src/app/api/v1/models/catalogSystemOne.ts");
const { isChatSelectableModel } = await import("../../open-sse/services/modelEndpointPolicy.ts");
const { getExecutor } = await import("../../open-sse/executors/index.ts");
const providers = await import("../../src/lib/db/providers.ts");
const auth = await import("../../src/sse/services/auth.ts");
const { handleSystemOneProxy } = await import("../../open-sse/handlers/systemone.ts");
const { resolveSystemOneModel } = await import("../../open-sse/config/systemoneRegistry.ts");
test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});
const body = {
  model: "jev-latest",
  state: "Synthetic",
  questions: { x: { type: "noul", instructions: "Valid?" } },
};
const request = (model = "jev-latest", patch = {}) =>
  new Request("http://localhost/v1/systemone", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...body, model, ...patch }),
  });
const success = {
  model: "jev-1.13.0",
  answers: { x: { type: "noul", noul: 0.9 } },
  usage: { input_tokens: 100, output_tokens: 2 },
};
function setup() {
  const attempts: string[] = [];
  const policies: string[] = [];
  const post = createSystemOnePost({
    resolveAlias: async (id) => (id === "operator-alias" ? "cf/jev" : id),
    enforcePolicy: async (_req, model) => {
      policies.push(model!);
      return model === "typesafe/jev-preview"
        ? {
            rejection: Response.json(
              { detail: { error_type: "api_usage_error", message: "Policy rejected" } },
              { status: 403 }
            ),
            apiKeyInfo: null,
          }
        : { rejection: null, apiKeyInfo: null };
    },
    getCredentials: async (provider) =>
      provider === "typesafe"
        ? { apiKey: "synthetic-token" }
        : {
            apiKey: "synthetic-token",
            providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
          },
    clearRecovered: async () => {},
    getCombo: async (name) =>
      name === "decision-fallback"
        ? {
            name,
            models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
            strategy: "priority",
            config: { maxRetries: 0 },
          }
        : null,
    getCombos: async () => [],
    getSettings: () => ({}),
    proxy: async (opts) => {
      attempts.push(`${opts.target.provider}/${opts.target.id}`);
      return Response.json(success);
    },
  });
  return { post, attempts, policies };
}

test("route validates 422, unknown model 400 and canonical policy rejection", async () => {
  const { post, attempts } = setup();
  const invalid = await post(request("jev-latest", { questions: {} }));
  assert.equal(invalid.status, 422);
  assert.ok(Array.isArray((await invalid.json()).detail));
  const unknown = await post(request("unknown/model"));
  assert.equal(unknown.status, 400);
  assert.equal((await unknown.json()).detail.error_type, "api_usage_error");
  assert.equal((await post(request("jev-preview"))).status, 403);
  assert.equal(attempts.length, 0);
});

for (const [id, target] of [
  ["jev-latest", "typesafe/jev-latest"],
  ["jev-1.13.0", "typesafe/jev-1.13.0"],
  ["clef", "cloudflare-ai/clef"],
  ["clef-flash", "cloudflare-ai/clef-flash"],
  ["cf/jev", "cloudflare-ai/jev"],
  ["operator-alias", "cloudflare-ai/jev"],
]) {
  test(`route resolves ${id}`, async () => {
    const { post, attempts, policies } = setup();
    assert.equal((await post(request(id))).status, 200);
    assert.deepEqual(attempts, [target]);
    assert.ok(policies.includes(target));
  });
}

test("no credential returns native 401", async () => {
  const post = createSystemOnePost({
    getCredentials: async () => null,
    enforcePolicy: async () => ({ rejection: null, apiKeyInfo: null }),
  });
  const response = await post(request());
  assert.equal(response.status, 401);
  assert.equal((await response.json()).detail.error_type, "authentication_error");
});

for (const status of [503, 429, 402, 400, 422]) {
  test(`real combo engine ${status} ${status >= 500 || status === 429 || status === 402 ? "fails over" : "surfaces validation"}`, async () => {
    const attempts: string[] = [];
    const post = createSystemOnePost({
      resolveAlias: async (id) => id,
      enforcePolicy: async () => ({ rejection: null, apiKeyInfo: null }),
      getCredentials: async () => ({ apiKey: "synthetic-token" }),
      clearRecovered: async () => {},
      getCombo: async (name) =>
        name === "decision-fallback"
          ? {
              name,
              models: ["typesafe/jev-latest", "cloudflare-ai/jev"],
              strategy: "priority",
              config: { maxRetries: 0 },
            }
          : null,
      getCombos: async () => [],
      getSettings: () => ({}),
      proxy: async (opts) => {
        attempts.push(opts.target.provider);
        return attempts.length === 1
          ? Response.json(
              {
                detail: {
                  error_type: status === 400 || status === 422 ? "api_usage_error" : "server_error",
                  message: "Invalid value at questions.x.type",
                },
              },
              { status }
            )
          : Response.json(success);
      },
    });
    const response = await post(request("decision-fallback"));
    assert.equal(response.status, status === 400 || status === 422 ? status : 200);
    assert.deepEqual(
      attempts,
      status === 400 || status === 422 ? ["typesafe"] : ["typesafe", "cloudflare-ai"]
    );
  });
}

test("schema supports all question kinds and enforces limits", () => {
  for (const question of [
    { type: "choice", instructions: "Choose", criteria: { a: "A" } },
    { type: "score", instructions: "Score", criteria: ["Low", "High"] },
  ])
    assert.equal(
      v1SystemOneSchema.safeParse({ ...body, questions: { x: question } }).success,
      true
    );
  for (const criteria of [["Only"], Array(11).fill("level")])
    assert.equal(
      v1SystemOneSchema.safeParse({
        ...body,
        questions: { x: { type: "score", instructions: "Score", criteria } },
      }).success,
      false
    );
  assert.equal(
    v1SystemOneSchema.safeParse({
      ...body,
      questions: {
        x: {
          type: "choice",
          instructions: "Choose",
          criteria: Object.fromEntries(Array.from({ length: 256 }, (_, i) => [`c${i}`, "Option"])),
        },
      },
    }).success,
    false
  );
});

test("catalog requires active connections; imported chat endpoints cannot override System One", async () => {
  const opts = {
    timestamp: 1,
    isProviderActive: (id: string) => id === "cloudflare-ai",
    providerSupportsModel: () => true,
    isModelHidden: () => false,
    hasEquivalentModel: () => false,
  };
  const rows = buildSystemOneCatalogModels(opts);
  assert.deepEqual(
    rows.map((row) => row.id),
    ["cloudflare-ai/jev", "cloudflare-ai/clef", "cloudflare-ai/clef-flash"]
  );
  for (const row of rows) {
    assert.equal(row.type, "systemone");
    assert.deepEqual(row.supported_endpoints, ["systemone"]);
    assert.deepEqual(row.output_modalities, ["structured"]);
  }
  assert.deepEqual(buildSystemOneCatalogModels({ ...opts, isProviderActive: () => false }), []);
  for (const provider of ["typesafe", "cloudflare-ai", "cf"])
    assert.equal(
      isChatSelectableModel(provider, {
        id: provider === "typesafe" ? "jev-latest" : "clef",
        supportedEndpoints: ["chat"],
      }),
      false
    );
  await assert.rejects(getExecutor("typesafe"), /\/v1\/systemone/);
  const cf = await getExecutor("cloudflare-ai");
  assert.throws(() => cf.buildUrl("clef", false), /\/v1\/systemone/);
});

test("real Cloudflare health remains usable for chat after System One 402/403/429", async () => {
  const connection = (await providers.createProviderConnection({
    provider: "cloudflare-ai",
    authType: "apikey",
    apiKey: "synthetic-cloudflare-key",
    name: "Synthetic connection",
    isActive: true,
    testStatus: "active",
    providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
  })) as { id: string };
  for (const status of [402, 403, 429]) {
    const target = resolveSystemOneModel("cf/jev");
    assert.ok(target);
    await handleSystemOneProxy({
      target,
      body,
      credentials: {
        apiKey: "synthetic-cloudflare-key",
        connectionId: connection.id,
        providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
      },
      fetchImpl: async () =>
        Response.json(
          { success: false, errors: [{ message: "Synthetic credits error" }] },
          { status }
        ),
      saveCallLogImpl: async () => {},
      resolveProxyImpl: async () => ({ proxy: null }),
    });
    const chatCredentials = await auth.getProviderCredentialsWithQuotaPreflight(
      "cloudflare-ai",
      null,
      null,
      "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    );
    assert.ok(chatCredentials && !("allRateLimited" in chatCredentials));
    const row = await providers.getProviderConnectionById(connection.id);
    assert.notEqual(row?.testStatus, "unavailable");
    assert.ok(!row?.rateLimitedUntil);
  }
});
