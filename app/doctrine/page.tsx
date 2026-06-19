import { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "The Bansen Doctrine™ — Olympus Talent",
  description:
    "Eight interconnected layers for hiring and operating under pressure. The Bansen Doctrine™ is the operating logic beneath the Olympus Talent OS™ — from clarity of decision to the machines, trust networks and learning systems that decide whether it holds.",
  keywords:
    "Bansen Doctrine, hiring doctrine, decision infrastructure, Kikai, Shinrai, Kaizen, Olympus Talent OS, organisational trust, adaptive learning",
};

type Domain = { n: string; d: string };
type Diagnostic = { name: string; trademark?: boolean; question: string };
type Extra = { label: string; steps: string[]; note?: string };

type Layer = {
  roman: string;
  kanji: string;
  term: string;
  name: string;
  title: string;
  canonical: boolean;
  text: string;
  border: string;
  bg: string;
  coreQuestion: string;
  intro: string;
  domainsLabel: string;
  domains: Domain[];
  diagnostic: Diagnostic;
  extras?: Extra[];
};

const LAYERS: Layer[] = [
  {
    roman: "I",
    kanji: "精",
    term: "精",
    name: "Seishin",
    title: "Clarity",
    canonical: false,
    text: "text-ot-violet",
    border: "border-ot-violet/50",
    bg: "bg-ot-violet/15",
    coreQuestion:
      "Do two leaders, asked separately, describe the same role — and the same person to fill it?",
    intro:
      "Every flawed hire traces back to a decision made before the search began. Seishin is the discipline of defining what you actually need — outcomes, not tasks; capability, not qualifications; culture markers, not keywords.",
    domainsLabel: "The Six Domains of Seishin",
    domains: [
      { n: "Outcome Definition", d: "What must be true in twelve months that isn't true today." },
      { n: "Capability Profiling", d: "The capacities the role demands, not the CV it attracts." },
      { n: "Culture Markers", d: "The behaviours that succeed here, made explicit." },
      { n: "Role Architecture", d: "Where the seat sits in the system, and what it owns." },
      { n: "Success Metrics", d: "The signal that proves the decision was right." },
      { n: "Decision Criteria", d: "Agreed before the first CV, not argued after the last." },
    ],
    diagnostic: {
      name: "The Clarity Test",
      question:
        "Could two leaders independently brief this role and arrive at the same person?",
    },
  },
  {
    roman: "II",
    kanji: "天",
    term: "天",
    name: "Tenmon",
    title: "Timing",
    canonical: false,
    text: "text-ot-cyan",
    border: "border-ot-cyan/50",
    bg: "bg-ot-cyan/15",
    coreQuestion: "Is the market moving toward you, or away from you?",
    intro:
      "Talent has tides. Tenmon reads them — when people move, when competitors weaken, when a compensation window opens — so you act on the market instead of reacting to it.",
    domainsLabel: "The Six Domains of Tenmon",
    domains: [
      { n: "Market Cycles", d: "When demand surges and when it slackens." },
      { n: "Talent Liquidity", d: "Who is open, who is reachable, who is locked in." },
      { n: "Competitor Weakness", d: "Where rivals are exposed and people are restless." },
      { n: "Compensation Windows", d: "When the price of talent shifts in your favour." },
      { n: "Urgency Mapping", d: "Which seats can wait, and which cannot." },
      { n: "Anticipatory Pipelines", d: "Built before the seat is empty." },
    ],
    diagnostic: {
      name: "The Timing Read",
      question: "Are you hiring before the seat empties, or only after?",
    },
  },
  {
    roman: "III",
    kanji: "地",
    term: "地",
    name: "Chimon",
    title: "Market",
    canonical: false,
    text: "text-ot-signal",
    border: "border-ot-signal/50",
    bg: "bg-ot-signal/15",
    coreQuestion: "Do you actually know the terrain you are hiring across?",
    intro:
      "Modern hiring is geography — physical and digital. Chimon maps the terrain: where the talent is, what it costs, which routes are open and which are closed across 140+ countries.",
    domainsLabel: "The Six Domains of Chimon",
    domains: [
      { n: "Talent Density", d: "Where the capability concentrates." },
      { n: "Salary Bands", d: "What the role truly clears, market by market." },
      { n: "Regional Nuance", d: "The local rules that make or break a hire." },
      { n: "Competitor Movements", d: "Who is building where." },
      { n: "Supply Mapping", d: "Depth of pool against depth of need." },
      { n: "Global Mobility", d: "Moving talent across borders without breaking stride." },
    ],
    diagnostic: {
      name: "The Terrain Map",
      question: "Can you name where the talent actually is — by region, by system, by price?",
    },
  },
  {
    roman: "IV",
    kanji: "用",
    term: "用",
    name: "Yōnin",
    title: "Execution",
    canonical: false,
    text: "text-ot-warn",
    border: "border-ot-warn/50",
    bg: "bg-ot-warn/15",
    coreQuestion: "Can you deploy faster than the market can react?",
    intro:
      "Strategy without execution is theatre. Yōnin is deployment — embedded teams, subscription delivery, FIRE Protocol™ scoring on every shortlist. Two weeks, not fourteen.",
    domainsLabel: "The Six Domains of Yōnin",
    domains: [
      { n: "Embedded Teams", d: "Inside the business, not at arm's length." },
      { n: "Subscription Delivery", d: "Predictable capacity, not per-hire roulette." },
      { n: "Shortlist Engineering", d: "Every name defensible, every name scored." },
      { n: "FIRE Protocol™ Scoring", d: "Fit, Impact, Readiness, Elevation." },
      { n: "Process Velocity", d: "Friction removed at every stage." },
      { n: "Offer Management", d: "Closed cleanly, before the candidate cools." },
    ],
    diagnostic: {
      name: "The Execution Test",
      question: "From brief to offer — do you measure it in weeks, or months?",
    },
  },
  {
    roman: "V",
    kanji: "忍",
    term: "忍",
    name: "Innin",
    title: "Retention",
    canonical: false,
    text: "text-ot-magenta",
    border: "border-ot-magenta/50",
    bg: "bg-ot-magenta/15",
    coreQuestion: "Does the hire still hold at ninety days — and at twelve months?",
    intro:
      "The hire is the beginning, not the end. Innin is endurance — integration, monitoring, prediction, and ownership of the outcome long after the contract is signed.",
    domainsLabel: "The Six Domains of Innin",
    domains: [
      { n: "90-Day Integration", d: "The window where retention is won or lost." },
      { n: "Culture Alignment Monitoring", d: "Drift caught early, not at exit." },
      { n: "Performance Tracking", d: "Evidence the decision is paying off." },
      { n: "Retention Prediction", d: "Risk surfaced before it becomes a resignation." },
      { n: "Early-Warning Signals", d: "The quiet indicators that precede a departure." },
      { n: "Outcome Ownership", d: "If we place them, we own the result." },
    ],
    diagnostic: {
      name: "The Retention Guarantee",
      question: "If they leave inside a year, who carries the cost — you, or us?",
    },
  },
  {
    roman: "VI",
    kanji: "機",
    term: "機械",
    name: "Kikai",
    title: "The Machine",
    canonical: true,
    text: "text-ot-azure",
    border: "border-ot-azure/50",
    bg: "bg-ot-azure/15",
    coreQuestion:
      "How do humans remain effective inside systems increasingly operated by machines?",
    intro:
      "The historical Bansenshūkai studied physical terrain. Modern organisations operate inside algorithms, platforms, workflows and automation. The machine has become the environment — and it does not merely execute decisions, it creates the conditions for them.",
    domainsLabel: "The Seven Domains of Kikai",
    domains: [
      { n: "Infrastructure", d: "Every outcome rests on the system that produced it." },
      { n: "Automation", d: "Every automation trades friction for speed; sometimes friction held wisdom." },
      { n: "Algorithms", d: "Visibility decides attention; attention decides reality." },
      { n: "AI Operators", d: "Knowing when the machine should decide, and when the human must." },
      { n: "Data Systems", d: "Data is a representation of reality, not reality itself." },
      { n: "Digital Terrain", d: "System design quietly makes some routes easy and others impossible." },
      { n: "Human-Machine Symbiosis", d: "The future belongs to operators who understand both." },
    ],
    diagnostic: {
      name: "The Kikai Audit",
      trademark: true,
      question:
        "How much of what happens here is actually being controlled by systems nobody fully understands?",
    },
  },
  {
    roman: "VII",
    kanji: "信",
    term: "信頼",
    name: "Shinrai",
    title: "Trust",
    canonical: true,
    text: "text-ot-teal",
    border: "border-ot-teal/50",
    bg: "bg-ot-teal/15",
    coreQuestion: "What allows human systems to remain coherent under pressure?",
    intro:
      "Every system eventually becomes a trust problem — not a strategy problem, not a technology problem. Trust is invisible until it disappears. Then it is the only thing anyone can see.",
    domainsLabel: "The Seven Domains of Shinrai",
    domains: [
      { n: "Psychological Safety", d: "Whether people can tell the truth. Everything begins here." },
      { n: "Leadership Trust", d: "Whether people believe leaders mean what they say." },
      { n: "Cultural Trust", d: "Whether behaviours match the values on the wall." },
      { n: "Competence Trust", d: "Whether people believe others can actually perform." },
      { n: "Reputation Systems", d: "The informal network that knows who delivers — usually before management." },
      { n: "Social Capital", d: "Relationships compounding into strategic assets." },
      { n: "Trust Recovery", d: "Whether broken trust can be repaired." },
    ],
    extras: [
      {
        label: "The Four Levels of Trust Collapse",
        steps: ["Doubt", "Cynicism", "Disengagement", "Withdrawal"],
        note: "Most organisations notice only the fourth. The collapse began years earlier.",
      },
    ],
    diagnostic: {
      name: "The Shinrai Index",
      trademark: true,
      question:
        "What percentage of the organisation's truth reaches leadership unaltered?",
    },
  },
  {
    roman: "VIII",
    kanji: "改",
    term: "改善知",
    name: "Kaizen Intelligence",
    title: "Continuous Adaptation",
    canonical: true,
    text: "text-ot-purple",
    border: "border-ot-purple/50",
    bg: "bg-ot-purple/15",
    coreQuestion: "How do organisations keep learning while operating?",
    intro:
      "Most systems stop learning the moment they succeed — and that is where decline begins. The environment is always changing; the organisation is usually changing slower. That gap is where vulnerability lives.",
    domainsLabel: "The Eight Domains of Kaizen Intelligence",
    domains: [
      { n: "Learning Systems", d: "How knowledge enters the organisation." },
      { n: "Feedback Systems", d: "How reality returns to the people who decide." },
      { n: "Signal Detection", d: "Catching weak signals before they become events." },
      { n: "Scenario Planning", d: "Preparing for more than one future." },
      { n: "Organisational Memory", d: "Refusing to repeat the same mistake." },
      { n: "Decision Evolution", d: "Improving decision quality over time." },
      { n: "Adaptive Strategy", d: "Changing before circumstances force the change." },
      { n: "Continuous Renewal", d: "Resisting institutional stagnation." },
    ],
    extras: [
      {
        label: "The Learning Cycle",
        steps: ["Observe", "Interpret", "Decide", "Execute", "Review", "Adapt", "Repeat"],
        note: "Most organisations stop after Execute. Kaizen Intelligence begins there.",
      },
      {
        label: "The Five Enemies of Adaptation",
        steps: ["Success", "Ego", "Bureaucracy", "Comfort", "Certainty"],
      },
    ],
    diagnostic: {
      name: "The Kaizen Assessment",
      trademark: true,
      question:
        "What did the organisation learn in the last ninety days that changed how it operates?",
    },
  },
];

