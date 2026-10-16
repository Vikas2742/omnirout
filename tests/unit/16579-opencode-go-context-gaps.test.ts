import test from "node:test";
import assert from "node:assert/strict";
import { opencode_goProvider } from "../../open-sse/config/providers/registry/opencode/go/index.ts";

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
