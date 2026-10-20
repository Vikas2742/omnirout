/** Provider-reported cache-write tiers. TTL request hints are deliberately not inputs. */
export type CacheWriteStatus = "reported" | "partial" | "unknown" | "inconsistent" | "invalid";
export interface CacheWriteUsage {
  total: number | null;
  fiveMinute: number | null;
  oneHour: number | null;
  unknown: number | null;
  status: CacheWriteStatus;
}

type JsonRecord = Record<string, unknown>;
const record = (value: unknown): JsonRecord =>
  value !== null && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
const counter = (value: unknown): number | null =>
  typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;

function sources(value: unknown) {
  const usage = record(value);
  const prompt = record(usage.prompt_tokens_details);
  const input = record(usage.input_tokens_details);
  return {
    usage,
    rawTotal:
      usage.cache_creation_input_tokens ??
      prompt.cache_creation_tokens ??
      input.cache_creation_tokens ??
      prompt.cache_write_tokens ??
      input.cache_write_tokens ??
      usage.cache_write_tokens ??
      usage.cacheCreation,
    rawTiers: usage.cache_creation ?? prompt.cache_creation ?? input.cache_creation,
  };
}

export function readCacheWriteUsage(value: unknown): CacheWriteUsage {
  const { usage, rawTotal, rawTiers } = sources(value);
  const tiers = record(rawTiers);
  const fiveMinute = counter(tiers.ephemeral_5m_input_tokens);
  const oneHour = counter(tiers.ephemeral_1h_input_tokens);
  const sum = (fiveMinute ?? 0) + (oneHour ?? 0);
  const total =
    counter(rawTotal) ??
    (rawTotal == null && fiveMinute !== null && oneHour !== null && Number.isFinite(sum)
      ? sum
      : null);
  const invalid =
    (rawTotal != null && counter(rawTotal) === null) ||
    (rawTiers != null && (typeof rawTiers !== "object" || Array.isArray(rawTiers))) ||
    ["ephemeral_5m_input_tokens", "ephemeral_1h_input_tokens"].some(
      (key) => tiers[key] != null && counter(tiers[key]) === null
    ) ||
    usage.cache_creation_tier_status === "invalid" ||
    !Number.isFinite(sum);
  const inconsistent =
    usage.cache_creation_tier_status === "inconsistent" ||
    (total !== null && (sum > total || (fiveMinute !== null && oneHour !== null && sum !== total)));
  const status: CacheWriteStatus = invalid
    ? "invalid"
    : inconsistent
      ? "inconsistent"
      : fiveMinute !== null && oneHour !== null
        ? "reported"
        : fiveMinute !== null || oneHour !== null
          ? "partial"
          : "unknown";
  return {
    total,
    fiveMinute,
    oneHour,
    unknown: total === null ? null : invalid || inconsistent ? total : total - sum,
    status,
  };
}

/** Rebuild only this feature's fields; keep unknown nested provider fields on wire paths. */
export function cacheCreationFields(value: unknown): JsonRecord {
  const { rawTiers } = sources(value);
  const diagnostic = readCacheWriteUsage(value);
  if (rawTiers == null)
    return diagnostic.status === "invalid" ? { cache_creation_tier_status: "invalid" } : {};
  const tiers = { ...record(rawTiers) };
  for (const key of ["ephemeral_5m_input_tokens", "ephemeral_1h_input_tokens"]) {
    if (counter(tiers[key]) === null) delete tiers[key];
  }
  return {
    cache_creation: tiers,
    ...(diagnostic.total !== null ? { cache_creation_input_tokens: diagnostic.total } : {}),
    ...(["invalid", "inconsistent"].includes(diagnostic.status)
      ? { cache_creation_tier_status: diagnostic.status }
      : {}),
  };
}

export function storedCacheWriteUsage(
  total: unknown,
  fiveMinute: unknown,
  oneHour: unknown,
  status: unknown
): CacheWriteUsage {
  return readCacheWriteUsage({
    cache_creation_input_tokens: total,
    cache_creation: {
      ...(fiveMinute != null ? { ephemeral_5m_input_tokens: fiveMinute } : {}),
      ...(oneHour != null ? { ephemeral_1h_input_tokens: oneHour } : {}),
    },
    cache_creation_tier_status: status,
  });
}
