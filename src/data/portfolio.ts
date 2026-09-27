export const profile = {
  fullName: "Gundlapallivenkata Sai Badhrinadh",
  shortName: "Badhrinadh",
  title: "AI Engineer & Forward Deployed Engineer",
  tagline:
    "I build agentic AI systems and ship enterprise-grade ServiceNow platforms — ready for client-facing technical roles on day one.",
  location: "Nellore, Andhra Pradesh, India",
  email: "badhrinadh.cse@gmail.com",
  phone: "+91-9346980100",
  linkedin: "https://linkedin.com/in/badhrinadhgvs",
  github: "https://github.com/Badhrinadhgvs",
  roles: [
    "AI Engineer",
    "Forward Deployed Engineer",
    "ServiceNow Developer",
    "Agentic Systems Builder",
  ],
};

export const about = {
  paragraphs: [
    "I work across enterprise ServiceNow development and agentic AI systems using LangGraph, RAG, and MCP.",
    "I am a final-year CSE student at Narayana Engineering College with a 9.3/10 CGPA, graduating in May 2027. I qualified GATE 2026 in both Data Science & AI and CS/IT.",
    "My confirmed work includes AI governance, risk and chargeback analysis, cryptographic discovery, adaptive testing, and full-stack systems.",
  ],
  highlights: [
    { label: "CGPA", value: "9.3/10" },
    { label: "GATE papers", value: "2" },
    { label: "Hackathon wins", value: "1st / 170+" },
    { label: "SN certs", value: "CSA + CAD" },
  ],
};

