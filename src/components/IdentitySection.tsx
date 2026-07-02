import React from "react";
import { motion } from "motion/react";

export default function IdentitySection() {
  return (
    <section
      id="identity-section"
      className="relative py-28 px-6 bg-[#050505] flex flex-col items-center justify-center overflow-hidden border-t border-neutral-950"
    >
      {/* Structural visual rails */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-neutral-900/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-neutral-900/10 pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left side/Centered: Statement Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Section Number tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-neutral-500 tracking-widest">CHAPTER 02</span>
            <div className="h-[1px] w-8 bg-neutral-800" />
            <span className="font-mono text-xs text-neutral-400">IDENTITY</span>
          </div>

          {/* Title with elegant metallic shine highlight */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none mb-8 uppercase relative group overflow-hidden">
            Mais que roupa.
            <br />
            <span className="bg-gradient-to-r from-zinc-500 via-neutral-200 to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-colors duration-700">
              Identidade.
            </span>
          </h2>

          {/* Large Quote / Paragraph with Montserrat font */}
          <blockquote className="border-l border-neutral-700 pl-6 my-6 italic">
            <p className="font-montserrat text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed tracking-wide">
              &ldquo;Cada peça da VORSK foi criada para quem não passa despercebido. Porque presença não se veste por acaso.&rdquo;
            </p>
          </blockquote>

          <p className="font-montserrat text-sm text-neutral-500 font-light tracking-wide max-w-lg leading-relaxed mt-4">
            Nossa missão é transcender o básico. Desenhamos modelagens que valorizam a postura e
            incorporam o espírito urbano de performance com um acabamento técnico rigoroso.
          </p>
        </motion.div>

        {/* Right side: High-End Closeup Product Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex justify-center"
        >
          {/* Framed Detail Graphic */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 p-2 bg-[#121212]/30 group shadow-2xl">
            {/* Overlay Grid lines for tech styling */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-700" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neutral-700" />

            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/vorsk_tshirts_capsule_1782948934734.jpg"
                alt="Technical Streetwear Details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

              {/* Dynamic tag inside image */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="font-mono text-[9px] text-neutral-400 tracking-[0.2em] uppercase">
                    FABRIC.CORE
                  </p>
                  <p className="font-bebas text-lg text-white tracking-widest mt-0.5">
                    SUPREME FABRIC
                  </p>
                </div>
                <div className="font-mono text-[9px] text-neutral-500 border border-neutral-800 px-2 py-1 rounded bg-[#0a0a0a]/80">
                  PT: 81-8831
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
