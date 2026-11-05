import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JobsBoard } from "@/components/jobs-board";
import { SAMPLE_JOBS } from "@/lib/sample-jobs";

export const metadata = {
  title: "Live Roles — Olympus Talent",
  description: `Search ${SAMPLE_JOBS.length} live roles across Global Payroll, HR Leadership, IT & Engineering, Finance & Control and Sales. 6M+ candidate reach across 140+ countries. Decision infrastructure for your next career move.`,
  alternates: { canonical: "/jobs" },
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
