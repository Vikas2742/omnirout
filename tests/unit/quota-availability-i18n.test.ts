import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { IntlMessageFormat } from "intl-messageformat";

const root = new URL("../../src/i18n/messages/", import.meta.url);
const catalogs = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith(".json"))
    .map((file) => [file.slice(0, -5), JSON.parse(readFileSync(new URL(file, root), "utf8"))])
);
const keys = [
  "healthAction",
  "healthTitle",
  "healthDrag",
  "healthResetOrder",
  "healthPool",
  "healthOtherPool",
  "healthIncluded",
  "healthBannerUnavailable",
  "healthBannerAvailable",
  "healthLegendOk",
  "healthLegendCooldown",
  "healthLegendAction",
  "healthLegendPartial",
  "healthWaited",
  "healthWait",
  "healthFastest",
  "healthRatio",
  "healthCd5",
  "healthCdw",
  "healthAccountHint",
  "healthAvailable",
  "healthRestricted",
  "healthUnavailable",
  "healthCooldown",
  "healthQuotaExhausted",
  "healthRecovery",
  "noQuotaData",
  "healthQuotaError",
  "healthNoRuntime",
  "healthPreviousSnapshot",
  "healthPreviousFailure",
  "healthAwaitingSync",
  "healthPolicyUnavailable",
  "healthSummaryFailed",
  "healthRuntimeObserved",
  "healthQuotaObserved",
  "healthOldestQuota",
  "healthRecoveryUnknown",
  "healthDetailsHint",
  "healthFiveHour",
  "healthOverall",
];
const obsolete = ["healthObservationUnavailable", "statCritical", "statAlert", "statHealthy"];
function flatten(node: Record<string, unknown>, prefix = ""): Record<string, string> {
  return Object.fromEntries(
    Object.entries(node).flatMap(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return value && typeof value === "object"
        ? Object.entries(flatten(value as Record<string, unknown>, path))
        : [[path, value as string]];
    })
  );
}
test("all 67 catalogs have identical key sets, no placeholders, and no obsolete availability keys", () => {
  assert.equal(Object.keys(catalogs).length, 67);
  const expected = Object.keys(flatten(catalogs.en)).sort();
  for (const [locale, catalog] of Object.entries(catalogs)) {
    const messages = flatten(catalog);
    assert.deepEqual(Object.keys(messages).sort(), expected, locale);
    for (const [key, value] of Object.entries(messages))
      assert.ok(!value.includes("__MISSING__"), `${locale}.${key}`);
    for (const key of obsolete)
      assert.equal(catalog.usage[key], undefined, `${locale}.${key} is obsolete`);
  }
});
test("availability copy is translated in every locale and compiles as ICU", () => {
  for (const [locale, catalog] of Object.entries(catalogs)) {
    for (const key of keys) {
      const value = catalog.usage[key];
      assert.equal(typeof value, "string", `${locale}.${key}`);
      assert.ok(value.trim().length > 0, `${locale}.${key}`);
      if (locale !== "en")
        assert.notEqual(
          value,
          catalogs.en.usage[key],
          `${locale}.${key} must not use English fallback`
        );
      assert.doesNotThrow(() => new IntlMessageFormat(value, locale), `${locale}.${key}`);
    }
  }
  assert.equal(catalogs["zh-CN"].usage.healthAvailable, "可用");
  assert.equal(catalogs["zh-CN"].usage.healthRestricted, "部分受限");
  assert.equal(catalogs.en.usage.healthRestricted, "Partially restricted");
});
