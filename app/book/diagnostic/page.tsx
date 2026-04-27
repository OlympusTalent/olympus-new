import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "Leadership Infrastructure Diagnostic — Olympus Talent",
  description:
    "A 30-minute structured diagnostic session to identify where your leadership system is constraining performance. Review your Leadership Infrastructure Score across five critical layers.",
  openGraph: {
    title: "Leadership Infrastructure Diagnostic — Olympus Talent",
    description:
      "Identify where your leadership system is constraining performance across Psychological Safety, Alignment, Execution, Development, and Sustainability.",
  },
};

const LAYERS = [
  {
    name: "Psychological Safety",
    desc: "How information flows",
    color: "text-ot-violet",
  },
  {
    name: "Alignment",
    desc: "How decisions are made and prioritised",
    color: "text-ot-cyan",
  },
  {
    name: "Execution",
    desc: "How performance is enforced",
    color: "text-ot-signal",
  },
  {
    name: "Development",
    desc: "How capability is built",
    color: "text-ot-warn",
  },
  {
    name: "Sustainability",
    desc: "How performance is maintained",
    color: "text-ot-magenta",
  },
];

export default function DiagnosticPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">
                Leadership Diagnostic
              </span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              Leadership Infrastructure
              <br />
              <span className="gradient-text">Diagnostic Review.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              Most organisations assume performance issues are driven by
              capability — hiring, motivation, or management. In reality, they
              are structural. This session identifies where.
            </p>
            <p className="mt-4 text-sm text-ot-smoke font-mono tracking-wider uppercase">
              This is not a coaching call. It is a diagnostic.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    The Five Layers We Assess
                  </h2>
                  <div className="space-y-3">
                    {LAYERS.map((l) => (
                      <div key={l.name} className="grad-border p-4">
                        <p className={`font-semibold text-sm ${l.color}`}>
                          {l.name}
                        </p>
                        <p className="text-xs text-ot-smoke mt-1">{l.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Who This Is For
                  </h2>
                  <p className="text-ot-ash text-sm leading-relaxed">
                    CEOs, CFOs, CHROs, COOs. Heads of People, Talent, or
                    Transformation. Leaders responsible for scaling teams or
                    functions experiencing inconsistent execution, leadership
                    bottlenecks, decision delays, or high-performer
                    disengagement.
                  </p>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-signal mb-4">
                    What You Will Leave With
                  </h2>
                  <div className="space-y-3 text-ot-ash text-sm leading-relaxed">
                    <p>
                      A clear view of whether your leadership challenges are
                      structural or individual.
                    </p>
                    <p>
                      Identification of the specific layer(s) constraining
                      performance.
                    </p>
                    <p>
                      An understanding of what it would take to correct the
                      system.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-smoke mb-4">Session Format</h2>
                  <div className="flex items-center gap-4 text-xs text-ot-smoke font-mono">
                    <span>30 minutes</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>Cal Video</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>Limited availability</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="glass-strong p-2 lg:p-4">
                  <CalEmbed calLink="olympus-talent/leadership-infrastructure-diagnostic-review" />
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
