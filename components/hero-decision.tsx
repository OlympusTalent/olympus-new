"use client";

import { useEffect, useRef, useState } from "react";

/* -- Hero stat definitions ---------------------------------------- */
const HERO_STATS = [
  { target: 6, prefix: "", suffix: "M+", label: "Global candidate reach", highlight: true },
  { target: 10, prefix: "", suffix: "+ yrs", label: "Zero rebates issued", highlight: true },
  { target: 14, prefix: "", suffix: " wks", label: "Industry avg time-to-hire", highlight: true },
  { target: 14, prefix: "", suffix: " days", label: "Olympus average", highlight: true },
];

/* -- Count-up hook ------------------------------------------------ */
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return value;
}

/* -- Single animated stat card ------------------------------------ */
function HeroStat({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof HERO_STATS)[number];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.target, isVisible, 1400);

  return (
    <div
      className="glass p-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div
        className={`text-4xl md:text-5xl font-black tabular-nums ${
          stat.highlight ? "text-ot-signal" : "gradient-text"
        }`}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm font-semibold text-ot-bone">
        {stat.label}
      </div>
    </div>
  );
}

/* -- Hero section ------------------------------------------------- */
export function HeroDecision() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
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

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #070712 0%, #0a0a1a 40%, #0d0d20 70%, #070712 100%)",
      }}
    >
      {/* Bansenshukai manuscript -- left side, shadowed */}
      <div
        className="absolute left-0 top-0 h-full pointer-events-none select-none"
        style={{ width: "clamp(280px, 35vw, 520px)", zIndex: 1 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Bansenshukai-v8-diagram.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          style={{
            opacity: 0.07,
            filter: "grayscale(100%) contrast(1.2)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-30%",
          zIndex: 2,
          background:
            "radial-gradient(40% 30% at 50% 15%, rgba(139,92,246,0.3), transparent 60%), radial-gradient(50% 40% at 80% 50%, rgba(34,211,238,0.12), transparent 65%), radial-gradient(40% 35% at 15% 60%, rgba(124,58,237,0.2), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div
        className="relative max-w-content mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-24"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-ot-violet/60" />
            <span className="eyebrow text-ot-violet">
              Decision Infrastructure
            </span>
          </div>

          <h1 className="font-sans font-black leading-[1.05] tracking-[-0.035em] text-[clamp(2.4rem,5.5vw,4.8rem)]">
            Most companies don&apos;t have a hiring problem.
            <br />
            <span className="gradient-text">
              They have a decision problem.
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-ot-ash leading-relaxed max-w-2xl font-light">
            Decision infrastructure for hiring across Payroll, HR, IT &amp;
            Finance.{" "}
            <span className="text-ot-bone font-normal">
              6M+ candidate reach. 140+ countries. 14-day hires. 98% retention.
            </span>
          </p>

          <p className="mt-5 text-base md:text-lg text-ot-smoke leading-relaxed max-w-2xl">
            In plain terms: we source, place and retain senior Payroll, HR, IT and
            Finance leaders in 140+ countries — and build the system that makes
            those hires hold.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/book/advisory" className="btn-primary text-base">
              Build a Better Hiring System <span aria-hidden>→</span>
            </a>
            <a href="#problem" className="btn-primary text-base">
              See the Problem
            </a>
          </div>

          <p className="mt-6 text-xs text-ot-smoke font-mono tracking-wider uppercase">
            This is not a sales call. It&apos;s a diagnostic.
          </p>
        </div>

        {/* Data strip -- animated count-up */}
        <div
          ref={stripRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {HERO_STATS.map((stat, i) => (
            <HeroStat
              key={stat.label}
              stat={stat}
              index={i}
              isVisible={visible}
            />
          ))}
        </div>
      </div>

      {/* Bansenshukai doctrine mark -- bottom left */}
      <div
        className="absolute bottom-8 left-6 md:left-12 hidden md:flex items-end gap-3"
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-ot-smoke/20 text-lg tracking-[0.35em]"
            style={{ writingMode: "vertical-rl" }}
          >
            精天地用忍機信改
          </span>
          <span className="h-6 w-px bg-ot-violet/20" />
          <span
            className="text-ot-smoke/25 font-mono text-[9px] tracking-[0.25em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Built on Bansenshukai
          </span>
        </div>
      </div>
    </section>
  );
}
