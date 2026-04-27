const OS_LAYERS = [
  {
    kanji: "精",
    name: "Seishin",
    principle: "Clarity",
    color: "border-ot-violet/50",
    labelColor: "text-ot-violet",
    delay: "0s",
    body: "Define what you actually need. Not tasks — outcomes. Not qualifications — capability profiles aligned to culture.",
  },
  {
    kanji: "天",
    name: "Tenmon",
    principle: "Timing",
    color: "border-ot-cyan/50",
    labelColor: "text-ot-cyan",
    delay: "0.6s",
    body: "Read the market. Know when talent is moving, when competitors are weak, when your window is open.",
  },
  {
    kanji: "地",
    name: "Chimon",
    principle: "Market",
    color: "border-ot-signal/50",
    labelColor: "text-ot-signal",
    delay: "1.2s",
    body: "Map the terrain. Salary bands, talent density, competitor movements, regional nuances across 140+ countries.",
  },
  {
    kanji: "用",
    name: "Yōnin",
    principle: "Execution",
    color: "border-ot-warn/50",
    labelColor: "text-ot-warn",
    delay: "1.8s",
    body: "Deploy. Embedded teams, subscription delivery, FIRE Protocol™ scoring on every shortlist. Two weeks, not fourteen.",
  },
  {
    kanji: "忍",
    name: "Innin",
    principle: "Retention",
    color: "border-ot-magenta/50",
    labelColor: "text-ot-magenta",
    delay: "2.4s",
    body: "The hire is the beginning, not the end. 90-day integration support, culture alignment monitoring, 98% 12-month retention.",
  },
];

export function OlympusOS() {
  return (
    <section id="os" className="py-28 md:py-36 border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow text-ot-violet">03 / The Operating System</span>
          <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
            The Olympus Talent OS™
          </h2>
          <p className="mt-6 text-xl text-ot-ash leading-relaxed">
            Five interconnected layers. One operating system for every hiring
            decision your organisation makes. Each layer feeds the next. Nothing
            is siloed. Nothing is reactive.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {OS_LAYERS.map((layer) => (
            <div
              key={layer.name}
              className="glass-strong p-6 text-center data-card group"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-full border-2 ${layer.color} flex items-center justify-center mb-5 os-node`}
                style={{ animationDelay: layer.delay }}
              >
                <span className="text-xl">{layer.kanji}</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{layer.name}</h3>
              <p
                className={`${layer.labelColor} text-xs font-mono uppercase tracking-widest mb-3`}
              >
                {layer.principle}
              </p>
              <p className="text-ot-ash text-[15px] leading-[1.65]">
                {layer.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
