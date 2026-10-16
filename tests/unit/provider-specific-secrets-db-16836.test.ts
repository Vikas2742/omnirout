/**
 * #16836: credential metadata must be encrypted in real SQLite rows while
 * provider reads and mutation responses continue to expose usable plaintext.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-secrets-16836-"));
const envSnapshot = {
  DATA_DIR: process.env.DATA_DIR,
  STORAGE_ENCRYPTION_KEY: process.env.STORAGE_ENCRYPTION_KEY,
  DISABLE_SQLITE_AUTO_BACKUP: process.env.DISABLE_SQLITE_AUTO_BACKUP,
};
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.STORAGE_ENCRYPTION_KEY = "provider-specific-secrets-db-16836-test-key";
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";

const core = await import("../../src/lib/db/core.ts");
const connections = await import("../../src/lib/db/providers.ts");

function readStoredProviderMetadata(id: string): Record<string, unknown> {
  const row = core
    .getDbInstance()
    .prepare("SELECT provider_specific_data FROM provider_connections WHERE id = ?")
    .get(id) as { provider_specific_data: string | null } | undefined;
  assert.ok(row?.provider_specific_data, "connection metadata must exist on disk");
  return JSON.parse(row.provider_specific_data) as Record<string, unknown>;
}

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  for (const [key, value] of Object.entries(envSnapshot)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

test("#16836 SQLite encrypts metadata secrets without breaking reads and updates", async () => {
  const initialSecret = "console-secret-16836-db";
  const created = await connections.createProviderConnection({
    provider: "agentrouter",
    authType: "apikey",
    name: "Console Secret DB Test",
    apiKey: "sk-secret-db-test-16836",
    providerSpecificData: { consoleApiKey: initialSecret, workspaceId: "ws-16836" },
  });
  const id = typeof created?.id === "string" ? created.id : "";
  assert.ok(id, "provider connection was created");

  const stored = readStoredProviderMetadata(id);
  assert.match(String(stored.consoleApiKey), /^enc:v1:/);
  assert.ok(!JSON.stringify(stored).includes(initialSecret));
  assert.equal(stored.workspaceId, "ws-16836");

  const loaded = await connections.getProviderConnectionById(id);
  assert.equal(
    (loaded?.providerSpecificData as Record<string, unknown>).consoleApiKey,
    initialSecret
  );

  const lazy = (await connections.getProviderConnections({ provider: "agentrouter" })).find(
    (item) => item.id === id
  );
  assert.ok(lazy, "lazy connection exists");
  assert.equal((lazy.providerSpecificData as Record<string, unknown>).consoleApiKey, initialSecret);

  // A metadata-only update must not send encrypted JSON back to the dashboard.
  const updated = await connections.updateProviderConnection(id, {
    name: "Console Secret DB Test Updated",
  });
  assert.ok(updated);
  assert.equal(
    (updated.providerSpecificData as Record<string, unknown>).consoleApiKey,
    initialSecret
  );
  assert.equal(readStoredProviderMetadata(id).consoleApiKey, stored.consoleApiKey);

  // Existing databases may contain plaintext console credentials. Reading and
  // editing any other field should transparently migrate them on the next write.
  const legacySecret = "legacy-console-secret-16836-db";
  core
    .getDbInstance()
    .prepare("UPDATE provider_connections SET provider_specific_data = ? WHERE id = ?")
    .run(JSON.stringify({ consoleApiKey: legacySecret, workspaceId: "ws-16836" }), id);
  const legacyRead = await connections.getProviderConnectionById(id);
  assert.equal(
    (legacyRead?.providerSpecificData as Record<string, unknown>).consoleApiKey,
    legacySecret
  );
  const migrated = await connections.updateProviderConnection(id, { name: "Migrated DB Test" });
  assert.equal(
    (migrated?.providerSpecificData as Record<string, unknown>).consoleApiKey,
    legacySecret
  );
  const migratedOnDisk = readStoredProviderMetadata(id);
  assert.match(String(migratedOnDisk.consoleApiKey), /^enc:v1:/);
  assert.ok(!JSON.stringify(migratedOnDisk).includes(legacySecret));
  assert.equal(migratedOnDisk.workspaceId, "ws-16836");
});

test("#16836 Qwen and Volcengine cookies are encrypted through connection CRUD", async () => {
  for (const [provider, field] of [
    ["qwen-cloud-token-plan", "qwenCloudCookie"],
    ["volcengine-coding-plan", "volcConsoleCookie"],
  ] as const) {
    const secret = `console-cookie-${provider}`;
    const connection = await connections.createProviderConnection({
      provider,
      authType: "apikey",
      apiKey: `sk-16836-${provider}`,
      name: `Console cookie ${provider}`,
      providerSpecificData: {
        [field]: secret,
        workspaceId: "visible-identity",
      },
    });
    const id = typeof connection?.id === "string" ? connection.id : "";
    assert.ok(id, `${provider}: create should return a connection`);
    const stored = readStoredProviderMetadata(id);
    assert.match(String(stored[field]), /^enc:v1:/, provider);
    assert.ok(!JSON.stringify(stored).includes(secret), provider);
    assert.equal(stored.workspaceId, "visible-identity");

    const byId = await connections.getProviderConnectionById(id);
    assert.equal((byId?.providerSpecificData as Record<string, unknown>)[field], secret);
    const updated = await connections.updateProviderConnection(id, {
      name: `Updated console cookie ${provider}`,
    });
    assert.equal((updated?.providerSpecificData as Record<string, unknown>)[field], secret);
    assert.equal(readStoredProviderMetadata(id)[field], stored[field]);

    const lazy = (await connections.getProviderConnections({ provider })).find(
      (item) => item.id === id
    );
    assert.ok(lazy);
    assert.equal((lazy.providerSpecificData as Record<string, unknown>)[field], secret);
  }
});

test("#16836 cookie-session dedup compares plaintext despite encrypted metadata", async () => {
  for (const [provider, field] of [
    ["qwen-cloud-token-plan", "qwenCloudCookie"],
    ["volcengine-coding-plan", "volcConsoleCookie"],
  ] as const) {
    const sameCookie = `same-session-${provider}-16836`;
    const first = await connections.createProviderConnection({
      provider,
      authType: "cookie",
      name: `First label for ${provider}`,
      providerSpecificData: { [field]: sameCookie },
    });
    assert.ok(first?.id, `${provider}: initial connection must be created`);
    assert.match(String(readStoredProviderMetadata(String(first.id))[field]), /^enc:v1:/);

    // AES-GCM uses a different nonce per encryption, so comparing the newly
    // imported plaintext with a stored ciphertext always misses the same user.
    const same = await connections.createProviderConnection({
      provider,
      authType: "cookie",
      name: `Different label for ${provider}`,
      providerSpecificData: { [field]: sameCookie },
    });
    assert.equal(same?.id, first.id, `${provider}: identical cookie must reuse the row`);

    const distinct = await connections.createProviderConnection({
      provider,
      authType: "cookie",
      name: `First label for ${provider}`,
      providerSpecificData: { [field]: `different-session-${provider}-16836` },
    });
    assert.ok(distinct?.id);
    assert.notEqual(distinct?.id, first.id, `${provider}: distinct sessions must not merge`);
  }
});
