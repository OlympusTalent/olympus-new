"use client";

import { useEffect, useRef, useState } from "react";

const PROBLEMS = [
  {
    label: "Mis-Hires",
    stat: "67%",
    numericValue: 67,
    suffix: "%",
    title: "Wrong people in critical seats",
    body: "Two-thirds of senior hires fail within 18 months. Not because the talent isn\u2019t there \u2014 because the decision framework wasn\u2019t. You\u2019re choosing on instinct where you should be choosing on infrastructure.",
    color: "text-ot-crimson",
    barColor: undefined as string | undefined,
    fill: 67,
    gradient: undefined as string | undefined,
  },
  {
    label: "Slow Hiring",
    stat: "14 weeks",
    numericValue: 14,
    suffix: " weeks",
    title: "Every week costs you \u00A334k",
    body: "The average enterprise vacancy sits open for 14 weeks. That\u2019s 14 weeks of productivity loss, team burnout, missed targets, and competitors moving faster. Speed isn\u2019t a nice-to-have. It\u2019s a P&L line.",
    color: "text-ot-warn",
    barColor: undefined as string | undefined,
    fill: 85,
    gradient: "linear-gradient(90deg,#F59E0B,#F97316)",
  },
  {
    label: "Poor Briefs",
    stat: "82%",
    numericValue: 82,
    suffix: "%",
    title: "Garbage in, garbage out",
    body: "82% of hiring briefs lack the strategic context needed to source effectively. They describe tasks, not outcomes. They list qualifications, not culture markers. The brief is where most hires go wrong \u2014 before a single CV is read.",
    color: "text-ot-magenta",
    barColor: undefined as string | undefined,
    fill: 82,
    gradient: "linear-gradient(90deg,#EC4899,#A855F7)",
  },
  {
    label: "Reactive Decisions",
    stat: "91%",
    numericValue: 91,
    suffix: "%",
    title: "You\u2019re hiring backwards",
    body: "91% of companies only start hiring after the seat is empty. That\u2019s like building a fire escape after the building\u2019s on fire. Strategic hiring is anticipatory. It\u2019s pipeline infrastructure \u2014 built before you need it.",
    color: "text-ot-smoke",
    barColor: undefined as string | undefined,
    fill: 91,
    gradient: "linear-gradient(90deg,#4A4A60,#7A7A90)",
  },
];

/* ── animated counter hook ─────────────────────────────────── */
function useCountUp(target: number, isVisible: boolean, duration = 1600) {
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

/* ── single problem card ───────────────────────────────────── */
function ProblemCard({ p, index }: { p: (typeof PROBLEMS)[number]; index: number }) {
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(p.numericValue, visible);

  return (
    <div
      ref={ref}
      className="grad-border p-8 lg:p-10 data-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className={`eyebrow ${p.color}`}>{p.label}</span>
        <span className={`text-2xl font-bold tabular-nums ${p.color}`}>
          {count}
          {p.suffix}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
      <p className="text-ot-ash text-sm leading-relaxed">{p.body}</p>
      <div className="mt-6 progress-bar">
        <div
          className="progress-fill"
          style={{
            width: visible ? `${p.fill}%` : "0%",
            ...(p.gradient ? { background: p.gradient } : {}),
            transition: "width 1.4s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}
        />
      </div>
    </div>
  );
}

/* ── section ───────────────────────────────────────────────── */
export function TheProblem() {
  return (
    <section id="problem" className="py-28 md:py-36 border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow text-ot-crimson">01 / The Problem</span>
          <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
            Your hiring process is a liability.
            <br />
            <span className="text-ot-ash">Here&apos;s the proof.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => (
            <ProblemCard key={p.label} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
