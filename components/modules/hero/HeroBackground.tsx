"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroFluidBackground() {
  const { scrollY } = useScroll();
  
  // Fades the entire liquid background to 0 opacity after 800px of scrolling
  const fadeOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <motion.div 
      style={{ opacity: fadeOpacity }}
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#FAF9F6]"
    >
      
      {/* 1. Fluid Wandering Keyframes */}
      <style>
        {`
          @keyframes fluid-drift-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15vw, -15vh) scale(1.1); }
            66% { transform: translate(-10vw, 15vh) scale(0.9); }
          }
          @keyframes fluid-drift-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-20vw, 15vh) scale(1.2); }
            66% { transform: translate(15vw, -10vh) scale(0.85); }
          }
          @keyframes fluid-drift-3 {
            0%, 100% { transform: translate(0, 0) scale(1.1); }
            50% { transform: translate(25vw, 10vh) scale(0.9); }
          }
        `}
      </style>

      {/* 2. The Liquid Blobs */}
      <div className="absolute inset-0 mix-blend-multiply opacity-80">
        
        {/* Core Terracotta Anchor */}
        <div 
          className="absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] min-w-[600px] min-h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #B3533B 0%, rgba(179,83,59,0) 70%)',
            animation: 'fluid-drift-1 25s ease-in-out infinite'
          }}
        />

        {/* Soft Rust Drifter */}
        <div 
          className="absolute bottom-[-10%] left-[5%] w-[60vw] h-[60vw] min-w-[700px] min-h-[700px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, #E07A5F 0%, rgba(224,122,95,0) 70%)',
            animation: 'fluid-drift-2 30s ease-in-out infinite'
          }}
        />

        {/* Warm Sand Highlight */}
        <div 
          className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] min-w-[500px] min-h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #F4A261 0%, rgba(244,162,97,0) 70%)',
            animation: 'fluid-drift-3 22s ease-in-out infinite'
          }}
        />
      </div>

      {/* 3. The Molivi Grain Filter (Crucial for the high-end look) */}
      {/* This renders an ultra-fine SVG static noise over the entire canvas to unify the gradients */}
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