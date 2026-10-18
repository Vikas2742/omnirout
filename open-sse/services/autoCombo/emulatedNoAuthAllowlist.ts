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
 * removing the flag takes it back out (the transport gate below can also hold
 * one back). Providers without the flag stay fully usable via direct
 * `<alias>/<model>` calls — they are just not auto-routed to.
 *
 * Transport gate (2026-10-16, log evidence): a provider must ALSO be able to
 * answer over the network by itself. Two catalog flags mark the transports that
 * cannot: `browserBacked` (its executor drives a local Playwright/Chromium page —
 * always, or whenever the browser pool is enabled) and `isLocalCli` (its executor
 * spawns a locally-installed CLI). Both are read from the catalog, so this file
 * holds no id list. Auto-routing to one of them stalls the combo until the
 * per-target timeout (~120s) fires before the next member is tried, so they stay
 * out of the keyless auto pool until the pool can health-gate per transport;
 * direct `<alias>/<model>` calls keep working.
 *
 * History (operator decision 2026-07-24, refs #8183/#6453/#7032): the pool used
 * to be a hardcoded `{opencode}` allowlist aimed at public-HTTP-egress
 * reliability for category/tier and flat-variant `auto/*` pools, not
 * `auto/<family>` pools (`bypassAllowlist` in virtualFactory.ts). The owner
 * accepted expanding that pool to every no-auth provider with emulated tool
 * calling, and the 2026-10-16 transport gate above trimmed the infra-dependent
 * members back out.
 */
/**
 * Keyless transports that need a local browser or a local CLI bridge, so they
 * cannot serve a request on their own. Kept out of the auto pool: a hung member
 * costs the whole combo up to the per-target timeout (~120s) before failover.
 * Both flags are declared on the catalog entry, so there is no id list here.
 */
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
  if ("isLocalCli" in providerDef && providerDef.isLocalCli === true) return false;
  if ("browserBacked" in providerDef && providerDef.browserBacked === true) return false;
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
