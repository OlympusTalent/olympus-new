"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  SAMPLE_JOBS,
  FUNCTIONS,
  CONTRACTS,
  REMOTES,
  type Job,
} from "@/lib/sample-jobs";

/* ── Filter pill component ── */
function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
        active
          ? "border-ot-violet bg-ot-violet/15 text-ot-bone"
          : "border-ot-steel text-ot-smoke hover:border-ot-violet/50 hover:text-ot-ash"
      }`}
    >
      {label}
    </button>
  );
}

/* ── Smart filter pill ── */
function SmartPill({
  label,
  color,
  active,
  onClick,
}: {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
        active
          ? `${color} bg-current/10 text-current border-current/40`
          : "border-ot-steel text-ot-smoke hover:border-ot-violet/50"
      }`}
      style={active ? { borderColor: "currentColor" } : {}}
    >
      {label}
    </button>
  );
}

/* ── Job card ── */
function JobCard({ job }: { job: Job }) {
  const functionColors: Record<string, string> = {
    Payroll: "text-ot-violet",
    HR: "text-ot-cyan",
    "IT & Engineering": "text-ot-signal",
    Finance: "text-ot-warn",
    Sales: "text-ot-magenta",
  };

  return (
    <Link href={`/jobs/${job.slug}`}>
      <div className="grad-border p-6 lg:p-8 data-card group cursor-pointer h-full flex flex-col">
        {/* Top row: function + badges */}
        <div className="flex items-center justify-between mb-4">
          <span className={`eyebrow ${functionColors[job.function] || "text-ot-violet"}`}>
            {job.function}
          </span>
          <div className="flex items-center gap-2">
            {job.urgent && (
              <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-ot-crimson/40 text-ot-crimson">
                Urgent
              </span>
            )}
            {job.featured && (
              <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-ot-violet/40 text-ot-violet">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-ot-violet transition-colors">
          {job.title}
        </h3>

        {/* Company */}
        <p className="text-sm text-ot-ash mb-4">{job.company}</p>

        {/* Summary */}
        <p className="text-sm text-ot-smoke leading-relaxed mb-6 flex-1">
          {job.summary}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
            {job.location}
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
            {job.remote}
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
            {job.contract}
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
            {job.experience}
          </span>
        </div>

        {/* Salary + posted */}
        <div className="flex items-center justify-between pt-4 border-t border-ot-steel/40">
          <span className="font-semibold text-sm">{job.salary}</span>
          <span className="text-xs text-ot-smoke font-mono">{job.posted}</span>
        </div>
      </div>
    </Link>
  );
}

/* ── Main board ── */
export function JobsBoard() {
  const [search, setSearch] = useState("");
  const [funcFilter, setFuncFilter] = useState<string | null>(null);
  const [contractFilter, setContractFilter] = useState<string | null>(null);
  const [remoteFilter, setRemoteFilter] = useState<string | null>(null);
  const [showUrgent, setShowUrgent] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);

  const filtered = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      if (search) {
        const q = search.toLowerCase();
        const haystack =
          `${job.title} ${job.company} ${job.location} ${job.function} ${job.tags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (funcFilter && job.function !== funcFilter) return false;
      if (contractFilter && job.contract !== contractFilter) return false;
      if (remoteFilter && job.remote !== remoteFilter) return false;
      if (showUrgent && !job.urgent) return false;
      if (showFeatured && !job.featured) return false;
      return true;
    });
  }, [search, funcFilter, contractFilter, remoteFilter, showUrgent, showFeatured]);

  const clearAll = () => {
    setSearch("");
    setFuncFilter(null);
    setContractFilter(null);
    setRemoteFilter(null);
    setShowUrgent(false);
    setShowFeatured(false);
  };

  const hasFilters =
    search || funcFilter || contractFilter || remoteFilter || showUrgent || showFeatured;

  return (
    <section className="min-h-screen">
      {/* Hero header */}
      <div className="hero-glow py-20 md:py-28 border-b border-ot-steel/40">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ot-violet/60" />
            <span className="eyebrow text-ot-violet">Live Roles</span>
          </div>
          <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2.2rem,5vw,4rem)] mb-4">
            Access the Talent Market{" "}
            <span className="gradient-text">Properly.</span>
          </h1>
          <p className="text-xl text-ot-ash max-w-2xl leading-relaxed">
            {SAMPLE_JOBS.length.toLocaleString()}+ live roles across Payroll,
            HR, IT &amp; Finance. Every role framed for impact, not job
            descriptions copied from a template.
          </p>

          {/* Search bar */}
          <div className="mt-10 max-w-2xl">
            <div className="glass-strong flex items-center px-5 py-3 gap-3">
              <svg
                className="w-5 h-5 text-ot-smoke flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by role, company, location, or skill..."
                className="w-full bg-transparent text-ot-bone placeholder:text-ot-smoke/60 outline-none text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-ot-smoke hover:text-ot-bone text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-8 flex items-center gap-6 text-xs text-ot-smoke font-mono">
            <span>
              <span className="text-ot-bone font-semibold">1,046</span> live
              roles
            </span>
            <span className="h-3 w-px bg-ot-steel" />
            <span>
              <span className="text-ot-bone font-semibold">140+</span> countries
            </span>
            <span className="h-3 w-px bg-ot-steel" />
            <span>
              <span className="text-ot-bone font-semibold">4</span> verticals
            </span>
            <span className="h-3 w-px bg-ot-steel" />
            <span>
              <span className="text-ot-bone font-semibold">11-day</span> avg
              hire
            </span>
          </div>
        </div>
      </div>

      {/* Filters + Results */}
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Filter bar */}
        <div className="mb-10 space-y-4">
          {/* Function filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-wider uppercase text-ot-smoke mr-2 w-16">
              Function
            </span>
            {FUNCTIONS.map((f) => (
              <Pill
                key={f}
                label={f}
                active={funcFilter === f}
                onClick={() => setFuncFilter(funcFilter === f ? null : f)}
              />
            ))}
          </div>

          {/* Contract filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-wider uppercase text-ot-smoke mr-2 w-16">
              Contract
            </span>
            {CONTRACTS.map((c) => (
              <Pill
                key={c}
                label={c}
                active={contractFilter === c}
                onClick={() =>
                  setContractFilter(contractFilter === c ? null : c)
                }
              />
            ))}
          </div>

          {/* Remote filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-wider uppercase text-ot-smoke mr-2 w-16">
              Location
            </span>
            {REMOTES.map((r) => (
              <Pill
                key={r}
                label={r}
                active={remoteFilter === r}
                onClick={() =>
                  setRemoteFilter(remoteFilter === r ? null : r)
                }
              />
            ))}
          </div>

          {/* Smart filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-wider uppercase text-ot-smoke mr-2 w-16">
              Smart
            </span>
            <SmartPill
              label="Urgent Hires"
              color="text-ot-crimson"
              active={showUrgent}
              onClick={() => setShowUrgent(!showUrgent)}
            />
            <SmartPill
              label="Featured Roles"
              color="text-ot-violet"
              active={showFeatured}
              onClick={() => setShowFeatured(!showFeatured)}
            />
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-[11px] font-mono tracking-wider uppercase text-ot-smoke hover:text-ot-bone ml-2 transition-colors"
              >
                Clear all ✕
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-ot-ash">
            Showing{" "}
            <span className="text-ot-bone font-semibold">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "role" : "roles"}
            {hasFilters && (
              <span className="text-ot-smoke"> (filtered)</span>
            )}
          </p>
          <p className="text-[10px] font-mono tracking-wider uppercase text-ot-smoke">
            Sorted by relevance
          </p>
        </div>

        {/* Job grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-3">No roles match your filters</p>
            <p className="text-ot-ash mb-6">
              Try broadening your search or clearing some filters.
            </p>
            <button onClick={clearAll} className="btn-ghost text-sm">
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center py-12 border-t border-ot-steel/40">
          <p className="text-ot-ash mb-4">
            Don&apos;t see the right role?
          </p>
          <p className="text-xl font-semibold mb-6">
            We fill 70% of roles before they&apos;re ever posted.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/book/advisory" className="btn-primary text-sm">
              Start a Strategic Hiring Conversation{" "}
              <span aria-hidden>→</span>
            </a>
            <a href="/book/career" className="btn-ghost text-sm">
              Register for Priority Access
            </a>
          </div>
          <p className="mt-4 text-xs text-ot-smoke font-mono tracking-wider uppercase">
            This is not a sales call. It&apos;s a diagnostic.
          </p>
        </div>
      </div>
    </section>
  );
}
