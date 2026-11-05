"use client";

import { useEffect, useRef, useState } from "react";

type Problem = {
  label: string;
  stat: string;
  numericValue: number | null;
  suffix: string;
  title: string;
  body: string;
  source?: string;
  color: string;
  fill: number;
  gradient?: string;
};

const PROBLEMS: Problem[] = [
  {
    label: "Mis-Hires",
    stat: "46%",
    numericValue: 46,
    suffix: "%",
    title: "Wrong people in critical seats",
    body: "Nearly half of new hires fail within 18 months. Not because the talent isn\u2019t there \u2014 because the decision framework wasn\u2019t. You\u2019re choosing on instinct where you should be choosing on infrastructure.",
    source: "Leadership IQ, study of 20,000+ new hires",
    color: "text-ot-crimson",
    fill: 46,
  },
  {
    label: "Slow Hiring",
    stat: "45 days",
    numericValue: 45,
    suffix: " days",
    title: "Every open week is a P&L line",
    body: "The benchmark time-to-fill for an executive seat is 45 days \u2014 before the notice period even starts. That\u2019s weeks of lost output, team burnout, missed targets, and competitors moving faster. Speed isn\u2019t a nice-to-have. It\u2019s a P&L line.",
    source: "SHRM Recruiting Benchmarking, 2025",
    color: "text-ot-warn",
    fill: 70,
    gradient: "linear-gradient(90deg,#F59E0B,#F97316)",
  },
  {
    label: "Poor Briefs",
    stat: "89%",
    numericValue: 89,
    suffix: "%",
    title: "Garbage in, garbage out",
    body: "89% of hiring failures come down to attitude, not technical skill. Yet most briefs describe tasks, not outcomes. They list qualifications, not culture markers. The brief is where most hires go wrong \u2014 before a single resume is read.",
    source: "Leadership IQ, study of 20,000+ new hires",
    color: "text-ot-magenta",
    fill: 89,
    gradient: "linear-gradient(90deg,#EC4899,#A855F7)",
  },
  {
    label: "Reactive Decisions",
    stat: "Too late",
    numericValue: null,
    suffix: "",
    title: "You\u2019re hiring backwards",
    body: "Most companies only start hiring after the seat is empty. That\u2019s like building a fire escape after the building\u2019s on fire. Strategic hiring is anticipatory. It\u2019s pipeline infrastructure \u2014 built before you need it.",
    color: "text-ot-smoke",
    fill: 100,
    gradient: "linear-gradient(90deg,#4A4A60,#7A7A90)",
  },
];

/* ── animated counter hook ─────────────────────────────────── */
function useCountUp(target: number, isVisible: boolean, duration = 1600) {
  // Initialise to the real target so server-rendered HTML and no-JS / crawler
  // views show the actual number, not 0. The count-up animation still runs once
  // on first reveal in the browser.
  const [value, setValue] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    let start: number | null = null;
    let raf: number;
    setValue(0);

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
function ProblemCard({ p, index }: { p: Problem; index: number }) {
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

  const count = useCountUp(p.numericValue ?? 0, visible);

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
          {p.numericValue === null ? p.stat : (
            <>
              {count}
              {p.suffix}
            </>
          )}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
      <p className="text-ot-ash text-sm leading-relaxed">{p.body}</p>
      {p.source && (
        <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-ot-smoke">
          Source: {p.source}
        </p>
      )}
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
