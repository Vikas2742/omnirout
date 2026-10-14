/** Jev adapter for combo target resolution and continuation state. */

import { getModelLockoutInfo } from "../accountFallback.ts";
import { getRemainingCooldownMs } from "../providerCooldownTracker.ts";
import { errorResponseWithComboDiagnostics } from "../../utils/error.ts";
import { getCachedProviderPoolConnections } from "../providerConnectionPool.ts";
import { parseModel } from "../model.ts";
import { evaluateSystemOneChoice, TYPESAFE_PROVIDER_ID } from "../typesafe/systemOne.ts";
import { getProviderCredentials } from "../../../src/sse/services/auth";
import { findOpenCircuitBreaker } from "./executeTargetGates.ts";
import {
  buildAllTargetsCoolingDownResponse,
  buildEmptyComboTargetsPayload,
  buildRecoveryHint,
  type PreDispatchExclusion,
  type PreDispatchExclusionReason,
} from "./pinRecovery.ts";
import { describeCapabilityFilterExhaustion } from "./comboStructure.ts";
import {
  applySessionStickiness,
  normalizeStickinessMessages,
  peekSessionStickinessBinding,
  resolveDisableSessionStickiness,
  type ApplyStickinessResult,
} from "./sessionStickiness.ts";
import { extractPromptForJevState, orderJevComboTargets } from "./jevOrdering.ts";
import type { JevAsk, JevOrderOutcome } from "./jevOrdering.ts";
import { partitionJevTargetsForAsk } from "./jevBlockChecker.ts";
import type { JevPartition } from "./jevEligibility.ts";
import { recordComboDecision } from "./decisionTrace.ts";
import type { resolveComboSetupConfig } from "../comboConfig.ts";
import type { ResilienceSettings } from "../../../src/lib/resilience/settings";
import type { NativeTurnPin } from "./nativeCodexTurnPin.ts";
import type { ComboLike, ComboLogger, IsModelAvailable, ResolvedComboTarget } from "./types.ts";

export interface JevPipelineDeps {
  body: Record<string, unknown>;
  combo: ComboLike;
  config: ReturnType<typeof resolveComboSetupConfig>;
  settings?: Record<string, unknown> | null;
  signal?: AbortSignal | null;
  nativeTurnPin?: NativeTurnPin | null;
  apiKeyAllowedConnections: string[] | null;
  log: ComboLogger;
  resilienceSettings: ResilienceSettings;
  isModelAvailable?: IsModelAvailable;
  deferContextOverflowWhenCompressible?: boolean;
  traceInvocationId?: string | null;
}

export type JevStrategyResult =
  { earlyResponse: Response } | { outcome: JevOrderOutcome; sticky: ApplyStickinessResult };

