import { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Payroll Recruitment | Olympus Talent',
  description: 'Global payroll recruitment specialists. Payroll director, compliance architect, and HRIS transformation hiring across 42 countries. 98% retention rate.',
  keywords: 'payroll recruitment, payroll director hiring, global payroll hiring, payroll transformation, compliance architect recruitment',
};

export default function PayrollPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
          <div className="hero-glow absolute inset-0" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="eyebrow mb-6">Global Payroll Hiring</div>
            <h1 className="text-5xl md:text-7xl font-instrument-serif font-bold leading-tight mb-6">
              The World's Most Complex Payroll Operations
              <span className="block gradient-text">Trust Olympus</span>
            </h1>
            <p className="text-xl text-ot-ash mb-12 max-w-2xl mx-auto">
              Whether you're managing payroll across 20 countries, migrating legacy systems, or building compliance-first operations, we place the architects who engineer payroll excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary">
                Start a Hiring Conversation
              </Link>
              <Link href="/jobs" className="btn-ghost">
                Explore Payroll Roles
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative bg-ot-midnight py-16 border-t border-b border-ot-steel">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">247</div>
              <p className="text-ot-ash text-sm">Live Payroll Roles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">42</div>
              <p className="text-ot-ash text-sm">Countries Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">11</div>
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
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">Why Payroll Hiring Is Different</h2>
            <div className="space-y-8">
              <article>
                <h3 className="text-xl font-bold text-ot-violet mb-3">Multi-Country Compliance Is Non-Negotiable</h3>
                <p className="text-ot-ash leading-relaxed">
                  Every country has its own tax codes, social contributions, pension requirements, and legislative frameworks. Your payroll director must navigate France's 35-hour week rules, Germany's Sozialversicherung, UK NI thresholds, and Singapore's CPF—simultaneously. One oversight cascades into audit failures and financial exposure.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-cyan mb-3">System Migrations Are Career-Defining Events</h3>
                <p className="text-ot-ash leading-relaxed">
                  Moving from legacy payroll (ADP, SAP legacy) to cloud-first platforms (Workday, Dayforce) requires architects who've managed 10,000+ employee migrations, parallel runs, and cutover weekends where every penny is watched.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-signal mb-3">Vendor Management & System Integration</h3>
                <p className="text-ot-ash leading-relaxed">
                  You're coordinating with HRIS platforms, benefits administrators, tax compliance services, and financial reporting tools. The best payroll leaders build scalable integrations, not spreadsheet workarounds.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-warn mb-3">Regulatory Complexity Requires Specialized Knowledge</h3>
                <p className="text-ot-ash leading-relaxed">
                  GDPR for employee data, right-to-work verification, automated tax filing, real-time information requirements—the regulatory landscape shifts monthly. Your payroll team must anticipate changes before they hit your payroll calendar.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Who We Place */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Who We Place in Payroll</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { role: 'Payroll Directors', desc: 'P&L ownership for payroll operations across multiple territories.' },
                { role: 'Implementation Leads', desc: 'System migrations, cutover management, parallel run coordination.' },
                { role: 'Compliance Architects', desc: 'Multi-country regulatory expertise, tax strategy, audit readiness.' },
                { role: 'HRIS Transformation Leads', desc: 'System consolidation, workflow redesign, end-to-end integration.' },
                { role: 'Payroll Analysts (Senior)', desc: 'Processing expertise, reconciliation mastery, anomaly detection.' },
                { role: 'Global Payroll Managers', desc: 'Operational excellence across regions, vendor management.' },
              ].map((item, i) => (
                <div key={i} className="glass grad-border p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-ot-cyan mb-2">{item.role}</h3>
                  <p className="text-ot-ash text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Systems We Know */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-ot-obsidian to-ot-midnight">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-ot-ash mb-8 text-center">Platforms We've Mastered</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['ADP', 'Dayforce', 'SAP SuccessFactors', 'Workday', 'CloudPay', 'Deel', 'Papaya Global', 'Rippling', 'BrightPay', 'Guidepoint'].map((system) => (
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
              20 Payroll Specialists Across 20 Countries in 2 Weeks
            </h2>
            <p className="text-ot-ash mb-6 leading-relaxed">
              An FTSE 250 manufacturer faced urgent compliance risk: they were consolidating payroll operations from 20 fragmented legacy systems into a single Workday instance. They needed experienced payroll professionals in each geography—simultaneously—to validate data migration, manage cutover, and support regulatory sign-off.
            </p>
            <p className="text-ot-ash mb-6 leading-relaxed">
              Olympus sourced, vetted, and placed 20 candidates across France, Germany, UK, Spain, Netherlands, Scandinavia, Poland, and other regions. Each hire had proven experience in multi-country payroll, system implementation, and compliance. Deployment happened inside 14 days. The migration succeeded on schedule. Zero compliance failures.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-ot-steel">
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">20</div>
                <p className="text-ot-ash text-sm">Placements</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-cyan mb-1">14 days</div>
                <p className="text-ot-ash text-sm">Completion Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">100%</div>
                <p className="text-ot-ash text-sm">On Schedule</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Payroll Hiring Questions Answered</h2>
            <div className="space-y-6">
              <article className="border-l-2 border-ot-violet pl-6">
                <h3 className="text-lg font-bold text-ot-violet mb-2">How long does it take to hire a Payroll Director?</h3>
                <p className="text-ot-ash">Our average time-to-hire for payroll leadership is 11 days from brief to offer acceptance. Multi-country roles take slightly longer due to regulatory verification and vendor reference checks, typically 15-18 days.</p>
              </article>
              <article className="border-l-2 border-ot-cyan pl-6">
                <h3 className="text-lg font-bold text-ot-cyan mb-2">What makes a strong global payroll candidate?</h3>
                <p className="text-ot-ash">Experience in 3+ countries, proficiency with enterprise payroll platforms (Workday, SAP, Dayforce), demonstrated compliance expertise, and ability to manage stakeholders across HR, Finance, and IT. Cultural fit and system thinking matter as much as technical knowledge.</p>
              </article>
              <article className="border-l-2 border-ot-signal pl-6">
                <h3 className="text-lg font-bold text-ot-signal mb-2">How do you evaluate payroll candidates for system migrations?</h3>
                <p className="text-ot-ash">We assess prior migration experience, their approach to parallel runs and cutover planning, how they've handled regulatory signoff, and their ability to build internal training programs. We speak to CFOs and IT leads who've worked with them during transformation.</p>
              </article>
              <article className="border-l-2 border-ot-warn pl-6">
                <h3 className="text-lg font-bold text-ot-warn mb-2">What's your retention rate for payroll placements?</h3>
                <p className="text-ot-ash">98% year-one retention. Payroll is a mission-critical function—candidates we place are typically energized by the scope and impact. We also ensure clear role expectations, growth pathways, and executive alignment before placement.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 bg-ot-obsidian text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">Ready to Transform Your Payroll Operations?</h2>
            <p className="text-ot-ash text-lg mb-8">
              Let's discuss your payroll hiring challenges. Whether you're scaling, migrating, or building compliance-first, we have the right specialists.
            </p>
            <Link href="/book/advisory" className="btn-primary inline-block">
              Schedule a Payroll Hiring Consultation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