export default function DoctrinePage() {
  return (
    <>
      <SiteNav />

      <main>
        {/* ─── Hero ─── */}
        <section className="hero-glow border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
            <span className="eyebrow text-ot-violet">The Doctrine</span>
            <h1 className="mt-5 font-sans font-bold tracking-[-0.03em] leading-[1.0] text-[clamp(2.5rem,6vw,5rem)]">
              The Bansen Doctrine<span className="align-super text-[0.4em]">™</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl md:text-2xl text-ot-ash leading-relaxed">
              Eight interconnected layers for hiring — and operating — under
              pressure. The operating logic beneath the{" "}
              <span className="text-ot-bone">Olympus Talent OS™</span>.
            </p>
            <p className="mt-6 max-w-3xl text-ot-ash leading-relaxed">
              The original Bansenshūkai was written for complex environments —
              where information was incomplete, power was distributed, and
              survival depended on reading both visible and invisible forces. The
              modern world introduced three terrains its authors could never have
              anticipated: machines, trust networks, and adaptive learning
              systems. The Bansen Doctrine™ completes the map.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/book/advisory" className="btn-primary">
                Run the Diagnostic →
              </a>
              <a href="#layer-I" className="btn-ghost">
                Read the Doctrine
              </a>
            </div>
          </div>
        </section>

        {/* ─── Structure note ─── */}
        <section className="border-b border-ot-steel/40 bg-ot-midnight">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:items-center">
              <p className="lg:col-span-7 text-lg text-ot-ash leading-relaxed">
                Layers <span className="text-ot-bone">I–V</span> govern the
                decision itself. Layers <span className="text-ot-bone">VI–VIII</span>{" "}
                govern the environment the decision lives in — the machine that
                shapes behaviour, the trust network that holds people together,
                and the system's ability to learn faster than the world changes.
                Remove any one, and the system eventually fails.
              </p>
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LAYERS.map((l) => (
                  <a
                    key={l.roman}
                    href={`#layer-${l.roman}`}
                    className={`glass p-3 text-center data-card group`}
                  >
                    <div className={`font-mono text-[11px] ${l.text}`}>{l.roman}</div>
                    <div className="text-sm font-semibold mt-1">{l.name}</div>
                    <div className="text-[10px] text-ot-smoke font-mono uppercase tracking-wider mt-0.5">
                      {l.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Layers ─── */}
        {LAYERS.map((l, i) => (
          <section
            key={l.roman}
            id={`layer-${l.roman}`}
            className={`py-20 md:py-28 border-b border-ot-steel/40 scroll-mt-28 ${
              i % 2 === 1 ? "bg-ot-midnight" : ""
            }`}
          >
            <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Header column */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-full border-2 ${l.border} flex items-center justify-center os-node shrink-0`}
                      >
                        <span className="text-2xl">{l.kanji}</span>
                      </div>
                      <div>
                        <div className={`font-mono text-sm ${l.text}`}>
                          Layer {l.roman}
                        </div>
                        <div className="text-2xl font-bold leading-tight">
                          {l.name}{" "}
                          <span className="text-ot-smoke font-normal text-xl">
                            {l.term}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`mt-5 font-mono text-xs uppercase tracking-[0.2em] ${l.text}`}
                    >
                      {l.title}
                    </p>

                    <p className="mt-5 font-serif italic text-2xl leading-snug text-ot-bone">
                      {l.coreQuestion}
                    </p>

                    {!l.canonical && (
                      <p className="mt-6 text-[11px] font-mono uppercase tracking-wider text-ot-iron">
                        Draft — pending final doctrine canon
                      </p>
                    )}
                  </div>
                </div>

                {/* Body column */}
                <div className="lg:col-span-8">
                  <p className="text-lg text-ot-ash leading-relaxed max-w-2xl">
                    {l.intro}
                  </p>

                  <p className="eyebrow mt-10 mb-5">{l.domainsLabel}</p>
                  <div className="grid sm:grid-cols-2 gap-px bg-ot-steel/40 rounded-2xl overflow-hidden border border-ot-steel/40">
                    {l.domains.map((d) => (
                      <div key={d.n} className="bg-ot-graphite p-5">
                        <h4 className={`font-semibold ${l.text}`}>{d.n}</h4>
                        <p className="mt-1.5 text-sm text-ot-ash leading-relaxed">
                          {d.d}
                        </p>
                      </div>
                    ))}
                  </div>

                  {l.extras?.map((ex) => (
                    <div key={ex.label} className="mt-8">
                      <p className="eyebrow mb-4">{ex.label}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {ex.steps.map((s, si) => (
                          <span key={s} className="flex items-center gap-2">
                            <span
                              className={`text-sm font-mono px-3 py-1.5 rounded-lg border ${l.border} ${l.text}`}
                            >
                              {s}
                            </span>
                            {si < ex.steps.length - 1 && (
                              <span className="text-ot-iron">→</span>
                            )}
                          </span>
                        ))}
                      </div>
                      {ex.note && (
                        <p className="mt-3 text-sm text-ot-smoke italic">
                          {ex.note}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Diagnostic */}
                  <div className={`mt-10 grad-border p-7 lg:p-8`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded ${l.bg} ${l.text}`}
                      >
                        Primary Diagnostic
                      </span>
                      <span className="font-semibold">
                        {l.diagnostic.name}
                        {l.diagnostic.trademark ? "™" : ""}
                      </span>
                    </div>
                    <p className="font-serif italic text-xl md:text-2xl leading-snug text-ot-bone">
                      “{l.diagnostic.question}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ─── How they work together ─── */}
        <section className="py-20 md:py-28 border-b border-ot-steel/40 section-glow">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <span className="eyebrow text-ot-violet">The Synthesis</span>
            <h2 className="mt-5 font-sans font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(1.75rem,4vw,3rem)] max-w-3xl">
              Three forces decide whether a system thrives or quietly drifts into
              irrelevance.
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              <div className="grad-border p-7 data-card">
                <div className="text-ot-azure font-mono text-sm">Kikai 機械</div>
                <p className="mt-3 text-ot-ash leading-relaxed">
                  <span className="text-ot-bone">Machines create behaviour.</span>{" "}
                  What system is operating?
                </p>
              </div>
              <div className="grad-border p-7 data-card">
                <div className="text-ot-teal font-mono text-sm">Shinrai 信頼</div>
                <p className="mt-3 text-ot-ash leading-relaxed">
                  <span className="text-ot-bone">Trust creates cohesion.</span>{" "}
                  Can the people inside the system trust each other?
                </p>
              </div>
              <div className="grad-border p-7 data-card">
                <div className="text-ot-purple font-mono text-sm">Kaizen 改善知</div>
                <p className="mt-3 text-ot-ash leading-relaxed">
                  <span className="text-ot-bone">Learning creates survival.</span>{" "}
                  Can the system learn faster than its environment changes?
                </p>
              </div>
            </div>
            <p className="mt-10 max-w-2xl text-lg text-ot-ash leading-relaxed">
              Remove any one of them and the system eventually fails. That is why
              Kikai, Shinrai and Kaizen Intelligence sit at the top of the modern
              doctrine. They are not supporting layers. They are the layers that
              explain why some organisations thrive for decades while others
              slowly lose the plot without ever understanding what happened.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 md:py-32">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="font-sans font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)] max-w-3xl mx-auto">
              Find out which layer is failing.
            </h2>
            <p className="mt-6 text-lg text-ot-ash max-w-2xl mx-auto leading-relaxed">
              This is not a sales call. It is a 30-minute diagnostic. We map your
              hiring system against all eight layers and show you exactly where it
              breaks.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a href="/book/advisory" className="btn-primary">
                Start a Strategic Hiring Conversation →
              </a>
              <a href="/#os" className="btn-ghost">
                See the OS in Action
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
