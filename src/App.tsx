import React from "react";
import { motion } from "motion/react";
import ParticleBackground from "./components/ParticleBackground";
import HeroSection from "./components/HeroSection";
import IdentitySection from "./components/IdentitySection";
import ExclusivitySection from "./components/ExclusivitySection";
import InstagramSection from "./components/InstagramSection";
import NextChapterSection from "./components/NextChapterSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="vorsk-landing-root" className="relative min-h-screen bg-[#050505] text-white selection:bg-white/10 selection:text-white">
      {/* Immersive interactive particle background */}
      <ParticleBackground />

      {/* Main page content layout container */}
      <motion.main
        id="vorsk-main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col"
      >
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Brand Statement & Identity */}
        <IdentitySection />

        {/* Section 3: Brand Values Tríade Cards */}
        <ExclusivitySection />

        {/* Section 4: Instagram interactive showcase */}
        <InstagramSection />

        {/* Section 5: Call to Action & WhatsApp purchase setup */}
        <NextChapterSection />

        {/* Section: Big Logo before Footer */}
        <section className="relative py-32 bg-[#050505] flex justify-center items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />
          <img 
            src="https://i.postimg.cc/gcTnbYjV/Captura-de-tela-2026-07-01-210658.png" 
            alt="VORSK Background"
            className="relative z-10 w-full max-w-lg object-contain opacity-20 hover:opacity-40 transition-opacity duration-700 grayscale blur-[1px]"
          />
        </section>

        {/* Section 6: Footer */}
        <Footer />
      </motion.main>
    </div>
  );
}
