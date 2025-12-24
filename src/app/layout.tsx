import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
export const metadata: Metadata = {
  title: "Koshambi Bardhan | Software Engineer",
  description:
    "Software engineering portfolio focused on systems, research, and product-driven development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#0C1519] text-neutral-100 antialiased">
        <Navigation />
        <div className="w-full pt-18">
          {children}
        </div>
      </body>
    </html>
  );
}
