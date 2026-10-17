import test from "node:test";
import assert from "node:assert/strict";

const { APIKEY_PROVIDERS, AGGREGATOR_PROVIDER_IDS } =
  await import("../../src/shared/constants/providers.ts");
const { PROVIDER_ENDPOINTS } = await import("../../src/shared/constants/config.ts");
const { REGISTRY } = await import("../../open-sse/config/providerRegistry.ts");
const { isValidModel } = await import("../../src/shared/constants/models.ts");
const { DefaultExecutor, getExecutor } = await import("../../open-sse/executors/index.ts");

const CHAT_URL = "https://api.demonroute.com/v1/chat/completions";
const MODELS_URL = "https://api.demonroute.com/v1/models";

test("#16979 Demon Route is available on the API-key provider dashboard", () => {
  const entry = APIKEY_PROVIDERS.demonroute;
  assert.ok(entry);
  assert.equal(entry.id, "demonroute");
  assert.equal(entry.alias, "demonroute");
  assert.equal(entry.website, "https://demonroute.com");
  assert.equal(entry.passthroughModels, true);
  assert.notEqual(entry.hasFree, true);
  assert.match(entry.apiHint, /api\.demonroute\.com\/v1/);
});

test("#16979 Demon Route uses OpenAI-compatible bearer auth and key-gated discovery", () => {
  const entry = REGISTRY.demonroute;
  assert.ok(entry);
  assert.equal(entry.format, "openai");
  assert.equal(entry.executor, "default");
  assert.equal(entry.authType, "apikey");
  assert.equal(entry.authHeader, "bearer");
  assert.equal(entry.baseUrl, CHAT_URL);
  assert.equal(entry.modelsUrl, MODELS_URL);
  assert.equal(entry.passthroughModels, true);
});

test("#16979 Demon Route preserves slash-qualified model IDs", () => {
  const ids = REGISTRY.demonroute.models.map((model: { id: string }) => model.id);
  assert.ok(ids.includes("TheDrummer/Cydonia-24B-v4.3"));
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(isValidModel("demonroute", "TheDrummer/Cydonia-24B-v4.3"), true);
  assert.equal(isValidModel("demonroute", "vendor/new-uncatalogued-model"), true);
});

test("#16979 Demon Route uses the default chat executor", async () => {
  assert.ok((await getExecutor("demonroute")) instanceof DefaultExecutor);
  assert.equal(new DefaultExecutor("demonroute").buildUrl("TheDrummer/Cydonia-24B-v4.3", false), CHAT_URL);
  assert.equal(new DefaultExecutor("demonroute").buildUrl("TheDrummer/Cydonia-24B-v4.3", true), CHAT_URL);
  assert.equal(AGGREGATOR_PROVIDER_IDS.has("demonroute"), true);
  assert.equal(PROVIDER_ENDPOINTS.demonroute, CHAT_URL);
});
