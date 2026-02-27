import About from "@/components/sections/About";
import Landing from "@/components/sections/Landing";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] snap-y snap-mandatory overflow-y-auto overscroll-y-contain">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
