import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2024 - 2025",
    degree: "DUT Génie Informatique",
    specialization: "Spécialité Cybersécurité & Réseaux",
    description: "Formation approfondie en sécurité informatique, réseaux et développement",
    current: true,
  },
  {
    year: "2024",
    degree: "Stage - Evolution Contractors",
    specialization: "Développement & Sécurité",
    description: "Mise en œuvre de solutions de sécurité et développement d'applications",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="terminal-text text-sm font-mono mb-2">
            &gt; education.timeline()
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Formation académique en informatique et cybersécurité
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block" />

                  <div className="glass-card p-6 rounded-2xl hover:shadow-premium transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-sm text-primary font-medium">
                              {edu.specialization}
                            </p>
                          </div>
                          {edu.current && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                              En cours
                            </span>
                          )}
                        </div>

                        <p className="text-sm terminal-text mb-2">{edu.year}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
