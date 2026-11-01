import type { ReactNode } from "react";

type SectionProps = {
    id: string;
    label: string;
    title?: string;
    children: ReactNode;
    className?: string;
};

/**
 * Two-column section: a sticky label on the left, content on the right.
 * Collapses to a single column on small screens.
 */
const Section = ({ id, label, title, children, className = "" }: SectionProps) => {
    return (
        <section id={id} className={`border-t border-border py-20 md:py-28 ${className}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
                <div>
                    <h2 className="md:sticky md:top-28 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        {label}
                    </h2>
                </div>
                <div className="min-w-0">
                    {title && (
                        <p className="font-serif text-3xl md:text-4xl leading-tight mb-12 max-w-2xl">
                            {title}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
