import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "Candidate Review Call — Olympus Talent",
  description:
    "A short check-in for candidates currently working with Olympus Talent on active opportunities. Keep your job search aligned, informed and moving forward across Payroll, HR, Finance and IT Engineering roles.",
  openGraph: {
    title: "Candidate Review Call — Olympus Talent",
    description:
      "Stay aligned on your active job search. 15-minute check-in for candidates working with Olympus Talent.",
  },
};

export default function ReviewCallPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Candidate Review</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              Stay Aligned.
              <br />
              <span className="gradient-text">Keep Moving Forward.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              A short check-in to keep your job search aligned, informed and
              progressing. For candidates currently working with Olympus Talent
              on active opportunities.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    What We&apos;ll Review
                  </h2>
                  <div className="space-y-3 text-ot-ash text-sm leading-relaxed">
                    <p>
                      Updates on any roles or interview processes currently
                      underway.
                    </p>
                    <p>
                      Feedback from hiring managers where available.
                    </p>
                    <p>
                      Any changes to your availability, location preferences or
                      compensation expectations.
                    </p>
                    <p>
                      Whether the opportunities being explored still align with
                      your long-term goals.
                    </p>
                    <p>
                      Next steps to keep your job search progressing.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Why These Calls Matter
                  </h2>
                  <p className="text-ot-ash text-sm leading-relaxed">
                    Successful placements rarely happen through a single
                    conversation. They happen through consistent alignment,
                    transparency and momentum. This call ensures you remain fully
                    informed, we stay aligned on the types of roles you want to
                    pursue, and your search continues moving forward with
                    clarity.
                  </p>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-smoke mb-4">Session Format</h2>
                  <div className="flex items-center gap-4 text-xs text-ot-smoke font-mono">
                    <span>15 minutes</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>Cal Video</span>
                    <span className="h-3 w-px bg-ot-steel" />
                    <span>Active candidates only</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="glass-strong p-2 lg:p-4">
                  <CalEmbed calLink="olympus-talent/review-call" />
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
