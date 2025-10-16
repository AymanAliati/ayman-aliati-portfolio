import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    year: "2024 - 2025",
    degree: "DUT Génie Informatique",
    specialization: "Spécialité Cybersécurité & Réseaux",
    description: "Formation approfondie en sécurité informatique, réseaux et développement",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2024",
    degree: "Stage - Evolution Contractors",
    specialization: "Développement & Sécurité",
    description: "Configurer et câblé des routeurs et commutateurs Cisco.\nRéalisé la documentation technique et les tests de connectivité. Appliqué les bonnes pratiques de sécurité réseau",
    icon: Briefcase,
    current: false,
  },
  {
    year: "2023 - 2024",
    degree: "Baccalauréat",
    specialization: "Sciences Physiques — Mention Bien",
    description: "Lycée Hilali Gueliz, Marrakech, Maroc",
    icon: GraduationCap,
    current: false,
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="terminal-text text-sm font-mono mb-2">
            &gt; education.timeline()
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Formations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mon parcours académique et expériences liées à l’informatique et la cybersécurité
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/40 hidden lg:block" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-primary bg-background flex items-center justify-center z-10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-[45%] ${isLeft ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                    <div className="glass-card p-6 rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-glow">
                      <div className="mb-4">
                        <span className="text-sm terminal-text font-bold">{edu.year}</span>
                        {edu.current && (
                          <span className="ml-3 px-3 py-1 rounded-full text-xs font-medium bg-primary text-background">
                            En cours
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-lg text-primary font-semibold mb-3">
                        {edu.specialization}
                      </p>
                      
                      <p className="text-muted-foreground whitespace-pre-line">
                        {edu.description}
                      </p>

                      {/* Mobile Icon */}
                      <div className="lg:hidden mt-4 flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
