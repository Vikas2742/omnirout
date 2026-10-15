import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const fixture = readFileSync(
  new URL("./fixtures/google-flow-web-ogiZ0b.txt", import.meta.url),
  "utf8"
);
const fixtureFrame = JSON.parse(fixture.split("\n")[3]);
const prompt = "A red apple on a white table, studio photo.";
const payload = JSON.parse(fixtureFrame[0][2]);
function frame(value: unknown) {
  const json = JSON.stringify(value);
  return `)]}'\n\n${Buffer.byteLength(json)}\n${json}\n`;
}
async function parser() {
  return import("../../open-sse/services/googleFlowWebResponse.ts");
}
test("Google frame lengths may include the two trailing line separators", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const json = JSON.stringify(fixtureFrame);
  const framed = `)]}'\n\n${Buffer.byteLength(json) + 2}\n${json}\n\n`;
  assert.equal(parseGoogleFlowResponse(framed, 2, prompt).length, 2);
});
test("fixture success: two current original images, ids and 1376x768 dimensions", async () => {
  const { parseGoogleFlowResponse } = await parser();
  const images = parseGoogleFlowResponse(frame(fixtureFrame), 2, prompt);
  assert.equal(images.length, 2);
  assert.equal(images[0].id, "00000001-0000-4000-8000-000000000001");
  assert.equal(images[1].id, "00000003-0000-4000-8000-000000000003");
  assert.deepEqual([images[0].width, images[0].height], [1376, 768]);
  assert.equal(new URL(images[0].url).hostname, "flow-content.google");
});
for (const [name, n, echo] of [
  ["wrong count", 1, prompt],
  ["prompt echo mismatch", 2, "other"],
] as const) {
  test(name, async () => {
    const { parseGoogleFlowResponse } = await parser();
    assert.throws(() => parseGoogleFlowResponse(frame(fixtureFrame), n, echo));
  });
}
for (const url of [
  "https://example.com/image/00000001-0000-4000-8000-000000000001",
  "http://flow-content.google/image/00000001-0000-4000-8000-000000000001",
  "https://flow-content.google/thumbnail/id",
  "https://flow-content.google/image/not-uuid",
]) {
  test(`reject media URL ${url}`, async () => {
    const { parseGoogleFlowResponse } = await parser();
    const changed = structuredClone(payload);
    changed[0][0][6][0][13] = url;
    assert.throws(() =>
      parseGoogleFlowResponse(frame([["wrb.fr", "ogiZ0b", JSON.stringify(changed)]]), 2, prompt)
    );
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
        prompt
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
    assert.throws(() => parseGoogleFlowResponse(text, 2, prompt));
  });
}
