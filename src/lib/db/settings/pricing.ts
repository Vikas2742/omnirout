/**
 * db/settings/pricing.ts — Pricing data CRUD (user overrides, LiteLLM sync, models.dev sync).
 */

import { getDbInstance } from "../core";
import { backupDbFile } from "../backup";
import { getCachedPricing, invalidateDbCache } from "../readCache";
import { PROVIDER_ID_TO_ALIAS } from "@omniroute/open-sse/config/providerModels.ts";
import { invalidateUserPricingMemo } from "@/lib/catalogUserPricing";
import { type JsonRecord, toRecord } from "./shared";

type PricingModels = Record<string, JsonRecord>;
type PricingByProvider = Record<string, PricingModels>;
export type PricingSource = "default" | "litellm" | "modelsDev" | "user";
export type PricingSourceMap = Record<string, Record<string, PricingSource>>;

// Provider and model identifiers are data, not JavaScript property names.
// Define own enumerable fields rather than invoking the "__proto__" setter
// or accidentally treating "constructor"/"toString" as inherited prices.
function setOwnKey<T>(record: Record<string, T>, key: string, value: T): void {
  Object.defineProperty(record, key, {
    value,
    enumerable: true,
    writable: true,
    configurable: true,
  });
}

async function touchPricing(): Promise<void> {
  invalidateDbCache("pricing");
  invalidateUserPricingMemo();
  try {
    const { clearTierCache } = await import("@omniroute/open-sse/services/tierResolver");
    clearTierCache();
  } catch {
    // fail-open: a missed tier invalidation must never break a price write
  }
}

function readPricingNamespace(
  db: ReturnType<typeof getDbInstance>,
  namespace: string
): PricingByProvider {
  const rows = db.prepare("SELECT key, value FROM key_value WHERE namespace = ?").all(namespace);
  const pricing: PricingByProvider = {};

  for (const row of rows) {
    const record = toRecord(row);
    const key = typeof record.key === "string" ? record.key : null;
    const rawValue = typeof record.value === "string" ? record.value : null;
    if (!key || rawValue === null) continue;

    try {
      setOwnKey(pricing, key, toRecord(JSON.parse(rawValue)) as PricingModels);
    } catch {
      // Corrupted data — skip silently, fallback to lower layers
    }
  }

  return pricing;
}

function mergePricingLayers(layers: PricingByProvider[]): PricingByProvider {
  const mergedPricing: PricingByProvider = {};

  for (const layer of layers) {
    for (const [provider, models] of Object.entries(layer)) {
      if (!Object.hasOwn(mergedPricing, provider)) {
        setOwnKey(mergedPricing, provider, { ...models });
        continue;
      }

      for (const [model, pricing] of Object.entries(models)) {
        const previous = Object.hasOwn(mergedPricing[provider], model)
          ? mergedPricing[provider][model]
          : null;
        setOwnKey(mergedPricing[provider], model,
          previous ? { ...previous, ...toRecord(pricing) } : pricing);
      }
    }
  }

  return mergedPricing;
}

function buildPricingSourceMap(layers: {
  defaults: PricingByProvider;
  litellm: PricingByProvider;
  modelsDev: PricingByProvider;
  user: PricingByProvider;
}): PricingSourceMap {
  const sourceMap: PricingSourceMap = {};
  const mergedPricing = mergePricingLayers([
    layers.defaults,
    layers.litellm,
    layers.modelsDev,
    layers.user,
  ]);

  for (const [provider, models] of Object.entries(mergedPricing)) {
    setOwnKey(sourceMap, provider, {});

    for (const model of Object.keys(models)) {
      const hasPrice = (layer: PricingByProvider) =>
        Object.hasOwn(layer, provider) && Object.hasOwn(layer[provider], model);
      const source: PricingSource = hasPrice(layers.user) ? "user" :
        hasPrice(layers.modelsDev) ? "modelsDev" :
        hasPrice(layers.litellm) ? "litellm" : "default";
      setOwnKey(sourceMap[provider], model, source);
    }
  }

  return sourceMap;
}

async function getPricingLayers() {
  const db = getDbInstance();

  // Layer 1: Hardcoded defaults (lowest priority)
  const { getDefaultPricing } = await import("@/shared/constants/pricing");
  return {
    defaults: getDefaultPricing(),
    litellm: readPricingNamespace(db, "pricing_synced"),
    modelsDev: readPricingNamespace(db, "models_dev_pricing"),
    user: readPricingNamespace(db, "pricing"),
  };
}

export async function getPricing() {
  const layers = await getPricingLayers();
  // Merge: defaults → LiteLLM → models.dev → user (each layer overrides the previous)
  return mergePricingLayers([layers.defaults, layers.litellm, layers.modelsDev, layers.user]);
}

export async function getPricingWithSources(): Promise<{
  pricing: PricingByProvider;
  sourceMap: PricingSourceMap;
}> {
  const layers = await getPricingLayers();
  return {
    pricing: mergePricingLayers([layers.defaults, layers.litellm, layers.modelsDev, layers.user]),
    sourceMap: buildPricingSourceMap(layers),
  };
}

