import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Notice — Olympus Talent",
  description:
    "How Olympus Talent collects, uses, shares and protects the personal data of candidates, clients and website visitors.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { title: string; body: string[]; list?: string[] }[] = [
  {
    title: "Who we are",
    body: [
      "Olympus Talent is an executive search firm. We appoint senior leaders in Payroll, HR, Finance and IT Engineering, and we run Olympus Intelligence, our investigation and due diligence line.",
      "Olympus Talent decides how and why your personal data is used. For anything in this notice, write to ian@olympus-talent.com or call +44 7713 055409.",
    ],
  },
  {
    title: "What we collect",
    body: ["It depends on how you know us."],
    list: [
      "Candidates: your name and contact details, your resume, work history, qualifications, pay expectations, notes from our conversations, and professional information you have made public, such as a LinkedIn profile.",
      "Clients and prospective clients: names, job titles, work contact details, and the detail of the roles you ask us to fill.",
      "Website visitors: the details you give us when you book a call or email us, and the basic technical logs our hosting provider keeps to run and secure the site.",
    ],
  },
  {
    title: "Why we use it",
    body: [
      "We use personal data to run search and recruitment: to find people, assess fit, introduce candidates to clients, and stay in touch about relevant roles. We rely on our legitimate interest in doing that work well, on a contract where we have one with you, on your consent where the law asks for it, and on legal obligations where they apply.",
      "We ask before we put you forward for a role.",
    ],
  },
  {
    title: "Who we share it with",
    body: ["We do not sell personal data. We share it only with:"],
    list: [
      "Clients, for roles you have agreed to be considered for.",
      "Service providers who help us operate, such as hosting, email and scheduling. Our booking calendar is provided by Cal.com.",
      "Regulators, courts or authorities, where the law requires it.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This site does not set advertising or analytics cookies. The booking calendar is embedded from Cal.com, which may set its own cookies when you use it.",
    ],
  },
  {
    title: "Moving data between countries",
    body: [
      "We work across more than 140 countries, so your data may be handled outside the country you live in, including outside the UK and the European Economic Area. Where the law requires safeguards for that transfer, such as standard contractual clauses, we put them in place.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep candidate and client records while we are working with you, and afterwards for as long as they stay useful for relevant roles. We review what we hold and delete what we no longer need. Ask us to delete your record and we will, unless the law requires us to keep it.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you live, you can ask us to show you the data we hold on you, correct it, delete it, restrict or stop our use of it, or send it to you in a portable format. Where we rely on consent, you can withdraw it at any time.",
      "To use any of these rights, write to ian@olympus-talent.com. If you are unhappy with our answer, you can complain to your local data protection authority. In the UK that is the Information Commissioner's Office.",
    ],
  },
  {
    title: "Changes to this notice",
    body: [
      "When we change how we handle personal data, we will update this page and the date at the top.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-ot-obsidian text-ot-bone">
        <section className="hero-glow py-20 md:py-28 border-b border-ot-steel/40">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-ot-violet/60" />
              <span className="eyebrow text-ot-violet">Privacy Notice</span>
            </div>
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[.95] text-[clamp(2.2rem,5vw,4.5rem)] max-w-4xl">
              Your data.
              <br />
              <span className="gradient-text">Handled like it matters.</span>
            </h1>
            <p className="mt-8 text-xs text-ot-smoke font-mono tracking-wider uppercase">
              Last updated: 5 November 2026
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl space-y-14">
              {SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="font-sans font-black text-2xl md:text-3xl tracking-[-0.02em]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-lg text-ot-ash leading-relaxed">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.list && (
                      <ul className="space-y-3 list-disc pl-6 marker:text-ot-violet">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
