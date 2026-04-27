import { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HR Leadership Recruitment | Olympus Talent',
  description: 'CHRO recruitment and HR transformation hiring. Head of People, HR transformation leads, and organizational development specialists across 38 countries. 98% retention.',
  keywords: 'CHRO recruitment, Head of People hiring, HR transformation, HR leadership search, organizational development',
};

export default function HRPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
          <div className="hero-glow absolute inset-0" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="eyebrow mb-6">HR Leadership Transformation</div>
            <h1 className="text-5xl md:text-7xl font-instrument-serif font-bold leading-tight mb-6">
              HR Isn't Compliance Anymore.
              <span className="block gradient-text">It's the Operating System</span>
            </h1>
            <p className="text-xl text-ot-ash mb-12 max-w-2xl mx-auto">
              The best companies are rebuilding HR from the ground up. From compliance gatekeepers to culture architects and commercial leaders. We find the CHROs and Heads of People who engineer human performance at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary">
                Start an HR Hiring Conversation
              </Link>
              <Link href="/jobs" className="btn-ghost">
                Explore HR Roles
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative bg-ot-midnight py-16 border-t border-b border-ot-steel">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">189</div>
              <p className="text-ot-ash text-sm">Live HR Roles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">38</div>
              <p className="text-ot-ash text-sm">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">13</div>
              <p className="text-ot-ash text-sm">Days Avg. to Hire</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">98%</div>
              <p className="text-ot-ash text-sm">Retention Rate</p>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">The New HR Mandate</h2>
            <div className="space-y-8">
              <article>
                <h3 className="text-xl font-bold text-ot-violet mb-3">From Compliance to Commercial</h3>
                <p className="text-ot-ash leading-relaxed">
                  Yesterday's HR function was about policy enforcement and risk mitigation. Today's HR leaders are talent architects driving retention, engagement, and organizational velocity. They understand unit economics. They speak the language of growth. They sit in product and strategy meetings. The best CHROs are part CFO, part CEO.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-cyan mb-3">Culture Architects for Hypergrowth</h3>
                <p className="text-ot-ash leading-relaxed">
                  Scaling from 200 to 500 people in 12 months requires intentional culture design. Not culture consultants—culture engineers. Leaders who can build processes that scale values, maintain identity as you 10x headcount, and make hiring decisions that move the needle on capability.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-signal mb-3">Talent as Competitive Advantage</h3>
                <p className="text-ot-ash leading-relaxed">
                  In knowledge economies, people ARE the strategy. CHROs who can build talent funnels, reduce cost-per-hire, improve hiring velocity without sacrificing quality, and create environments where top performers choose to stay—these leaders become indispensable to the business.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-warn mb-3">Building Scalable Operating Models</h3>
                <p className="text-ot-ash leading-relaxed">
                  As you scale across regions, functions, and geographies, your HR operating model must evolve. Shared services, HRBP models, self-service platforms, global policy harmonization—the best HR leaders build systems that scale people operations without scaling headcount proportionally.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Who We Place */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Who We Place in HR Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { role: 'CHROs', desc: 'Board-level HR leaders with P&L accountability and business acumen.' },
                { role: 'Heads of People', desc: 'Executive operators building talent strategy and organizational design.' },
                { role: 'HR Transformation Leads', desc: 'System and process architects scaling from manual to automated operations.' },
                { role: 'Organizational Development Specialists', desc: 'Culture engineers designing scalable organizational models.' },
                { role: 'Talent Acquisition Leaders', desc: 'Building recruitment functions that scale with company growth.' },
                { role: 'HRBPs (Strategic)', desc: 'Business partners embedded in operating units, driving commercial HR.' },
              ].map((item, i) => (
                <div key={i} className="glass grad-border p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-ot-cyan mb-2">{item.role}</h3>
                  <p className="text-ot-ash text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR Tech Stack */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-ot-obsidian to-ot-midnight">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-ot-ash mb-8 text-center">HR Systems & Platforms We Know</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Workday', 'ADP Workforce Now', 'SuccessFactors', 'BambooHR', 'Rippling', 'Lattice', 'CultureAmp', 'Ashby', 'Greenhouse', 'LinkedIn Recruiter'].map((system) => (
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
              Scaling from 200 to 500 People in 12 Months
            </h2>
            <p className="text-ot-ash mb-6 leading-relaxed">
              A Series B SaaS company faced a scaling inflection. Their Head of People was excellent at managing the first 200 people, but their operating model couldn't support 5x growth. Hiring was slowing. Onboarding was chaotic. Retention was declining. Culture was starting to fray.
            </p>
            <p className="text-ot-ash mb-6 leading-relaxed">
              We placed a new Chief People Officer who had scaled similar companies from 150 to 800 people. In her first 90 days, she redesigned the talent acquisition function (improved time-to-hire by 30%), built an HRBP model, automated onboarding, and created a scalable culture program. By month 12, the company had hit 520 employees. Retention improved to 94%. Engagement scores were the highest they'd ever been.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-ot-steel">
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">300</div>
                <p className="text-ot-ash text-sm">New Hires</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-cyan mb-1">12 months</div>
                <p className="text-ot-ash text-sm">Implementation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">94%</div>
                <p className="text-ot-ash text-sm">Retention</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">HR Hiring Questions Answered</h2>
            <div className="space-y-6">
              <article className="border-l-2 border-ot-violet pl-6">
                <h3 className="text-lg font-bold text-ot-violet mb-2">What makes a world-class CHRO?</h3>
                <p className="text-ot-ash">Business acumen and P&L thinking. Experience scaling talent in high-growth environments. Ability to build systems and delegate. Credibility with C-suite and board. And critically—they view HR as a competitive advantage, not an overhead function.</p>
              </article>
              <article className="border-l-2 border-ot-cyan pl-6">
                <h3 className="text-lg font-bold text-ot-cyan mb-2">How long does it take to hire a Head of People?</h3>
                <p className="text-ot-ash">Average placement time for executive HR roles is 13-16 days. These are typically smaller candidate pools, but our network in scaling tech companies is deep. We often know the right person before you've even finished writing the job description.</p>
              </article>
              <article className="border-l-2 border-ot-signal pl-6">
                <h3 className="text-lg font-bold text-ot-signal mb-2">What does HR transformation experience look like?</h3>
                <p className="text-ot-ash">We look for leaders who've redesigned talent acquisition, implemented HRIS platforms, moved from reactive to proactive HR, or scaled operating models. We assess their change management capability and ability to drive adoption across the organization.</p>
              </article>
              <article className="border-l-2 border-ot-warn pl-6">
                <h3 className="text-lg font-bold text-ot-warn mb-2">Why is HR leadership retention so high?</h3>
                <p className="text-ot-ash">HR leaders we place are typically energized by impact. They see clear opportunity to transform their organization. We also ensure deep alignment with company strategy, board support, and realistic expectations about the role scope before day one.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Why HR Matters Section */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-instrument-serif font-bold mb-8">Why HR Hiring Matters Right Now</h2>
            <div className="space-y-6 text-ot-ash leading-relaxed">
              <p>
                The companies winning in 2026 aren't hiring better—they're retaining better. They're moving faster because their organization scales with their ambition. They have CHROs and Heads of People who sit at the strategy table, not the compliance corner.
              </p>
              <p>
                The best talent moves to companies with intentional culture and clear growth paths. The best leaders move to companies where they're trusted to drive transformation. A world-class CHRO doesn't just manage people—they architect the organization.
              </p>
              <p>
                If your HR function is still transactional, you're leaving competitive advantage on the table. Let's help you build a world-class HR team.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 bg-ot-obsidian text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">Ready to Transform HR?</h2>
            <p className="text-ot-ash text-lg mb-8">
              Let's discuss how to build an HR function that becomes your competitive advantage.
            </p>
            <Link href="/book/advisory" className="btn-primary inline-block">
              Schedule an HR Leadership Consultation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
