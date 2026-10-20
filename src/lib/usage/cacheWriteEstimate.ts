import type { CacheWriteUsage } from "@/shared/utils/cacheWriteUsage";

export interface CacheWriteEstimate {
  /** Only the priced, reported tier portion; never total request cost or cash spend. */
  knownTierCostUsd: number | null;
  pricedTokens: number;
  source: "api-equivalent-estimate";
}

/**
 * Diagnostic-only Anthropic API-equivalent write pricing: 5m = 1.25x input,
 * 1h = 2x input. Never used by calculateCost, quotas, budgets or deductions.
 * A reseller/unsupported provider needs explicit tier prices; a single legacy
 * cache_creation price does not establish either tier's tariff.
 */
export function estimateApiEquivalentCacheWrite(
  pricing: Record<string, unknown> | null | undefined,
  usage: CacheWriteUsage,
  options: { provider: string; model: string; inputTokens?: number }
): CacheWriteEstimate {
  const empty: CacheWriteEstimate = {
    knownTierCostUsd: null,
    pricedTokens: 0,
    source: "api-equivalent-estimate",
  };
  if (!pricing || usage.status === "invalid" || usage.status === "inconsistent") return empty;
  const tier = pricing.long_context as Record<string, unknown> | undefined;
  const threshold = typeof tier?.threshold === "number" ? tier.threshold : Infinity;
  const crossed =
    tier?.inclusive === true
      ? (options.inputTokens ?? 0) >= threshold
      : (options.inputTokens ?? 0) > threshold;
  const rates = crossed ? { ...pricing, ...tier } : pricing;
  const valid = (value: unknown): value is number =>
    typeof value === "number" && Number.isFinite(value) && value >= 0;
  const anthropic =
    ["anthropic", "claude", "cc"].includes(options.provider) && options.model.startsWith("claude-");
  const input = valid(rates.input) ? rates.input : null;
  const fiveMinuteRate = valid(rates.cache_creation_5m)
    ? rates.cache_creation_5m
    : anthropic && input !== null
      ? input * 1.25
      : null;
  const oneHourRate = valid(rates.cache_creation_1h)
    ? rates.cache_creation_1h
    : anthropic && input !== null
      ? input * 2
      : null;
  let cost = 0;
  let pricedTokens = 0;
  let measured = false;
  for (const [tokens, rate] of [
    [usage.fiveMinute, fiveMinuteRate],
    [usage.oneHour, oneHourRate],
  ]) {
    if (tokens === null || rate === null) continue;
    measured = true;
    pricedTokens += tokens;
    cost += (tokens * rate) / 1_000_000;
  }
  return {
    knownTierCostUsd: measured && Number.isFinite(cost) ? cost : null,
    pricedTokens,
    source: "api-equivalent-estimate",
  };
}
