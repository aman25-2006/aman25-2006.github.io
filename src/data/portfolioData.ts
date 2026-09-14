export interface Project {
  id: string;
  title: string;
  category: "ai" | "startup" | "core";
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  tag: string;
  description: string;
  iconName: "award" | "cloud" | "database" | "cpu" | "shield";
  credentialUrl?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  points: string[];
  badge: string;
}

export interface SkillCategory {
  title: string;
  categoryIcon: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge";
    tag?: string;
  }[];
}

export const candidateData = {
  name: "Aman Kumar",
  roleTitle: "Full-Stack & AI Developer | Aspiring Software Engineer",
  headline: "BCA Candidate (5th Sem, 74.13% Aggregate) | AWS & Google Student Ambassador | Founder @ BrahmaCode",
  location: "Muzaffarpur, Bihar, India",
  phone: "+91 9835934494",
  email: "asiaaman988@gmail.com",
  linkedin: "https://linkedin.com/in/aman-kumar-964a7b34a",
  github: "https://github.com/aman25-2006",
  resumePath: "/Aman_Kumar_Resume.pdf",

  overview:
    "High-performing Computer Applications scholar (74.13% aggregate) passionate about designing robust backend architectures, distributed cloud systems, and generative AI workflows. Recognized as an AWS Student Builder Campus Leader and Google Student Ambassador, with proven startup execution funded by the Government of Bihar and hackathon leadership at SIH 2026.",

  targetTracks: [
    "TCS Ignite & Smart Hiring",
    "Full-Stack Software Development",
    "Cloud Architecture (AWS / Azure / GCP)",
    "Applied Generative AI & Automation",
  ],

  metrics: [
    {
      value: "74.13%",
      label: "BCA Aggregate",
      subtext: "Top-tier academic track at LNMCBM",
      color: "from-cyan-400 to-blue-500",
    },
    {
      value: "Seed Funded",
      label: "Bihar Startup Policy 2022",
      subtext: "Founder @ BrahmaCode EdTech",
      color: "from-purple-400 to-pink-500",
    },
    {
      value: "SIH 2026",
      label: "Hackathon Team Leader",
      subtext: "Team ID: 26135 (Skill Saarthi)",
      color: "from-amber-400 to-orange-500",
    },
    {
      value: "5+",
      label: "Industry Certifications",
      subtext: "Oracle, NPTEL Silver, TCS iON, Azure, IBM",
      color: "from-emerald-400 to-teal-500",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "L.N. Mishra College of Business Management (LNMCBM)",
    location: "Muzaffarpur, Bihar",
    duration: "2022 - 2025 (5th Semester)",
    aggregate: "74.13% Aggregate",
    keyCoursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP in C++ & Java)",
      "Database Management Systems (DBMS & RDBMS)",
      "Operating Systems & Process Scheduling",
      "Computer Networks & Protocols",
      "Software Engineering & SDLC",
    ],
  },

  skills: [
    {
      title: "Programming Languages",
      categoryIcon: "Code",
      skills: [
        { name: "C++", level: "Advanced", tag: "DSA & Problem Solving" },
        { name: "Java", level: "Proficient", tag: "OOP & Enterprise Logic" },
        { name: "Python", level: "Advanced", tag: "Data Science & AI" },
        { name: "C", level: "Proficient", tag: "System Fundamentals" },
        { name: "SQL", level: "Advanced", tag: "Complex Queries & Optimization" },
        { name: "PL/SQL", level: "Proficient", tag: "Procedures & Triggers" },
      ],
    },
    {
      title: "Databases & Storage",
      categoryIcon: "Database",
      skills: [
        { name: "Oracle Database", level: "Advanced", tag: "Certified Foundations" },
        { name: "MySQL", level: "Proficient", tag: "Relational Schemas" },
        { name: "RDBMS Architecture", level: "Advanced", tag: "Normalization & ACID" },
        { name: "Query Optimization", level: "Proficient", tag: "Indexing & Joins" },
      ],
    },
    {
      title: "Cloud & DevOps",
      categoryIcon: "Cloud",
      skills: [
        { name: "Amazon Web Services (AWS)", level: "Proficient", tag: "EC2, S3, IAM, Cloud Leader" },
        { name: "Microsoft Azure", level: "Proficient", tag: "25-Hour Structured Course" },
        { name: "Google Cloud Arcade", level: "Proficient", tag: "Ambassador Labs" },
        { name: "Git & GitHub", level: "Advanced", tag: "CI/CD & Version Control" },
        { name: "Linux / Bash", level: "Proficient", tag: "Shell Scripting" },
      ],
    },
    {
      title: "Data Science & Generative AI",
      categoryIcon: "Cpu",
      skills: [
        { name: "NumPy & Pandas", level: "Advanced", tag: "Data Manipulation" },
        { name: "Prompt Engineering", level: "Advanced", tag: "Structured Outputs" },
        { name: "Google Gemini API", level: "Advanced", tag: "Multimodal & Function Calling" },
        { name: "OpenAI ChatGPT API", level: "Proficient", tag: "Embeddings & Agents" },
        { name: "Data Analytics", level: "Proficient", tag: "Statistical Insights" },
      ],
    },
    {
      title: "Developer Tools",
      categoryIcon: "Terminal",
      skills: [
        { name: "VS Code", level: "Advanced", tag: "Primary IDE" },
        { name: "Google Antigravity", level: "Advanced", tag: "Autonomous Workflows" },
        { name: "Postman", level: "Proficient", tag: "API Testing" },
        { name: "Jupyter Notebooks", level: "Proficient", tag: "Model Exploration" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "skill-saarthi",
      title: "Skill Saarthi",
      category: "ai",
      categoryLabel: "AI & Hackathons",
      badge: "SIH 2026 Team Leader (ID: 26135)",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40",
      tagline: "AI-Assisted Skilling & Longitudinal Career Tracking Platform",
      description:
        "Engineered an integrated workforce readiness system that assigns a Unified Learner ID, orchestrates skill gap assessments, tracks student career trajectories longitudinally, and securely verifies employment outcomes.",
      features: [
        "Automated AI skill gap diagnostic based on industry hiring trends",
        "Unified Learner Identity mechanism to track career progression across semesters",
        "Real-time analytics dashboard for academic institutions and government bodies",
        "Cryptographic proof of skill credentials and anti-tamper employment verification",
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Generative AI", "React", "Docker"],
      githubUrl: "https://github.com/aman25-2006",
    },
    {
      id: "yantra-os",
      title: "YantraOS",
      category: "ai",
      categoryLabel: "AI & Hackathons",
      badge: "IIT Patna Hackathon 6.0 Cleared",
      badgeColor: "border-purple-500/40 text-purple-300 bg-purple-950/40",
      tagline: "Industrial AI Copilot for Industry 4.0 Telemetry & Decision Support",
      description:
        "Built an intelligent telemetry assistant designed for factory floors and MSMEs to perform predictive diagnostics, interpret machine sensory data, and provide operators with instant interactive troubleshooting steps.",
      features: [
        "Real-time ingestion of machinery telemetry feeds and anomaly detection",
        "Contextual LLM-based troubleshooting copilot tuned for mechanical and electrical systems",
        "Interactive root-cause analysis reports with visual step-by-step resolution guides",
        "Offline-capable fallback caching for low-connectivity industrial workshops",
      ],
      techStack: ["Python", "Gemini API", "IoT Telemetry", "Streamlit", "MySQL"],
      githubUrl: "https://github.com/aman25-2006",
    },
    {
      id: "brahmacode",
      title: "BrahmaCode",
      category: "startup",
      categoryLabel: "Startups & Platforms",
      badge: "Govt of Bihar Seed Funded",
      badgeColor: "border-amber-500/40 text-amber-300 bg-amber-950/40",
      tagline: "Inclusive AI-Assisted Coding & EdTech Learning Pathways",
      description:
        "Founded an educational technology initiative selected for grant funding under the Bihar Startup Policy-2022, designed to democratize software engineering education in Tier-2 and Tier-3 colleges through vernacular AI coding assistants.",
      features: [
        "Interactive interactive practice playgrounds with immediate syntax correction",
        "Vernacular explanation engine translating complex DSA concepts into Hindi and regional nuances",
        "Gamified milestone roadmaps tailored for corporate hiring patterns (TCS, Infosys, Wipro)",
        "Endorsed by state incubation mentors with seed funding disbursement",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AI Models", "Tailwind CSS"],
      githubUrl: "https://github.com/aman25-2006",
    },
    {
      id: "restaurant-menu-system",
      title: "Restaurant Menu Management System",
      category: "core",
      categoryLabel: "Core CS & OOP",
      badge: "Production OOP Architecture",
      badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40",
      tagline: "Object-Oriented Billing, Inventory & Receipt Generation Engine",
      description:
        "A structured Python system demonstrating rigorous Object-Oriented Programming (OOP) principles, clean class hierarchy, robust exception handling, dynamic bill calculation with tax algorithms, and automated formatted invoicing.",
      features: [
        "Rigorous encapsulation and polymorphism across items, orders, and customer billing modules",
        "Comprehensive input sanitization preventing runtime edge-case crashes",
        "Automated disk persistence and formatted receipt exports with tax calculations",
        "Benchmarked modular codebase suitable for technical code review in corporate assessments",
      ],
      techStack: ["Python", "OOP Principles", "File I/O", "Data Structures"],
      githubUrl: "https://github.com/aman25-2006",
    },
  ] as Project[],

  certifications: [
    {
      title: "Python for Data Science (Silver / Elite Medal)",
      issuer: "NPTEL - National Programme on Technology Enhanced Learning",
      tag: "Silver Medal (Top Percentile)",
      description:
        "Rigorous 12-week examination covering Python data structures, NumPy, Pandas matrix operations, statistical modeling, and predictive analytics with high distinction.",
      iconName: "award",
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle University",
      tag: "Global Certification",
      description:
        "Comprehensive validation of relational database concepts, SQL query execution, transaction management, constraints, indexing, and enterprise RDBMS architecture.",
      iconName: "database",
    },
    {
      title: "Career Edge - The Young Professional",
      issuer: "TCS iON (Tata Consultancy Services)",
      tag: "Corporate Readiness",
      description:
        "Rigorous training program on corporate communication, analytical reasoning, collaborative problem-solving, digital literacy, and IT business dynamics aligned with TCS standards.",
      iconName: "shield",
    },
    {
      title: "Microsoft Azure Cloud Practitioner",
      issuer: "Microsoft Structured Course",
      tag: "25-Hour Deep Dive",
      description:
        "In-depth hands-on architectural training covering Azure Virtual Machines, Blob Storage, Virtual Networks, Azure Active Directory, and cloud security governance.",
      iconName: "cloud",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "IBM SkillsBuild",
      tag: "AI & Automation",
      description:
        "Foundational and applied mastery of large language models, prompt engineering patterns, ethical AI deployment, and enterprise generative workflow automation.",
      iconName: "cpu",
    },
  ] as Certification[],

  leadership: [
    {
      role: "AWS Student Builder Campus Leader",
      organization: "L.N. Mishra College of Business Management",
      period: "2024 - Present",
      description:
        "Appointed to spearhead cloud learning initiatives, conducting workshops on AWS Core Services (EC2, S3, RDS, Lambda) for 200+ undergraduate developers.",
      points: [
        "Mentored peers on fundamental cloud architecture, cost optimization, and IAM best practices",
        "Organized hands-on cloud deployment hackathons and technical bootcamps on campus",
      ],
      badge: "AWS Leader",
    },
    {
      role: "Google Student Ambassador & Coordinator",
      organization: "Google Developer Groups & GSA Community",
      period: "2023 - Present",
      description:
        "Facilitating developer awareness of Google Cloud Platform (Arcade), TensorFlow, and modern web developer ecosystems through structured interactive sessions.",
      points: [
        "Coordinated campus participation in Google Cloud Arcade skill badges and solution challenges",
        "Bridged industry-relevant developer tooling to academic classroom curriculums",
      ],
      badge: "Google Ambassador",
    },
    {
      role: "Student Coordinator Head",
      organization: "Smart India Hackathon (SIH) 2026 - College Cell",
      period: "2025 - 2026",
      description:
        "Headed the internal screening committee, organizing problem statement analysis, mentorship rounds, and pitch deck refinement for collegiate teams.",
      points: [
        "Led Team 26135 (Skill Saarthi) from inception through submission architecture",
        "Streamlined project evaluations with senior college faculty and industry advisors",
      ],
      badge: "SIH Coordinator Head",
    },
    {
      role: "Founder & Product Lead",
      organization: "BrahmaCode (EdTech Startup)",
      period: "2022 - Present",
      description:
        "Selected under the prestigious Bihar Startup Policy-2022 by Department of Industries, Government of Bihar for seed grant and incubation support.",
      points: [
        "Drafted financial projections, technical roadmap, and investor pitch deck",
        "Directly incubated under state technical mentors to build scalable learning software",
      ],
      badge: "Seed Funded Founder",
    },
  ] as LeadershipItem[],
};

