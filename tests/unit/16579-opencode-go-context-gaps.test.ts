import test from "node:test";
import assert from "node:assert/strict";
import { opencode_goProvider } from "../../open-sse/config/providers/registry/opencode/go/index.ts";
import { getResolvedModelCapabilities } from "../../src/lib/modelCapabilities.ts";
import { getModelSpec } from "../../src/shared/constants/modelSpecs.ts";

test("#16579 OpenCode Go imports DeepSeek Flash alias with its full 1M context", () => {
  const models = opencode_goProvider.models ?? [];
  for (const id of ["deepseek-v4.1-flash", "deepseek-flash"]) {
    const model = models.find((entry) => entry.id === id);
    assert.ok(model, id + " must be in the provider registry");
    assert.equal(model.contextLength, 1_000_000);
    assert.equal(model.maxOutputTokens, 384_000);
  }
});

test("#16579 OpenCode Go MiniMax M2.5 inherits its verified 204800-token window", () => {
  const model = (opencode_goProvider.models ?? []).find((entry) => entry.id === "minimax-m2.5");
  assert.ok(model);
  assert.equal(model.contextLength, 204_800);
  assert.equal(model.maxOutputTokens, 131_072);
  assert.equal(model.targetFormat, "claude");
});

// Exercise the actual /v1/models capability resolution, not just the registry rows.
test("#16579 OpenCode Go capability resolver uses the declared context windows", () => {
  for (const [id, context] of [
    ["deepseek-flash", 1_000_000],
    ["deepseek-v4.1-flash", 1_000_000],
    ["minimax-m2.5", 204_800],
  ] as const) {
    const caps = getResolvedModelCapabilities({ provider: "opencode-go", model: id }, {
      persistedOverrides: false,
    });
    assert.equal(caps.contextWindow, context, id);
  }
});

test("#16579 shared MiniMax M2.5 metadata matches verified upstream limit", () => {
  assert.equal(getModelSpec("minimax-m2.5")?.contextWindow, 204_800);
  assert.equal(getModelSpec("MiniMax-M2.5")?.contextWindow, 204_800);
  assert.equal(getModelSpec("minimax-m2.7")?.contextWindow, 204_800);
});
