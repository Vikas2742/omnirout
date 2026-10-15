import { getAllSystemOneModels } from "@omniroute/open-sse/config/systemoneRegistry.ts";
import { getAllRerankModels } from "@omniroute/open-sse/config/rerankRegistry.ts";

type CatalogSystemOneOptions = {
  timestamp: number;
  isProviderActive: (provider: string) => boolean;
  providerSupportsModel: (provider: string, model: string) => boolean;
  isModelHidden: (provider: string, model: string, modality: string) => boolean;
  hasEquivalentModel: (
    provider: string,
    model: string,
    type: string,
    scopedModel: string
  ) => boolean;
};

export async function buildEvaluationCatalogModels(
  options: CatalogSystemOneOptions,
  maybeYieldCatalogBuild: () => Promise<void>
) {
  const models: Array<Record<string, unknown>> = [];
  // Add rerank models (filtered by active providers)
  for (const rerankModel of getAllRerankModels()) {
    await maybeYieldCatalogBuild();
    if (!options.isProviderActive(rerankModel.provider)) continue;
    const rawModelId = rerankModel.id.slice(rerankModel.provider.length + 1);
    if (!options.providerSupportsModel(rerankModel.provider, rawModelId)) continue;
    if (options.isModelHidden(rerankModel.provider, rawModelId, "rerank")) continue;
    if (options.hasEquivalentModel(rerankModel.provider, rawModelId, "rerank", rerankModel.id))
      continue;
    models.push({
      id: rerankModel.id,
      object: "model",
      created: options.timestamp,
      owned_by: rerankModel.provider,
      root: rawModelId,
      type: "rerank",
    });
  }
  return [...models, ...buildSystemOneCatalogModels(options)];
}

/** Model catalog projection adapted from Sean P. Ford's PR #14498. */
export function buildSystemOneCatalogModels(options: CatalogSystemOneOptions) {
  return getAllSystemOneModels().flatMap((model) => {
    const rawId = model.id.slice(model.provider.length + 1);
    if (
      !options.isProviderActive(model.provider) ||
      !options.providerSupportsModel(model.provider, rawId) ||
      options.isModelHidden(model.provider, rawId, "systemone") ||
      options.hasEquivalentModel(model.provider, rawId, "systemone", model.id)
    )
      return [];
    return [
      {
        id: model.id,
        object: "model",
        created: options.timestamp,
        owned_by: model.provider,
        root: rawId,
        type: "systemone",
        api_format: "systemone",
        supported_endpoints: ["systemone"],
        input_modalities: ["text"],
        output_modalities: ["structured"],
      },
    ];
  });
}
