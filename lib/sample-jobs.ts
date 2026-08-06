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

  /* ─── Live Roles ─── */
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
  {
    slug: "payroll-expert-france",
    title: "Payroll Expert",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across EMEA. Scaling its in-house payroll delivery team as volumes grow.",
    location: "France",
    remote: "Remote",
    salary: "€60,000 – €72,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "1 day ago",
    urgent: true,
    featured: true,
    summary:
      "Own end-to-end payroll for a portfolio of clients in France — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-expert-mexico",
    title: "Payroll Expert",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across the Americas. High-growth environment, remote-first delivery.",
    location: "Mexico",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "2 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Mexico — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "Americas", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-associate-italy",
    title: "Senior Payroll Associate",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "Italy",
    remote: "Remote",
    salary: "€38,000 – €47,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "3 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Italy — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-associate-germany",
    title: "Senior Payroll Associate",
    company: "Confidential — Multinational Payroll Services Group",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across EMEA. Scaling its in-house payroll delivery team as volumes grow.",
    location: "Germany",
    remote: "Remote",
    salary: "€32,000 – €58,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "4 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Germany — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-associate-netherlands",
    title: "Senior Payroll Associate",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "Netherlands",
    remote: "Remote",
    salary: "€42,000 – €55,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "5 days ago",
    urgent: true,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Netherlands — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-associate-germany",
    title: "Payroll Associate",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "Germany",
    remote: "Remote",
    salary: "€26,000 – €33,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "6 days ago",
    urgent: false,
    featured: true,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Germany — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "international-payroll-specialist-hungary",
    title: "International Payroll Specialist",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across EMEA. Scaling its in-house payroll delivery team as volumes grow.",
    location: "Hungary",
    remote: "Remote",
    salary: "€19,000 – €27,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Hungary — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-implementation-manager-netherlands",
    title: "Payroll Implementation Manager",
    company: "Confidential — Multinational Payroll Services Group",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "Netherlands",
    remote: "Remote",
    salary: "€50,000 – €62,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across Netherlands and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-implementation-manager-sweden",
    title: "Payroll Implementation Manager",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "Sweden",
    remote: "Remote",
    salary: "€50,000 – €62,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: true,
    featured: false,
    summary:
      "Lead payroll delivery across Sweden and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-implementation-manager-colombia",
    title: "Payroll Implementation Manager",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across the Americas. Scaling its in-house payroll delivery team as volumes grow.",
    location: "Colombia",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across Colombia and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "Americas", "Compliance", "Remote"],
  },
  {
    slug: "payroll-implementation-manager-slovakia",
    title: "Payroll Implementation Manager",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "Slovakia",
    remote: "Remote",
    salary: "€30,000 – €42,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 day ago",
    urgent: false,
    featured: true,
    summary:
      "Lead payroll delivery across Slovakia and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-implementation-team-lead-united-kingdom",
    title: "Payroll Implementation Team Lead",
    company: "Confidential — Multinational Payroll Services Group",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "United Kingdom",
    remote: "Remote",
    salary: "£74,000 – £88,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 days ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across United Kingdom and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "senior-manager-payroll-operations-japan",
    title: "Senior Manager, Payroll Operations",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across APAC. Scaling its in-house payroll delivery team as volumes grow.",
    location: "Japan",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Director",
    posted: "3 days ago",
    urgent: true,
    featured: true,
    summary:
      "Own the payroll operation across APAC — a leadership mandate covering delivery quality, compliance, team build and client outcomes at scale.",
    impact:
      "You'll own payroll outcomes for an entire region. Get it right and the company scales; get it wrong and clients churn. This is the seat that decides which.",
    tags: ["Global Payroll", "APAC", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-associate-belgium",
    title: "Senior Payroll Associate",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "Belgium",
    remote: "Remote",
    salary: "€36,000 – €60,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "4 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Belgium — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-associate-australia",
    title: "Senior Payroll Associate",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "Australia",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Mid",
    posted: "5 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own end-to-end payroll for a portfolio of clients in Australia — accuracy, statutory compliance, and on-time delivery every cycle. Not data entry: you're the expert clients rely on.",
    impact:
      "You'll be the reason clients trust their payroll runs. In a business where one late or wrong cycle loses a client, the specialists are the product.",
    tags: ["Global Payroll", "APAC", "Compliance", "Remote"],
  },
  {
    slug: "global-payroll-manager-emea-emea",
    title: "Global Payroll Manager — EMEA",
    company: "Confidential — Multinational Payroll Services Group",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across EMEA. Scaling its in-house payroll delivery team as volumes grow.",
    location: "EMEA (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "6 days ago",
    urgent: false,
    featured: true,
    summary:
      "Lead payroll delivery across EMEA and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "global-payroll-manager-apac-apac",
    title: "Global Payroll Manager — APAC",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across APAC. High-growth environment, remote-first delivery.",
    location: "APAC (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: true,
    featured: false,
    summary:
      "Lead payroll delivery across APAC and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "APAC", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-specialist-latam-mexico",
    title: "Senior Payroll Specialist — LATAM",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "Mexico",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across Mexico and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "Americas", "Compliance", "Remote"],
  },
  {
    slug: "senior-manager-payroll-operations-americas-united-states",
    title: "Senior Manager, Payroll Operations — Americas",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across the Americas. Scaling its in-house payroll delivery team as volumes grow.",
    location: "United States",
    remote: "Remote",
    salary: "$95,000 – $120,000",
    function: "Payroll",
    contract: "Permanent",
    experience: "Director",
    posted: "2 weeks ago",
    urgent: true,
    featured: true,
    summary:
      "Own the payroll operation across the Americas — a leadership mandate covering delivery quality, compliance, team build and client outcomes at scale.",
    impact:
      "You'll own payroll outcomes for an entire region. Get it right and the company scales; get it wrong and clients churn. This is the seat that decides which.",
    tags: ["Global Payroll", "Americas", "Compliance", "Remote"],
  },
  {
    slug: "payroll-operations-team-lead-eu-emea",
    title: "Payroll Operations Team Lead — EU",
    company: "Confidential — Multinational Payroll Services Group",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "EMEA (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across EMEA and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "payroll-operations-team-lead-apac-apac",
    title: "Payroll Operations Team Lead — APAC",
    company: "Confidential — High-Growth Global Employment Platform",
    companyContext:
      "A multinational payroll services group building out regional delivery capability. The team owns end-to-end payroll accuracy and compliance across multiple jurisdictions.",
    location: "APAC (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 day ago",
    urgent: true,
    featured: true,
    summary:
      "Lead payroll delivery across APAC and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "APAC", "Compliance", "Remote"],
  },
  {
    slug: "payroll-operations-team-lead-middle-east-middle-east",
    title: "Payroll Operations Team Lead — Middle East",
    company: "Confidential — Global Payroll Technology Platform",
    companyContext:
      "A global workforce-technology company running multi-country payroll operations for clients across EMEA. Scaling its in-house payroll delivery team as volumes grow.",
    location: "Middle East (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 days ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across Middle East and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "senior-payroll-consultant-middle-east-middle-east",
    title: "Senior Payroll Consultant — Middle East",
    company: "Confidential — International Payroll & Compliance Scale-up",
    companyContext:
      "An international payroll and compliance platform expanding its managed-payroll operation across EMEA. High-growth environment, remote-first delivery.",
    location: "Middle East (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "Payroll",
    contract: "Permanent",
    experience: "Senior",
    posted: "3 days ago",
    urgent: false,
    featured: false,
    summary:
      "Lead payroll delivery across Middle East and neighbouring markets — driving accuracy, compliance and process improvement while mentoring a growing specialist team.",
    impact:
      "You'll set the delivery standard for a whole region — and build the team that holds it as client volumes climb.",
    tags: ["Global Payroll", "EMEA", "Compliance", "Remote"],
  },
  {
    slug: "hr-business-partner-global",
    title: "HR Business Partner",
    company: "Confidential — International Workforce Platform",
    companyContext:
      "An international workforce platform building out its people-operations and HR-advisory capability to support rapid client growth across multiple regions.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "HR",
    contract: "Permanent",
    experience: "Senior",
    posted: "4 days ago",
    urgent: false,
    featured: false,
    summary:
      "Act as a trusted HR partner to leaders and clients across multiple regions — from employment advisory to people operations in complex, cross-border settings.",
    impact:
      "You'll be the person leaders and clients call when the people question is hard and the answer has to be right the first time.",
    tags: ["People Operations", "Global", "Cross-Border", "Remote"],
  },
  {
    slug: "senior-hr-specialist-government-relations-saudi-arabia",
    title: "Senior HR Specialist (Government Relations)",
    company: "Confidential — High-Growth HR Technology Scale-up",
    companyContext:
      "A high-growth global people-technology company scaling its HR and EOR advisory function across EMEA. Remote-first, multi-jurisdiction.",
    location: "Saudi Arabia",
    remote: "Remote",
    salary: "Competitive",
    function: "HR",
    contract: "Permanent",
    experience: "Senior",
    posted: "5 days ago",
    urgent: true,
    featured: false,
    summary:
      "Act as a trusted HR partner to leaders and clients across EMEA — from employment advisory to people operations in complex, cross-border settings.",
    impact:
      "You'll be the person leaders and clients call when the people question is hard and the answer has to be right the first time.",
    tags: ["People Operations", "EMEA", "Cross-Border", "Remote"],
  },
  {
    slug: "senior-hr-and-employment-advisor-philippines",
    title: "Senior HR & Employment Advisor",
    company: "Confidential — Global People-Technology Company",
    companyContext:
      "An international workforce platform building out its people-operations and HR-advisory capability to support rapid client growth across APAC.",
    location: "Philippines",
    remote: "Remote",
    salary: "Competitive",
    function: "HR",
    contract: "Permanent",
    experience: "Senior",
    posted: "6 days ago",
    urgent: false,
    featured: true,
    summary:
      "Act as a trusted HR partner to leaders and clients across APAC — from employment advisory to people operations in complex, cross-border settings.",
    impact:
      "You'll be the person leaders and clients call when the people question is hard and the answer has to be right the first time.",
    tags: ["People Operations", "APAC", "Cross-Border", "Remote"],
  },
  {
    slug: "senior-manager-people-operations-global",
    title: "Senior Manager, People Operations",
    company: "Confidential — International Workforce Platform",
    companyContext:
      "A high-growth global people-technology company scaling its HR and EOR advisory function across multiple regions. Remote-first, multi-jurisdiction.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "HR",
    contract: "Permanent",
    experience: "Director",
    posted: "1 week ago",
    urgent: true,
    featured: true,
    summary:
      "Lead people operations across multiple regions — build the HR infrastructure that lets a global workforce scale without breaking.",
    impact:
      "You'll build the people infrastructure that lets a global company scale headcount without losing what makes it work.",
    tags: ["People Operations", "Global", "Cross-Border", "Remote"],
  },
  {
    slug: "talent-acquisition-specialist-india",
    title: "Talent Acquisition Specialist",
    company: "Confidential — High-Growth HR Technology Scale-up",
    companyContext:
      "An international workforce platform building out its people-operations and HR-advisory capability to support rapid client growth across APAC.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "HR",
    contract: "Permanent",
    experience: "Mid",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Support the people function across APAC — advisory, onboarding and employee experience in a fast-moving, multi-jurisdiction environment.",
    impact:
      "You'll shape how a global workforce experiences the company — across borders, cultures and jurisdictions.",
    tags: ["People Operations", "APAC", "Cross-Border"],
  },
  {
    slug: "senior-full-stack-engineer-apac-emea",
    title: "Senior Full Stack Engineer",
    company: "Confidential — High-Growth Workforce SaaS Platform",
    companyContext:
      "A fast-scaling HR-technology platform re-architecting the systems behind global payroll and employment. Distributed engineering org across multiple time zones.",
    location: "APAC / EMEA (Remote)",
    remote: "Remote",
    salary: "$70,000 – $100,000",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: true,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "lead-software-engineer-platform-global",
    title: "Lead Software Engineer — Platform",
    company: "Confidential — Global HR-Tech Platform (Series-Stage)",
    companyContext:
      "An international workforce-SaaS company investing heavily in platform, data and quality engineering to support hyper-growth.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: false,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Kubernetes", "Go", "Terraform", "AWS", "PostgreSQL"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "senior-software-engineer-core-services-serbia",
    title: "Senior Software Engineer — Core Services",
    company: "Confidential — International Payroll Technology Company",
    companyContext:
      "A fast-scaling HR-technology platform re-architecting the systems behind global payroll and employment. Distributed engineering org across multiple time zones.",
    location: "Serbia",
    remote: "Remote",
    salary: "€60,000 – €85,000",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 day ago",
    urgent: false,
    featured: true,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Go", "Node.js", "PostgreSQL", "Kafka", "Kubernetes"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "data-engineer-india",
    title: "Data Engineer",
    company: "Confidential — High-Growth Workforce SaaS Platform",
    companyContext:
      "An international workforce-SaaS company investing heavily in platform, data and quality engineering to support hyper-growth.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Python", "dbt", "Snowflake", "Airflow", "SQL"],
    tags: ["Platform", "Scale", "Remote-First"],
  },
  {
    slug: "lead-software-engineer-in-test-sdet-global",
    title: "Lead Software Engineer in Test (SDET)",
    company: "Confidential — Global HR-Tech Platform (Series-Stage)",
    companyContext:
      "A fast-scaling HR-technology platform re-architecting the systems behind global payroll and employment. Distributed engineering org across multiple time zones.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "3 days ago",
    urgent: true,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Playwright", "Selenium", "TypeScript", "CI/CD", "Postman"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "team-lead-backend-development-global",
    title: "Team Lead — Backend Development",
    company: "Confidential — International Payroll Technology Company",
    companyContext:
      "An international workforce-SaaS company investing heavily in platform, data and quality engineering to support hyper-growth.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "4 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Go", "Node.js", "PostgreSQL", "Kafka", "Kubernetes"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "team-lead-frontend-development-global",
    title: "Team Lead — Frontend Development",
    company: "Confidential — High-Growth Workforce SaaS Platform",
    companyContext:
      "A fast-scaling HR-technology platform re-architecting the systems behind global payroll and employment. Distributed engineering org across multiple time zones.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "5 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["TypeScript", "React", "Next.js", "GraphQL", "Cypress"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "senior-qa-engineer-global",
    title: "Senior QA Engineer",
    company: "Confidential — Global HR-Tech Platform (Series-Stage)",
    companyContext:
      "An international workforce-SaaS company investing heavily in platform, data and quality engineering to support hyper-growth.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "6 days ago",
    urgent: false,
    featured: true,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Playwright", "Selenium", "TypeScript", "CI/CD", "Postman"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "senior-manager-it-and-security-india",
    title: "Senior Manager, IT & Security",
    company: "Confidential — International Payroll Technology Company",
    companyContext:
      "A fast-scaling HR-technology platform re-architecting the systems behind global payroll and employment. Distributed engineering org across multiple time zones.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Director",
    posted: "1 week ago",
    urgent: true,
    featured: true,
    summary:
      "Lead an engineering group building the infrastructure behind global payroll and employment — architecture, delivery, and team scale.",
    impact:
      "You'll lead the engineering that decides whether a global platform can carry the next order of magnitude of clients.",
    techStack: ["SIEM", "SOC 2", "IAM", "Cloud Security", "ISO 27001"],
    tags: ["Platform", "Scale", "Remote-First"],
  },
  {
    slug: "senior-salesforce-architect-global",
    title: "Senior Salesforce Architect",
    company: "Confidential — High-Growth Workforce SaaS Platform",
    companyContext:
      "An international workforce-SaaS company investing heavily in platform, data and quality engineering to support hyper-growth.",
    location: "Global (Remote)",
    remote: "Remote",
    salary: "Competitive",
    function: "IT & Engineering",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Own critical services on a platform processing employment and payroll at global scale. Set the technical bar and mentor as you build.",
    impact:
      "You'll own systems where a bug means someone doesn't get paid. High stakes, high ownership, real scale.",
    techStack: ["Salesforce", "Apex", "LWC", "SOQL", "MuleSoft"],
    tags: ["Platform", "Scale", "Remote-First", "Remote"],
  },
  {
    slug: "head-of-fpanda-india",
    title: "Head of FP&A",
    company: "Confidential — International HR-Tech Scale-up",
    companyContext:
      "A global workforce-technology company building a public-company-grade finance function as it scales toward its next funding milestone.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Finance",
    contract: "Permanent",
    experience: "Director",
    posted: "2 weeks ago",
    urgent: true,
    featured: true,
    summary:
      "Own a leadership finance mandate — build the controls, forecasting and treasury capability of a company heading toward its next stage.",
    impact:
      "You'll own a leadership finance mandate at exactly the moment financial discipline becomes the constraint on growth.",
    tags: ["Finance Transformation", "Scaling", "Controls"],
  },
  {
    slug: "head-of-treasury-india",
    title: "Head of Treasury",
    company: "Confidential — Global Workforce Technology Company",
    companyContext:
      "An international HR-tech scale-up strengthening financial control, treasury and FP&A ahead of its next stage of growth.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Finance",
    contract: "Permanent",
    experience: "Director",
    posted: "2 weeks ago",
    urgent: true,
    featured: true,
    summary:
      "Own a leadership finance mandate — build the controls, forecasting and treasury capability of a company heading toward its next stage.",
    impact:
      "You'll own a leadership finance mandate at exactly the moment financial discipline becomes the constraint on growth.",
    tags: ["Finance Transformation", "Scaling", "Controls"],
  },
  {
    slug: "senior-finance-manager-india",
    title: "Senior Finance Manager",
    company: "Confidential — International HR-Tech Scale-up",
    companyContext:
      "A global workforce-technology company building a public-company-grade finance function as it scales toward its next funding milestone.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Finance",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 day ago",
    urgent: true,
    featured: true,
    summary:
      "Lead a critical finance function through hyper-growth — bringing rigour, insight and control as the company scales toward its next milestone.",
    impact:
      "You'll build the financial rigour a company needs to move from high-growth to fundable-at-the-next-stage.",
    tags: ["Finance Transformation", "Scaling", "Controls"],
  },
  {
    slug: "manager-senior-manager-controllership-india",
    title: "Manager / Senior Manager, Controllership",
    company: "Confidential — Global Workforce Technology Company",
    companyContext:
      "An international HR-tech scale-up strengthening financial control, treasury and FP&A ahead of its next stage of growth.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Finance",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 days ago",
    urgent: false,
    featured: false,
    summary:
      "Lead a critical finance function through hyper-growth — bringing rigour, insight and control as the company scales toward its next milestone.",
    impact:
      "You'll build the financial rigour a company needs to move from high-growth to fundable-at-the-next-stage.",
    tags: ["Finance Transformation", "Scaling", "Controls"],
  },
  {
    slug: "financial-analyst-general-ledger-india",
    title: "Financial Analyst — General Ledger",
    company: "Confidential — International HR-Tech Scale-up",
    companyContext:
      "A global workforce-technology company building a public-company-grade finance function as it scales toward its next funding milestone.",
    location: "India",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Finance",
    contract: "Permanent",
    experience: "Mid",
    posted: "3 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own a core part of the finance engine — reporting, analysis and controls — for a fast-scaling global business.",
    impact:
      "You'll bring the numbers leadership actually runs the business on — in a company scaling fast enough that the finance function has to scale first.",
    tags: ["Finance Transformation", "Scaling", "Controls"],
  },
  {
    slug: "account-executive-uk-and-ireland-mid-market-london-uk",
    title: "Account Executive — UK & Ireland (Mid-Market)",
    company: "Confidential — Global Employment Technology Platform",
    companyContext:
      "An international payroll and HR-software company scaling revenue with a consultative, solutions-led sales motion across EMEA.",
    location: "London, UK",
    remote: "Hybrid",
    salary: "£55,000 – £70,000 + commission",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "4 days ago",
    urgent: false,
    featured: false,
    summary:
      "Own a commercial territory across EMEA — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "EMEA", "Solutions Sale"],
  },
  {
    slug: "solutions-consultant-new-york-usa",
    title: "Solutions Consultant",
    company: "Confidential — International Payroll & HR Software Company",
    companyContext:
      "A global employment-technology platform expanding its commercial team to capture demand across the Americas.",
    location: "New York, USA",
    remote: "Hybrid",
    salary: "$110,000 – $140,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "5 days ago",
    urgent: true,
    featured: false,
    summary:
      "Own a commercial territory across the Americas — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Americas", "Solutions Sale"],
  },
  {
    slug: "enterprise-account-executive-new-york-usa",
    title: "Enterprise Account Executive",
    company: "Confidential — Global Employment Technology Platform",
    companyContext:
      "An international payroll and HR-software company scaling revenue with a consultative, solutions-led sales motion across the Americas.",
    location: "New York, USA",
    remote: "Hybrid",
    salary: "$130,000 – $170,000 OTE",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "6 days ago",
    urgent: false,
    featured: true,
    summary:
      "Own a commercial territory across the Americas — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Americas", "Solutions Sale"],
  },
  {
    slug: "manager-strategic-partnerships-new-york-usa",
    title: "Manager, Strategic Partnerships",
    company: "Confidential — International Payroll & HR Software Company",
    companyContext:
      "A global employment-technology platform expanding its commercial team to capture demand across the Americas.",
    location: "New York, USA",
    remote: "Hybrid",
    salary: "Competitive",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Own a commercial territory across the Americas — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Americas", "Solutions Sale"],
  },
  {
    slug: "customer-success-manager-americas-new-york-usa",
    title: "Customer Success Manager — Americas",
    company: "Confidential — Global Employment Technology Platform",
    companyContext:
      "An international payroll and HR-software company scaling revenue with a consultative, solutions-led sales motion across the Americas.",
    location: "New York, USA",
    remote: "Remote",
    salary: "$90,000 – $110,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 week ago",
    urgent: false,
    featured: false,
    summary:
      "Own a commercial territory across the Americas — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Americas", "Solutions Sale", "Remote"],
  },
  {
    slug: "channel-account-executive-broker-partnerships-united-states",
    title: "Channel Account Executive — Broker Partnerships",
    company: "Confidential — International Payroll & HR Software Company",
    companyContext:
      "A global employment-technology platform expanding its commercial team to capture demand across the Americas.",
    location: "United States",
    remote: "Hybrid",
    salary: "$140,000 – $175,000 OTE",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: true,
    featured: false,
    summary:
      "Own a commercial territory across the Americas — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Americas", "Solutions Sale"],
  },
  {
    slug: "product-partnerships-manager-north-america",
    title: "Product Partnerships Manager",
    company: "Confidential — Global Employment Technology Platform",
    companyContext:
      "An international payroll and HR-software company scaling revenue with a consultative, solutions-led sales motion across multiple regions.",
    location: "North America (Remote)",
    remote: "Remote",
    salary: "$120,000 – $155,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "2 weeks ago",
    urgent: false,
    featured: false,
    summary:
      "Own a commercial territory across multiple regions — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "Global", "Solutions Sale", "Remote"],
  },
  {
    slug: "senior-partnerships-manager-dach-germany",
    title: "Senior Partnerships Manager — DACH",
    company: "Confidential — International Payroll & HR Software Company",
    companyContext:
      "A global employment-technology platform expanding its commercial team to capture demand across EMEA.",
    location: "Germany",
    remote: "Hybrid",
    salary: "€120,000 – €150,000",
    function: "Sales",
    contract: "Permanent",
    experience: "Senior",
    posted: "1 day ago",
    urgent: false,
    featured: true,
    summary:
      "Own a commercial territory across EMEA — a consultative, solutions-led sale to HR, finance and operations leaders solving global-employment problems.",
    impact:
      "You'll own real revenue in a category that's still being defined — selling to the leaders who feel the pain of global hiring every day.",
    tags: ["Revenue", "EMEA", "Solutions Sale"],
  },
];

export const FUNCTIONS = ["Payroll", "HR", "IT & Engineering", "Finance", "Sales"] as const;
export const CONTRACTS = ["Permanent", "Contract", "Interim"] as const;
export const REMOTES = ["Remote", "Hybrid", "On-site"] as const;
export const EXPERIENCES = ["Mid", "Senior", "Director", "C-Suite"] as const;
