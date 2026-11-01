import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import { links } from "@/data/content";

const contactLinks = [
    { name: "Email", href: `mailto:${links.email}`, label: links.email },
    { name: "LinkedIn", href: links.linkedin, label: "in/koshambi-bardhan" },
    { name: "GitHub", href: links.github, label: "koshambiB" },
    { name: "Resume", href: links.resume, label: "PDF" },
];

const Contact = () => {
    return (
        <>
            <Section id="contact" label="Contact">
                <p className="font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
                    Open to backend, full-stack and AI roles, and to roles that connect business and
                    tech.{" "}
                    <a href={`mailto:${links.email}`} className="text-primary text-link">
                        Email me
                    </a>
                    .
                </p>

                <ul className="mt-14 divide-y divide-border border-y border-border">
                    {contactLinks.map((l) => {
                        const external = !l.href.startsWith("mailto:");
                        return (
                            <li key={l.name}>
                                <a
                                    href={l.href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="group grid grid-cols-[100px_1fr_auto] sm:grid-cols-[160px_1fr_auto] items-center gap-4 sm:gap-8 py-5"
                                >
                                    <span className="font-mono text-xs uppercase tracking-wider text-muted">{l.name}</span>
                                    <span className="truncate text-foreground group-hover:text-primary transition-colors">
                                        {l.label}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </Section>

            <footer className="border-t border-border">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-wrap justify-between gap-2 font-mono text-xs text-muted">
                    <span>© {new Date().getFullYear()} Koshambi Bardhan</span>
                    <span>Built with Next.js</span>
                </div>
            </footer>
        </>
    );
};

export default Contact;
