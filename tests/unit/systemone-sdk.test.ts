import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
const dir = fs.mkdtempSync(path.join(process.cwd(), ".systemone-sdk-test-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "synthetic-sdk-secret";
const core = await import("../../src/lib/db/core.ts");
const providers = await import("../../src/lib/db/providers.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const settings = await import("../../src/lib/db/settings.ts");
const v1 = await import("../../src/app/api/v1/systemone/route.ts");
const sdk = await import("../../src/app/api/typesafe/v1/systemone/route.ts");
const discovery = await import("../../src/app/api/typesafe/v1/models/route.ts");
const catalog = await import("../../src/app/api/v1/models/catalog.ts");
const aliases = await import("../../src/lib/db/models.ts");
const oldFetch = globalThis.fetch;
test.after(() => {
  globalThis.fetch = oldFetch;
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});
const body = {
  model: "jev-latest",
  state: "Synthetic",
  questions: { x: { type: "noul", instructions: "Valid?" } },
};
const native = {
  model: "jev-1.13.0",
  answers: { x: { type: "noul", noul: 0.9 } },
  usage: { input_tokens: 100, output_tokens: 2 },
};
const request = (model = body.model, key?: string) =>
  new Request("http://localhost/api/v1/systemone", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-typesafe-sdk": "synthetic-sdk/1",
      ...(key ? { Authorization: `Bearer ${key}` } : {}),
    },
    body: JSON.stringify({ ...body, model }),
  });

test("real route exports forward SDK headers, bare selectors and TypeSafe discovery", async () => {
  await providers.createProviderConnection({
    provider: "typesafe",
    name: "Synthetic TypeSafe",
    authType: "apikey",
    apiKey: "synthetic-provider-key",
    isActive: true,
    testStatus: "active",
  });
  const models = {
    models: [{ name: "jev-latest", description: "Stable Jev", release_date: "2026-09-14" }],
  };
  globalThis.fetch = async (url, init) => {
    assert.equal(new Headers(init?.headers).get("authorization"), "Bearer synthetic-provider-key");
    if (String(url).endsWith("/models")) {
      assert.equal(init?.method, "GET");
      return Response.json(models);
    }
    assert.equal(String(url), "https://api.typesafe.ai/v1/systemone");
    assert.equal(new Headers(init?.headers).get("x-typesafe-sdk"), "synthetic-sdk/1");
    assert.equal(JSON.parse(String(init?.body)).model, "jev-latest");
    return Response.json(native);
  };
  for (const route of [v1, sdk]) {
    const res = await route.POST(request());
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), native);
  }
  const res = await discovery.GET(new Request("http://localhost/api/typesafe/v1/models"));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), models);
});

test("real catalog exposes each active channel only as structured System One", async () => {
  await settings.updateSettings({ hideAutoCombos: true, requireAuthForModels: false });
  await providers.createProviderConnection({
    provider: "cloudflare-ai",
    name: "Synthetic CF",
    authType: "apikey",
    apiKey: "synthetic-cf-key",
    isActive: true,
    providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
  });
  globalThis.fetch = async () => {
    throw new Error("No network in catalog test");
  };
  catalog.__resetCatalogBuilderRunsForTest();
  const response = await catalog.getUnifiedModelsResponse(
    new Request("http://localhost/api/v1/models")
  );
  assert.equal(response.status, 200);
  const rows = (await response.json()).data as Array<{
    id: string;
    type?: string;
    supported_endpoints?: string[];
    output_modalities?: string[];
  }>;
  for (const id of [
    "typesafe/jev-latest",
    "typesafe/jev-preview",
    "cloudflare-ai/jev",
    "cloudflare-ai/clef",
    "cloudflare-ai/clef-flash",
  ]) {
    const row = rows.find((entry) => entry.id === id);
    assert.ok(row, id);
    assert.equal(row.type, "systemone");
    assert.deepEqual(row.supported_endpoints, ["systemone"]);
    assert.deepEqual(row.output_modalities, ["structured"]);
  }
});

test("real alias overrides SDK default and uses Cloudflare credentials", async () => {
  await aliases.setModelAlias("jev-latest", "cloudflare-ai/jev");
  (await import("../../src/lib/modelAliasResolver.ts")).invalidateAliasCache();
  globalThis.fetch = async (url, init) => {
    assert.match(String(url), /\/ai\/run$/);
    assert.equal(new Headers(init?.headers).get("authorization"), "Bearer synthetic-cf-key");
    assert.equal(JSON.parse(String(init?.body)).model, "typesafe/jev");
    return Response.json({ success: true, result: { state: "Completed", result: native } });
  };
  const res = await sdk.POST(request());
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), native);
});

test("real stored priority combo fails over from Cloudflare 402 without disabling chat", async () => {
  const { createCombo } = await import("../../src/lib/db/combos.ts");
  const { getProviderCredentialsWithQuotaPreflight } =
    await import("../../src/sse/services/auth.ts");
  const connections = await providers.getProviderConnections({ provider: "cloudflare-ai" });
  const cf = connections[0] as { id: string };
  await createCombo({
    name: "synthetic-stored-fallback",
    strategy: "priority",
    models: ["cloudflare-ai/jev", "typesafe/jev-latest"],
    config: { maxRetries: 0 },
  });
  const seen: string[] = [];
  globalThis.fetch = async (url) => {
    seen.push(String(url).includes("cloudflare.com") ? "cloudflare-ai" : "typesafe");
    return seen.length === 1
      ? Response.json(
          {
            success: false,
            errors: [{ message: "Insufficient balance; add money to your gateway or use BYOK" }],
          },
          { status: 402 }
        )
      : Response.json(native);
  };
  const response = await v1.POST(request("synthetic-stored-fallback"));
  assert.equal(response.status, 200, await response.clone().text());
  assert.deepEqual(await response.json(), native);
  assert.deepEqual(seen, ["cloudflare-ai", "typesafe"]);
  const chat = await getProviderCredentialsWithQuotaPreflight(
    "cloudflare-ai",
    null,
    null,
    "@cf/meta/synthetic-chat"
  );
  assert.ok(chat && !("allRateLimited" in chat));
  assert.notEqual((await providers.getProviderConnectionById(cf.id))?.testStatus, "unavailable");
});

test("real auth rejects unknown Omni keys and policy denies forbidden models without fetch", async () => {
  let fetched = false;
  globalThis.fetch = async () => {
    fetched = true;
    return Response.json(native);
  };
  assert.equal((await v1.POST(request("cf/jev", "synthetic-invalid-omni-key"))).status, 401);
  const key = await keys.createApiKey("Synthetic restricted", "synthetic-machine", [], {
    allowedModels: ["typesafe/jev-preview"],
    modelAccessMode: "restricted",
  });
  assert.equal((await v1.POST(request("cf/jev", key.key))).status, 403);
  assert.equal(fetched, false);
});
