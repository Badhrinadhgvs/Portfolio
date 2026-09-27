import { useSectionReveal } from "./hooks/useReveal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useSectionReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
