import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact — Olympus Talent",
  description:
    "Talk to Olympus Talent. Book a hiring diagnostic, explore roles, or reach the team directly. Decision infrastructure for hiring across Payroll, HR, IT and Finance in 140+ countries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Olympus Talent",
    description:
      "Book a hiring diagnostic, explore roles, or reach the team directly.",
    type: "website",
  },
};

const PATHS = [
  {
    eyebrow: "For Employers",
    title: "Hiring talent?",
    body:
      "Book a 30-minute diagnostic. We'll map your hiring pipeline, pressure-test the brief, and show you where the Olympus Talent OS™ would change the outcome. No pitch — a working session.",
    cta: "Book a Diagnostic",
    href: "/book/advisory",
    accent: "text-ot-violet",
  },
  {
    eyebrow: "For Candidates",
    title: "Looking for a role?",
    body:
      "Talk to a specialist who actually understands your field — Payroll, HR, Finance or Engineering. Explore live roles or start a confidential conversation about your next move.",
    cta: "Explore Roles",
    href: "/jobs",
    accent: "text-ot-cyan",
  },
];

const LOCATIONS = [
  "Dubai", "Manchester", "Paris", "Milan", "Boston", "New York",
  "Houston", "Singapore", "Iga, Japan", "Mumbai", "São Paulo",
  "Abu Dhabi", "Doha", "Johannesburg",
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero */}
        <section className="hero-glow py-20 md:py-28 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Contact</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2.2rem,5vw,4.5rem)] max-w-4xl">
              Let&apos;s build your
              <br />
              <span className="gradient-text">hiring infrastructure.</span>
            </h1>
            <p className="mt-8 text-xl text-ot-ash leading-relaxed max-w-2xl font-light">
              Two ways in — whether you&apos;re building a team or building your
              career. Pick your path below, or reach us directly.
            </p>
          </div>
        </section>

        {/* Dual paths */}
        <section className="py-20 md:py-28">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-6">
            {PATHS.map((p) => (
              <div key={p.title} className="grad-border data-card p-8 md:p-10 flex flex-col">
                <span className={"eyebrow " + p.accent}>{p.eyebrow}</span>
                <h2 className="mt-4 font-sans font-black text-2xl md:text-3xl tracking-[-0.02em]">
                  {p.title}
                </h2>
                <p className="mt-4 text-ot-ash leading-relaxed flex-1">{p.body}</p>
                <Link href={p.href} className="btn-primary text-base mt-8 self-start">
                  {p.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Direct line */}
        <section className="py-16 md:py-20 bg-ot-midnight border-t border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow text-ot-cyan">Direct Line</span>
              <h2 className="mt-4 font-sans font-black text-2xl md:text-3xl tracking-[-0.02em]">
                Prefer to email?
              </h2>
              <p className="mt-4 text-ot-ash leading-relaxed max-w-xl">
                Reach the team directly and we&apos;ll respond within one business
                day. For press, partnerships or anything else — start here.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="glass p-6 md:p-8">
                <div className="eyebrow text-ot-smoke mb-2">Email</div>
                <a
                  href="mailto:ian@olympus-talent.com"
                  className="text-xl md:text-2xl font-bold text-ot-bone hover:text-ot-violet transition-colors break-all"
                >
                  ian@olympus-talent.com
                </a>
                <div className="mt-6 flex items-center gap-3 text-xs text-ot-smoke font-mono">
                  <span className="h-2 w-2 rounded-full bg-ot-signal" />
                  Typical response: within 1 business day
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global presence */}
        <section className="py-20 md:py-28">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-violet">Global Presence</span>
            <h2 className="mt-4 font-sans font-black text-3xl md:text-4xl tracking-[-0.02em]">
              Delivering in every time zone.
            </h2>
            <p className="mt-5 text-lg text-ot-ash max-w-2xl">
              Active delivery across 140+ countries, anchored by hubs in:
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-ot-smoke">
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
      </main>
      <SiteFooter />
    </>
  );
}
