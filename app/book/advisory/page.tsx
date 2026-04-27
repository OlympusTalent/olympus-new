import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "Private Hiring Advisory Session — Olympus Talent",
  description:
    "Book a 20-minute advisory session with Olympus Talent. Strategic hiring advisory for organisations building critical Payroll, HR, Finance and IT Engineering infrastructure across 140+ countries.",
  openGraph: {
    title: "Private Hiring Advisory Session — Olympus Talent",
    description:
      "Strategic hiring advisory for Payroll, HR, Finance and IT Engineering teams. 140+ countries. 2-week hires. 98% retention.",
  },
};

export default function AdvisoryPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">
                Private Hiring Advisory
              </span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              Strategic Hiring Advisory
              <br />
              <span className="gradient-text">for Leaders Who Build.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              A focused 20-minute conversation where we&apos;ll understand your
              hiring challenges, share insight from the global talent market, and
              determine whether Olympus Talent could support your organisation.
            </p>
            <p className="mt-4 text-sm text-ot-smoke font-mono tracking-wider uppercase">
              This is not a sales pitch. It&apos;s a diagnostic.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left — context */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    Who This Is For
                  </h2>
                  <p className="text-ot-ash leading-relaxed">
                    CEOs, CFOs, CHROs, COOs, Heads of People, Talent, or
                    Transformation. Leaders responsible for building Payroll, HR,
                    Finance or Engineering teams across the UK, US, Europe,
                    Middle East, APAC and LATAM.
                  </p>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Three Reasons Leaders Book This Session
                  </h2>
                  <div className="space-y-4 text-ot-ash text-sm leading-relaxed">
                    <p>
                      You&apos;re struggling to find senior Payroll, HR, Finance
                      or Engineering talent in the current market.
                    </p>
                    <p>
                      Your hiring timelines are slowing growth or placing
                      pressure on internal teams.
                    </p>
                    <p>
                      You want a clearer understanding of the global talent
                      market before making your next hire.
                    </p>
                  </div>
                </div>

                <div className="grad-border p-6">
                  <h2 className="eyebrow text-ot-signal mb-4">
                    Recent Outcomes
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-ot-signal">
                        20
                      </span>
                      <span className="text-sm text-ot-ash">
                        payroll specialists across 20 countries in 2 weeks
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-ot-signal">
                        14→2
                      </span>
                      <span className="text-sm text-ot-ash">
                        weeks — hiring timeline reduction
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-ot-signal">
                        25→15%
                      </span>
                      <span className="text-sm text-ot-ash">
                        recruitment cost reduction
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-smoke mb-4">Session Format</h2>
                  <div className="flex items-center gap-4 text-xs text-ot-smoke font-mono">
                    <span>20–30 minutes</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>Cal Video</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>No obligation</span>
                  </div>
                </div>
              </div>

              {/* Right — Cal embed */}
              <div className="lg:col-span-7">
                <div className="glass-strong p-2 lg:p-4">
                  <CalEmbed calLink="olympus-talent/privatehiringadvisorysession" />
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
