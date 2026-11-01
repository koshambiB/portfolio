// All site content lives here, so updates don't require touching the components.

export const links = {
    // Replace with the Drive link to the current resume if this one is outdated.
    resume: "https://drive.google.com/file/d/18jQyqHKDEwBZtve1jGdHSN-k_WEvR_fR/view?usp=sharing",
    github: "https://github.com/koshambiB",
    linkedin: "https://www.linkedin.com/in/koshambi-bardhan-62b83b2ab/",
    email: "bardhankoshambi2005@gmail.com",
};

export type Role = {
    company: string;
    role: string;
    period: string;
    location?: string;
    points: string[];
};

export const experience: Role[] = [
    {
        company: "Flipkart",
        role: "Information Security Intern",
        period: "May – Jul 2026",
        points: [
            "Built a fault-tolerant API discovery and inventory pipeline that processes 500,000+ records in 20 minutes to find shadow and zombie APIs, cutting processing costs by 75%.",
            "Ran API security assessments and penetration tests using OWASP methodologies, and worked with engineering teams to fix the critical issues found.",
        ],
    },
    {
        company: "Samsung PRISM",
        role: "Research Intern",
        period: "Sep 2025 – Jan 2026",
        points: [
            "Designed modular, object-oriented Python backend components for an AI-powered PPTX generation system, reaching 85% model accuracy.",
            "Added an interactive clarification step that asks users for missing context, improving output accuracy and design consistency.",
        ],
    },
];

export const leadership: Role[] = [
    {
        company: "IEEE & Linux Club, VIT Chennai",
        role: "Technical Member",
        period: "Aug 2024 – Sep 2025",
        points: [
            "Built responsive web apps for club events and the university's annual tech fest, covering registration and event management.",
            "Designed Capture The Flag challenges around command-line tooling and network analysis; participation rose 40%.",
        ],
    },
    {
        company: "Event Manager's Club, VIT Chennai",
        role: "Management Member",
        period: "Jan 2024 – May 2025",
        points: [
            "Planned and ran 250+ university-wide technical, cultural and exhibition events serving 20,000+ participants.",
            "Coordinated cross-functional teams, vendors and schedules under tight timelines.",
        ],
    },
];

export type Project = {
    title: string;
    subtitle: string;
    period: string;
    inProgress?: boolean;
    description: string;
    highlights: string[];
    tags: string[];
    github?: string;
    link?: string;
};

export const projects: Project[] = [
    {
        title: "PQCharge",
        subtitle: "Post-quantum security for EV charging infrastructure",
        period: "2026",
        inProgress: true,
        description:
            "Capstone project with a team of three: a migration path for EV charge-point fleets to post-quantum cryptography. A central management system and a Raspberry Pi bench charge point communicate over OCPP 2.0.1, with messages signed using ML-DSA-44 on top of TLS. I work on the agent track.",
        highlights: [
            "OCPP 2.0.1 charge point running on a Raspberry Pi with a metered load",
            "Application-layer ML-DSA-44 signatures, integration-tested end to end",
        ],
        tags: ["Python", "OCPP 2.0.1", "ML-DSA", "TLS", "Raspberry Pi"],
        github: "https://github.com/PJT1-VIT/PQCharge",
    },
    {
        title: "AI-Based SOAR Automation",
        subtitle: "Cyber incident response with explainable decisions",
        period: "2026",
        inProgress: true,
        description:
            "A Security Orchestration, Automation and Response prototype. Alerts stream in through Kafka, get scored by configurable rules and a scikit-learn classifier, and every decision comes with a SHAP explanation. Playbooks are written in YAML and an analyst approves actions before they run.",
        highlights: [
            "Event-driven pipeline: Kafka → FastAPI → PostgreSQL (JSONB) → React dashboard",
            "Human-in-the-loop playbook execution with a full audit trail",
        ],
        tags: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Redis", "scikit-learn", "SHAP", "React"],
        github: "https://github.com/koshambiB/ai-soar-automation",
    },
    {
        title: "Celeris",
        subtitle: "Offline mobile payments over SMS",
        period: "Mar 2025",
        description:
            "An Android payment app that keeps working with little or no network. Transactions are carried over SMS, stored locally in SQLite and synced through REST APIs once the connection returns. Tested with 100+ users.",
        highlights: [
            "SMS-based transaction relay for low-connectivity areas",
            "Local-first storage with sync on reconnect",
        ],
        tags: ["Kotlin", "Java", "Python", "SQLite", "REST APIs"],
        github: "https://github.com/celeris-schnell",
    },
];

export const skills: { group: string; items: string[] }[] = [
    { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "Kotlin", "SQL"] },
    { group: "Backend", items: ["Node.js", "FastAPI", "REST APIs", "Apache Kafka", "Redis"] },
    { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { group: "Data", items: ["PostgreSQL", "MongoDB", "SQLite", "Data modeling"] },
    { group: "Infrastructure", items: ["Git", "Docker", "AWS", "Postman"] },
    { group: "AI / ML", items: ["scikit-learn", "SHAP", "LLMs", "Generative AI", "Context engineering"] },
    { group: "Security", items: ["API security testing", "OWASP", "Penetration testing", "CTF design"] },
    { group: "Business & delivery", items: ["Agile", "DevOps", "Power BI", "Project coordination", "Event management"] },
]

export const education = [
    {
        school: "Vellore Institute of Technology, Chennai",
        degree: "B.Tech, Computer Science & Engineering",
        period: "2023 – Jul 2027",
        detail: "GPA 9.1",
        note: "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Cryptography & Network Security, Computer Architecture",
    },
    {
        school: "St. Agnes Convent School, Kolkata",
        degree: "ISC (XII) 94% · ICSE (X) 92.4%",
        period: "2009 – 2023",
    },
];

export const certifications = [
    { issuer: "JPMorgan Chase & Co.", name: "Software Engineering Job Simulation (Forage)" },
    { issuer: "IBM", name: "DevOps, Agile and Design Thinking Professional Certificate" },
];
