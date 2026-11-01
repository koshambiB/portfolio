import Section from "@/components/Section";
import { experience, leadership, education, type Role } from "@/data/content";

const RoleList = ({ roles }: { roles: Role[] }) => (
    <ol className="divide-y divide-border border-y border-border">
        {roles.map((r) => (
            <li key={r.company} className="grid gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                <p className="font-mono text-xs text-muted pt-1.5">{r.period}</p>
                <div>
                    <h3 className="text-lg font-medium text-foreground">
                        {r.role} <span className="text-muted font-normal">·</span>{" "}
                        <span className="text-primary">{r.company}</span>
                    </h3>
                    <ul className="mt-3 space-y-2 text-secondary leading-relaxed">
                        {r.points.map((p) => (
                            <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-primary/60">
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        ))}
    </ol>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-2">{children}</h3>
);

const Experience = () => {
    return (
        <Section id="experience" label="Experience">
            <div className="space-y-16">
                <div>
                    <SubHeading>Internships</SubHeading>
                    <RoleList roles={experience} />
                </div>

                <div>
                    <SubHeading>Leadership</SubHeading>
                    <RoleList roles={leadership} />
                </div>

                <div>
                    <SubHeading>Education</SubHeading>
                    <ol className="divide-y divide-border border-y border-border">
                        {education.map((e) => (
                            <li key={e.school} className="grid gap-2 py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
                                <p className="font-mono text-xs text-muted pt-1.5">{e.period}</p>
                                <div>
                                    <h3 className="text-lg font-medium text-foreground">
                                        {e.school}
                                        {e.detail && (
                                            <span className="ml-3 font-mono text-xs font-normal text-primary align-middle">
                                                {e.detail}
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-secondary mt-1">{e.degree}</p>
                                    {e.note && <p className="text-muted text-sm mt-3 leading-relaxed">{e.note}</p>}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
