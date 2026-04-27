const CASE_STUDIES = [
  {
    problem:
      "Global fintech. 14-week average hire. 34% first-year attrition. Scaling from 200 to 500 people in 12 months with no talent infrastructure.",
    intervention:
      "Embedded Velocity-tier team. FIRE Protocol\u2122 on every shortlist. Culture Scorecard deployed org-wide.",
    outcomes: [
      { stat: "247", label: "hires in 6 months" },
      { stat: "97%", label: "12-month retention" },
    ],
  },
  {
    problem:
      "FTSE 250 manufacturer. Payroll migration across 20 countries stalled \u2014 couldn\u2019t find implementation leaders who understood both tech and compliance.",
    intervention:
      "Titan-tier engagement. Chimon market mapping across EMEA. Strategic Alignment Protocol with CFO and CHRO.",
    outcomes: [
      { stat: "20", label: "hires across 20 countries" },
      { stat: "11 days", label: "average time-to-fill" },
    ],
  },
  {
    problem:
      "PE-backed SaaS company. Series C. Needed an entire finance leadership team \u2014 CFO, VP Finance, FP&A Director \u2014 in 8 weeks before board review.",
    intervention:
      "Ascend-tier sprint. Seishin clarity session with CEO. FIRE Protocol\u2122 scoring benchmarked against 340 comparable placements.",
    outcomes: [
      { stat: "3 C-suite", label: "hires in 6 weeks" },
      { stat: "100%", label: "still in seat at 18 months" },
    ],
  },
];

export function ProofSection() {
  return (
    <section className="py-28 md:py-36 border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <span className="eyebrow text-ot-violet">07 / Proof</span>
          <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
            These aren&apos;t testimonials.
            <br />
            <span className="text-ot-ash">They&apos;re interventions.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className="grad-border p-8 data-card">
              <span className="eyebrow text-ot-crimson mb-6 block">Problem</span>
              <p className="text-sm text-ot-ash leading-relaxed mb-6">
                {cs.problem}
              </p>

              <span className="eyebrow text-ot-violet mb-3 block">
                Intervention
              </span>
              <p className="text-sm text-ot-ash leading-relaxed mb-6">
                {cs.intervention}
              </p>

              <span className="eyebrow text-ot-signal mb-3 block">Outcome</span>
              {cs.outcomes.map((o) => (
                <div key={o.stat} className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-ot-signal">
                    {o.stat}
                  </span>
                  <span className="text-sm text-ot-ash">{o.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
