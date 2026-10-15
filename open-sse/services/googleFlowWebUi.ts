import type { Page } from "playwright-core";
import type { GoogleFlowWebRequest } from "../handlers/imageGeneration/providers/googleFlowWebRequest.ts";
import { GoogleFlowWebError } from "./googleFlowWebResponse.ts";

const fail = (message: string): never => {
  throw new GoogleFlowWebError("ui_changed", message);
};
async function radio(page: Page, text: string) {
  const option = page.locator(".cdk-overlay-pane").getByRole("radio", { name: text });
  await option.click();
  if ((await option.getAttribute("aria-checked")) !== "true")
    fail("Flow UI setting did not stick; inspect the settings in the browser.");
}
export async function assertGoogleFlowVisible(page: Page) {
  await page.bringToFront();
  if ((await page.evaluate(() => document.visibilityState)) !== "visible")
    throw new GoogleFlowWebError(
      "browser_hidden",
      "The owned Flow tab must be visible in the foreground; activate attached Chrome."
    );
}
export async function configureGoogleFlowPage(
  page: Page,
  input: GoogleFlowWebRequest,
  check: () => void
) {
  const agent = page.locator("button").filter({ hasText: /^\s*Agent\s*$/ });
  // Attribute read auto-waits for Angular to mount; count() would fail immediately during navigation.
  if ((await agent.getAttribute("aria-pressed")) !== "false")
    throw new GoogleFlowWebError(
      "agent_mode",
      "Flow Agent mode must be off (direct image mode); operator must switch it in the browser."
    );
  check();
  await page.locator('button[aria-label="Settings trigger"]').click();
  await radio(page, "Image");
  await radio(page, input.aspect);
  await radio(page, `x${input.n}`);
  const family = page.locator('button[aria-label="Select model family"]');
  if (!(await family.innerText()).includes("Nano Banana 2.1")) {
    await family.click();
    await page
      .locator(
        '.cdk-overlay-pane button, .cdk-overlay-pane [role="option"], .cdk-overlay-pane [role="menuitem"]'
      )
      .filter({ hasText: /^\s*Nano Banana 2\.1\s*$/ })
      .click();
  }
  if (!(await family.innerText()).includes("Nano Banana 2.1"))
    fail("Flow UI model Nano Banana 2.1 did not stick; inspect the browser.");
  // Re-read every setting after model changes, which may reset aspect/count.
  for (const label of ["Image", input.aspect, `x${input.n}`]) {
    if (
      (await page
        .locator(".cdk-overlay-pane")
        .getByRole("radio", { name: label })
        .getAttribute("aria-checked")) !== "true"
    )
      fail("Flow UI setting did not stick; inspect the browser.");
  }
  await page.keyboard.press("Escape");
  const boxes = page.locator('[contenteditable="true"]');
  let box: ReturnType<Page["locator"]> | undefined;
  for (let i = 0; i < (await boxes.count()); i++) {
    const candidate = boxes.nth(i);
    if ((await candidate.isVisible()) && (await candidate.boundingBox())?.width > 200) {
      if (box) fail("Flow has multiple visible prompt boxes; no image was submitted.");
      box = candidate;
    }
  }
  if (!box) fail("Flow prompt box was not found; inspect the browser.");
  await box.focus();
  await page.keyboard.press("ControlOrMeta+A");
  await page.keyboard.press("Backspace");
  await page.keyboard.insertText(input.prompt);
  if ((await box.textContent()) !== input.prompt)
    fail("Flow prompt was not inserted exactly; no image was submitted.");
  check();
}
