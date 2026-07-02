import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function InstagramSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Dynamically generate decorative rising bubbles/particles around the Instagram icon
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        // spawn in a circle around the center (0,0) with some offset
        x: (Math.random() - 0.5) * 80,
        y: (Math.random() - 0.5) * 80,
        size: Math.random() * 4 + 2, // elegant tiny bubbles
        duration: Math.random() * 3 + 3, // slow float duration
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    };

    generateParticles();

    // Re-generate every 6 seconds to keep the continuous flow active and dynamic
    const interval = setInterval(generateParticles, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="instagram-section"
      className="relative py-24 px-6 overflow-hidden bg-[#0a0a0a] border-t border-b border-neutral-900/60 flex flex-col items-center justify-center text-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#1c1c1c] opacity-35 blur-[80px] pointer-events-none" />

      {/* Decorative vertical lines for modern grid feel */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-neutral-900/20 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-neutral-900/20 pointer-events-none hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Subtle geometric crown label */}
        <div className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">
          CONECTE-SE AO UNIVERSO
        </div>

        {/* Header Text */}
        <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest leading-none mb-4">
          Acompanhe nosso capítulo nas redes.
        </h2>

        <p className="font-montserrat text-sm md:text-base text-neutral-400 max-w-md font-light leading-relaxed mb-12">
          Estilo de vida, bastidores de criação e lançamentos exclusivos direto no nosso feed.
        </p>

        {/* High-End Instagram Icon and Particle Centerpiece */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
          {/* Pulsing Backlit Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-4 rounded-full bg-neutral-800 border border-neutral-700/30 blur-[15px] pointer-events-none"
          />

          {/* Continuous rotating subtle outline */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 rounded-full border border-dashed border-neutral-700/50 pointer-events-none"
          />

          {/* Drifting metallic bubbles coming out of the background */}
          <AnimatePresence>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  opacity: 0,
                  scale: 0.2,
                  x: p.x,
                  y: p.y,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1.2, 0.4],
                  x: p.x + (Math.random() - 0.5) * 30, // slight sway
                  y: p.y - 65, // float upwards
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-neutral-400/60 shadow-[0_0_8px_rgba(255,255,255,0.4)] pointer-events-none"
                style={{ width: p.size, height: p.size }}
              />
            ))}
          </AnimatePresence>

          {/* Interactive Instagram Icon Button */}
          <motion.a
            href="https://www.instagram.com/usevorsk?igsh=MWZvMWNydHFlcWV5MA=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 w-20 h-20 rounded-full bg-[#111111] border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors duration-300 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 rounded-full bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Instagram className="w-8 h-8 stroke-[1.25] transition-transform duration-500 group-hover:rotate-6" />
          </motion.a>
        </div>

        {/* Premium Action CTA Button */}
        <motion.a
          href="https://www.instagram.com/usevorsk?igsh=MWZvMWNydHFlcWV5MA=="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, letterSpacing: "0.22em" }}
          whileTap={{ scale: 0.98 }}
          className="font-montserrat text-xs font-semibold uppercase text-neutral-300 hover:text-white tracking-[0.18em] py-3.5 px-8 bg-transparent border border-neutral-800/80 hover:border-neutral-400 rounded-full transition-all duration-300 shadow-md backdrop-blur-sm mt-4 pl-[0.2em]"
        >
          @usevorsk
        </motion.a>
      </motion.div>
    </section>
  );
}
