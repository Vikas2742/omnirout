/**
 * TDD regression guard — provider credentials must not rest in plaintext on
 * fresh installs that never set STORAGE_ENCRYPTION_KEY.
 *
 * Two halves of the fix:
 * 1. instrumentation-node.ts ensureSecrets() auto-generates + persists a
 *    STORAGE_ENCRYPTION_KEY (same pattern as JWT_SECRET / API_KEY_SECRET).
 * 2. encryptPlaintextConnectionCredentials() (db/providers/migrations.ts)
 *    runs once at boot AFTER ensureSecrets() and re-encrypts credential
 *    fields that are still plaintext from the passthrough era.
 *
 * With no key configured AND auto-generation disabled (the explicit
 * opt-out), the sweep must stay a no-op so intentional plaintext setups
 * keep working.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ORIGINAL_STORAGE_KEY = process.env.STORAGE_ENCRYPTION_KEY;
delete process.env.STORAGE_ENCRYPTION_KEY;

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-plaintext-encryption-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../../src/lib/db/core.ts");
const providersDb = await import("../../../src/lib/db/providers.ts");
const migrations = await import("../../../src/lib/db/providers/migrations.ts");
const encryption = await import("../../../src/lib/db/encryption.ts");

async function resetStorage() {
  core.resetDbInstance();
  for (let attempt = 0; attempt < 10; attempt++) {
    try {
      if (fs.existsSync(TEST_DATA_DIR)) {
        fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
      }
      break;
    } catch (error) {
      const code = (error as NodeJS.ErrnoException)?.code;
      if ((code === "EBUSY" || code === "EPERM") && attempt < 9) {
        await new Promise((resolve) => setTimeout(resolve, 50 * (attempt + 1)));
      } else {
        throw error;
      }
    }
  }
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

function rawCredential(connectionId: string): string | undefined {
  const db = core.getDbInstance();
  const row = db
    .prepare("SELECT api_key FROM provider_connections WHERE id = ?")
    .get(connectionId) as { api_key?: string } | undefined;
  return row?.api_key;
}

test.beforeEach(async () => {
  await resetStorage();
});

test.after(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  if (ORIGINAL_STORAGE_KEY === undefined) {
    delete process.env.STORAGE_ENCRYPTION_KEY;
  } else {
    process.env.STORAGE_ENCRYPTION_KEY = ORIGINAL_STORAGE_KEY;
  }
});

test("sweep is a no-op while encryption is unconfigured (intentional passthrough)", async () => {
  delete process.env.STORAGE_ENCRYPTION_KEY;
  const conn = await providersDb.createProviderConnection({
    provider: "openai",
    authType: "apikey",
    name: "Plaintext passthrough",
    apiKey: "sk-plain-optout",
  });

  const migrated = migrations.encryptPlaintextConnectionCredentials();

  assert.equal(migrated, 0, "without a key the sweep must not touch any row");
  assert.equal(rawCredential(conn.id), "sk-plain-optout", "plaintext must remain untouched");
});

test("sweep encrypts plaintext credentials once a key exists, idempotently", async () => {
  delete process.env.STORAGE_ENCRYPTION_KEY;
  const first = await providersDb.createProviderConnection({
    provider: "openai",
    authType: "apikey",
    name: "Legacy plaintext 1",
    apiKey: "sk-legacy-one",
  });
  const second = await providersDb.createProviderConnection({
    provider: "anthropic",
    authType: "apikey",
    name: "Legacy plaintext 2",
    apiKey: "sk-legacy-two",
  });

  assert.equal(rawCredential(first.id), "sk-legacy-one", "precondition: stored as plaintext");

  // Boot sequence: ensureSecrets() generates the key, THEN the sweep runs.
  process.env.STORAGE_ENCRYPTION_KEY = "plaintext-sweep-test-key";

  const migrated = migrations.encryptPlaintextConnectionCredentials();

  assert.equal(migrated, 2, "both plaintext connections must be re-encrypted");
  for (const [conn, original] of [
    [first, "sk-legacy-one"],
    [second, "sk-legacy-two"],
  ] as const) {
    const raw = rawCredential(conn.id);
    assert.match(raw ?? "", /^enc:v1:/, "credential must carry the encrypted prefix at rest");
    assert.equal(encryption.decrypt(raw), original, "decrypt must round-trip the original");
  }

  const secondRun = migrations.encryptPlaintextConnectionCredentials();
  assert.equal(secondRun, 0, "sweep must be idempotent across boots");
});

test("sweep leaves already-encrypted credentials byte-identical", async () => {
  process.env.STORAGE_ENCRYPTION_KEY = "already-encrypted-test-key";
  const conn = await providersDb.createProviderConnection({
    provider: "openai",
    authType: "apikey",
    name: "Encrypted at write",
    apiKey: "sk-fresh",
  });

  const before = rawCredential(conn.id);
  assert.match(before ?? "", /^enc:v1:/, "precondition: written encrypted");

  const migrated = migrations.encryptPlaintextConnectionCredentials();

  assert.equal(migrated, 0, "no encrypted row may be rewritten");
  assert.equal(rawCredential(conn.id), before, "ciphertext must stay byte-identical");
});
