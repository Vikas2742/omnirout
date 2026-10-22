import test, { beforeEach, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const home = fs.mkdtempSync(path.join(os.tmpdir(), "omni-prefix-history-17348-"));
process.env.DATA_DIR = home;

const core = await import("../../src/lib/db/core.ts");
const nodes = await import("../../src/lib/db/providers/nodes.ts");
const models = await import("../../src/lib/db/models.ts");
const history = await import("../../src/lib/db/providers/nodePrefixHistory.ts");
const prices = await import("../../src/app/api/pricing/models/route.ts");
const cache = await import("../../src/lib/db/readCache.ts");

const A = "openai-compatible-chat-prefix-history-a";
const B = "openai-compatible-chat-prefix-history-b";
const prefixA = "syntheticold";
const prefixB = "syntheticnew";

beforeEach(() => {
  core.resetDbInstance();
  fs.rmSync(home, { recursive: true, force: true, maxRetries: 5 });
  fs.mkdirSync(home, { recursive: true });
  core.getDbInstance();
});
after(() => {
  core.resetDbInstance();
  fs.rmSync(home, { recursive: true, force: true, maxRetries: 5 });
});

async function create(nodeId: string, prefix: string): Promise<void> {
  await nodes.createProviderNode({
    id: nodeId,
    type: "openai-compatible",
    prefix,
    name: "Synthetic " + nodeId,
    apiType: "chat",
    baseUrl: "https://example.invalid/v1",
  });
}
function persistPrice(namespace: string, models: Record<string, unknown>): void {
  core.getDbInstance().prepare(
    "INSERT OR REPLACE INTO key_value (namespace, key, value) VALUES ('pricing', ?, ?)"
  ).run(namespace, JSON.stringify(models));
}
async function catalog(): Promise<Record<string, any>> {
  const response = await prices.GET();
  assert.equal(response.status, 200);
  return (await response.json()) as Record<string, any>;
}

test("#17348: explicit compatible prefix rename stores real upstream model identities atomically", async () => {
  await create(A, prefixA);
  await models.replaceSyncedAvailableModelsForConnection(A, A, [
    { id: "foo", name: "Foo" },
    { id: "org/nested", name: "Nested" },
    { id: "syntheticold/foo", name: "Legit Slash ID" },
  ]);
  persistPrice(A, { "syntheticold/foo": { input: 6 } });
  const version = cache.getModelCatalogCacheVersion();
  await nodes.updateProviderNode(A, { prefix: prefixB });
  assert.ok(cache.getModelCatalogCacheVersion() > version, "/v1/models cache invalidated");

  const rows = history.getNodePrefixHistory(core.getDbInstance(), A);
  assert.deepEqual(rows, [{
    prefix: prefixA,
    modelIds: ["foo", "org/nested", "syntheticold/foo"],
  }]);

  const published = await catalog();
  const slot = published[A];
  assert.ok(slot, "same node key remains stable");
  assert.equal(slot.id, A, "PricingTab internal node contract survives");
  assert.equal(slot.displayPrefix, prefixB);
  assert.deepEqual(slot.historicalPrefixes, rows);
  assert.ok(slot.models.some((m: { id: string }) => m.id === "org/nested"));
  assert.ok(slot.models.some((m: { id: string }) => m.id === "syntheticold/foo"));
  assert.deepEqual(
    JSON.parse((core.getDbInstance().prepare(
      "SELECT value FROM key_value WHERE namespace = 'pricing' AND key = ?"
    ).get(A) as { value: string }).value),
    { "syntheticold/foo": { input: 6 } },
    "persisted historical price remains untouched"
  );
});

test("#17348: changing name only does not change historical mapping, deleting node purges history", async () => {
  await create(A, prefixA);
  await models.replaceSyncedAvailableModelsForConnection(A, A, [{ id: "foo", name: "Foo" }]);
  await nodes.updateProviderNode(A, { prefix: prefixB });
  const initial = history.getNodePrefixHistory(core.getDbInstance(), A);
  await nodes.updateProviderNode(A, { name: "Renamed node" });
  assert.deepEqual(history.getNodePrefixHistory(core.getDbInstance(), A), initial);
  await nodes.deleteProviderNode(A);
  assert.deepEqual(history.getNodePrefixHistory(core.getDbInstance(), A), []);
});

test("#17348: pricing for deleted compatible nodes stays in DB but never appears in management catalog", async () => {
  await create(A, prefixA);
  persistPrice(A, { "legacy/orphan": { input: 99 } });
  await nodes.deleteProviderNode(A);
  const published = await catalog();
  assert.equal(published[A], undefined);
  const row = core.getDbInstance().prepare(
    "SELECT value FROM key_value WHERE namespace = 'pricing' AND key = ?"
  ).get(A) as { value: string };
  assert.ok(row, "orphan remains available for a manual decision");
});

test("#17348: old alias with two historical owners is not joined to either node", async () => {
  await create(A, prefixA);
  await create(B, prefixA);
  await models.replaceSyncedAvailableModelsForConnection(A, A, [{ id: "foo", name: "Foo A" }]);
  await models.replaceSyncedAvailableModelsForConnection(B, B, [{ id: "foo", name: "Foo B" }]);
  await nodes.updateProviderNode(A, { prefix: prefixB });
  await nodes.updateProviderNode(B, { prefix: "syntheticthird" });
  persistPrice(prefixA, { foo: { input: 15 } });
  const published = await catalog();
  assert.ok(published[prefixA], "ambiguous namespace remains separate");
  assert.notEqual(published[prefixA].id, A);
  assert.notEqual(published[prefixA].id, B);
  assert.equal(published[A].pricingKey, undefined);
  assert.equal(published[B].pricingKey, undefined);
});

test("#17348: previous prefix reused by a live node cannot redirect its prices to an old owner", async () => {
  await create(A, prefixA);
  await models.replaceSyncedAvailableModelsForConnection(A, A, [{ id: "foo", name: "Foo A" }]);
  await nodes.updateProviderNode(A, { prefix: prefixB });
  await create(B, prefixA);
  persistPrice(prefixA, { foo: { input: 15 } });
  const published = await catalog();
  assert.equal(published[B].displayPrefix, prefixA);
  assert.ok(published[B].models.some((m: { id: string }) => m.id === "foo"));
  assert.notEqual(published[A].pricingKey, prefixA);
});

test("#17348: missing and malformed prefix histories never authorize speculative mapping", async () => {
  assert.deepEqual(history.parseNodePrefixHistory("{broken"), []);
  assert.deepEqual(history.parseNodePrefixHistory([{ prefix: "old/a", modelIds: ["foo"] }]), []);
  assert.deepEqual(history.parseNodePrefixHistory([
    { prefix: "old", modelIds: [{ id: "foo" }, { id: "foo" }, { id: "a/b" }] },
  ]), [{ prefix: "old", modelIds: ["foo", "a/b"] }]);
});
