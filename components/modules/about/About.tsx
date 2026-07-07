"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full py-32 px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-16">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2D2926]">
          About.
        </h2>
      </div>

      {/* The Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* 1. THE MANIFESTO (Spans 7 columns, heavy typography focus) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-xl"
        >
          <div className="space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <p>
              I specialize in bridging the gap between high-end aesthetic design and rigorous frontend engineering. Every interaction is calculated, and every component is optimized for absolute fluidity.
            </p>
            <p>
              My focus is on creating premium, tactile web experiences. Whether it is engineering complex product carousels to maintain zero layout shift, or building out complete, scalable e-commerce platforms, the goal remains the same: <span className="font-semibold text-zinc-900">build interfaces that feel like physical luxury.</span>
            </p>
          </div>
        </motion.div>

        {/* 2. THE STACK / INGREDIENTS (Spans 5 columns, visual data focus) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-5 flex flex-col p-8 sm:p-10 rounded-3xl bg-[#2D2926] text-[#FAF9F6] shadow-xl overflow-hidden relative"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-8">
            Core Ingredients
          </span>
          
          <ul className="space-y-5">
            {[
              { label: "Architecture", tech: "React" },
              { label: "Kinematics", tech: "Framer Motion" },
              { label: "Styling", tech: "Tailwind CSS" },
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">{item.label}</span>
                <span className="text-sm font-semibold tracking-wide">{item.tech}</span>
              </li>
            ))}
          </ul>
          
          {/* Subtle geometric accent in the corner */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-zinc-800/50" />
        </motion.div>

        {/* 3. THE ETHOS / FOOTER CARD (Spans full 12 columns, short and punchy) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="md:col-span-12 flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl bg-white/20 border border-white/40 backdrop-blur-md"
        >
          <p className="text-xs font-semibold tracking-[0.15em] text-zinc-800 uppercase text-center sm:text-left mb-4 sm:mb-0">
            Performance meets aesthetics.
          </p>
          {/* Re-using the premium interlocking button style for continuity */}
          <a href="#contact" className="px-6 py-2.5 rounded-xl bg-zinc-900 text-[#FAF9F6] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-colors">
            Start a Dialogue
          </a>
        </motion.div>

      </div>
    </section>
  );
}