type Feature = {
  num: string;
  name: string;
  tagline: string;
  body: string;
  accent: "violet" | "cyan" | "signal" | "warn" | "crimson" | "purple";
};

const FEATURES: Feature[] = [
  {
    num: "01",
    name: "FIRE Protocol™",
    tagline: "Fit. Impact. Readiness. Elevation.",
    body:
      "Four-axis candidate scoring that moves beyond the CV. Every shortlisted candidate arrives with a defensible, board-ready score across the dimensions that predict long-term success.",
    accent: "violet",
  },
  {
    num: "02",
    name: "Culture Scorecard",
    tagline: "Alignment before interviews.",
    body:
      "Map your team's operating culture — then match candidates against it. We score alignment before a single interview is booked so you only ever meet the shortlist that will actually thrive.",
    accent: "cyan",
  },
  {
    num: "03",
    name: "Red Flag Index",
    tagline: "The signals no one else catches.",
    body:
      "Behavioural, longitudinal, and reference-triangulated risk signals surfaced in one dashboard — so hiring managers move on known risk, not hope.",
    accent: "crimson",
  },
  {
    num: "04",
    name: "Big 5 Hiring Dashboard",
    tagline: "The five numbers that matter.",
    body:
      "Time-to-hire, quality-of-hire, retention, culture alignment, and cost per outcome. Real-time, per-role, per-country — replacing the quarterly PDF nobody reads.",
    accent: "signal",
  },
  {
    num: "05",
    name: "Candidate Elevation Levels",
    tagline: "Raw → Developing → Ready → Elite.",
    body:
      "A transparent progression model that shows candidates exactly where they stand and what it takes to move up. Less gatekeeping, more clarity.",
    accent: "warn",
  },
  {
    num: "06",
    name: "AI-Powered Matching",
    tagline: "HireIQ™ works while you sleep.",
    body:
      "Our HireIQ™ engine surfaces the right people for the right roles — continuously, globally, across 1,247 live vacancies and a talent pool that spans 140+ countries.",
    accent: "purple",
  },
];

const accentToClass: Record<Feature["accent"], string> = {
  violet: "text-ot-violet",
  cyan: "text-ot-cyan",
  signal: "text-ot-signal",
  warn: "text-ot-warn",
  crimson: "text-ot-crimson",
  purple: "text-ot-purple",
};

export function PlatformGrid() {
  return (
    <section id="platform" className="py-24 md:py-32 hairline-b">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">02 / The Platform</p>
            <h2 className="mt-4 font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
              Six systems. One operating layer for hiring.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ot-ash text-lg leading-relaxed">
            Every feature in Olympus Talent Hub™ exists to answer a single
            question your board already asks: &ldquo;How do we know this hire
            will work?&rdquo; Here&apos;s the stack that answers it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ot-steel/60 hairline hairline-b">
          {FEATURES.map((f) => (
            <article
              key={f.num}
              className="bg-ot-obsidian p-8 lg:p-10 group transition-colors duration-300 hover:bg-ot-midnight"
            >
              <div className="flex items-center justify-between mb-8">
                <span className={`font-mono text-xs tracking-[0.24em] ${accentToClass[f.accent]}`}>
                  {f.num} / {f.name.replace(/™/g, "").toUpperCase()}
                </span>
                <span className={`h-1.5 w-1.5 rounded-full ${accentToClass[f.accent]} bg-current opacity-80`} />
              </div>
              <h3 className="font-sans text-2xl font-semibold tracking-[-0.01em] mb-2">
                {f.name}
              </h3>
              <p className="text-ot-ash font-serif italic text-lg mb-4">
                {f.tagline}
              </p>
              <p className="text-ot-ash/80 text-sm leading-relaxed">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
