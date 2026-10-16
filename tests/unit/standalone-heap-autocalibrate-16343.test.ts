/**
 * Issue #16343 — the Docker launcher (scripts/dev/run-standalone.mjs, the image
 * CMD) resolved the V8 heap as resolveMaxOldSpaceMb(OMNIROUTE_MEMORY_MB) with NO
 * fallback argument, so an unset/invalid var landed on the resolver's fixed 512
 * default — the #5172 host calibration (~35% of RAM, clamped [512, 4096]) wired
 * into `omniroute serve` never reached the Docker path. On an 8 GB host with
 * unlimited container memory the ~1 GB ceiling saturated the v8_heap_ratio
 * pressure signal and combo traffic shed with instant 503 resource_pressure.
 *
 * `resolveStandaloneMaxOldSpaceMb` gives the launcher the same contract as
 * `omniroute serve`: an explicit OMNIROUTE_MEMORY_MB always wins; unset/invalid
 * falls back to the host-calibrated default. The Dockerfile drops the baked
 * NODE_OPTIONS heap flag so OMNIROUTE_MEMORY_MB is the single knob.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const { resolveStandaloneMaxOldSpaceMb } = await import("../../scripts/build/runtime-env.mjs");

const GB = 1024 * 1024 * 1024;

test("#16343 unset OMNIROUTE_MEMORY_MB uses the host-calibrated fallback", () => {
  // 8 GB → 2867, mirroring `omniroute serve` — not the old fixed 512.
  assert.equal(resolveStandaloneMaxOldSpaceMb({}, 8 * GB), 2867);
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: undefined }, 8 * GB), 2867);
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: "" }, 4 * GB), 1433);
});

test("#16343 an explicit OMNIROUTE_MEMORY_MB still wins over calibration", () => {
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: "1024" }, 8 * GB), 1024);
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: "2048" }, 1 * GB), 2048);
});

test("#16343 invalid values fall back to calibration; bad totalmem to 512", () => {
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: "abc" }, 8 * GB), 2867);
  assert.equal(resolveStandaloneMaxOldSpaceMb({ OMNIROUTE_MEMORY_MB: "99999" }, 8 * GB), 2867);
  assert.equal(resolveStandaloneMaxOldSpaceMb({}, undefined), 512);
  assert.equal(resolveStandaloneMaxOldSpaceMb({}, 0), 512);
});

test("#16343 run-standalone.mjs resolves the heap through the calibrated helper", () => {
  const src = readFileSync(
    new URL("../../scripts/dev/run-standalone.mjs", import.meta.url),
    "utf8"
  );
  assert.match(
    src,
    /resolveStandaloneMaxOldSpaceMb\(/,
    "run-standalone.mjs must resolve via resolveStandaloneMaxOldSpaceMb so the calibrated fallback reaches the Docker path"
  );
});

test("#16343 Dockerfile no longer bakes a NODE_OPTIONS heap flag", () => {
  const dockerfile = readFileSync(new URL("../../Dockerfile", import.meta.url), "utf8");
  // Scope to the runner stages (runner-base + runner-web/runner-cli derived
  // from it): the builder stage legitimately pins NODE_OPTIONS for `next
  // build` — only the runtime image's heap flag shadowed calibration.
  const runnerSection = dockerfile.slice(dockerfile.indexOf("FROM base AS runner-base"));
  assert.doesNotMatch(
    runnerSection,
    /^ENV\s+NODE_OPTIONS="--max-old-space-size=/m,
    "a baked NODE_OPTIONS --max-old-space-size shadows auto-calibration when OMNIROUTE_MEMORY_MB is unset — the launcher owns the heap flag now"
  );
  assert.match(
    runnerSection,
    /^ENV\s+OMNIROUTE_MEMORY_MB=1024/m,
    "the stock 1024MB default stays as the single explicit knob"
  );
});
