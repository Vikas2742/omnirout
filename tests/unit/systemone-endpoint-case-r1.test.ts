import assert from "node:assert/strict";
import test from "node:test";
import {
  ENDPOINT_CATEGORIES,
  resolveCanonicalEndpointPath,
  resolveEndpointCategory,
} from "../../src/shared/constants/endpointCategories.ts";

for (const { id, prefixes } of ENDPOINT_CATEGORIES) {
  for (const prefix of prefixes) {
    test(`B1: ${id} canonicalizes mixed-case API, V1 and doubled rewrites: ${prefix}`, () => {
      for (const spelling of [
        prefix.toUpperCase(),
        `/API${prefix.toUpperCase()}`,
        `/V1${prefix.toUpperCase()}`,
      ]) {
        assert.equal(resolveEndpointCategory(resolveCanonicalEndpointPath(spelling)), id, spelling);
      }
    });
  }
}
test("B1: management paths remain outside endpoint categories", () => {
  for (const path of [
    "/API/SETTINGS",
    "/V1/systemone-private",
    "/API/providers",
    "/typesafe/private",
  ]) {
    assert.equal(resolveEndpointCategory(resolveCanonicalEndpointPath(path)), null);
  }
});
