"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={containerVariants}
      className="relative w-full bg-[#161618] text-zinc-100 mt-32 select-none"
    >
      {/* ====================================================================
          CINEMATIC FILM STRIP PATTERN
          Signals the "end of the reel / end of the movie"
         ==================================================================== */}
      <div className="absolute top-0 left-0 w-full h-[32px] overflow-hidden transform -translate-y-[99%] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Repeating 35mm perforation pattern */}
            <pattern id="film-edge" width="64" height="32" patternUnits="userSpaceOnUse">
              {/* The base charcoal canvas extending upward */}
              <rect width="64" height="32" fill="#161618" />
              {/* The cut-out holes revealing the warm off-white background above it */}
              <rect x="24" y="10" width="16" height="12" rx="2.5" fill="#FAF9F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#film-edge)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
          
          {/* 1. OUTRO / IDENTITY (Left aligned) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-2">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              Identity
            </span>
            <span className="font-mono text-[13px] text-zinc-300">
              Designed & Engineered by <span className="text-white font-semibold">Bala Prakash</span>
            </span>
          </motion.div>

          {/* 2. BUILT WITH (Center aligned on desktop) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-2 md:items-center">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              Built With
            </span>
            <span className="font-mono text-[13px] text-zinc-300 text-center">
              Next.js &bull; Typescript &bull; Tailwind CSS &bull; Framer &bull; Bun
            </span>
          </motion.div>

          {/* 3. LAST UPDATED (Right aligned on desktop) */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-2 md:items-end">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
              Last Updated
            </span>
            <span className="font-mono text-[13px] text-zinc-300">
              July 2026
            </span>
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
}