export const skillGroups = [
  {
    title: "AI / ML & Agentic AI",
    accent: "gold" as const,
    skills: [
      "LangGraph",
      "RAG pipelines",
      "MCP",
      "Groq / Gemini APIs",
      "Prompt engineering",
      "Chroma / FAISS",
      "IRT & Bayesian methods",
      "sentence-transformers",
    ],
  },
  {
    title: "ServiceNow",
    accent: "teal" as const,
    skills: [
      "CSA & CAD certified",
      "Flow Designer",
      "Business Rules",
      "ACLs",
      "Scoped apps",
      "Service Catalog",
      "Integration Hub",
      "PDI development",
    ],
  },
  {
    title: "Full-Stack",
    accent: "gold" as const,
    skills: [
      "React 18",
      "Spring Boot 3",
      "Django",
      "Java 17",
      "MySQL",
      "Docker",
      "JWT auth",
      "Streamlit / Flask",
    ],
  },
  {
    title: "Data & Math",
    accent: "teal" as const,
    skills: [
      "Linear Algebra",
      "Bayesian inference",
      "Item Response Theory",
      "Logistic Regression",
      "XGBoost / SVM / RF",
      "Python",
      "Data pipelines",
      "Evaluation design",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tag: string;
  featured: boolean;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    id: "ai-governance",
    title: "AI Governance & Vendor Lifecycle Engine",
    tag: "ServiceNow · Enterprise",
    featured: true,
    problem: "AI vendor lifecycle work needs consistent, rule-based risk scoring and controls.",
    approach:
      "Built a ServiceNow scoped application on a PDI with a rule-based risk scoring engine, Business Rules, Flow Designer automations, and strict ACLs. Backed by a 16-page enterprise implementation document covering data model, security, and operational runbooks.",
    outcome: "Self-assessed as my strongest CAD-aligned portfolio piece.",
    stack: ["ServiceNow", "Flow Designer", "Business Rules", "ACLs", "Scoped Apps"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "aegis",
    title: "Aegis — AI Risk & Chargeback Copilot",
    tag: "Razorpay Buildathon",
    featured: true,
    problem:
      "Fraud and return-risk flags are opaque to operators; chargeback evidence drafting is manual, slow, and inconsistent under volume.",
    approach:
      "Built an explainable fraud/return-risk classifier paired with a LangGraph agent that explains flags and drafts chargeback evidence responses. Included a deterministic rule-based fallback path when LLM calls fail — reliability first.",
    outcome:
      "Submitted to the Razorpay AI Buildathon AI Risk Manager track; no competition result is claimed.",
    stack: ["LangGraph", "Explainable ML", "Groq", "Rule fallback", "Risk scoring"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "crypto-discovery",
    title: "Enterprise Cryptographic Discovery & Analysis",
    tag: "SIH 2026 · PS 26164",
    featured: true,
    problem:
      "Organizations cannot inventory cryptographic usage across code, binaries, containers, and certificates — blocking quantum-migration planning.",
    approach:
      "Scans source, binaries, containers, and certs to build a CBOM (Cryptographic Bill of Materials), assesses quantum-migration risk via Mosca's theorem, and routes remediation through a ServiceNow workflow for accountable ops.",
    outcome:
      "A chosen Smart India Hackathon 2026 problem statement being worked on; no SIH win or completion is claimed.",
    stack: ["CBOM", "Crypto analysis", "ServiceNow", "Mosca's theorem", "Containers"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "adaptiquest",
    title: "AdaptiQuest AI",
    tag: "National Hackathon Winner",
    featured: true,
    problem:
      "Fixed-form tests waste time on items that are too easy or too hard — adaptive assessment needs rigorous psychometrics plus fast inference.",
    approach:
      "Adaptive testing engine using Item Response Theory and Bayesian ability estimation, with Groq LLM inference for dynamic item generation and feedback.",
    outcome:
      "National hackathon winner.",
    stack: ["IRT", "Bayesian methods", "Groq", "Python", "Adaptive testing"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "lowcode-agentic",
    title: "Low-Code Agentic AI Platform",
    tag: "Django · Production",
    featured: false,
    problem:
      "Non-specialists need to compose agent workflows without rebuilding infrastructure every time.",
    approach:
      "Django platform integrating Groq LLM and Phidata for configurable agent pipelines with operational monitoring.",
    outcome: "Reported 99% uptime.",
    stack: ["Django", "Groq", "Phidata", "Agents"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "sepms",
    title: "Smart Employee & Project Management (SEPMS)",
    tag: "Full-Stack Assessment",
    featured: false,
    problem:
      "Teams need secure employee/project operations with modern auth and containerized delivery.",
    approach:
      "Full-stack system: Spring Boot 3.3.2, React 18, Java 17, MySQL, JWT auth, Docker — built as a technical assessment under real constraints.",
    outcome: "Submitted as a technical assessment for EverNorth Round 2.",
    stack: ["Spring Boot 3.3.2", "React 18", "Java 17", "MySQL", "JWT", "Docker"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "nxtgenhealth",
    title: "NxtGenHealth",
    tag: "Health ML",
    featured: false,
    problem: "Early health-risk signals are buried in multi-vital patient data.",
    approach:
      "Logistic Regression risk prediction across 2,000+ records and 7+ vitals with careful feature handling and evaluation.",
    outcome: "89% accuracy.",
    stack: ["Logistic Regression", "Python", "Healthcare data"],
    github: "https://github.com/Badhrinadhgvs",
  },
  {
    id: "ml-builder",
    title: "ML Algorithm Builder GUI",
    tag: "AutoML toolkit",
    featured: false,
    problem: "Spinning up classical ML experiments still requires repetitive boilerplate.",
    approach:
      "GUI-driven automated pipeline supporting 10+ algorithms including Random Forest, SVM, and XGBoost.",
    outcome: "Supports 10+ classical ML algorithms, including Random Forest, SVM, and XGBoost.",
    stack: ["Python", "scikit-learn", "XGBoost", "GUI"],
    github: "https://github.com/Badhrinadhgvs",
  },
];

export const achievements = [
  {
    icon: "trophy" as const,
    title: "Synaptix National Hackathon",
    detail: "1st place out of 170+ teams · 600+ participants",
    highlight: "1st",
  },
  {
    icon: "medal" as const,
    title: "Hackademia National Finalist",
    detail: "Top 7 of 200+ teams",
    highlight: "Top 7",
  },
  {
    icon: "users" as const,
    title: "GDG Coordinator",
    detail: "Led a 2-day hackathon with 50+ participants",
    highlight: "50+",
  },
  {
    icon: "brain" as const,
    title: "GATE 2026 — Dual Qualifier",
    detail: "Data Science & AI (AIR ~5099) and CS/IT (AIR ~12990)",
    highlight: "2 papers",
  },
];

export const certifications = [
  { name: "ServiceNow CSA", org: "ServiceNow", tier: "flagship" as const },
  { name: "ServiceNow CAD", org: "ServiceNow", tier: "flagship" as const },
  { name: "NSDC Machine Learning", org: "NSDC · Internshala", tier: "core" as const },
  { name: "Generative AI for Everyone", org: "Coursera", tier: "core" as const },
  { name: "Google AI Essentials", org: "Coursera", tier: "core" as const },
  { name: "Linear Algebra for ML", org: "Coursera", tier: "core" as const },
  { name: "Data Science & ML Bootcamp", org: "Udemy", tier: "core" as const },
  { name: "HackerRank Python", org: "Basic / Intermediate", tier: "core" as const },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Narayana Engineering College (NEC), Nellore",
  status: "Final year · Graduating May 2027",
  cgpa: "9.3 / 10",
  extras: [
    "GATE 2026 — Data Science & AI (AIR ~5099)",
    "GATE 2026 — CS/IT (AIR ~12990)",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
