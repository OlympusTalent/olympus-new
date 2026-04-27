import { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance Recruitment | Olympus Talent',
  description: 'CFO recruitment and financial controller hiring. FP&A director, audit, and treasury specialists across 35 countries. Finance transformation recruitment for PE-backed companies.',
  keywords: 'CFO recruitment, financial controller hiring, FP&A director, finance transformation, CFO search, treasury recruitment',
};

export default function FinancePage() {
  return (
    <>
      <SiteNav />

      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
          <div className="hero-glow absolute inset-0" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="eyebrow mb-6">Finance Leadership</div>
            <h1 className="text-5xl md:text-7xl font-instrument-serif font-bold leading-tight mb-6">
              Finance Isn't Back-Office.
              <span className="block gradient-text">It's the Strategic Engine</span>
            </h1>
            <p className="text-xl text-ot-ash mb-12 max-w-2xl mx-auto">
              The best CFOs and financial controllers aren't accountants—they're business strategists. They drive value creation, navigate regulatory complexity, and give their CEO the insights to move faster. We place finance leaders who sit at the strategy table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary">
                Start a Finance Hiring Conversation
              </Link>
              <Link href="/jobs" className="btn-ghost">
                Explore Finance Roles
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative bg-ot-midnight py-16 border-t border-b border-ot-steel">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">198</div>
              <p className="text-ot-ash text-sm">Live Finance Roles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">35</div>
              <p className="text-ot-ash text-sm">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">12</div>
              <p className="text-ot-ash text-sm">Days Avg. to Hire</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">96%</div>
              <p className="text-ot-ash text-sm">Retention Rate</p>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">The Modern Finance Mandate</h2>
            <div className="space-y-8">
              <article>
                <h3 className="text-xl font-bold text-ot-violet mb-3">PE Value Creation & Operational Rigor</h3>
                <p className="text-ot-ash leading-relaxed">
                  PE-backed companies need CFOs and Controllers who understand value creation playbooks. You're not just closing the books—you're identifying operational inefficiencies, building EBITDA roadmaps, and creating the metrics discipline that drives exits. Finance leaders who can speak PE language while executing flawlessly.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-cyan mb-3">FP&A as Strategic Business Partner</h3>
                <p className="text-ot-ash leading-relaxed">
                  Growth companies need FP&A leaders who aren't just building annual budgets. They're running scenario planning, unit economics analysis, and pricing strategy. They're sitting in product and commercial meetings. They're helping the CEO understand the financial implications of every major decision.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-signal mb-3">Regulatory & Compliance Complexity</h3>
                <p className="text-ot-ash leading-relaxed">
                  Multi-geography operations, data privacy regulations, SOX 404 compliance, tax optimization—the regulatory landscape is intricate and constantly evolving. Your audit and tax leaders must anticipate changes, manage risk, and create scalable compliance frameworks.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-warn mb-3">Systems & Process at Scale</h3>
                <p className="text-ot-ash leading-relaxed">
                  Finance teams that scale on spreadsheets become bottlenecks. Modern financial controllers are system architects—they design close processes, accounting infrastructure, and reporting automation that enables growth without proportional headcount increases.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Who We Place */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Who We Place in Finance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { role: 'CFOs', desc: 'P&L ownership, financial strategy, board-level credibility.' },
                { role: 'Financial Controllers', desc: 'Close operations, GAAP compliance, accounting infrastructure.' },
                { role: 'FP&A Directors', desc: 'Scenario planning, unit economics, strategic finance.' },
                { role: 'Audit & Risk Leaders', desc: 'SOX compliance, internal controls, risk frameworks.' },
                { role: 'Treasury Specialists', desc: 'Cash management, capital structure, liquidity strategy.' },
                { role: 'Tax Leaders', desc: 'Multi-jurisdiction tax strategy, compliance, optimization.' },
              ].map((item, i) => (
                <div key={i} className="glass grad-border p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-ot-cyan mb-2">{item.role}</h3>
                  <p className="text-ot-ash text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Systems */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-ot-obsidian to-ot-midnight">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-ot-ash mb-8 text-center">Finance Systems & Platforms We Know</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['SAP S/4HANA', 'NetSuite', 'Anaplan', 'BlackLine', 'Power BI', 'Workiva', 'Salesforce Finance', 'OneStream', 'Adaptive Insights', 'Alteryx'].map((system) => (
                <span key={system} className="data-card px-4 py-2 rounded-full text-sm border border-ot-steel">
                  {system}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-4xl mx-auto glass-strong grad-border rounded-2xl p-12">
            <div className="eyebrow mb-4">Case Study</div>
            <h2 className="text-3xl font-instrument-serif font-bold mb-6 text-ot-cyan">
              PE-Backed SaaS: 3 C-Suite Finance Hires in 6 Weeks
            </h2>
            <p className="text-ot-ash mb-6 leading-relaxed">
              A PE fund acquired a Series B SaaS company with mandate to build operating rigor and accelerate unit economics. They needed a CFO (external focus, strategy, investor relations), a Controller (internal, close, compliance), and an FP&A Director (modeling, scenario planning).
            </p>
            <p className="text-ot-ash mb-6 leading-relaxed">
              The timeline was aggressive: 6 weeks to full deployment. We sourced from our network of finance leaders who had worked with PE before. We found a CFO from a similar SaaS company, a Controller with NetSuite implementation experience, and an FP&A Director who had built financial modeling at a venture-backed company.
            </p>
            <p className="text-ot-ash mb-6 leading-relaxed">
              By week 6, all three were onboarded and operating. Within 90 days, they had built a consolidated financial model, identified $2.3M in operational improvements, and established monthly board reporting. The company exited on improved multiples 18 months later.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-ot-steel">
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">3</div>
                <p className="text-ot-ash text-sm">C-Suite Placements</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-cyan mb-1">6 weeks</div>
                <p className="text-ot-ash text-sm">Full Deployment</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">$2.3M</div>
                <p className="text-ot-ash text-sm">Improvements Found</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Finance Hiring Questions Answered</h2>
            <div className="space-y-6">
              <article className="border-l-2 border-ot-violet pl-6">
                <h3 className="text-lg font-bold text-ot-violet mb-2">What makes a world-class CFO?</h3>
                <p className="text-ot-ash">Business acumen first, accounting expertise second. The best CFOs understand unit economics, can speak strategy with the CEO and board, and know when to push back. They've typically scaled companies through significant growth or transformation. They're comfortable with ambiguity and change.</p>
              </article>
              <article className="border-l-2 border-ot-cyan pl-6">
                <h3 className="text-lg font-bold text-ot-cyan mb-2">How do you evaluate candidates for PE-backed roles?</h3>
                <p className="text-ot-ash">We assess their understanding of value creation levers, experience with multiple PE exits, ability to build financial rigor quickly, and comfort with frequent reporting and scrutiny. We talk to their PE sponsors. We understand their approach to operational improvements and how they prioritize initiatives.</p>
              </article>
              <article className="border-l-2 border-ot-signal pl-6">
                <h3 className="text-lg font-bold text-ot-signal mb-2">What's the difference between a Controller and a CFO?</h3>
                <p className="text-ot-ash">Controllers focus internally—close operations, financial reporting, accounting infrastructure, compliance. CFOs focus externally—strategy, capital allocation, board relations, investor communications. You typically need both in scaling companies. The best pairs have deep mutual respect and complementary skill sets.</p>
              </article>
              <article className="border-l-2 border-ot-warn pl-6">
                <h3 className="text-lg font-bold text-ot-warn mb-2">Why is finance leadership retention so high?</h3>
                <p className="text-ot-ash">Finance leaders are hired into roles with clear P&L accountability and impact visibility. They see results—operational improvements, funding rounds, exits. We ensure alignment on expectations and avoid mismatches between role scope and candidate ambition. Retention reflects good fit from day one.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Why Finance Hiring Matters */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-instrument-serif font-bold mb-8">Why Your Finance Leadership Matters Right Now</h2>
            <div className="space-y-6 text-ot-ash leading-relaxed">
              <p>
                Finance is often the last area where companies invest in great talent. But a great CFO isn't a cost center—they're a growth engine. They free up management to focus on strategy by running operations with discipline. They spot problems early. They create the metrics discipline that drives decision-making.
              </p>
              <p>
                The difference between a CFO who executes flawlessly and one who merely keeps the books is the difference between controlled growth and chaotic scaling. Between profitable scaling and burn. Between successful exits and missed opportunities.
              </p>
              <p>
                Whether you're scaling organically, pursuing PE backing, or planning an exit, your finance team is foundational. Let's help you build it right.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 bg-ot-obsidian text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">Ready to Transform Finance Leadership?</h2>
            <p className="text-ot-ash text-lg mb-8">
              Let's discuss your finance hiring challenges and find the right leaders for your strategy.
            </p>
            <Link href="/book/advisory" className="btn-primary inline-block">
              Schedule a Finance Hiring Consultation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
