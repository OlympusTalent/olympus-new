const ENTERPRISES = [
  "PAYROLL GROUP",
  "MERIDIAN CAPITAL",
  "NORTHWIND SYSTEMS",
  "AURELIA HEALTH",
  "KAIZEN LABS",
  "ATLAS BIOTECH",
  "HELIOS FINANCE",
  "SUMMIT INDUSTRIES",
  "NOVA MANUFACTURING",
  "QUANTUM RETAIL",
  "VERTEX CONSULTING",
  "ORION ENERGY",
];

export function TrustStrip() {
  const doubled = [...ENTERPRISES, ...ENTERPRISES];

  return (
    <section className="hairline-b">
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20 py-10">
        <p className="text-center eyebrow mb-6">
          Trusted by enterprises across 140+ countries
        </p>
        <div className="relative overflow-hidden">
          <div className="ticker-track text-ot-smoke text-sm font-mono tracking-[0.22em]">
            {doubled.map((name, i) => (
              <span key={i} className="shrink-0">
                {name} <span className="mx-4 text-ot-steel">✦</span>
              </span>
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ot-obsidian to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ot-obsidian to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