export async function orderByJevStrategy(
  deps: JevPipelineDeps,
  initialOrderedTargets: ResolvedComboTarget[]
): Promise<JevStrategyResult> {
  const { body, combo, log, signal } = deps;
  const partition = await partitionJevTargetsForAsk(initialOrderedTargets, {
    body,
    config: deps.config as Record<string, unknown> | null | undefined,
    resilienceSettings: deps.resilienceSettings,
    log,
    isModelAvailable: deps.isModelAvailable,
    comboName: combo.name,
    deferContextOverflowWhenCompressible: deps.deferContextOverflowWhenCompressible,
  });

  recordJevBlockedTargets(deps.traceInvocationId, partition.blocked);

  const eligible = partition.eligible;
  if (eligible.length === 0) {
    return { earlyResponse: buildJevAllTargetsBlockedResponse(partition.blocked, deps) };
  }

  const sessionPreview = await previewJevSessionStickiness(deps, eligible);
  const pinOwnsRequest =
    sessionPreview.sticky.stuck || isNativeJevTargetPinned(deps.nativeTurnPin, eligible, deps);
  const askTargets = sessionPreview.sticky.stuck ? sessionPreview.targets : eligible;
  const ask: JevAsk = async ({ state, criteria }) => {
    try {
      const credentials = await getProviderCredentials(
        TYPESAFE_PROVIDER_ID,
        null,
        deps.apiKeyAllowedConnections ?? null
      );
      const apiKey =
        credentials && typeof (credentials as { apiKey?: unknown }).apiKey === "string"
          ? (credentials as { apiKey: string }).apiKey
          : null;
      const result = await evaluateSystemOneChoice({ apiKey, state, criteria, signal });
      if (result.ok) {
        return {
          ok: true as const,
          answer: {
            choice: result.choice,
            probabilities: result.probabilities,
            confidence: result.confidence,
          },
        };
      }
      const unavailable = result as { reason: string };
      log.info("COMBO", `[jev] System One unavailable: ${unavailable.reason}`);
      if (unavailable.reason === "missing_api_key") {
        return { ok: false as const, reason: "missing_api_key" as const };
      }
      return { ok: false as const, reason: "unavailable" as const };
    } catch {
      log.warn("COMBO", "[jev] System One call failed (non-fatal); falling open to user order");
      return { ok: false as const, reason: "unavailable" as const };
    }
  };

  const outcome = await orderJevComboTargets(askTargets, extractPromptForJevState(body), {
    sessionPinned: pinOwnsRequest,
    ask,
  });
  const routedOutcome = pinOwnsRequest ? { ...outcome, protectHead: true } : outcome;

  recordJevOrderingOutcome(deps.traceInvocationId, routedOutcome, log);
  logJevOrderingSummary({
    pinOwnsRequest,
    comboName: combo.name,
    outcome: routedOutcome,
    eligibleCount: askTargets.length,
    blockedCount: partition.blocked.length,
    log,
  });
  return { outcome: routedOutcome, sticky: sessionPreview.sticky };
}

function recordJevBlockedTargets(
  invocationId: string | null | undefined,
  blocked: JevPartition["blocked"]
): void {
  if (!invocationId) return;
  for (const item of blocked) {
    recordComboDecision(invocationId, {
      step: item.target.executionKey,
      target: item.target.modelStr,
      decision: "skipped_before_dispatch",
      reason: item.reason,
      detail: `verdict=blocked reason=${item.reason}`,
    });
  }
}

function recordJevOrderingOutcome(
  invocationId: string | null | undefined,
  outcome: JevOrderOutcome,
  log: ComboLogger
): void {
  if (invocationId) {
    for (const hold of outcome.holds) {
      recordComboDecision(invocationId, {
        step: hold.executionKey,
        target: hold.modelStr,
        decision: "skipped_before_dispatch",
        reason: hold.reason,
        detail: hold.detail,
      });
    }
    for (const admitted of outcome.admitted) {
      recordComboDecision(invocationId, {
        step: admitted.executionKey,
        target: admitted.modelStr,
        decision: "not_reached",
        detail: admitted.detail,
      });
    }
  }

  if (!outcome.fellOpen || !outcome.fallbackReason) return;
  log.info(
    "COMBO",
    outcome.missingApiKey
      ? "[jev] Falling open to user order (Jev is not configured)"
      : `[jev] Falling open to user order (${outcome.fallbackReason})`
  );
}

function logJevOrderingSummary({
  pinOwnsRequest,
  comboName,
  outcome,
  eligibleCount,
  blockedCount,
  log,
}: {
  pinOwnsRequest: boolean;
  comboName: string;
  outcome: JevOrderOutcome;
  eligibleCount: number;
  blockedCount: number;
  log: ComboLogger;
}): void {
  if (pinOwnsRequest) {
    log.info("COMBO", `[jev] Skipping System One — continuation pin owns combo "${comboName}"`);
    return;
  }
  const targetNames = outcome.targets.map((target) => target.modelStr).join(" → ");
  log.info(
    "COMBO",
    `[jev] Admitted ${outcome.targets.length}/${eligibleCount} eligible (${blockedCount} blocked): ${targetNames}`
  );
}

