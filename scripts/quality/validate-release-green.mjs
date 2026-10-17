#!/usr/bin/env node
// scripts/quality/validate-release-green.mjs
//
// "Release-green" pre-flight validator (Solution C).
//
// ... (file header unchanged)

import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// NOTE: Historically this module imported the third-party `yaml` parser at top-level
// which made the entire script fail when `yaml` wasn't installed (e.g. a broken
// `npm ci` / install sequence). To make the validator resilient in minimally
// provisioned environments (and to allow CI to surface the real `npm ci` error
// instead of an import-time crash), we avoid a hard import here and use a
// lightweight fallback scan when a full YAML parser is not available.

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

// Per-gate captured output. execFileSync buffers everything and the report only
// shows a one-line summary, so without these files every red requires RE-RUNNING
// the gate just to see the detail (the dominant cost of the 2026-07-05 pre-flight).
const LOG_DIR = join(ROOT, "_artifacts", "release-green");
function saveGateLog(id, out) {
  try {
    mkdirSync(LOG_DIR, { recursive: true });
    writeFileSync(join(LOG_DIR, `${id}.log`), String(out ?? ""));
  } catch {
    /* log persistence is best-effort — never fails a gate */
  }
}

// ─── Pure helpers (exported for tests) ──────────────────────────────────────

/** Read the committed ratchet baseline value for a metric (null if unknown). */
export function baselineValue(metric, root = ROOT) {
  try {
    const raw = JSON.parse(
      readFileSync(join(root, "config/quality/quality-baseline.json"), "utf8")
    );
    const metrics = raw.metrics || raw;
    const v = metrics?.[metric]?.value;
    return typeof v === "number" ? v : null;
  } catch {
    return null;
  }
}

// A line that is unambiguously a PASS. Test reporters print the file name on BOTH the
// pass and the fail line, so a green line for a file whose NAME contains "fail"
// (fail-fast-*.test.ts, failover-*.test.ts) must never be offered as a failure cause.
const GREEN_LINE_RE = /^[✓✔√]/;

// Markers that are only meaningful at the START of a line: "FAIL" also occurs inside test
// FILE NAMES and inside summary prose ("Test Files 1 failed"), so matching it anywhere —
// and case-insensitively — reports a PASSING file as the cause of the red.
const LINE_START_FAILURE_RE = /^(?:[✖✗×]|FAIL\b|not ok\b|REGRESS)/;

// Markers that are unambiguous ANYWHERE in the line: tsc and Node emit them mid-line
// ("src/x.ts(10,5): error TS2322: ..."), so these stay unanchored. They are matched
// case-SENSITIVELY because that is how the emitting tools actually spell them.
const INLINE_FAILURE_RE = /\berror TS\d+\b|\bAssertionError\b|\bError:|\bREGRESS/;

