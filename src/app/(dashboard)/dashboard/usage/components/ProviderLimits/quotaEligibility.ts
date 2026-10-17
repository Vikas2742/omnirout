import { isClaudeExtraUsageAllowed } from "@/lib/providers/claudeExtraUsage";
import { isCodexQuotaFilteringDisabled } from "@/lib/providers/codexQuotaFiltering";
import {
  hasCodexPaidCredits,
  isCodexPaidCreditsEnabled,
  type CodexPaidCredits,
} from "@/lib/providers/codexPaidCredits";
import { isCodexSparkQuotaKey } from "@omniroute/open-sse/config/codexQuotaScopes.ts";
import { availabilityCutoff } from "./availabilityPolicy";
import type { AvailabilityPolicy, PolicyConnection } from "./availabilityPolicy";
import type { HealthQuota } from "./healthOverview";

export type QuotaBypass = "extraUsage" | "filteringDisabled" | "paidCredits";
export function quotaBypass(
  connection: PolicyConnection,
  name: string,
  paidCredits?: CodexPaidCredits
): QuotaBypass | undefined {
  const { provider, providerSpecificData } = connection;
  if (isClaudeExtraUsageAllowed(provider, providerSpecificData)) return "extraUsage";
  if (isCodexQuotaFilteringDisabled(provider, providerSpecificData)) return "filteringDisabled";
  if (
    !isCodexSparkQuotaKey(name) &&
    isCodexPaidCreditsEnabled(provider, providerSpecificData) &&
    hasCodexPaidCredits(paidCredits)
  )
    return "paidCredits";
  return undefined;
}
export function quotaPercentage(q: HealthQuota): number | null {
  if (q.unlimited) return 100;
  if (typeof q.remainingPercentage === "number" && Number.isFinite(q.remainingPercentage))
    return Math.max(0, Math.min(100, q.remainingPercentage));
  if (
    typeof q.total === "number" &&
    Number.isFinite(q.total) &&
    q.total > 0 &&
    typeof q.used === "number" &&
    Number.isFinite(q.used)
  )
    return Math.max(0, Math.min(100, (1 - q.used / q.total) * 100));
  return null;
}
/** quotaPreflight.ts:groupQuotaWindowsByBase: _freetrial budgets are alternatives,
 * not simultaneous constraints. Select usable first (using EACH window's cutoff),
 * then the largest remainder. Unrelated resources and explicit pools stay separate.
 */
export function effectiveQuotaAlternatives(
  quotas: Iterable<HealthQuota>,
  connection: PolicyConnection,
  policy?: AvailabilityPolicy
): HealthQuota[] {
  const groups = new Map<string, HealthQuota[]>();
  for (const q of quotas) {
    const base = q.name.endsWith("_freetrial") ? q.name.slice(0, -10) : q.name;
    const key = JSON.stringify([q.quotaGroupId, q.modelScoped, base]);
    groups.set(key, [...(groups.get(key) || []), q]);
  }
  return [...groups.values()].map(
    (entries) =>
      [...entries].sort((a, b) => {
        const percent = (q: HealthQuota) => quotaPercentage(q) ?? -1;
        const usable = (q: HealthQuota) =>
          Number(percent(q) > (availabilityCutoff(connection, q.name, policy) ?? 0) + 1e-9);
        return usable(b) - usable(a) || percent(b) - percent(a);
      })[0]
  );
}
