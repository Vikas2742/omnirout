import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dataDir = mkdtempSync(join(tmpdir(), "omniroute-16801-"));
process.env.DATA_DIR = dataDir;
const providers = await import("../../src/lib/db/providers.ts");
const models = await import("../../src/lib/db/models.ts");
const combos = await import("../../src/lib/db/combos.ts");
const core = await import("../../src/lib/db/core.ts");
const { getResolvedModelCapabilities } = await import("../../src/lib/modelCapabilities.ts");
const { getComboVisionBridgeDecision } = await import("../../src/lib/guardrails/visionBridge.ts");

test.after(() => {
  core.resetDbInstance();
  rmSync(dataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("#16801: public prefix with internal compatible node preserves native vision images", async () => {
  const nodeId = "openai-compatible-chat-16801-vision";
  await providers.createProviderNode({
    id: nodeId,
    type: "openai-compatible",
    prefix: "v16801",
    name: "Vision fixture",
    apiType: "chat",
    baseUrl: "http://127.0.0.1:9/v1",
  });
  await models.addCustomModel(
    nodeId, "test-vision", "Test vision", "manual", "chat-completions", ["chat"],
    undefined, {}, true
  );
  await combos.createCombo({
    name: "vision-16801",
    strategy: "priority",
    models: [{ kind: "model", providerId: nodeId, model: "v16801/test-vision", weight: 1 }],
  });

  assert.equal(getResolvedModelCapabilities("v16801/test-vision").supportsVision, true);
  assert.equal(await getComboVisionBridgeDecision("vision-16801"), "skip");
});

test("#16801: unknown compatible-node models do not acquire vision by default", async () => {
  await combos.createCombo({
    name: "unknown-16801",
    strategy: "priority",
    models: [{
      kind: "model",
      providerId: "openai-compatible-chat-missing-16801",
      model: "missing16801/not-a-vision-model",
      weight: 1,
    }],
  });
  assert.equal(await getComboVisionBridgeDecision("unknown-16801"), "no-vision");
});

test("#16801: a public vision model from another node must not bless an internal target", async () => {
  const sourceNode = "openai-compatible-chat-16801-source";
  const otherNode = "openai-compatible-chat-16801-other";
  await providers.createProviderNode({
    id: sourceNode, type: "openai-compatible", prefix: "source16801",
    name: "Non-vision source", apiType: "chat", baseUrl: "http://127.0.0.1:9/v1",
  });
  await providers.createProviderNode({
    id: otherNode, type: "openai-compatible", prefix: "other16801",
    name: "Vision provider", apiType: "chat", baseUrl: "http://127.0.0.1:9/v1",
  });
  await models.addCustomModel(
    otherNode, "vision-only", "Vision only", "manual", "chat-completions",
    ["chat"], undefined, {}, true
  );
  assert.equal(getResolvedModelCapabilities("other16801/vision-only").supportsVision, true);
  await combos.createCombo({
    name: "cross-node-vision-16801", strategy: "priority",
    models: [{
      kind: "model", providerId: sourceNode, model: "other16801/vision-only", weight: 1,
    }],
  });
  assert.equal(
    await getComboVisionBridgeDecision("cross-node-vision-16801"),
    "no-vision",
    "foreign public model metadata must not disable the Vision Bridge"
  );
});
