import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalEmbed } from "@/components/cal-embed";

export const metadata = {
  title: "The Secret Sauce Podcast — Olympus Talent",
  description:
    "Join Season Two of The Secret Sauce — the Olympus Talent podcast featuring conversations with the operators who quietly keep global organisations running. Payroll leaders, HR architects, finance operators and technology builders.",
  openGraph: {
    title: "The Secret Sauce Podcast — Olympus Talent",
    description:
      "Stories behind the people who quietly keep global organisations running. Season Two launching 2026.",
  },
};

export default function PodcastPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero-glow py-16 md:py-24 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">The Secret Sauce</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl">
              Not Influencers.
              <br />
              <span className="gradient-text">Operators.</span>
            </h1>
            <p className="mt-6 text-xl text-ot-ash max-w-2xl leading-relaxed">
              The Secret Sauce features conversations with the professionals who
              actually operate the machinery of global business — the payroll
              leaders, HR architects, finance operators and technology builders
              who make complex organisations work.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <h2 className="eyebrow text-ot-violet mb-4">
                    Episode Format
                  </h2>
                  <div className="space-y-2 text-ot-ash text-sm leading-relaxed">
                    <p>45-minute recorded conversation</p>
                    <p>Remote recording from our virtual studio</p>
                    <p>Video and audio production handled by our team</p>
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-cyan mb-4">Distribution</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "YouTube",
                      "Spotify",
                      "Apple Podcasts",
                      "The Signal Newsletter",
                    ].map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded bg-ot-carbon border border-ot-steel text-ot-ash"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="eyebrow text-ot-signal mb-4">
                    What We&apos;ll Need
                  </h2>
                  <div className="space-y-2 text-ot-ash text-sm leading-relaxed">
                    <p>A professional headshot</p>
                    <p>
                      A theme or topic you&apos;d like the conversation to
                      centre around
                    </p>
                    <p>Six great questions you&apos;d enjoy discussing</p>
                    <p>Any links for the show notes</p>
                  </div>
                </div>

                <div className="glass p-6">
                  <h2 className="eyebrow text-ot-warn mb-3">
                    Payroll Olympian
                  </h2>
                  <p className="text-ot-ash text-sm leading-relaxed">
                    As part of Season Two, we&apos;re announcing the first
                    Payroll Olympian — recognising individuals who truly embody
                    what the profession represents. If you&apos;re open to it,
                    we&apos;d love for you to nominate two peers who deserve that
                    recognition.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="glass-strong p-2 lg:p-4">
                  <CalEmbed calLink="olympus-talent/the-secret-sauce-podcast" />
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
