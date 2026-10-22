import test from "node:test";
import assert from "node:assert/strict";
import {
  defaultOmniRouteEnrichmentFetcher,
  buildCanonicalToAliasMap,
  lookupEnrichment,
  reconcileHistoricalEnrichment,
  type OmniRouteEnrichmentMap,
} from "../../@omniroute/opencode-plugin-v2/src/shared/enrich.ts";

const NODE = "openai-compatible-chat-synthetic-17348";
type Model = { id: string };

async function withMockedCatalog(
  catalog: Record<string, unknown>,
  prices: Record<string, unknown>,
  check: (overlay: OmniRouteEnrichmentMap) => Promise<void> | void
): Promise<void> {
  const previous = globalThis.fetch;
  globalThis.fetch = (async (input: unknown) => {
    const url = String(input);
    const value = url.endsWith("/api/pricing/models")
      ? catalog
      : url.endsWith("/api/pricing")
        ? prices
        : { perModel: [] };
    return { ok: true, status: 200, json: async () => value };
  }) as typeof fetch;
  try {
    await check(await defaultOmniRouteEnrichmentFetcher("https://synthetic.invalid", "fake"));
  } finally {
    globalThis.fetch = previous;
  }
}

const history = [{ prefix: "ag", modelIds: ["foo", "org/nested"] }];
const current = {
  [NODE]: {
    id: NODE,
    alias: NODE,
    name: "Synthetic provider",
    displayPrefix: "ih",
    historicalPrefixes: history,
    models: [{ id: "foo" }, { id: "org/nested" }],
  },
};

test("#17348: recorded old prefix and current served ID restore matching model price", async () => {
  await withMockedCatalog(current, {
    [NODE]: { "ag/foo": { input: 3, output: 6 }, "ag/org/nested": { input: 7 } },
  }, (original) => {
    assert.equal(original.get("ih/foo")?.pricing, undefined, "legacy pricing is deferred");
    const applied = reconcileHistoricalEnrichment(original, [
      { id: "ih/foo" }, { id: "ih/org/nested" },
    ] satisfies Model[]);
    assert.deepEqual(applied.get("ih/foo")?.pricing, { input: 3, output: 6 });
    assert.deepEqual(applied.get("ih/org/nested")?.pricing, { input: 7 });
    assert.equal(applied.get("ih/foo")?.providerCanonical, NODE);
    assert.equal(applied.get("ih/foo")?.providerAlias, "ih");
    assert.equal(applied.get("ih/unknown")?.pricing, undefined);
    assert.equal(applied.get("ih/unknown")?.freeType, undefined);
    assert.deepEqual(
      lookupEnrichment("ih/foo", applied, buildCanonicalToAliasMap(applied), "ih")?.pricing,
      { input: 3, output: 6 }
    );
  });
});

test("#17348: legitimate slash-bearing upstream ID defeats speculative migration", async () => {
  await withMockedCatalog(current, { [NODE]: { "ag/foo": { input: 8 } } }, (overlay) => {
    const applied = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "ih/ag/foo" },
    ]);
    assert.equal(applied.get("ih/foo")?.pricing, undefined);
    assert.equal(applied.get("ih/ag/foo")?.pricing?.input, 8);
  });
});

test("#17348: never map a historical priced model that was absent from the old raw catalog", async () => {
  await withMockedCatalog(current, { [NODE]: { "ag/deleted": { input: 1 } } }, (overlay) => {
    const applied = reconcileHistoricalEnrichment(overlay, [{ id: "ih/deleted" }]);
    assert.equal(applied.get("ih/deleted")?.pricing, undefined);
    assert.equal(applied.get("ih/deleted")?.freeType, undefined);
  });
});

test("#17348: missing served model, cache alias rollover and empty response are fail-closed", async () => {
  await withMockedCatalog(current, { [NODE]: { "ag/foo": { input: 1 } } }, (overlay) => {
    const absent = reconcileHistoricalEnrichment(overlay, []);
    assert.equal(absent.get("ih/foo"), undefined, "unserved candidate not in active overlay");
    const stale = new Map(overlay);
    stale.set("ag/foo", {
      providerAlias: "ag",
      providerCanonical: NODE,
      pricing: { input: 99 },
    });
    const rotated = reconcileHistoricalEnrichment(stale, [{ id: "ih/foo" }]);
    assert.equal(rotated.has("ag/foo"), false, "disk-cached old public prefix is invalidated");
    assert.equal(rotated.get("ih/foo")?.pricing?.input, 1);
    assert.equal(overlay.get("ih/foo")?.pricing, undefined, "source snapshot is immutable");
  });
});

