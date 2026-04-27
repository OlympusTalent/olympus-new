"use client";

import { useEffect, useState } from "react";

export function StickyCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        <p className="hidden md:block text-sm text-ot-ash">
          Stop hiring reactively.{" "}
          <span className="text-ot-bone font-medium">
            Start building infrastructure.
          </span>
        </p>
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <a href="/book/advisory" className="btn-ghost !py-2 !px-4 text-sm">
            Speak to Olympus
          </a>
          <a href="/book/advisory" className="btn-primary !py-2 !px-4 text-sm">
            Build a Better Hiring System <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
