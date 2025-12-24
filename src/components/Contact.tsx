import { Mail, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";

const Contact = () => {
    const socialLinks = [
        {
            name: "Resume",
            href: "https://drive.google.com/file/d/1qumouWXNxN9IZtL6zlMJrb6_Fvoo_e-y/view?usp=drive_link",
            icon: FileText,
            label: "View My Resume",
        },
        {
            name: "GitHub",
            href: "https://github.com/koshambiB",
            icon: Github,
            label: "github.com/koshambiB",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/koshambi-bardhan-62b83b2ab/",
            icon: Linkedin,
            label: "linkedin.com/in/koshambi-bardhan",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-primary" />
                        <span className="text-sm font-medium tracking-widest text-primary uppercase">
                            Get in Touch
                        </span>
                        <span className="w-12 h-px bg-primary" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-medium mb-6">
                        Let's work <span className="text-primary italic">together</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        I'm always open to discussing new opportunities, interesting projects,
                        or just having a conversation about technology.
                    </p>

                    {/* Contact links */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <link.icon className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {link.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1 truncate">
                                        {link.label}
                                    </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary mx-auto mt-4 transition-colors" />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-card border border-border rounded-2xl p-10">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4">
                            Ready to start a conversation?
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Feel free to reach out. I'd love to hear from you!
                        </p>
                        <a
                            href="mailto:bardhankoshambi2005@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all hover:gap-3 text-lg"
                        >
                            <Mail className="w-5 h-5" />
                            Send me an email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;