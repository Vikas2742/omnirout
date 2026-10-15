import assert from "node:assert/strict";
import test from "node:test";
import { performance } from "node:perf_hooks";
import { createChatPipelineHarness } from "../integration/_chatPipelineHarness.ts";

const harness = await createChatPipelineHarness("systemone-chat-r1");
const providers = await import("../../src/lib/db/providers.ts");
const auth = await import("../../src/sse/services/auth.ts");
const { createCombo } = await import("../../src/lib/db/combos.ts");
const { isModelLocked } = await import("../../open-sse/services/accountFallback.ts");

test.beforeEach(async () => {
  await harness.resetStorage();
});
test.after(async () => {
  await harness.cleanup();
});

for (const model of [
  "cloudflare-ai/jev",
  "cloudflare-ai/clef",
  "cloudflare-ai/clef-flash",
  "cf/jev",
  "typesafe/jev-latest",
  "typesafe/jev-1.13.0",
  "typesafe/unknown",
]) {
  test(`A2/A3: chat handler rejects ${model} before credentials, retry or health mutation`, async () => {
    const provider = model.startsWith("typesafe/") ? "typesafe" : "cloudflare-ai";
    const connection = await harness.seedConnection(provider, {
      apiKey: "synthetic-token",
      providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
    });
    const before = await providers.getProviderConnectionById(String(connection.id));
    let fetches = 0;
    const oldFetch = globalThis.fetch;
    globalThis.fetch = async () => {
      fetches++;
      throw new Error("No upstream dispatch permitted");
    };
    try {
      const start = performance.now();
      const response = await harness.handleChat(
        harness.buildRequest({ body: { model, messages: [{ role: "user", content: "hello" }] } })
      );
      assert.equal(response.status, 400, await response.clone().text());
      const body = await response.json();
      assert.match(body.error.message, /\/v1\/systemone/);
      assert.doesNotMatch(body.error.message, /at \//);
      assert.ok(
        performance.now() - start < 2000,
        "local validation must return without retry waits"
      );
      assert.equal(fetches, 0);
      assert.deepEqual(await providers.getProviderConnectionById(String(connection.id)), before);
      assert.equal(isModelLocked(provider, String(connection.id), model.split("/")[1]), false);
      const credentials = await auth.getProviderCredentialsWithQuotaPreflight(
        provider,
        null,
        [String(connection.id)],
        "@cf/meta/synthetic-chat"
      );
      assert.ok(credentials && "apiKey" in credentials);
    } finally {
      globalThis.fetch = oldFetch;
    }
  });
}

test("A2/A3: chat combo skips System One without cooling the shared Cloudflare connection", async () => {
  const connection = await harness.seedConnection("cloudflare-ai", {
    apiKey: "synthetic-token",
    providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
  });
  await harness.seedConnection("openai", { apiKey: "synthetic-openai" });
  const before = await providers.getProviderConnectionById(String(connection.id));
  await createCombo({
    name: "mixed-chat",
    strategy: "priority",
    models: ["cloudflare-ai/jev", "typesafe/jev-latest", "openai/gpt-4o-mini"],
    config: { maxRetries: 0 },
  });
  const urls: string[] = [];
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    urls.push(String(url));
    return harness.buildOpenAIResponse();
  };
  try {
    const response = await harness.handleChat(
      harness.buildRequest({
        body: { model: "mixed-chat", messages: [{ role: "user", content: "hello" }] },
      })
    );
    assert.equal(response.status, 200, await response.clone().text());
    await response.text();
    assert.equal(urls.length, 1);
    assert.match(urls[0], /api.openai.com/);
    assert.deepEqual(await providers.getProviderConnectionById(String(connection.id)), before);
    assert.equal(isModelLocked("cloudflare-ai", String(connection.id), "jev"), false);
  } finally {
    globalThis.fetch = oldFetch;
  }
});
