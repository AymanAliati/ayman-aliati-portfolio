import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const terminalLogs = [
    "> Scanning network...",
    "> Connection established",
    "> Email: aliatiaymane@gmail.com",
    "> LinkedIn: Active",
    "> GitHub: Active",
    "> Status: Available for contact",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalLogs.length) {
        setLogs((prev) => [...prev, terminalLogs[index]]);
        index++;
      } else {
        // Reset and restart
        setTimeout(() => {
          setLogs([]);
          index = 0;
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="py-24 relative border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="terminal-text text-sm font-mono mb-2">
            &gt; contact.init()
          </div>
          <h2 >
            <span className="text-4xl lg:text-5xl font-bold mb-4">Contact</span>
          </h2>
        </div>

        {/* Terminal Style Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/40 shadow-glow animate-slide-up">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-background/80 border-b border-primary/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                &gt;_ contact-terminal
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-6">
              {/* Contact Info Display */}
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">aliatiaymane@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+212 612634799 </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Morocco</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a href="https://github.com/AymanAliati" className="text-foreground hover:text-primary transition-colors">
                    AymanAliati
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="https://linkedin.com/in/ayman-aliati" className="text-foreground hover:text-primary transition-colors">
                    Ayman Aliati
                  </a>
                </div>
              </div>

              <div className="border-t border-primary/20 my-6" />

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="terminal-text text-sm font-mono mb-2 block">
                    $ enter_name --required
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/40 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="terminal-text text-sm font-mono mb-2 block">
                    $ enter_email --required
                  </label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/40 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="terminal-text text-sm font-mono mb-2 block">
                    $ compose_message --encrypt
                  </label>
                  <Textarea
                    placeholder="Votre message sera encodé en temps réel..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/40 focus:border-primary text-foreground placeholder:text-muted-foreground min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-bold"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  ./send_message.sh
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Ayman Aliati. Tous droits réservés.</p>
          <p className="terminal-text mt-2">&gt; Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
