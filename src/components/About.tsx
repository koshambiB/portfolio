import Section from "@/components/Section";

const About = () => {
    return (
        <Section id="about" label="About">
            <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
                <div className="space-y-5 text-lg text-secondary leading-relaxed max-w-2xl">
                    <p className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                        I build the backend, and I care about why it&apos;s being built.
                    </p>
                    <p>
                        I&apos;m a final-year B.Tech Computer Science student at VIT Chennai. My core is
                        backend development: APIs, data pipelines and event-driven services in Python,
                        Java and Node.js. I also work across the stack, with React and Next.js front ends
                        for the apps I&apos;ve built for club events and my own projects.
                    </p>
                    <p>
                        At Flipkart I built a pipeline that processes 500,000+ API records in 20 minutes,
                        at a quarter of the previous cost. At Samsung PRISM I worked on the Python backend
                        of a generative AI tool that turns prompts into presentations.
                    </p>
                    <p>
                        I&apos;m learning AI/ML by building with it: an ML classifier with SHAP
                        explanations in my SOAR project, and experiments with LLMs and context
                        engineering on the generative AI side.
                    </p>
                    <p>
                        Running 250+ university events taught me to work with budgets, vendors and
                        deadlines, not just code. So I&apos;m also open to roles that sit between business
                        and engineering, where the job is turning what the business needs into
                        something that can actually be built.
                    </p>
                </div>

                <figure className="max-w-[280px]">
                    {/* Static export, so next/image can't optimise anyway; a plain <img> is fine. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/pic1.jpeg`}
                        alt="Koshambi Bardhan"
                        className="aspect-[4/5] w-full object-cover rounded-sm grayscale-[30%]"
                    />
                </figure>
            </div>
        </Section>
    );
};

export default About;
