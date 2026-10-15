/** Jev admission for execute-mode nested combo references. */

import { errorResponse } from "../../utils/error.ts";
import { isRuntimeUnitAtConcurrencyCap } from "./runtimeUnitCapacity.ts";
import { createJevAsk } from "./jevAsk.ts";
import { extractPromptForJevState, orderJevComboTargets } from "./jevOrdering.ts";
import { recordComboDecision } from "./decisionTrace.ts";
import {
  calculatePromptCacheAffinityScores,
  promptCacheTargetIdentity,
  resolvePromptCacheAffinityKey,
} from "./promptCacheAffinity.ts";
import { partitionJevTargetsForAsk } from "./jevBlockChecker.ts";
import { normalizeStickinessMessages, peekSessionStickinessBinding } from "./sessionStickiness.ts";
import { resolveResilienceSettings } from "../../../src/lib/resilience/settings.ts";
import type {
  ComboCollectionLike,
  ComboLogger,
  HiddenModelsByProvider,
  IsModelAvailable,
  ResolvedComboUnit,
} from "./types.ts";

export type JevRuntimeUnitResult = {
  units: ResolvedComboUnit[];
  executionStrategy: string;
  earlyResponse: Response | null;
};

/**
 * Judge runtime units without expanding combo references into their child models.
 * A referenced combo applies its own model-level pre-dispatch checks when run.
 */
export async function orderJevRuntimeUnits(args: {
  units: ResolvedComboUnit[];
  body: Record<string, unknown>;
  comboName: string;
  config: Record<string, unknown>;
  settings?: Record<string, unknown> | null;
  allCombos: ComboCollectionLike;
  apiKeyAllowedConnections?: string[] | null;
  hiddenModelsByProvider?: HiddenModelsByProvider;
  isModelAvailable?: IsModelAvailable;
  invocationId?: string;
  signal?: AbortSignal | null;
  log: ComboLogger;
}): Promise<JevRuntimeUnitResult> {
  const modelUnits = args.units.filter(
    (unit): unit is Extract<ResolvedComboUnit, { kind: "model" }> => unit.kind === "model"
  );
  const modelPartition = await partitionJevTargetsForAsk(modelUnits, {
    body: args.body,
    config: args.config,
    resilienceSettings: resolveResilienceSettings(args.settings),
    log: args.log,
    comboName: args.comboName,
    isModelAvailable: args.isModelAvailable,
  });
  const eligibleModels = new Set(modelPartition.eligible.map((target) => target.executionKey));
  const blockedKeys = new Set(modelPartition.blocked.map((row) => row.target.executionKey));

  for (const unit of args.units) {
    if (unit.kind !== "combo-ref") continue;
    if (
      await isRuntimeUnitAtConcurrencyCap(
        unit,
        args.allCombos,
        undefined,
        args.hiddenModelsByProvider
      )
    ) {
      blockedKeys.add(unit.executionKey);
      if (args.invocationId) {
        recordComboDecision(args.invocationId, {
          step: unit.executionKey,
          target: `combo:${unit.comboName}`,
          decision: "skipped_before_dispatch",
          reason: "concurrency_cap",
          detail: "verdict=blocked reason=concurrency_cap",
        });
      }
    }
  }

  for (const row of modelPartition.blocked) {
    if (!args.invocationId) continue;
    recordComboDecision(args.invocationId, {
      step: row.target.executionKey,
      target: row.target.modelStr,
      decision: "skipped_before_dispatch",
      reason: row.reason,
      detail: `verdict=blocked reason=${row.reason}`,
    });
  }

  let eligibleUnits = args.units.filter((unit) =>
    unit.kind === "model"
      ? eligibleModels.has(unit.executionKey)
      : !blockedKeys.has(unit.executionKey)
  );
  if (eligibleUnits.length === 0) {
    return {
      units: [],
      executionStrategy: "priority",
      earlyResponse: errorResponse(404, "Every target in this combo was blocked before Jev"),
    };
  }

  const pin = peekSessionStickinessBinding(normalizeStickinessMessages(args.body), args.comboName);
  const hasPromptCachePin =
    pin.modelStr === null && resolvePromptCacheAffinityKey(args.body) !== null;
  if (hasPromptCachePin) {
    const affinityScores = calculatePromptCacheAffinityScores(
      eligibleUnits.map((unit) => ({
        executionKey: unit.executionKey,
        connectionId: unit.kind === "model" ? unit.connectionId : null,
        authType: unit.kind === "model" ? unit.authType : null,
      })),
      args.body
    );
    const winner = eligibleUnits.reduce((best, unit) => {
      const score =
        affinityScores.get(
          promptCacheTargetIdentity({
            executionKey: unit.executionKey,
            connectionId: unit.kind === "model" ? unit.connectionId : null,
          })
        ) ?? -1;
      const bestScore =
        affinityScores.get(
          promptCacheTargetIdentity({
            executionKey: best.executionKey,
            connectionId: best.kind === "model" ? best.connectionId : null,
          })
        ) ?? -1;
      if (score !== bestScore) return score > bestScore ? unit : best;
      const identity = promptCacheTargetIdentity({
        executionKey: unit.executionKey,
        connectionId: unit.kind === "model" ? unit.connectionId : null,
      });
      const bestIdentity = promptCacheTargetIdentity({
        executionKey: best.executionKey,
        connectionId: best.kind === "model" ? best.connectionId : null,
      });
      return identity.localeCompare(bestIdentity) < 0 ? unit : best;
    });
    eligibleUnits = [
      winner,
      ...eligibleUnits.filter((unit) => unit.executionKey !== winner.executionKey),
    ];
  }
  const pinnedIndex =
    pin.modelStr === null
      ? -1
      : eligibleUnits.findIndex(
          (unit) =>
            unit.kind === "model" &&
            unit.modelStr === pin.modelStr &&
            (!pin.connectionId || unit.connectionId === pin.connectionId)
        );
  const sessionPinned = pinnedIndex >= 0 || hasPromptCachePin;
  const choiceTargets = eligibleUnits.map((unit) => ({
    unit,
    executionKey: unit.executionKey,
    modelStr: unit.kind === "model" ? unit.modelStr : `combo:${unit.comboName}`,
    label: unit.label || (unit.kind === "combo-ref" ? `combo:${unit.comboName}` : unit.modelStr),
  }));
  const outcome = await orderJevComboTargets(choiceTargets, extractPromptForJevState(args.body), {
    sessionPinned,
    ask: createJevAsk({
      apiKeyAllowedConnections: args.apiKeyAllowedConnections,
      log: args.log,
      signal: args.signal,
    }),
  });

  if (args.invocationId) {
    for (const hold of outcome.holds) {
      recordComboDecision(args.invocationId, {
        step: hold.executionKey,
        target: hold.modelStr,
        decision: "skipped_before_dispatch",
        reason: hold.reason,
        detail: hold.detail,
      });
    }
    for (const admitted of outcome.admitted) {
      recordComboDecision(args.invocationId, {
        step: admitted.executionKey,
        target: admitted.modelStr,
        decision: "not_reached",
        detail: admitted.detail,
      });
    }
  }

  const orderedUnits = outcome.targets.map((target) => target.unit);
  if (sessionPinned && pinnedIndex > 0) {
    const pinned = eligibleUnits[pinnedIndex];
    return {
      units: [pinned, ...orderedUnits.filter((unit) => unit.executionKey !== pinned.executionKey)],
      executionStrategy: "priority",
      earlyResponse: null,
    };
  }
  return { units: orderedUnits, executionStrategy: "priority", earlyResponse: null };
}
