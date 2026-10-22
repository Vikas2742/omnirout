### Codex Web Search through connected ChatGPT accounts

- Add `codex-search` (alias `codex_search`) for web and news search using connected OpenAI Codex accounts, with no separate search key.
- Keep configured search providers first; prefer credentialed last-resort providers before keyless DuckDuckGo search, honoring API key connection scopes.
- Parse Codex SSE with a 4 MB response cap and ground result URLs in observed source/citation host+path pairs. Log upstream token usage and apply search connection cooldowns.
- Allow Codex's 60-second timeout when no operator search timeout is set. Searches spend subscription quota (catalog price 0 is not free usage); time-range and domain constraints are instruction hints, not hard filters.
