import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const cjkRaw = readFileSync(
  new URL("./fixtures/google-flow-web-ogiZ0b.txt", import.meta.url),
  "utf8"
);
const asciiRaw = readFileSync(
  new URL("./fixtures/google-flow-web-ogiZ0b-9x16.txt", import.meta.url),
  "utf8"
);
const cjkFrame = JSON.parse(cjkRaw.split("\n")[3]);
const asciiFrame = JSON.parse(asciiRaw.split("\n")[3]);
const cjkPrompt = "一只橘猫趴在窗台上晒太阳，温暖的午后光线，照片风格。";
const asciiPrompt = "A white ceramic mug on a wooden desk, minimal product photo.";
function frame(value: unknown) {
  const json = JSON.stringify(value);
  return `)]}'\n\n${json.length + 2}\n${json}\n`;
}
async function parser() {
  return import("../../open-sse/services/googleFlowWebResponse.ts");
}
test("live UTF-16 frame lengths parse across multiple frames", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const images = parseGoogleFlowResponse(cjkRaw, 2, cjkPrompt);
  assert.equal(images.length, 2);
  assert.deepEqual([images[0].width, images[0].height], [1376, 768]);
  assert.equal(
    images[0].revisedPrompt,
    "A ginger cat lying on a windowsill basking in the sun, warm afternoon light, photography style."
  );
});
test("live ASCII frame parses and omits revised_prompt when Flow preserves the request", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const images = parseGoogleFlowResponse(asciiRaw, 1, asciiPrompt);
  assert.equal(images.length, 1);
  assert.deepEqual([images[0].width, images[0].height], [1024, 1024]);
  assert.equal(images[0].revisedPrompt, undefined);
});
test("frame lengths use JavaScript UTF-16 units plus two separators", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const json = JSON.stringify(cjkFrame);
  assert.equal(parseGoogleFlowResponse(frame(cjkFrame), 2, cjkPrompt).length, 2);
  assert.equal(json.length + 2, 2370);
});
test("original prompt correlation rejects a mismatched original field", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const changed = structuredClone(cjkFrame);
  const payload = JSON.parse(changed[0][2]);
  payload[0][0][6][0][15][2][0][2][0][0][0] = "different original";
  changed[0][2] = JSON.stringify(payload);
  assert.throws(() => parseGoogleFlowResponse(frame(changed), 2, cjkPrompt));
});
for (const [name, n, echo] of [
  ["wrong count", 1, cjkPrompt],
  ["prompt echo mismatch", 2, "other"],
] as const) {
  test(name, async () => {
    const { parseGoogleFlowResponse } = await parser();
    assert.throws(() => parseGoogleFlowResponse(cjkRaw, n, echo));
  });
}
test("UI whitespace trim preserves exact internal text and original fallback", async () => {
  const { parseGoogleFlowResponse } = await parser();
  assert.equal(parseGoogleFlowResponse(asciiRaw, 1, ` \n${asciiPrompt}\t`).length, 1);
  const changed = structuredClone(asciiFrame);
  const payload = JSON.parse(changed[0][2]);
  payload[0][0][6][0][15] = null;
  changed[0][2] = JSON.stringify(payload);
  assert.equal(parseGoogleFlowResponse(frame(changed), 1, asciiPrompt).length, 1);
  assert.throws(() =>
    parseGoogleFlowResponse(
      frame(changed),
      1,
      asciiPrompt.replace("white ceramic", "white  ceramic")
    )
  );
});
for (const kind of ["no separators", "UTF-8 bytes", "astral code points"] as const) {
  test(`reject incorrect frame length: ${kind}`, async () => {
    const { parseGoogleFlowResponse } = await parser();
    const json = JSON.stringify(asciiFrame) + " ";
    const line = kind === "astral code points" ? JSON.stringify([["di", "🍌"]]) : json;
    const count =
      kind === "no separators"
        ? line.length
        : kind === "UTF-8 bytes"
          ? Buffer.byteLength(JSON.stringify(cjkFrame)) + 2
          : [...line].length + 2;
    const content = kind === "UTF-8 bytes" ? JSON.stringify(cjkFrame) : line;
    assert.throws(() => parseGoogleFlowResponse(`)]}'\n\n${count}\n${content}\n`, 1, asciiPrompt));
  });
}
test("original field takes precedence even when the rewrite equals the request", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const changed = structuredClone(asciiFrame);
  const payload = JSON.parse(changed[0][2]);
  payload[0][0][6][0][15][2][0][2][0][0][0] = "other";
  changed[0][2] = JSON.stringify(payload);
  assert.throws(() => parseGoogleFlowResponse(frame(changed), 1, asciiPrompt));
});
for (const url of [
  "https://example.com/image/00000001-0000-4000-8000-000000000001",
  "http://flow-content.google/image/00000001-0000-4000-8000-000000000001",
  "https://flow-content.google/thumbnail/id",
  "https://flow-content.google/image/not-uuid",
]) {
  test(`reject media URL ${url}`, async () => {
    const { parseGoogleFlowResponse } = await parser();
    const changed = structuredClone(cjkFrame);
    const payload = JSON.parse(changed[0][2]);
    payload[0][0][6][0][13] = url;
    changed[0][2] = JSON.stringify(payload);
    assert.throws(() => parseGoogleFlowResponse(frame(changed), 2, cjkPrompt));
  });
}
test("HTTP 200 business error requires operator verification without retry", async () => {
  const { parseGoogleFlowResponse, GoogleFlowWebError } = await parser();
  assert.throws(
    () =>
      parseGoogleFlowResponse(
        frame([
          [
            "wrb.fr",
            "ogiZ0b",
            null,
            null,
            null,
            [
              7,
              null,
              [["type.googleapis.com/google.rpc.ErrorInfo", ["PUBLIC_ERROR_UNUSUAL_ACTIVITY"]]],
            ],
          ],
        ]),
        2,
        cjkPrompt
      ),
    (error: unknown) => {
      assert.ok(error instanceof GoogleFlowWebError);
      assert.equal(error.code, "verification_required");
      assert.match(error.message, /operator.*browser/i);
      return true;
    }
  );
});
for (const text of [
  "",
  "garbage",
  ")]}'\n12\n[]\n",
  frame([]),
  frame([["wrb.fr", "ogiZ0b", "[[],[]]"]]),
]) {
  test(`malformed framing or empty payload ${JSON.stringify(text)}`, async () => {
    const { parseGoogleFlowResponse } = await parser();
    assert.throws(() => parseGoogleFlowResponse(text, 2, cjkPrompt));
  });
}
