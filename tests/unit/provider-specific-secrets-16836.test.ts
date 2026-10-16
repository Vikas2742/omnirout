import test from "node:test";
import assert from "node:assert/strict";
import { encryptConnectionFields, decryptConnectionFields, looksEncrypted } from "../../src/lib/db/encryption.ts";
import { createLazyRowProxy, createLazyConnectionView } from "../../src/lib/db/providers/lazyConnectionView.ts";

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
