/**
 * Production adapter for {@link partitionJevTargets}: the same pre-dispatch
 * gates the attempt loop would apply, without mutating attempt state.
 */

import { isModelLocked } from "../accountFallback.ts";
import { checkCredentialGate } from "../credentialGate.ts";
import { isProviderInCooldown } from "../providerCooldownTracker.ts";
import { parseModel } from "../model.ts";
import type { ResilienceSettings } from "../../../src/lib/resilience/settings";
import { findOpenCircuitBreaker, readConnectionForCooldownGate } from "./executeTargetGates.ts";
import { resolvePersistedConnectionCooldownSkipReason } from "./comboPredicates.ts";
import { resolveQuotaExhaustionCutoffForTarget } from "./quotaExhaustionCutoff.ts";
import { resolveResetWindowConfig } from "./quotaScoring.ts";
import { filterTargetsByRequestCompatibility } from "./comboStructure.ts";
import { applyContextRequirements } from "./contextRequirements.ts";
import {
  modelAvailabilitySkipReason,
  type ComboLogger,
  type IsModelAvailable,
  type ResolvedComboTarget,
} from "./types.ts";
import type { CheckJevBlock } from "./jevEligibility.ts";
import { partitionJevTargets, type JevPartition } from "./jevEligibility.ts";

export type JevBlockCheckerDeps = {
  body: Record<string, unknown>;
  config: Record<string, unknown> | null | undefined;
  resilienceSettings: ResilienceSettings;
  log: ComboLogger;
  isModelAvailable?: IsModelAvailable;
  comboName: string;
};

/**
 * Build the production `checkBlock` port. Per-target gates first; list-level
 * tools/vision and context filters are applied in {@link partitionJevTargetsForAsk}.
 */
export function createJevBlockChecker(deps: JevBlockCheckerDeps): CheckJevBlock {
  const resetWindowConfig = resolveResetWindowConfig(deps.config);
  const gates: Array<CheckJevBlock> = [
    async (target) => {
      const provider = target.provider;
      if (!provider) return null;
      return findOpenCircuitBreaker(provider, target.connectionId) ? "circuit_open" : null;
    },
    async (target) => {
      const provider = target.provider;
      if (
        !deps.resilienceSettings.providerCooldown.enabled ||
        !provider ||
        provider === "unknown"
      ) {
        return null;
      }
      return isProviderInCooldown(
        provider,
        target.connectionId ?? undefined,
        deps.resilienceSettings
      ) || isProviderInCooldown(provider, undefined, deps.resilienceSettings)
        ? "provider_cooldown"
        : null;
    },
    async (target) => {
      if (!target.connectionId) return null;
      const persisted = await resolvePersistedConnectionCooldownSkipReason(target, (id) =>
        readConnectionForCooldownGate(id, false)
      );
      return persisted ? "persisted_cooldown" : null;
    },
    async (target) => {
      const provider = target.provider;
      const rawModel = parseModel(target.modelStr).model || target.modelStr;
      return provider && rawModel && isModelLocked(provider, target.connectionId || "", rawModel)
        ? "model_lockout"
        : null;
    },
    async (target) => {
      const provider = target.provider;
      if (!provider || !target.connectionId) return null;
      const quotaCutoff = await resolveQuotaExhaustionCutoffForTarget(
        provider,
        target.connectionId,
        deps.resilienceSettings,
        resetWindowConfig,
        deps.comboName,
        deps.log,
        target.modelStr
      );
      return quotaCutoff.blocked ? "quota_cutoff" : null;
    },
    async (target) => {
      if (!deps.isModelAvailable) return null;
      return modelAvailabilitySkipReason(await deps.isModelAvailable(target.modelStr, target));
    },
    async (target) => {
      if (!target.connectionId) return null;
      return checkCredentialGate(target.connectionId, target.provider, target.modelStr).allowed ===
        false
        ? "credential_gate"
        : null;
    },
  ];

  return async (target) => {
    for (const gate of gates) {
      const reason = await gate(target);
      if (reason) return reason;
    }
    return null;
  };
}

/**
 * Partition for the Jev choice call: per-target gates, then hard request
 * compatibility and context requirements. Survivors are the only options.
 */
export async function partitionJevTargetsForAsk(
  targets: readonly ResolvedComboTarget[],
  deps: JevBlockCheckerDeps
): Promise<JevPartition> {
  const perTarget = await partitionJevTargets(targets, createJevBlockChecker(deps));
  if (perTarget.eligible.length === 0) return perTarget;

  const compatFailOpen =
    (deps.config as { compatFilterFailOpen?: unknown } | null | undefined)?.compatFilterFailOpen ===
    true;
  const contextRequirements = (
    deps.config as { contextRequirements?: Parameters<typeof applyContextRequirements>[1] } | null
  )?.contextRequirements;
  const compatibility = filterTargetsByRequestCompatibility(
    perTarget.eligible,
    deps.body,
    deps.log,
    "Jev pre-ask",
    { failOpen: compatFailOpen }
  );
  const compatibilityBlocks = getRemovedTargets(perTarget.eligible, compatibility);
  const eligible = applyContextRequirements(compatibility, contextRequirements, deps.log);
  const contextBlocks = getRemovedTargets(compatibility, eligible);

  return {
    eligible,
    blocked: [...perTarget.blocked, ...compatibilityBlocks, ...contextBlocks],
  };
}

function getRemovedTargets(
  before: readonly ResolvedComboTarget[],
  after: readonly ResolvedComboTarget[]
): JevPartition["blocked"] {
  const survivors = new Set(after.map((target) => target.executionKey));
  return before
    .filter((target) => !survivors.has(target.executionKey))
    .map((target) => ({ target, reason: "availability" as const }));
}
