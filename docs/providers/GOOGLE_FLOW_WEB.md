# Google Flow web image provider

`google-flow-web/nano-banana-2.1` is an experimental, opt-in, image-only provider. It drives the operator's own already-authenticated headed Chrome tab through the Chrome DevTools Protocol (CDP); OmniRoute does not store Google credentials, cookies, storage state, verification tokens, or signed download URLs.

Setup:

1. Run your own headed Chrome with remote debugging bound to loopback only (for example `--remote-debugging-port=9222`). Do not expose the port to a network.
2. Sign in to Flow in that Chrome profile and create a Flow project.
3. Set `GOOGLE_FLOW_WEB_CDP_URL` to the loopback HTTP CDP address and `GOOGLE_FLOW_WEB_PROJECT_ID` to the project's UUID.
4. Restart OmniRoute. The provider appears in the model catalog only while both values are valid.

Supported API inputs are direct text-to-image requests for `nano-banana-2.1`, `n=1..4`, the Flow aspects `1:1`, `16:9`, `9:16`, `4:3`, and `3:4`, and `response_format=b64_json`. Pixel sizes are accepted only as deterministic aspect mappings: `1024x1024` → `1:1`, `1536x1024` → `16:9`, `1024x1536` → `9:16`, `1024x768` → `4:3`, and `768x1024` → `3:4`. They do not promise an exact output resolution.

Limitations:

- This is a browser UI integration, not an official Google Flow API. Flow UI changes can break it.
- One generation is allowed at a time per OmniRoute process; the queue is bounded. Multi-process coordination is not supported.
- Sign-in, CAPTCHA, verification, unusual-activity responses, or UI changes require operator takeover in the attached browser. OmniRoute does not solve CAPTCHA, read verification tokens, replay generation RPCs, or retry uncertain submissions.
- The browser must already be running and authenticated. OmniRoute never launches Chrome, creates a browser profile, exports cookies, reads storage state, or closes the shared browser/context.
- Google Flow availability, subscription access, generated content, and compliance with Google's terms remain the operator's responsibility. Do not expose the loopback CDP port.

Example environment:

```dotenv
GOOGLE_FLOW_WEB_CDP_URL=http://127.0.0.1:9222
GOOGLE_FLOW_WEB_PROJECT_ID=00000000-0000-4000-8000-000000000000
```
