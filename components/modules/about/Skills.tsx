"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import skillGroups from "@/components/modules/about/data";

export default function Skills() {
  // Parent layout container variants (removed scroll-triggering configurations from here)
  const sectionContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  // individual row triggers
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.55, 
        ease: [0.16, 1, 0.3, 1],
        // The orchestration properties below will still work perfectly on child elements
        delayChildren: 0.05,
        staggerChildren: 0.02
      }
    }
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 4 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 180, 
        damping: 20 
      }
    }
  };

  return (
    <motion.div 
      variants={sectionContainerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 pt-8 border-t border-zinc-200/50"
    >
      {/* Editorial Timeline Matrix Wrapper */}
      <div className="relative border-l border-zinc-100 pl-4 md:pl-8 space-y-8 max-w-5xl">
        {skillGroups.map((group) => (
          <motion.div 
            key={group.category} 
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            // FIX: Triggers animation exactly when each individual row passes 10% into view screen bounds
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 relative"
          >
            {/* Minimal node point alignment on the timeline axis */}
            <div className="absolute -left-[21px] md:-left-[37px] top-[14px] w-2 h-2 rounded-full bg-zinc-200 border border-white" />

            {/* CATEGORY BLOCK: Left column anchor */}
            <div className="sm:w-1/4 shrink-0 pt-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#B3533B]">
                {group.category}
              </span>
            </div>

            {/* CHIPS CANVAS: Right column wrapper */}
            <motion.div
              variants={listVariants}
              className="sm:w-3/4 flex flex-wrap gap-2"
            >
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -1.5,
                      borderColor: "rgba(161, 161, 170, 0.45)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)"
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-zinc-200/70 text-zinc-800 transition-colors duration-150 cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-105 ${skill.brandColor}`} />
                    
                    <span className="font-mono text-[12.5px] font-medium tracking-tight text-zinc-700 group-hover:text-zinc-950 transition-colors duration-150">
                      {skill.name}
                    </span>

                    {/* Low-profile tag tooltip */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-95 opacity-0 pointer-events-none transition-all duration-150 origin-bottom whitespace-nowrap px-2.5 py-1.5 rounded bg-zinc-950 text-white text-[10px] font-mono tracking-wide shadow-md group-hover:opacity-100 group-hover:scale-100 z-50">
                      {skill.desc}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}