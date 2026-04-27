import { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HireIQ\u2122 — Hiring Decision Engine | Olympus Talent",
  description:
    "HireIQ\u2122 is the decision intelligence layer that turns hiring from a guessing game into a governed system. Predictive scoring, culture-match analysis, risk detection, and real-time organisational intelligence.",
  keywords:
    "HireIQ, hiring decision engine, predictive hiring, culture match, hiring analytics, AI recruitment, FIRE protocol",
};

const CAPABILITIES = [
  {
    icon: "\u2B21",
    title: "FIRE Protocol\u2122 Scoring",
    description:
      "Every candidate scored across Fit, Impact, Risk, and Evidence. No gut feel. No guesswork. Structured decision architecture that compounds intelligence with every hire.",
    color: "text-orange-400",
  },
  {
    icon: "\u25C8",
    title: "Culture-Match Engine",
    description:
      "Behavioural signal analysis mapped against your operating environment, leadership style, and team cadence. Predicts cultural alignment before the interview.",
    color: "text-violet-400",
  },
  {
    icon: "\u26A0",
    title: "Red Flag Index",
    description:
      "Real-time risk detection across every candidate and every hire. Surfaces hidden signals — attrition indicators, compliance gaps, behavioural misalignment — before they become problems.",
    color: "text-red-400",
  },
  {
    icon: "\u2B2A",
    title: "AI Insights Engine",
    description:
      "Department-level intelligence with AI-generated risk narratives, performance predictions, and strategic recommendations. See your organisation the way a board-level advisor would.",
    color: "text-cyan-400",
  },
  {
    icon: "\u229A",
    title: "Candidate-Vacancy Matching",
    description:
      "Multi-dimensional matching that goes beyond keywords. Scores alignment across skills, trajectory, environment fit, and predicted performance. Surfaces candidates others miss.",
    color: "text-emerald-400",
  },
  {
    icon: "\u2637",
    title: "Hiring Simulations",
    description:
      "Scenario modelling for workforce planning. Test hiring strategies before committing budget. Model outcomes across timelines, geographies, and talent pools.",
    color: "text-fuchsia-400",
  },
];

const MODULES = [
  { label: "Decision Scores", desc: "FIRE Protocol\u2122 output for every candidate" },
  { label: "AI Insights", desc: "Department intelligence, risk narratives, predictions" },
  { label: "Match Results", desc: "Candidate-vacancy alignment scoring" },
  { label: "Org Dashboard", desc: "Real-time organisational health metrics" },
  { label: "Hiring Simulations", desc: "Scenario modelling and outcome forecasting" },
  { label: "Shortlist Management", desc: "Curated candidate pipelines with scoring" },
  { label: "Interventions", desc: "AI-recommended actions from scoring signals" },
  { label: "Org Signal", desc: "Live organisational intelligence feed" },
];

export default function HireIQPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* ── Hero ── */}
        <section className="hero-glow py-16 md:py-28 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-cyan/60" />
              <span className="eyebrow text-ot-cyan">
                Hiring Decision Engine
              </span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,5vw,4.5rem)] max-w-4xl">
              HireIQ&#8482;
              <br />
              <span className="gradient-text">
                The intelligence layer your hiring doesn&apos;t have.
              </span>
            </h1>
            <p className="mt-8 text-xl text-ot-ash max-w-2xl leading-relaxed">
              Most companies hire on instinct. HireIQ turns hiring into a
              governed system — predictive scoring, behavioural analysis,
              risk detection, and real-time organisational intelligence.
              Every decision backed by data. Every hire engineered for
              performance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="/hireiq/platform" className="btn-primary text-base">
                Launch HireIQ Platform <span aria-hidden>\u2192</span>
              </a>
              <a href="/book/demo" className="btn-ghost text-base">
                Book a Demo
              </a>
            </div>
            <p className="mt-6 text-xs text-ot-smoke font-mono tracking-wider uppercase">
              Available on Ascend, Velocity, Titan &amp; Black tiers
            </p>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 md:py-20 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <span className="eyebrow text-ot-violet mb-6 block">
                The Problem It Solves
              </span>
              <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(1.8rem,4vw,3rem)]">
                Your hiring decisions are unstructured,
                unrepeatable, and unmeasured.
              </h2>
              <p className="mt-6 text-lg text-ot-ash leading-relaxed">
                Ask your hiring managers why they chose their last hire.
                You&apos;ll get a different framework every time — if you get
                one at all. That&apos;s not a hiring process.
                That&apos;s organisational risk disguised as recruitment.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "67%", label: "of hires fail within 18 months" },
                  { stat: "\u00A3240k", label: "average cost of a mis-hire" },
                  { stat: "0%", label: "of companies measure decision quality" },
                ].map((s) => (
                  <div key={s.label} className="glass p-5 text-center">
                    <div className="text-2xl font-bold gradient-text">
                      {s.stat}
                    </div>
                    <div className="mt-2 text-xs text-ot-smoke font-mono uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-cyan mb-6 block">
              Core Capabilities
            </span>
            <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(1.8rem,4vw,3rem)] max-w-3xl mb-12">
              Six intelligence layers.
              <br />
              <span className="gradient-text">One decision system.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="glass-strong p-6">
                  <span className={`text-2xl ${cap.color}`}>
                    {cap.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ot-bone">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm text-ot-ash leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platform Modules ── */}
        <section className="py-16 md:py-24 border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-violet mb-6 block">
              Platform Modules
            </span>
            <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(1.8rem,4vw,3rem)] max-w-3xl mb-12">
              Everything connects.
              <br />
              <span className="gradient-text">Nothing operates in a silo.</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MODULES.map((mod) => (
                <div key={mod.label} className="grad-border p-5">
                  <p className="text-sm font-bold text-ot-bone">
                    {mod.label}
                  </p>
                  <p className="mt-2 text-xs text-ot-ash leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-16 md:py-24 border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-signal mb-6 block">
              How It Works
            </span>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Connect",
                  desc: "We integrate with your existing systems — HRIS, ATS, payroll. HireIQ maps your organisational DNA.",
                },
                {
                  step: "02",
                  title: "Score",
                  desc: "Every candidate runs through the FIRE Protocol\u2122. Fit, Impact, Risk, Evidence — scored and ranked automatically.",
                },
                {
                  step: "03",
                  title: "Decide",
                  desc: "Decision-makers see structured intelligence, not CVs. Predictive alignment, risk flags, and outcome probability.",
                },
                {
                  step: "04",
                  title: "Learn",
                  desc: "The system compounds. Every hire improves the model. Every outcome refines predictions. Your hiring gets smarter over time.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <span className="text-3xl font-black gradient-text">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ot-bone">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ot-ash leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-28 border-t border-ot-steel/40 hero-glow">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(2rem,5vw,3.5rem)] max-w-3xl mx-auto">
              Stop guessing.
              <br />
              <span className="gradient-text">Start engineering outcomes.</span>
            </h2>
            <p className="mt-6 text-lg text-ot-ash max-w-2xl mx-auto leading-relaxed">
              HireIQ is available as part of the Olympus Talent OS\u2122 on
              Ascend tier and above. Book a demo to see the decision engine
              in action.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/hireiq/platform" className="btn-primary text-base">
                Launch HireIQ Platform <span aria-hidden>\u2192</span>
              </a>
              <a href="/book/demo" className="btn-ghost text-base">
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
