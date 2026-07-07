"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "@/components/shared/components/SectionHeaeding"; // Adjust path as necessary

export default function AboutSection() {
  const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Framer Motion", "Node.js", "Clean Architecture", "Product Engineering"
  ];

  // Micro-stagger variants for tech pills
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    }
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="relative z-10 w-full py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <SectionHeading title="/ About me" />

      {/* Modern High-Impact Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 items-start">
        
        {/* LEFT COLUMN: Clean, Borderless Typography */}
        <div className="lg:col-span-7 space-y-6 text-zinc-600 text-base md:text-[17px] leading-relaxed font-normal tracking-wide">
          <p>
            {"I'm "}<span className="font-semibold text-zinc-950">Bala Prakash</span>{", a third-year Information Technology student focused on building software that's reliable, scalable, and genuinely enjoyable to use."}
          </p>
          <p>
            Through personal projects and freelance work, {"I've"} built production-ready applications, collaborated with real clients, and continue exploring clean architecture, scalable systems, modern web technologies, and thoughtful product engineering.
          </p>
          <p>
            I specialize in bridging the gap between high-end aesthetic design and rigorous engineering. Every interaction is calculated, and every component is optimized for absolute fluidity.
          </p>
          <p className="text-zinc-900 font-medium">
            My focus is on creating premium, tactile experiences—building interfaces that feel responsive, deliberate, and perfectly weighted.
          </p>
        </div>

        {/* RIGHT COLUMN: Interactive High-Tech Grid Layout */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#B3533B]">
            {"// Capabilities & Stack"}
          </div>
          
          <motion.div 
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-2.5"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={pillVariants}
                whileHover={{ y: -2, backgroundColor: "rgba(244, 244, 245, 0.9)" }}
                className="select-none px-4 py-2.5 rounded-xl bg-white/50 border border-white/80 font-mono text-[11px] font-medium tracking-wide text-zinc-800 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}