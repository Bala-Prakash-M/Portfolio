"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    /* Increased duration to 0.85s for a smoother, premium entry cadence */
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RightPart() {
  return (
    <div className="flex flex-col w-full space-y-12 select-none">
      
      {/* ====================================================================
          TOP ZONE: AVAILABLE FOR
         ==================================================================== */}
      <motion.div 
        variants={blockVariants} 
        className="space-y-5 border-b border-zinc-200/60 pb-8"
      >
        {/* CHANGED: Made headings text-zinc-900 and 13px for stronger visual anchor presence */}
        <h4 className="font-mono text-[13px] font-bold text-zinc-900 uppercase tracking-widest">
          AVAILABLE FOR
        </h4>
        <ul className="space-y-3.5 font-mono text-base text-zinc-800 tracking-tight">
          {[
            "Software Engineering Internships",
            "Freelance Projects",
            "Product Collaborations",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex-shrink-0 text-[#B3533B]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-medium text-zinc-900">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ====================================================================
          BOTTOM ZONE: CURRENTLY MATRIX (Perfected Balanced Grid)
         ==================================================================== */}
      <motion.div variants={blockVariants} className="space-y-6">
        {/* CHANGED: Made headings text-zinc-900 and 13px for stronger visual anchor presence */}
        <h4 className="font-mono text-[13px] font-bold text-zinc-900 uppercase tracking-widest">
          CURRENTLY
        </h4>
        
        {/* CHANGED: Restructured into a perfectly uniform 3-column split so elements weigh equally */}
        <div className="grid grid-cols-3 gap-4">
          
          {/* Subsection: Building */}
          <div className="space-y-2.5">
            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider block">
              Building
            </span>
            <div className="font-mono text-sm text-zinc-600 pl-1 border-l border-zinc-200/80">
              <p className="text-zinc-900 font-medium">Full-stack</p>
              <p className="text-zinc-500 text-[13px]">Products</p>
            </div>
          </div>

          {/* Subsection: Learning */}
          <div className="space-y-2.5">
            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider block">
              Learning
            </span>
            <div className="font-mono text-sm text-zinc-600 pl-1 border-l border-zinc-200/80 space-y-0.5">
              <p className="text-zinc-900 font-medium truncate">Sys Design</p>
              <p className="text-zinc-500 text-[13px] truncate">DevOps</p>
            </div>
          </div>

          {/* Subsection: Exploring */}
          <div className="space-y-2.5">
            <span className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider block">
              Exploring
            </span>
            <div className="font-mono text-sm text-zinc-600 pl-1 border-l border-zinc-200/80 space-y-0.5">
              <p className="text-zinc-900 font-medium truncate">AI Eng</p>
              <p className="text-zinc-500 text-[13px] truncate">Web3</p>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
}