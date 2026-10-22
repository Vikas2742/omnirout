import type { RegistryEntry } from "../../shared.ts";

export const abit_chatgpt_relayProvider: RegistryEntry = {
  id: "abit-chatgpt-relay",
  alias: "cgpt-relay",
  format: "openai",
  executor: "abit-chatgpt-relay",
  baseUrl: "http://127.0.0.1:8794/chatgpt-relay",
  authType: "apikey",
  authHeader: "bearer",
  timeoutMs: 3_600_000,
  models: [
    {
      id: "project-management",
      name: "ChatGPT Browser — Project Management",
      toolCalling: false,
      supportsReasoning: false,
      supportsVision: false,
      contextLength: 128_000,
      maxOutputTokens: 32_768,
    },
  ],
};
