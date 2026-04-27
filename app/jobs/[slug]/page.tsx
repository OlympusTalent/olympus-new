import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SAMPLE_JOBS } from "@/lib/sample-jobs";
import Link from "next/link";

export function generateStaticParams() {
  return SAMPLE_JOBS.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const job = SAMPLE_JOBS.find((j) => j.slug === params.slug);
  if (!job) return { title: "Role Not Found — Olympus Talent" };
  return {
    title: `${job.title} — ${job.location} | Olympus Talent`,
    description: job.summary,
  };
}

export default function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = SAMPLE_JOBS.find((j) => j.slug === params.slug);
  if (!job) notFound();

  const functionColors: Record<string, string> = {
    Payroll: "text-ot-violet",
    HR: "text-ot-cyan",
    "IT & Engineering": "text-ot-signal",
    Finance: "text-ot-warn",
    Sales: "text-ot-magenta",
  };

  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-xs text-ot-smoke font-mono">
              <Link
                href="/jobs"
                className="hover:text-ot-bone transition-colors"
              >
                Live Roles
              </Link>
              <span>/</span>
              <span className="text-ot-ash">{job.title}</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
              {/* Left column: role info */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`eyebrow ${functionColors[job.function] || "text-ot-violet"}`}
                  >
                    {job.function}
                  </span>
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

                <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] mb-4">
                  {job.title}
                </h1>

                <p className="text-lg text-ot-ash mb-2">{job.company}</p>

                {/* Meta pills */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
                    {job.location}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
                    {job.remote}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
                    {job.contract}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-ash">
                    {job.experience}
                  </span>
                </div>
              </div>

              {/* Right column: Apply card (sticky on desktop) */}
              <div className="lg:col-span-4">
                <div className="glass-strong p-6 lg:sticky lg:top-24">
                  <div className="mb-5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-ot-smoke mb-1">
                      Salary
                    </p>
                    <p className="text-xl font-bold">{job.salary}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-ot-smoke mb-1">
                      Posted
                    </p>
                    <p className="text-sm text-ot-ash">{job.posted}</p>
                  </div>
                  <a
                    href="/book/career"
                    className="btn-primary w-full text-center text-sm mb-3"
                  >
                    Apply for This Role <span aria-hidden>→</span>
                  </a>
                  <button className="btn-ghost w-full text-center text-sm">
                    Save Role
                  </button>
                  <p className="mt-4 text-[10px] text-ot-smoke font-mono tracking-wider text-center uppercase">
                    1-click apply with LinkedIn or CV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-12">
                {/* Role Summary */}
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">Role Summary</h2>
                  <p className="text-ot-ash leading-relaxed text-[15px]">
                    {job.summary}
                  </p>
                </div>

                {/* Hiring Company Context */}
                <div className="grad-border p-8">
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Hiring Context
                  </h2>
                  <p className="text-ot-ash leading-relaxed text-[15px]">
                    {job.companyContext}
                  </p>
                </div>

                {/* Impact of the Role */}
                <div>
                  <h2 className="eyebrow text-ot-signal mb-4">
                    Impact of This Role
                  </h2>
                  <p className="text-ot-ash leading-relaxed text-[15px]">
                    {job.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                {job.techStack && job.techStack.length > 0 && (
                  <div>
                    <h2 className="eyebrow text-ot-warn mb-4">
                      Systems &amp; Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-bone"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h2 className="eyebrow text-ot-magenta mb-4">
                    Key Themes
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded border border-ot-violet/30 text-ot-ash"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Olympus Difference */}
                <div className="glass p-8">
                  <h2 className="eyebrow text-ot-violet mb-4">
                    The Olympus Difference
                  </h2>
                  <p className="text-ot-ash leading-relaxed text-[15px] mb-4">
                    Every candidate submitted for this role will carry a FIRE
                    Protocol™ score — a four-axis assessment of Fit, Impact,
                    Readiness, and Elevation. No blind CVs. No keyword matching.
                    A defensible, data-backed recommendation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-ot-steel text-ot-smoke">
                      FIRE Protocol™ Scored
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-ot-steel text-ot-smoke">
                      Culture Scorecard
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-ot-steel text-ot-smoke">
                      98% Retention Guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Right sidebar on desktop: related roles placeholder */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Apply card (mobile duplicate, hidden on lg) */}
                  <div className="glass-strong p-6 lg:hidden" id="apply">
                    <p className="text-xl font-bold mb-4">{job.salary}</p>
                    <a
                      href="#"
                      className="btn-primary w-full text-center text-sm mb-3"
                    >
                      Apply for This Role <span aria-hidden>→</span>
                    </a>
                    <button className="btn-ghost w-full text-center text-sm">
                      Save Role
                    </button>
                  </div>

                  {/* Similar roles */}
                  <div>
                    <h3 className="eyebrow text-ot-smoke mb-4">
                      Similar Roles
                    </h3>
                    <div className="space-y-3">
                      {SAMPLE_JOBS.filter(
                        (j) =>
                          j.function === job.function && j.slug !== job.slug
                      )
                        .slice(0, 3)
                        .map((related) => (
                          <Link
                            key={related.slug}
                            href={`/jobs/${related.slug}`}
                            className="block grad-border p-4 data-card"
                          >
                            <p className="font-semibold text-sm mb-1">
                              {related.title}
                            </p>
                            <p className="text-xs text-ot-smoke">
                              {related.location} · {related.contract}
                            </p>
                          </Link>
                        ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="glass p-6 text-center">
                    <p className="text-sm font-semibold mb-2">
                      Not the right fit?
                    </p>
                    <p className="text-xs text-ot-ash mb-4">
                      70% of our roles are filled before they&apos;re posted.
                      Register for priority access.
                    </p>
                    <a
                      href="/book/career"
                      className="btn-ghost w-full text-center text-xs"
                    >
                      Access the Talent Market Properly
                    </a>
                  </div>
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
