import { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

const URL = 'https://www.olympus-talent.com/global-payroll-executive-search';
const DESCRIPTION =
  'Executive search for Heads of Global Payroll, Global Payroll Directors and VPs of Payroll. Multi-country payroll leadership, fully remote roles.';

export const metadata: Metadata = {
  title: 'Global Payroll Executive Search | Olympus Talent',
  description: DESCRIPTION,
  keywords:
    'global payroll executive search, head of global payroll recruitment, global payroll director search, VP of payroll recruitment, payroll leadership headhunter',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Global Payroll Executive Search | Olympus Talent',
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
};

const ROLES = [
  {
    title: 'Head of Global Payroll',
    body: 'Owns the multi-country payroll function, the provider estate and the controls behind it.',
    colour: 'text-ot-violet',
  },
  {
    title: 'Global Payroll Director',
    body: 'Runs regional or global payroll operations, teams and vendor performance.',
    colour: 'text-ot-cyan',
  },
  {
    title: 'VP of Payroll',
    body: 'Sits at the executive table. Owns payroll strategy, budget and the link to Finance and HR.',
    colour: 'text-ot-signal',
  },
  {
    title: 'Regional Payroll Leads',
    body: 'EMEA, Americas and APAC leaders reporting into a global function.',
    colour: 'text-ot-warn',
  },
];

const TRIGGERS = [
  'Consolidating many country payrolls onto one platform.',
  'Changing global payroll or EOR provider.',
  'Integrating payroll after an acquisition.',
  'Fixing a compliance failure, an audit finding or a missed filing.',
  'Building a global function for the first time as the business crosses borders.',
];

const STEPS = [
  ['Brief', 'We map the countries, the platforms, the reporting line and what the first twelve months must deliver.'],
  ['Map', 'We identify the payroll leaders who have already solved your problem, at your scale.'],
  ['Approach', 'Direct and confidential. Most of the right people are not looking.'],
  ['Assess', 'Country coverage, platform depth, controls, team leadership. Every candidate is verified under our Verified Hire Framework.'],
  ['Shortlist', 'A short list. Each candidate comes with evidence, not adjectives.'],
  ['Close', 'Offer, notice period, start date. We stay on it until they are in the seat.'],
];

const FAQS = [
  {
    q: 'Do you only recruit payroll leaders?',
    a: 'No. Olympus Talent also recruits HR, Finance and IT Engineering leaders. Payroll is where we go deepest.',
  },
  {
    q: 'Can you search across several countries at once?',
    a: 'Yes. Multi-country payroll leadership is the core of this service. Tell us the countries and we tell you where the talent sits.',
  },
  {
    q: 'Have you placed payroll leaders at VP and Director level?',
    a: 'Yes. A VP of Implementation and Directors of Payroll Operations, all permanent, placed into a global EOR and payroll provider between 2022 and 2026, covering EMEA and the US. Every one is still in the role. References are available on request.',
  },
  {
    q: 'Are the roles remote?',
    a: 'Yes. Every role Olympus Talent works on is fully remote.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Global Payroll Executive Search',
      serviceType: 'Executive search',
      description: DESCRIPTION,
      url: URL,
      areaServed: 'Worldwide',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Olympus Talent',
        url: 'https://www.olympus-talent.com',
        email: 'ian@olympus-talent.com',
        telephone: '+44 7713 055409',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function GlobalPayrollExecutiveSearchPage() {
  return (
    <>
      <SiteNav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-ot-obsidian text-ot-bone">
        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden px-6 py-32">
          <div className="hero-glow absolute inset-0" />
          <div className="relative z-10 max-w-4xl text-center">
            <div className="eyebrow mb-6">Executive Search</div>
            <h1 className="text-5xl md:text-7xl font-instrument-serif font-bold leading-tight mb-8">
              Global Payroll <span className="gradient-text">Executive Search</span>
            </h1>
            <div className="text-xl text-ot-ash max-w-2xl mx-auto space-y-4 mb-12">
              <p>Olympus Talent runs executive search for the people who own payroll across borders.</p>
              <p className="text-ot-bone">Head of Global Payroll. Global Payroll Director. VP of Payroll.</p>
              <p>The leader who signs off pay for thousands of people in dozens of countries. Every month. Without a second chance.</p>
              <p>Get that hire wrong and you find out on payday.</p>
              <p className="text-ot-bone">We make sure you don&apos;t.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book/advisory" className="btn-primary">
                Start a Leadership Search
              </Link>
              <Link href="/payroll" className="btn-ghost">
                All Payroll Hiring
              </Link>
            </div>
          </div>
        </section>

        {/* Who we place */}
        <section className="relative py-24 px-6 bg-ot-midnight border-t border-b border-ot-steel">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">Who We Place</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {ROLES.map((r) => (
                <article key={r.title}>
                  <h3 className={`text-xl font-bold mb-3 ${r.colour}`}>{r.title}</h3>
                  <p className="text-ot-ash leading-relaxed">{r.body}</p>
                </article>
              ))}
            </div>
            <p className="text-ot-bone mt-12">Every role we fill is fully remote.</p>
          </div>
        </section>

        {/* When buyers call */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">When Buyers Call Us</h2>
            <p className="text-ot-ash text-lg mb-10">
              Payroll leadership searches rarely start on a quiet day. They start when something is moving.
            </p>
            <ol className="space-y-4">
              {TRIGGERS.map((t, i) => (
                <li key={t} className="flex gap-4 text-ot-bone">
                  <span className="text-ot-cyan font-bold w-6 shrink-0">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <p className="text-ot-ash text-lg mt-10">
              Each one needs a different leader. We search for the one your situation needs.
            </p>
          </div>
        </section>

        {/* How a search runs */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-ot-midnight via-ot-obsidian to-ot-midnight">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12">How a Search Runs</h2>
            <ol className="space-y-8">
              {STEPS.map(([name, body], i) => (
                <li key={name} className="border-l-2 border-ot-violet pl-6">
                  <h3 className="text-lg font-bold text-ot-bone mb-2">
                    {i + 1}. {name}
                  </h3>
                  <p className="text-ot-ash">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Recent mandates */}
        <section className="relative py-24 px-6 bg-ot-midnight border-t border-b border-ot-steel">
          <div className="max-w-3xl mx-auto">
            <div className="eyebrow mb-6">Recent Mandates</div>
            <div className="text-2xl md:text-3xl font-instrument-serif leading-snug space-y-5">
              <p>A VP of Implementation.</p>
              <p>Directors of Payroll Operations.</p>
              <p className="text-ot-ash text-xl font-sans">
                All permanent. All placed into a global EOR and payroll provider between 2022 and 2026.
              </p>
              <p className="text-ot-ash text-xl font-sans">Covering EMEA and the US. Reporting to the COO and the CEO.</p>
              <p className="gradient-text">Every one of them is still in the seat.</p>
              <p className="text-ot-ash text-base font-sans">References available on request.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-12 text-center">Questions Buyers Ask</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <article key={f.q} className="border-l-2 border-ot-cyan pl-6">
                  <h3 className="text-lg font-bold text-ot-cyan mb-2">{f.q}</h3>
                  <p className="text-ot-ash">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-6 bg-ot-obsidian text-center border-t border-ot-steel">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-instrument-serif font-bold mb-6">Hiring a Global Payroll Leader?</h2>
            <p className="text-ot-ash text-lg mb-2">Speak to Ian O&apos;Callaghan.</p>
            <p className="text-ot-bone text-lg mb-8">
              <a href="tel:+447713055409" className="hover:text-ot-cyan">+44 7713 055409</a>
              {' / '}
              <a href="mailto:ian@olympus-talent.com" className="hover:text-ot-cyan">ian@olympus-talent.com</a>
            </p>
            <Link href="/book/advisory" className="btn-primary inline-block">
              Start a Leadership Search
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
