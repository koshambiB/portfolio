import { ArrowUpRight } from "lucide-react";
import { links } from "@/data/content";

const heroLinks = [
    { name: "Resume", href: links.resume },
    { name: "GitHub", href: links.github },
    { name: "LinkedIn", href: links.linkedin },
];

const Hero = () => {
    return (
        <section id="top" className="pt-36 pb-24 md:pt-48 md:pb-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 fade-in">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-8">
                    Backend · Full-stack · Generative AI
                </p>

                <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-normal leading-[1.02] tracking-tight mb-10">
                    Koshambi Bardhan
                </h1>

                <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                    <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
                        Backend and full-stack developer in my final year of Computer Science at
                        VIT Chennai, now learning AI/ML and experimenting with generative AI.
                        Previously interned at <span className="text-foreground">Flipkart</span> and{" "}
                        <span className="text-foreground">Samsung PRISM</span>.
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                        {heroLinks.map((l) => (
                            <li key={l.name}>
                                <a
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                                >
                                    <span className="text-link">{l.name}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Hero;
