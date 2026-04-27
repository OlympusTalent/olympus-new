import { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Subscription Model — Olympus Talent",
  description:
    "Recruitment is not a service. It is operational infrastructure. Five tiers from execution support to embedded talent function. Predictable cost, measurable outcomes.",
  keywords:
    "recruitment subscription, hiring infrastructure, talent subscription model, embedded recruitment, RPO alternative",
};

const TIERS = [
  {
    name: "Ignite",
    tag: "Execution Support Layer",
    price: "$7,500",
    roles: "Up to 2 roles",
    color: "from-orange-400 to-amber-500",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/10",
    features: [
      "End-to-end delivery — shortlisting, scheduling, offer management",
      "Client portal for full visibility",
      "Structured process, reduced friction",
      "Fixed monthly cost — no per-hire fees",
    ],
    outcome: "Controlled hiring execution without chaos",
    vs: "Hays / Robert Half / PageGroup",
    vsLine:
      "Hays gives you access to the market. We give you control over hiring outcomes.",
    bestFor:
      "Early-stage or scaling businesses, teams without internal recruitment bandwidth, urgent hires where speed matters.",
    buying: "Execution capacity",
  },
  {
    name: "Ascend",
    tag: "Intelligence Layer",
    price: "$12,500",
    roles: "Up to 5 roles",
    color: "from-violet-400 to-purple-500",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    features: [
      "Everything in Ignite",
      "AI Culture-Match Engine",
      "HireIQ\u2122 Analytics suite — predictive alignment scoring",
      "Olympia Assist — AI automation layer",
      "Behavioural signal analysis",
    ],
    outcome:
      "Data-led hiring decisions. The shift from filling roles to engineering hiring outcomes.",
    vs: "JGA / Portfolio Payroll (Specialists)",
    vsLine:
      "They understand payroll. We understand what makes someone succeed in your payroll function.",
    bestFor:
      "Scale-ups, businesses hiring across multiple functions, leaders who want consistency and insight.",
    buying: "Decision intelligence",
  },
  {
    name: "Velocity",
    tag: "Integration + Control Layer",
    price: "$18,500+",
    roles: "Up to 10 roles",
    color: "from-cyan-400 to-teal-500",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/10",
    popular: true,
    features: [
      "Everything in Ascend",
      "Compliance tools + Red Flag Index (risk detection)",
      "Performance analytics with outcome tracking",
      "Integrations hub — HRIS, ATS, payroll systems",
      "Dedicated Customer Success Manager",
    ],
    outcome:
      "Unified hiring infrastructure. Hiring becomes governed, measurable, and systemised.",
    vs: "Internal TA + Agencies Combined",
    vsLine:
      "You don\u2019t have a hiring team. You have disconnected hiring activity.",
    bestFor:
      "Mid-market and scaling enterprises, multi-region hiring, businesses with compliance exposure.",
    buying: "System integration",
  },
  {
    name: "Titan",
    tag: "Strategic Workforce Layer",
    price: "$25,500+",
    roles: "Up to 20 roles",
    color: "from-fuchsia-400 to-pink-500",
    border: "border-fuchsia-500/30",
    glow: "shadow-fuchsia-500/10",
    features: [
      "Everything in Velocity",
      "Retention audits with root-cause analysis",
      "DEI diagnostics with action frameworks",
      "Executive-level reporting + board packs",
      "C-suite workforce strategy sessions",
    ],
    outcome:
      "Board-level hiring infrastructure. Hiring becomes a strategic lever, not an operational function.",
    vs: "Executive Search (Heidrick, Korn Ferry)",
    vsLine:
      "Executive search ends at placement. We start there.",
    bestFor:
      "Large enterprises, organisations hiring globally, businesses where hiring impacts valuation, scale, or risk.",
    buying: "Strategic workforce control",
  },
  {
    name: "Black",
    tag: "Embedded Talent Function",
    price: "$50,000+",
    roles: "Unlimited roles",
    color: "from-white to-zinc-300",
    border: "border-white/20",
    glow: "shadow-white/5",
    features: [
      "Everything in Titan",
      "Fully embedded recruitment model across business units",
      "Continuous workforce strategy + optimisation",
      "Full executive advisory layer",
      "Equivalent to Head of Talent + TA team + Strategy function + Data layer + Execution engine",
    ],
    outcome:
      "An outsourced, elite Talent function embedded inside your company. You don\u2019t need more recruiters. You need ownership of hiring outcomes.",
    vs: "The Entire Category",
    vsLine:
      "Every option you\u2019re considering solves one part of hiring. We solve the part that determines whether the hire actually works.",
    bestFor:
      "Global enterprises, hyper-growth companies, PE/VC-backed scale-ups, organisations hiring across multiple continents simultaneously.",
    buying: "Full talent infrastructure",
  },
];

