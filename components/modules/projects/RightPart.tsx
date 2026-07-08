"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Project } from "./data";

interface RightPartProps {
  activeProject: Project & { philosophy?: string };
}

export default function RightPart({ activeProject }: RightPartProps) {
  // Accelerated under-350ms cinematic variant matrix
  const panelVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Perfectly staggers rows down the line
        delayChildren: 0.01,
      },
    },
    exit: {
      opacity: 0,
      y: -6,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const childVariants: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="lg:col-span-7 h-auto lg:pl-6 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          variants={panelVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="space-y-6"
        >
          {/* ====================================================================
              ROW 1: CATEGORY, TITLE & PHILOSOPHY BLOCK (Now part of stagger cascade)
             ==================================================================== */}
          <motion.div variants={childVariants} className="w-full space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 block">
              {activeProject.shortCategory} · {activeProject.year}
            </span>

            <h2 className="text-3xl md:text-4xl font-normal text-zinc-950 tracking-tight">
              {activeProject.title}
            </h2>

            <p className="text-xs font-mono text-[#B3533B] tracking-wide pt-0.5 italic">
              {activeProject.philosophy || "Designed for production, not demonstration."}
            </p>
          </motion.div>

          {/* ====================================================================
              ROW 2: FLAT ROW JOURNAL METADATA
             ==================================================================== */}
          <motion.div
            variants={childVariants}
            className="grid grid-cols-3 gap-4 py-3 border-y border-zinc-200/60"
          >
            <div>
              <div className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Type</div>
              <div className="text-[12px] font-medium text-zinc-800 truncate">{activeProject.meta.type}</div>
            </div>
            <div>
              <div className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Team</div>
              <div className="text-[12px] font-medium text-zinc-800 truncate">{activeProject.meta.team}</div>
            </div>
            <div>
              <div className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Duration</div>
              <div className="text-[12px] font-medium text-zinc-800 truncate">{activeProject.meta.duration}</div>
            </div>
          </motion.div>

          {/* ====================================================================
              ROW 3: OVERVIEW BLOCK
             ==================================================================== */}
          <motion.div variants={childVariants} className="space-y-1">
            <h4 className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Overview</h4>
            <p className="text-zinc-600 text-[14px] leading-relaxed tracking-wide text-justify font-normal max-w-2xl line-clamp-3">
              {activeProject.overview}
            </p>
          </motion.div>

          {/* ====================================================================
              ROW 4: ENGINEERING HIGHLIGHTS GRID
             ==================================================================== */}
          <motion.div variants={childVariants} className="space-y-2">
            <h4 className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Engineering Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-0.5">
              {activeProject.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-baseline gap-2.5 pb-1 border-b border-zinc-100/70"
                >
                  <span className="font-mono text-[12px] font-bold text-zinc-950 shrink-0 min-w-[115px]">
                    {highlight.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ====================================================================
              ROW 5: INLINE TECH BUILT STACK
             ==================================================================== */}
          <motion.div variants={childVariants} className="space-y-1">
            <h4 className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Built With</h4>
            <div className="text-[12px] font-mono text-zinc-600 leading-relaxed max-w-2xl tracking-tight">
              {activeProject.stack.reduce(
                (acc, curr, i) => [
                  ...acc,
                  curr,
                  i < activeProject.stack.length - 1 ? (
                    <span key={`sep-${i}`} className="mx-2 text-[#B3533B]/40">
                      ·
                    </span>
                  ) : null,
                ],
                [] as React.ReactNode[],
              )}
            </div>
          </motion.div>

          {/* ====================================================================
              ROW 6: LIGHTWEIGHT EDITORIAL ACTIONS
             ==================================================================== */}
          <motion.div
            variants={childVariants}
            className="flex items-center gap-6 pt-3"
          >
            {activeProject.githubUrl && (
              <div className="group/btn relative">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Source Code"
                  className="p-1 rounded text-zinc-500 hover:text-zinc-950 transition-colors duration-150 block"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 pointer-events-none transition-opacity duration-100 whitespace-nowrap px-3 py-1.5 rounded bg-zinc-900 text-zinc-50 text-[11px] font-mono tracking-wide shadow-md group-hover/btn:opacity-100 z-50">
                  source_code
                </span>
              </div>
            )}

            {activeProject.liveUrl && (
              <div className="group/btn relative">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Preview"
                  className="p-1 rounded text-zinc-500 hover:text-[#B3533B] transition-colors duration-150 block"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 pointer-events-none transition-opacity duration-100 whitespace-nowrap px-3 py-1.5 rounded bg-zinc-900 text-zinc-50 text-[11px] font-mono tracking-wide shadow-md group-hover/btn:opacity-100 z-50">
                  live_preview
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}