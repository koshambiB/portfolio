import Section from "@/components/Section";
import { skills, certifications } from "@/data/content";

const Skills = () => {
    return (
        <Section id="skills" label="Skills">
            <dl className="divide-y divide-border border-y border-border">
                {skills.map((s) => (
                    <div key={s.group} className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:gap-8">
                        <dt className="font-mono text-xs uppercase tracking-wider text-muted pt-1">{s.group}</dt>
                        <dd className="text-secondary leading-relaxed">{s.items.join(" · ")}</dd>
                    </div>
                ))}
            </dl>

            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mt-16 mb-4">
                Certifications
            </h3>
            <ul className="space-y-2 text-secondary">
                {certifications.map((c) => (
                    <li key={c.name}>
                        <span className="text-foreground">{c.issuer}</span> — {c.name}
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Skills;
