export function CtaFinal() {
  return (
    <section id="contact" className="py-32 md:py-40 hero-glow border-t border-ot-steel/40">
      <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20 text-center">
        <div className="meander mb-12 max-w-xl mx-auto opacity-60" />
        <span className="eyebrow text-ot-violet mb-6 block">The Next Move</span>
        <h2 className="font-sans font-black tracking-[-0.03em] leading-[.98] max-w-4xl mx-auto text-[clamp(2.5rem,6vw,5rem)]">
          Stop hiring reactively.
          <br />
          <span className="gradient-text">Start building infrastructure.</span>
        </h2>
        <p className="mt-8 text-xl text-ot-ash max-w-2xl mx-auto leading-relaxed">
          This is not a sales call. It&apos;s a 30-minute diagnostic. We&apos;ll
          map your hiring pipeline, identify the structural failures, and show
          you exactly where the Olympus Talent OS™ would change the outcome.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/book/advisory" className="btn-primary text-base">
            Start a Strategic Hiring Conversation <span aria-hidden>→</span>
          </a>
          <a href="/book/career" className="btn-ghost text-base">
            Access the Talent Market Properly
          </a>
        </div>
        <p className="mt-6 text-xs text-ot-smoke font-mono tracking-wider uppercase">
          Dubai · Manchester · Paris · Milan · Boston · New York · Houston · Singapore · Mumbai · São Paulo · Abu Dhabi · Doha
        </p>
        <div className="mt-16 max-w-md mx-auto flex items-center justify-center gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ot-steel" />
          <span lang="ja" className="text-xl tracking-[0.3em] text-ot-smoke/70">
            萬川集海
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ot-steel" />
        </div>
        <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em] text-ot-iron">
          Bansenshūkai — ten thousand rivers, one sea
        </p>
      </div>
    </section>
  );
}
