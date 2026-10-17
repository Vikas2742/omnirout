import { afterEach, expect, it, vi } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useAvailability } from "@/app/(dashboard)/dashboard/usage/components/ProviderLimits/useAvailability";
const fetchedAt = "2099-01-01T00:00:00Z";
const connection = {
  id: "account@example.test",
  provider: "claude",
  email: "account@example.test",
  isActive: true,
};
const connections = [connection];
const quotaData = {
  [connection.id]: { raw: { fetchedAt }, quotas: [{ name: "weekly", remainingPercentage: 10 }] },
};
const errors = {};
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});
function fixture(cooling = false) {
  vi.useFakeTimers();
  vi.setSystemTime(fetchedAt);
  vi.spyOn(document, "visibilityState", "get").mockReturnValue("visible");
  let fail = false;
  const requests: string[] = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: string, init: RequestInit) => {
      expect(init.method).toBe("GET");
      expect(init.cache).toBe("no-store");
      requests.push(input);
      if (input === "/api/resilience")
        return Response.json({
          quotaPreflight: {
            enabled: false,
            defaultThresholdPercent: 2,
            providerWindowDefaults: {},
          },
        });
      expect(input).toBe("/api/resilience/cooldowns");
      if (fail) return Response.json({ error: "synthetic failure" }, { status: 503 });
      return Response.json({
        generatedAt: new Date().toISOString(),
        connections: [
          {
            id: connection.id,
            status: cooling ? "cooling_down" : "healthy",
            cooldownRemainingMs: cooling
              ? Math.max(0, Date.parse(fetchedAt) + 2000 - Date.now())
              : 0,
            lockouts: [],
          },
        ],
      });
    })
  );
  return {
    requests,
    fail: () => {
      fail = true;
    },
  };
}
const advance = async (ms: number) =>
  act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
it("ticks locally and polls only cooldown GET every 30 seconds; policy only on explicit refresh", async () => {
  const f = fixture(true);
  const { result } = renderHook(() => useAvailability(connections, quotaData, errors));
  await advance(0);
  expect(result.current.accounts[connection.id].status).toBe("critical");
  expect(result.current.accounts[connection.id].recoverAt).toBe("2099-01-01T00:00:02.000Z");
  await advance(3000);
  expect(result.current.accounts[connection.id].status).toBe("ok");
  expect(f.requests).toEqual(["/api/resilience/cooldowns", "/api/resilience"]);
  await advance(27_000);
  expect(f.requests).toEqual([
    "/api/resilience/cooldowns",
    "/api/resilience",
    "/api/resilience/cooldowns",
  ]);
  await advance(300_000);
  expect(result.current.accounts[connection.id].status).toBe("ok");
  expect(f.requests.filter((x) => x === "/api/resilience")).toHaveLength(1);
});
it("failed summary immediately falls back without losing green connection evidence", async () => {
  const f = fixture();
  const { result } = renderHook(() => useAvailability(connections, quotaData, errors));
  await advance(0);
  f.fail();
  await act(async () => {
    await result.current.refreshAvailability();
  });
  expect(result.current.summaryFailed).toBe(true);
  await advance(91_000);
  expect(result.current.summaryFailed).toBe(true);
  expect(result.current.accounts[connection.id].status).toBe("ok");
});
it("does not poll hidden pages; returning visible immediately reads cooldowns only", async () => {
  const f = fixture();
  renderHook(() => useAvailability(connections, quotaData, errors));
  await advance(0);
  vi.spyOn(document, "visibilityState", "get").mockReturnValue("hidden");
  await advance(60_000);
  expect(f.requests).toHaveLength(2);
  vi.spyOn(document, "visibilityState", "get").mockReturnValue("visible");
  await act(async () => {
    document.dispatchEvent(new Event("visibilitychange"));
  });
  expect(f.requests).toEqual([
    "/api/resilience/cooldowns",
    "/api/resilience",
    "/api/resilience/cooldowns",
  ]);
});
