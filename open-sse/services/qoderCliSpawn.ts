import { spawn } from "child_process";
import { getLookupEnv } from "@/shared/services/cliRuntime";
import { acquireQoderCliSlot, QoderCliQueueTimeoutError } from "./qoderCliConcurrency";
import { resolveQoderCliInvocation } from "./qoderCliResolve";

const DEFAULT_TIMEOUT_MS = 45_000;

export type QoderCliRunResult = {
  ok: boolean;
  code: number | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
  error: string | null;
  /** No qodercli slot freed up within the queue timeout; nothing was spawned. */
  busy?: boolean;
};

export type SpawnQoderCliOptions = {
  args: string[];
  token?: string | null;
  stdin?: string | null;
  signal?: AbortSignal | null;
  timeoutMs?: number;
  command?: string | null;
  cwd?: string | null;
};

/**
 * SIGKILL the whole qodercli process tree. On POSIX the child is spawned as the
 * leader of its own process group, so a negative pid reaches every descendant;
 * killing only the direct child would orphan anything it spawned.
 */
export function killQoderCliProcessTree(child: ReturnType<typeof spawn>): void {
  const pid = child.pid;
  if (!pid) return;
  if (process.platform === "win32") {
    try {
      spawn("taskkill", ["/pid", String(pid), "/T", "/F"], { windowsHide: true, stdio: "ignore" });
    } catch {
      /* fall through to the direct kill */
    }
  } else {
    try {
      process.kill(-pid, "SIGKILL");
      return;
    } catch {
      /* group already gone, or not a group leader — fall back to the direct kill */
    }
  }
  try {
    child.kill("SIGKILL");
  } catch {
    /* already gone */
  }
}

/**
 * Low-level qodercli spawn. The PAT (if any) is passed via the
 * `QODER_PERSONAL_ACCESS_TOKEN` env var — the only env var the official CLI
 * honors for headless PAT auth — and the prompt is piped through stdin so no
 * untrusted value is ever interpolated into a shell command (Hard Rule #13).
 * Every spawn holds a slot of the process-wide qodercli gate for its lifetime.
 */
export async function spawnQoderCli(options: SpawnQoderCliOptions): Promise<QoderCliRunResult> {
  return runWithQoderCliSlot(options.signal, () => spawnQoderCliUnlimited(options));
}

/**
 * Run qodercli work while holding a slot of the process-wide gate. Queue
 * timeouts and aborts while queued come back as failed results, nothing spawned.
 */
export async function runWithQoderCliSlot(
  signal: AbortSignal | null | undefined,
  fn: () => Promise<QoderCliRunResult>
): Promise<QoderCliRunResult> {
  let release: () => void;
  try {
    release = await acquireQoderCliSlot({ signal });
  } catch (err) {
    return {
      ok: false,
      code: null,
      stdout: "",
      stderr: "",
      timedOut: false,
      error: (err as Error).message,
      busy: err instanceof QoderCliQueueTimeoutError,
    };
  }
  try {
    return await fn();
  } finally {
    release();
  }
}

async function spawnQoderCliUnlimited(options: SpawnQoderCliOptions): Promise<QoderCliRunResult> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  // #6263: resolve the real qodercli command (absolute .cmd/.exe on Windows) and
  // whether it needs a shell, then spawn with the cliRuntime-enriched env (PATH +
  // PATHEXT + APPDATA) so the npm `.cmd` wrapper under %APPDATA%\npm is found.
  const { command, useShell } = await resolveQoderCliInvocation(options.command);
  const env: NodeJS.ProcessEnv = { ...getLookupEnv() };
  const token = String(options.token || "").trim();
  if (token) env.QODER_PERSONAL_ACCESS_TOKEN = token;

  return new Promise<QoderCliRunResult>((resolve) => {
    let stdout = "";
    let stderr = "";
    let settled = false;
    let timedOut = false;

    let child: ReturnType<typeof spawn>;
    try {
      child = spawn(command, options.args, {
        env,
        cwd: options.cwd || undefined,
        stdio: ["pipe", "pipe", "pipe"],
        windowsHide: true,
        detached: process.platform !== "win32",
        ...(useShell ? { shell: true } : {}),
      });
    } catch (err) {
      resolve({
        ok: false,
        code: null,
        stdout: "",
        stderr: "",
        timedOut: false,
        error: (err as Error).message,
      });
      return;
    }

    const timer = setTimeout(() => {
      timedOut = true;
      killQoderCliProcessTree(child);
    }, timeoutMs);
    timer.unref?.();

    const onAbort = () => killQoderCliProcessTree(child);
    if (options.signal) {
      if (options.signal.aborted) onAbort();
      else options.signal.addEventListener("abort", onAbort, { once: true });
    }

    const finish = (result: QoderCliRunResult) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      options.signal?.removeEventListener?.("abort", onAbort);
      // qodercli itself has exited; reap anything it left behind in its group.
      if (process.platform !== "win32" && child.pid) {
        try {
          process.kill(-child.pid, "SIGKILL");
        } catch {
          /* group already empty */
        }
      }
      resolve(result);
    };

    child.on("error", (err: Error) => {
      finish({ ok: false, code: null, stdout, stderr, timedOut, error: err.message });
    });
    // If qodercli exits or closes stdin before we finish writing the prompt, the
    // write/end below can emit an ASYNC EPIPE/EINVAL on the stream (not caught by
    // the surrounding try/catch). Without a listener that becomes an unhandled
    // 'error' event that crashes the whole process — attach no-op handlers.
    child.stdin?.on("error", () => {});
    child.stdout?.on("error", () => {});
    child.stderr?.on("error", () => {});
    // Decode with a stateful UTF-8 reader so a multi-byte character (e.g. Chinese,
    // common in Qoder output) split across two chunks is not corrupted — Buffer
    // per-chunk toString() would mangle the boundary bytes.
    child.stdout?.setEncoding("utf8");
    child.stderr?.setEncoding("utf8");
    child.stdout?.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr?.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.on("close", (code: number | null) => {
      finish({
        ok: code === 0 && !timedOut,
        code,
        stdout,
        stderr,
        timedOut,
        error: timedOut ? "qodercli timed out" : null,
      });
    });

    try {
      if (options.stdin != null) child.stdin?.write(options.stdin);
      child.stdin?.end();
    } catch {
      /* stdin closed early — the child will surface its own error */
    }
  });
}
