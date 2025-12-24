import { ArrowUpRight, Building2 } from "lucide-react";

const experiences = [
    {
        company: "Flipkart",
        role: "Summer Intern",
        period: "Upcoming 2025",
        status: "upcoming",
        description:
            "Joining as a Summer Intern to work on large-scale e-commerce systems and gain experience in building products that serve millions of users.",
        tags: ["E-commerce", "Software Engineering", "Scale"],
    },
    {
        company: "Samsung PRISM",
        role: "Research Intern",
        period: "Current",
        status: "current",
        description:
            "Working on cutting-edge research projects, exploring innovative technologies and contributing to Samsung&apos;s research initiatives.",
        tags: ["Research", "Innovation", "Technology"],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Experience
                        </span>
                        <span className="w-12 h-px bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium">
                        Where I&apos;ve <span className="text-primary italic">worked</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                        {experiences.map((exp, index) => (
                            <div
                                key={exp.company}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background md:-translate-x-1/2 ${exp.status === "current" ? "ring-4 ring-primary/20" : ""
                                        }`}
                                />

                                {/* Content card */}
                                <div
                                    className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                        }`}
                                >
                                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
                                        {/* Status badge */}
                                        <div
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${exp.status === "current"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-primary/10 text-primary"
                                                }`}
                                        >
                                            {exp.status === "current" && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            )}
                                            {exp.period}
                                        </div>

                                        <div className="flex items-start gap-4 mb-4">
                                            <div
                                                className={`w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center shrink-0 ${index % 2 === 0 ? "order-last" : ""
                                                    }`}
                                            >
                                                <Building2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className={`flex-1 ${index % 2 === 0 ? "text-right" : ""}`}>
                                                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                                                    {exp.company}
                                                </h3>
                                                <p className="text-muted-foreground">{exp.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        <div
                                            className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education section */}
                <div className="max-w-2xl mx-auto mt-16">
                    <div className="text-center mb-8">
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Education
                        </span>
                    </div>

                    <div className="space-y-4">
                        {/* University Education */}
                        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-medium">
                                B.Tech in Computer Science & Engineering
                            </h3>
                            <p className="text-muted-foreground mt-2">
                                VIT Chennai • 2022 - 2026 (Expected)
                            </p>
                        </div>

                        {/* School Education */}
                        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-medium">
                                Secondary Education
                            </h3>
                            <p className="text-muted-foreground mt-2">
                                St. Agnes Convent School, Kolkata, West Bengal • 2009 - 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;