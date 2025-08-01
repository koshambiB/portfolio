import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-body p-8">
      <Hero />
      {/* You can add other sections below */}
      <Contact/>
      <Project/>
    </main>
  );
}
