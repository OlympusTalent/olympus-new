import Link from "next/link";

const NAV = [
  { label: "The Problem", href: "/#problem" },
  { label: "The OS", href: "/#os" },
  { label: "Live Roles", href: "/jobs" },
  { label: "Intelligence", href: "/#intelligence" },
  { label: "Pricing", href: "/pricing" },
  { label: "Doctrine", href: "/#doctrine" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 bg-ot-obsidian/85 backdrop-blur-lg border-b border-ot-steel/50">
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-white/50 flex items-center justify-center">
            <span className="text-xl font-bold tracking-[.15em] text-white">OT</span>
          </div>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-base tracking-[.28em] font-bold text-white">OLYMPUS</span>
            <span className="text-[11px] tracking-[.36em] text-white/80">TALENT</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ot-ash hover:text-ot-bone transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/book/advisory" className="btn-primary !py-2 !px-4 text-sm">
          Speak to Olympus
        </a>
      </div>
    </header>
  );
}
