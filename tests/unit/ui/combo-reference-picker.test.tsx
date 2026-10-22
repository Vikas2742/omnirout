// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import ComboReferencePicker from "@/app/(dashboard)/dashboard/combos/ComboReferencePicker";

function t(key: string): string {
  return key;
}
t.has = () => false;

const options = [
  { id: "a", name: "alpha", strategy: "priority", stepCount: 1 },
  { id: "b", name: "beta", strategy: "round-robin", stepCount: 3 },
];

describe("ComboReferencePicker", () => {
  afterEach(() => {
    cleanup();
  });

  it("lists the referenceable combos with strategy and step count", () => {
    const { container } = render(
      <ComboReferencePicker t={t} value="" onChange={() => {}} options={options} onAdd={() => {}} />
    );
    const texts = Array.from(container.querySelectorAll("option")).map((o) =>
      (o.textContent || "").replace(/\s+/g, " ").trim()
    );
    expect(texts).toEqual([
      "Select an existing combo to reference",
      "alpha · priority · 1 step",
      "beta · round-robin · 3 steps",
    ]);
  });

  it("reports the selected combo name and disables Add until one is chosen", () => {
    const onChange = vi.fn();
    const onAdd = vi.fn();
    const { container, getByRole, rerender } = render(
      <ComboReferencePicker t={t} value="" onChange={onChange} options={options} onAdd={onAdd} />
    );
    const button = getByRole("button") as HTMLButtonElement;
    expect(button.disabled).toBe(true);

    fireEvent.change(container.querySelector("select") as HTMLSelectElement, {
      target: { value: "beta" },
    });
    expect(onChange).toHaveBeenCalledWith("beta");

    rerender(
      <ComboReferencePicker
        t={t}
        value="beta"
        onChange={onChange}
        options={options}
        onAdd={onAdd}
      />
    );
    const enabled = getByRole("button") as HTMLButtonElement;
    expect(enabled.disabled).toBe(false);
    fireEvent.click(enabled);
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it("stays hidden for jev combos in the combo builder", () => {
    const source = readFileSync(
      resolve(process.cwd(), "src/app/(dashboard)/dashboard/combos/page.tsx"),
      "utf8"
    );
    const at = source.indexOf("<ComboReferencePicker");
    expect(at).toBeGreaterThan(0);
    expect(source.slice(Math.max(0, at - 60), at)).toContain('strategy !== "jev"');
  });
});
