"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "@/components/shared/components/SectionHeading";
import Skills from "@/components/modules/about/Skills";

export default function AboutSection() {
  const typographyVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const subgridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const ruleVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="about"
      className="relative z-10 w-full pt-4 pb-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <SectionHeading title="1. Who am I?" />

      {/* Changed parent wrapper to standard div to prevent top-level trigger spillover */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-start">
        
        {/* LEFT COLUMN: Clean, Borderless Typography */}
        <div className="lg:col-span-7 space-y-12 text-zinc-600 tracking-wide select-none">
          
          {/* 1. THE HERO HOOK — Triggers instantly as it enters viewport */}
          <motion.div 
            variants={typographyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-800">
              {"I'm "}
              <span className="font-semibold text-zinc-950">Bala Prakash</span>
              {", a third-year IT student building software that's "}
              <span className="relative inline-block font-medium text-zinc-950">
                reliable
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B3533B]/40 origin-left"
                />
              </span>
              {", "}
              <span className="relative inline-block font-medium text-zinc-950">
                scalable
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B3533B]/40 origin-left"
                />
              </span>
              {", and "}
              <span className="relative inline-block font-medium text-zinc-950">
                genuinely enjoyable to use.
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B3533B]/40 origin-left"
                />
              </span>
            </p>
          </motion.div>

          {/* 2. THE CONTEXT SUBGRID — Triggers independently down the layout trail */}
          <motion.div 
            variants={subgridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12%" }}
            className="relative pt-6"
          >
            <motion.div 
              variants={ruleVariants} 
              className="absolute top-0 left-0 w-full h-[1px] bg-zinc-200/80 origin-left" 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={typographyVariants} className="space-y-2">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Execution
                </h4>
                <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
                  Through personal projects and freelance work, {"I've"} shipped{" "}
                  <span className="font-medium text-zinc-950">
                    production-ready applications
                  </span>
                  {" and collaborated with real clients while maintaining an emphasis on "}
                  <span className="font-medium text-zinc-950">
                    clean architecture
                  </span>
                  .
                </p>
              </motion.div>

              <motion.div variants={typographyVariants} className="space-y-2">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Core Philosophy
                </h4>
                <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
                  My work centers around{" "}
                  <span className="font-medium text-zinc-950">
                    full-stack product engineering
                  </span>
                  {"—combining scalable backend mechanics with responsive, tactile user interfaces."}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. THE ENGINEERING MANIFESTO */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            className="relative pt-5"
          >
            <motion.div 
              variants={ruleVariants} 
              className="absolute top-0 left-0 w-full h-[1px] bg-zinc-200/80 origin-left" 
            />
            
            <motion.div variants={typographyVariants}>
              <p className="font-mono text-[12px] md:text-[13px] text-zinc-500 leading-relaxed">
                <motion.span 
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="inline-block text-[#B3533B] font-bold font-sans mr-1"
                >
                  →
                </motion.span>{" "}
                Every project teaches me something new about{" "}
                <span className="text-zinc-950 font-semibold">architecture</span>,{" "}
                <span className="text-zinc-950 font-semibold">performance</span>,
                and{" "}
                <span className="text-zinc-950 font-semibold">
                  building better software
                </span>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Premium Minimalist Quote Placement */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-6 lg:pt-12 lg:pl-12 border-t border-zinc-100 lg:border-t-0 lg:border-l lg:border-zinc-200/60">
          <motion.blockquote 
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            className="space-y-3"
          >
            <p className="text-zinc-400 italic text-lg sm:text-xl font-light leading-relaxed tracking-wide select-none">
              “My destination is no longer a place, rather a new way of seeing.”
            </p>
            <footer className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B3533B]/70 select-none">
              — Marcel Proust
            </footer>
          </motion.blockquote>
        </div>
      </div>

      {/* Skills rendered underneath */}
      <Skills />
    </section>
  );
}