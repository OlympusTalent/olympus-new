import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Insights — The Signal | Olympus Talent",
  description:
    "The Signal — hiring intelligence from Olympus Talent. Market reports, salary benchmarks and decision frameworks for Payroll, HR, IT and Finance leaders. Launching soon.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights — The Signal | Olympus Talent",
    description:
      "Hiring intelligence for people who build infrastructure. Launching soon.",
    type: "website",
  },
};

const STRANDS = [
  {
    glyph: "地",
    title: "Market & Salary Intelligence",
    body: "Salary bands, talent density and competitor movement across 140+ countries — the terrain behind every hire.",
    accent: "text-ot-violet",
  },
  {
    glyph: "用",
    title: "The Olympus Method",
    body: "Decision frameworks, scorecards and the protocols we use to turn hiring from a guessing game into an engineered outcome.",
    accent: "text-ot-cyan",
  },
  {
    glyph: "精",
    title: "Function Deep-Dives",
    body: "What actually predicts success when hiring for Payroll, HR, Finance and Engineering leadership — beyond the CV.",
    accent: "text-ot-signal",
  },
  {
    glyph: "改",
    title: "Hiring Reports",
    body: "Quarterly reads on where the talent market is moving, what's breaking, and where the next advantage is hiding.",
    accent: "text-ot-magenta",
  },
];

export default function InsightsPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero */}
        <section className="hero-glow py-24 md:py-32 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Insights · The Signal</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-ot-violet/30 bg-ot-violet/10">
              <span className="h-2 w-2 rounded-full bg-ot-signal animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-ot-bone">
                First issue dropping soon
              </span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2.2rem,5vw,4.6rem)] max-w-4xl">
              Intelligence for people who
              <br />
              <span className="gradient-text">build hiring infrastructure.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ot-ash leading-relaxed max-w-3xl font-light">
              The Signal is Olympus Talent&apos;s thinking made public — market
              intelligence, decision frameworks and reports for leaders who hire
              like it matters. We&apos;re building the first issue now.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ian@olympus-talent.com?subject=Notify%20me%20when%20The%20Signal%20launches"
                className="btn-primary text-base"
              >
                Get notified at launch <span aria-hidden>→</span>
              </a>
              <Link href="/book/advisory" className="btn-ghost text-base">
                Talk to Olympus now
              </Link>
            </div>
          </div>
        </section>

        {/* What's coming */}
        <section className="py-20 md:py-28 section-glow">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              <span className="eyebrow text-ot-cyan">What&apos;s Coming</span>
              <h2 className="mt-4 font-sans font-black text-3xl md:text-4xl tracking-[-0.02em]">
                Four strands of signal — no noise.
              </h2>
              <p className="mt-5 text-lg text-ot-ash leading-relaxed">
                No recycled think-pieces. Just the intelligence we use to place
                senior talent in 140+ countries, written for the people making
                the decisions.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {STRANDS.map((s) => (
                <div key={s.title} className="glass data-card p-8">
                  <div className="text-3xl mb-4 text-ot-bone/90">{s.glyph}</div>
                  <h3 className={"font-bold text-xl " + s.accent}>{s.title}</h3>
                  <p className="mt-3 text-ot-ash leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notify band */}
        <section className="py-20 md:py-28 bg-ot-midnight border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-[-0.02em] max-w-2xl mx-auto">
              Be first to read{" "}
              <span className="gradient-text">The Signal.</span>
            </h2>
            <p className="mt-5 text-lg text-ot-ash max-w-xl mx-auto">
              We&apos;ll send the first issue the day it ships — and nothing in
              between.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:ian@olympus-talent.com?subject=Notify%20me%20when%20The%20Signal%20launches"
                className="btn-primary text-base"
              >
                Notify me <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
