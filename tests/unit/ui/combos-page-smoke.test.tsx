// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import CombosPage from "@/app/(dashboard)/dashboard/combos/page";

describe("combos page memoization", () => {
  it("combos page module exports a default component", () => {
    expect(CombosPage).toBeDefined();
    expect(typeof CombosPage).toBe("function");
  });

  it("shows the Jev privacy notice beside the strategy selector", () => {
    const source = readFileSync(
      new URL("../../../src/app/(dashboard)/dashboard/combos/page.tsx", import.meta.url),
      "utf8"
    );
    const strategySelector = source.indexOf("{/* Strategy Toggle */}");
    const privacyNotice = source.indexOf('"jevPrivacyNote"');
    const collapsedAdvancedSettings = source.indexOf("{advancedConfigVisible && (", privacyNotice);

    expect(strategySelector).toBeGreaterThanOrEqual(0);
    expect(privacyNotice).toBeGreaterThan(strategySelector);
    expect(collapsedAdvancedSettings).toBeGreaterThan(privacyNotice);
  });
});
