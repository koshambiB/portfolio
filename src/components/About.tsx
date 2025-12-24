const About = () => {
    return (
        <section id="about" className="py-24 bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left - Image/Visual */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-muted/20 rounded-lg overflow-hidden relative border border-primary/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src="/pic1.jpeg"
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-lg"
                                />

                            </div>
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-lg -z-10" />
                    </div>

                    {/* Right - Content */}
                    <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="text-3xl font-medium tracking-widest text-primary uppercase">
                                About Me
                            </span>
                            <span className="w-12 h-px bg-primary" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                            Passionate about building{" "}
                            <span className="text-primary italic">impactful</span> solutions
                        </h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                I am a third-year B.Tech Computer Science and Engineering student at VIT Chennai with a primary focus on full-stack development.
                                My work centers on building reliable, well-structured applications with an emphasis on clarity, scalability, and maintainability.
                            </p>
                            <p>
                                Alongside full-stack development, I am gradually expanding into artificial intelligence and machine learning through projects,
                                using them as tools to enhance existing solutions. In parallel, I am exploring information security concepts by implementing
                                security-focused features and testing real-world attack and defense scenarios in controlled environments.
                            </p>
                            <p>
                                I approach software engineering with a strong preference for clean code, thoughtful architecture, and continuous improvement.
                                I value learning through building, refining systems over time, and understanding the trade-offs behind technical decisions.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-primary/20">
                            <div>
                                <div className="text-3xl text-primary font-semibold">2+</div>
                                <div className="text-lg text-muted-foreground mt-1">Years Learning</div>
                            </div>
                            <div>
                                <div className="text-3xl text-primary font-semibold">2</div>
                                <div className="text-lg text-muted-foreground mt-1">Internships</div>
                            </div>
                            <div>
                                <div className="text-3xl text-primary font-semibold">5+</div>
                                <div className="text-lg text-muted-foreground mt-1">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;