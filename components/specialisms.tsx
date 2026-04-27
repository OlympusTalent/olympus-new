const VERTICALS = [
  {
    eyebrowColor: "text-ot-violet",
    badge: "High Demand",
    badgeColor: "text-ot-signal border-ot-signal/30",
    title: "Global Payroll",
    subtitle: "Payroll Transformation Hiring",
    body: "Implementation specialists, payroll directors, compliance architects, HRIS transformation leads. From ADP to Dayforce to SAP — we know the systems, we know the people, and we know who can lead a multi-country payroll migration without breaking stride.",
    stats: ["247 live roles", "42 countries", "11-day avg hire"],
    linkText: "Explore Global Payroll Recruitment",
    linkColor: "text-ot-violet hover:text-ot-cyan",
    linkHref: "/payroll",
  },
  {
    eyebrowColor: "text-ot-cyan",
    badge: "Transforming",
    badgeColor: "text-ot-warn border-ot-warn/30",
    title: "HR Leadership",
    subtitle: "HR Transformation Recruitment",
    body: "CHROs, Heads of People, HR transformation leads, OD specialists. The function is being rebuilt from compliance to commercial. We place the leaders who drive that shift — culture architects, not policy administrators.",
    stats: ["189 live roles", "38 countries", "13-day avg hire"],
    linkText: "Explore HR Transformation Hiring",
    linkColor: "text-ot-cyan hover:text-ot-violet",
    linkHref: "/hr",
  },
  {
    eyebrowColor: "text-ot-signal",
    badge: "Scaling",
    badgeColor: "text-ot-magenta border-ot-magenta/30",
    title: "IT & Engineering",
    subtitle: "Engineering Scale Builds",
    body: "CTOs, Engineering VPs, platform architects, DevOps leads, security engineers. When you need to build a 50-person engineering org in 90 days — or find the one principal engineer who can untangle your legacy stack — this is the infrastructure.",
    stats: ["412 live roles", "56 countries", "9-day avg hire"],
    linkText: "Explore IT Engineering Recruitment",
    linkColor: "text-ot-signal hover:text-ot-cyan",
    linkHref: "/it-engineering",
  },
  {
    eyebrowColor: "text-ot-warn",
    badge: "Strategic",
    badgeColor: "text-ot-violet border-ot-violet/30",
    title: "Finance & Control",
    subtitle: "Finance Transformation Hiring",
    body: "CFOs, Financial Controllers, FP&A directors, audit and compliance leaders. Finance isn't back-office anymore — it's the strategic engine. We find the people who can run it at that level, across every regulatory environment on the planet.",
    stats: ["198 live roles", "35 countries", "12-day avg hire"],
    linkText: "Explore Finance Recruitment",
    linkColor: "text-ot-warn hover:text-ot-cyan",
    linkHref: "/finance",
  },
];

export function Specialisms() {
  return (
    <section id="infrastructure" className="py-28 md:py-36 border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow text-ot-violet">05 / Hiring Infrastructure</span>
          <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.02] text-[clamp(2rem,4.5vw,3.5rem)]">
            Four verticals. Global reach.
            <br />
            <span className="text-ot-ash">One operating standard.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {VERTICALS.map((v) => (
            <div key={v.title} className="grad-border p-8 lg:p-10 data-card group">
              <div className="flex items-center justify-between mb-6">
                <span className={`eyebrow ${v.eyebrowColor}`}>Specialism</span>
                <span
                  className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border uppercase ${v.badgeColor}`}
                >
                  {v.badge}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                {v.title}
              </h3>
              <p className="font-serif italic text-ot-ash text-lg mb-4">
                {v.subtitle}
              </p>
              <p className="text-ot-ash text-sm leading-relaxed mb-6">
                {v.body}
              </p>
              <div className="flex items-center gap-6 text-xs text-ot-smoke font-mono">
                {v.stats.map((stat, i) => (
                  <span key={stat} className="flex items-center gap-6">
                    {i > 0 && <span className="h-3 w-px bg-ot-steel" />}
                    <span>{stat}</span>
                  </span>
                ))}
              </div>
              <a
                href={v.linkHref}
                className={`mt-6 inline-flex items-center gap-2 text-sm transition-colors ${v.linkColor}`}
              >
                {v.linkText} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
