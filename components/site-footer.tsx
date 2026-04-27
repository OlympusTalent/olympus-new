import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-16 bg-ot-obsidian border-t border-ot-steel/40">
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full border border-ot-smoke/40 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-[.15em] text-ot-bone">
                  OT
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] tracking-[.28em] font-bold text-ot-bone">
                  OLYMPUS
                </span>
                <span className="text-[8px] tracking-[.36em] text-ot-smoke">
                  TALENT
                </span>
              </div>
            </div>
            <p className="text-ot-ash text-sm leading-relaxed max-w-sm">
              Decision infrastructure for hiring under pressure. Not recruiters.
              Not CV brokers. The operating system that turns hiring from a
              liability into a competitive advantage.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="eyebrow mb-4">Platform</p>
            <ul className="space-y-2 text-sm text-ot-ash">
              <li>
                <Link href="/#os" className="hover:text-ot-bone transition-colors">
                  The OS
                </Link>
              </li>
              <li>
                <Link href="/#doctrine" className="hover:text-ot-bone transition-colors">
                  Protocols
                </Link>
              </li>
              <li>
                <Link href="/#intelligence" className="hover:text-ot-bone transition-colors">
                  Intelligence
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-ot-bone transition-colors">
                  Live Roles
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Hiring Infrastructure</p>
            <ul className="space-y-2 text-sm text-ot-ash">
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  Global Payroll
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  HR Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  IT &amp; Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  Finance &amp; Control
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2 text-sm text-ot-ash">
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  The Doctrine
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-ot-bone transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ot-steel/40 pt-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-ot-smoke">
            © 2026 Olympus Talent. All rights reserved.
          </p>
          <p className="text-[10px] text-ot-smoke font-mono tracking-wider max-w-2xl md:text-right">
            HireIQ™, FIRE Protocol™, Olympus Talent Hub™, Olympus Talent
            Method™, and Olympus Talent OS™ are trademarks of Olympus Talent.
          </p>
        </div>
      </div>
    </footer>
  );
}