function buildJevAllTargetsBlockedResponse(
  blocked: JevPartition["blocked"],
  deps: JevPipelineDeps
): Response {
  const exclusions: PreDispatchExclusion[] = blocked.map(({ target, reason }) => {
    const model = parseModel(target.modelStr).model || target.modelStr;
    switch (reason) {
      case "circuit_open": {
        const breaker = target.provider
          ? findOpenCircuitBreaker(target.provider, target.connectionId)
          : null;
        return {
          provider: target.provider,
          model,
          reason,
          retryAfterMs: breaker?.status.retryAfterMs || null,
        };
      }
      case "provider_cooldown":
        return {
          provider: target.provider,
          model,
          reason,
          retryAfterMs: target.provider
            ? Math.max(
                getRemainingCooldownMs(
                  target.provider,
                  target.connectionId ?? undefined,
                  deps.resilienceSettings
                ),
                getRemainingCooldownMs(target.provider, undefined, deps.resilienceSettings)
              ) || null
            : null,
        };
      case "model_lockout":
        return {
          provider: target.provider,
          model,
          reason,
          retryAfterMs:
            getModelLockoutInfo(target.provider, target.connectionId || "", model)?.remainingMs ??
            null,
        };
      case "persisted_cooldown":
        return {
          provider: target.provider,
          model,
          reason: "connection_cooldown",
          retryAfterMs: null,
        };
      case "quota_cutoff":
        return { provider: target.provider, model, reason, retryAfterMs: null };
      default:
        return {
          provider: target.provider,
          model,
          reason: reason as PreDispatchExclusionReason,
          retryAfterMs: null,
        };
    }
  });

  const coolingResponse = buildAllTargetsCoolingDownResponse(exclusions);
  if (coolingResponse) return coolingResponse;

  if (blocked.length > 0 && blocked.every((item) => item.reason === "context_requirements")) {
    const { message, diagnostics } = buildEmptyComboTargetsPayload(
      blocked.map((item) => item.target),
      (deps.config as { contextRequirements?: { minContextWindow?: number } } | null | undefined)
        ?.contextRequirements?.minContextWindow
    );
    return errorResponseWithComboDiagnostics(404, message, diagnostics, {
      code: "model_not_found",
      type: "invalid_request_error",
    });
  }

  const capabilityExhaustion = describeCapabilityFilterExhaustion(
    blocked.filter((item) => item.reason === "availability").map((item) => item.target),
    deps.body,
    deps.combo.name
  );
  if (capabilityExhaustion) {
    return errorResponseWithComboDiagnostics(
      400,
      capabilityExhaustion.message,
      {
        poolSize: blocked.length,
        attempted: 0,
        excluded: exclusions.map(({ provider, model, reason }) => ({ provider, model, reason })),
        attemptOrder: [],
        terminalReason: capabilityExhaustion.terminalReason,
        recovery: buildRecoveryHint(capabilityExhaustion.terminalReason),
      },
      { code: "capability_mismatch", type: "invalid_request_error" }
    );
  }

  const quotaOnly =
    exclusions.length > 0 && exclusions.every((item) => item.reason === "quota_cutoff");
  const status = quotaOnly ? 429 : 404;
  const terminalReason = quotaOnly ? "quota_exhausted" : "all_targets_skipped";
  return errorResponseWithComboDiagnostics(
    status,
    quotaOnly
      ? "Every target in this combo is below its configured quota cutoff"
      : "Every target in this combo was excluded before Jev could make a choice",
    {
      poolSize: exclusions.length,
      attempted: 0,
      excluded: exclusions.map(({ provider, model, reason }) => ({ provider, model, reason })),
      attemptOrder: [],
      terminalReason,
      recovery: buildRecoveryHint(terminalReason),
    },
    {
      code: quotaOnly ? "quota_exhausted" : "all_targets_skipped",
      type: quotaOnly ? "rate_limit_error" : "invalid_request_error",
    }
  );
}

