"use client";

import { SiteNav } from "@/components/site-nav";

export default function HireIQPlatformPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen">
        <div className="bg-ot-obsidian border-b border-ot-steel/40 px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[.15em] text-ot-cyan font-mono uppercase">
              HireIQ&#8482; Platform
            </span>
            <span className="h-4 w-px bg-ot-steel" />
            <span className="text-xs text-ot-smoke font-mono">
              Hiring Decision Engine
            </span>
          </div>
          <a
            href="/hireiq"
            className="text-xs text-ot-ash hover:text-ot-bone transition-colors font-mono"
          >
            &larr; Back to Overview
          </a>
        </div>
        <iframe
          src="https://olympus-talent-hub.lovable.app"
          className="w-full border-0"
          style={{ height: "calc(100vh - 112px)" }}
          allow="camera;microphone;clipboard-write"
          title="HireIQ Platform"
        />
      </main>
    </>
  );
}
