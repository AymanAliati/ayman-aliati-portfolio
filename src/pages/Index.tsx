import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import MatrixBackground from "@/components/MatrixBackground";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import EducationTimeline from "@/components/EducationTimeline";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <TopBar onTerminalOpen={() => setIsTerminalOpen(true)} />
      
      <main className="relative">
        <Hero />
        <EducationTimeline />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </div>
  );
};

export default Index;
