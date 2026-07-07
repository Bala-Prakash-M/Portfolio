"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroHeadline from "./HeroHeadline";
import HeroHeader from "./HeroHeader";
import HeroAside from "./HeroAside";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#FAF9F6] text-zinc-800 flex flex-col justify-between p-6 md:p-8 select-none">

      {/* 1. GLOBAL NAVIGATION HEADER LAYER */}
      <HeroHeader />

      {/* 2. CENTER STAGE: SYSTEM TYPOGRAPHY & CALL TO ACTION */}
      {/* FIX: Added pt-28 to clear the header, and flex-1 to perfectly center the content vertically */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-1 flex-col items-center justify-center text-center pt-28 pb-12 space-y-6">
        {/* 1. Micro-Entry Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B3533B] uppercase">
            {"Full stack developer"}
          </span>
          <div className="w-8 h-[1px] bg-[#B3533B]/30" />
        </motion.div>

        <HeroHeadline />

        {/* 2. Micro-Entry Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-600 text-sm md:text-base max-w-md mx-auto leading-relaxed font-normal pt-6 tracking-wide"
        >
          {
            "I build products with clean architecture, scalable backend systems, and an obsessive focus on the quality of every interaction."
          }
        </motion.p>

        {/* Action Button Layout */}
        <HeroButtons />
      </div>

      {/* 3. RIGHT FLOATING SIDEBAR */}
      <HeroAside />

      {/* 4. BASE INTERFACE ROW: SCROLL CONTEXT */}
      <footer className="relative z-20 w-full pt-8 pb-4 px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto border-t border-zinc-200" />
      </footer>
    </section>
  );
}
