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
    const shouldClear = latest > triggerPoint;

    if (shouldClear !== fogCleared) {
      setFogCleared(shouldClear);
    }
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#EFEBE6]">
      {/* GPU-ACCELERATED JELLYFISH PULSING BLOB */}
      <motion.div
        /* SMOOTH INITIAL APPEARANCE: Fades in gracefully from 0 to 0.6 on page load */
        initial={{ opacity: 0, scale: 0.85 }}
        className="absolute top-0 left-0 w-[40vw] h-[40vw] min-w-[380px] min-h-[380px] rounded-full blur-[35px] sm:blur-[50px] opacity-60 will-change-transform"
        animate={{
          /* 1. ORIGINAL DRIFTING PATH */
          x: ["0vw", "60vw", "40vw", "0vw"],
          y: ["0vh", "30vh", "60vh", "0vh"],

          /* 2. PRONOUNCED PULSE */
          scaleX: [1, 0.72, 0.95, 0.68, 0.88, 1],
          scaleY: [1, 0.92, 0.70, 0.94, 0.75, 1],

          /* 3. ASYMMETRIC JELLYFISH BELL MORPHING */
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "68% 32% 60% 40% / 40% 60% 35% 65%",
            "38% 62% 35% 65% / 65% 35% 60% 40%",
            "58% 42% 62% 38% / 45% 55% 42% 58%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],

          /* 4. SCROLL FADE OUT (Fades out when scrolled, stays 0.60 when active) */
          opacity: fogCleared ? 0 : 0.60,

          /* 5. LIGHTENED & SOFTER 4-COLOR PALETTE (No dark or heavy muddy spots) */
          background: [
            // 1. Soft Warm Coral (Lighter, airy)
            "radial-gradient(circle, #D07058 0%, #D07058 30%, transparent 70%)",

            // 2. Gentle Rose Pink (Soft blush tone)
            "radial-gradient(circle, #C45B7D 0%, #C45B7D 30%, transparent 70%)",

            // 3. Light Lavender Violet (No dark indigo shadow)
            "radial-gradient(circle, #8B70C8 0%, #8B70C8 30%, transparent 70%)",

            // 4. Periwinkle Blue (Airy and subtle)
            "radial-gradient(circle, #6F78C5 0%, #6F78C5 30%, transparent 70%)",

            // 5. Seamless Loop back to Soft Warm Coral
            "radial-gradient(circle, #D07058 0%, #D07058 30%, transparent 70%)",
          ],
        }}
        style={{
          transform: "translateZ(0)",
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          scaleY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          background: { duration: 24, repeat: Infinity, ease: "linear" },
          /* Gentle initial fade-in transition */
          opacity: { duration: 1.6, ease: "easeOut" },
          scale: { duration: 1.6, ease: "easeOut" },
        }}
      />

      {/* SUBTLE GRAIN OVERLAY */}
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