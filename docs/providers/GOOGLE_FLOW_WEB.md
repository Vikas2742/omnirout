# Google Flow web image provider

`google-flow-web/nano-banana-2.1` is an experimental, opt-in, image-only provider. It drives the operator's own already-authenticated headed Chrome instance through the Chrome DevTools Protocol (CDP), using an owned background window; OmniRoute does not store Google credentials, cookies, storage state, verification tokens, or signed download URLs.

Setup:

1. Strongly recommended: run a dedicated headed Chrome instance/profile for Flow, with only Flow open. Bind remote debugging to loopback only (for example `--remote-debugging-port=9222`); do not expose the port to a network. Playwright's `connectOverCDP` attaches to every existing tab in that browser, not just Flow: a discarded/frozen tab can block attachment until it is activated or closed. An attach timeout reports `browser_attach_timeout` internally and gives these recovery instructions; no image has been submitted at that point.
2. Sign in to Flow in that Chrome profile and create a Flow project.
3. Set `GOOGLE_FLOW_WEB_CDP_URL` to the loopback HTTP CDP address and `GOOGLE_FLOW_WEB_PROJECT_ID` to the project's UUID.
4. Restart OmniRoute. The provider appears in the model catalog only while both values are valid.

Supported API inputs are direct text-to-image requests for `nano-banana-2.1`, `n=1..4`, the Flow aspects `1:1`, `16:9`, `9:16`, `4:3`, and `3:4`, and `response_format=b64_json`. Pixel sizes are accepted only as deterministic aspect mappings: `1024x1024` → `1:1`, `1536x1024` → `16:9`, `1024x1536` → `9:16`, `1024x768` → `4:3`, and `768x1024` → `3:4`. They do not promise an exact output resolution.

Limitations:

- This is a browser UI integration, not an official Google Flow API. Flow UI changes can break it.
- One generation is allowed at a time per OmniRoute process; the queue is bounded. Multi-process coordination is not supported. OmniRoute opens a separate background window per request; it does not take focus; do not minimize it. After generating, OmniRoute closes only its owned page (closing the last tab also closes that dedicated window).
- Flow may rewrite non-English prompts. Correlation uses the recorded original prompt when present, falling back to the used prompt; comparison trims only leading/trailing whitespace, matching the UI. If the used prompt differs from the trimmed request, each returned image includes OpenAI's `revised_prompt`.
- Sign-in, CAPTCHA, verification, unusual-activity responses, or UI changes require operator takeover in the attached browser. OmniRoute does not solve CAPTCHA, read verification tokens, replay generation RPCs, or retry uncertain submissions.
- The browser must already be running and authenticated. OmniRoute never launches Chrome, creates a browser profile, exports cookies, reads storage state, or closes the shared browser/context.
- Google Flow availability, subscription access, generated content, and compliance with Google's terms remain the operator's responsibility. Do not expose the loopback CDP port.

Example environment:

```dotenv
GOOGLE_FLOW_WEB_CDP_URL=http://127.0.0.1:9222
GOOGLE_FLOW_WEB_PROJECT_ID=00000000-0000-4000-8000-000000000000
```
