// #16797 — opt-in widenings of the provider error-rule allowlists, each behind its own
// default-off feature flag. Exercises the real providerErrorRules.ts predicates and the
// real checkFallbackError (accountFallback.ts registers the flag reader at load), with
// the flag off (release behavior, unchanged) and on.
import test from "node:test";
import assert from "node:assert/strict";

delete process.env.OMNIROUTE_EGRESS_IP_LOCK_PROVIDERS;
const FLAGS = [
  "OPENCODE_ZEN_EGRESS_IP_LOCK_ENABLED",
  "OPENCODE_FULL_TEXT_ERROR_RULES_ENABLED",
  "CLOUDFLARE_AI_FULL_TEXT_ERROR_RULES_ENABLED",
];
for (const flag of FLAGS) delete process.env[flag];

const rules = await import("../../open-sse/config/providerErrorRules.ts");
// Loading accountFallback registers the feature-flag reader on providerErrorRules.
await import("../../open-sse/services/accountFallback.ts");
const core = await import("../../src/lib/db/core.ts");
const { isFeatureFlagEnabled } = await import("../../src/shared/utils/featureFlags.ts");

test.after(() => {
  for (const flag of FLAGS) delete process.env[flag];
  core.resetDbInstance();
});

function withFlag<T>(flag: string, fn: () => T): T {
  process.env[flag] = "true";
  try {
    return fn();
  } finally {
    delete process.env[flag];
  }
}

test("egress family: opencode-zen is out by default and in with the flag", () => {
  assert.equal(rules.isEgressBucketedLockScope("opencode-zen"), false);
  assert.deepEqual(rules.egressBucketedLockProviders(), ["opencode-cli", "opencode-go"]);
  withFlag("OPENCODE_ZEN_EGRESS_IP_LOCK_ENABLED", () => {
    assert.equal(rules.isEgressBucketedLockScope("opencode-zen"), true);
    assert.equal(rules.isEgressBucketedLockScope("OpenCode-Zen"), true, "case-insensitive");
    assert.deepEqual(rules.egressBucketedLockProviders(), [
      "opencode-cli",
      "opencode-go",
      "opencode-zen",
    ]);
  });
  assert.equal(rules.isEgressBucketedLockScope("opencode-zen"), false, "read per call");
});

test("egress family: an explicit OMNIROUTE_EGRESS_IP_LOCK_PROVIDERS value wins over the flag", () => {
  assert.deepEqual([...rules.resolveEgressIpLockProviders(undefined, false)].sort(), [
    "opencode-cli",
    "opencode-go",
  ]);
  assert.deepEqual([...rules.resolveEgressIpLockProviders("  ", true)].sort(), [
    "opencode-cli",
    "opencode-go",
    "opencode-zen",
  ]);
  assert.equal(rules.resolveEgressIpLockProviders("none", true).size, 0);
  assert.deepEqual([...rules.resolveEgressIpLockProviders("opencode-go", true)], ["opencode-go"]);
});

test("a throwing or missing flag reader fails closed to the release default", () => {
  try {
    rules.setProviderErrorRuleFlagReader(() => {
      throw new Error("flag store unavailable");
    });
    process.env.OPENCODE_ZEN_EGRESS_IP_LOCK_ENABLED = "true";
    assert.equal(rules.isEgressBucketedLockScope("opencode-zen"), false);
    rules.setProviderErrorRuleFlagReader(null);
    assert.equal(rules.isEgressBucketedLockScope("opencode-zen"), false);
  } finally {
    delete process.env.OPENCODE_ZEN_EGRESS_IP_LOCK_ENABLED;
    rules.setProviderErrorRuleFlagReader(isFeatureFlagEnabled);
  }
});
