/**
 * Model-id prefix stacking guards for compatible-provider nodes.
 *
 * A node's public model ids are `<prefix>/<upstreamId>`, but stored rows
 * (custom models, alias values) can carry the prefix already — written before
 * normalization existed or pasted from a prefixed listing. Emission and
 * storage must collapse those stacks so the node never publishes
 * `<prefix>/<prefix>/<model>`.
 */

/**
 * Strip every repeated leading `<prefix>/` for the given provider prefixes.
 *
 * Only the provider's OWN prefixes are ever stripped, and only as a leading
 * stack: upstream ids may legitimately contain slashes
 * (`opc/big-pickle`) or even begin with a segment equal to some other
 * provider's prefix. Idempotent by construction — a fully collapsed id
 * collapses to itself, and emission re-adding one `<prefix>/` yields exactly
 * `<prefix>/<upstreamId>`.
 */
export function collapseProviderPrefix(
  modelId: string,
  prefixes: readonly (string | null | undefined)[]
): string {
  const candidates = prefixes.filter((p): p is string => Boolean(p));
  let current = modelId;
  let changed = true;
  while (changed) {
    changed = false;
    for (const prefix of candidates) {
      const withSlash = `${prefix}/`;
      if (current.length > withSlash.length && current.startsWith(withSlash)) {
        current = current.slice(withSlash.length);
        changed = true;
      }
    }
  }
  return current;
}

/**
 * Resolve a compatible-provider node's display prefix the same way the
 * `/v1/models` catalog does: the configured `prefix`, else the name slugified
 * to the same charset, else null.
 */
export function resolveProviderNodePrefix(
  node: { prefix?: unknown; name?: unknown } | null | undefined
): string | null {
  if (!node) return null;
  const configured = typeof node.prefix === "string" ? node.prefix.trim() : "";
  if (configured) return configured;
  const name = typeof node.name === "string" ? node.name.trim().toLowerCase() : "";
  if (!name) return null;
  const slug = name.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return slug || null;
}
