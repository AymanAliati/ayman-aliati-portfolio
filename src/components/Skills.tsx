import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Cybersécurité",
    skills: [
      "Gestion des vulnérabilités",
      "Tests d'intrusion",
      "Gestion d'accès",
      "Git",
      "Linux",
      "VirtualBox",
    ],
  },
  {
    category: "Réseaux",
    skills: ["Cisco", "TCP/IP", "CCNA1", "Sécurité réseau"],
  },
  {
    category: "Modélisation & Conception",
    skills: ["Merise", "UML"],
  },
  {
    category: "Langages",
    skills: [
      "Java POO",
      "Python",
      "PHP",
      "JavaScript",
      "C",
      "HTML/CSS",
      "SQL",
      "Assembleur emu 8086",
    ],
  },
  {
    category: "Web",
    skills: ["React.js", "Tailwind CSS", "Backend sécurisé PHP/MySQL"],
  },
];

const Skills = () => {
  const [terminalLog, setTerminalLog] = useState<string[]>([]);

  useEffect(() => {
    const allSkills = skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => `> skill added: ${skill}`)
    );

    let index = 0;
    const interval = setInterval(() => {
      if (index < allSkills.length) {
        setTerminalLog((prev) => [...prev, allSkills[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="terminal-text text-sm font-mono mb-2">
            &gt; skills.display()
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un ensemble de compétences techniques en constante évolution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="glass-card p-6 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Log */}
          <div className="glass-card p-6 rounded-2xl animate-slide-up lg:sticky lg:top-24 h-fit">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                skills.log
              </span>
            </div>
            <div className="space-y-1 font-mono text-xs terminal-text max-h-96 overflow-y-auto">
              {terminalLog.map((log, index) => (
                <div key={index} className="animate-fade-in">
                  {log}
                </div>
              ))}
              {terminalLog.length > 0 && (
                <div className="animate-blink">_</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
