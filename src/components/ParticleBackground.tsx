import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class representing elegant, floating metallic dust/particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      angle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5; // very small, elegant points
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * -0.35 - 0.1; // slowly drift upwards
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.angle = Math.random() * Math.PI;
        // Silver-metallic palette
        const colors = ["#ffffff", "#E5E5E5", "#A3A3A3", "#737373"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screens
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;

        // Pulse opacity slightly for elegant twinkle
        this.angle += this.pulseSpeed;
        this.opacity = 0.15 + Math.sin(this.angle) * 0.15;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Shiny metal glow
        context.fillStyle = this.color;
        context.shadowBlur = 4;
        context.shadowColor = "#ffffff";
        context.fill();
        context.restore();
      }
    }

    // Smoke/Mist puffs representing slow metallic dust cloud
    class MistCloud {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;
      angle: number;
      spinSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 150 + 100; // wide and soft
        this.speedX = Math.random() * 0.05 - 0.025;
        this.speedY = Math.random() * -0.05 - 0.02;
        this.opacity = Math.random() * 0.04 + 0.01; // extremely faint
        this.angle = Math.random() * Math.PI;
        this.spinSpeed = Math.random() * 0.002 - 0.001;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spinSpeed;

        if (this.y < -this.radius) {
          this.y = height + this.radius;
          this.x = Math.random() * width;
        }
        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.opacity;

        // Create elegant radial glow for smoke
        const gradient = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, "rgba(163, 163, 163, 0.15)");
        gradient.addColorStop(0.5, "rgba(82, 82, 82, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
        context.restore();
      }
    }

    const particles: Particle[] = [];
    const clouds: MistCloud[] = [];

    // Density based on screen size
    const particleCount = Math.min(60, Math.floor((width * height) / 18000));
    const cloudCount = Math.min(6, Math.floor((width * height) / 120000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < cloudCount; i++) {
      clouds.push(new MistCloud());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark elegant background gradient to match styling
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#050505");
      bgGrad.addColorStop(0.5, "#0b0b0b");
      bgGrad.addColorStop(1, "#050505");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw clouds (smoke)
      clouds.forEach((cloud) => {
        cloud.update();
        cloud.draw(ctx);
      });

      // Draw particles (dust)
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
