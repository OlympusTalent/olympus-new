const PROTOCOLS = [
  {
    number: "01",
    title: "Culture-First Protocol",
    color: "bg-ot-violet/15",
    numColor: "text-ot-violet",
    body: "Map operating culture before opening a role. Score candidates against culture markers — not keyword matches. The Culture Scorecard ensures alignment before a single interview is booked.",
    tags: ["Culture Scorecard", "Alignment Score", "Culture Index"],
  },
  {
    number: "02",
    title: "Strategic Alignment Protocol",
    color: "bg-ot-cyan/15",
    numColor: "text-ot-cyan",
    body: "Align every hire to the board's 12-month plan. Not just \"fill the seat\" — connect talent decisions to business outcomes. Every role has a strategic rationale, a success metric, and a timeline.",
    tags: ["Board Alignment", "Outcome Mapping", "Strategic Brief"],
  },
  {
    number: "03",
    title: "FIRE Protocol™",
    color: "bg-ot-signal/15",
    numColor: "text-ot-signal",
    body: (
      <>
        <strong className="text-ot-bone">Fit. Impact. Readiness. Elevation.</strong>{" "}
        Four-axis candidate scoring that moves beyond the CV. Every shortlisted
        candidate arrives with a defensible, board-ready score across the
        dimensions that predict long-term success.
      </>
    ),
    tags: ["4-Axis Scoring", "Red Flag Index", "Elevation Levels"],
  },
  {
    number: "04",
    title: "Outcome Protocol",
    color: "bg-ot-magenta/15",
    numColor: "text-ot-magenta",
    body: "The hire is the beginning. 90-day integration framework, performance tracking, culture-fit monitoring, and retention prediction. If we place them, we own the outcome — with a 98% 12-month retention guarantee.",
    tags: ["90-Day Integration", "Retention Guarantee", "Predictive Insights"],
  },
];

export function Protocols() {
  return (
    <section id="doctrine" className="py-28 md:py-36 bg-ot-midnight border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-ot-violet">04 / The Protocols</span>
            <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
              Four protocols.
              <br />
              <span className="text-ot-ash">Zero ambiguity.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-ot-ash text-lg leading-relaxed">
            Every engagement runs through the Olympus Hiring Doctrine™ — four
            interlocking protocols that turn hiring from a guessing game into an
            engineered outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROTOCOLS.map((p) => (
            <div key={p.number} className="grad-border p-8 lg:p-10 data-card">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-lg ${p.color} flex items-center justify-center`}
                >
                  <span className={`${p.numColor} font-mono text-sm font-bold`}>
                    {p.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="text-ot-ash leading-relaxed">{p.body}</p>
              <div className="mt-6 flex gap-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-ot-steel text-ot-smoke"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
