import React from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { MessageSquare } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-between py-16 px-6 text-center overflow-hidden"
    >
      {/* Background Logo (Giant, Semi-transparent) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="opacity-[0.05] w-[150%] md:w-[120%] h-full flex items-center justify-center">
          <img 
            src="https://i.postimg.cc/gcTnbYjV/Captura-de-tela-2026-07-01-210658.png" 
            alt="VORSK Background"
            className="w-full h-full object-contain filter grayscale blur-[1px] scale-150 md:scale-125"
          />
        </div>
        {/* Radial Vignette Mask */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,#050505_100%] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
      </div>

      {/* Decorative Top Line/Grid Header for High-End Vibe */}
      <div className="relative z-10 w-full max-w-6xl flex justify-between items-center px-4 border-b border-neutral-900/40 pb-6 mb-4">
        <span className="font-mono text-[10px] text-neutral-500 tracking-[0.25em] uppercase">
          CHAPTER.01 / AUTUMN WINTER
        </span>
        <div className="w-2 h-2 rounded-full bg-neutral-800 animate-pulse" />
        <span className="font-mono text-[10px] text-neutral-500 tracking-[0.25em] uppercase">
          EDITION.2026
        </span>
      </div>

      {/* Hero Body Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto flex-grow flex flex-col justify-center items-center py-8"
      >
        {/* Large Centralized Logo */}
        <Logo className="mb-10 scale-[1.05]" iconSize={100} textSize="text-3xl md:text-4xl" />

        {/* Shine Metallic Title effect */}
        <motion.h2
          variants={itemVariants}
          className="font-bebas text-4xl sm:text-5xl md:text-7xl text-neutral-100 tracking-[0.1em] uppercase leading-[0.95] max-w-2xl relative group overflow-hidden mt-2"
        >
          <span className="inline-block relative">
            O primeiro capítulo
            <br />
            <span className="bg-gradient-to-r from-zinc-500 via-neutral-100 to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-colors duration-1000">
              começa aqui.
            </span>
          </span>
          {/* Subtle Metallic Highlight Shine effect passing across the header */}
          <span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full animate-[shimmer_4s_infinite_ease-in-out_2s]" />
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-montserrat text-sm sm:text-base md:text-lg text-neutral-400 mt-6 tracking-[0.15em] font-light max-w-lg leading-relaxed uppercase pl-[0.15em]"
        >
          Vista presença, não apenas roupas.
        </motion.p>

        {/* Premium Primary WhatsApp CTA Button */}
        <motion.div variants={buttonVariants} className="mt-12 w-full max-w-xs px-4">
          <a
            href="https://wa.me/558188319304"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-3 py-4.5 px-8 w-full rounded-xl bg-[#ffffff] text-[#050505] font-montserrat font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_45px_-8px_rgba(255,255,255,0.35)] hover:-translate-y-1 hover:bg-[#ebebeb] active:translate-y-0 group pl-[0.2em]"
          >
            {/* Shimmer line pass on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            <MessageSquare className="w-4.5 h-4.5 fill-[#050505] stroke-[#050505] stroke-[1.5]" />
            Comprar pelo WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator element */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer select-none"
        onClick={() => {
          document.getElementById("identity-section")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-mono text-[9px] text-neutral-500 tracking-[0.3em] uppercase pl-[0.3em]">
          ROLO PARA ENTRAR
        </span>
        <div className="w-[1px] h-8 bg-neutral-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-down_1.5s_infinite_ease-in-out]" />
        </div>
      </motion.div>
    </section>
  );
}
