import assert from "node:assert/strict";
import test from "node:test";
import { ghComboGate } from "../../src/sse/handlers/chat/githubLiveCatalogFilter.ts";

for (const [provider, model] of [
  ["typesafe", "jev-latest"],
  ["typesafe", "unknown"],
  ["cloudflare-ai", "jev"],
  ["cloudflare-ai", "clef"],
  ["cf", "clef-flash"],
]) {
  test(`A2/A3: combo availability skips ${provider}/${model} before credential checks`, async () => {
    const result = await ghComboGate({}, provider, model, async () => {
      throw new Error("No catalog or credential work allowed");
    });
    assert.equal(result, false);
  });
}
