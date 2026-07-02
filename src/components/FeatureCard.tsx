import React from "react";
import { motion } from "motion/react";

interface FeatureCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      id={`feature-card-${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        borderColor: "rgba(255, 255, 255, 0.45)",
        boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.08)",
      }}
      className="relative flex flex-col items-center justify-between p-8 bg-[#121212]/90 border border-neutral-800/80 rounded-xl overflow-hidden group transition-all duration-500 min-h-[220px]"
    >
      {/* Dynamic Metallic Border Shine on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Decorative top dot */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-neutral-200 transition-colors duration-500" />

      <div className="flex flex-col items-center text-center mt-2">
        {/* Animated Icon Container */}
        <div className="text-3xl mb-4 p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/40 group-hover:border-neutral-700/60 group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
          <span className="filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)] group-hover:filter group-hover:drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] transition-all duration-500">
            {icon}
          </span>
        </div>

        {/* Title with Metallic Shine pass-through on hover */}
        <h3 className="font-bebas text-2xl md:text-3xl text-neutral-100 tracking-wider group-hover:text-white transition-colors duration-300 relative overflow-hidden">
          <span className="block group-hover:animate-[pulse_1.5s_infinite]">
            {title}
          </span>
        </h3>

        {/* Description text with Poppins/Montserrat clean style */}
        <p className="font-montserrat text-sm text-neutral-400 mt-3 font-light leading-relaxed max-w-[240px] group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle corner elements for brutalist tech look */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-neutral-800 group-hover:border-neutral-500 transition-colors" />
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-neutral-800 group-hover:border-neutral-500 transition-colors" />
    </motion.div>
  );
}
