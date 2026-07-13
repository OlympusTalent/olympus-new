/**
 * Global 100 2026 award seal — Best Staffing & Recruiting Business of the
 * Year (UAE). Reusable across hero, footer and future placements.
 */
export function AwardBadge({
  size = 76,
  className = "",
  showCaption = true,
  align = "left",
}: {
  size?: number;
  className?: string;
  showCaption?: boolean;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex items-center gap-4 ${
        isCenter ? "flex-col text-center" : "flex-row"
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/global-100-2026-winner.svg"
        alt="Global 100 2026 Winner — Best Staffing & Recruiting Business of the Year, United Arab Emirates"
        width={size}
        height={size}
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      {showCaption && (
        <div className={`leading-tight ${isCenter ? "mt-1" : ""}`}>
          <p className="text-sm font-semibold text-ot-bone max-w-[20rem]">
            Best Staffing &amp; Recruiting Business of the Year — 2026
          </p>
          <p className="mt-1 text-[11px] font-mono tracking-[0.14em] uppercase text-ot-smoke">
            Global 100 · United Arab Emirates
          </p>
        </div>
      )}
    </div>
  );
}
