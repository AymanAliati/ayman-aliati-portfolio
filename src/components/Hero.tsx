import { Github, Download, Terminal, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ayman-hero.png";
import cvPdf from "@/assets/pdf/CV_Ayman_Aliati .pdf";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity" 
                 style={{ filter: 'blur(100px)' }} />
            <div className="relative">
              <img
                src={heroImage}
                alt="Ayman Aliati - Étudiant en Cybersécurité"
                className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-3xl relative z-10"
                style={{ filter: 'drop-shadow(0 0 60px rgba(0, 255, 200, 0.5))' }}
              />
            </div>
            <div className="absolute -top-8 -left-8 bg-primary text-background px-4 py-2 rounded-full text-sm font-medium shadow-premium animate-fade-in z-20">
              Cybersecurity Student
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left animate-slide-up space-y-6">
            <div className="space-y-2">
              <div className="terminal-text text-sm font-mono mb-2">
                &gt; Étudiant IT & Cybersécurité
              </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Ayman <span className="text-gradient">Aliati</span>
            </h1>
            </div>

            <p className="text-lg text-foreground/80 max-w-xl">
              Passionné par la <span className="text-primary font-semibold">cybersécurité</span> et les <span className="text-primary font-semibold">réseaux</span>. En quête d'excellence technique et d'innovation dans le domaine de la sécurité informatique.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-semibold transition-all shadow-premium hover:shadow-glow"
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
                className="border-2 border-primary text-primary hover:bg-primary/10"
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
                className="border-2 border-primary text-primary hover:bg-primary/10"
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

            <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-background/50 text-foreground border border-primary/40">
                Python
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-background/50 text-foreground border border-primary/40">
                Linux
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-background/50 text-foreground border border-primary/40">
                React
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-background/50 text-foreground border border-primary/40">
                Cybersecurity
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-background/50 text-foreground border border-primary/40">
                Networking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
