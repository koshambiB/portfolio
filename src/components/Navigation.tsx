"use client";
import { useState, useEffect } from "react";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#0C1519]/90 backdrop-blur-md border-b border-[#CF9D7B]"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: '#C7C7C7',
                                }}
                                className="relative group text-lg font-medium transition-colors duration-300 hover:!text-[#CF9D7B]"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#CF9D7B';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#C7C7C7';
                                }}
                            >
                                {link.name}
                                <span className="pointer-events-none absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[#CF9D7B] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex px-5 py-2 text-lg font-medium rounded-full transition-opacity hover:opacity-90"
                        style={{
                            backgroundColor: '#CF9D7B',
                            color: '#0C1519'
                        }}
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;