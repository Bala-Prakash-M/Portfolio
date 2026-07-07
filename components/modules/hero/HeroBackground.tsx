"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  
  const fadeOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <motion.div 
      style={{ opacity: fadeOpacity }}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#FAF9F6]"
    >
      
      {/* 1. Fluid Morphing & Drifting Keyframes (Timings Accelerated) */}
      <style>
        {`
          @keyframes fluid-drift-1 {
            0%, 100% { 
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
              transform: translate(0, 0) scale(1) rotate(0deg); 
            }
            33% { 
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              transform: translate(8vw, -8vh) scale(1.1) rotate(45deg); 
            }
            66% { 
              border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
              transform: translate(-5vw, 8vh) scale(0.9) rotate(-20deg); 
            }
          }
          @keyframes fluid-drift-2 {
            0%, 100% { 
              border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
              transform: translate(0, 0) scale(1) rotate(0deg); 
            }
            33% { 
              border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
              transform: translate(-10vw, 8vh) scale(1.2) rotate(-30deg); 
            }
            66% { 
              border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
              transform: translate(8vw, -5vh) scale(0.85) rotate(20deg); 
            }
          }
          @keyframes fluid-drift-3 {
            0%, 100% { 
              border-radius: 50% 50% 60% 40% / 40% 40% 60% 60%;
              transform: translate(0, 0) scale(1.1) rotate(0deg); 
            }
            50% { 
              border-radius: 30% 70% 40% 60% / 60% 30% 70% 40%;
              transform: translate(12vw, 5vh) scale(0.9) rotate(45deg); 
            }
          }
        `}
      </style>

      {/* 2. The Liquid Blobs */}
      <div className="absolute inset-0 mix-blend-multiply opacity-80">
        
        {/* Core Terracotta Anchor - Pushed to 6s */}
        <div 
          className="absolute top-[5%] right-[15%] w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] blur-[90px]"
          style={{
            background: 'radial-gradient(circle, #B3533B 0%, rgba(179,83,59,0) 70%)',
            animation: 'fluid-drift-1 6s ease-in-out infinite'
          }}
        />

        {/* Soft Rust Drifter - Pushed to 8s */}
        <div 
          className="absolute bottom-[5%] left-[10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #E07A5F 0%, rgba(224,122,95,0) 70%)',
            animation: 'fluid-drift-2 8s ease-in-out infinite'
          }}
        />

        {/* Warm Sand Highlight - Pushed to 5s */}
        <div 
          className="absolute top-[25%] left-[35%] w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] blur-[70px]"
          style={{
            background: 'radial-gradient(circle, #F4A261 0%, rgba(244,162,97,0) 70%)',
            animation: 'fluid-drift-3 5s ease-in-out infinite'
          }}
        />
      </div>

      {/* 3. The Molivi Grain Filter */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }} 
      />

      {/* 4. Center Typography Protection Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,249,246,0.5)_0%,transparent_80%)]" />
      
    </motion.div>
  );
}