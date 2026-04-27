import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JobsBoard } from "@/components/jobs-board";

export const metadata = {
  title: "Live Roles — Olympus Talent",
  description:
    "Search live roles across Global Payroll, HR Leadership, IT & Engineering, and Finance & Control. 1,046+ roles across 140+ countries. Decision infrastructure for your next career move.",
};

export default function JobsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <JobsBoard />
      </main>
      <SiteFooter />
    </>
  );
}
