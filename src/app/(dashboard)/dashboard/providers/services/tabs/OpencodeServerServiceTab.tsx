"use client";

import { OpencodeServerConnectionPanel } from "../components/OpencodeServerConnectionPanel";

// Unlike the other tabs there is deliberately no ServiceStatusCard /
// ServiceLifecycleButtons here: the opencode server is owned by the executor,
// which autostarts it on demand and reuses it across requests. This tab only
// exposes where to reach it and which binary to launch.
export function OpencodeServerServiceTab() {
  return (
    <div className="space-y-4">
      <OpencodeServerConnectionPanel />
    </div>
  );
}