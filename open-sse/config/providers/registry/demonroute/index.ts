import type { RegistryEntry } from "../../shared.ts";
import { buildOpenAiCompatibleRegistryEntry } from "../../shared.ts";

/**
 * Demon Route — OpenAI-compatible API-key gateway.
 * Its /v1/models catalog is key-gated; do not treat these representative
 * seeds as an authoritative account-level inventory. Unknown IDs must pass
 * through exactly, including vendor/model paths containing slashes.
 *
 * See https://github.com/diegosouzapw/OmniRoute/issues/16979
 */
export const demonrouteProvider: RegistryEntry = buildOpenAiCompatibleRegistryEntry({
  id: "demonroute",
  alias: "demonroute",
  baseUrl: "https://api.demonroute.com/v1/chat/completions",
  modelsUrl: "https://api.demonroute.com/v1/models",
  models: [
    { id: "TheDrummer/Cydonia-24B-v4.3", name: "Cydonia 24B v4.3" },
    { id: "dphn/dolphin-2.9.3-mistral-nemo-12b", name: "Dolphin 2.9.3 Mistral Nemo 12B" },
  ],
  passthroughModels: true,
});
