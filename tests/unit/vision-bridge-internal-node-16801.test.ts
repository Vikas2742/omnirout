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
const { getComboVisionBridgeDecision, VisionBridgeGuardrail } = await import("../../src/lib/guardrails/visionBridge.ts");

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

test("#16801: raw provider-relative model IDs containing slashes retain their exact local vision verdict", async () => {
  const nodeId = "openai-compatible-chat-16801-raw-path";
  await providers.createProviderNode({
    id: nodeId, type: "openai-compatible", prefix: "own16801",
    name: "Own raw-path fixture", apiType: "chat", baseUrl: "http://127.0.0.1:9/v1",
  });
  await models.addCustomModel(
    nodeId, "vendor/sight-16801", "Native path vision", "manual",
    "chat-completions", ["chat"], undefined, {}, true
  );
  await models.addCustomModel(
    nodeId, "vendor/blind-16801", "Text-only path model", "manual",
    "chat-completions", ["chat"], undefined, {}, false
  );
  assert.equal(
    getResolvedModelCapabilities({ provider: nodeId, model: "vendor/sight-16801" }).supportsVision,
    true,
    "the owned raw slash ID is known vision-capable without a public prefix"
  );
  await combos.createCombo({
    name: "raw-path-vision-16801", strategy: "priority",
    models: [{ kind: "model", providerId: nodeId, model: "vendor/sight-16801", weight: 1 }],
  });
  await combos.createCombo({
    name: "raw-path-text-16801", strategy: "priority",
    models: [{ kind: "model", providerId: nodeId, model: "vendor/blind-16801", weight: 1 }],
  });
  await combos.createCombo({
    name: "mixed-raw-path-16801", strategy: "priority",
    models: [
      { kind: "model", providerId: nodeId, model: "vendor/sight-16801", weight: 1 },
      { kind: "model", providerId: nodeId, model: "vendor/blind-16801", weight: 1 },
    ],
  });
  await combos.createCombo({
    name: "nested-raw-path-16801", strategy: "priority",
    models: [{ kind: "combo-ref", comboName: "raw-path-vision-16801" }],
  });
  assert.equal(await getComboVisionBridgeDecision("raw-path-vision-16801"), "skip");
  assert.equal(await getComboVisionBridgeDecision("raw-path-text-16801"), "no-vision");
  assert.equal(await getComboVisionBridgeDecision("mixed-raw-path-16801"), "process");
  assert.equal(await getComboVisionBridgeDecision("nested-raw-path-16801"), "skip");

  // A proven all-vision combo must preserve the exact input_image/image_url bytes:
  // no describe call, no text stub, and no image representation rewrite.
  const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  const payload = {
    model: "raw-path-vision-16801",
    messages: [{ role: "user", content: [
      { type: "text", text: "What is in this picture?" },
      { type: "image_url", image_url: { url: image } },
    ] }],
  };
  let describes = 0;
  const guardrail = new VisionBridgeGuardrail({ deps: {
    getSettings: async () => ({ visionBridgeEnabled: true, visionBridgeModel: "openai/gpt-4o" }),
    callVisionModel: async () => { describes++; throw new Error("must not describe an all-vision combo"); },
  } });
  const result = await guardrail.preCall(payload, {});
  assert.equal(result.block, false);
  assert.equal(result.modifiedPayload, undefined);
  assert.equal(describes, 0);
  assert.equal(payload.messages[0].content[1].image_url.url, image);
});
