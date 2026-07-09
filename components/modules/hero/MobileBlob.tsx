"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function HeroBackgroundMobile() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(800);
  const [fogCleared, setFogCleared] = useState(false);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const triggerPoint = windowHeight * 0.2;
    const shouldClear = latest > triggerPoint;

    if (shouldClear !== fogCleared) {
      setFogCleared(shouldClear);
    }
  });

  return (
    /* FIXED: Container stays persistently mounted to act as a stable layout canvas */
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#EFEBE6]">
      {/* SEAMLESS SCREEN-WIDE MOBILE BLOB */}
      <motion.div
        className="absolute w-[35vw] h-[35vw] min-w-[280px] min-h-[280px] rounded-full blur-[50px] will-change-transform"
        animate={{
          x: ["0vw", "55vw", "25vw", "0vw"],
          y: ["0vh", "35vh", "65vh", "0vh"],
          /* FIX: Animate opacity directly inside the variant track. 
             This forces it to fade out smoothly in place without altering or interrupting its travel vector calculations.
          */
          opacity: fogCleared ? 0 : 1,
        }}
        style={{
          top: 0,
          left: 0,
          background: "radial-gradient(circle, #FF7A59 0%, transparent 60%)",
          transform: "translateZ(0)",
        }}
        transition={{
          x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6, ease: "easeInOut" }, // Controlled non-blocking fade duration
        }}
      />

      {/* Subtle Structural Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light pointer-events-none z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}
