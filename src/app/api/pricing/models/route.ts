import { NextResponse } from "next/server";
import { REGISTRY } from "@omniroute/open-sse/config/providerRegistry.ts";
import { getAllCustomModels, getAllSyncedAvailableModels } from "@/lib/db/models";
import { getPricing } from "@/lib/db/settings";
import { getProviderPrefixIndex } from "@/lib/providerNodePrefixes";
import { getDbInstance } from "@/lib/db/core";
import { getNodePrefixHistory, type HistoricalNodePrefix } from "@/lib/db/providers/nodePrefixHistory";
import { isCompatibleProviderConnectionId } from "@/shared/utils/compatibleProviderId";
import { isReservedProviderPrefix } from "@/shared/constants/reservedProviderPrefixes";

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function asModelArray(value: unknown): Array<{ id?: string; name?: string }> {
  if (!Array.isArray(value)) return [];
  return value.filter((item) => item && typeof item === "object") as Array<{
    id?: string;
    name?: string;
  }>;
}

/**
 * GET /api/pricing/models
 * Returns the full model catalog merged from three sources:
 *  1. providerRegistry (hardcoded)
 *  2. syncedAvailableModels (DB — discovered/imported from provider /models)
 *  3. customModels (DB — manually added models)
 *  4. pricing data (DB — models with pricing configured but not in sources 1/2/3)
 */
