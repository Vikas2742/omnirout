import { getProviderConnectionById, updateProviderConnection } from "@/lib/db/providers";
import { getCachedClaudeQuotaScopeDecision } from "@/domain/quotaCache";
import { shouldIsolateProbeFailures } from "@/shared/utils/probeOrigin";
import { cooldownUntilMs, isCreditsExhausted, lockModel } from "../../services/accountFallback.ts";
import { SUBSCRIPTION_QUOTA_COOLDOWN_MS } from "../../services/quotaTextCooldowns.ts";
import { isExplicitClaudeQuota429Text } from "../../services/usage/claudeQuota.ts";

interface ClaudeQuotaFailure {
  provider: string;
  connectionId: string;
  model: string;
  status: number;
  errorText: string;
  retainedMessage: string;
  retryAfterMs?: number | null;
  hasCallerOwner: boolean;
}

function isRenewingClaudeQuota(input: ClaudeQuotaFailure): boolean {
  return (
    input.provider === "claude" &&
    input.status === 429 &&
    isExplicitClaudeQuota429Text(input.errorText) &&
    !isCreditsExhausted(input.errorText) &&
    !input.errorText.toLowerCase().includes("monthly spend limit")
  );
}

/** A recurring Claude quota is temporary; it must never become depleted credits. */
export async function handleClaudeQuotaFailure(input: ClaudeQuotaFailure): Promise<boolean> {
  if (!isRenewingClaudeQuota(input)) return false;
  if (await shouldIsolateProbeFailures()) return false;
  // The outer handler resolves the exact scope and reset. Prewriting a cooldown here
  // would trip its duplicate-write guard before it can persist that evidence.
  if (input.hasCallerOwner) return true;
  const connection = await getProviderConnectionById(input.connectionId);
  if (!connection) return true;
  if (["banned", "expired", "deactivated", "credits_exhausted"].includes(connection.testStatus)) {
    return true;
  }
  // Match the outer fallback's duplicate-mark guard: a second failure must not
  // shorten or extend a cooldown already established by another request.
  const existingUntil = cooldownUntilMs(connection.rateLimitedUntil);
  if (Number.isFinite(existingUntil) && existingUntil > Date.now()) return true;
  const scope = getCachedClaudeQuotaScopeDecision(input);
  const cooldownMs = scope.cooldownMs ?? (input.retryAfterMs || SUBSCRIPTION_QUOTA_COOLDOWN_MS);
  const metadata = {
    lastErrorType: "quota_exhausted",
    lastError: input.retainedMessage,
    lastErrorAt: new Date().toISOString(),
    errorCode: input.status,
  };
  if (scope.scope === "model") {
    lockModel(input.provider, input.connectionId, input.model, "quota_exhausted", cooldownMs);
    await updateProviderConnection(input.connectionId, metadata);
  } else {
    await updateProviderConnection(input.connectionId, {
      ...metadata,
      testStatus: "unavailable",
      rateLimitedUntil: scope.resetAt ?? new Date(Date.now() + cooldownMs).toISOString(),
    });
  }
  return true;
}
