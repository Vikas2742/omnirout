import { test } from "node:test";
import assert from "node:assert/strict";
import { REGISTRY } from "../../open-sse/config/providerRegistry.ts";
import { getTokenLimit } from "../../open-sse/services/contextManager.ts";
import { MODEL_SPECS } from "../../src/shared/constants/modelSpecs.ts";

// #16579: opencode-go/* routes under-report context windows.
//
// Models imported from the OpenCode Go tier fell through every layer of
// getModelContextLimit() (no persisted override, no authoritative window, no
// models.dev sync — disabled by default — no registry row, no MODEL_SPECS row)
// and inherited the provider defaultContextLength: 200000 — so /v1/models
// advertised 200K windows for models whose real upstream windows are
// 500K / 1M / 1.05M. Values verified against opencode.ai/data (see the issue
// table). space-bunny (models.dev only, unverified) and omen-alpha (no catalog
// entry anywhere) are intentionally not asserted.

const PROVIDER = "opencode-go";

// [modelId, real contextLength, real maxOutputTokens]
const EXPECTED: ReadonlyArray<readonly [string, number, number | undefined]> = [
  ["deepseek-v4.1-flash", 1000000, 384000],
  ["deepseek-flash", 1000000, 384000],
  ["deepseek-v4-pro", 1000000, 384000],
  ["deepseek-v4-flash", 1000000, 384000],
  ["claude-haiku-5-5", 1000000, 128000],
  ["gpt-6-luna", 1050000, 128000],
  ["gpt-5.6-luna", 1050000, 128000],
  ["grok-4.6", 500000, 500000],
  ["grok-4.7", 500000, 500000],
  ["hy4-preview", 1024000, 64000],
  ["longcat-2.0", 1000000, 131072],
  ["mimo-v2.6-flash", 1048576, 131072],
  ["mimo-v2.6-pro", 1048576, 131072],
  ["qwen3.7-plus", 1000000, 65536],
  ["qwen3.7-plus-high", 1000000, 65536],
  ["qwen3.7-plus-max", 1000000, 65536],
  ["qwen3.7-max", 1000000, 65536],
  ["qwen3.7-max-high", 1000000, 65536],
  ["qwen3.7-max-max", 1000000, 65536],
  ["qwen3.8-flash", 1000000, 131072],
  ["qwen3.8-max", 1000000, 131072],
  ["minimax-m2.7", 204800, 131072],
  ["minimax-m2.5", 204800, 131072],
  ["glm-5.1", 200000, 128000],
];

test("opencode-go registry declares explicit real contextLength rows instead of the 200000 default", () => {
  const models = REGISTRY[PROVIDER].models;
  for (const [id, contextLength, maxOutputTokens] of EXPECTED) {
    const row = models.find((m) => m.id === id);
    assert.ok(row, `${PROVIDER} should declare a registry row for ${id} (#16579)`);
    assert.equal(
      row.contextLength,
      contextLength,
      `${id} should declare its real ${contextLength} context window, not fall back to 200000`
    );
    if (maxOutputTokens !== undefined) {
      assert.equal(row.maxOutputTokens, maxOutputTokens, `${id} maxOutputTokens`);
    }
  }
});

test("getTokenLimit resolves each opencode-go route to its real window, not the 200000 default", () => {
  for (const [id, contextLength] of EXPECTED) {
    assert.equal(getTokenLimit(PROVIDER, id), contextLength, `getTokenLimit(${PROVIDER}, ${id})`);
  }
});

test("MODEL_SPECS minimax-m2.5 matches its sibling m2.7 and the upstream row at 204800", () => {
  assert.equal(MODEL_SPECS["minimax-m2.5"]?.contextWindow, 204800);
});
