const METRICS = [
  { value: "140+", label: "Countries covered" },
  { value: "2 wks", label: "Average time-to-hire" },
  { value: "98%", label: "12-month retention" },
  { value: "1,247", label: "Live roles right now" },
];

export function MetricsBand() {
  return (
    <section className="py-20 md:py-24 hairline-b bg-ot-midnight">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-4 mb-10">
          <p className="eyebrow">03 / Proof, not poetry</p>
          <span className="hairline flex-1" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ot-steel/60">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-ot-midnight px-8 py-10 lg:py-14"
            >
              <div className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.025em] leading-none gradient-text">
                {m.value}
              </div>
              <div className="mt-5 eyebrow text-ot-ash">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
