"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HeroButtons() {
  // 1. Define the parent container orchestration
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // Waits for your Hero text to finish
        // UPGRADE: Changed from 0.15 to 0.5 to match the item duration exactly
        staggerChildren: 0.5,
      },
    },
  };

  // 2. Define the animation for each individual button
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      // The duration here is 0.5s, so the stagger above waits for this to finish
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      // 3. Apply the container variants
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
    >
      {/* Primary Action Button */}
      <motion.button
        // 4. Apply the item variant so it listens to the parent's stagger timing
        variants={item}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl font-sans text-[11px] font-semibold tracking-[0.15em] uppercase bg-zinc-900 text-[#FAF9F6] shadow-md shadow-zinc-900/10 transition-colors hover:bg-zinc-800"
      >
        <span>{"View My Work"}</span>
        <svg
          className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </motion.button>

      {/* Secondary Resume Button */}
      <motion.a
        // 4. Apply the exact same item variant here
        variants={item}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl font-sans text-[11px] font-semibold tracking-[0.15em] uppercase bg-zinc-100/60 text-zinc-800 border border-zinc-200/80 shadow-sm backdrop-blur-md transition-all hover:bg-zinc-100"
      >
        <svg
          className="w-4 h-4 text-zinc-500 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-zinc-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span>{"View Resume"}</span>
      </motion.a>
    </motion.div>
  );
}
