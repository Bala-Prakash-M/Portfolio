"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 }, // Slightly higher entry lift for larger text scaling
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Extended slightly to make the larger movement feel smooth
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20% 0px" }}
      className="flex flex-col items-start text-left select-none py-8" // Slightly tightened padding
    >
      {/* Perfectly scaled down one step for a cleaner, modern editorial profile */}
      <motion.h2
        variants={itemVariants}
        className="font-mono text-xl md:text-2xl font-bold tracking-[0.2em] text-zinc-900"
      >
        {title}
      </motion.h2>

      {/* Shortened the line from w-10 to w-8 and tightened the margin to maintain structural balance */}
      <motion.div
        variants={itemVariants}
        className="w-8 h-[1px] bg-zinc-300 mt-3.5"
      />
    </motion.div>
  );
}