import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import { classifyRoute } from "../../src/server/authz/classify.ts";
import {
  resolveCanonicalEndpointPath,
  resolveEndpointCategory,
} from "../../src/shared/constants/endpointCategories.ts";

for (const spelling of [
  "/v1/systemone",
  "/api/v1/systemone",
  "/typesafe/v1/systemone",
  "/api/typesafe/v1/systemone",
  "/TYPESAFE/v1/systemone",
]) {
  test(`System One admission and endpoint policy agree: ${spelling}`, () => {
    assert.equal(classifyRoute(spelling, "POST").routeClass, "CLIENT_API");
    assert.equal(resolveEndpointCategory(resolveCanonicalEndpointPath(spelling)), "systemone");
  });
}
for (const spelling of ["/typesafe/v1/models", "/api/typesafe/v1/models"]) {
  test(`SDK model discovery uses client-API admission: ${spelling}`, () => {
    assert.equal(classifyRoute(spelling, "GET").routeClass, "CLIENT_API");
    assert.equal(resolveEndpointCategory(resolveCanonicalEndpointPath(spelling)), "models");
  });
}
test("SDK rewrite participates in case-safe Next proxy matcher without exposing adjacent management paths", () => {
  const proxy = fs.readFileSync(new URL("../../src/proxy.ts", import.meta.url), "utf8");
  assert.ok(proxy.includes("[tT][yY][pP][eE][sS][aA][fF][eE]"));
  assert.equal(classifyRoute("/api/typesafe/private", "POST").routeClass, "MANAGEMENT");
});
