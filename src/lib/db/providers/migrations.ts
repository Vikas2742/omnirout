/**
 * db/providers/migrations — Connection-level migration utilities and GHE Copilot host discovery.
 *
 * Split from provider.ts to keep the main CRUD file under the size ratchet.
 */

import { getDbInstance, rowToCamel } from "../core";
import { backupDbFile } from "../backup";
import {
  migrateLegacyEncryptedString,
  encrypt,
  isEncryptionEnabled,
  looksEncrypted,
} from "../encryption";
import { invalidateDbCache } from "../readCache";

interface StatementLike<TRow = unknown> {
  all: (...params: unknown[]) => TRow[];
  get: (...params: unknown[]) => TRow | undefined;
  run: (...params: unknown[]) => { changes?: number };
}

interface DbLike {
  prepare: <TRow = unknown>(sql: string) => StatementLike<TRow>;
  transaction: <T>(fn: () => T) => () => T;
}

// ──────────────── Auto Migration ────────────────

/**
 * Scans all connections and re-encrypts any fields using the old dynamic salt
 * so they use the new canonical static salt.
 */
export function autoMigrateLegacyEncryptedConnections(): number {
  const db = getDbInstance() as unknown as DbLike;
  const rows = db.prepare("SELECT * FROM provider_connections").all();
  let migratedCount = 0;

  for (const row of rows) {
    const camelRow = rowToCamel(row);
    if (!camelRow) continue;

    let updatedRow = false;

    const encryptedFields = ["apiKey", "idToken", "accessToken", "refreshToken"];
    for (const field of encryptedFields) {
      if (typeof camelRow[field] === "string") {
        const { updated, value } = migrateLegacyEncryptedString(camelRow[field] as string);
        if (updated) {
          camelRow[field] = value;
          updatedRow = true;
        }
      }
    }

    if (updatedRow) {
      // camelRow[field] is already re-encrypted!
      // But _updateConnectionRow does not re-encrypt automatically, so we pass it safely.
      // Wait, _updateConnectionRow runs the full data through `encryptConnectionFields`,
      // but `encryptConnectionFields` will re-encrypt plain text.
      // BUT `migrateLegacyEncryptedString` returns ALREADY ENCRYPTED ciphertext!
      // Wait... if we pass ALREADY ENCRYPTED text to `_updateConnectionRow`,
      // `encryptConnectionFields` in `_updateConnectionRow` will encrypt it AGAIN!
      // Let's modify the DB directly so we don't double encrypt.

      db.prepare(
        "UPDATE provider_connections SET api_key = @apiKey, id_token = @idToken, access_token = @accessToken, refresh_token = @refreshToken, updated_at = @updatedAt WHERE id = @id"
      ).run({
        id: camelRow.id,
        apiKey: camelRow.apiKey ?? null,
        idToken: camelRow.idToken ?? null,
        accessToken: camelRow.accessToken ?? null,
        refreshToken: camelRow.refreshToken ?? null,
        updatedAt: new Date().toISOString(),
      });
      migratedCount++;
    }
  }

  if (migratedCount > 0) {
    backupDbFile("pre-write");
    invalidateDbCache("connections");
    console.log(`[DB] Auto-migrated ${migratedCount} connection(s) to new static-salt encryption.`);
  }

  return migratedCount;
}

/**
 * Encrypts credential fields still stored in PLAINTEXT — installs that ran
 * without STORAGE_ENCRYPTION_KEY before boot-time key auto-generation
 * existed. Runs once at boot after ensureSecrets() (instrumentation-node.ts);
 * no-op while encryption is unconfigured, so intentional passthrough setups
 * keep working. Idempotent: rows already carrying the `enc:v1:` prefix are
 * left byte-identical. The direct UPDATE mirrors
 * autoMigrateLegacyEncryptedConnections above — the values are already
 * encrypted by encrypt() here, so they must not pass through a write path
 * that treats them as plaintext again.
 */
export function encryptPlaintextConnectionCredentials(): number {
  if (!isEncryptionEnabled()) return 0;

  const db = getDbInstance() as unknown as DbLike;
  const rows = db.prepare("SELECT * FROM provider_connections").all();
  const updateStmt = db.prepare(
    "UPDATE provider_connections SET api_key = @apiKey, id_token = @idToken, access_token = @accessToken, refresh_token = @refreshToken, updated_at = @updatedAt WHERE id = @id"
  );
  const credentialFields = ["apiKey", "idToken", "accessToken", "refreshToken"] as const;
  let encryptedCount = 0;
  let backupCreated = false;

  for (const row of rows) {
    const camelRow = rowToCamel(row);
    if (!camelRow) continue;

    let updatedRow = false;
    for (const field of credentialFields) {
      const value = camelRow[field];
      if (typeof value !== "string" || value.length === 0 || looksEncrypted(value)) continue;
      camelRow[field] = encrypt(value);
      updatedRow = true;
    }

    if (!updatedRow) continue;
    if (!backupCreated) {
      backupDbFile("pre-write");
      backupCreated = true;
    }

    updateStmt.run({
      id: camelRow.id,
      apiKey: camelRow.apiKey ?? null,
      idToken: camelRow.idToken ?? null,
      accessToken: camelRow.accessToken ?? null,
      refreshToken: camelRow.refreshToken ?? null,
      updatedAt: new Date().toISOString(),
    });
    encryptedCount++;
  }

  if (encryptedCount > 0) {
    invalidateDbCache("connections");
    console.log(
      `[DB] Encrypted ${encryptedCount} connection(s) that were stored as plaintext credentials.`
    );
  }

  return encryptedCount;
}

// ──────────────── GHE Copilot ────────────────

export function getGheCopilotHosts(): string[] {
  const hosts = new Set<string>();
  try {
    const db = getDbInstance();
    const rows = db
      .prepare(
        "SELECT provider_specific_data FROM provider_connections WHERE provider = 'ghe-copilot' AND is_active = 1"
      )
      .all() as { provider_specific_data: string | null }[];
    for (const row of rows) {
      if (!row.provider_specific_data) continue;
      try {
        const psd = JSON.parse(row.provider_specific_data);
        const urls = [psd.gheUrl, psd.copilotApiUrl, psd.copilotProxyUrl];
        for (const urlStr of urls) {
          if (typeof urlStr === "string" && urlStr.trim()) {
            try {
              const url = new URL(urlStr);
              if (url.hostname) {
                hosts.add(url.hostname.toLowerCase());
              }
            } catch {
              // Ignore invalid URLs
            }
          }
        }
      } catch {
        // Ignore JSON parse errors
      }
    }
  } catch (err) {
    console.error("[DB] getGheCopilotHosts: failed to read GHE Copilot connections", err);
  }
  return [...hosts];
}
