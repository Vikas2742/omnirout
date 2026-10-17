"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchWithTimeout } from "@/shared/utils/fetchTimeout";
import {
  buildHealthAccount,
  runtimeCooldownUntil,
  type AvailabilityEvidence,
  type HealthConnection,
  type HealthCooldown,
  type HealthData,
} from "./healthOverview";
import type { AvailabilityPolicy } from "./availabilityPolicy";

async function readSummary(path: string) {
  const response = await fetchWithTimeout(path, {
    timeoutMs: 20_000,
    method: "GET",
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
function validCooldown(row: HealthCooldown): boolean {
  return (
    !!row &&
    typeof row.id === "string" &&
    ["terminal", "cooling_down", "model_locked", "unavailable", "healthy"].includes(row.status) &&
    Array.isArray(row.lockouts) &&
    row.lockouts.every(
      (lock) => typeof lock.model === "string" && Number.isFinite(lock.remainingMs)
    )
  );
}
/** Read-only state summaries. The ticking projection never sends model requests or fetches quotas. */
export function useAvailability(
  connections: HealthConnection[],
  quotaData: Record<string, HealthData>,
  errors: Record<string, string | null>
) {
  const [snapshot, setSnapshot] = useState<{
    rows: Record<string, HealthCooldown>;
    observedAt?: string;
    receivedAt?: number;
  }>({ rows: {} });
  const [policy, setPolicy] = useState<AvailabilityPolicy>();
  const [now, setNow] = useState(() => Date.now());
  const pending = useRef(false);
  // Local to this mounted consumer, never persisted or shared across accounts.
  const [cooldownObservations, setCooldownObservations] = useState(
    () => new Map<string, { until: number; observedAt: number }>()
  );
  const refreshCooldowns = useCallback(async () => {
    if (pending.current) return;
    pending.current = true;
    try {
      const data = await readSummary("/api/resilience/cooldowns");
      if (
        !Array.isArray(data.connections) ||
        !data.connections.every(validCooldown) ||
        !Number.isFinite(Date.parse(data.generatedAt))
      )
        throw new Error("Invalid cooldown summary");
      setSnapshot({
        rows: Object.fromEntries(data.connections.map((row: HealthCooldown) => [row.id, row])),
        observedAt: data.generatedAt,
        receivedAt: Date.now(),
      });
    } catch {
      // Preserve the last successful observation until the 90-second fallback horizon.
    } finally {
      pending.current = false;
      setNow(Date.now());
    }
  }, []);
  const refreshAvailability = useCallback(async () => {
    await Promise.all([
      refreshCooldowns(),
      readSummary("/api/resilience")
        .then((data) => {
          const p = data.quotaPreflight;
          if (
            !p ||
            typeof p.enabled !== "boolean" ||
            !Number.isFinite(p.defaultThresholdPercent) ||
            !p.providerWindowDefaults
          )
            throw new Error("Invalid quota policy");
          setPolicy({
            enabled: p.enabled,
            defaultThresholdPercent: p.defaultThresholdPercent,
            providerWindowDefaults: p.providerWindowDefaults,
          });
        })
        .catch(() => setPolicy(undefined)),
    ]);
  }, [refreshCooldowns]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      void refreshAvailability();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [refreshAvailability]);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    const poll = window.setInterval(() => {
      if (document.visibilityState === "visible") void refreshCooldowns();
    }, 30_000);
    const visible = () => {
      setNow(Date.now());
      if (document.visibilityState === "visible") void refreshCooldowns();
    };
    document.addEventListener("visibilitychange", visible);
    return () => {
      window.clearInterval(timer);
      window.clearInterval(poll);
      document.removeEventListener("visibilitychange", visible);
    };
  }, [refreshCooldowns]);
  const summaryFailed =
    snapshot.receivedAt === undefined ||
    now - snapshot.receivedAt > 90_000 ||
    now - Date.parse(snapshot.observedAt || "") > 90_000;
  useEffect(() => {
    const observedAt = Date.now();
    // Capture evidence at effect time, then publish on the next task (like the
    // initial summary read above), without mutating refs during projection.
    const timer = window.setTimeout(() => {
      setNow(observedAt);
      setCooldownObservations((previous) => {
        const next = new Map<string, { until: number; observedAt: number }>();
        for (const connection of connections) {
          const until = runtimeCooldownUntil(connection, {
            cooldown: summaryFailed ? undefined : snapshot.rows[connection.id],
            observedAt: summaryFailed ? undefined : snapshot.observedAt,
          });
          const old = previous.get(connection.id);
          if (old?.until === until) next.set(connection.id, old);
          else if (until > observedAt) next.set(connection.id, { until, observedAt });
        }
        return next.size === previous.size &&
          [...next].every(([id, value]) => previous.get(id) === value)
          ? previous
          : next;
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [connections, snapshot, summaryFailed]);
  const accounts = useMemo(
    () =>
      Object.fromEntries(
        connections.map((connection) => {
          const evidence: AvailabilityEvidence = {
            policy,
            cooldown: summaryFailed ? undefined : snapshot.rows[connection.id],
            observedAt: summaryFailed ? undefined : snapshot.observedAt,
            error: errors[connection.id],
          };
          const observation = cooldownObservations.get(connection.id);
          if (observation?.until === runtimeCooldownUntil(connection, evidence))
            evidence.cooldownObservedAt = observation.observedAt;
          return [
            connection.id,
            buildHealthAccount(connection, quotaData[connection.id], {}, now, evidence),
          ];
        })
      ),
    [connections, quotaData, errors, policy, snapshot, now, summaryFailed, cooldownObservations]
  );
  return { accounts, refreshAvailability, summaryFailed };
}
