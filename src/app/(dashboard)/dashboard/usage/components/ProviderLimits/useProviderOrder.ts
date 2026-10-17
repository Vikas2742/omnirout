"use client";
import { useEffect, useState } from "react";
import { PROVIDER_ORDER } from "./constants";
import {
  applyProviderOrder,
  mergeVisibleProviderOrder,
  readProviderOrder,
  writeProviderOrder,
} from "./providerOrder";
const ORDER_EVENT = "omniroute:limits:providerOrderChanged";
export function useProviderOrder(ids: string[]) {
  const [saved, setSaved] = useState<string[]>(readProviderOrder);
  useEffect(() => {
    const sync = () => setSaved(readProviderOrder());
    window.addEventListener("storage", sync);
    window.addEventListener(ORDER_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(ORDER_EVENT, sync);
    };
  }, []);
  const order = applyProviderOrder(ids, saved, PROVIDER_ORDER);
  const update = (next: string[]) => {
    writeProviderOrder(next);
    window.dispatchEvent(new Event(ORDER_EVENT));
    // A disabled storage backend must not undo this session's drag.
    setSaved(next);
  };
  return {
    order,
    custom: saved.length > 0,
    reset: () => update([]),
    reorder: (visible: string[]) =>
      update(mergeVisibleProviderOrder(saved, ids, visible, PROVIDER_ORDER)),
  };
}
