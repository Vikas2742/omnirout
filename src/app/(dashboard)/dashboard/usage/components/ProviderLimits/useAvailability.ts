"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchWithTimeout } from "@/shared/utils/fetchTimeout";
import {
  buildHealthAccount,
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
          return [
            connection.id,
            buildHealthAccount(connection, quotaData[connection.id], {}, now, evidence),
          ];
        })
      ),
    [connections, quotaData, errors, policy, snapshot, now, summaryFailed]
  );
  return { accounts, refreshAvailability, summaryFailed };
}
