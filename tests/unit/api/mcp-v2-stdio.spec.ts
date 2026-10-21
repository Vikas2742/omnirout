import { describe, it, expect } from "vitest";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

// The actual module graph runs in a child, with the same stdout guard as the
// existing CLI. Listing tools performs no provider or dashboard calls.
describe("native sidecar stdio", () => {
  for (const era of ["modern", "legacy"] as const) {
    it(`serves ${era} clients and closes its process transport`, async () => {
      const env = Object.fromEntries(
        Object.entries(process.env).filter(
          (entry): entry is [string, string] => typeof entry[1] === "string"
        )
      );
      const transport = new StdioClientTransport({
        command: process.execPath,
        args: [
          "--import",
          "./bin/mcpStdioConsoleGuard.mjs",
          "--import",
          "tsx",
          "-e",
          'process.stderr.write("BOOT:before-import\\n"); import("./open-sse/mcp-server/v2/server.ts").then(async m => { await m.startMcpStdioV2(); process.stderr.write("BOOT:started\\n"); })',
        ],
        cwd: process.cwd(),
        env: { ...env, OMNIROUTE_MCP_V2: "true", DISABLE_SQLITE_AUTO_BACKUP: "true" },
        stderr: "pipe",
      });
      let diagnostics = "";
      const client = new Client(
        { name: "stdio-compat-probe", version: "1" },
        {
          versionNegotiation: {
            mode: era === "modern" ? { pin: "2026-07-28" } : "legacy",
            probe: { timeoutMs: 30000 },
          },
        }
      );
      try {
        const connection = client.connect(transport);
        transport.stderr?.on("data", (chunk) => {
          diagnostics = (diagnostics + String(chunk)).slice(-8000);
        });
        await connection;
        expect(client.getProtocolEra()).toBe(era);
        expect((await client.listTools()).tools).toHaveLength(8);
      } catch (error) {
        throw new Error(`${String(error)}; child stderr: ${diagnostics}`);
      } finally {
        await client.close();
      }
    }, 60000);
  }
});
