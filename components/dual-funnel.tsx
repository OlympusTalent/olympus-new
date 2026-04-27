export function DualFunnel() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <p className="eyebrow">01 / Dual-Funnel Entry</p>
          <h2 className="mt-4 font-sans text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.02em] leading-[1.05]">
            Recruitment isn&apos;t a transaction.
            <br />
            <span className="text-ot-ash">It&apos;s infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Client */}
          <div className="grad-border p-10 lg:p-12 group transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-8">
              <span className="eyebrow text-ot-violet">For Clients</span>
              <span className="text-ot-smoke font-mono text-xs">→ HIRING</span>
            </div>
            <h3 className="font-sans text-3xl lg:text-4xl font-semibold tracking-[-0.015em] mb-4">
              Hiring talent?
            </h3>
            <p className="text-ot-ash leading-relaxed mb-8 max-w-md">
              Stop paying percentage fees for 14-week vacancies. Subscribe to a
              global delivery team and fill critical roles in two weeks — with
              culture alignment scored before a single interview.
            </p>

            <ul className="space-y-3 mb-10 text-sm text-ot-ash">
              <li className="flex gap-3">
                <span className="text-ot-cyan">◆</span>
                Embedded hiring teams, global-ready
              </li>
              <li className="flex gap-3">
                <span className="text-ot-cyan">◆</span>
                Subscription model — no % fees, no surprises
              </li>
              <li className="flex gap-3">
                <span className="text-ot-cyan">◆</span>
                FIRE Protocol™ scoring on every shortlist
              </li>
            </ul>

            <a href="#book" className="btn-primary">
              Book a strategy call
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Candidate */}
          <div className="grad-border p-10 lg:p-12 group transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-8">
              <span className="eyebrow text-ot-cyan">For Candidates</span>
              <span className="text-ot-smoke font-mono text-xs">→ CAREER</span>
            </div>
            <h3 className="font-sans text-3xl lg:text-4xl font-semibold tracking-[-0.015em] mb-4">
              Looking for a role?
            </h3>
            <p className="text-ot-ash leading-relaxed mb-8 max-w-md">
              1,247 live roles across Payroll, HR, Finance, and Tech. Apply in
              one click. Get scored against culture fit, not keyword matches.
              Land the role you were actually built for.
            </p>

            <ul className="space-y-3 mb-10 text-sm text-ot-ash">
              <li className="flex gap-3">
                <span className="text-ot-violet">◆</span>
                AI-Powered Matching against live roles
              </li>
              <li className="flex gap-3">
                <span className="text-ot-violet">◆</span>
                Candidate Elevation Levels — Raw to Elite
              </li>
              <li className="flex gap-3">
                <span className="text-ot-violet">◆</span>
                Salary benchmarking by region &amp; function
              </li>
            </ul>

            <a href="#search" className="btn-ghost">
              Search 1,247 roles
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
