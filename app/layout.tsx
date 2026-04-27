import type { Metadata } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olympus Talent — Decision Infrastructure for Hiring Under Pressure",
  description:
    "Most companies don't have a hiring problem. They have a decision problem. Olympus Talent is decision infrastructure for hiring across Payroll, HR, IT & Finance. 140+ countries. 2-week hires. 98% retention.",
  metadataBase: new URL("https://olympus-talent.com"),
  openGraph: {
    title: "Olympus Talent — Decision Infrastructure for Hiring Under Pressure",
    description:
      "Decision infrastructure for hiring across Payroll, HR, IT & Finance. 140+ countries. 2-week hires. 98% retention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ot-obsidian text-ot-bone antialiased">
        {children}
      </body>
    </html>
  );
}
