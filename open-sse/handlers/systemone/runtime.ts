import { recordCost } from "@/domain/costRules";
import { saveCallLog } from "@/lib/usageDb";
import { calculateCostDetailed } from "@/lib/usage/costCalculator";
import { resolveProxyForConnection } from "@/lib/db/settings";
import { markAccountUnavailable } from "@/sse/services/auth";
import { lockExactModel } from "../../services/accountFallback.ts";
import type { SystemOneTarget } from "../../config/systemoneRegistry.ts";
import type { SystemOneCredentials, SystemOneInput } from "./types.ts";

export interface SystemOneProxyOptions {
  target: SystemOneTarget;
  body: SystemOneInput;
  credentials: SystemOneCredentials;
  requestedModel?: string;
  signal?: AbortSignal;
  timeoutMs?: number;
  forwardedHeaders?: Record<string, string>;
  apiKeyId?: string | null;
  apiKeyName?: string | null;
  fetchImpl?: typeof fetch;
  saveCallLogImpl?: (row: Record<string, unknown>) => Promise<unknown>;
  recordCostImpl?: typeof recordCost;
  markAccountUnavailableImpl?: typeof markAccountUnavailable;
  lockModelImpl?: typeof lockExactModel;
  resolveProxyImpl?: (id: string) => Promise<{ proxy: unknown }>;
  runProxyImpl?: (proxy: unknown, operation: () => Promise<Response>) => Promise<Response>;
  calculateCostImpl?: (
    provider: string,
    model: string,
    tokens: { input_tokens: number; output_tokens: number }
  ) => Promise<{ priced: boolean; costUsd: number }>;
}

export async function systemOneCost(
  options: SystemOneProxyOptions,
  inputTokens: number
): Promise<number> {
  const { target } = options;
  // Charge only input tokens, even if a pricing override has a nonzero output row.
  const detailed = await (options.calculateCostImpl ?? calculateCostDetailed)(
    target.provider,
    target.id,
    { input_tokens: inputTokens, output_tokens: 0 }
  ).catch(() => ({ priced: false, costUsd: 0 }));
  return detailed.priced ? detailed.costUsd : (inputTokens * target.inputUsdPerMillion) / 1_000_000;
}

export async function recordSystemOneHealth(
  options: SystemOneProxyOptions,
  status: number,
  headers: Headers
): Promise<void> {
  const { target, credentials } = options;
  if (!credentials.connectionId) return;
  if (target.provider === "cloudflare-ai") {
    if (![401, 402, 403, 429].includes(status)) return;
    const retry = headers.get("retry-after");
    const seconds = retry && /^\d{1,10}$/.test(retry) ? Number(retry) : 30;
    (options.lockModelImpl ?? lockExactModel)(
      target.provider,
      credentials.connectionId,
      target.id,
      "systemone_upstream",
      Math.max(1000, Math.min(seconds * 1000, 86_400_000))
    );
    return;
  }
  if ([401, 403, 429].includes(status)) {
    await (options.markAccountUnavailableImpl ?? markAccountUnavailable)(
      credentials.connectionId,
      status,
      `System One upstream HTTP ${status}`,
      target.provider,
      target.id,
      null,
      { headers }
    );
  }
}

export function requestSignal(caller: AbortSignal | undefined, timeoutMs: number) {
  const controller = new AbortController();
  let timedOut = false;
  const abort = () => controller.abort(caller?.reason);
  caller?.addEventListener("abort", abort, { once: true });
  if (caller?.aborted) abort();
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  return {
    signal: controller.signal,
    timedOut: () => timedOut,
    cleanup: () => {
      clearTimeout(timer);
      caller?.removeEventListener("abort", abort);
    },
  };
}

export const systemOneDefaults = { recordCost, saveCallLog, resolveProxyForConnection };
