"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Card, Button, Input } from "@/shared/components";

interface MfaStatus {
  enabled: boolean;
  backupCodesRemaining: number;
  recoverySwitchSet: boolean;
}

interface Enrollment {
  secret: string;
  qrCodeDataUri: string;
}

type Mode = "idle" | "start" | "verify" | "codes" | "disable";

async function postJson(url: string, body: Record<string, string>) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

async function fetchMfaStatus(): Promise<MfaStatus | null> {
  try {
    const res = await fetch("/api/auth/mfa/status");
    return res.ok ? ((await res.json()) as MfaStatus) : null;
  } catch {
    // The card stays in its loading state; the rest of the tab keeps working.
    return null;
  }
}

function errorMessage(data: unknown, fallback: string): string {
  const error = (data as { error?: unknown } | null)?.error;
  if (typeof error === "string") return error;
  if (error && typeof (error as { message?: unknown }).message === "string") {
    return (error as { message: string }).message;
  }
  return fallback;
}

/**
 * Settings → Security: opt-in TOTP two-factor login for the dashboard (and `omniroute
 * connect`). Enrollment is two-step — the secret is only stored once a code from the
 * authenticator verifies — and the recovery codes are shown exactly once.
 */
export default function MfaSection() {
  const t = useTranslations("settings");
  const tc = useTranslations("common");
  const [status, setStatus] = useState<MfaStatus | null>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const loadStatus = () => {
    void fetchMfaStatus().then((next) => {
      if (next) setStatus(next);
    });
  };

  useEffect(() => {
    let active = true;
    void fetchMfaStatus().then((next) => {
      if (active && next) setStatus(next);
    });
    return () => {
      active = false;
    };
  }, []);

  const reset = (next: Mode = "idle") => {
    setMode(next);
    setPassword("");
    setCode("");
    setError("");
    if (next === "idle") setEnrollment(null);
  };

  const startEnrollment = async () => {
    setBusy(true);
    setError("");
    const { ok, data } = await postJson("/api/auth/mfa/setup", { password });
    setBusy(false);
    if (!ok) {
      setError(errorMessage(data, t("errorOccurred")));
      return;
    }
    setEnrollment({ secret: data.secret, qrCodeDataUri: data.qrCodeDataUri });
    setCode("");
    setMode("verify");
  };

  const confirmEnrollment = async () => {
    if (!enrollment) return;
    setBusy(true);
    setError("");
    const { ok, data } = await postJson("/api/auth/mfa/enable", {
      password,
      secret: enrollment.secret,
      code,
    });
    setBusy(false);
    if (!ok) {
      setError(errorMessage(data, t("errorOccurred")));
      return;
    }
    setBackupCodes(Array.isArray(data.backupCodes) ? data.backupCodes : []);
    setEnrollment(null);
    setPassword("");
    setCode("");
    setMode("codes");
    loadStatus();
  };

  const disable = async () => {
    setBusy(true);
    setError("");
    const { ok, data } = await postJson("/api/auth/mfa/disable", { password, code });
    setBusy(false);
    if (!ok) {
      setError(errorMessage(data, t("errorOccurred")));
      return;
    }
    reset();
    loadStatus();
  };

  const copyBackupCodes = async () => {
    try {
      await navigator.clipboard.writeText(backupCodes.join("\n"));
    } catch {
      // Clipboard can be unavailable (http, permissions): the codes stay on screen.
    }
  };

  const enabled = status?.enabled === true;

  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            phonelink_lock
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{t("mfaTitle")}</h3>
          <p className="text-sm text-text-muted">{t("mfaDesc")}</p>
        </div>
        {status && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-md ${
              enabled
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-black/[0.04] dark:bg-white/[0.06] text-text-muted"
            }`}
          >
            {enabled ? tc("enabled") : tc("disabled")}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {status?.recoverySwitchSet && (
          <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            {t("mfaRecoverySwitchActive")}
          </p>
        )}

        {mode === "codes" && (
          <div className="flex flex-col gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
            <p className="font-medium">{t("mfaBackupCodesTitle")}</p>
            <p className="text-sm text-text-muted">{t("mfaBackupCodesDesc")}</p>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              {backupCodes.map((backupCode) => (
                <code
                  key={backupCode}
                  className="px-2 py-1 rounded bg-black/[0.04] dark:bg-white/[0.06]"
                >
                  {backupCode}
                </code>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" icon="content_copy" onClick={copyBackupCodes}>
                {tc("copy")}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setBackupCodes([]);
                  reset();
                }}
              >
                {tc("done")}
              </Button>
            </div>
          </div>
        )}

        {mode === "idle" && status && (
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              {enabled
                ? t("mfaBackupCodesRemaining", { count: status.backupCodesRemaining })
                : t("mfaRecoveryHint")}
            </p>
            <Button
              variant={enabled ? "secondary" : "primary"}
              size="sm"
              onClick={() => reset(enabled ? "disable" : "start")}
            >
              {enabled ? t("disable") : t("enable")}
            </Button>
          </div>
        )}

        {mode === "start" && (
          <div className="flex flex-col gap-3">
            <Input
              label={t("currentPassword")}
              type="password"
              placeholder={t("enterCurrentPassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              disabled={busy}
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => reset()} disabled={busy}>
                {tc("cancel")}
              </Button>
              <Button
                variant="primary"
                onClick={startEnrollment}
                loading={busy}
                disabled={!password}
              >
                {tc("continue")}
              </Button>
            </div>
          </div>
        )}

        {mode === "verify" && enrollment && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-text-muted">{t("mfaScanQr")}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* eslint-disable-next-line @next/next/no-img-element -- server-rendered PNG data URI; next/image adds nothing for an inline QR */}
              <img
                src={enrollment.qrCodeDataUri}
                alt={t("mfaTitle")}
                width={180}
                height={180}
                className="rounded-lg bg-white p-2"
              />
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-xs font-medium text-text-muted">{t("mfaManualKey")}</p>
                <code className="font-mono text-sm break-all select-all">{enrollment.secret}</code>
              </div>
            </div>
            <Input
              label={t("mfaCodeLabel")}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoFocus
              disabled={busy}
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => reset()} disabled={busy}>
                {tc("cancel")}
              </Button>
              <Button variant="primary" onClick={confirmEnrollment} loading={busy} disabled={!code}>
                {t("enable")}
              </Button>
            </div>
          </div>
        )}

        {mode === "disable" && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-text-muted">{t("mfaDisableDesc")}</p>
            <Input
              label={t("currentPassword")}
              type="password"
              placeholder={t("enterCurrentPassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              disabled={busy}
            />
            <Input
              label={t("mfaCodeLabel")}
              type="text"
              autoComplete="one-time-code"
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={busy}
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => reset()} disabled={busy}>
                {tc("cancel")}
              </Button>
              <Button
                variant="danger"
                onClick={disable}
                loading={busy}
                disabled={!password || !code}
              >
                {t("disable")}
              </Button>
            </div>
          </div>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </Card>
  );
}
