"use client";

import { useCallback, type Dispatch, type SetStateAction } from "react";

export function useSaveQuotaWindowThresholds(
  confirm: (id: string, patch: { quotaWindowThresholds: Record<string, number> | null }) => void
) {
  return useCallback(
    async (id: string, patch: Record<string, number | null> | null) => {
      const response = await fetch(`/api/providers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quotaWindowThresholds: patch }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      confirm(id, { quotaWindowThresholds: data?.connection?.quotaWindowThresholds ?? null });
    },
    [confirm]
  );
}

/** A confirmed local write outranks older polled runtime evidence. */
export function useConfirmedAvailabilityChange<T extends { id: string }>(
  setConnections: Dispatch<SetStateAction<T[]>>,
  refreshAvailability: () => Promise<void>
) {
  return useCallback(
    (id: string, patch: Partial<T> = {}) => {
      const runtimeObservedAt = new Date().toISOString();
      setConnections((previous) =>
        previous.map((connection) =>
          connection.id === id ? { ...connection, ...patch, runtimeObservedAt } : connection
        )
      );
      void refreshAvailability();
    },
    [setConnections, refreshAvailability]
  );
}