async function previewJevSessionStickiness(
  deps: JevPipelineDeps,
  targets: ResolvedComboTarget[]
): Promise<{ targets: ResolvedComboTarget[]; sticky: ApplyStickinessResult }> {
  const disableSessionStickiness =
    resolveDisableSessionStickiness(
      deps.config as Record<string, unknown> | null | undefined,
      deps.settings as Record<string, unknown> | null | undefined
    ) === true;
  const messages = normalizeStickinessMessages(
    deps.body as { messages?: unknown; input?: unknown }
  );
  const binding = peekSessionStickinessBinding(messages, deps.combo.name);
  const noPin: ApplyStickinessResult = {
    targets,
    messageHash: binding.messageHash,
    stuck: false,
  };
  if (disableSessionStickiness) {
    return { targets, sticky: { targets, messageHash: null, stuck: false } };
  }
  if (targets.length <= 1) return { targets, sticky: noPin };

  let previewTargets = targets;
  if (
    binding.connectionId &&
    !targets.some((target) => target.connectionId === binding.connectionId)
  ) {
    if (
      deps.apiKeyAllowedConnections?.length &&
      !deps.apiKeyAllowedConnections.includes(binding.connectionId)
    ) {
      return { targets, sticky: noPin };
    }
    const expanded = await expandJevStickyConnectionTarget(
      targets,
      binding.connectionId,
      deps.apiKeyAllowedConnections,
      deps.log
    );
    if (!expanded) return { targets, sticky: noPin };
    previewTargets = expanded;
  }

  const stickyPreview = await applySessionStickiness(previewTargets, messages, deps.combo.name);
  const sticky = {
    ...stickyPreview,
    messageHash: stickyPreview.messageHash ?? binding.messageHash,
  };
  return { targets: sticky.stuck ? stickyPreview.targets : targets, sticky };
}

async function expandJevStickyConnectionTarget(
  targets: ResolvedComboTarget[],
  connectionId: string,
  apiKeyAllowedConnections: string[] | null,
  log: ComboLogger
): Promise<ResolvedComboTarget[] | null> {
  const providerPools = new Map<string, Array<Record<string, unknown>>>();
  let found = false;
  const expanded: ResolvedComboTarget[] = [];
  for (const target of targets) {
    if (target.connectionId) {
      expanded.push(target);
      continue;
    }
    if (target.allowedConnectionIds && !target.allowedConnectionIds.includes(connectionId)) {
      expanded.push(target);
      continue;
    }
    const parsed = parseModel(target.modelStr);
    const provider = target.provider || parsed.provider || parsed.providerAlias;
    if (!provider) {
      expanded.push(target);
      continue;
    }
    let pool = providerPools.get(provider);
    if (!pool) {
      try {
        pool = (await getCachedProviderPoolConnections({ provider, isActive: true })) as Array<
          Record<string, unknown>
        >;
      } catch {
        log.warn("COMBO", "[jev] Couldn't resolve the pinned account for the session preview");
        pool = [];
      }
      providerPools.set(provider, pool);
    }
    const connection = pool.find((candidate) => candidate.id === connectionId);
    if (!connection) {
      expanded.push(target);
      continue;
    }
    found = true;
    expanded.push({
      ...target,
      connectionId,
      authType: typeof connection.authType === "string" ? connection.authType : null,
      executionKey: `${target.executionKey}@${connectionId}`,
      allowedConnectionIds: apiKeyAllowedConnections ?? target.allowedConnectionIds,
    });
  }
  return found ? expanded : null;
}

function isNativeJevTargetPinned(
  pin: NativeTurnPin | null | undefined,
  targets: readonly ResolvedComboTarget[],
  deps: JevPipelineDeps
): boolean {
  if (!pin) return false;
  if (
    deps.apiKeyAllowedConnections?.length &&
    !deps.apiKeyAllowedConnections.includes(pin.connectionId)
  ) {
    return false;
  }
  return targets.some((target) => {
    if (target.modelStr !== pin.modelStr || target.provider !== pin.provider) return false;
    if (
      !target.connectionId &&
      target.allowedConnectionIds &&
      !target.allowedConnectionIds.includes(pin.connectionId)
    ) {
      return false;
    }
    return true;
  });
}
