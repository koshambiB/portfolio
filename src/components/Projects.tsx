import { ArrowUpRight, Github } from "lucide-react";
import Section from "@/components/Section";
import { projects, links } from "@/data/content";

const Projects = () => {
    return (
        <Section id="projects" label="Projects">
            <ol className="space-y-6">
                {projects.map((p, i) => (
                    <li
                        key={p.title}
                        className="group rounded-sm border border-border bg-surface/60 p-6 md:p-8 transition-colors hover:border-primary/40"
                    >
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted mb-4">
                            <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                            <span>{p.period}</span>
                            {p.inProgress && <span>· in progress</span>}
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl leading-tight text-foreground">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm text-secondary">{p.subtitle}</p>

                                <div className="mt-5 flex gap-4 font-mono text-sm">
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span className="text-link">Code</span>
                                        </a>
                                    )}
                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                                        >
                                            <span className="text-link">Live</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div>
                                <p className="text-secondary leading-relaxed">{p.description}</p>
                                <ul className="mt-4 space-y-1.5 text-sm text-muted leading-relaxed">
                                    {p.highlights.map((h) => (
                                        <li key={h} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-primary/60">
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                                    {p.tags.map((t) => (
                                        <li key={t} className="rounded-sm border border-border px-2 py-1 text-secondary">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>

            <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-1 font-mono text-sm text-foreground hover:text-primary transition-colors"
            >
                <span className="text-link">More on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
        </Section>
    );
};

export default Projects;
