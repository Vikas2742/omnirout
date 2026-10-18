import { getProviderModels } from "@omniroute/open-sse/config/providerModels.ts";
import {
  CODEX_SPARK_MODEL_ID,
  getCodexModelScope,
  getCodexQuotaWindowFilterForModel,
  isCodexSparkQuotaKey,
} from "@omniroute/open-sse/config/codexQuotaScopes.ts";
import {
  getAntigravityQuotaFamily,
  selectAntigravityQuotaWindowNames,
} from "@omniroute/open-sse/services/antigravityQuotaFamily.ts";
import {
  claudeQuotaMatchesModel,
  isClaudeQuotaMetadata,
} from "@omniroute/open-sse/services/usage/claudeQuota.ts";
import type { ProviderLimitsCacheEntry } from "@/lib/db/providerLimits";

export interface AvailabilityScopeInput {
  id: string;
  kind: "account" | "group" | "scoped";
  model: string;
  windows: string[];
}
/** Representatives are discovered from observations or the router's model/scope catalog. */
export function availabilityScopes(
  provider: string,
  usage: Partial<ProviderLimitsCacheEntry>
): AvailabilityScopeInput[] {
  const scopes: AvailabilityScopeInput[] = [];
  const names = Object.keys(usage.quotas || {});
  const catalog = getProviderModels(provider).map((m) => m.id);
  // Include the ordinary request scope alongside special pools, using the same catalog
  // and scope matchers as routing; no separate representative-model inventory.
  const ordinaryModel =
    provider === "codex"
      ? catalog.find((m) => getCodexModelScope(m) === "codex")
      : provider === "openrouter"
        ? catalog.find((m) => !m.endsWith(":free"))
        : provider === "claude" || provider === "anthropic"
          ? catalog.find((m) =>
              Object.values(usage.modelQuotas || {}).every((value) => {
                const metadata = (value as { claudeQuota?: unknown })?.claudeQuota;
                return !isClaudeQuotaMetadata(metadata) || !claudeQuotaMatchesModel(metadata, m);
              })
            )
          : undefined;
  if (ordinaryModel) {
    const filter =
      provider === "codex" ? getCodexQuotaWindowFilterForModel(ordinaryModel) : undefined;
    scopes.push({
      id: "account",
      kind: "account",
      model: ordinaryModel,
      windows: filter ? names.filter(filter) : names,
    });
  }
  if (provider === "openrouter" && names.some((n) => ["free_daily", "free_rpm"].includes(n)))
    scopes.push({
      id: ":free",
      kind: "scoped",
      model: catalog.find((m) => m.endsWith(":free")) || ":free",
      windows: names.filter((n) => ["free_daily", "free_rpm"].includes(n)),
    });
  if (provider === "codex" && names.some(isCodexSparkQuotaKey))
    scopes.push({
      id: "spark",
      kind: "scoped",
      model: CODEX_SPARK_MODEL_ID,
      windows: names.filter(isCodexSparkQuotaKey),
    });
  if (provider === "codex" && names.some((n) => /^code_review/.test(n)))
    scopes.push({
      id: "code_review",
      kind: "scoped",
      model: "code_review",
      windows: names.filter((n) => /^code_review/.test(n)),
    });
  if (provider === "claude" || provider === "anthropic") {
    for (const [id, value] of Object.entries(usage.modelQuotas || {})) {
      const metadata = (value as { claudeQuota?: unknown })?.claudeQuota;
      if (!isClaudeQuotaMetadata(metadata)) continue;
      const model = metadata.modelId || catalog.find((m) => claudeQuotaMatchesModel(metadata, m));
      if (model) scopes.push({ id, kind: "scoped", model, windows: [id] });
    }
  }
  if (provider === "antigravity" || provider === "agy") {
    const groups = usage.quotaGroups || [];
    for (const group of groups) {
      const id = String(group.id);
      const models = Array.isArray(group.models)
        ? group.models.filter((m): m is string => typeof m === "string")
        : [];
      const family = id === "claude_gpt" ? "claude" : id;
      const model =
        models[0] ||
        [...names, ...catalog].find(
          (m) => !/_(session|weekly)$/.test(m) && getAntigravityQuotaFamily(m) === family
        );
      if (model)
        scopes.push({
          id,
          kind: "group",
          model,
          windows: names.filter((n) => n.startsWith(`${id}_`)),
        });
    }
    for (const name of names) {
      if (/_((session)|(weekly))$/.test(name)) continue;
      // A model bucket is itself a representative, including newly discovered IDs.
      scopes.push({
        id: name,
        kind: "scoped",
        model: name,
        windows: selectAntigravityQuotaWindowNames(names, name),
      });
    }
  }
  return scopes;
}
