"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface HeroButtonProps {
  onNavigate: (item: string) => void;
}

export default function HeroButtons({ onNavigate }: HeroButtonProps) {
  // Screen size detection hooks
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Matches Tailwind's 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.4 : 0.8, // SNAPPY: Faster mount on mobile screens
        staggerChildren: isMobile ? 0.08 : 0.15, // Tighter staging cadence for performance
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 8 : 16, // REDUCED: Half the movement distance on mobile to prevent paint lags
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.7, // Fast, non-blocking execution duration on mobile
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="pt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto select-none"
    >
      {/* LEFT PRIMARY BUTTON */}
      <motion.div
        variants={slideUpVariants}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 },
        }}
        className="group/btn-wrapper relative inline-block w-full sm:w-auto p-[1.5px] rounded-[13px] overflow-hidden bg-zinc-950 cursor-pointer shadow-sm"
      >
        {/* 1. CONTINUOUS ROTATING NEON BORDER BEAM */}
        <motion.div
          className="absolute -inset-[200%] z-0 pointer-events-none opacity-80 group-hover/btn-wrapper:opacity-100 transition-opacity duration-300 will-change-transform"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, #B3533B 310deg, #FF7A59 340deg, #FFFFFF 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* 2. SUBTLE AMBIENT OUTER GLOW */}
        <motion.div
          className="absolute -inset-[200%] z-0 pointer-events-none opacity-40 blur-[6px] will-change-transform"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 290deg, #FF7A59 330deg, #FFFFFF 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* 3. INNER BUTTON FACE */}
        <button
          onClick={() => onNavigate("Experience")}
          className="relative z-10 flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-zinc-900 text-[#FAF9F6] border border-zinc-800/80 rounded-xl overflow-hidden cursor-pointer"
        >
          {/* 4. PERIODIC DIAGONAL SHINE SWEEP */}
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 pointer-events-none"
            animate={{
              x: ["-150%", "200%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 2.8,
              ease: "easeInOut",
            }}
          />

          <motion.div
            variants={containerVariants}
            className="relative z-10 flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase"
          >
            <span>{"View My Work"}</span>

            {/* 5. SMOOTH ARROW SHIFT ON HOVER */}
            <svg
              className="w-3.5 h-3.5 text-zinc-400 transition-all duration-200 ease-out group-hover/btn-wrapper:translate-x-0.5 group-hover/btn-wrapper:-translate-y-0.5 group-hover/btn-wrapper:text-zinc-100"
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
          </motion.div>
        </button>
      </motion.div>

      {/* RIGHT SECONDARY BUTTON */}
      <motion.a
        variants={slideUpVariants}
        onClick={() => onNavigate("Resume")}
        target="_blank"
        rel="noopener noreferrer"
        /* PERFORMANCE ENGINES: Completely strips scale transformations on touch screens */
        whileHover={isMobile ? undefined : { scale: 1.015, y: -1 }}
        whileTap={isMobile ? { scale: 0.98 } : { scale: 0.99, y: 0 }}
        style={{ transform: "translateZ(0)" }} // Forces immediate GPU layer acceleration
        className="group relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-zinc-100 text-zinc-800 border border-zinc-200/80 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors duration-150 md:hover:bg-zinc-200/50 cursor-pointer"
      >
        <motion.div
          variants={containerVariants}
          className="relative z-10 flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase"
        >
          <svg
            className="w-4 h-4 text-zinc-500 transition-transform duration-300 ease-out md:group-hover:-translate-y-0.5 md:group-hover:text-zinc-900"
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
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
