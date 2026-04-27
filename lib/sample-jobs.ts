export interface Job {
  slug: string;
  title: string;
  company: string;
  companyContext: string;
  location: string;
  remote: "Remote" | "Hybrid" | "On-site";
  salary: string;
  function: "Payroll" | "HR" | "IT & Engineering" | "Finance" | "Sales";
  contract: "Permanent" | "Contract" | "Interim";
  experience: "Mid" | "Senior" | "Director" | "C-Suite";
  posted: string;
  urgent: boolean;
  featured: boolean;
  summary: string;
  impact: string;
  techStack?: string[];
  tags: string[];
}

export const SAMPLE_JOBS: Job[] = [
  {
    slug: "global-head-of-payroll-london",
    title: "Global Head of Payroll",
    company: "Confidential — FTSE 100 Financial Services",
    companyContext:
      "A FTSE 100 financial services group undergoing a full payroll transformation across 28 countries. Moving from fragmented legacy systems to a unified Dayforce platform.",
    location: "London, UK",
    remote: "Hybrid",
    salary: "£140,000 – £165,000 + bonus",
    function: "Payroll",
    contract: "Permanent",
    experience: "Director",
    posted: "2 days ago",
    urgent: true,
    featured: true,
    summary:
      "Lead the consolidation of payroll operations across EMEA and APAC. This is not a maintenance role — it's a transformation mandate with direct CFO reporting and board visibility.",
    impact:
      "You will own the payroll infrastructure for 12,000+ employees across 28 countries. The role carries a £4.2M implementation budget and a mandate to reduce payroll processing costs by 30% within 18 months.",
    techStack: ["Dayforce", "SAP SuccessFactors", "Workday Integration", "ServiceNow"],
    tags: ["Multi-Country", "Transformation", "C-Suite Reporting", "EMEA + APAC"],
  },
  {
    slug: "chief-people-officer-berlin",
    title: "Chief People Officer",
    company: "Confidential — Series D SaaS (€2B valuation)",
    companyContext:
      "A European SaaS unicorn preparing for IPO within 18 months. Headcount scaling from 1,200 to 2,500. Needs a CPO who can build the people infrastructure for a public company.",
    location: "Berlin, Germany",
    remote: "Hybrid",
    salary: "€220,000 – €260,000 + equity",
    function: "HR",
    contract: "Permanent",
    experience: "C-Suite",
    posted: "1 day ago",
    urgent: true,
    featured: true,
    summary:
      "Build and lead the people function through IPO readiness. Transform HR from operational support into a strategic engine — compensation frameworks, employer brand, leadership development, and board-level governance.",
    impact:
      "Direct report to the CEO with a seat on the executive committee. This hire will define how 2,500 people experience the company — culture, comp, career progression, and the employer narrative that attracts the next 1,000.",
    tags: ["IPO Readiness", "Scaling", "Board Seat", "Employer Brand"],
  },
  {
    slug: "vp-engineering-platform-remote",
    title: "VP Engineering — Platform",
    company: "Confidential — PE-Backed Fintech",
    companyContext:
      "A private-equity-backed fintech processing $18B annually. The platform team owns the core transaction engine. Seeking a VP to scale the team from 40 to 120 engineers across three time zones.",
    location: "Remote (US / EU)",
    remote: "Remote",
    salary: "$280,000 – $340,000 + carry",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "C-Suite",
    posted: "3 days ago",
    urgent: false,
    featured: true,
    summary:
      "Own the platform engineering organisation. Define the architecture roadmap, build the team, and deliver the infrastructure that processes $18B in annual transaction volume with 99.99% uptime.",
    impact:
      "You'll inherit a strong foundation and a mandate to triple the team. Budget is approved. The bottleneck isn't money — it's finding someone who can scale engineering culture as fast as headcount.",
    techStack: ["Kubernetes", "Go", "PostgreSQL", "Kafka", "Terraform", "AWS"],
    tags: ["Platform", "Scale Build", "PE-Backed", "Remote-First"],
  },
  {
    slug: "group-financial-controller-singapore",
    title: "Group Financial Controller",
    company: "Confidential — Global Logistics (SGX-Listed)",
    companyContext:
      "An SGX-listed logistics company operating across 14 countries in APAC. Undergoing a finance transformation to support M&A integration and new regulatory requirements across multiple jurisdictions.",
    location: "Singapore",
    remote: "On-site",
    salary: "SGD 250,000 – 300,000 + bonus",
    function: "Finance",
    contract: "Permanent",
    experience: "Director",
    posted: "5 days ago",
    urgent: false,
    featured: false,
    summary:
      "Lead group financial control and reporting across 14 APAC entities. Drive the transition from manual consolidation to automated multi-entity reporting. Direct line to the Group CFO.",
    impact:
      "This role is the operational backbone of a $2.1B revenue business. You'll own statutory reporting, intercompany governance, and the finance integration playbook for two planned acquisitions.",
    techStack: ["SAP S/4HANA", "BlackLine", "Anaplan", "Power BI"],
    tags: ["APAC", "M&A Integration", "Multi-Entity", "Listed Company"],
  },
  {
    slug: "payroll-implementation-lead-dubai",
    title: "Payroll Implementation Lead",
    company: "Confidential — Global Hospitality Group",
    companyContext:
      "A luxury hospitality group rolling out a unified payroll system across the Middle East and Africa. 15,000 employees, 9 countries, complex labour law environments.",
    location: "Dubai, UAE",
    remote: "On-site",
    salary: "AED 45,000 – 55,000/month + housing",
    function: "Payroll",
    contract: "Contract",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Lead the implementation of ADP GlobalView across 9 Middle East and Africa countries. You'll manage the vendor relationship, configure country-specific requirements, and train local payroll teams.",
    impact:
      "This is a greenfield implementation touching every employee in the group. Success here means a single source of truth for payroll across one of the most complex regulatory regions on the planet.",
    techStack: ["ADP GlobalView", "SAP HCM", "Kronos"],
    tags: ["MEA Region", "Implementation", "ADP", "Hospitality"],
  },
  {
    slug: "head-of-talent-acquisition-new-york",
    title: "Head of Talent Acquisition",
    company: "Confidential — Growth-Stage Healthtech",
    companyContext:
      "A US healthtech company that's raised $180M and is scaling from 300 to 800 people in 12 months. Current TA function is reactive and agency-dependent.",
    location: "New York, US",
    remote: "Hybrid",
    salary: "$195,000 – $230,000 + equity",
    function: "HR",
    contract: "Permanent",
    experience: "Senior",
    posted: "4 days ago",
    urgent: true,
    featured: false,
    summary:
      "Build the talent acquisition function from the ground up. Replace agency dependency with internal infrastructure — employer brand, sourcing playbooks, interview frameworks, and hiring manager enablement.",
    impact:
      "You're hiring 500 people in a year. The company's trajectory depends on whether you can build the machine that makes that possible without sacrificing quality or culture.",
    tags: ["Healthtech", "Scale Build", "TA Transformation", "Equity"],
  },
  {
    slug: "senior-devops-engineer-mumbai",
    title: "Senior DevOps Engineer",
    company: "Confidential — Global Payroll SaaS",
    companyContext:
      "A global payroll SaaS provider serving 4,000+ enterprise clients. The infrastructure team is expanding its Mumbai delivery hub to support 24/7 operations.",
    location: "Mumbai, India",
    remote: "Hybrid",
    salary: "₹35L – ₹50L + RSUs",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "6 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own CI/CD pipelines, infrastructure-as-code, and observability for a platform that processes payroll for 2M+ employees globally. High-availability, multi-region, zero-downtime deployments.",
    impact:
      "Every deployment you ship affects payroll accuracy for millions of people. This is infrastructure that can't fail — and you'll be the person making sure it doesn't.",
    techStack: ["Kubernetes", "Terraform", "AWS", "Datadog", "ArgoCD", "PostgreSQL"],
    tags: ["Payroll SaaS", "High Availability", "Mumbai Hub", "DevOps"],
  },
  {
    slug: "fp-and-a-director-london",
    title: "FP&A Director",
    company: "Confidential — PE-Backed Professional Services",
    companyContext:
      "A PE-backed professional services firm with £400M revenue across 6 European markets. The PE sponsor is driving a value creation plan that requires a step-change in financial planning and analysis.",
    location: "London, UK",
    remote: "Hybrid",
    salary: "£130,000 – £155,000 + bonus + carry",
    function: "Finance",
    contract: "Permanent",
    experience: "Director",
    posted: "3 days ago",
    urgent: false,
    featured: true,
    summary:
      "Lead FP&A for a PE-backed group executing a 3-year value creation plan. Build the financial modelling infrastructure, reporting cadence, and business partnering capability the sponsor expects.",
    impact:
      "You're the financial brain of the value creation thesis. Every board pack, every forecast, every investment case runs through your team. The PE sponsor will know your name.",
    techStack: ["Anaplan", "Power BI", "NetSuite"],
    tags: ["PE-Backed", "Value Creation", "Business Partnering", "Multi-Market"],
  },

  /* ─── Live Roles (Deel) ─── */
  {
    slug: "client-account-manager-bahrain",
    title: "Client Account Manager",
    company: "Confidential — Financial Services (Bahrain)",
    companyContext:
      "A fast-growing financial services firm headquartered in Bahrain, expanding its client portfolio across the GCC. Seeking a relationship-driven account manager to own key client partnerships.",
    location: "Bahrain",
    remote: "Hybrid",
    salary: "BD 1,000 – 1,500/month",
    function: "Sales",
    contract: "Permanent",
    experience: "Mid",
    posted: "Live",
    urgent: true,
    featured: true,
    summary:
      "Own and grow a portfolio of strategic client accounts. Build deep commercial relationships, identify expansion opportunities, and act as the primary point of contact for all account activity.",
    impact:
      "You'll be the face of the business to its most important clients. Revenue retention and growth targets sit squarely on your shoulders — this is a high-trust, high-visibility role.",
    tags: ["GCC", "Account Management", "Client Growth", "Bahrain"],
  },
  {
    slug: "cloud-support-services-specialist-ireland",
    title: "Cloud Support & Services Specialist",
    company: "Confidential — Cloud Technology Provider",
    companyContext:
      "A leading cloud technology provider serving MSPs and IT service providers across Europe. Growing its Ireland-based support team to meet expanding demand.",
    location: "Ireland",
    remote: "Hybrid",
    salary: "€50,000 – €60,000",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Mid",
    posted: "Live",
    urgent: true,
    featured: false,
    summary:
      "Deliver technical support and onboarding services for cloud platform customers. Troubleshoot complex integration issues, guide migrations, and ensure customer success across cloud environments.",
    impact:
      "You're the technical backbone of the customer experience — every ticket you resolve and every migration you guide directly drives retention and platform adoption.",
    techStack: ["Azure", "AWS", "M365", "ConnectWise", "Datto"],
    tags: ["Cloud", "Support", "MSP", "Ireland"],
  },
  {
    slug: "technical-advisor-iii-ireland",
    title: "Technical Advisor III",
    company: "Confidential — Cloud Technology Provider",
    companyContext:
      "A leading cloud technology provider serving MSPs and IT service providers across Europe. Expanding its senior technical advisory team in Ireland.",
    location: "Ireland",
    remote: "Hybrid",
    salary: "€50,000 – €60,000",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "Live",
    urgent: true,
    featured: false,
    summary:
      "Serve as a senior technical advisor for complex cloud infrastructure deployments. Lead troubleshooting on escalated issues, architect solutions, and mentor junior support engineers.",
    impact:
      "When the hardest problems hit, you're the one who solves them. Your expertise directly shapes platform reliability and the technical confidence of the customer base.",
    techStack: ["Azure", "AWS", "Linux", "Networking", "Virtualisation"],
    tags: ["Cloud", "Advisory", "Senior Technical", "Ireland"],
  },
  {
    slug: "fund-accountant-us-remote",
    title: "Fund Accountant",
    company: "Confidential — Digital Asset Financial Services",
    companyContext:
      "A pioneering digital asset financial services firm operating at the intersection of traditional finance and blockchain technology. Rapidly scaling operations across the US.",
    location: "United States",
    remote: "Remote",
    salary: "$65,000 – $90,000",
    function: "Finance",
    contract: "Permanent",
    experience: "Mid",
    posted: "Live",
    urgent: true,
    featured: true,
    summary:
      "Manage fund accounting operations for digital asset investment vehicles. Handle NAV calculations, investor reporting, capital activity, and audit support in a fast-moving fintech environment.",
    impact:
      "You'll be the financial control layer for next-generation investment products. Accuracy here isn't optional — investors and regulators depend on the numbers you produce.",
    techStack: ["Bloomberg", "QuickBooks", "Excel", "Blockchain Explorers"],
    tags: ["Digital Assets", "Fund Accounting", "Remote", "Fintech"],
  },
  {
    slug: "commercial-account-executive-middle-east",
    title: "Commercial Account Executive — Middle East",
    company: "Confidential — Enterprise SaaS (Customer Experience)",
    companyContext:
      "A global enterprise SaaS company specialising in customer experience and support solutions. Expanding its commercial presence across the Middle East from its UAE hub.",
    location: "United Arab Emirates",
    remote: "Hybrid",
    salary: "AED 248,000 – 310,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "Live",
    urgent: true,
    featured: true,
    summary:
      "Drive new business acquisition across the Middle East. Own the full sales cycle from prospecting to close for mid-market and enterprise accounts in a high-growth territory.",
    impact:
      "You're opening new market territory. Every deal you close establishes the company's footprint in one of the fastest-growing enterprise software markets in the world.",
    tags: ["Middle East", "Enterprise Sales", "SaaS", "UAE"],
  },
  {
    slug: "commercial-account-executive-south-africa",
    title: "Commercial Account Executive — South Africa",
    company: "Confidential — Enterprise SaaS (Customer Experience)",
    companyContext:
      "A global enterprise SaaS company specialising in customer experience and support solutions. Building out its Africa sales team from a UAE-based regional hub.",
    location: "United Arab Emirates",
    remote: "Hybrid",
    salary: "AED 248,000 – 310,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "Live",
    urgent: true,
    featured: false,
    summary:
      "Lead commercial sales efforts targeting the South African enterprise market. Manage the pipeline end-to-end — from outbound prospecting through negotiation and close.",
    impact:
      "South Africa is the gateway to the African enterprise market. You're not just closing deals — you're building the playbook for an entire continent's go-to-market motion.",
    tags: ["South Africa", "Enterprise Sales", "SaaS", "Africa Expansion"],
  },
  {
    slug: "mechanical-engineer-japan",
    title: "Mechanical Engineer (機械エンジニア)",
    company: "Confidential — Precision Engineering (Japan)",
    companyContext:
      "A Japanese precision engineering firm specialising in advanced manufacturing. Expanding its engineering team to support new product development and production scaling.",
    location: "Japan",
    remote: "On-site",
    salary: "¥300,000 – ¥500,000/month",
    function: "IT & Engineering",
    contract: "Contract",
    experience: "Mid",
    posted: "Live",
    urgent: false,
    featured: false,
    summary:
      "Design, develop, and optimise mechanical systems for precision manufacturing applications. Work with cross-functional teams on product development from concept through production.",
    impact:
      "Your engineering decisions directly shape the quality and precision of products used across industries. This is hands-on engineering with real-world manufacturing impact.",
    tags: ["Japan", "Mechanical Engineering", "Manufacturing", "On-site"],
  },
  {
    slug: "oracle-ebs-consultant-japan",
    title: "Oracle EBS Consultant",
    company: "Confidential — Technology Consulting (Japan)",
    companyContext:
      "A technology consulting firm specialising in enterprise application implementations across the Japanese market. Seeking experienced Oracle talent for a major client engagement.",
    location: "Japan",
    remote: "Hybrid",
    salary: "¥500,000 – ¥1,250,000/month",
    function: "IT & Engineering",
    contract: "Contract",
    experience: "Senior",
    posted: "Live",
    urgent: true,
    featured: true,
    summary:
      "Lead Oracle E-Business Suite consulting engagements — implementations, upgrades, and optimisations. Configure modules, design integrations, and advise on best practices for Japanese enterprise clients.",
    impact:
      "You're the trusted advisor for enterprise clients navigating complex ERP transformations. Your recommendations directly shape how these organisations operate at scale.",
    techStack: ["Oracle EBS", "Oracle DB", "PL/SQL", "Oracle Forms", "OAF"],
    tags: ["Oracle", "ERP", "Japan", "Consulting"],
  },
  {
    slug: "oracle-fusion-erp-consultant-japan",
    title: "Oracle Fusion ERP Consultant",
    company: "Confidential — Technology Consulting (Japan)",
    companyContext:
      "A technology consulting firm specialising in enterprise cloud migrations in Japan. Hiring Oracle Fusion expertise for cloud ERP transformation projects.",
    location: "Japan",
    remote: "Hybrid",
    salary: "¥500,000 – ¥1,250,000/month",
    function: "IT & Engineering",
    contract: "Contract",
    experience: "Senior",
    posted: "Live",
    urgent: true,
    featured: true,
    summary:
      "Drive Oracle Fusion Cloud ERP implementations and migrations. Lead functional design, configuration, data migration, and go-live support for enterprise clients transitioning to cloud ERP.",
    impact:
      "Cloud ERP migration is the single biggest technology decision these companies will make this decade. You're the person making sure they get it right.",
    techStack: ["Oracle Fusion Cloud", "Oracle Integration Cloud", "FBDI", "OTBI", "BIP"],
    tags: ["Oracle Fusion", "Cloud ERP", "Japan", "Migration"],
  },
];

export const FUNCTIONS = ["Payroll", "HR", "IT & Engineering", "Finance", "Sales"] as const;
export const CONTRACTS = ["Permanent", "Contract", "Interim"] as const;
export const REMOTES = ["Remote", "Hybrid", "On-site"] as const;
export const EXPERIENCES = ["Mid", "Senior", "Director", "C-Suite"] as const;
