"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "@/components/shared/components/SectionHeading";
import { experiences } from "./data";

export default function Experience() {

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="experience"
      className="relative z-10 w-full pt-4 pb-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-zinc-100 mt-12 select-none"
    >
      <SectionHeading title="2. Experience" />

      <motion.div 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-6 space-y-20"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={`${exp.role}-${index}`}
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT COLUMN: Period timeline marker + Metadata block */}
            <div className="lg:col-span-3 space-y-6 pt-1">
              
              {/* Timeline marker */}
              <div className="font-mono text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#B3533B]">
                {exp.period}
              </div>

              {/* Vertical Metadata Stream */}
              <div className="space-y-4 pt-1 border-t border-zinc-100 lg:border-t-0 lg:pt-0">
                {exp.meta.map((item) => (
                  <div key={item.label} className="space-y-0.5">
                    <div className="font-mono text-[10.5px] font-bold text-zinc-400 uppercase tracking-widest">
                      {item.label}
                    </div>
                    <p className="text-[13.5px] font-medium text-zinc-700 tracking-wide leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Execution Profile Core */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* Role Context Profile */}
              <div>
                <h3 className="text-2xl font-normal text-zinc-950 tracking-wide leading-tight">
                  {exp.role}
                </h3>
              </div>

              {/* Structured Work Bulletins Container */}
              <div className="max-w-2xl space-y-4">
                {exp.bullets.map((bullet, idx) => (
                  <p 
                    key={idx} 
                    className="text-zinc-600 text-[17px] leading-relaxed font-normal tracking-wide text-justify"
                  >
                    {bullet}
                  </p>
                ))}
              </div>

              {/* Technology Architecture Section */}
              <div className="space-y-2.5 pt-4">
                <div className="font-mono text-[10.5px] font-bold text-zinc-400 uppercase tracking-widest">
                  Tech Stack
                </div>
                
                <div className="flex flex-wrap gap-2 max-w-2xl">
                  {exp.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-md bg-white border border-zinc-200/80 font-mono text-[11.5px] font-medium text-zinc-600 tracking-tight shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}