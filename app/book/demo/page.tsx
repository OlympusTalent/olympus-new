import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "Platform Demonstration — Olympus Talent",
  description:
    "A private strategic walkthrough of the Olympus hiring system. See how Olympia AI, HireIQ™ Engine, and FIRE Protocol™ deliver faster, more precise hiring across Payroll, HR, Finance and Engineering.",
  openGraph: {
    title: "Platform Demonstration — Olympus Talent",
    description:
      "See the Olympus Talent OS™ in action. AI recruitment engine, FIRE Protocol™ dashboards, and subscription hiring model across 140+ countries.",
  },
};

export default function DemoPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Platform Demo</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              See the System.
              <br />
              <span className="gradient-text">Transform Your Hiring.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              A private, one-to-one strategic walkthrough tailored to your
              organisation&apos;s region, hiring structure and workforce
              objectives. No obligation.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    What You&apos;ll See
                  </h2>
                  <div className="space-y-3 text-ot-ash text-sm leading-relaxed">
                    <p>
                      How Olympia, our AI recruitment engine, sources, qualifies
                      and ranks global talent with precision.
                    </p>
                    <p>
                      How the HireIQ™ Engine evaluates candidate capability,
                      cultural alignment and retention risk.
                    </p>
                    <p>
                      How FIRE Protocol™ dashboards remove hiring guesswork and
                      accelerate decision-making.
                    </p>
                    <p>
                      How your organisation gains access to pre-vetted talent
                      across 140+ countries.
                    </p>
                    <p>
                      How our subscription model replaces traditional fees and
                      eliminates rebate cycles.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">
                    Why Leaders Request a Demo
                  </h2>
                  <div className="space-y-3 text-ot-ash text-sm leading-relaxed">
                    <p>
                      Identify where your current process is losing time, money
                      and talent.
                    </p>
                    <p>
                      Understand how Olympus delivers 98% retention across
                      placements.
                    </p>
                    <p>
                      Explore the difference between reactive recruitment and
                      strategic workforce infrastructure.
                    </p>
                    <p>
                      Evaluate whether Core, Velocity or Enterprise subscription
                      best fits your roadmap.
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
                  <CalEmbed calLink="olympus-talent/schedule-a-demo" />
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
