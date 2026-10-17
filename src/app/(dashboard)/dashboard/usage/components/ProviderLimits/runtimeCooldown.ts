import type { AvailabilityEvidence, HealthConnection } from "./healthOverview";

/** Client-only equivalent of services/accountFallback.ts:cooldownUntilMs (#3954).
 * Do not import the server fallback module (DB/auth side effects) into the dashboard.
 */
export function parseRuntimeTimestamp(value: string | number | Date | null | undefined): number {
  if (value === null || value === undefined || value === "") return NaN;
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return value;
  const raw = value.trim();
  return /^\d+(\.\d+)?$/.test(raw) ? Number(raw) : new Date(raw).getTime();
}

export const SUMMARY_FRESHNESS_MS = 90_000;
/** One source per projection, including explicit nulls clearing old failures.
 * Summary schema: src/lib/resilience/cooldownManager.ts:toCooldownConnection.
 */
export function runtimeCooldownEvidence(
  connection: HealthConnection,
  evidence: AvailabilityEvidence,
  now = Date.now()
) {
  const summaryTime = parseRuntimeTimestamp(evidence.observedAt);
  const row =
    !evidence.summaryFailed &&
    Number.isFinite(summaryTime) &&
    now - summaryTime <= SUMMARY_FRESHNESS_MS &&
    evidence.cooldown?.id === connection.id
      ? evidence.cooldown
      : undefined;
  const runtime = row || connection;
  const explicit = parseRuntimeTimestamp(runtime.rateLimitedUntil);
  const derived = !Number.isFinite(explicit) && !!row && row.cooldownRemainingMs > 0;
  const until = Number.isFinite(explicit)
    ? explicit
    : derived
      ? summaryTime + row.cooldownRemainingMs
      : 0;
  return { row, runtime, summaryTime, derived, until };
}
/** The same absolute runtime deadline is used by capture and projection. */
export function runtimeCooldownUntil(
  connection: HealthConnection,
  evidence: AvailabilityEvidence,
  now = Date.now()
) {
  return runtimeCooldownEvidence(connection, evidence, now).until;
}
export interface CooldownObservation {
  until: number;
  derived: boolean;
  observedAt: number;
}
export function sameCooldown(
  old: CooldownObservation | undefined,
  next: { until: number; derived: boolean }
) {
  return (
    !!old &&
    (old.until === next.until ||
      (old.derived && next.derived && Math.abs(old.until - next.until) <= 5000))
  );
}
