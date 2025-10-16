import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 18);
    const drops: number[] = Array(columns).fill(1);
    const directions: number[] = Array(columns).fill(1); // 1 = down, -1 = up
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ";
    let time = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(10, 20, 25, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Gradient effect for brighter characters
        const gradient = ctx.createLinearGradient(i * 18, drops[i] * 18, i * 18, drops[i] * 18 + 18);
        gradient.addColorStop(0, "hsl(174, 100%, 70%)");
        gradient.addColorStop(1, "hsl(142, 100%, 50%)");
        
        ctx.fillStyle = Math.random() > 0.95 ? gradient : "hsl(142, 100%, 60%, 0.5)";
        ctx.font = "15px monospace";
        ctx.fillText(text, i * 18, drops[i] * 18);

        // Change direction cyclically
        if (drops[i] * 18 > canvas.height && directions[i] === 1) {
          directions[i] = -1;
        } else if (drops[i] < 0 && directions[i] === -1) {
          directions[i] = 1;
          drops[i] = 0;
        }

        drops[i] += directions[i] * 0.5;
      }
    };

    const interval = setInterval(draw, 40);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30"
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
