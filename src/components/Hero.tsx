import { Github, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/imageprofile.png";
import cvPdf from "@/assets/pdf/CV_Ayman_Aliati .pdf";

const Hero = () => {
  const skills = ["Python", "Linux", "React", "Cybersecurity", "Networking"];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <div className="pointer-events-none absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity" 
                 style={{ filter: 'blur(100px)' }} />
            <div className="relative rounded-[2rem] border border-primary/30 bg-background/40 p-2 backdrop-blur-sm">
              <img
                src={heroImage}
                alt="Ayman Aliati - Étudiant en Cybersécurité"
                className="relative z-10 h-72 w-72 rounded-3xl object-cover lg:h-96 lg:w-96"
                style={{ filter: 'drop-shadow(0 0 60px rgba(0, 255, 200, 0.5))' }}
              />
            </div>
            <div className="absolute -top-8 -left-8 z-20 rounded-full bg-primary px-4 py-2 text-sm font-medium text-background shadow-premium animate-fade-in">
              Cybersecurity Student
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl space-y-6 text-center animate-slide-up lg:text-left">
            <div className="space-y-3">
              <div className="terminal-text mb-2 text-sm font-mono">
                &gt; Étudiant IT & Cybersécurité
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-6xl">
                Ayman <span className="text-gradient">Aliati</span>
              </h1>
              <p className="mx-auto max-w-xl text-base text-foreground/70 lg:mx-0">
                Future cybersecurity engineer focused on building resilient systems and secure digital experiences.
              </p>
            </div>

            <p className="max-w-xl text-lg text-foreground/80">
              Passionné par la <span className="text-primary font-semibold">cybersécurité</span> et les <span className="text-primary font-semibold">réseaux</span>. En quête d'excellence technique et d'innovation dans le domaine de la sécurité informatique.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-background font-semibold transition-all hover:-translate-y-0.5 hover:bg-primary/90 shadow-premium hover:shadow-glow"
                asChild
              >
                <a
                  href={cvPdf}
                  download="CV_Ayman_Aliati.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/80 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a
                  href="https://github.com/AymanAliati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Voir sur GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/80 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ayman-aliati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4 lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/40 bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