test("#17348: current prices beat historical ones and ambiguous histories cannot migrate", async () => {
  await withMockedCatalog(current, {
    [NODE]: {
      "ag/foo": { input: 1 },
      foo: { input: 7 },
    },
  }, (overlay) => {
    const currentWins = reconcileHistoricalEnrichment(overlay, [{ id: "ih/foo" }]);
    assert.equal(currentWins.get("ih/foo")?.pricing?.input, 7);
  });
  const duplicated = {
    [NODE]: {
      ...current[NODE],
      historicalPrefixes: [
        ...history,
        { prefix: "other", modelIds: ["foo"] },
      ],
    },
  };
  await withMockedCatalog(duplicated, {
    [NODE]: {
      "ag/foo": { input: 1 },
      "other/foo": { input: 9 },
    },
  }, (overlay) => {
    const ambiguous = reconcileHistoricalEnrichment(overlay, [{ id: "ih/foo" }]);
    assert.equal(ambiguous.get("ih/foo")?.pricing, undefined);
  });
});

test("#17348: unique historical pricing namespace and explicit pricingKey preserve owner", async () => {
  const catalog = {
    [NODE]: {
      ...current[NODE],
      pricingKey: "old-pricing-namespace",
    },
  };
  await withMockedCatalog(catalog, {
    ag: { foo: { input: 2 } },
    "old-pricing-namespace": { "org/nested": { input: 4 } },
  }, (overlay) => {
    const applied = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "ih/org/nested" },
    ]);
    assert.equal(applied.get("ih/foo")?.pricing?.input, 2);
    assert.equal(applied.get("ih/org/nested")?.pricing?.input, 4);
    assert.equal(applied.get("ih/org/nested")?.providerCanonical, NODE);
  });
});

test("#17348: reused old prefix cannot steal another live provider's pricing", async () => {
  await withMockedCatalog({
    ...current,
    "openai-compatible-chat-new-owner": {
      id: "openai-compatible-chat-new-owner",
      displayPrefix: "ag",
      models: [{ id: "foo" }],
    },
  }, {
    ag: { foo: { input: 90 } },
    [NODE]: { "ag/foo": { input: 3 } },
  }, (overlay) => {
    const applied = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "ag/foo" },
    ]);
    assert.equal(applied.get("ag/foo")?.pricing?.input, 90);
    assert.equal(applied.get("ih/foo")?.pricing?.input, undefined,
      "reused live old alias invalidates historical mapping when it is also served");
  });
});

test("#17348: old namespace must never bypass ambiguous served-ID reconciliation", async () => {
  await withMockedCatalog(current, { ag: { foo: { input: 42 } } }, (overlay) => {
    const bothServed = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "ih/ag/foo" },
    ]);
    assert.equal(bothServed.get("ih/foo")?.pricing, undefined);
    assert.equal(bothServed.get("ih/ag/foo")?.pricing, undefined);
    assert.equal(overlay.get("ih/foo")?.pricing, undefined,
      "legacy namespace pricing must only exist as a pending candidate");
  });
});

test("#17348: direct current prices dominate legacy pricing in either enumeration order", async () => {
  for (const prices of [
    { ag: { foo: { input: 1 } }, [NODE]: { foo: { input: 9 } } },
    { [NODE]: { foo: { input: 9 } }, ag: { foo: { input: 1 } } },
  ]) {
    await withMockedCatalog(current, prices, (overlay) => {
      assert.equal(
        reconcileHistoricalEnrichment(overlay, [{ id: "ih/foo" }]).get("ih/foo")?.pricing?.input,
        9
      );
    });
  }
});

test("#17348: compatible upstream foo and ih/foo remain two different identities", async () => {
  await withMockedCatalog({
    [NODE]: {
      id: NODE,
      displayPrefix: "ih",
      models: [
        { id: "foo", name: "Short", upstreamId: true },
        { id: "ih/foo", name: "Literal upstream namespace", upstreamId: true },
      ],
    },
  }, {
    [NODE]: { foo: { input: 2 }, "ih/foo": { input: 12 } },
  }, (overlay) => {
    const served = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "ih/ih/foo" },
    ]);
    assert.equal(served.get("ih/foo")?.name, "Short");
    assert.equal(served.get("ih/foo")?.pricing?.input, 2);
    assert.equal(served.get("ih/ih/foo")?.name, "Literal upstream namespace");
    assert.equal(served.get("ih/ih/foo")?.pricing?.input, 12);
    assert.notEqual(served.get("ih/ih/foo"), served.get("ih/foo"));
  });
});

test("#17348: old prefix of A colliding with explicit pricingKey of B cannot assign prices", async () => {
  const nodeB = "openai-compatible-chat-explicit-pricing-b";
  await withMockedCatalog({
    [NODE]: current[NODE],
    [nodeB]: {
      id: nodeB,
      displayPrefix: "si",
      pricingKey: "ag",
      models: [{ id: "foo", upstreamId: true }],
    },
  }, { ag: { foo: { input: 77 } } }, (overlay) => {
    const served = reconcileHistoricalEnrichment(overlay, [
      { id: "ih/foo" }, { id: "si/foo" },
    ]);
    assert.equal(served.get("ih/foo")?.pricing, undefined);
    assert.equal(served.get("si/foo")?.pricing, undefined);
    assert.equal(served.get("foo")?.pricing, undefined);
  });
});
