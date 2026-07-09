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
    // Throttled trigger calculations
    const triggerPoint = windowHeight * (isMobile || isPad ? 0.2 : 0.3);
    const shouldClear = latest > triggerPoint;

    // FIX 1: Performance optimization—only trigger state update if value actually changes
    if (shouldClear !== fogCleared) {
      setFogCleared(shouldClear);
    }
  });

  return (
    /* STABLE PARENT: Stays persistently mounted to act as a stable layout canvas, 
       no longer toggles visibility on scroll.
    */
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#EFEBE6]">
      {/* OPTIMIZED GPU-ACCELERATED DESKTOP BLOB */}
      <motion.div
        /* FIX 2: Added 'will-change-transform' to warn the GPU and 'top/left' positioning
           to prevent browsers defaulting to absolute 0,0 and popping.
        */
        className="absolute top-0 left-0 w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] rounded-full blur-[90px] will-change-transform"
        animate={{
          x: ["0vw", "60vw", "40vw", "0vw"],
          y: ["0vh", "30vh", "60vh", "0vh"],
          /* FIX 3: Animate opacity directly inside the motion track. 
             This forces the blob to fade out smoothly in place without interrupting or resetting its travel vector calculations.
          */
          opacity: fogCleared ? 0 : 1,

          background: [
            // 1. Start: Vivid Coral
            "radial-gradient(circle, #FF7A59 0%, transparent 60%)",
            // 2. Neon Magenta / Pink
            "radial-gradient(circle, #FF007F 0%, transparent 60%)",
            // 3. Electric Violet
            "radial-gradient(circle, #7C3AED 0%, transparent 60%)",
            // 4. Electric Cyan / Neon Blue
            "radial-gradient(circle, #00F0FF 0%, transparent 60%)",
            // 5. High-Voltage Lime
            "radial-gradient(circle, #39FF14 0%, transparent 60%)",
            // 6. Laser Yellow
            "radial-gradient(circle, #FFEA00 0%, transparent 60%)",
            // 7. Vivid Tangerine
            "radial-gradient(circle, #FF6600 0%, transparent 60%)",
            // 8. Royal Crimson
            "radial-gradient(circle, #C92A4A 0%, transparent 60%)",
            // 9. END: Perfectly match start for seamless loop
            "radial-gradient(circle, #FF7A59 0%, transparent 60%)",
          ],
        }}
        style={{
          // FIX 4: Forces absolute hardware layer promotion for the GPU
          transform: "translateZ(0)",
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 35, repeat: Infinity, ease: "linear" },
          // Synced duration for the opacity fade on scroll
          opacity: { duration: 0.8, ease: "easeInOut" },
        }}
      />

      {/* Subtle Grain Overlay */}
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
