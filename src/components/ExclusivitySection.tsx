import React from "react";
import { motion } from "motion/react";
import FeatureCard from "./FeatureCard";

export default function ExclusivitySection() {
  const cards = [
    {
      icon: "⚡",
      title: "Presença",
      description: "Cortes arquitetônicos que moldam a postura e geram impacto visual imediato em qualquer ambiente.",
      delay: 0,
    },
    {
      icon: "🛡️",
      title: "Qualidade",
      description: "Tecidos premium de gramatura robusta e costuras reforçadas feitos para resistir com extrema elegância.",
      delay: 0.15,
    },
    {
      icon: "🔥",
      title: "Exclusividade",
      description: "Lançamentos em lotes estritamente limitados. Garanta sua peça do primeiro capítulo.",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="exclusivity-section"
      className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Visual horizontal separator rails */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-neutral-900/40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">
            PILARES DA MARCA
          </div>

          <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest uppercase">
            A Tríade VORSK
          </h2>
          <div className="w-12 h-[1px] bg-neutral-700 mx-auto mt-4" />
        </div>

        {/* Responsive layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
