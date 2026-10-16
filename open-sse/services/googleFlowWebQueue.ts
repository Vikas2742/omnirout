import { GoogleFlowWebError } from "./googleFlowWebResponse.ts";

let running = false;
const waiters: Array<() => void> = [];
/** Process-global FIFO; not a distributed browser lock. */
export async function acquireGoogleFlowSlot(
  timeoutMs: number,
  signal?: AbortSignal
): Promise<() => void> {
  const cancelled = () =>
    new GoogleFlowWebError("aborted", "Image generation cancelled before submission.", 499);
  if (signal?.aborted) throw cancelled();
  if (running) {
    await new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timer);
        signal?.removeEventListener("abort", abort);
      };
      const remove = () => {
        const index = waiters.indexOf(start);
        if (index >= 0) waiters.splice(index, 1);
        cleanup();
      };
      const start = () => {
        cleanup();
        resolve();
      };
      const abort = () => {
        remove();
        reject(cancelled());
      };
      const timer = setTimeout(() => {
        remove();
        reject(
          new GoogleFlowWebError(
            "busy",
            "Google Flow web provider is busy; queue wait timed out.",
            429
          )
        );
      }, timeoutMs);
      waiters.push(start);
      signal?.addEventListener("abort", abort, { once: true });
    });
  }
  running = true;
  return () => {
    const next = waiters.shift();
    if (next) next();
    else running = false;
  };
}
