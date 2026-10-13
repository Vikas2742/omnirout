import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { __registerLogExportDestinationTypeForTest } from "../../../src/lib/logExport/registry.ts";
import type { LogExportDestinationType } from "../../../src/lib/logExport/types.ts";

export const testDestination: LogExportDestinationType = {
  id: "child-test-sink",
  labelFallback: "Child test sink",
  descriptionFallback: "Local fixture only",
  fields: [],
  secretFields: ["secret"],
  configSchema: z.object({
    secret: z.string(),
    output: z.string(),
    mode: z.string().default("records"),
  }),
  createClient(config) {
    let batches = 0;
    const output = String(config.output);
    return {
      async test() {
        return { ok: true, detail: "fixture" };
      },
      async prepare() {
        fs.writeFileSync(
          `${output}.process`,
          JSON.stringify({
            pid: process.pid,
            argv: process.argv,
            execArgv: process.execArgv,
            env: process.env,
          })
        );
      },
      async send(records) {
        batches++;
        if (config.mode === "crash" && batches === 3 && process.send) process.exit(23);
        if (config.mode === "hang" && process.send) {
          process.on("SIGTERM", () => {});
          await new Promise(() => {
            setInterval(() => {}, 1000);
          });
        }
        if (config.mode === "fail" && batches === 2) throw new Error(`rejected ${config.secret}`);
        fs.appendFileSync(`${output}.times`, `${Date.now()}\n`);
        // The performance sink deliberately does not copy bodies back to the parent.
        if (config.mode !== "discard") fs.appendFileSync(output, `${JSON.stringify(records)}\n`);
      },
    };
  },
};

export function register(registerDestination = __registerLogExportDestinationTypeForTest) {
  registerDestination(testDestination);
}

// A child-visible fetch fixture for the existing BigQuery runner tests. No network.
export function installBigQueryFetchFixture(config: Record<string, unknown>) {
  const output = path.join(String(process.env.DATA_DIR), "bigquery-batches.jsonl");
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    const href = String(url);
    if (href.includes("oauth2.googleapis.com/token")) {
      return Response.json({ access_token: "stub-token", expires_in: 3600 });
    }
    if (href.endsWith("/insertAll")) {
      if (config.fixtureFailInsert)
        return Response.json({ error: { message: "backend error" } }, { status: 500 });
      if (config.fixtureInsertDelayMs)
        await new Promise((resolve) => setTimeout(resolve, Number(config.fixtureInsertDelayMs)));
      fs.appendFileSync(output, `${String(init?.body)}\n`);
    }
    return Response.json({});
  }) as typeof fetch;
}
