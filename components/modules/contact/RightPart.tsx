"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RightPart() {
  return (
    // Replaced outer motion.div with a standard div to allow granular element cascading
    <div className="flex flex-col w-full">
      
      {/* ====================================================================
          CASCADING SUB-BLOCK 1: AVAILABLE FOR
         ==================================================================== */}
      <motion.div 
        variants={blockVariants} 
        className="space-y-4 border-b border-zinc-200/50 pb-8 mb-8"
      >
        <h4 className="font-mono text-[13px] font-bold text-zinc-400 uppercase tracking-widest">
          AVAILABLE FOR
        </h4>
        <ul className="space-y-3 font-mono text-base text-zinc-700 tracking-tight">
          <li className="flex items-center gap-3">
            <span className="text-[#B3533B]/70 text-xs">•</span>
            <span>Software Engineering Internships</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#B3533B]/70 text-xs">•</span>
            <span>Freelance Projects</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#B3533B]/70 text-xs">•</span>
            <span>Product Collaborations</span>
          </li>
        </ul>
      </motion.div>

      {/* ====================================================================
          CASCADING SUB-BLOCK 2: CURRENTLY METRICS MATRIX
         ==================================================================== */}
      <motion.div 
        variants={blockVariants} 
        className="space-y-5"
      >
        <h4 className="font-mono text-[13px] font-bold text-zinc-400 uppercase tracking-widest">
          CURRENTLY
        </h4>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Subsection: Building */}
          <div className="space-y-2.5">
            <span className="text-[13px] font-bold text-zinc-950 uppercase tracking-wider block">
              Building
            </span>
            <div className="font-mono text-sm text-zinc-600 space-y-1.5">
              <p className="truncate">Full-stack</p>
            </div>
          </div>

          {/* Subsection: Learning */}
          <div className="space-y-2.5">
            <span className="text-[13px] font-bold text-zinc-950 uppercase tracking-wider block">
              Learning
            </span>
            <div className="font-mono text-sm text-zinc-600 space-y-1.5">
              <p className="truncate">System Design</p>
              <p className="truncate">DevOps</p>
            </div>
          </div>

          {/* Subsection: Exploring */}
          <div className="space-y-2.5">
            <span className="text-[13px] font-bold text-zinc-950 uppercase tracking-wider block">
              Exploring
            </span>
            <div className="font-mono text-sm text-zinc-600 space-y-1.5">
              <p className="truncate">AI Eng</p>
              <p className="truncate">Web3</p>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}