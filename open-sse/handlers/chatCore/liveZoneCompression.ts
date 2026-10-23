/**
 * chatCore live-zone prompt compression dispatch (chatCore god-file decomposition, slice 2).
 *
 * Extracted byte-identically from handleChatCore's prompt-compression pipeline (the
 * `compressionConfig.liveZone.enabled` lane): resolve the live-zone session id — the explicit
 * `x-omniroute-session-id` header, else the Claude Code session id, else the derived conversation
 * fingerprint — and run the engines through applyLiveZoneCompression so an unchanged history
 * prefix reuses its cached transform. The live-zone module stays lazily imported, as before.
 */

import { generateSessionId } from "../../services/sessionManager.ts";
import type { CompressionConfig, CompressionResult } from "../../services/compression/types.ts";
import { getHeaderValueCaseInsensitive } from "./headers.ts";
function readClaudeCodeSessionId(
  body: Record<string, unknown>,
  clientHeaders: Record<string, unknown> | Headers | null | undefined
): string | null {
  const headerId = getHeaderValueCaseInsensitive(clientHeaders ?? null, "x-claude-code-session-id");
  if (headerId) return headerId;
  const raw = (body.metadata as Record<string, unknown> | undefined)?.user_id;
  if (typeof raw !== "string" || raw.length === 0) return null;
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return typeof parsed?.session_id === "string" && parsed.session_id.length > 0
      ? parsed.session_id
      : null;
  } catch {
    return null;
  }
}

export async function runLiveZoneCompression({
  compressionInputBody,
  clientHeaders,
  provider,
  getCurrentConnectionId,
  compressionPrincipalId,
  mode,
  effectiveModel,
  compressionConfig,
  runCompression,
}: {
  compressionInputBody: Record<string, unknown>;
  clientHeaders: Record<string, unknown> | Headers | null | undefined;
  provider: string;
  getCurrentConnectionId: () => string | null;
  compressionPrincipalId: string | undefined;
  mode: string;
  effectiveModel: string;
  compressionConfig: CompressionConfig;
  runCompression: (input: Record<string, unknown>) => Promise<CompressionResult>;
}): Promise<CompressionResult> {
  const { applyLiveZoneCompression } = await import("../../services/compression/liveZone.ts");
  const explicitSessionId = getHeaderValueCaseInsensitive(
    clientHeaders ?? null,
    "x-omniroute-session-id"
  );
  const connectionId = getCurrentConnectionId() ?? undefined;
  const liveZoneSessionId =
    explicitSessionId ||
    readClaudeCodeSessionId(compressionInputBody, clientHeaders) ||
    generateSessionId(compressionInputBody, { provider, connectionId }) ||
    undefined;
  return applyLiveZoneCompression(
    compressionInputBody,
    {
      principalId: compressionPrincipalId,
      sessionId: liveZoneSessionId,
      connectionId,
      variant: {
        mode,
        provider,
        model: effectiveModel,
        config: compressionConfig,
        cachePrefix: {
          system: compressionInputBody.system,
          systemInstruction: compressionInputBody.systemInstruction,
          system_instruction: compressionInputBody.system_instruction,
          instructions: compressionInputBody.instructions,
          tools: compressionInputBody.tools,
          toolChoice: compressionInputBody.tool_choice,
        },
      },
      ttlMinutes: compressionConfig.cacheMinutes,
    },
    runCompression
  );
}
