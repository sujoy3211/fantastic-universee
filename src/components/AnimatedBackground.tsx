import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random(),
      pulse: Math.random() * 0.02 + 0.005,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    // Floating neon orbs
    const orbs = [
      { x: 0.2, y: 0.3, r: 180, color: "0, 160, 255", speed: 0.0003, offset: 0 },
      { x: 0.7, y: 0.6, r: 200, color: "255, 50, 80", speed: 0.0004, offset: 2 },
      { x: 0.5, y: 0.8, r: 160, color: "50, 220, 100", speed: 0.0002, offset: 4 },
      { x: 0.85, y: 0.2, r: 140, color: "255, 200, 50", speed: 0.00035, offset: 1 },
    ];

    // Shooting stars
    const shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; active: boolean }[] = [];

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Draw orbs (soft glow blobs)
      orbs.forEach((orb) => {
        const ox = orb.x * width + Math.sin(time * orb.speed + orb.offset) * 80;
        const oy = orb.y * height + Math.cos(time * orb.speed * 0.7 + orb.offset) * 60;
        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.08)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.03)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(ox - orb.r, oy - orb.r, orb.r * 2, orb.r * 2);
      });

      // Draw stars
      stars.forEach((s) => {
        s.opacity += s.pulse * s.dir;
        if (s.opacity >= 1 || s.opacity <= 0.2) s.dir *= -1;
        s.y -= s.speed;
        if (s.y < -5) {
          s.y = height + 5;
          s.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${s.opacity * 0.8})`;
        ctx.fill();
      });

      // Random shooting stars
      if (Math.random() < 0.005) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 6 + 4,
          opacity: 1,
          active: true,
        });
      }

      shootingStars.forEach((ss) => {
        if (!ss.active) return;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.len, ss.y + ss.len * 0.6);
        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y + ss.len * 0.6);
        grad.addColorStop(0, `rgba(180, 220, 255, ${ss.opacity})`);
        grad.addColorStop(1, `rgba(180, 220, 255, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ss.x += ss.speed;
        ss.y += ss.speed * 0.6;
        ss.opacity -= 0.015;
        if (ss.opacity <= 0) ss.active = false;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
};

export default AnimatedBackground;
