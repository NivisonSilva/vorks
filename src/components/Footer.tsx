import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="vorsk-footer"
      className="relative bg-[#050505] border-t border-neutral-900/60 py-16 px-6 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Small version of logo */}
        <Logo iconSize={45} className="opacity-80 hover:opacity-100 transition-opacity duration-300" />

        {/* Brand signature */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <p className="font-bebas text-xl md:text-2xl text-neutral-300 tracking-widest uppercase">
            VORSK<span className="font-sans text-xs align-super ml-0.5">®</span>
          </p>
          <p className="font-montserrat text-[11px] md:text-xs text-neutral-500 font-light tracking-[0.25em] uppercase pl-[0.25em]">
            Performance que impressiona.
          </p>
        </div>

        {/* Divider line */}
        <div className="w-16 h-[1px] bg-neutral-900" />

        {/* Copyright notice */}
        <p className="font-mono text-[9px] text-neutral-600 tracking-[0.15em] uppercase pl-[0.15em]">
          &copy; 2026 VORSK. Todos os direitos reservados. Desenvolvido por NivyTech
        </p>
      </div>

      {/* Decorative tiny tech stamps */}
      <div className="absolute bottom-4 left-6 text-[8px] font-mono text-neutral-700 uppercase tracking-widest hidden sm:block">
        VORSK // LABS
      </div>
      <div className="absolute bottom-4 right-6 text-[8px] font-mono text-neutral-700 uppercase tracking-widest hidden sm:block">
        MADE IN BRAZIL
      </div>
    </footer>
  );
}