/** Best-effort "first meaningful failure line" from captured command output. */
export function firstFailureLine(out) {
  const lines = String(out || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const hit = lines.find(
    (l) => !GREEN_LINE_RE.test(l) && (LINE_START_FAILURE_RE.test(l) || INLINE_FAILURE_RE.test(l))
  );
  return (hit || lines[lines.length - 1] || "failed").slice(0, 200);
}

/** Sum {errorCount,warningCount} across an eslint --format json result array. */
export function eslintCounts(parsed) {
  let errors = 0;
  let warnings = 0;
  for (const f of parsed || []) {
    errors += f.errorCount || 0;
    warnings += f.warningCount || 0;
  }
  return { errors, warnings };
}

/**
 * Parse the eslint JSON array out of mixed stdout (tolerates a leading banner AND trailing
 * non-JSON text, e.g. ESLint 9.x's `--suppressions-location` "unpruned suppressions" stderr
 * sentence glued onto the report when stdout+stderr are concatenated — #7837).
 */
export function parseEslintJson(out) {
  const str = String(out || "");
  const start = str.indexOf("[");
  if (start < 0) return null;
  // Fast path: the whole remainder is valid JSON (no trailing text).
  try {
    return JSON.parse(str.slice(start));
  } catch {
    // fall through to bracket-depth scan below
  }
  // Slow path: find the matching closing "]" for the array that starts at `start`, tolerating
  // any non-JSON text appended after it. Depth-tracks brackets while skipping over string
  // literals (so a "]" or "[" inside a message string doesn't miscount).
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < str.length; i++) {
    const ch = str[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
    } else if (ch === "[") {
      depth++;
    } else if (ch === "]") {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(str.slice(start, i + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

/** Pull the cognitive-complexity violation count from the gate's output. */
export function parseCognitiveCount(out) {
  const s = String(out || "");
  // `check:complexity-ratchets` runs ONE shared ESLint walk and prints BOTH ratchets, with the
  // cyclomatic "N violações" summary emitted FIRST — so a bare `\d+ violações` regex would grab
  // the cyclomatic count. Prefer the unambiguous machine-readable `cognitiveComplexity=N` line
  // (mirrors the cyclomatic `complexity=N` parse used for cycCurrent below).
  const machine = s.match(/(?:^|\n)cognitiveComplexity=(\d+)/);
  if (machine) return Number(machine[1]);
  const m = s.match(/(\d+)\s+(?:function\(s\) exceed|violações|violations)/i);
  return m ? Number(m[1]) : null;
}

/**
 * Drift verdict for a ratchet: a metric that grew past its committed baseline is
 * "drift" (reported, never blocking). `direction:"down"` metrics (warnings,
 * complexity, file-size counts) regress when current > baseline.
 */
export function isDrift(current, baseline) {
  if (typeof current !== "number" || typeof baseline !== "number") return false;
  return current > baseline;
}

/** releaseGreen iff there are zero failing HARD checks (drift never blocks). */
export function computeVerdict(results) {
  const hardFailures = results.filter((r) => r.kind === "hard" && !r.ok);
  const drift = results.filter((r) => r.kind === "drift" && !r.ok);
  return { releaseGreen: hardFailures.length === 0, hardFailures, drift };
}

// ─── --full-ci: reproduce the EXACT ci.yml gate set (P0, v3.8.46 post-mortem) ──
//
// WHY: the curated HARD/DRIFT lists above are a hand-maintained SUBSET. The v3.8.46
// release leaked 11 static/gate base-reds (route-validation:t06, docs-counts --strict,
// docs-symbols, bundle-size --ratchet, test-masking, …) that the pre-flight never ran
// because they live only in the ci.yml gate JOBS, not in this script. --full-ci reads
// ci.yml itself and runs every `npm run check:*` / `npm run lint` from those jobs, so the
// set stays current as gates are added (no drift between this script and CI). One command
// → zero CI layers for the whole static category.

/** ci.yml jobs whose npm-run gate steps --full-ci reproduces locally. */
export const FULL_CI_GATE_JOBS = [
  "lint",
  "quality-gate",
  "quality-extended",
  "docs-sync-strict",
  "pr-test-policy",
];

// Gates that cannot run meaningfully in a local working-tree pre-flight:
//   • check:pr-evidence  — inspects the open PR body (no PR locally)
//   • check:codeql-ratchet — queries GitHub's code-scanning alerts for the REMOTE main
//     branch (CodeQL Default Setup only analyzes main/PRs→main; a local run reflects
//     post-merge server state the pre-flight can't change). Checked on the release PR.
export const FULL_CI_SKIP = new Set(["check:pr-evidence", "check:codeql-ratchet"]);

// Gates that need a specific env to behave like CI (else they compare against the wrong base).
export const FULL_CI_ENV = { "check:test-masking": { GITHUB_BASE_REF: "main" } };

const FULL_CI_DEFAULT_TIMEOUT_MS = 10 * 60 * 1000;
const FULL_CI_TIMEOUT_OVERRIDES_MS = {
  "check:test-masking": 30 * 60 * 1000,
};

export function fullCiTimeoutFor(gateId) {
  return FULL_CI_TIMEOUT_OVERRIDES_MS[gateId] ?? FULL_CI_DEFAULT_TIMEOUT_MS;
}

export const FULL_CI_CURATED_ALIASES = {
  lint: "lint-errors",
  "check:workflows": "workflow-lint",
  "check:complexity-ratchets": "complexity",
};

/** Curated-pass id equivalent to a ci.yml gate script id ("check:file-size" -> "file-size"). */
export function curatedEquivalentId(scriptId) {
  const id = String(scriptId || "");
  if (Object.hasOwn(FULL_CI_CURATED_ALIASES, id)) return FULL_CI_CURATED_ALIASES[id];
  return id.startsWith("check:") ? id.slice("check:".length) : id;
}

export function fullCiKindFor(scriptId, results) {
  const equivalent = curatedEquivalentId(scriptId);
  const curated = (results || []).find((r) => r.id === scriptId || r.id === equivalent);
  return curated?.kind ?? "hard";
}

/**
 * Parse a ci.yml text and return the ordered, de-duplicated list of gate commands to run.
 * Each entry: { id, job, args:["run", <script>, ...("--" + args)], env }.
 * Only `npm run lint` and `npm run check:*` steps are taken (build/install/test-run npm
 * scripts are ignored); a `run: |` block is scanned line-by-line so multi-command steps work.
 * Exported pure (no side effects) so the extraction has a fixture-driven unit test.
 */
export function extractCiGates(
  yamlText,
  { jobs = FULL_CI_GATE_JOBS, skip = FULL_CI_SKIP, envMap = FULL_CI_ENV } = {}
) {
  // Attempt a lightweight, dependency-free extraction: rather than parsing full YAML
  // (which required the optional `yaml` package), scan the ci.yml text for `npm run ...`
  // invocations. This is intentionally permissive: it collects the gate scripts declared
  // anywhere in the workflow. It avoids a hard dependency on `yaml` so the validator can
  // still run in environments where dev deps haven't been installed.
  const gates = [];
  const seen = new Set();
  if (typeof yamlText !== "string") return gates;

  // Walk the file line-by-line and pick up `npm run <script> [-- <args>]` occurrences.
  const lines = yamlText.split(/\r?\n/);
  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    // Match `npm run script` optionally followed by `--` and extra args
    const m = trimmed.match(/^npm run (\S+)(?:\s+--\s+(.+?))?\s*$/);
    if (!m) continue;
    const script = m[1];
    if (script !== "lint" && !script.startsWith("check:")) continue; // gates only
    if (skip.has(script) || seen.has(script)) continue; // dedup + skip non-local
    seen.add(script);
    const extra = m[2] ? m[2].split(/\s+/).filter(Boolean) : [];
    gates.push({
      id: script,
      job: null, // unknown without a full YAML parse
      args: extra.length ? ["run", script, "--", ...extra] : ["run", script],
      env: envMap[script],
    });
  }

  // If the ci.yml used `run: |` multi-line blocks (common), the above picks them up because
  // the block lines themselves contain the `npm run` invocations. The ordering is the file
  // order which is good enough for deterministic runs. Return the collected gates.
  return gates;
}

// ─── Orchestration (only when run directly) ─────────────────────────────────

export function classifyRunError(err, timeoutMs) {
  const timedOut = err?.killed === true || err?.code === "ETIMEDOUT";
  if (timedOut && timeoutMs) {
    return {
      code: 124,
      out: `gate exceeded its ${Math.round(timeoutMs / 1000)}s ceiling and was killed — treat as a hung/failed gate (e.g. an unreleased DB handle in the unit suite); does NOT pass`,
    };
  }
  return {
    code: typeof err?.status === "number" ? err.status : 1,
    out: `${err?.stdout || ""}${err?.stderr || ""}`,
  };
}

const HERMETIC_SCRUB = ["OMNIROUTE_API_KEY", "OMNIROUTE_URL"];
let hermetic = false;
function buildGateEnv(extra) {
  const env = { ...process.env, FORCE_COLOR: "0", ...(extra || {}) };
  if (hermetic) for (const k of HERMETIC_SCRUB) delete env[k];
  return env;
}

function run(cmd, cmdArgs, opts = {}) {
  try {
    const out = execFileSync(cmd, cmdArgs, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 256 * 1024 * 1024,
      env: buildGateEnv(opts.env),
      ...(opts.timeout ? { timeout: opts.timeout } : {}),
    });
    return { code: 0, out };
  } catch (err) {
    return classifyRunError(err, opts.timeout);
  }
}

const execFileAsync = promisify(execFile);

async function runAsync(cmd, cmdArgs, opts = {}) {
  try {
    const { stdout, stderr } = await execFileAsync(cmd, cmdArgs, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 256 * 1024 * 1024,
      env: buildGateEnv(opts.env),
      ...(opts.timeout ? { timeout: opts.timeout } : {}),
    });
    return { code: 0, out: `${stdout || ""}${stderr || ""}` };
  } catch (err) {
    return classifyRunError(err, opts.timeout);
  }
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const JSON_OUT = args.has("--json");
  const WITH_BUILD = args.has("--with-build");
  const QUICK = args.has("--quick");
  const FULL_CI = args.has("--full-ci");
  hermetic = args.has("--hermetic");

  const results = [];
  const record = (r) => {
    results.push(r);
    const icon = r.ok ? "✅" : r.kind === "drift" ? "🟡" : "❌";
    process.stderr.write(`${icon} [${r.kind}] ${r.label}${r.detail ? ` — ${r.detail}` : ""}\n`);
  };

  const announce = (label) => process.stderr.write(`▶ ${label}…\n`);

  const hardCmd = (id, label, cmd, cmdArgs, opts) => {
    announce(label);
    const { code, out } = run(cmd, cmdArgs, opts);
    saveGateLog(id, out);
    record({
      id,
      label,
      kind: "hard",
      ok: code === 0,
      detail: code === 0 ? "pass" : firstFailureLine(out),
    });
  };

  const driftCmd = (id, label, cmd, cmdArgs, okDetail = "within baseline", opts) => {
    announce(label);
    const { code, out } = run(cmd, cmdArgs, opts);
    saveGateLog(id, out);
    record({
      id,
      label,
      kind: "drift",
      ok: code === 0,
      detail: code === 0 ? okDetail : firstFailureLine(out),
    });
  };

  process.stderr.write("🔎 Release-green validation (current working tree)\n\n");

  hardCmd("typecheck", "Typecheck (core)", npmCmd, ["run", "typecheck:core"]);

  // ESLint: ONE pass → errors (hard) + warnings (drift)
  {
    announce("ESLint (errors + warnings — ~5-15min)");
    const { out } = run(
      "npx",
      [
        "eslint",
        ".",
        "--format",
        "json",
        "--suppressions-location",
        "config/quality/eslint-suppressions.json",
        "--pass-on-unpruned-suppressions",
      ],
      { timeout: 30 * 60 * 1000 }
    );
    saveGateLog("lint", out);
    const parsed = parseEslintJson(out);
    if (!parsed) {
      record({
        id: "lint",
        label: "ESLint",
        kind: "hard",
        ok: false,
        detail: "could not parse eslint json",
      });
    } else {
      const { errors, warnings } = eslintCounts(parsed);
      record({
        id: "lint-errors",
        label: "ESLint errors",
        kind: "hard",
        ok: errors === 0,
        detail: `${errors} error(s)`,
      });
      const base = baselineValue("eslintWarnings");
      const over = isDrift(warnings, base);
      record({
        id: "eslint-warnings",
        label: "ESLint warnings (ratchet)",
        kind: "drift",
        ok: !over,
        detail:
          base == null
            ? `${warnings} (no baseline)`
            : `${warnings} vs baseline ${base}${over ? ` (+${warnings - base} drift → rebaseline at release)` : ""}`,
      });
    }
  }

  hardCmd("db-rules", "DB rules", npmCmd, ["run", "check:db-rules"]);
  hardCmd("public-creds", "Public creds", npmCmd, ["run", "check:public-creds"]);

  // Complexity + cognitive (one ESLint walk; both still recorded as drift)
  {
    announce("Complexity + cognitive ratchets (shared ESLint walk)");
    const { out } = run(npmCmd, ["run", "check:complexity-ratchets"]);
    saveGateLog("complexity-ratchets", out);
    const cogCurrent = parseCognitiveCount(out);
    const cogBase = baselineValue("cognitiveComplexity");
    const cogOver = isDrift(cogCurrent, cogBase);
    const cycMatch = /(?:^|\n)complexity=(\d+)/.exec(out);
    const cycOkMatch = /\[complexity\] OK — (\d+)/.exec(out);
    const cycRegMatch = /\[complexity\] REGRESSÃO — (\d+)/.exec(out);
    const cycCurrent = cycMatch
      ? Number(cycMatch[1])
      : cycOkMatch
        ? Number(cycOkMatch[1])
        : cycRegMatch
          ? Number(cycRegMatch[1])
          : null;
    const cycRegressed = /\[complexity\] REGRESSÃO/.test(out);
    record({
      id: "cognitive-complexity",
      label: "Cognitive complexity (ratchet)",
      kind: "drift",
      ok: !cogOver,
      detail:
        cogCurrent == null
          ? "could not parse count"
          : `${cogCurrent} vs baseline ${cogBase}${cogOver ? ` (+${cogCurrent - cogBase} drift → rebaseline at release)` : ""}`,
    });
    record({
      id: "complexity",
      label: "Cyclomatic complexity (ratchet)",
      kind: "drift",
      ok: !cycRegressed,
      detail:
        cycCurrent == null
          ? firstFailureLine(out) || "measured via check:complexity-ratchets"
          : `complexity=${cycCurrent} (shared walk with cognitive)${cycRegressed ? " REGRESSED" : ""}`,
    });
  }

  // file-size (drift)
  {
    const { code, out } = run(npmCmd, ["run", "check:file-size"]);
    record({
      id: "file-size",
      label: "File-size ratchet",
      kind: "drift",
      ok: code === 0,
      detail: code === 0 ? "within frozen caps" : firstFailureLine(out),
    });
  }

  if (!QUICK) {
    announce("Test-masking (weakened-assert guard vs main)");
    run("git", ["fetch", "--no-tags", "origin", "main", "--depth=200"], { timeout: 60 * 1000 });
    const { code, out } = run(npmCmd, ["run", "check:test-masking"], {
      env: { GITHUB_BASE_REF: "main" },
    });
    saveGateLog("test-masking", out);
    record({
      id: "test-masking",
      label: "Test-masking (weakened-assert guard)",
      kind: "hard",
      ok: code === 0,
      detail: code === 0 ? "no weakening" : firstFailureLine(out),
    });
  }

  driftCmd("dead-code", "Dead-code (ratchet)", npmCmd, ["run", "check:dead-code"]);
  driftCmd("type-coverage", "Type coverage (ratchet)", npmCmd, ["run", "check:type-coverage"]);
  driftCmd("compression-budget", "Compression budget (ratchet)", npmCmd, [
    "run",
    "check:compression-budget",
  ]);
  driftCmd("openapi-coverage", "OpenAPI route coverage (ratchet)", npmCmd, [
    "run",
    "check:openapi-coverage",
  ]);
  driftCmd("workflow-lint", "Workflow lint (zizmor ratchet)", npmCmd, [
    "run",
    "check:workflows",
    "--",
    "--ratchet",
  ]);
  driftCmd("codeql-ratchet", "CodeQL alerts (ratchet)", npmCmd, ["run", "check:codeql-ratchet"]);

  hardCmd("docs-all", "Docs sync + fabricated-docs (strict)", npmCmd, ["run", "check:docs-all"]);

  if (!QUICK) {
    const slow = [
      {
        id: "unit",
        label: "Unit tests (full suite, CI concurrency — ~30-50min, up to ~80min under load)",
        args: ["run", "test:unit:ci"],
        timeout: 80 * 60 * 1000,
      },
      {
        id: "vitest",
        label: "Vitest (MCP / autoCombo / cache — ~3-8min)",
        args: ["run", "test:vitest"],
        timeout: 15 * 60 * 1000,
      },
      {
        id: "integration",
        label: "Integration tests (~20-25min)",
        args: ["run", "test:integration"],
        timeout: 40 * 60 * 1000,
      },
    ];
    if (WITH_BUILD) {
      slow.push({
        id: "pack-artifact",
        label: "Package artifact (npm pack policy)",
        args: ["run", "check:pack-artifact"],
        timeout: 20 * 60 * 1000,
      });
    }
    slow.forEach((g) => announce(`${g.label} [parallel]`));
    const slowResults = await Promise.all(
      slow.map((g) => runAsync(npmCmd, g.args, { timeout: g.timeout }))
    );
    slow.forEach((g, i) => {
      const { code, out } = slowResults[i];
      saveGateLog(g.id, out);
      record({
        id: g.id,
        label: g.label,
        kind: "hard",
        ok: code === 0,
        detail: code === 0 ? "pass" : firstFailureLine(out),
      });
    });

    if (WITH_BUILD) {
      const packArtifactIndex = slow.findIndex((g) => g.id === "pack-artifact");
      const packArtifactResult = slowResults[packArtifactIndex];
      const bootLabel = "Tarball boot-smoke (installed CLI serves /health)";

      if (!packArtifactResult || packArtifactResult.code !== 0) {
        const out = "skipped because package-artifact did not produce a valid dist/ build";
        saveGateLog("pack-boot", out);
        record({
          id: "pack-boot",
          label: bootLabel,
          kind: "hard",
          ok: false,
          detail: out,
        });
      } else {
        announce(bootLabel);
        const { code, out } = await runAsync(npmCmd, ["run", "check:pack-boot"], {
          timeout: 15 * 60 * 1000,
        });
        saveGateLog("pack-boot", out);
        record({
          id: "pack-boot",
          label: bootLabel,
          kind: "hard",
          ok: code === 0,
          detail: code === 0 ? "pass" : firstFailureLine(out),
        });
      }
    }
  } else if (WITH_BUILD) {
    const { code, out } = await runAsync(npmCmd, ["run", "check:pack-artifact"], {
      timeout: 20 * 60 * 1000,
    });
    saveGateLog("pack-artifact", out);
    record({
      id: "pack-artifact",
      label: "Package artifact (npm pack policy)",
      kind: "hard",
      ok: code === 0,
      detail: code === 0 ? "pass" : firstFailureLine(out),
    });
  }

  if (FULL_CI) {
    let gates = [];
    try {
      const ciText = readFileSync(join(ROOT, ".github/workflows/ci.yml"), "utf8");
      gates = extractCiGates(ciText);
    } catch (err) {
      record({
        id: "full-ci-extract",
        label: "full-ci: parse .github/workflows/ci.yml",
        kind: "hard",
        ok: false,
        detail: `could not read/parse ci.yml: ${err?.message || err}`,
      });
    }
    const already = new Set(results.map((r) => r.id));
    process.stderr.write(`\n──── full-ci gates from ci.yml (${gates.length}) ────\n`);
    for (const g of gates) {
      if (already.has(g.id)) continue;
      const { code, out } = run(npmCmd, g.args, {
        env: g.env,
        timeout: fullCiTimeoutFor(g.id),
      });
      saveGateLog(`fullci-${g.id.replace(/[^a-z0-9]+/gi, "-")}`, out);
      record({
        id: g.id,
        label: `ci.yml:${g.job} → npm ${g.args.join(" ")}`,
        kind: fullCiKindFor(g.id, results),
        ok: code === 0,
        detail: code === 0 ? "pass" : firstFailureLine(out),
      });
    }
  }

  const { releaseGreen, hardFailures, drift } = computeVerdict(results);

  process.stderr.write("\n──────── verdict ────────\n");
  process.stderr.write(`HARD failures (block — real defects): ${hardFailures.length}\n`);
  hardFailures.forEach((r) => process.stderr.write(`  ❌ ${r.label}: ${r.detail}\n`));
  process.stderr.write(`Ratchet drift (non-blocking — rebaseline at release): ${drift.length}\n`);
  drift.forEach((r) => process.stderr.write(`  🟡 ${r.label}: ${r.detail}\n`));
  process.stderr.write(
    releaseGreen
      ? "\n✅ RELEASE-GREEN (no hard failures). Any drift above is rebaselined at release, not a contributor concern.\n"
      : "\n❌ NOT release-green — hard failures must be fixed (in the originating PR branch, via co-authorship).\n"
  );

  if (JSON_OUT) {
    process.stdout.write(
      JSON.stringify(
        {
          releaseGreen,
          hardFailures: hardFailures.map((r) => ({ id: r.id, label: r.label, detail: r.detail })),
          drift: drift.map((r) => ({ id: r.id, label: r.label, detail: r.detail })),
          checks: results.map((r) => ({ id: r.id, kind: r.kind, ok: r.ok, detail: r.detail })),
        },
        null,
        2
      ) + "\n"
    );
  }

  process.exit(releaseGreen ? 0 : 1);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main();
}
