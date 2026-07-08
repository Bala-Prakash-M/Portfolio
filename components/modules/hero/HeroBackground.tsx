"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useScreenSize } from "@/components/shared/hooks/useScreenSize";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800);
  const { isMobile, isPad } = useScreenSize();
  const [fogCleared, setFogCleared] = useState(false);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const triggerPoint = windowHeight * (isMobile || isPad ? 0.2 : 0.3);
    setFogCleared(latest > triggerPoint);
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fogCleared ? 0 : 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#EFEBE6]"
    >
      <motion.div
        className="absolute w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full blur-[90px]"
        animate={{
          // Orbiting path: covers 0% to 80% of the viewport smoothly
          x: ["0vw", "60vw", "40vw", "0vw"],
          y: ["0vh", "30vh", "60vh", "0vh"],
          background: [
            "radial-gradient(circle, #FF7A59 0%, transparent 60%)",
            // Royal Crimson
            "radial-gradient(circle, #C92A4A 0%, transparent 60%)",

            // Sapphire Blue
            "radial-gradient(circle, #2563EB 0%, transparent 60%)",

            // Deep Indigo
            "radial-gradient(circle, #5B21B6 0%, transparent 60%)",

            // Emerald
            "radial-gradient(circle, #0F9D7A 0%, transparent 60%)",

            // Rich Amber
            "radial-gradient(circle, #D97706 0%, transparent 60%)",

            // Electric Violet
            "radial-gradient(circle, #7C3AED 0%, transparent 60%)",

            // Return
            "radial-gradient(circle, #C92A4A 0%, transparent 60%)",
          ],
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Subtle Grain: The 'Editorial' touch */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
    </motion.div>
  );
}
