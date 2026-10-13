/**
 * Log-export runner — the destination-agnostic half of the pipeline.
 *
 * Per destination: resolve its type, decrypt its config, build a client, then drain
 * `call_logs` forward from the persisted cursor in batches. The cursor advances only
 * after `send()` resolves, so a crashed or failing run resumes at the last row the
 * destination actually accepted; BigQuery-style `insertId` de-duplication covers the
 * one batch that may be re-sent.
 */

import {
  advanceLogExportCursor,
  getEnabledLogExportDestinations,
  getLogExportDestination,
  recordLogExportRun,
  resetLogExportCursor,
  type LogExportDestinationRow,
} from "@/lib/db/logExportDestinations";
import { countCallLogsAfterRowId, getMaxCallLogRowId } from "@/lib/usage/callLogExportSource";
import { runExportChild } from "./childRunner";
export { __setLogExportChildOptionsForTest } from "./childRunner";
import { exportSecretValues, safeExportError } from "./safeExportError";
import { getLogExportDestinationType } from "./registry";
import { decryptDestinationConfig } from "./secrets";
import type { LogExportClient } from "./types";

export interface DestinationRunResult {
  destinationId: string;
  destinationName: string;
  type: string;
  exported: number;
  batches: number;
  cursorRowId: number;
  pendingAfterRun: number;
  success: boolean;
  error: string | null;
  /** True when another drain of this destination was already in flight. */
  skipped: boolean;
}

export interface LogExportRunSummary {
  destinations: DestinationRunResult[];
  exported: number;
  failures: number;
}

function parseDestinationConfig(destination: LogExportDestinationRow): Record<string, unknown> {
  const type = getLogExportDestinationType(destination.type);
  if (!type) throw new Error(`Unknown log export destination type "${destination.type}"`);
  const parsed = type.configSchema.safeParse(
    decryptDestinationConfig(destination.type, destination.config)
  );
  if (!parsed.success) {
    throw new Error(`Stored configuration for "${destination.name}" is invalid or incomplete`);
  }
  return parsed.data;
}

/** Connectivity probes keep their existing API; export runs create clients only in the child. */
export function createClientForDestination(destination: LogExportDestinationRow): LogExportClient {
  const config = parseDestinationConfig(destination);
  return getLogExportDestinationType(destination.type)!.createClient(config);
}

/**
 * A cursor above the table's high-water mark means `call_logs` was purged and rowids
 * restarted; without this guard every future row would sit below the cursor forever.
 */
function reconcileCursor(destination: LogExportDestinationRow): number {
  const maxRowId = getMaxCallLogRowId();
  if (destination.cursorRowId > maxRowId) {
    resetLogExportCursor(destination.id, 0);
    console.warn(
      `[LogExport] ${destination.name}: cursor ${destination.cursorRowId} is above max ` +
        `call_logs rowid ${maxRowId}; logs were purged, restarting from the beginning.`
    );
    return 0;
  }
  return destination.cursorRowId;
}

/**
 * Destinations currently draining. The cron tick and the "run now" endpoint can fire at
 * the same time; two concurrent drains of one destination would re-send a batch and could
 * write the cursor backwards, so the second caller returns immediately instead.
 */
const inFlight = new Set<string>();

/** Drain one destination. Never throws: the failure is recorded and returned. */
export async function runDestinationExport(
  destination: LogExportDestinationRow
): Promise<DestinationRunResult> {
  const result: DestinationRunResult = {
    destinationId: destination.id,
    destinationName: destination.name,
    type: destination.type,
    exported: 0,
    batches: 0,
    cursorRowId: destination.cursorRowId,
    pendingAfterRun: 0,
    success: true,
    error: null,
    skipped: false,
  };

  if (inFlight.has(destination.id)) {
    result.skipped = true;
    result.pendingAfterRun = countCallLogsAfterRowId(destination.cursorRowId);
    return result;
  }
  inFlight.add(destination.id);

  let secretValues: string[] = [];
  try {
    const config = parseDestinationConfig(destination);
    secretValues = exportSecretValues(
      config,
      getLogExportDestinationType(destination.type)?.secretFields ?? []
    );
    const cursor = reconcileCursor(destination);
    result.cursorRowId = cursor;
    const batchSize = Math.max(1, Math.min(destination.batchSize, 10_000));
    await runExportChild(
      {
        kind: "start",
        destination: { id: destination.id, type: destination.type, name: destination.name },
        config,
        batchSize,
        maxRowsPerRun: Math.max(batchSize, destination.maxRowsPerRun),
        includeBodies: destination.includeBodies,
        maxBodyBytes: destination.maxBodyBytes,
        cursorRowId: cursor,
      },
      (batchCursor, count) => {
        // Persist BEFORE acknowledging: the child cannot send another batch until this succeeds.
        advanceLogExportCursor(destination.id, batchCursor, count);
        result.exported += count;
        result.batches += 1;
        result.cursorRowId = batchCursor;
      },
      secretValues
    );
    result.pendingAfterRun = countCallLogsAfterRowId(result.cursorRowId);
    recordLogExportRun(destination.id, "success", null);
  } catch (error) {
    result.success = false;
    result.error = safeExportError(error, secretValues);
    result.pendingAfterRun = countCallLogsAfterRowId(result.cursorRowId);
    recordLogExportRun(destination.id, "failure", result.error);
    console.error(`[LogExport] ${destination.name} failed: ${result.error}`);
  } finally {
    inFlight.delete(destination.id);
  }

  return result;
}

/** Run one destination by id. Returns null when it does not exist. */
export async function runSingleLogExport(id: string): Promise<DestinationRunResult | null> {
  const destination = getLogExportDestination(id);
  if (!destination) return null;
  return runDestinationExport(destination);
}

/** Run every enabled destination. This is what the hourly job calls. */
export async function runAllLogExports(): Promise<LogExportRunSummary> {
  const rows = getEnabledLogExportDestinations();
  const destinations: DestinationRunResult[] = [];

  // Sequential on purpose: destinations share the same SQLite read path and a slow
  // upstream should not multiply concurrent connections on a self-hosted box.
  for (const destination of rows) {
    destinations.push(await runDestinationExport(destination));
  }

  return {
    destinations,
    exported: destinations.reduce((sum, d) => sum + d.exported, 0),
    failures: destinations.filter((d) => !d.success).length,
  };
}
