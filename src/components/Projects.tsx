import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const projects = [
  {
    title: "Portfolio Personnel",
    period: "Juin 2025 – Novembre 2025",
    description: "Site portfolio moderne avec animations Matrix et effets premium, construit avec les dernières technologies web.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/AymanAliati/ayman-aliati-portfolio",
    demo: "https://ayman-aliati-portfolio.vercel.app/",
  },
  {
    title: "SecureXplorer (Projet Binôme avec Houssam EL bouamraoui)",
    period: "Juin 2025 – Juillet 2025",
    description: "Outil d'analyse de sécurité pour détecter les vulnérabilités des applications web et auditer la sécurité.",
    tech: ["Python", "PHP", "HTML/CSS", "MySQL"],
    github: "https://github.com/HoussamElBouamraoui/SecureXplorer",
    demo: "#",
  },
  {
    title: "Sahara Traveling",
    period: "Avril 2025 – Juin 2025",
    description: "Plateforme de réservation de voyages avec interface utilisateur intuitive et système de gestion des réservations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AymanAliati/PROJECT_Sahara_Traveling",
    demo: "https://project-sahara-traveling.vercel.app/",
  },
  {
    title: "NOTEAI",
    period: "Janvier 2025 – Mai 2025",
    description: "Application de prise de notes intelligente avec fonctionnalités de recherche avancée et organisation automatique.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JS"],
    github: "https://github.com/AymanAliati/PROJECT-S1-GESTION_TRANSPORT",
    demo: "https://aymanschool.atwebpages.com/",
  },
  {
    title: "Gestion du Transport Scolaire",
    period: "Novembre 2024 – Décembre 2024",
    description: "Système de gestion pour le transport scolaire avec suivi en temps réel et interface d'administration.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "ProMailer | Script d'Envoi d'Email Professionnel",
    period: "Juillet 2025",
    description: "Automatisation de l'Envoi d'Emails Professionnels avec Python. Un Script Complet et Efficace.",
    tech: ["Python"],
    github: "https://github.com/AymanAliati/ProMailer",
    demo: "#",
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNoteaiImageIndex, setCurrentNoteaiImageIndex] = useState(0);
  const [currentPromailerImageIndex, setCurrentPromailerImageIndex] = useState(0);
  const [currentSaharaImageIndex, setCurrentSaharaImageIndex] = useState(0);
  const [currentGestionTransportImageIndex, setCurrentGestionTransportImageIndex] = useState(0);
  const [currentPortfolioImageIndex, setCurrentPortfolioImageIndex] = useState(0);

  const handleLinkClick = (url: string, type: 'github' | 'demo') => {
    if (url === "#") {
      toast.info("🚧 En cours de traitement...", {
        description: "Ce projet est en cours de développement. Revenez bientôt !",
        duration: 3000,
      });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Animation pour SecureXplorer (2 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation pour NOTEAI (5 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoteaiImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation pour ProMailer (3 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromailerImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation pour Sahara Traveling (3 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSaharaImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation pour Gestion de Transport (6 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGestionTransportImageIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation pour Portfolio Personnel (5 images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolioImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="terminal-text text-sm font-mono mb-2">
            &gt; projects.list()
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une sélection de projets démontrant mes compétences en développement web et cybersécurité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              {project.title === "SecureXplorer (Projet Binôme avec Houssam EL bouamraoui)" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={currentImageIndex === 0 ? "/x1.png" : "/x2.png"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : project.title === "NOTEAI" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={[
                      "/1757841510607.jpg",
                      "/1757841509559.jpg", 
                      "/1757841509989.jpg",
                      "/1757841509658.jpg",
                      "/1757841509989-1.jpg"
                    ][currentNoteaiImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : project.title === "ProMailer | Script d'Envoi d'Email Professionnel" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={[
                      "/1751599988555.jpg",
                      "/22.jpg", 
                      "/truct.png"
                    ][currentPromailerImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : project.title === "Sahara Traveling" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={[
                      "/Capture d'écran 2025-06-16 024706.png",
                      "/Capture d'écran 2025-06-16 024043.png", 
                      "/Capture d'écran 2025-06-16 020446.png"
                    ][currentSaharaImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : project.title === "Gestion du Transport Scolaire" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={[
                      "/gestion-transport-1.png",
                      "/gestion-transport-2.jpg",
                      "/gestion-transport-3.jpg",
                      "/gestion-transport-4.jpg",
                      "/gestion-transport-5.jpg",
                      "/gestion-transport-6.jpg"
                    ][currentGestionTransportImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : project.title === "Portfolio Personnel" ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={[
                      "/portfolio-personnel.png",
                      "/formprt.png",
                      "/projecprt.png",
                      "/compport.png",
                      "/image.png"
                    ][currentPortfolioImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl opacity-20">📊</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs terminal-text">{project.period}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-secondary"
                    onClick={() => handleLinkClick(project.github, 'github')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    onClick={() => handleLinkClick(project.demo, 'demo')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
