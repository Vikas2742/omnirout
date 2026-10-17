# Availability overview and router parity

The overview projects existing cached usage and runtime evidence. It does not fetch
provider usage, change routing policy, or clear runtime state.

## Quota decisions

`quotaEligibility.ts` honors the same `_freetrial` alternative-budget grouping as
`quotaPreflight.ts:groupQuotaWindowsByBase`. A group is usable if any member is
above its own cutoff. The displayed effective member is the usable member with
the most remaining quota; unrelated resources remain simultaneous constraints.

The imported Claude extra-usage, Codex filtering, and Codex paid-credit helpers
are client-safe leaves. Claude extra usage and Codex filtering have no imports;
paid credits imports only the filtering leaf and the pure Codex scope config.
They introduce no server, DB, credential, or network dependency into the client.
Their local-quota exceptions never override cooldown, terminal, or paused states.

Bypassed meters retain their actual percentage in the tooltip. They do not drive
availability or water level. No remaining local constraint means 100% (unrestricted
by local quota, NOT a claim of refilled plan quota). Otherwise the tightest
remaining constraint drives water level, including Spark when paid credits bypass
only the non-Spark plan. An exhausted Spark meter can therefore coexist with a
green, partial account and a 0% local water level. Bypass reasons are translated
in all 67 catalogs with no ICU arguments.

OpenRouter's positive-denominator credits meter is a real account constraint,
not display-only credit metadata. Its free windows remain scoped to `:free`.

## Contract and intentional exclusions

`tests/unit/quota-overview-router-parity.test.ts` compares real upstream usage
builders/converters and `evaluateQuotaCutoff` with
`parseQuotaData -> buildHealthAccount -> displayAccount`. Request scope is applied
with existing router selectors. OpenRouter uses its actual cached request-scoped
fetcher over synthetic responses. No endpoint is contacted. Fixtures use synthetic
identities and the test runner's isolated DATA_DIR.

Runtime cooldown and terminal classification are outside quota parity; precedence
is tested separately and existing runtime tests remain unchanged. Missing data,
failed reads, stale/reset-advanced snapshots and runtime clock freshness are not
claims of identical router fail-open behavior; they retain the existing UI policy.

Known server-only difference (#14359): `isQuotaHealthy(connectionId)` reads
`healthyUntil` in `src/domain/quotaCacheState.ts`. Source inspection found no
export of this state in `/api/resilience/cooldowns`, cooldownManager's response,
`/api/providers`, or the existing API routes. A summary status of `healthy` only
means no terminal/cooldown/lockout, not this recent-success override. The contract
therefore omits connectionId; no API or inferred success state was added.

Known frozen-router limitation for code_review: `buildCodexUsageQuotas` exposes
review meters, but `getCodexQuotaWindowFilterForModel` distinguishes only Spark
from non-Spark. Generic conversion/evaluation blocks both normal and review
requests when review is exhausted; the dedicated Codex fetcher omits review and
permits both when plan quota remains. A dedicated contract test pins these actual
results and the existing green/partial overview projection. This is NOT counted
as successful model-pair parity. Implementing the requested review-only refusal
requires a router-side contract absent from the frozen baseline, outside this
change's writable scope. No test-only review selector was invented.

## Provider order

`useProviderOrder` uses one module-level store and `useSyncExternalStore`.
Successful storage operations persist order; inaccessible storage or failed writes
retain the shared session order across Full, overview and later mounts. A failed
write cannot reread old storage over the new order. Storage events synchronize
cross-tab changes. Reset updates every subscriber even without storage.

## Existing-test assertion audit, r10 supplement

Against r9 HEAD c4c3dfb398992cdca8d13db606857e92d9c91b69, this round changes no
existing test file or existing assertion. All new assertions live in new r10 test
files. Thus this round adds no changes to assertions in tests that existed at the
frozen baseline 1591cd55e0c2b4195cb41ea9e1967d3eb8f56d5e; earlier rounds' audit
remains unchanged. No assertions were weakened to accommodate the implementation.
