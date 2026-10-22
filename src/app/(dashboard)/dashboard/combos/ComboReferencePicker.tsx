"use client";

import Button from "@/shared/components/Button";
import { getI18nOrFallback } from "./comboPageHelpers";

/**
 * "Reference another combo" picker of the combo builder. Extracted from page.tsx to keep that
 * frozen god-file under its file-size ceiling; the builder hides it for `jev` combos, whose
 * ordered list must stay a flat set of provider models.
 */
export default function ComboReferencePicker({ t, value, onChange, options, onAdd }) {
  return (
    <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5">
      <label className="text-[10px] font-medium uppercase tracking-wide text-text-muted block mb-1">
        {getI18nOrFallback(t, "builderComboRef", "Reference another combo")}
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 text-xs py-2 px-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-text-main focus:border-primary focus:outline-none"
        >
          <option value="">
            {getI18nOrFallback(
              t,
              "selectComboToReference",
              "Select an existing combo to reference"
            )}
          </option>
          {options.map((comboRef) => (
            <option key={comboRef.id} value={comboRef.name}>
              {comboRef.name} · {comboRef.strategy} · {comboRef.stepCount} step
              {comboRef.stepCount === 1 ? "" : "s"}
            </option>
          ))}
        </select>
        <Button onClick={onAdd} variant="ghost" size="sm" disabled={!value}>
          {getI18nOrFallback(t, "builderAddComboRef", "Add combo ref")}
        </Button>
      </div>
    </div>
  );
}
