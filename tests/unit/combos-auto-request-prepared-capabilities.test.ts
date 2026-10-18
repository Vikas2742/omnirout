/**
 * #16419 — the `auto/*` request path shares one pool preparation.
 *
 * Default path (AUTO_REQUEST_RESOLVED_CAPABILITIES off): `resolveModelOrError`
 * prepares the pool once, lazily, and hands it to the primary attempt and the
 * fuzzy fallbacks. It must serve exactly what `createBuiltinAutoCombo(id, suffix)`
 * (the release-tip code path, which prepares inside `createVirtualAutoCombo`)
 * serves: same members, same order, same snapshot weights, same advertised limits.
 * Unknown ids must not prepare a pool at all.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-auto-req-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET ?? "auto-req-test-secret";
delete process.env.AUTO_REQUEST_RESOLVED_CAPABILITIES;

const core = await import("../../src/lib/db/core.ts");
const settingsDb = await import("../../src/lib/db/settings.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const { resolveModelOrError } = await import("../../src/sse/handlers/chatHelpers.ts");
const builtinCatalog = await import("../../open-sse/services/autoCombo/builtinCatalog.ts");
const virtualFactory = await import("../../open-sse/services/autoCombo/virtualFactory.ts");

test.after(() => {
  core.resetDbInstance();
  try {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {
    // best-effort cleanup
  }
});

const PROVIDERS = ["openai", "anthropic", "gemini", "groq", "deepseek", "mistral"];
let seeded = false;

async function seedProviders() {
  if (seeded) return;
  seeded = true;
  await settingsDb.updateSettings({ requireLogin: false });
  for (const provider of PROVIDERS) {
    await providersDb.createProviderConnection({
      provider,
      authType: "apikey",
      apiKey: `sk-test-auto-req-${provider}`,
      name: `test-auto-req-${provider}`,
      isActive: true,
    });
  }
}

type ComboLike = {
  models?: Array<Record<string, unknown>>;
  candidatePool?: string[];
  weights?: unknown;
  advertisedContextLength?: number | null;
  advertisedMaxOutputTokens?: number | null;
  config?: unknown;
  name?: string;
};

/** Everything routing reads from a virtual combo: members, order, weights, limits. */
function routingView(combo: ComboLike) {
  return JSON.parse(
    JSON.stringify({
      name: combo.name,
      models: combo.models,
      candidatePool: combo.candidatePool,
      weights: combo.weights,
      config: combo.config,
      advertisedContextLength: combo.advertisedContextLength,
      advertisedMaxOutputTokens: combo.advertisedMaxOutputTokens,
    })
  );
}

const BODY = { messages: [{ role: "user", content: "hi" }] };

for (const [modelStr, suffix] of [
  ["auto/coding", "coding"],
  ["auto/vision", "vision"],
  ["auto/reasoning", "reasoning"],
  ["auto/best-chat", "best-chat"],
] as const) {
  test(`default path: ${modelStr} serves the same members, order and weights as the tip path`, async () => {
    await seedProviders();
    const result = await resolveModelOrError(modelStr, BODY, "/v1/chat/completions");
    assert.equal(result.error, undefined);
    assert.ok(result.combo, "expected a built-in virtual combo");
    const tipPath = await builtinCatalog.createBuiltinAutoCombo(modelStr, suffix);
    assert.ok((tipPath.models?.length ?? 0) > 0, "seeded pool should not be empty");
    assert.deepEqual(routingView(result.combo), routingView(tipPath));
  });
}

test("default path: a fuzzy fallback serves the same combo as the tip path", async () => {
  await seedProviders();
  // `auto/coding-fast` is not a built-in id; `auto/best-coding-fast` is.
  const result = await resolveModelOrError("auto/coding-fast", BODY, "/v1/chat/completions");
  assert.equal(result.error, undefined);
  assert.ok(result.combo, "expected the fuzzy built-in combo");
  const tipPath = await builtinCatalog.createBuiltinAutoCombo(
    "auto/best-coding-fast",
    "best-coding-fast"
  );
  assert.deepEqual(routingView(result.combo), routingView(tipPath));
});

test("prepared loader runs only when a combo materializes, once per attempt", async () => {
  await seedProviders();
  let calls = 0;
  let cached: Awaited<ReturnType<typeof virtualFactory.prepareVirtualAutoComboInputs>> | undefined;
  const loader = async () => {
    calls++;
    return (cached ??= await virtualFactory.prepareVirtualAutoComboInputs());
  };
  await assert.rejects(
    builtinCatalog.createBuiltinAutoCombo("auto/zzz-not-a-builtin", "zzz-not-a-builtin", loader),
    /Unknown built-in auto combo/
  );
  assert.equal(calls, 0, "an unknown id must not prepare a pool");
  const combo = await builtinCatalog.createBuiltinAutoCombo("auto/coding", "coding", loader);
  assert.equal(calls, 1);
  assert.deepEqual(
    routingView(combo),
    routingView(await builtinCatalog.createBuiltinAutoCombo("auto/coding", "coding"))
  );
});

test("default path: an unknown auto id keeps the 400", async () => {
  await seedProviders();
  const result = await resolveModelOrError("auto/zzz-not-a-builtin", BODY, "/v1/chat/completions");
  assert.ok(result.error, "unknown built-in id must stay an error");
  assert.equal(result.error.status, 400);
  assert.equal(result.combo, undefined);
  await result.error.body?.cancel();
});

test("default path: no connected candidate keeps the existing 503", async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
  seeded = false;
  const result = await resolveModelOrError("auto/coding:pro", BODY, "/v1/chat/completions");
  assert.ok(result.error, "expected an error result, not a combo");
  assert.equal(result.error.status, 503, "empty auto pool must fail fast with 503");
  assert.equal(result.combo, undefined, "must not return a combo for an empty pool");
  await result.error.body?.cancel();
});
