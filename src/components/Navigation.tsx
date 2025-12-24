"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0C1519]/90 backdrop-blur-md border-b border-[#CF9D7B]"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand - Optional */}
                        <div className="md:hidden">
                            <span className="text-xl font-semibold text-[#CF9D7B]">KB</span>
                        </div>

                        {/* Desktop Navigation */}
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
                            Let&apos;s Connect
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-[#C7C7C7] hover:text-[#CF9D7B] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-[#0C1519]/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-2xl font-medium text-[#C7C7C7] hover:text-[#CF9D7B] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="mt-4 px-8 py-3 text-lg font-medium rounded-full"
                        style={{
                            backgroundColor: '#CF9D7B',
                            color: '#0C1519'
                        }}
                    >
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navigation;