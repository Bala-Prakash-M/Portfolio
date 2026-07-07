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
      className="flex flex-col items-start text-left select-none py-10"
    >
      {/* Scaled typography weight from text-lg/xl up to text-2xl/3xl */}
      <motion.h2
        variants={itemVariants}
        className="font-mono text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase text-zinc-900"
      >
        {title}
      </motion.h2>

      {/* Expanded the geometric anchor rule width to maintain visual balance with the larger font */}
      <motion.div
        variants={itemVariants}
        className="w-10 h-[1px] bg-zinc-300 mt-4"
      />
    </motion.div>
  );
}