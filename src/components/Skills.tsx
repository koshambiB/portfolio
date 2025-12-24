import { Code2, Database, Wrench, Brain, Shield, Users } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        skills: [
            "JavaScript/TypeScript",
            "Python",
            "Java",
            "Kotlin",
            "C/C++",
            "SQL",
        ],
    },
    {
        title: "Frameworks & Libraries",
        icon: Wrench,
        skills: [
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "JUnit",
        ],
    },
    {
        title: "Databases & Tools",
        icon: Database,
        skills: [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Git",
            "Docker",
        ],
    },
    {
        title: "AI & Machine Learning",
        icon: Brain,
        skills: [
            "Large Language Models (LLMs)",
            "Machine Learning",
            "Prompt Engineering",
            "AI Integration",
        ],
    },
    {
        title: "Currently Learning",
        icon: Shield,
        skills: [
            "Information Security",
            "Advanced ML Techniques",
            "Secure Coding Practices",
        ],
    },
    {
        title: "Soft Skils",
        icon: Users,
        skills: [
            "Effective Communication",
            "Team Collaboration",
            "Problem-Solving",
            "Adaptability",
            "Time Management",
        ]
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background-dark">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Skills & Technologies
                        </span>
                        <span className="w-12 h-px bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium">
                        My toolkit
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.title}
                                className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <IconComponent className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium">{category.title}</h3>
                                </div>

                                {/* Skills list */}
                                <div className="flex flex-col gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-2 bg-background-dark text-muted-foreground text-sm rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional note */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <p className="text-muted-foreground text-lg">
                        Always exploring new technologies and methodologies to build better software.
                        Currently expanding my knowledge in Information Security and Machine Learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;