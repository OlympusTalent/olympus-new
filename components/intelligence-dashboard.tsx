"use client";

import { useEffect, useRef, useState } from "react";

/* ── cohort stat definitions ───────────────────────────────── */
const COHORT_STATS = [
  {
    target: 140,
    suffix: "+",
    label: "Countries Covered",
    sub: "Active delivery in every time zone",
  },
  {
    target: 98,
    suffix: "%",
    label: "12-Month Retention",
    sub: "Industry average: 71%",
  },
  {
    target: 14,
    suffix: " days",
    label: "Average Time-to-Hire",
    sub: "Industry average: 14 weeks",
  },
  {
    target: 1046,
    suffix: "",
    label: "Live Roles Right Now",
    sub: "Across all four verticals",
  },
];

/* ── count-up hook ─────────────────────────────────────────── */
function useCountUp(target: number, isVisible: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return value;
}

/* ── single animated stat card ─────────────────────────────── */
function StatCard({
  stat,
  index,
}: {
  stat: (typeof COHORT_STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(stat.target, visible, stat.target > 100 ? 2200 : 1600);

  const formatted =
    stat.target >= 1000 ? count.toLocaleString("en-GB") : String(count);

  return (
    <div
      ref={ref}
      className="glass p-6 text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="text-4xl font-bold gradient-text tabular-nums">
        {formatted}
        {stat.suffix}
      </div>
      <p className="mt-2 font-semibold text-sm">{stat.label}</p>
      <p className="text-xs text-ot-smoke mt-1">{stat.sub}</p>
    </div>
  );
}

/* ── section ───────────────────────────────────────────────── */
export function IntelligenceDashboard() {
  return (
    <section
      id="intelligence"
      className="py-28 md:py-36 bg-ot-midnight border-t border-ot-steel/40 section-glow"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <span className="eyebrow text-ot-violet">
            06 / Precision Intelligence
          </span>
          <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
            Real Hiring Intelligence.
            <br />
            <span className="gradient-text">Not Recruiter Promises.</span>
          </h2>
          <p className="mt-6 text-lg text-ot-ash max-w-2xl mx-auto leading-relaxed">
            Every engagement is backed by deep, actionable intelligence.
            Here&apos;s a snapshot of the data layer running behind every Olympus
            placement.
          </p>
        </div>

        {/* Sample Engagement Profile */}
        <div className="glass-strong p-8 lg:p-10 max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ot-violet/20 flex items-center justify-center">
                <span className="text-ot-violet text-lg">&#x29C9;</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Sample Engagement Profile
                </h3>
                <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider">
                  Confidential Intelligence Snapshot
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-ot-signal/40 text-ot-signal">
              Active Engagement
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-ot-smoke mb-1.5">
                Role
              </p>
              <p className="font-semibold text-[15px]">Global Head of Payroll</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-ot-smoke mb-1.5">
                Company Scale
              </p>
              <p className="font-semibold text-[15px]">5,000&ndash;10,000 employees</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-ot-smoke mb-1.5">
                Hiring Budget
              </p>
              <p className="font-semibold text-[15px]">$2.5M&ndash;$5M Annual</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-ot-smoke mb-1.5">
                Urgency
              </p>
              <p className="font-semibold text-[15px] text-ot-signal">Q2 2026 Start</p>
            </div>
          </div>

          <div className="border-t border-ot-steel/50 pt-6 mb-6">
            <p className="text-[11px] font-mono uppercase tracking-wider text-ot-violet mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ot-violet" />
              Strategic Priorities
            </p>
            <p className="text-ot-ash/90 text-[15px] leading-[1.7]">
              Multi-country payroll consolidation across EMEA and APAC. Migrating
              from legacy in-house system to Dayforce. Need a leader who has run
              a 20+ country implementation and can manage vendor relationships at
              C-suite level.
            </p>
          </div>

          <div className="flex gap-2.5 flex-wrap">
            {[
              "Dayforce Migration",
              "Multi-Country",
              "EMEA + APAC",
              "C-Suite Stakeholders",
              "Vendor Management",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel/80 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Cohort Stats — animated count-up */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {COHORT_STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
