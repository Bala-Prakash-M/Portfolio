"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HeroButtons() {
  // 1. Parent Container: Handles the initial block delay and staggers child components
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,    // Waits perfectly for your main hero typography to typeset
        staggerChildren: 0.15, // Creates a clean, sequential reveal feel
      },
    },
  };

  // 2. Button Variant: Pure, hardware-accelerated glide with no size alterations
  const slideUpVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 16 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] // Premium cubic-bezier: fast initial launch, smooth deceleration
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="pt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto select-none"
    >
      {/* LEFT PRIMARY BUTTON: Wipes Right to Left */}
      <motion.button
        variants={slideUpVariants}
        // Micro-hover response keeps the bubbly momentum alive
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.99, y: 0 }}
        className="group relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-zinc-900 text-[#FAF9F6] border border-zinc-900 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition-shadow duration-150 hover:shadow-lg hover:shadow-zinc-900/15"
      >
        <motion.div variants={containerVariants} className="relative z-10 flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase">
          <span>{"View My Work"}</span>
          <svg
            className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </motion.div>
      </motion.button>

      {/* RIGHT SECONDARY BUTTON: Wipes Left to Right */}
      <motion.a
        variants={slideUpVariants}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        // Same micro-hover kinematics for UI symmetry
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.99, y: 0 }}
        className="group relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-zinc-100 text-zinc-800 border border-zinc-200/80 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-150 hover:bg-zinc-200/50"
      >
        <motion.div variants={containerVariants} className="relative z-10 flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase">
          <svg
            className="w-4 h-4 text-zinc-500 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-zinc-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{"View Resume"}</span>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}