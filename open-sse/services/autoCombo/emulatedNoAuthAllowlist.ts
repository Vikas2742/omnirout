import { NOAUTH_PROVIDERS } from "@/shared/constants/providers";

type NoAuthCatalogEntry = (typeof NOAUTH_PROVIDERS)[keyof typeof NOAUTH_PROVIDERS];

/**
 * Auto-discover the no-auth (keyless) providers permitted to enter the
 * `auto`/`auto-*` candidate pool: every NOAUTH_PROVIDERS entry that opted into
 * prompt-emulated tool calling (`toolCalling: "emulated"` and `noAuth: true`).
 *
 * Those backends answer without any configuration, and their tool calls are
 * executed by the 3rd-party CLI (Claude Code, Codex, Cursor…) — the free
 * provider only emits the call markers, which the CLI parses and runs.
 *
 * Discovered from the catalog, so there is no hardcoded id list to maintain:
 * adding `toolCalling: "emulated"` to a NOAUTH_PROVIDERS entry admits it, and
 * removing the flag takes it back out. Providers without the flag stay fully
 * usable via direct `<alias>/<model>` calls — they are just not auto-routed to.
 *
 * On this catalog the set is `uncloseai` alone: `opencode` is not part of the
 * no-auth catalog on this branch. Providers without the flag stay out
 * (`aihorde`, `auggie`, `codex-app-server`, `veoaifree-web`, `zcode`, and any
 * other); the transport gate below holds out the browser-backed and local-CLI
 * emulated ones.
 *
 * Transport gate (2026-10-16, log evidence): a provider must ALSO serve the
 * request over its own keyless HTTP path. Browser-backed transports
 * (`cloudflare-playground` — Playwright/Chromium WebSocket; `duckduckgo-web` —
 * Cloakbrowser page) and local-CLI bridges (`isLocalCli`, e.g.
 * `devin-cli-agentic` needing DEVIN_AGENTIC_HOME) cannot answer without local
 * infrastructure, so auto-routing to them stalls the whole combo until the
 * per-target timeout (~120s) fires before the next member is tried. They stay
 * fully usable via direct `<alias>/<model>` calls; they are only kept out of the
 * keyless auto pool until the pool can health-gate per transport.
 *
 * History (operator decision 2026-07-24, refs #8183/#6453/#7032): the pool used
 * to be a hardcoded `{opencode}` allowlist aimed at public-HTTP-egress
 * reliability for category/tier and flat-variant `auto/*` pools, not
 * `auto/<family>` pools (`bypassAllowlist` in virtualFactory.ts). The owner
 * accepted expanding that pool to every no-auth provider with emulated tool
 * calling. `duckduckgo-web` had the flag; `aihorde` has none and stays out. The
 * transport gate above then holds `duckduckgo-web` out as well.
 */
/**
 * Keyless transports that need a local browser or a local CLI bridge, so they
 * cannot serve a request on their own. Kept out of the auto pool: a hung member
 * costs the whole combo up to the per-target timeout (~120s) before failover.
 * Browser-backed ids have no catalog flag yet, so they are listed here; local
 * CLIs are detected generically by `isLocalCli`.
 */
const INFRA_DEPENDENT_KEYLESS_PROVIDERS = new Set(["cloudflare-playground", "duckduckgo-web"]);

function isEmulatedNoAuthProvider(
  providerDef: NoAuthCatalogEntry
): providerDef is NoAuthCatalogEntry & { id: string; toolCalling: "emulated" } {
  if (
    providerDef.noAuth !== true ||
    !("toolCalling" in providerDef) ||
    providerDef.toolCalling !== "emulated" ||
    typeof providerDef.id !== "string" ||
    providerDef.id.length === 0
  ) {
    return false;
  }
  if (INFRA_DEPENDENT_KEYLESS_PROVIDERS.has(providerDef.id)) return false;
  if ("isLocalCli" in providerDef && providerDef.isLocalCli === true) return false;
  return true;
}

/** Ids admitted to category/tier and flat-variant `auto/*` pools. */
export function getEmulatedToolCallingNoAuthProviders(): Set<string> {
  const emulated = new Set<string>();
  for (const providerDef of Object.values(NOAUTH_PROVIDERS)) {
    if (isEmulatedNoAuthProvider(providerDef)) emulated.add(providerDef.id);
  }
  return emulated;
}

/** Cached at module load; a catalog flag change is visible on the next process start. */
export const EMULATED_TOOL_CALLING_NOAUTH_PROVIDERS: ReadonlySet<string> =
  getEmulatedToolCallingNoAuthProviders();
