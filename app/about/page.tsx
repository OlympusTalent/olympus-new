import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About — Olympus Talent | Decision Infrastructure for Hiring",
  description:
    "Olympus Talent treats hiring as infrastructure, not a transaction. The thesis, the operating system, the global footprint, and the people behind decision infrastructure for Payroll, HR, IT and Finance.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Olympus Talent",
    description:
      "Hiring isn't a service you buy. It's infrastructure you build. The story behind Olympus Talent.",
    type: "website",
  },
};

const STATS = [
  { value: "140+", label: "Countries with active delivery" },
  { value: "6M+", label: "Global candidate reach" },
  { value: "14 days", label: "Average time-to-hire" },
  { value: "98%", label: "12-month retention" },
];

const LAYERS = [
  { glyph: "精", name: "Seishin", note: "Clarity of need" },
  { glyph: "天", name: "Tenmon", note: "Market timing" },
  { glyph: "地", name: "Chimon", note: "Talent terrain" },
  { glyph: "用", name: "Yōnin", note: "Execution" },
  { glyph: "忍", name: "Innin", note: "Retention" },
  { glyph: "機", name: "Kikai", note: "The machine" },
  { glyph: "信", name: "Shinrai", note: "Trust" },
  { glyph: "改", name: "Kaizen", note: "Adaptation" },
];

const LOCATIONS = [
  "Dubai", "Manchester", "Paris", "Milan", "Boston", "New York",
  "Houston", "Singapore", "Iga, Japan", "Mumbai", "São Paulo",
  "Abu Dhabi", "Doha", "Johannesburg",
];

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero */}
        <section className="hero-glow py-20 md:py-28 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">About Olympus Talent</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2.2rem,5vw,4.5rem)] max-w-4xl">
              Hiring isn&apos;t a service you buy.
              <br />
              <span className="gradient-text">It&apos;s infrastructure you build.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-ot-ash leading-relaxed max-w-3xl font-light">
              Olympus Talent is decision infrastructure for hiring across Payroll,
              HR, IT &amp; Finance — built for the organisations that treat talent
              as a system, not a scramble.
            </p>
          </div>
        </section>

        {/* The thesis */}
        <section className="py-20 md:py-28">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="eyebrow text-ot-violet">The Thesis</span>
              <h2 className="mt-4 font-sans font-black text-3xl md:text-4xl tracking-[-0.02em] leading-tight">
                Most companies don&apos;t have a hiring problem.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-ot-ash leading-relaxed">
              <p>
                They have a decision problem. Two-thirds of senior hires fail
                inside eighteen months — not because the talent isn&apos;t out
                there, but because the decision framework wasn&apos;t. Briefs
                describe tasks instead of outcomes. Hiring starts only once the
                seat is already empty. Speed and quality are treated as a
                trade-off instead of a system.
              </p>
              <p>
                We started Olympus to fix that — to give organisations the same
                rigour in hiring that they apply to finance, engineering and
                operations. Not recruiters. Not CV brokers. An operating system
                that turns hiring from a liability into a competitive advantage,
                running across every function and every geography.
              </p>
              <p className="text-ot-bone">
                The companies that win the next decade won&apos;t have better
                recruiters. They&apos;ll have better decision systems.
              </p>
            </div>
          </div>
        </section>

        {/* The OS in brief */}
        <section className="py-20 md:py-28 bg-ot-midnight border-t border-b border-ot-steel/40 section-glow">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              <span className="eyebrow text-ot-cyan">The Operating System</span>
              <h2 className="mt-4 font-sans font-black text-3xl md:text-4xl tracking-[-0.02em]">
                The Olympus Talent OS&trade;
              </h2>
              <p className="mt-5 text-lg text-ot-ash leading-relaxed">
                Eight interconnected layers — one operating system for every
                hiring decision an organisation makes, from clarity of need to
                the trust networks and learning systems that decide whether a
                hire holds.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {LAYERS.map((l) => (
                <div key={l.name} className="glass data-card p-5">
                  <div className="text-3xl mb-3 text-ot-bone/90">{l.glyph}</div>
                  <div className="font-bold text-ot-bone">{l.name}</div>
                  <div className="text-sm text-ot-ash mt-1">{l.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/doctrine" className="btn-ghost text-base">
                Read the full Doctrine <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Global footprint */}
        <section className="py-20 md:py-28">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-violet">Global Infrastructure</span>
            <h2 className="mt-4 font-sans font-black text-3xl md:text-4xl tracking-[-0.02em]">
              Built to deliver in every time zone.
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="grad-border p-6">
                  <div className="text-4xl md:text-5xl font-black text-ot-signal tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-3 text-sm text-ot-ash">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-ot-smoke">
              {LOCATIONS.map((city, i) => (
                <span key={city} className="flex items-center gap-6 text-sm">
                  {city}
                  {i < LOCATIONS.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-ot-violet/50" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Founder note */}
        <section className="py-20 md:py-28 bg-ot-midnight border-t border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <span className="eyebrow text-ot-cyan">From the Founder</span>
              <blockquote className="mt-6 text-2xl md:text-3xl font-light leading-snug text-ot-bone">
                &ldquo;The best companies in the world were still hiring like it
                was 1995 — reactive, transactional, disconnected from strategy.
                I built Olympus to treat hiring the way great operators treat
                everything else that matters: as infrastructure.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-ot-smoke/40 flex items-center justify-center">
                  <span className="text-xs font-bold tracking-[.1em] text-ot-bone">IO</span>
                </div>
                <div>
                  <div className="font-bold text-ot-bone">Ian O&apos;Callaghan</div>
                  <div className="text-sm text-ot-ash">Founder, Olympus Talent</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 hero-glow">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-[-0.02em] max-w-3xl mx-auto">
              Stop hiring reactively.{" "}
              <span className="gradient-text">Start building infrastructure.</span>
            </h2>
            <p className="mt-6 text-lg text-ot-ash max-w-2xl mx-auto">
              A 30-minute diagnostic — not a sales call. We&apos;ll map your
              hiring pipeline and show you where the Olympus Talent OS&trade; would
              change the outcome.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary text-base">
                Book a Diagnostic <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-ghost text-base">
                Contact Olympus
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
