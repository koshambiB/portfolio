

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-dark/30" />

            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <div
                        className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Computer Science Engineer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6">
                        <span
                            className="block opacity-0 animate-fade-up"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Hello, I&apos;m
                        </span>
                        <span
                            className="block text-gradient-brass opacity-0 animate-fade-up"
                            style={{ animationDelay: "0.6s" }}
                        >
                            Koshambi Bardhan
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
                        style={{ animationDelay: "0.8s" }}
                    >
                        a 3rd Year B.Tech Computer Science student at{" "}
                        <span className="text-foreground">VIT Chennai</span>. Currently an
                        intern at <span className="text-primary">Samsung PRISM</span> and
                        upcoming summer intern at{" "}
                        <span className="text-primary">Flipkart</span>.
                    </p>

                    <div
                        className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-up"
                        style={{ animationDelay: "1s" }}
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm text-muted-foreground">
                                Open to opportunities
                            </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                            <span className="text-sm text-muted-foreground">📍 Chennai, India</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
                        style={{ animationDelay: "1.2s" }}
                    >

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground font-medium rounded-full hover:bg-primary/10 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Hero;