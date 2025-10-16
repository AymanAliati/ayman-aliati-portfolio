import { useEffect, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const TopBar = ({ onTerminalOpen }: { onTerminalOpen: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const commands = [
    "ayman@portfolio:~$",
    "git clone github.com/AymanAliati",
    "> cd Portfolio-Cyberpunk",
    "> npm install",
    "> npm run dev",
    "> dev...",
    "> Serveur de développement démarré...",
    "> Portfolio chargé avec succès! 🚀",
  ];

  useEffect(() => {
    if (charIndex < commands[commandIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(commands[commandIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCommandIndex((commandIndex + 1) % commands.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, commandIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-primary/40 shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary glow-text">AYMAN ALIATI - Portfolio</span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
            </nav>
            
            <button
              onClick={onTerminalOpen}
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-background font-medium text-sm transition-all shadow-premium hover:shadow-glow flex items-center gap-2"
            >
              <TerminalIcon className="h-4 w-4" />
              → Terminal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
