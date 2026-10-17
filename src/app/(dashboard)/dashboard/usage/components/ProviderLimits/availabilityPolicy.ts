// Client-only projection of auth.ts's preflight gate. No routing decisions or server imports.
export interface AvailabilityPolicy {
  enabled: boolean;
  defaultThresholdPercent: number;
  providerWindowDefaults: Record<string, Record<string, number>>;
}
export interface PolicyConnection {
  provider: string;
  quotaWindowThresholds?: Record<string, number> | null;
  providerSpecificData?: { quotaPreflightEnabled?: boolean };
}
export function availabilityCutoff(
  connection: PolicyConnection,
  name: string,
  policy?: AvailabilityPolicy
): number | null {
  if (connection.providerSpecificData?.quotaPreflightEnabled === false) return 0;
  if (!policy) return null;
  const overrides = connection.quotaWindowThresholds || {};
  const defaults = policy.providerWindowDefaults[connection.provider] || {};
  const enabled =
    policy.enabled ||
    policy.defaultThresholdPercent > 2 ||
    Object.keys(overrides).length > 0 ||
    Object.keys(defaults).length > 0 ||
    connection.providerSpecificData?.quotaPreflightEnabled === true;
  if (!enabled) return 0;
  const names = [name];
  if (connection.provider === "codex") {
    // Mirror open-sse/config/codexQuotaScopes.ts without importing server code.
    const normalized = name.trim().toLowerCase();
    if (["gpt_5_3_codex_spark_session", "codex-spark"].includes(normalized)) names.push("session");
    if (["gpt_5_3_codex_spark_weekly", "codex-spark-weekly"].includes(normalized))
      names.push("weekly");
  }
  for (const key of names) {
    if (typeof overrides[key] === "number") return overrides[key];
    if (typeof defaults[key] === "number") return defaults[key];
  }
  return policy.defaultThresholdPercent;
}
