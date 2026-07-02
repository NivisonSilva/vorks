import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Instagram, ExternalLink } from "lucide-react";

export default function NextChapterSection() {
  return (
    <section
      id="next-chapter-section"
      className="relative py-32 px-6 bg-[#050505] overflow-hidden text-center flex flex-col items-center justify-center border-t border-neutral-950"
    >
      {/* Decorative vertical guide rails */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-neutral-900/10 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-neutral-900/10 pointer-events-none hidden md:block" />

      {/* Decorative metal gradient background circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-[#151515] opacity-20 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Subtle decorative stamp */}
        <div className="border border-neutral-800 rounded-full px-4 py-1.5 mb-8 flex items-center gap-2 bg-[#0c0c0c]/60">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] text-neutral-400 tracking-[0.2em] uppercase">
            SISTEMA DE ATENDIMENTO ATIVO
          </span>
        </div>

        {/* Shimmer title */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none mb-6 uppercase">
          Seu próximo capítulo
          <br />
          <span className="bg-gradient-to-r from-zinc-500 via-neutral-100 to-zinc-400 bg-clip-text text-transparent">
            começa agora.
          </span>
        </h2>

        {/* Statement quote */}
        <p className="font-montserrat text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-lg leading-relaxed italic border-t border-b border-neutral-900 py-6 my-4">
          &ldquo;Escolha vestir algo que fale antes mesmo de você dizer uma palavra.&rdquo;
        </p>

        {/* Quick info text */}
        <p className="font-montserrat text-xs text-neutral-500 max-w-md tracking-wider leading-relaxed uppercase mt-2 mb-10 pl-[0.1em]">
          Dúvidas sobre tamanhos ou tecidos? Fale diretamente com um consultor especializado no nosso canal exclusivo de atendimento.
        </p>

        {/* Buttons side-by-side or stacked on mobile */}
        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center px-4">
          {/* WhatsApp Primary button */}
          <motion.a
            href="https://wa.me/558188319304"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 py-4 px-6 w-full sm:w-auto sm:min-w-[220px] rounded-xl bg-white text-neutral-950 font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)] group hover:bg-[#eaeaea]"
          >
            <MessageSquare className="w-4 h-4 fill-neutral-950 stroke-neutral-950" />
            <span>Fazer pedido WhatsApp</span>
          </motion.a>

          {/* Instagram Secondary button */}
          <motion.a
            href="https://www.instagram.com/usevorsk?igsh=MWZvMWNydHFlcWV5MA=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 py-4 px-6 w-full sm:w-auto sm:min-w-[180px] rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 font-montserrat font-semibold text-xs uppercase tracking-wider transition-all duration-300 group"
          >
            <Instagram className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            <span>Instagram</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