const COMPETITORS = [
  { name: "Hays", execution: true, intelligence: false, integration: false, strategy: false },
  { name: "JGA / Portfolio", execution: true, intelligence: false, integration: false, strategy: false },
  { name: "Deel Talent", execution: true, intelligence: false, integration: true, strategy: false },
  { name: "Internal TA", execution: true, intelligence: "partial", integration: "partial", strategy: "partial" },
  { name: "Olympus Talent", execution: true, intelligence: true, integration: true, strategy: true },
];

function Check() {
  return <span className="text-ot-signal text-lg">&#10003;</span>;
}
function Cross() {
  return <span className="text-red-400/60 text-lg">&#10007;</span>;
}
function Partial() {
  return <span className="text-amber-400/60 text-sm font-mono">Partial</span>;
}

function CellContent({ value }: { value: boolean | string }) {
  if (value === true) return <Check />;
  if (value === "partial") return <Partial />;
  return <Cross />;
}

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* ── Hero ── */}
        <section className="hero-glow py-16 md:py-28 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">
                Subscription Model
              </span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,5vw,4rem)] max-w-4xl">
              Recruitment is not a service.
              <br />
              <span className="gradient-text">
                It is operational infrastructure.
              </span>
            </h1>
            <p className="mt-8 text-xl text-ot-ash max-w-2xl leading-relaxed">
              Each tier represents a different level of organisational hiring
              maturity — from reactive execution to fully embedded global
              talent systems. Fixed monthly investment. Measurable outcomes.
              No placement fees. Ever.
            </p>
          </div>
        </section>

        {/* ── The Commercial Truth ── */}
        <section className="py-16 md:py-20 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="eyebrow text-ot-cyan mb-8">
              Which tier fits your reality?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { condition: "Hiring is chaotic", tier: "Ignite" },
                { condition: "Hiring is inconsistent", tier: "Ascend" },
                { condition: "Hiring is complex", tier: "Velocity" },
                { condition: "Hiring affects business outcomes", tier: "Titan" },
                { condition: "Hiring is the business constraint", tier: "Black" },
              ].map((item) => (
                <div key={item.tier} className="glass p-5">
                  <p className="text-sm text-ot-ash">
                    If your{" "}
                    <span className="text-ot-bone font-semibold">
                      {item.condition}
                    </span>
                  </p>
                  <p className="mt-2 text-lg font-bold gradient-text">
                    → {item.tier}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tiers ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="space-y-8">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative glass-strong p-8 md:p-10 ${tier.border} ${tier.glow} ${
                    tier.popular ? "ring-1 ring-cyan-400/30" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-8 bg-gradient-to-r from-cyan-400 to-teal-500 text-[#070712] text-[10px] font-bold tracking-[.15em] uppercase px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left — Identity */}
                    <div className="lg:col-span-4">
                      <h3
                        className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}
                      >
                        {tier.name}
                      </h3>
                      <p className="mt-1 text-sm text-ot-smoke font-mono uppercase tracking-wider">
                        {tier.tag}
                      </p>
                      <div className="mt-6">
                        <span className="text-3xl font-bold text-ot-bone">
                          {tier.price}
                        </span>
                        <span className="text-sm text-ot-smoke">/month</span>
                      </div>
                      <p className="mt-1 text-xs text-ot-smoke font-mono">
                        {tier.roles} actively managed
                      </p>

                      <div className="mt-6">
                        <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider mb-2">
                          What you&apos;re buying
                        </p>
                        <p className="text-sm text-ot-violet font-semibold">
                          {tier.buying}
                        </p>
                      </div>

                      <a
                        href="/book/advisory"
                        className="btn-primary !py-2.5 !px-5 text-sm mt-6 inline-flex"
                      >
                        Book a Diagnostic <span aria-hidden>→</span>
                      </a>
                    </div>

                    {/* Middle — Features */}
                    <div className="lg:col-span-4">
                      <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider mb-4">
                        What&apos;s included
                      </p>
                      <div className="space-y-3">
                        {tier.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-start gap-2 text-sm text-ot-ash"
                          >
                            <span className="text-ot-signal mt-0.5 shrink-0">
                              &#10003;
                            </span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 grad-border p-4">
                        <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider mb-2">
                          Outcome
                        </p>
                        <p className="text-sm text-ot-bone leading-relaxed">
                          {tier.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Right — Competitive position */}
                    <div className="lg:col-span-4">
                      <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider mb-4">
                        vs {tier.vs}
                      </p>
                      <blockquote className="text-[15px] text-ot-bone leading-relaxed italic border-l-2 border-ot-violet/40 pl-4">
                        &ldquo;{tier.vsLine}&rdquo;
                      </blockquote>
                      <div className="mt-6">
                        <p className="text-xs text-ot-smoke font-mono uppercase tracking-wider mb-2">
                          Best for
                        </p>
                        <p className="text-sm text-ot-ash leading-relaxed">
                          {tier.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Competitor Comparison ── */}
        <section className="py-16 md:py-24 border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-cyan/60" />
              <span className="eyebrow text-ot-cyan">The Market Gap</span>
            </div>
            <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(1.8rem,4vw,3rem)] max-w-3xl">
              No competitor combines all four.
              <br />
              <span className="gradient-text">We do.</span>
            </h2>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-ot-steel/40">
                    <th className="text-left py-4 pr-6 text-sm text-ot-smoke font-mono uppercase tracking-wider">
                      Competitor
                    </th>
                    <th className="py-4 px-4 text-center text-sm text-ot-smoke font-mono uppercase tracking-wider">
                      Execution
                    </th>
                    <th className="py-4 px-4 text-center text-sm text-ot-smoke font-mono uppercase tracking-wider">
                      Intelligence
                    </th>
                    <th className="py-4 px-4 text-center text-sm text-ot-smoke font-mono uppercase tracking-wider">
                      Integration
                    </th>
                    <th className="py-4 px-4 text-center text-sm text-ot-smoke font-mono uppercase tracking-wider">
                      Strategy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((c) => (
                    <tr
                      key={c.name}
                      className={`border-b border-ot-steel/20 ${
                        c.name === "Olympus Talent"
                          ? "bg-ot-violet/5"
                          : ""
                      }`}
                    >
                      <td
                        className={`py-4 pr-6 text-sm ${
                          c.name === "Olympus Talent"
                            ? "text-ot-bone font-bold"
                            : "text-ot-ash"
                        }`}
                      >
                        {c.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CellContent value={c.execution} />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CellContent value={c.intelligence} />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CellContent value={c.integration} />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CellContent value={c.strategy} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── The Strategic Reframe ── */}
        <section className="py-16 md:py-24 border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow text-ot-violet mb-6 block">
                The Strategic Reframe
              </span>
              <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] text-[clamp(1.8rem,4vw,3rem)]">
                Stop comparing us to recruiters.
                <br />
                <span className="gradient-text">
                  That&apos;s the wrong benchmark.
                </span>
              </h2>

              <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
                {[
                  { tier: "Ignite", vs: "wasted leadership time" },
                  { tier: "Ascend", vs: "mis-hires" },
                  { tier: "Velocity", vs: "fragmented systems" },
                  { tier: "Titan", vs: "poor workforce strategy" },
                  { tier: "Black", vs: "organisational drag" },
                ].map((item) => (
                  <div key={item.tier} className="glass p-5">
                    <p className="text-sm font-bold text-ot-bone">
                      {item.tier}
                    </p>
                    <p className="mt-1 text-sm text-ot-ash">
                      Compare against{" "}
                      <span className="text-ot-violet font-semibold">
                        {item.vs}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16 grad-border p-8">
                <p className="text-xl md:text-2xl text-ot-bone leading-relaxed font-light">
                  &ldquo;Every company eventually builds a hiring system.
                  <br />
                  <span className="font-semibold gradient-text">
                    Most just don&apos;t realise they&apos;ve built a bad
                    one.
                  </span>
                  &rdquo;
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/book/advisory"
                  className="btn-primary text-base"
                >
                  Start a Strategic Hiring Conversation{" "}
                  <span aria-hidden>→</span>
                </a>
                <a href="/book/diagnostic" className="btn-ghost text-base">
                  Run the Diagnostic
                </a>
              </div>

              <p className="mt-6 text-xs text-ot-smoke font-mono tracking-wider uppercase">
                This is not a sales call. It&apos;s a diagnostic.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Subscription Wins ── */}
        <section className="py-16 md:py-24 border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="eyebrow text-red-400 mb-4 block">
                  Traditional Recruitment
                </span>
                <div className="space-y-3">
                  {[
                    "Transactional — paid per placement",
                    "Reactive — no learning between hires",
                    "Incentivised by volume and speed",
                    "No accountability post-placement",
                    "Cost: 25\u201335% per hire (unpredictable)",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-ot-ash"
                    >
                      <span className="text-red-400/60 mt-0.5 shrink-0">
                        &#10007;
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ot-signal mb-4 block">
                  Olympus Subscription
                </span>
                <div className="space-y-3">
                  {[
                    "Continuous — embedded in your operations",
                    "Predictive — learns and improves over time",
                    "Incentivised by outcomes and retention",
                    "Accountable beyond placement",
                    "Fixed monthly — predictable, scalable",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm text-ot-ash"
                    >
                      <span className="text-ot-signal mt-0.5 shrink-0">
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
