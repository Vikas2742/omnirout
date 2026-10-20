/**
 * A2A Routing Decision Logger
 *
 * Records every routing decision to the `routing_decisions` SQLite table.
 * Used by `omniroute_explain_route` (T03) and future learning router.
 * Retention: 7 days default.
 */

import { randomUUID } from "crypto";

export interface RoutingFactor {
  name: string; // "quota", "health", "cost", "latency", "task_fit"
  value: number;
  weight: number;
  contribution: number;
}

export interface FallbackEntry {
  provider: string;
  reason: string; // "circuit_breaker_open", "quota_exceeded", "timeout"
}

export interface RoutingDecision {
  requestId: string;
  taskType: string;
  comboId: string;
  /** Caller intent only; never interpret this as an executed combo. */
  requestedCombo?: string | null;
  providerSelected: string;
  modelUsed: string;
  score: number;
  factors: RoutingFactor[];
  fallbacksTriggered: FallbackEntry[];
  success: boolean;
  latencyMs: number;
  cost: number;
  timestamp: string;
}

/**
 * A combo requested by an A2A caller is not proof that it was executed.
 * Forced-model and server-side routing rules can still choose another target.
 * Attribute execution only to a combo explicitly reported by the gateway, and
 * preserve caller intent in a separate field for debugging (#17188).
 */
export function resolveA2AComboAttribution(metadata: {
  requested_combo?: unknown;
  confirmed_combo?: unknown;
}): { comboId: string; requestedCombo: string | null } {
  const requestedCombo =
    typeof metadata.requested_combo === "string" && metadata.requested_combo.trim()
      ? metadata.requested_combo.trim()
      : null;
  const confirmedCombo =
    typeof metadata.confirmed_combo === "string" && metadata.confirmed_combo.trim()
      ? metadata.confirmed_combo.trim()
      : null;
  return { comboId: confirmedCombo || "default", requestedCombo };
}

// In-memory log (production would use SQLite via routing_decisions table)
const decisions: RoutingDecision[] = [];
const MAX_DECISIONS = 1000;
const RETENTION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Log a routing decision.
 */
export function logRoutingDecision(
  params: Omit<RoutingDecision, "requestId" | "timestamp">
): RoutingDecision {
  const decision: RoutingDecision = {
    ...params,
    requestId: randomUUID(),
    timestamp: new Date().toISOString(),
  };

  decisions.push(decision);

  // Cleanup: cap + TTL
  if (decisions.length > MAX_DECISIONS) {
    const cutoff = new Date(Date.now() - RETENTION_MS);
    const validIdx = decisions.findIndex((d) => new Date(d.timestamp) > cutoff);
    if (validIdx > 0) decisions.splice(0, validIdx);
    else if (decisions.length > MAX_DECISIONS)
      decisions.splice(0, decisions.length - MAX_DECISIONS);
  }

  return decision;
}
