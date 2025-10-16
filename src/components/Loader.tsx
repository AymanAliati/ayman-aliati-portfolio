import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showComplete, setShowComplete] = useState(false);

  const terminalLines = [
    "ayman@portfolio:~$ sudo systemctl start cybersecurity.service",
    "[sudo] password for ayman: ************",
    "",
    "> Initialisation des modules...",
  
    
    "> Connexion établie [SECURE]",
    "",
    "████████████████████████ 100%",
    
  ];

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (currentLineIndex < terminalLines.length) {
        const currentLine = terminalLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          // Ajouter le caractère suivant
          setLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Ligne terminée, passer à la suivante
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        // Toutes les lignes sont terminées
        clearInterval(typewriterInterval);
        setTimeout(() => {
          onComplete(); // Transition directe vers le portfolio
        }, 500);
      }
    }, 50); // Vitesse de frappe : 50ms par caractère

    return () => clearInterval(typewriterInterval);
  }, [currentLineIndex, currentCharIndex, terminalLines, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl px-6">
        <div className="space-y-2 font-mono text-sm">
          {lines.map((line, index) => (
            <div
              key={index}
              className="terminal-text animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
              {index === currentLineIndex && currentCharIndex < terminalLines[currentLineIndex]?.length && (
                <span className="animate-pulse">█</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;