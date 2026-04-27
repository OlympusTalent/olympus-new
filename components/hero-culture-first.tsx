import { LogoMark } from "./logo-mark";

export function HeroCultureFirst() {
  return (
    <section className="relative hero-glow">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-20 md:pb-28 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-8 bg-ot-steel" />
          <span className="eyebrow">Global Talent Infrastructure — Est. Now</span>
          <span className="h-px w-8 bg-ot-steel" />
        </div>

        {/* Logo mark */}
        <div className="flex justify-center mb-10 text-ot-bone">
          <LogoMark size={96} />
        </div>

        {/* Gradient headline */}
        <h1 className="font-sans font-semibold text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto">
          <span className="gradient-text">Culture First.</span>
          <br />
          <span className="text-ot-bone">Every Hire. Every Time.</span>
        </h1>

        {/* Lede */}
        <p className="mt-8 text-lg md:text-xl text-ot-ash max-w-3xl mx-auto leading-relaxed">
          Global recruitment platform powered by AI-driven scoring, culture
          alignment, and data-backed hiring decisions. Built for candidates who
          excel, clients who hire smart, and consultants who place with precision.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#start" className="btn-primary">
            Start Your Free Trial
            <span aria-hidden>→</span>
          </a>
          <a href="#demo" className="btn-ghost">
            Schedule a Demo
          </a>
        </div>

        <p className="mt-5 text-xs tracking-wider text-ot-smoke uppercase">
          Two weeks to transformation. No credit card required.
        </p>

        {/* Meander divider */}
        <div className="meander mt-16 max-w-2xl mx-auto opacity-70" />
      </div>
    </section>
  );
}
