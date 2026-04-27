type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Olympus Talent — circular badge.
 * Outer ring: Greek-key (meander) pattern.
 * Inner: triple-peak mountain silhouette.
 * Wordmark: OLYMPUS / TALENT.
 * Monochrome only — uses currentColor so it inverts on light/dark.
 */
export function LogoMark({ size = 56, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-label="Olympus Talent"
      role="img"
    >
      {/* Outer circle */}
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.7"
      />

      {/* Greek meander band (top + bottom arcs approximated as rects along path) */}
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9">
        {/* Top meander strip along arc — simplified tessellation */}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = -Math.PI + (i / 14) * Math.PI;
          const x = 100 + Math.cos(a) * 89;
          const y = 100 + Math.sin(a) * 89;
          const rot = (a * 180) / Math.PI + 90;
          return (
            <g
              key={`m-top-${i}`}
              transform={`translate(${x} ${y}) rotate(${rot})`}
            >
              <path d="M-5 -3 L-5 1 L-2 1 L-2 -1 L0 -1 L0 3 L5 3 L5 -1 L2 -1 L2 1 L3 1" />
            </g>
          );
        })}
        {Array.from({ length: 14 }).map((_, i) => {
          const a = 0 + (i / 14) * Math.PI;
          const x = 100 + Math.cos(a) * 89;
          const y = 100 + Math.sin(a) * 89;
          const rot = (a * 180) / Math.PI + 90;
          return (
            <g
              key={`m-bot-${i}`}
              transform={`translate(${x} ${y}) rotate(${rot})`}
            >
              <path d="M-5 -3 L-5 1 L-2 1 L-2 -1 L0 -1 L0 3 L5 3 L5 -1 L2 -1 L2 1 L3 1" />
            </g>
          );
        })}
      </g>

      {/* Mountain silhouette */}
      <g transform="translate(36 70)">
        <path
          d="M0 62 L22 26 L34 44 L54 8 L78 48 L96 22 L128 62 Z"
          fill="currentColor"
          opacity="0.95"
        />
        {/* snow line cutaway */}
        <path
          d="M44 36 L54 22 L62 32 L54 38 Z"
          fill="var(--ot-obsidian, #070712)"
        />
      </g>

      {/* Wordmark */}
      <g textAnchor="middle" fill="currentColor">
        <text
          x="100"
          y="142"
          fontFamily="var(--font-sans), Inter, system-ui"
          fontSize="13"
          fontWeight="800"
          letterSpacing="4"
        >
          OLYMPUS
        </text>
        <text
          x="100"
          y="156"
          fontFamily="var(--font-sans), Inter, system-ui"
          fontSize="8.5"
          fontWeight="400"
          letterSpacing="5"
          opacity="0.85"
        >
          TALENT
        </text>
      </g>
    </svg>
  );
}
