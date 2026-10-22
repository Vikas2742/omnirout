/**
 * Evidence of historical public model identities for compatible provider nodes.
 * Prefix changes are recorded with upstream IDs read BEFORE the change, so a
 * legacy public ID can be resolved without stripping an arbitrary slash.
 * A match is advisory: consumers must ALSO confirm the new served model ID.
 * No existing pricing, synced-model, or custom-model rows are mutated.
 */
export interface HistoricalNodePrefix {
  prefix: string;
  modelIds: string[];
}

export interface PrefixHistoryDb {
  prepare(sql: string): {
    get(...params: unknown[]): unknown;
    all(...params: unknown[]): unknown[];
    run(...params: unknown[]): unknown;
  };
}

const NAMESPACE = "providerNodePrefixHistory";
const MAX_HISTORY = 12;
const MAX_MODEL_IDS = 8_000;
const MAX_ID_LENGTH = 1_024;

function normalizedModelIds(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const ids = new Set<string>();
  for (const row of raw) {
    const id =
      typeof row === "string"
        ? row
        : row && typeof row === "object"
          ? (row as { id?: unknown }).id
          : null;
    if (typeof id !== "string" || id.length === 0 || id.length > MAX_ID_LENGTH) continue;
    ids.add(id);
    if (ids.size >= MAX_MODEL_IDS) break;
  }
  return [...ids];
}

export function parseNodePrefixHistory(value: unknown): HistoricalNodePrefix[] {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(parsed)) return [];
  const entries: HistoricalNodePrefix[] = [];
  for (const item of parsed) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const candidate = item as { prefix?: unknown; modelIds?: unknown };
    if (typeof candidate.prefix !== "string") continue;
    const prefix = candidate.prefix.trim();
    if (!prefix || prefix.includes("/") || prefix.length > 128) continue;
    const modelIds = normalizedModelIds(candidate.modelIds);
    // The most recent snapshot for one prefix supersedes earlier appearances.
    const previous = entries.findIndex((entry) => entry.prefix === prefix);
    if (previous >= 0) entries.splice(previous, 1);
    entries.push({ prefix, modelIds });
  }
  return entries.slice(-MAX_HISTORY);
}

export function getNodePrefixHistory(db: PrefixHistoryDb, nodeId: string): HistoricalNodePrefix[] {
  const row = db.prepare(
    `SELECT value FROM key_value WHERE namespace = '${NAMESPACE}' AND key = ?`
  ).get(nodeId) as { value?: unknown } | undefined;
  return parseNodePrefixHistory(row?.value);
}

/** A pricing-only row never proves a model's upstream identity. */
export function getNodeSyncedAndCustomModelIds(
  db: PrefixHistoryDb,
  nodeId: string
): string[] {
  const out = new Set<string>();
  const syncedPrefix = `${nodeId}:`;
  // substr equality avoids LIKE metacharacter collisions in operator IDs.
  const rows = db.prepare(
    "SELECT value FROM key_value WHERE namespace = 'syncedAvailableModels' AND substr(key, 1, ?) = ?"
  ).all(syncedPrefix.length, syncedPrefix) as { value?: unknown }[];
  const custom = db.prepare(
    "SELECT value FROM key_value WHERE namespace = 'customModels' AND key = ?"
  ).get(nodeId) as { value?: unknown } | undefined;
  for (const row of [...rows, custom]) {
    if (!row || typeof row.value !== "string") continue;
    try {
      for (const id of normalizedModelIds(JSON.parse(row.value))) {
        out.add(id);
        if (out.size >= MAX_MODEL_IDS) return [...out];
      }
    } catch {
      // A malformed source is never acceptable identity evidence.
    }
  }
  return [...out];
}

/** Must execute in the same transaction as provider_nodes.prefix update. */
export function recordNodePrefixChange(
  db: PrefixHistoryDb,
  nodeId: string,
  oldPrefix: string | null | undefined,
  newPrefix: string | null | undefined
): boolean {
  const previous = oldPrefix?.trim() ?? "";
  const next = newPrefix?.trim() ?? "";
  if (!nodeId || !previous || previous === next) return false;
  const history = getNodePrefixHistory(db, nodeId).filter(
    (entry) => entry.prefix !== previous && entry.prefix !== next
  );
  history.push({
    prefix: previous,
    modelIds: getNodeSyncedAndCustomModelIds(db, nodeId),
  });
  db.prepare(`
    INSERT INTO key_value (namespace, key, value) VALUES (?, ?, ?)
    ON CONFLICT(namespace, key) DO UPDATE SET value = excluded.value
  `).run(NAMESPACE, nodeId, JSON.stringify(history.slice(-MAX_HISTORY)));
  return true;
}

export function deleteNodePrefixHistory(db: PrefixHistoryDb, nodeId: string): void {
  db.prepare("DELETE FROM key_value WHERE namespace = ? AND key = ?").run(NAMESPACE, nodeId);
}
