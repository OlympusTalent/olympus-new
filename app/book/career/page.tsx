import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "Career Strategy Session — Olympus Talent",
  description:
    "A private career advisory conversation for Payroll, HR, Finance and Engineering professionals approaching the next inflexion point in their career. Resume positioning, market insight, and strategic career guidance.",
  openGraph: {
    title: "Career Strategy Session — Olympus Talent",
    description:
      "Career advisory for Payroll, HR, Finance and Engineering professionals. Resume positioning, market insight, and strategic guidance from recruiters placing professionals across 140+ countries.",
  },
};

export default function CareerPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Career Strategy</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              Your Career Deserves
              <br />
              <span className="gradient-text">Better Infrastructure.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              Careers rarely stall because people lack capability. They stall
              because the market cannot clearly see their value. This session
              exists to change that.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    What We&apos;ll Work Through
                  </h2>
                  <div className="space-y-3 text-ot-ash text-sm leading-relaxed">
                    <p>
                      How your resume communicates your value to hiring managers.
                    </p>
                    <p>
                      Whether your LinkedIn profile positions you as a credible
                      specialist.
                    </p>
                    <p>
                      How recruiters and employers interpret your experience.
                    </p>
                    <p>
                      The roles and organisations where your background will be
                      strongest.
                    </p>
                    <p>
                      How to approach interviews and hiring processes
                      strategically.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Who This Is For
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        role: "Payroll professionals",
                        path: "progressing toward multi-country or leadership roles",
                      },
                      {
                        role: "HR professionals",
                        path: "developing toward HRBP or People leadership positions",
                      },
                      {
                        role: "Finance professionals",
                        path: "advancing toward management or strategic finance roles",
                      },
                      {
                        role: "IT Engineering specialists",
                        path: "seeking to scale their technical careers",
                      },
                    ].map((p) => (
                      <div key={p.role} className="grad-border p-4">
                        <p className="font-semibold text-sm">{p.role}</p>
                        <p className="text-xs text-ot-smoke mt-1">{p.path}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-smoke mb-4">
                    Available Sessions
                  </h2>
                  <div className="space-y-2 text-xs text-ot-smoke font-mono">
                    <p>30 min — Career Strategy Session</p>
                    <p>45 min — Resume &amp; LinkedIn Positioning Review</p>
                    <p>60 min — Full Career Roadmap Session</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="glass-strong p-2 lg:p-4">
                  <CalEmbed calLink="olympus-talent/careerstrategysession" />
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