export async function getPricingForModel(provider: string, model: string) {
  const pricing = (await getCachedPricing()) as PricingByProvider;

  const findKeyInsensitive = <T>(
    obj: Record<string, T> | undefined | null,
    key: string
  ): T | undefined => {
    if (!obj || !key) return undefined;
    const lowerKey = key.toLowerCase();
    for (const [k, v] of Object.entries(obj)) {
      if (k.toLowerCase() === lowerKey) return v;
    }
    return undefined;
  };

  const pLower = (provider || "").toLowerCase();
  let providerPricing = findKeyInsensitive<PricingModels>(pricing, pLower);

  if (!providerPricing) {
    const alias = findKeyInsensitive<string>(PROVIDER_ID_TO_ALIAS, pLower);
    if (alias) providerPricing = findKeyInsensitive(pricing, alias);
  }

  if (!providerPricing) {
    for (const [id, mappedAlias] of Object.entries(PROVIDER_ID_TO_ALIAS)) {
      if (typeof mappedAlias === "string" && mappedAlias.toLowerCase() === pLower) {
        providerPricing = findKeyInsensitive(pricing, id);
        if (providerPricing) break;
      }
    }
  }

  if (!providerPricing) {
    const np = pLower.replace(/-cn$/, "");
    if (np && np !== pLower) {
      providerPricing = findKeyInsensitive(pricing, np);
    }
  }

  if (!providerPricing) return null;

  const mLower = (model || "").toLowerCase();
  let modelPricing = findKeyInsensitive<JsonRecord>(providerPricing, mLower);

  if (!modelPricing) {
    const hyphenModel = mLower.replace(/\./g, "-");
    modelPricing = findKeyInsensitive(providerPricing, hyphenModel);
  }

  return modelPricing || null;
}

export async function updatePricing(pricingData: PricingByProvider) {
  const db = getDbInstance();
  const insert = db.prepare(
    "INSERT OR REPLACE INTO key_value (namespace, key, value) VALUES ('pricing', ?, ?)"
  );

  const rows = db.prepare("SELECT key, value FROM key_value WHERE namespace = 'pricing'").all();
  const existing: PricingByProvider = {};
  for (const row of rows) {
    const record = toRecord(row);
    const key = typeof record.key === "string" ? record.key : null;
    const rawValue = typeof record.value === "string" ? record.value : null;
    if (!key || rawValue === null) continue;
    setOwnKey(existing, key, toRecord(JSON.parse(rawValue)) as PricingModels);
  }

  const tx = db.transaction(() => {
    for (const [provider, models] of Object.entries(pricingData)) {
      const previous = Object.hasOwn(existing, provider) ? existing[provider] : {};
      insert.run(provider, JSON.stringify({ ...previous, ...models }));
    }
  });
  tx();
  backupDbFile("pre-write");
  await touchPricing();
  const updated: PricingByProvider = {};
  const allRows = db.prepare("SELECT key, value FROM key_value WHERE namespace = 'pricing'").all();
  for (const row of allRows) {
    const record = toRecord(row);
    const key = typeof record.key === "string" ? record.key : null;
    const rawValue = typeof record.value === "string" ? record.value : null;
    if (!key || rawValue === null) continue;
    setOwnKey(updated, key, toRecord(JSON.parse(rawValue)) as PricingModels);
  }
  return updated;
}

export async function resetPricing(provider: string, model?: string) {
  const db = getDbInstance();

  if (model) {
    const row = db
      .prepare("SELECT value FROM key_value WHERE namespace = 'pricing' AND key = ?")
      .get(provider);
    if (row) {
      const rowRecord = toRecord(row);
      const value = typeof rowRecord.value === "string" ? rowRecord.value : "{}";
      const models = toRecord(JSON.parse(value));
      delete models[model];
      if (Object.keys(models).length === 0) {
        db.prepare("DELETE FROM key_value WHERE namespace = 'pricing' AND key = ?").run(provider);
      } else {
        db.prepare("UPDATE key_value SET value = ? WHERE namespace = 'pricing' AND key = ?").run(
          JSON.stringify(models),
          provider
        );
      }
    }
  } else {
    db.prepare("DELETE FROM key_value WHERE namespace = 'pricing' AND key = ?").run(provider);
  }

  backupDbFile("pre-write");
  await touchPricing();
  const allRows = db.prepare("SELECT key, value FROM key_value WHERE namespace = 'pricing'").all();
  const result: Record<string, unknown> = {};
  for (const row of allRows) {
    const record = toRecord(row);
    const key = typeof record.key === "string" ? record.key : null;
    const rawValue = typeof record.value === "string" ? record.value : null;
    if (!key || rawValue === null) continue;
    setOwnKey(result, key, JSON.parse(rawValue));
  }
  return result;
}

export async function resetAllPricing() {
  const db = getDbInstance();
  db.prepare("DELETE FROM key_value WHERE namespace = 'pricing'").run();
  backupDbFile("pre-write");
  await touchPricing();
  return {};
}
