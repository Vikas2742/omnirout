"use client";

import { useTranslations } from "next-intl";

export function getI18nOrFallback(t, key, fallback, values = undefined) {
  try {
    if (typeof t.has === "function" && t.has(key)) return t(key, values);
  } catch {}
  return fallback;
}

export function AutoComboTruncatedNote({ results }) {
  const t = useTranslations("combos");
  const tested = Array.isArray(results.results) ? results.results.length : 0;
  const total = results.totalCandidates;
  if (results.comboType !== "auto" || typeof total !== "number" || total <= tested) {
    return null;
  }
  return (
    <p className="text-xs text-text-muted">
      {getI18nOrFallback(
        t,
        "autoComboTestTruncated",
        `Tested ${tested} of ${total} live candidates (highest weights first).`,
        { tested, total }
      )}
    </p>
  );
}

export function ComboTestSummaryNote({ results }) {
  if (
    String(results?.strategy || "")
      .trim()
      .toLowerCase() === "jev" &&
    results.jev
  ) {
    return (
      <div className="rounded-md border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-2 flex flex-col gap-1.5">
        <p className="text-xs text-indigo-800 dark:text-indigo-200">
          {results.jev.admittedSentence}
        </p>
        <p className="text-xs text-indigo-800 dark:text-indigo-200">{results.jev.heldSentence}</p>
        <p className="text-xs text-indigo-800 dark:text-indigo-200">
          {results.jev.blockedSentence}
        </p>
        {results.jev.configurationNote ? (
          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
            {results.jev.configurationNote}
          </p>
        ) : null}
        <p className="text-[10px] text-text-muted">
          Target rows below are independent health probes. Live Jev admission is recorded on the
          decision trace for a real chat request.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs text-text-muted">
        Targets are tested independently. This checks model health, not the combo’s routing strategy
        or fallback order.
      </p>
      <AutoComboTruncatedNote results={results} />
    </>
  );
}
