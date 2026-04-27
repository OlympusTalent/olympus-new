export function CTABand() {
  return (
    <section className="relative hero-glow py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
        <p className="eyebrow mb-6">05 / Now</p>
        <h2 className="font-sans text-[clamp(2.25rem,6vw,5rem)] font-semibold tracking-[-0.025em] leading-[1.02] max-w-4xl mx-auto">
          Ready to transform
          <br />
          <span className="gradient-text">your recruitment process?</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-ot-ash max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute strategy call. We&apos;ll diagnose your hiring
          pipeline live, show you the Olympus Talent Method™ in action, and
          hand you the number: time-to-hire, cost-per-outcome, retention risk.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#start" className="btn-primary">
            Start your free trial
            <span aria-hidden>→</span>
          </a>
          <a href="#call" className="btn-ghost">
            Book a strategy call
          </a>
        </div>
        <p className="mt-5 text-xs tracking-wider text-ot-smoke uppercase">
          Two weeks to transformation. No credit card required.
        </p>
        <div className="meander-strong mt-16 max-w-xl mx-auto opacity-90" />
      </div>
    </section>
  );
}
