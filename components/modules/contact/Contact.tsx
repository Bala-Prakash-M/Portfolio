"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "@/components/shared/components/SectionHeading";
import RightPart from "./RightPart";
import LeftPart from "./LeftPart";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    /* FIX PART 1: The outer section is now a completely static semantic wrapper. 
       This anchors the off-white color directly into the browser layout layer from frame one, 
       permanently eliminating the white block flash anomaly during hydration.
    */
    <section
      id="contact"
      className="w-full pt-4 pb-12 px-6 md:px-8 max-w-7xl mx-auto bg-[#FAF9F6] text-zinc-900 select-none"
    >
      {/* FIX PART 2: We delegate the on-scroll visibility handling to an inner animation group container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ROW 1: SECTION HEADER LAYER */}
        <motion.div variants={blockVariants} className="w-full mb-4">
          <SectionHeader title="4. Let's Connect." />
        </motion.div>

        {/* REALIGNMENT ENGINE: Core 12-column grid layout containing Left and Right blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-12">
          
          {/* COLUMN 1: LEFT PART PACKAGING (Intro text + social channels) */}
          <motion.div 
            variants={blockVariants}
            className="lg:col-span-6 w-full"
          >
            <LeftPart />
          </motion.div>

          {/* COLUMN 2: RIGHT PART PACKAGING (Availability state matrices) */}
          <motion.div
            variants={blockVariants}
            className="lg:col-span-6 w-full pt-1 lg:pt-0"
          >
            <RightPart />
          </motion.div>

        </div>

        {/* BASELINE CLOSING RULE LINK */}
        <motion.div
          variants={lineVariants}
          className="w-full h-[1px] bg-zinc-200/80 origin-left"
        />
      </motion.div>
    </section>
  );
}