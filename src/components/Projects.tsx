import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Celeris",
        description:
            "An offline mobile payment application developed using Kotlin, Python, Java, and Supabase. This app enables secure peer-to-peer transactions even in low or no network areas by leveraging SMS broadcast services. It integrates a lightweight SQLite database and RESTful APIs for seamless sync once connectivity is restored.",
        tags: ["Kotlin", "Python", "Java", "Supabase", "SQLite", "REST API"],
        github: "https://github.com/celeris-schnell",
        link: null,
    },
    {
        title: "FirstCheque",
        description:
            "A freelancing platform that I am developing in collaboration with my peers features an innovative AI-driven recommendation system. This system is designed to analyze user profiles, preferences, and project requirements, enabling it to suggest the most suitable freelancers for clients and vice versa.",
        tags: ["AI/ML", "Next.js", "React", "Full-Stack"],
        github: "https://github.com/team-schnell/firstcheque",
        link: null,
    },
    {
        title: "More Projects Coming Soon",
        description:
            "Currently working on several exciting projects involving machine learning, information security, and full-stack development. Stay tuned for updates on innovative solutions that blend cutting-edge technology with practical applications.",
        tags: ["Machine Learning", "Security", "Full-Stack", "Innovation"],
        github: null,
        link: null,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Featured Projects
                        </span>
                        <span className="w-12 h-px bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium">
                        Building <span className="text-primary italic">innovative</span> solutions
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-background-dark text-white border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all group flex flex-col"
                        >
                            {/* Project Title */}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-background text-muted text-xs rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/koshambiB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground font-medium rounded-full hover:bg-primary/10 transition-colors"
                    >
                        View All Projects on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;