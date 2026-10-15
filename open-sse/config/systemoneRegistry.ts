/** Provider-neutral decision models. Kept separate from the chat registry. */
export interface SystemOneModel {
  id: string;
  upstreamModel: string;
  name: string;
  inputUsdPerMillion: number;
}
export interface SystemOneProvider {
  id: string;
  adapter: "typesafe" | "cloudflare";
  models: SystemOneModel[];
}
export type SystemOneTarget = SystemOneModel & {
  provider: string;
  adapter: SystemOneProvider["adapter"];
};

export const SYSTEMONE_PROVIDERS: Record<string, SystemOneProvider> = {
  typesafe: {
    id: "typesafe",
    adapter: "typesafe",
    models: [
      {
        id: "jev-latest",
        upstreamModel: "jev-latest",
        name: "Jev (latest stable)",
        inputUsdPerMillion: 0.042,
      },
      {
        id: "jev-preview",
        upstreamModel: "jev-preview",
        name: "Jev (preview)",
        inputUsdPerMillion: 0.042,
      },
    ],
  },
  "cloudflare-ai": {
    id: "cloudflare-ai",
    adapter: "cloudflare",
    models: [
      {
        id: "jev",
        upstreamModel: "typesafe/jev",
        name: "Jev (Cloudflare)",
        inputUsdPerMillion: 0.042,
      },
      { id: "clef", upstreamModel: "clef", name: "Clef", inputUsdPerMillion: 0.24 },
      {
        id: "clef-flash",
        upstreamModel: "clef-flash",
        name: "Clef Flash",
        inputUsdPerMillion: 0.038,
      },
    ],
  },
};

export function resolveSystemOneModel(model: string): SystemOneTarget | null {
  if (!model.includes("/") && !model.startsWith("jev-") && !["clef", "clef-flash"].includes(model))
    return null;
  const parts = model.split("/");
  const provider =
    parts.length === 1
      ? model.startsWith("jev-")
        ? "typesafe"
        : "cloudflare-ai"
      : parts[0] === "cf"
        ? "cloudflare-ai"
        : parts[0];
  const id = parts.length === 1 ? model : parts[1];
  if (parts.length > 2 || !Object.hasOwn(SYSTEMONE_PROVIDERS, provider)) return null;
  const entry = SYSTEMONE_PROVIDERS[provider];
  const registered = entry.models.find((candidate) => candidate.id === id);
  if (registered) return { ...registered, provider, adapter: entry.adapter };
  // Only semantic version selectors are dynamic; never used in a URL path.
  if (provider === "typesafe" && /^jev-\d+\.\d+\.\d+$/.test(id)) {
    return { ...entry.models[0], id, upstreamModel: id, provider, adapter: entry.adapter };
  }
  return null;
}

export function getAllSystemOneModels() {
  return Object.values(SYSTEMONE_PROVIDERS).flatMap((provider) =>
    provider.models.map((model) => ({
      ...model,
      id: `${provider.id}/${model.id}`,
      provider: provider.id,
    }))
  );
}

/** TypeSafe is exclusively non-chat, including unrecognised/versioned selectors. */
export function isSystemOneOnlyModel(provider: string | null | undefined, model: string): boolean {
  if (provider === "typesafe") return true;
  if (!provider) return false;
  const prefix = `${provider}/`;
  const relative = model.startsWith(prefix) ? model.slice(prefix.length) : model;
  return Boolean(resolveSystemOneModel(`${provider}/${relative}`));
}
