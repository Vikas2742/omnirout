import test from "node:test";
import assert from "node:assert/strict";
import { encryptConnectionFields, decryptConnectionFields, looksEncrypted } from "../../src/lib/db/encryption.ts";
import { createLazyRowProxy, createLazyConnectionView } from "../../src/lib/db/providers/lazyConnectionView.ts";
import { summarizeProviderConnectionForAudit } from "../../src/lib/compliance/providerAudit.ts";

const originalKey = process.env.STORAGE_ENCRYPTION_KEY;
test.before(() => { process.env.STORAGE_ENCRYPTION_KEY = "provider-metadata-16836-test-key"; });
test.after(() => {
  if (originalKey === undefined) delete process.env.STORAGE_ENCRYPTION_KEY;
  else process.env.STORAGE_ENCRYPTION_KEY = originalKey;
});

test("#16836 protects consoleApiKey but preserves SQLite-queryable metadata", () => {
  const original = {
    id: "conn-16836", provider: "agentrouter",
    providerSpecificData: { consoleApiKey: "console-secret-16836", workspaceId: "ws-1", nested: { setting: 1 } },
  };
  const stored = encryptConnectionFields({ ...original });
  const data = stored.providerSpecificData as Record<string, unknown>;
  assert.equal(looksEncrypted(data.consoleApiKey), true);
  assert.equal(data.workspaceId, "ws-1");
  assert.deepEqual(data.nested, { setting: 1 });
  assert.equal(original.providerSpecificData.consoleApiKey, "console-secret-16836");
  assert.deepEqual(decryptConnectionFields(stored).providerSpecificData, original.providerSpecificData);
  assert.equal(
    decryptConnectionFields({ providerSpecificData: { consoleApiKey: "legacy-plaintext" } }).providerSpecificData?.consoleApiKey,
    "legacy-plaintext"
  );
  assert.equal(
    encryptConnectionFields({ ...stored }).providerSpecificData?.consoleApiKey,
    data.consoleApiKey,
    "already encrypted values must not be double-encrypted on unrelated updates"
  );
});

test("#16836 lazy views expose plaintext while the row and JSON stay protected at rest", () => {
  const stored = encryptConnectionFields({
    id: "conn-lazy", provider: "agentrouter", isActive: true,
    providerSpecificData: { consoleApiKey: "lazy-secret-16836", workspaceId: "ws-2" },
  });
  const raw = { ...stored };
  const lazy = createLazyRowProxy(raw);
  assert.equal((lazy.providerSpecificData as Record<string, unknown>).consoleApiKey, "lazy-secret-16836");
  assert.equal((JSON.parse(JSON.stringify(lazy)) as { providerSpecificData: { consoleApiKey: string } }).providerSpecificData.consoleApiKey, "lazy-secret-16836");
  assert.equal(looksEncrypted((raw.providerSpecificData as Record<string, unknown>).consoleApiKey), true);
  const typed = createLazyConnectionView(raw);
  assert.equal(typed.providerSpecificData.consoleApiKey, "lazy-secret-16836");
});

// The audit writer must not persist either the decrypted value or ciphertext.
test("#16836 audit snapshots never include nested console credentials", () => {
  const stored = encryptConnectionFields({
    id: "conn-audit",
    provider: "agentrouter",
    apiKey: "primary-secret-16836",
    providerSpecificData: {
      consoleApiKey: "audit-secret-16836",
      workspaceId: "ws-public",
    },
  });
  for (const row of [stored, decryptConnectionFields(stored), createLazyRowProxy(stored)]) {
    const snapshot = summarizeProviderConnectionForAudit(row);
    const serialized = JSON.stringify(snapshot);
    assert.ok(!serialized.includes("audit-secret-16836"));
    assert.ok(!serialized.includes("primary-secret-16836"));
    assert.ok(!serialized.includes("enc:v1:"));
    assert.deepEqual(snapshot?.providerSpecificData, { workspaceId: "ws-public" });
  }
});

test("#16836 all existing audit-redacted console secrets are encrypted", () => {
  const sensitiveFields = [
    "consoleApiKey",
    "alibabaConsoleCookie",
    "alibabaConsoleSecToken",
    "xiaomiMimoConsoleCookie",
  ] as const;
  const metadata: Record<string, string> = { workspaceId: "ws-visible" };
  for (const field of sensitiveFields) metadata[field] = `test-secret-${field}`;
  const stored = encryptConnectionFields({
    id: "conn-all-secrets",
    provider: "alibaba",
    providerSpecificData: metadata,
  });
  const atRest = stored.providerSpecificData as Record<string, unknown>;
  for (const field of sensitiveFields) {
    assert.equal(looksEncrypted(atRest[field]), true, field);
    assert.ok(!JSON.stringify(atRest).includes(`test-secret-${field}`));
  }
  assert.equal(atRest.workspaceId, "ws-visible");
  const restored = decryptConnectionFields(stored);
  assert.deepEqual(restored.providerSpecificData, metadata);
  assert.deepEqual(summarizeProviderConnectionForAudit(restored)?.providerSpecificData, {
    workspaceId: "ws-visible",
  });
});

test("#16836 invalid nested ciphertext sets the existing credential recovery flag", () => {
  const row = encryptConnectionFields({
    id: "conn-stale-nested",
    provider: "agentrouter",
    providerSpecificData: { consoleApiKey: "stale-console-secret", workspaceId: "public" },
  });
  const metadata = row.providerSpecificData as Record<string, string>;
  const encrypted = metadata.consoleApiKey;
  assert.equal(looksEncrypted(encrypted), true);
  metadata.consoleApiKey = encrypted.slice(0, -1) + (encrypted.endsWith("0") ? "1" : "0");
  const restored = decryptConnectionFields(row);
  assert.equal(restored.credentialDecryptFailed, true);
  assert.equal(
    (restored.providerSpecificData as Record<string, unknown>).consoleApiKey,
    null,
    "corrupt ciphertext must not be forwarded to quota or provider APIs"
  );
  assert.equal((restored.providerSpecificData as Record<string, unknown>).workspaceId, "public");
});
