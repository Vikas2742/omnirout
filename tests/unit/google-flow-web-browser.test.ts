import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import type { Browser, Page } from "playwright-core";

const prompt = "A red apple on a white table, studio photo.";
const raw = readFileSync(new URL("./fixtures/google-flow-web-ogiZ0b.txt", import.meta.url), "utf8");
const frame = JSON.parse(raw.split("\n")[3]);
const payload = JSON.parse(frame[0][2]);
for (const media of payload[0]) {
  media[6][0][7] = prompt;
  media[6][0][15][2][0][2][0][0][0] = prompt;
}
frame[0][2] = JSON.stringify(payload);
const json = JSON.stringify(frame);
const responseText = `)]}'\n\n${json.length + 2}\n${json}\n`;
const config = {
  cdpUrl: "http://127.0.0.1:19345",
  projectId: "00000001-0000-4000-8000-000000000001",
  timeoutMs: 2000,
  queueTimeoutMs: 50,
};
const request = { prompt, n: 2, aspect: "16:9" as const };
function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((done) => {
    resolve = done;
  });
  return { promise, resolve };
}
function fake(
  options: {
    agent?: string;
    visibility?: string;
    signIn?: boolean;
    unstuck?: string;
    bytes?: string;
    hold?: boolean;
    beforeClick?: () => void;
    afterClick?: () => void;
    afterInsert?: () => void;
    family?: string;
    width?: number;
    echo?: string;
    agentCount?: number;
    decoratedRadio?: boolean;
    radioDelayReads?: number;
    finalRadioDelay?: boolean;
    finalUnstuck?: string;
    afterRadioRead?: (name: string, count: number) => void;
    familyMenu?: string;
    replyText?: string;
  } = {}
) {
  const events: string[] = [];
  const pages: Page[] = [];
  const clicked = deferred<void>();
  const reply = deferred<void>();
  let clicks = 0;
  let active = 0;
  let maxActive = 0;
  let dangerousClose = 0;
  let ownedClose = 0;
  const makePage = () => {
    let text = "";
    const selected = new Set<string>();
    const reads = new Map<string, number>();
    let family = options.family ?? "Nano Banana 2.1";
    let familyReads = 0;
    let finalRead = false;
    let waitRegistered = false;
    const locator = (name: string): unknown => ({
      filter: ({ hasText }: { hasText: string | RegExp }) => {
        if (name.includes('[role="option"]') && options.familyMenu) {
          assert.ok(hasText instanceof RegExp);
          return locator(hasText.test(options.familyMenu) ? "family-option" : "missing-option");
        }
        return locator(
          typeof hasText === "string"
            ? hasText
            : hasText.source.includes("Agent")
              ? "Agent"
              : hasText.source.replace(/[^a-zA-Z0-9:.-]/g, "")
        );
      },
      getByRole: (_role: string, opts: { name: string | RegExp; exact?: boolean }) =>
        locator(
          options.decoratedRadio && opts.exact
            ? "missing-radio"
            : typeof opts.name === "string"
              ? opts.name
              : opts.name.source.replace(/[^a-zA-Z0-9:.-]/g, "")
        ),
      locator: (selector: string) => locator(selector),
      count: async () => (name === "Agent" ? (options.agentCount ?? 1) : 1),
      nth: () => locator(name),
      isVisible: async () => true,
      boundingBox: async () => ({ width: 600, height: 100 }),
      innerText: async () => {
        if (!name.includes("Select model family")) return text;
        if (++familyReads === 2 && (options.finalRadioDelay || options.finalUnstuck)) {
          reads.clear();
          finalRead = true;
        }
        return family;
      },
      textContent: async () => options.echo ?? text,
      getAttribute: async (attr: string) => {
        events.push(`read:${name}:${attr}`);
        if (attr === "aria-pressed") return options.agent ?? "false";
        const count = (reads.get(name) ?? 0) + 1;
        reads.set(name, count);
        options.afterRadioRead?.(name, count);
        const delay = finalRead ? 3 : (options.radioDelayReads ?? 1);
        return selected.has(name) &&
          options.unstuck !== name &&
          !(finalRead && options.finalUnstuck === name) &&
          count >= delay
          ? "true"
          : "false";
      },
      focus: async () => {
        events.push("focus");
      },
      evaluate: async () => text,
      click: async () => {
        if (name === "missing-option") throw new Error("No matching model option");
        if (name === "family-option") family = options.familyMenu!;
        if (name === "missing-radio")
          throw new Error("Radio accessible name includes a material icon");
        if (name.includes("arrow_forward")) {
          options.beforeClick?.();
          assert.equal(waitRegistered, true, "waitForResponse before click");
          clicks++;
          active++;
          maxActive = Math.max(maxActive, active);
          events.push("send");
          clicked.resolve();
          options.afterClick?.();
        } else {
          events.push(`click:${name}`);
          selected.add(name);
        }
      },
    });
    const page = {
      bringToFront: async () => {
        events.push("front");
      },
      goto: async (url: string) => {
        events.push(`goto:${url}`);
      },
      url: () =>
        options.signIn
          ? "https://accounts.google.com/signin"
          : `https://flow.google.com/project/${config.projectId}`,
      locator: (selector: string) => locator(selector),
      getByRole: (_role: string, opts: { name: string | RegExp }) =>
        locator(
          typeof opts.name === "string"
            ? opts.name
            : opts.name.source.replace(/[^a-zA-Z0-9:.-]/g, "")
        ),
      keyboard: {
        press: async (key: string) => {
          events.push(key);
          if (key === "Backspace") text = "";
        },
        insertText: async (value: string) => {
          events.push("insert");
          text = value;
          options.afterInsert?.();
        },
      },
      evaluate: async (_fn: unknown, arg: unknown) => {
        if (!arg) return options.visibility ?? "visible";
        return {
          base64: options.bytes ?? Buffer.from([255, 216, 255, 224]).toString("base64"),
          width: options.width ?? 1376,
          height: 768,
        };
      },
      waitForResponse: (predicate: (value: unknown) => boolean) => {
        waitRegistered = true;
        events.push("wait");
        assert.equal(
          predicate({
            url: () =>
              "https://flow.google.com/_/AiSandboxAngularFrontend/data/batchexecute?rpcids=ogiZ0b",
            request: () => ({ method: () => "POST" }),
          }),
          true
        );
        assert.equal(
          predicate({
            url: () => "https://evil.example/?rpcids=ogiZ0b",
            request: () => ({ method: () => "POST" }),
          }),
          false
        );
        return (options.hold ? reply.promise : Promise.resolve()).then(() => ({
          ok: () => true,
          text: async () => options.replyText ?? responseText,
        }));
      },
      close: async () => {
        events.push("close-page");
        ownedClose++;
        active = Math.max(0, active - 1);
      },
      setDefaultTimeout: () => {},
    } as unknown as Page;
    pages.push(page);
    return page;
  };
  const browser = {
    contexts: () => [
      {
        newPage: async () => makePage(),
        close: () => {
          dangerousClose++;
        },
        pages: () => [
          {
            close: () => {
              dangerousClose++;
            },
          },
        ],
      },
    ],
    on: () => {},
    isConnected: () => true,
    close: () => {
      dangerousClose++;
    },
  } as unknown as Browser;
  return {
    events,
    pages,
    browser,
    clicked,
    reply,
    counts: () => ({ clicks, maxActive, dangerousClose, ownedClose }),
  };
}
async function setup(options: Parameters<typeof fake>[0] = {}) {
  const seam = fake(options);
  const { createGoogleFlowWebBridge } =
    await import("../../open-sse/services/googleFlowWebBrowser.ts");
  const bridge = createGoogleFlowWebBridge(async (url) => {
    assert.equal(url, config.cdpUrl);
    return seam.browser;
  });
  return { ...seam, bridge };
}
test("UI readback, exact prompt, foreground and one send; close only owned page", async () => {
  const f = await setup();
  const images = await f.bridge.generate(request, config);
  assert.equal(images.length, 2);
  assert.deepEqual(f.counts(), { clicks: 1, maxActive: 1, dangerousClose: 0, ownedClose: 1 });
  for (const event of [
    "read:Agent:aria-pressed",
    "click:Image",
    "click:16:9",
    "click:x2",
    "Escape",
    "insert",
    "wait",
    "send",
  ])
    assert.ok(f.events.includes(event), event);
  assert.ok(f.events.indexOf("wait") < f.events.indexOf("send"));
});
test("CJK original correlation carries Flow's revised_prompt on every image", async () => {
  const f = await setup({ replyText: raw });
  const images = await f.bridge.generate(
    { ...request, prompt: "一只橘猫趴在窗台上晒太阳，温暖的午后光线，照片风格。" },
    config
  );
  assert.deepEqual(
    images,
    Array.from({ length: 2 }, () => ({
      b64_json: "/9j/4A==",
      revised_prompt:
        "A ginger cat lying on a windowsill basking in the sun, warm afternoon light, photography style.",
    }))
  );
});
for (const options of [{ radioDelayReads: 3 }, { finalRadioDelay: true }]) {
  test(`Angular radios settle on third read: ${JSON.stringify(options)}`, async () => {
    const f = await setup(options);
    assert.equal((await f.bridge.generate(request, config)).length, 2);
    assert.equal(f.counts().clicks, 1);
  });
}
test("abort during Angular radio polling stops before send", async () => {
  const controller = new AbortController();
  const f = await setup({
    radioDelayReads: 3,
    afterRadioRead: (name, count) => {
      if (name === "Image" && count === 2) controller.abort();
    },
  });
  await assert.rejects(f.bridge.generate(request, config, controller.signal), /before submission/i);
  assert.equal(f.counts().clicks, 0);
  assert.equal(f.counts().ownedClose, 1);
});
for (const familyMenu of ["🍌 Nano Banana 2.1\narrow_drop_down", "Nano Banana 2.1"]) {
  test(`model menu accepts exact family with decorations: ${familyMenu}`, async () => {
    const f = await setup({ family: "Nano Banana Pro", familyMenu });
    assert.equal((await f.bridge.generate(request, config)).length, 2);
    assert.equal(f.counts().clicks, 1);
    assert.ok(f.events.includes("click:family-option"));
  });
}
for (const familyMenu of [
  "🍌 Nano Banana 2 Lite",
  "🍌 Nano Banana 2.1 Pro",
  "🍌 Nano Banana 2.10",
]) {
  test(`model menu rejects another family: ${familyMenu}`, async () => {
    const f = await setup({ family: "Nano Banana Pro", familyMenu });
    await assert.rejects(f.bridge.generate(request, config));
    assert.equal(f.counts().clicks, 0);
  });
}
test("attach TimeoutError explains frozen tabs without creating pages or leaking raw errors", async () => {
  const { createGoogleFlowWebBridge } =
    await import("../../open-sse/services/googleFlowWebBrowser.ts");
  const { GoogleFlowWebError } = await import("../../open-sse/services/googleFlowWebResponse.ts");
  const bridge = createGoogleFlowWebBridge(async () => {
    const error = new Error(
      "browserType.connectOverCDP: Timeout 10000ms exceeded. /private/secret Signature=private"
    );
    error.name = "TimeoutError";
    throw error;
  });
  await assert.rejects(bridge.generate(request, config), (error: unknown) => {
    assert.ok(error instanceof GoogleFlowWebError);
    assert.equal(error.code, "browser_attach_timeout");
    assert.equal(error.status, 504);
    assert.match(error.message, /discarded|frozen/i);
    assert.match(error.message, /dedicated.*profile/i);
    assert.match(error.message, /activate|close/i);
    assert.doesNotMatch(error.message, /private|Signature/);
    return true;
  });
});
test("Agent readback uses Playwright auto-wait rather than an immediate DOM count", async () => {
  const f = await setup({ agentCount: 0 });
  assert.equal((await f.bridge.generate(request, config)).length, 2);
  assert.equal(f.counts().clicks, 1);
});
test("Flow radio labels may include material icons around their text", async () => {
  const f = await setup({ decoratedRadio: true });
  assert.equal((await f.bridge.generate(request, config)).length, 2);
  assert.equal(f.counts().clicks, 1);
});
for (const [name, options, message] of [
  ["Agent true", { agent: "true" }, /Agent/],
  ["hidden tab", { visibility: "hidden" }, /visible|foreground/i],
  ["sign-in redirect", { signIn: true }, /sign in/i],
  ["radio fails to stick", { unstuck: "16:9" }, /setting|option/i],
  ["final radio never settles", { finalUnstuck: "16:9" }, /setting|option/i],
  ["model family fails to stick", { family: "Nano Banana Pro" }, /model|stick/i],
  ["prompt insertion mismatch", { echo: "rewritten prompt" }, /prompt|exact/i],
] as const) {
  test(`${name}: error and zero clicks`, async () => {
    const f = await setup(options);
    await assert.rejects(f.bridge.generate(request, { ...config, timeoutMs: 5000 }), message);
    assert.equal(f.counts().clicks, 0);
    assert.equal(f.counts().ownedClose, 1);
    assert.equal(f.counts().dangerousClose, 0);
  });
}
test("FIFO serialization and queue timeout never submit the queued call", async () => {
  const f = await setup({ hold: true });
  const first = f.bridge.generate(request, config);
  await f.clicked.promise;
  const timeout = f.bridge.generate(request, config);
  await assert.rejects(timeout, /busy/i);
  const second = f.bridge.generate(request, { ...config, queueTimeoutMs: 1000 });
  const third = f.bridge.generate(request, { ...config, queueTimeoutMs: 1000 });
  assert.equal(f.counts().clicks, 1);
  f.reply.resolve();
  await Promise.all([first, second, third]);
  assert.equal(f.counts().maxActive, 1);
  assert.equal(f.counts().clicks, 3);
});
test("queued abort removes its FIFO waiter without submitting", async () => {
  const f = await setup({ hold: true });
  const first = f.bridge.generate(request, config);
  await f.clicked.promise;
  const controller = new AbortController();
  const queued = f.bridge.generate(request, config, controller.signal);
  controller.abort();
  await assert.rejects(queued, /cancel/i);
  f.reply.resolve();
  await first;
  assert.equal(f.counts().clicks, 1);
});
test("abort before submit never clicks", async () => {
  const f = await setup();
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(f.bridge.generate(request, config, controller.signal), /abort|cancel/i);
  assert.equal(f.counts().clicks, 0);
});
test("abort after submit closes owned page with uncertain outcome and no retry", async () => {
  const controller = new AbortController();
  const f = await setup({ hold: true, afterClick: () => controller.abort() });
  await assert.rejects(
    f.bridge.generate(request, config, controller.signal),
    /may still have been generated/i
  );
  assert.equal(f.counts().clicks, 1);
  assert.equal(f.counts().ownedClose, 1);
  assert.equal(f.counts().dangerousClose, 0);
});
test("abort during prompt insertion releases owned tab without sending", async () => {
  const controller = new AbortController();
  const f = await setup({ afterInsert: () => controller.abort() });
  await assert.rejects(f.bridge.generate(request, config, controller.signal), /before submission/i);
  assert.equal(f.counts().clicks, 0);
  assert.equal(f.counts().ownedClose, 1);
});
test("deadline after submit reports uncertain generation and closes page", async () => {
  const f = await setup({ hold: true });
  await assert.rejects(
    f.bridge.generate(request, { ...config, timeoutMs: 20 }),
    /may still have been generated/i
  );
  assert.equal(f.counts().clicks, 1);
  assert.equal(f.counts().ownedClose, 1);
});
test("decoded media dimensions must match current response", async () => {
  const f = await setup({ width: 286 });
  await assert.rejects(f.bridge.generate(request, config), /dimensions/i);
  assert.equal(f.counts().ownedClose, 1);
});
for (const [name, bytes] of [
  ["bad magic", Buffer.from("not an image").toString("base64")],
  ["size cap", Buffer.alloc(20 * 1024 * 1024 + 1).toString("base64")],
]) {
  test(`media ${name} rejected`, async () => {
    const f = await setup({ bytes });
    await assert.rejects(f.bridge.generate(request, config), /media|image/i);
    assert.equal(f.counts().ownedClose, 1);
    assert.equal(f.counts().clicks, 1);
  });
}
