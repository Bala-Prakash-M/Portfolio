"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import skillGroups from "./data";

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  // Safely check layout metrics on mount
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sectionContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: isMobile ? 6 : 14 }, // Shallow entrance on mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: isMobile ? 0.35 : 0.55, 
        ease: [0.16, 1, 0.3, 1],
        delayChildren: isMobile ? 0.02 : 0.05,
        staggerChildren: isMobile ? 0.01 : 0.02 // Faster staging cadence on mobile
      }
    }
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: isMobile ? 1 : 0.96, y: isMobile ? 3 : 4 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      /* PERFORMANCE FIXED: 
         Desktop retains high-end spring mechanics, Mobile uses ultra-light linear transitions 
      */
      transition: isMobile 
        ? { duration: 0.25, ease: "easeOut" }
        : { type: "spring", stiffness: 180, damping: 20 }
    }
  };

  return (
    <motion.div 
      variants={sectionContainerVariants}
      initial="hidden"
      animate="visible"
      className="mt-16 pt-8 border-t border-zinc-200/50"
    >
      <div className="relative border-l border-zinc-100 pl-4 md:pl-8 space-y-8 max-w-5xl">
        {skillGroups.map((group) => (
          <motion.div 
            key={group.category} 
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-5%" : "-10%" }}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[21px] md:-left-[37px] top-[14px] w-2 h-2 rounded-full bg-zinc-200 border border-white" />

            {/* CATEGORY BLOCK */}
            <div className="sm:w-1/4 shrink-0 pt-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#B3533B]">
                {group.category}
              </span>
            </div>

            {/* CHIPS CANVAS */}
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
                    /* PERFORMANCE FIXED: Completely bypass touch hovers on mobile phones */
                    whileHover={isMobile ? undefined : { 
                      y: -1.5,
                      borderColor: "rgba(161, 161, 170, 0.45)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)"
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    style={{ transform: "translateZ(0)" }} // Layer promotion instantly
                    className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-zinc-200/70 text-zinc-800 transition-colors duration-150 cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 md:transition-transform md:duration-200 md:group-hover:scale-105 ${skill.brandColor}`} />
                    
                    <span className="font-mono text-[12.5px] font-medium tracking-tight text-zinc-700 md:group-hover:text-zinc-950 transition-colors duration-150">
                      {skill.name}
                    </span>

                    {/* Low-profile tag tooltip: Only apply hover animation tracking logic for desktops */}
                    {!isMobile && (
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-95 opacity-0 pointer-events-none transition-all duration-150 origin-bottom whitespace-nowrap px-2.5 py-1.5 rounded bg-zinc-950 text-white text-[10px] font-mono tracking-wide shadow-md group-hover:opacity-100 group-hover:scale-100 z-50">
                        {skill.desc}
                      </span>
                    )}
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