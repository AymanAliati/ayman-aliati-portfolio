import { useState, useEffect, useRef } from "react";
import { X, Minus, Square } from "lucide-react";

const Terminal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "git clone github.com/AymanAliati",
    "cd Portfolio-Cyberpunk",
    "npm install",
    "npm run dev",
    "dev...",
    "Serveur de développement démarré...",
    "Portfolio chargé avec succès! 🚀",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, `ayman@portfolio:~$ > ${input}`];

    // Simple command responses
    const cmd = input.toLowerCase().trim();
    if (cmd === "help") {
      newHistory.push(
        "Commandes disponibles:",
        "  help     - Affiche cette aide",
        "  about    - À propos de moi",
        "  skills   - Mes compétences",
        "  projects - Mes projets",
        "  contact  - Me contacter",
        "  clear    - Effacer le terminal"
      );
    } else if (cmd === "about") {
      newHistory.push(
        "Ayman Aliati - Étudiant en Cybersécurité & Réseaux",
        "DUT Génie Informatique @ EST Safi",
        "Passionné par la sécurité informatique et l'innovation"
      );
    } else if (cmd === "skills") {
      newHistory.push(
        "Compétences techniques:",
        "• Cybersécurité: Tests d'intrusion, gestion des vulnérabilités",
        "• Réseaux: TCP/IP, Cisco, CCNA1",
        "• Dev: Python, Java, PHP, React.js, C",
        "• Systèmes: Linux, Git, VirtualBox"
      );
    } else if (cmd === "projects") {
      newHistory.push(
        "Projets récents:",
        "1. Portfolio Personnel (React.js, Tailwind)",
        "2. SecureXplorer (Python, PHP, MySQL)",
        "3. NOTEAI (PHP, MySQL, JS)",
        "4. Sahara Traveling (HTML, CSS, JS)"
      );
    } else if (cmd === "contact") {
      newHistory.push(
        "Contact:",
        "Email: aliatiaymane@gmail.com",
        "GitHub: github.com/yourusername",
        "LinkedIn: linkedin.com/in/yourusername"
      );
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      newHistory.push(`commande introuvable: ${input}. Tapez 'help' pour l'aide.`);
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl bg-background/95 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-glow">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-background/80 border-b border-primary/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                aria-label="Close"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              terminal
            </span>
          </div>
          <div className="flex gap-2">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Minus className="h-4 w-4" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Square className="h-3 w-3" />
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={historyRef}
          className="p-6 font-mono text-sm h-[500px] overflow-y-auto custom-scrollbar"
          style={{ color: '#00ff00' }}
        >
          {history.map((line, index) => (
            <div 
              key={index} 
              className="mb-1 animate-fade-in"
              style={{ 
                color: line.includes('ayman@portfolio:~$ >') ? '#ffffff' : 
                       line.includes('Commandes disponibles:') || 
                       line.includes('Compétences techniques:') ||
                       line.includes('Projets récents:') ||
                       line.includes('Contact:') ||
                       line.includes('Available commands:') ||
                       line.includes('•') ||
                       line.includes('1.') ||
                       line.includes('2.') ||
                       line.includes('3.') ||
                       line.includes('4.') ||
                       line.includes('Email:') ||
                       line.includes('GitHub:') ||
                       line.includes('LinkedIn:') ||
                       line.includes('commande introuvable:') ? '#ffffff' : '#00ff00'
              }}
            >
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-green-400">ayman@portfolio:~$</span>
            <span className="text-green-400">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white caret-green-400"
              autoFocus
              spellCheck={false}
              style={{ color: '#ffffff' }}
            />
            <span className="animate-blink text-green-400">█</span>
          </form>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00ff00;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00cc00;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Terminal;
