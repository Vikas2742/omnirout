/**
 * Auto-combo no-auth pool — the `auto`/`auto-*` candidate pool may only pull in
 * no-auth (keyless) providers that opted into prompt-emulated tool calling.
 *
 * The pool is no longer a hand-maintained id list: it is derived at startup from
 * NOAUTH_PROVIDERS, taking every entry with `noAuth: true` and
 * `toolCalling: "emulated"`. Those providers answer without any credential, and
 * their tool calls are executed by the 3rd-party CLI (Claude Code, Codex, Cursor…)
 * rather than by the upstream.
 *
 * Every other keyless provider stays OUT of every auto/* pool — it remains fully
 * usable via direct `<alias>/<model>` calls, it is just not auto-routed to.
 *
 * On this branch the pool is `uncloseai` alone: it is the only catalog entry with
 * both the `noAuth` + `toolCalling: "emulated"` opt-in and no transport-gate flag
 * (`browserBacked` / `isLocalCli`) holding it back.
 *
 * Historical note: until 2026-07-24 (refs #8183/#6453/#7032) the pool was a
 * hardcoded `{opencode}` allowlist. On 2026-07-24 it was expanded to every
 * emulated no-auth provider; on 2026-10-16 the browser-backed and local-CLI
 * transports were held back out again (log evidence: a hung
 * `cloudflare-playground` target cost ~120s per auto request).
 *
 * Regression guard: EMULATED_TOOL_CALLING_NOAUTH_PROVIDERS in
 * open-sse/services/autoCombo/emulatedNoAuthAllowlist.ts drives what belongs
 * here. Adding `toolCalling: "emulated"` to another NOAUTH_PROVIDERS entry — or
 * setting/clearing a `browserBacked` / `isLocalCli` transport-gate flag — WILL
 * change the pool and must update ALLOWED_NOAUTH_PROVIDERS below.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-noauth-allowlist-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;

process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const settingsDb = await import("../../src/lib/db/settings.ts");
const virtualFactory = await import("../../open-sse/services/autoCombo/virtualFactory.ts");

async function resetStorage() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

test.beforeEach(async () => {
  await resetStorage();
  // contract changed by #15979 (on top of #15839): `excludeTosAvoid` defaults to on and
  // uncataloged models inherit the provider's curated `tos: "avoid"` verdict, so a fresh
  // install filters every opencode model out of auto/*. Opt out so this file keeps guarding
  // the no-auth allowlist itself; the ToS default is covered by
  // tests/unit/issue-15059-tos-avoid-auto-default.test.ts and tos-provider-alias-15059.
  await settingsDb.updateSettings({ excludeTosAvoid: false });
});

test.after(async () => {
  await resetStorage();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });

  if (ORIGINAL_DATA_DIR === undefined) {
    delete process.env.DATA_DIR;
  } else {
    process.env.DATA_DIR = ORIGINAL_DATA_DIR;
  }
});

// Exactly the NOAUTH_PROVIDERS entries with `noAuth: true` + `toolCalling: "emulated"`
// whose transport can serve keylessly (plain HTTP), not a browser or local CLI.
// `opencode` is not part of the no-auth catalog on this branch, so `uncloseai` is the
// only one left; the browser-backed and local-CLI emulated providers are held out.
const ALLOWED_NOAUTH_PROVIDERS = ["uncloseai"];
// Keyless providers held out of every auto/* pool: no emulated opt-in, or an
// infra-dependent transport (browser-backed / local CLI) that stalls the combo.
const EXCLUDED_NOAUTH_PROVIDERS = [
  "aihorde",
  "auggie",
  "codex-app-server",
  "veoaifree-web",
  "zcode",
  "cloudflare-playground",
  "devin-cli-agentic",
  "duckduckgo-web",
];

test("fresh install: the emulated-tool-calling no-auth providers are present in the auto-combo pool", async () => {
  const combo = await virtualFactory.createVirtualAutoCombo(undefined);

  for (const providerId of ALLOWED_NOAUTH_PROVIDERS) {
    const models = combo.models.filter((m: { providerId: string }) => m.providerId === providerId);
    assert.ok(
      models.length >= 1,
      `no-auth provider "${providerId}" (toolCalling: "emulated") must be present in the fresh-install ` +
        `auto-combo pool. Pool providers: ${JSON.stringify([...new Set(combo.models.map((m: { providerId: string }) => m.providerId))])}`
    );
    assert.ok(
      models.every((m: { connectionId: string }) => m.connectionId === "noauth"),
      `all "${providerId}" models must use the synthetic noauth connection`
    );
    assert.ok(
      combo.autoConfig.candidatePool.includes(providerId),
      `"${providerId}" must be in the candidatePool`
    );
  }
});

test("fresh install: no-auth providers without the emulated opt-in are EXCLUDED from the auto-combo pool", async () => {
  const combo = await virtualFactory.createVirtualAutoCombo(undefined);

  for (const providerId of EXCLUDED_NOAUTH_PROVIDERS) {
    const present = combo.models.some((m: { providerId: string }) => m.providerId === providerId);
    assert.equal(
      present,
      false,
      `no-auth provider "${providerId}" must NOT be auto-routed to (it carries no ` +
        `toolCalling: "emulated" opt-in), but it appeared in the pool. ` +
        `Pool: ${JSON.stringify(combo.models.map((m: { model: string }) => m.model))}`
    );
    assert.ok(
      !combo.autoConfig.candidatePool.includes(providerId),
      `"${providerId}" must not be in the candidatePool`
    );
  }
});

test("fresh install: ONLY the emulated-tool-calling providers are synthetic-noauth candidates (no other keyless provider leaks in)", async () => {
  const combo = await virtualFactory.createVirtualAutoCombo(undefined);

  const noauthProviders = [
    ...new Set(
      combo.models
        .filter((m: { connectionId: string }) => m.connectionId === "noauth")
        .map((m: { providerId: string }) => m.providerId)
    ),
  ].sort();
  assert.deepEqual(
    noauthProviders,
    [...ALLOWED_NOAUTH_PROVIDERS].sort(),
    `only the emulated-tool-calling providers may be no-auth (connectionId="noauth") candidates on a ` +
      `fresh install, but found: ${JSON.stringify(noauthProviders)}`
  );
});

test("transport gate is catalog-driven: every flagged no-auth transport stays out of the pool", async () => {
  const { NOAUTH_PROVIDERS } = await import("../../src/shared/constants/providers.ts");
  const combo = await virtualFactory.createVirtualAutoCombo(undefined);
  const poolProviders = new Set(combo.models.map((m: { providerId: string }) => m.providerId));

  // The gate must key off the catalog flags, never off an id list held in the
  // allowlist module: flagging a transport is what keeps it out of the pool.
  const flagged = Object.values(NOAUTH_PROVIDERS).filter(
    (p) =>
      ("browserBacked" in p && p.browserBacked === true) ||
      ("isLocalCli" in p && p.isLocalCli === true)
  );
  assert.ok(
    flagged.length > 0,
    "expected at least one transport-gated no-auth entry in the catalog"
  );

  for (const entry of flagged) {
    assert.equal(
      poolProviders.has(entry.id),
      false,
      `"${entry.id}" is transport-gated (browserBacked/isLocalCli) and must not be auto-routed to. ` +
        `Pool: ${JSON.stringify([...poolProviders])}`
    );
  }
});
