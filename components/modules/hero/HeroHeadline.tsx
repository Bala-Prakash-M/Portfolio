"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function HeroHeadline() {
  const text = "Building software that solves real problems.";

  // Define the container for the animation
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
    }),
  };

  // Define how each word enters
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <h1
      // Changed text-zinc-950 to text-[#2D2926] for a softer, editorial finish
      className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2D2926] leading-[1.1]"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <motion.div
        style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </h1>
  );
}
