import { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT & Engineering Recruitment | Olympus Talent',
  description: 'CTO recruitment and engineering scale hiring. VP Engineering, platform architects, and DevOps leaders across 56 countries. Build engineering teams that ship.',
  keywords: 'engineering recruitment, CTO hiring, VP Engineering, DevOps recruitment, engineering scale, platform architecture',
};

export default function EngineeringPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
          <div className="hero-glow absolute inset-0" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="eyebrow mb-6">Engineering at Scale</div>
            <h1 className="text-5xl md:text-7xl font-instrument-serif font-bold leading-tight mb-6">
              Build Engineering Teams That Ship.
              <span className="block gradient-text">Not Teams That Sit</span>
            </h1>
            <p className="text-xl text-ot-ash mb-12 max-w-2xl mx-auto">
              Most companies build engineering teams that are either scrappy and chaotic, or process-heavy and slow. We place engineering leaders who build teams that move with velocity while maintaining code quality, system reliability, and team cohesion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary">
                Start an Engineering Hiring Conversation
              </Link>
              <Link href="/jobs" className="btn-ghost">
                Explore Engineering Roles
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="relative bg-ot-midnight py-16 border-t border-b border-ot-steel">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">412</div>
              <p className="text-ot-ash text-sm">Live Engineering Roles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-cyan mb-2">56</div>
              <p className="text-ot-ash text-sm">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">9</div>
              <p className="text-ot-ash text-sm">Days Avg. to Hire</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ot-signal mb-2">92%</div>
              <p className="text-ot-ash text-sm">Retention Rate</p>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">Engineering Hiring at Scale Is Different</h2>
            <div className="space-y-8">
              <article>
                <h3 className="text-xl font-bold text-ot-violet mb-3">Velocity Without Recklessness</h3>
                <p className="text-ot-ash leading-relaxed">
                  Every engineering leader feels the pressure: ship faster, reduce time-to-market, move like a startup. But velocity without architecture is tech debt. We place engineering leaders who understand that sustainable speed comes from intentional design decisions, clear code standards, and investment in infrastructure.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-cyan mb-3">Building 50-Person Engineering Orgs in 90 Days</h3>
                <p className="text-ot-ash leading-relaxed">
                  Rapid scaling requires hiring velocity AND quality filtering. You need CTOs and VPs who can build hiring funnels, evaluate candidates ruthlessly, onboard new engineers in weeks (not months), and maintain culture as you grow 100%. The wrong hire in your first 20 is exponentially costly.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-signal mb-3">Systems Thinking at Every Level</h3>
                <p className="text-ot-ash leading-relaxed">
                  A single engineer can hack. A team of 20 needs architecture. A team of 100 needs systems thinking at every tier. You need platform architects, DevOps leaders, and Principal Engineers who think about observability, reliability, scalability, and cost from day one.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-bold text-ot-warn mb-3">Security & Compliance at the Core</h3>
                <p className="text-ot-ash leading-relaxed">
                  Security isn't a checklist. It's a cultural mindset embedded in architecture, code review, deployment processes, and hiring. We place engineering leaders who build security-first teams where every engineer thinks about threat models and data protection.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Who We Place */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Who We Place in Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { role: 'CTOs', desc: 'Technical visionaries setting engineering strategy and culture.' },
                { role: 'VPs of Engineering', desc: 'Scale operators building high-performing 50-300 person teams.' },
                { role: 'Platform Architects', desc: 'Infrastructure experts designing reliable, scalable systems.' },
                { role: 'DevOps Leads', desc: 'Automation-first engineers building deployment and observability systems.' },
                { role: 'Security Engineers', desc: 'Security-first mindset embedded in architecture and operations.' },
                { role: 'Principal Engineers', desc: 'Technical leaders setting standards and mentoring the organization.' },
              ].map((item, i) => (
                <div key={i} className="glass grad-border p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-ot-cyan mb-2">{item.role}</h3>
                  <p className="text-ot-ash text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-ot-obsidian to-ot-midnight">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-ot-ash mb-8 text-center">Technologies We Know Inside Out</h3>
            <div className="space-y-4">
              <div>
                <p className="text-ot-smoke text-sm mb-3 font-semibold">Languages & Frameworks</p>
                <div className="flex flex-wrap gap-3">
                  {['Go', 'Python', 'TypeScript', 'React', 'Rust', 'Java', 'Node.js', 'Next.js', 'FastAPI'].map((tech) => (
                    <span key={tech} className="data-card px-3 py-1 rounded-full text-sm border border-ot-steel">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-ot-smoke text-sm mb-3 font-semibold">Infrastructure & DevOps</p>
                <div className="flex flex-wrap gap-3">
                  {['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform', 'Helm', 'GitHub Actions', 'ArgoCD', 'Datadog'].map((tech) => (
                    <span key={tech} className="data-card px-3 py-1 rounded-full text-sm border border-ot-steel">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-ot-smoke text-sm mb-3 font-semibold">Databases & Storage</p>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch', 'Snowflake', 'BigQuery'].map((tech) => (
                    <span key={tech} className="data-card px-3 py-1 rounded-full text-sm border border-ot-steel">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-4xl mx-auto glass-strong grad-border rounded-2xl p-12">
            <div className="eyebrow mb-4">Case Study</div>
            <h2 className="text-3xl font-instrument-serif font-bold mb-6 text-ot-cyan">
              PE-Backed FinTech: Scaling Platform Team from 40 to 120 in 8 Months
            </h2>
            <p className="text-ot-ash mb-6 leading-relaxed">
              A Series C fintech company was acquired by a PE firm. The mandate was aggressive: integrate two engineering teams, build a unified platform, and ship 3 new products in 12 months. The platform team was 40 people. They needed 120.
            </p>
            <p className="text-ot-ash mb-6 leading-relaxed">
              We placed a VP of Engineering who had scaled financial services platforms at scale. In her first 60 days, she unified architecture standards, created an engineering ladder, and built a hiring funnel for platform engineers, DevOps leads, and security specialists. By month 8, the platform team had grown to 118 people. Code quality metrics improved. Deployment frequency increased 3x. The company shipped all three products on schedule.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-ot-steel">
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">80</div>
                <p className="text-ot-ash text-sm">New Hires</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-cyan mb-1">8 months</div>
                <p className="text-ot-ash text-sm">Scale Period</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-ot-signal mb-1">3x</div>
                <p className="text-ot-ash text-sm">Deploy Velocity</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Engineering Hiring Questions Answered</h2>
            <div className="space-y-6">
              <article className="border-l-2 border-ot-violet pl-6">
                <h3 className="text-lg font-bold text-ot-violet mb-2">What's the difference between a good CTO and a great one?</h3>
                <p className="text-ot-ash">Good CTOs build fast. Great CTOs build fast AND sustainable. They balance shipping velocity with technical debt management. They think about hiring and culture. They understand business constraints. They're comfortable saying "no" to avoid overengineering.</p>
              </article>
              <article className="border-l-2 border-ot-cyan pl-6">
                <h3 className="text-lg font-bold text-ot-cyan mb-2">How do you evaluate engineering candidates at scale?</h3>
                <p className="text-ot-ash">We look beyond coding interviews. We assess systems thinking, ability to operate under ambiguity, communication skills, and how they've handled technical decisions under time pressure. We talk to their peers, not just their managers. We understand their architectural opinions and whether they align with your vision.</p>
              </article>
              <article className="border-l-2 border-ot-signal pl-6">
                <h3 className="text-lg font-bold text-ot-signal mb-2">How fast can we hire 50 engineers without sacrificing quality?</h3>
                <p className="text-ot-ash">With the right VP or CTO, and a deliberate hiring strategy, 50-person teams can be built in 90-120 days. It requires: clear role definitions, prioritized hiring (hire leadership and senior engineers first), parallel processes, and rigorous reference checks. Quality doesn't mean slow—it means intentional.</p>
              </article>
              <article className="border-l-2 border-ot-warn pl-6">
                <h3 className="text-lg font-bold text-ot-warn mb-2">Why do engineering leaders we place have such high retention?</h3>
                <p className="text-ot-ash">They're hired into roles where they have clear technical and business mandate. We ensure alignment on architecture vision, team scope, and growth expectations. We also prioritize technical leaders who want autonomy and ownership—not managers who just want bigger teams.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Why Engineering Hiring Matters */}
        <section className="relative py-24 px-6 bg-ot-obsidian">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-instrument-serif font-bold mb-8">Why Your Next Engineering Leader Matters</h2>
            <div className="space-y-6 text-ot-ash leading-relaxed">
              <p>
                Your next CTO or VP Engineering will shape the technical culture of your company for the next 3-5 years. They'll decide architectural patterns, hiring standards, and whether your team moves like a startup or a legacy organization.
              </p>
              <p>
                The difference between a CTO who builds for speed and one who builds for scale can cost you millions in technical debt, or make you millions in market advantage. Get this hire right and everything else becomes easier.
              </p>
              <p>
                We've spent 15 years building engineering teams at scale. We know what separates mediocre engineers from exceptional ones. We know the networks. We know the questions to ask. Let's help you build your engineering function.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-6 bg-ot-obsidian text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">Ready to Build Engineering Excellence?</h2>
            <p className="text-ot-ash text-lg mb-8">
              Let's discuss how to hire the engineering leaders who will move your company forward.
            </p>
            <Link href="/book/advisory" className="btn-primary inline-block">
              Schedule an Engineering Hiring Consultation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
