"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Aside() {
  // Ultra-efficient GPU variants layout tree
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time between each button's arrival
        delayChildren: 0.8,    // Late entry: waits for main hero text to finish layout load
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } // Crisp premium Bezier curve
    },
  };

  return (
    <motion.aside 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-6 text-zinc-400"
    >
      {/* GitHub Button */}
      <motion.div variants={itemVariants} className="group relative flex items-center">
        <span className="absolute right-8 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-white text-zinc-800 text-[10px] font-bold uppercase tracking-wider shadow-[0_4px_20px_-2px_rgba(24,24,27,0.04)] group-hover:opacity-100">
          Explore my source code
        </span>

        <a
          href="https://github.com/Bala-Prakash-M"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-950 transition-colors block p-1 active:scale-95 duration-200"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </motion.div>

      {/* LinkedIn Button */}
      <motion.div variants={itemVariants} className="group relative flex items-center">
        <span className="absolute right-8 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-white text-zinc-800 text-[10px] font-bold uppercase tracking-wider shadow-[0_4px_20px_-2px_rgba(24,24,27,0.04)] group-hover:opacity-100">
          Connect on LinkedIn
        </span>

        <a
          href="https://www.linkedin.com/in/bala-prakash-027725362/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0A66C2] transition-colors block p-1 active:scale-95 duration-200"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </motion.div>

      {/* X (Twitter) Button */}
      <motion.div variants={itemVariants} className="group relative flex items-center">
        <span className="absolute right-8 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-white text-zinc-800 text-[10px] font-bold uppercase tracking-wider shadow-[0_4px_20px_-2px_rgba(24,24,27,0.04)] group-hover:opacity-100">
          Follow updates on X
        </span>

        <a
          href="https://x.com/BalaPrakas74044"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-950 transition-colors block p-1 active:scale-95 duration-200"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </motion.div>

      {/* Email Button */}
      <motion.div variants={itemVariants} className="group relative flex items-center">
        <span className="absolute right-8 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-white text-zinc-800 text-[10px] font-bold uppercase tracking-wider shadow-[0_4px_20px_-2px_rgba(24,24,27,0.04)] group-hover:opacity-100">
          Get in touch
        </span>

        <a
          href="mailto:pbala1851@email.com"
          className="hover:text-[#EA4335] transition-colors block p-1 active:scale-95 duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </motion.div>
    </motion.aside>
  );
}