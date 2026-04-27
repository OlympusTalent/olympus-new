type Tier = {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  bg: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Ignite",
    price: "$7,500",
    cadence: "/mo",
    pitch: "For scale-ups filling 3–5 critical roles a quarter.",
    bg: "bg-tier-ignite",
  },
  {
    name: "Ascend",
    price: "$12,500",
    cadence: "/mo",
    pitch: "For growth-stage teams running parallel functions.",
    bg: "bg-tier-ascend",
  },
  {
    name: "Velocity",
    price: "$18,500",
    cadence: "/mo",
    pitch: "For mid-market with multi-country delivery needs.",
    bg: "bg-tier-velocity",
    featured: true,
  },
  {
    name: "Titan",
    price: "$25,500",
    cadence: "/mo",
    pitch: "Enterprise embedded team with global mobility.",
    bg: "bg-tier-titan",
  },
  {
    name: "Olympus Black",
    price: "$40,000+",
    cadence: "/mo",
    pitch: "Board-level advisory. Confidential. By invitation.",
    bg: "bg-tier-black",
  },
];

export function TierRibbon() {
  return (
    <section id="pricing" className="py-24 md:py-32 hairline-b">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">04 / Subscription, not % fees</p>
            <h2 className="mt-4 font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
              One fixed fee. <span className="text-ot-ash">Zero % surprises.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-ot-ash text-lg leading-relaxed">
            Percentage fees punish the companies that hire well. Our tiers scale
            with your ambition, not your salary bands. Pick the tier that
            matches your hiring volume; upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`grad-border p-6 lg:p-7 relative transition-all duration-500 hover:-translate-y-1 ${
                t.featured ? "lg:scale-[1.04] lg:z-10" : ""
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-6 text-[10px] tracking-[0.22em] font-mono uppercase bg-ot-obsidian px-2 py-0.5 border border-ot-violet text-ot-violet rounded">
                  Most chosen
                </span>
              )}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white ${t.bg} mb-6`}
              >
                {t.name}
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-sans text-3xl lg:text-4xl font-semibold tracking-[-0.02em]">
                  {t.price}
                </span>
                <span className="text-ot-smoke text-sm">{t.cadence}</span>
              </div>
              <p className="text-sm text-ot-ash leading-relaxed mb-6 min-h-[3rem]">
                {t.pitch}
              </p>
              <a
                href="#start"
                className="text-sm text-ot-bone hover:text-ot-cyan transition-colors inline-flex items-center gap-1"
              >
                See what&apos;s included
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
