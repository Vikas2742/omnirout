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

Current code_review routing behavior: `buildCodexUsageQuotas` exposes review
meters, but `getCodexQuotaWindowFilterForModel` distinguishes only Spark from
non-Spark. Generic conversion/evaluation blocks both normal and review requests
when review is exhausted; the dedicated Codex fetcher omits review and permits
both when plan quota remains. A dedicated contract test covers these results and
the green/partial overview projection. This difference is not model-pair parity:
review-only refusal requires a request-specific router contract that the current
selectors do not provide.

## Provider order

`useProviderOrder` uses one module-level store and `useSyncExternalStore`.
Successful storage operations persist order; inaccessible storage or failed writes
retain the shared session order across Full, overview and later mounts. A failed
write cannot reread old storage over the new order. Storage events synchronize
cross-tab changes. Reset updates every subscriber even without storage.
