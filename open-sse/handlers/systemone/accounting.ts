import { recordKeyQuotaUsage } from "@/domain/keyQuota";
import { recordTokenUsage } from "../../services/tokenLimitCounter.ts";
import { safeSystemOneText } from "./shared.ts";
import { systemOneCost, systemOneDefaults, type SystemOneProxyOptions } from "./runtime.ts";
import type { SystemOneAttempt } from "./attempt.ts";

export async function recordSystemOneSuccess(
  options: SystemOneProxyOptions,
  attempt: SystemOneAttempt,
  requestId: string
): Promise<number> {
  if (!attempt.attempted || attempt.error || !attempt.result) return 0;
  if (options.apiKeyId) {
    try {
      const billable = attempt.result.usage.input_tokens + attempt.result.usage.output_tokens;
      recordKeyQuotaUsage(options.apiKeyId, billable);
      if (billable > 0)
        recordTokenUsage(options.apiKeyId, options.target.provider, options.target.id, billable);
    } catch {
      // Counter recording must never block or turn a successful inference into a retry.
    }
  }
  const costUsd = await systemOneCost(options, attempt.result.usage.input_tokens);
  if (options.apiKeyId) {
    try {
      (options.recordCostImpl ?? systemOneDefaults.recordCost)(options.apiKeyId, costUsd, {
        provider: options.target.provider,
        model: options.target.id,
        tokens: attempt.result.usage,
        success: true,
        timestamp: new Date().toISOString(),
        requestId,
      });
    } catch {
      // Accounting failure must not turn paid inference into a retryable failure.
      console.warn("[SYSTEMONE] Could not record API-key cost");
    }
  }
  return costUsd;
}

export async function logSystemOneAttempt(
  options: SystemOneProxyOptions,
  attempt: SystemOneAttempt,
  costUsd: number,
  startedAt: number
): Promise<void> {
  if (!attempt.attempted) return;
  await (options.saveCallLogImpl ?? systemOneDefaults.saveCallLog)({
    method: "POST",
    path: "/v1/systemone",
    requestType: "systemone",
    status: attempt.status,
    provider: options.target.provider,
    model: options.target.id,
    duration: Date.now() - startedAt,
    tokens: attempt.result?.usage ?? { input_tokens: 0, output_tokens: 0 },
    costUsd,
    connectionId: options.credentials.connectionId || undefined,
    apiKeyId: options.apiKeyId || undefined,
    apiKeyName: options.apiKeyName || undefined,
    upstreamRequestId: attempt.upstreamRequestId,
    ...(attempt.error
      ? { error: safeSystemOneText(attempt.error.message, options.credentials) }
      : {}),
  }).catch(() => {
    // Never repeat an upstream attempt solely because telemetry failed.
    console.warn("[SYSTEMONE] Could not save upstream call log");
  });
}
