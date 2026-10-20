/**
 * Boot-order guard — STORAGE_ENCRYPTION_KEY follows the same
 * restore-or-generate path as JWT_SECRET / API_KEY_SECRET inside
 * ensureSecrets(), and the plaintext credential sweep runs strictly AFTER
 * ensureSecrets() so the freshly generated key exists before any row is
 * re-encrypted. Also pins the OMNIROUTE_STORAGE_KEY_AUTOGEN=false opt-out
 * for operators who deliberately run passthrough mode.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

function readSource(relativePath: string): string {
  return fs.readFileSync(path.resolve(import.meta.dirname, "../..", relativePath), "utf-8");
}

test("ensureSecrets restores or generates STORAGE_ENCRYPTION_KEY", () => {
  const source = readSource("src/instrumentation-node.ts");

  assert.match(
    source,
    /if \(!process\.env\.STORAGE_ENCRYPTION_KEY \|\| process\.env\.STORAGE_ENCRYPTION_KEY\.trim\(\) === ""\)/,
    "ensureSecrets() must cover a missing/empty STORAGE_ENCRYPTION_KEY"
  );
  assert.match(
    source,
    /getPersistedSecret\("storageEncryptionKey"\)/,
    "the generated key must be restored from the persisted secret store across restarts"
  );
  assert.match(
    source,
    /persistSecret\("storageEncryptionKey"/,
    "a freshly generated key must be persisted, not process-local"
  );
  const readBacks = source.match(/getPersistedSecret\("storageEncryptionKey"\)/g) ?? [];
  assert.ok(
    readBacks.length >= 2,
    "persistSecret never throws — the generated key must be read back so a silent " +
      "write failure cannot leave this session on an ephemeral key (it would encrypt " +
      "rows the next boot cannot decrypt)"
  );
  assert.match(
    source,
    /OMNIROUTE_STORAGE_KEY_AUTOGEN/,
    "operators must keep an explicit opt-out for intentional plaintext setups"
  );
});

test("plaintext credential sweep runs after ensureSecrets and is non-fatal", () => {
  const source = readSource("src/instrumentation-node.ts");

  const secretsCall = source.indexOf("await ensureSecrets();");
  const sweepCall = source.indexOf("encryptPlaintextConnectionCredentials");

  assert.notEqual(secretsCall, -1, "ensureSecrets() call not found");
  assert.notEqual(
    sweepCall,
    -1,
    "the plaintext credential sweep is unwired — credentials from the passthrough era stay at rest unencrypted"
  );
  assert.ok(
    secretsCall < sweepCall,
    "the sweep must run after ensureSecrets(), which generates the key it encrypts with"
  );
});

test("the sweep lives in db/providers/migrations and is exported", () => {
  const source = readSource("src/lib/db/providers/migrations.ts");

  assert.match(
    source,
    /export function encryptPlaintextConnectionCredentials/,
    "sweep must be exported from the connection-migrations module"
  );
});