export async function GET() {
  try {
    const catalog: Record<string, any> = {};

    // Pre-load compatible-provider node public prefixes once (shared across the
    // whole catalog build — never N lookups per model). Only uniquely-routable
    // prefixes are exposed as public targets (reserved/ambiguous are not).
    const { nodeToPrefix, prefixToNode, eligibleNodeIds, compatibleNodeIds } =
      await getProviderPrefixIndex();

    // Immutable per-request snapshot of recorded prefix changes. Historical
    // associations cannot override a live prefix, built-in alias, or another
    // node's claim. The raw model IDs are captured BEFORE the operator's edit.
    const db = getDbInstance();
    const historyByNode = new Map<string, HistoricalNodePrefix[]>();
    const historicalOwners = new Map<string, string | null>();
    // Include ineligible compatible nodes as possible prior owners: a losing
    // node must not allow a different node to claim a shared historical prefix.
    for (const nodeId of compatibleNodeIds) {
      const currentPrefix = nodeToPrefix.get(nodeId);
      const history = getNodePrefixHistory(db, nodeId).filter(
        (entry) => entry.prefix !== currentPrefix
      );
      if (!history.length) continue;
      historyByNode.set(nodeId, history);
      for (const { prefix } of history) {
        if (prefixToNode.has(prefix) || isReservedProviderPrefix(prefix)) continue;
        if (!historicalOwners.has(prefix)) historicalOwners.set(prefix, nodeId);
        else if (historicalOwners.get(prefix) !== nodeId) historicalOwners.set(prefix, null);
      }
    }
    const attachCompatibleMetadata = (providerId: string, slot: Record<string, any>) => {
      const publicPrefix = nodeToPrefix.get(providerId);
      if (publicPrefix) slot.displayPrefix = publicPrefix;
      // Historical evidence is separate from current routability; a node that
      // drops its prefix still has history, but may not be an override target.
      const history = historyByNode.get(providerId);
      // Only advertise provably unique, non-reserved historical claims to
      // enrichment consumers. Losing nodes and reused public prefixes cannot
      // authorize migration of an old namespace.
      const safeHistory = history?.filter(
        (snapshot) => historicalOwners.get(snapshot.prefix) === providerId
      );
      if (safeHistory?.length) slot.historicalPrefixes = safeHistory;
      if (compatibleNodeIds.has(providerId)) {
        slot.modelOverrideEligible = eligibleNodeIds.has(providerId);
      }
    };
    const orphanedCompatibleNode = (id: string) =>
      isCompatibleProviderConnectionId(id) && !compatibleNodeIds.has(id);

    // ── 1. Registry models (hardcoded) ──────────────────────────────
    for (const entry of Object.values(REGISTRY)) {
      const alias = entry.alias || entry.id;
      if (!entry.models || entry.models.length === 0) continue;

      catalog[alias] = {
        id: entry.id,
        alias,
        name: entry.id.charAt(0).toUpperCase() + entry.id.slice(1),
        authType: entry.authType || "unknown",
        format: entry.format || "openai",
        models: entry.models.map((m) => ({
          id: m.id,
          name: m.name || m.id,
          custom: false,
        })),
      };
    }

    const resolveAlias = (providerId: string) => {
      for (const entry of Object.values(REGISTRY)) {
        if (entry.id === providerId) return entry.alias || entry.id;
      }
      return providerId;
    };

    // A compatible provider node should surface under its configured public
    // prefix, never its generated `openai-compatible-chat-<uuid>` node id
    // (#9557). The internal `id` (node id) is preserved for PricingTab and
    // runtime capability lookup. Only a uniquely-routable non-reserved winner
    // is Model-Overrides eligible (marked explicitly); a compatible node that
    // is reserved/losing/no-prefix is marked ineligible and skipped by the
    // Model-Overrides helper.
    const ensureCatalogProvider = (providerId: string, alias: string) => {
      if (!catalog[alias]) {
        catalog[alias] = {
          id: providerId,
          alias,
          name: providerId.charAt(0).toUpperCase() + providerId.slice(1),
          authType: "unknown",
          format: "openai",
          models: [],
        };
        attachCompatibleMetadata(providerId, catalog[alias]);
      }
      return catalog[alias];
    };

    const appendDbModels = (providerId: string, rawModels: unknown) => {
      // Deleted compatible nodes are never routable. Keep orphan DB records
      // untouched for operator recovery, but never re-publish them as models.
      if (orphanedCompatibleNode(providerId)) return;
      const models = asModelArray(rawModels);
      const alias = resolveAlias(providerId);
      const providerCatalog = ensureCatalogProvider(providerId, alias);
      const existingIds = new Set(providerCatalog.models.map((m) => m.id));

      for (const model of models) {
        const modelId = typeof model.id === "string" ? model.id : null;
        if (!modelId || existingIds.has(modelId)) continue;
        providerCatalog.models.push({
          id: modelId,
          name: typeof model.name === "string" && model.name.trim() ? model.name : modelId,
          custom: true,
          // Distinguish a literal upstream "ih/foo" from an already-prefixed
          // public "ih/foo". The latter appears only in pricing-only rows.
          upstreamId: true,
        });
        existingIds.add(modelId);
      }
    };

    // ── 2. Synced available models (DB) ─────────────────────────────
    let syncedModelsMap: Record<string, unknown> = {};
    try {
      syncedModelsMap = asRecord(await getAllSyncedAvailableModels());
    } catch {
      /* DB may not be ready */
    }

    for (const [providerId, rawModels] of Object.entries(syncedModelsMap)) {
      appendDbModels(providerId, rawModels);
    }

    // ── 3. Custom models (DB) ───────────────────────────────────────
    let customModelsMap: Record<string, unknown> = {};
    try {
      customModelsMap = asRecord(await getAllCustomModels());
    } catch {
      /* DB may not be ready */
    }
    for (const [providerId, rawModels] of Object.entries(customModelsMap)) {
      if (orphanedCompatibleNode(providerId)) continue;
      const alias = resolveAlias(providerId);
      const providerCatalog = ensureCatalogProvider(providerId, alias);
      for (const model of asModelArray(rawModels)) {
        const modelId = typeof model.id === "string" ? model.id : null;
        if (!modelId) continue;
        const customModel = {
          id: modelId,
          name: typeof model.name === "string" && model.name.trim() ? model.name : modelId,
          custom: true,
          upstreamId: true,
        };
        const existingIndex = providerCatalog.models.findIndex(
          (entry: { id?: string }) => entry.id === modelId
        );
        if (existingIndex === -1) providerCatalog.models.push(customModel);
        else providerCatalog.models[existingIndex] = customModel;
      }
    }

    // ── 4. Pricing-only models ─────────────────────────────────────
    // Pricing uses public prefixes. Resolve unique compatible prefixes back
    // to their internal node so Model Overrides can read/save/reset against it.
    // Reserved / ambiguous prefixes have no single routable node and stay as-is.
    let pricingData: Record<string, any> = {};
    try {
      pricingData = await getPricing();
    } catch {
      /* DB may not be ready */
    }

    for (const [rawProviderAlias, models] of Object.entries(pricingData)) {
      // `rawProviderAlias` is the original pricing namespace the operator used.
      const pricingKey = rawProviderAlias;
      // An old public prefix is not proof that EVERY price row belongs to
      // its former node. Keep historical namespaces separate for management;
      // OpenCode may recover an individual price only with recorded raw-ID
      // provenance AND a matching current served model (#17348).
      const providerAlias = prefixToNode.get(rawProviderAlias) || rawProviderAlias;
      const historicalNamespace = historicalOwners.has(rawProviderAlias) &&
        !prefixToNode.has(rawProviderAlias);
      const orphaned = orphanedCompatibleNode(providerAlias);
      if (!catalog[providerAlias]) {
        catalog[providerAlias] = {
          id: providerAlias,
          alias: providerAlias,
          name: providerAlias.charAt(0).toUpperCase() + providerAlias.slice(1),
          authType: "unknown",
          format: "openai",
          models: [],
        };
        if (orphaned || historicalNamespace) {
          // Render price rows for recovery, but never represent these entries
          // as routable/overridable model sources.
          catalog[providerAlias].pricingOnly = true;
          catalog[providerAlias].modelOverrideEligible = false;
          if (orphaned) catalog[providerAlias].orphaned = true;
          if (historicalNamespace) catalog[providerAlias].historicalPricingNamespace = true;
        } else {
          attachCompatibleMetadata(providerAlias, catalog[providerAlias]);
        }
      }
      // When the entry is keyed internally by the node id but priced under a
      // public prefix, remember the original pricing namespace for PricingTab.
      if (pricingKey !== providerAlias && !catalog[providerAlias].pricingKey) {
        catalog[providerAlias].pricingKey = pricingKey;
      }

      const existingIds = new Set(catalog[providerAlias].models.map((m) => m.id));
      for (const modelId of Object.keys(models)) {
        if (!existingIds.has(modelId)) {
          catalog[providerAlias].models.push({
            id: modelId,
            name: modelId,
            custom: true,
          });
          existingIds.add(modelId);
        }
      }
    }

    // Add modelCount to each entry
    for (const entry of Object.values(catalog)) {
      entry.modelCount = entry.models.length;
    }

    return NextResponse.json(catalog);
  } catch (error) {
    console.error("Error fetching model catalog:", error);
    return NextResponse.json({ error: "Failed to fetch model catalog" }, { status: 500 });
  }
}
