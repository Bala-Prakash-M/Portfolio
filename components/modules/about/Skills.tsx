"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import skillGroups from "./data";

export default function Skills() {
  // Container variant to handle staggered entrance timing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  // Category item variant for smooth upward entrance
  const groupVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="w-full select-none"
    >
      {/* EDITORIAL SECTION HEADER */}
      <motion.div variants={groupVariants} className="flex items-center gap-2 mb-6">
        <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          Skills
        </h3>
      </motion.div>

      {/* MINIMALIST TYPOGRAPHIC STACK */}
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={groupVariants} className="space-y-1.5">
            {/* CATEGORY TITLE */}
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#B3533B]">
              {group.category}
            </h4>

            {/* INLINE LIST WITH TACTILE DESKTOP HOVER STATES */}
            <div className="flex flex-wrap items-center gap-y-1.5 text-zinc-600 font-mono text-[13px]">
              {group.items.map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <div className="group relative inline-flex items-center px-2 py-0.5 -mx-1 rounded-md transition-all duration-200 ease-out md:hover:bg-zinc-200/50 md:hover:-translate-y-0.5 cursor-default">
                    {/* Tech Name */}
                    <span className="group-hover:text-zinc-950 transition-colors duration-150 font-medium text-zinc-700">
                      {skill.name}
                    </span>

                    {/* Desktop Tooltip */}
                    <span className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 translate-y-1 scale-95 opacity-0 pointer-events-none transition-all duration-200 ease-out origin-bottom whitespace-nowrap px-2.5 py-1 rounded bg-zinc-950 text-white text-[9.5px] font-mono tracking-wide shadow-md group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-0.5 z-50">
                      {skill.desc}
                    </span>
                  </div>

                  {/* Separator Bullet */}
                  {index < group.items.length - 1 && (
                    <span className="mx-1.5 text-zinc-300 select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}