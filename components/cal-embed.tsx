"use client";

export function CalEmbed({ calLink }: { calLink: string }) {
  return (
    <iframe
      src={`https://cal.com/${calLink}?embed=true&theme=dark&brandColor=%238B5CF6`}
      className="w-full rounded-2xl border-0"
      style={{ minHeight: "660px", colorScheme: "dark" }}
      allow="camera;microphone"
    />
  );
}
