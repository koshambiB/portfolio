"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled || open ? "bg-background/90 backdrop-blur border-b border-border" : "border-b border-transparent"
            }`}
        >
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
                <a href="#top" className="font-mono text-sm tracking-wide text-foreground">
                    koshambi<span className="text-primary">.</span>bardhan
                </a>

                <ul className="hidden md:flex items-center gap-8 text-sm text-secondary">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-link hover:text-primary">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 -mr-2 text-secondary hover:text-primary transition-colors"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {open && (
                <ul className="md:hidden h-[calc(100dvh-4rem)] px-4 pt-6 flex flex-col gap-1 bg-background">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 font-serif text-3xl text-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navigation;
