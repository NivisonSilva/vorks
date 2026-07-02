import React from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
  textSize?: string;
  animate?: boolean;
}

export default function Logo({
  className = "",
  showText = true,
  iconSize = 80,
  textSize = "text-2xl md:text-3xl",
  animate = true,
}: LogoProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const wingVariantsLeft = {
    hidden: { opacity: 0, x: -15, y: -5 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const wingVariantsRight = {
    hidden: { opacity: 0, x: 15, y: -5 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, letterSpacing: "0.1em" },
    visible: {
      opacity: 1,
      letterSpacing: "0.45em",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      id="vorsk-logo-container"
      variants={containerVariants}
      initial="hidden"
      animate={animate ? "visible" : "visible"}
      className={`flex flex-col items-center justify-center select-none ${className}`}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="silver-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F7F7F" />
            <stop offset="25%" stopColor="#E5E5E5" />
            <stop offset="50%" stopColor="#A3A3A3" />
            <stop offset="75%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#525252" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative group">
        <svg
          id="vorsk-logo-svg"
          width={iconSize}
          height={iconSize * 0.85}
          viewBox="0 0 100 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:scale-105"
        >
          <motion.path
            id="vorsk-logo-left-wing"
            variants={wingVariantsLeft}
            d="M 48,70 L 16,35 L 32,35 L 44,51 L 38,20 L 48,20 Z"
            fill="url(#silver-metallic)"
            className="drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
          />
          <motion.path
            id="vorsk-logo-right-wing"
            variants={wingVariantsRight}
            d="M 52,70 L 84,35 L 68,35 L 56,51 L 62,20 L 52,20 Z"
            fill="url(#silver-metallic)"
            className="drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>

      {showText && (
        <motion.h1
          id="vorsk-logo-text"
          variants={textVariants}
          className={`font-montserrat font-black tracking-[0.45em] text-white mt-4 uppercase pl-[0.45em] relative ${textSize}`}
        >
          <span className="relative z-10 bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            VORSK
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm -translate-x-full animate-[shimmer_3s_infinite_ease-in-out]" />
        </motion.h1>
      )}
    </motion.div>
  );
}
