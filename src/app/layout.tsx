import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Koshambi Bardhan | Backend & Full-Stack Developer",
  description:
    "Koshambi Bardhan: backend and full-stack developer learning AI/ML and generative AI. Final-year CS at VIT Chennai; previously at Flipkart and Samsung PRISM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
