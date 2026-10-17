"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Card, Input } from "@/shared/components";

const DEFAULT_URL = "http://127.0.0.1:4096";

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

interface OpencodeServerSettings {
  opencode_server_url: string;
  opencode_server_bin: string;
}

/**
 * Connection settings for the opencode CLI's headless server (`opencode serve`).
 *
 * Both fields are optional: with them empty the executor falls back to
 * OPENCODE_SERVER_URL / http://127.0.0.1:4096 and auto-detects the binary. The
 * bin path matters on installs where the CLI is not on PATH (e.g. the bun global
 * install keeps the real executable inside the package).
 */
export function OpencodeServerConnectionPanel() {
  const t = useTranslations("embeddedServices");
  const [settings, setSettings] = useState<OpencodeServerSettings>({
    opencode_server_url: DEFAULT_URL,
    opencode_server_bin: "",
  });
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data: Record<string, unknown>) => {
        setSettings({
          opencode_server_url:
            typeof data.opencode_server_url === "string" ? data.opencode_server_url : DEFAULT_URL,
          opencode_server_bin: typeof data.opencode_server_bin === "string" ? data.opencode_server_bin : "",
        });
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  const saveSetting = useCallback(
    async (key: keyof OpencodeServerSettings, value: string) => {
      const trimmed = value.trim();
      if (key === "opencode_server_url" && trimmed !== "" && !isValidUrl(trimmed)) {
        setMsg({ ok: false, text: t("invalidUrl") });
        return;
      }
      setSaving(true);
      setMsg(null);
      try {
        const res = await fetch("/api/settings", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [key]: trimmed }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setSettings((prev) => ({ ...prev, [key]: trimmed }));
        setMsg({ ok: true, text: t("saved") });
      } catch {
        setMsg({ ok: false, text: t("saveFailed") });
      } finally {
        setSaving(false);
      }
    },
    [t]
  );

  if (!loaded) return null;

  return (
    <Card padding="md">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-8 rounded-lg flex items-center justify-center bg-amber-500/10">
          <span className="material-symbols-outlined text-amber-500 text-xl">terminal</span>
        </div>
        <div>
          <h3 className="font-medium text-sm">{t("opencodeServerConnection")}</h3>
          <p className="text-xs text-text-muted">{t("opencodeServerConnectionDescription")}</p>
        </div>
      </div>

      {msg && (
        <div
          className={`flex items-center gap-1.5 mb-3 px-2 py-1.5 rounded text-xs ${
            msg.ok
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          <span className="material-symbols-outlined text-[12px]">
            {msg.ok ? "check_circle" : "error"}
          </span>
          {msg.text}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="text-xs text-text-muted mb-1.5 block">{t("opencodeServerUrl")}</label>
          <Input
            value={settings.opencode_server_url}
            onChange={(e) => saveSetting("opencode_server_url", e.target.value)}
            placeholder={DEFAULT_URL}
            disabled={saving}
          />
          <p className="text-[11px] text-text-muted mt-1">{t("opencodeServerUrlHint")}</p>
        </div>
        <div>
          <label className="text-xs text-text-muted mb-1.5 block">{t("opencodeServerBin")}</label>
          <Input
            value={settings.opencode_server_bin}
            onChange={(e) => saveSetting("opencode_server_bin", e.target.value)}
            placeholder="opencode"
            disabled={saving}
          />
          <p className="text-[11px] text-text-muted mt-1">{t("opencodeServerBinHint")}</p>
        </div>
      </div>
    </Card>
  );
}