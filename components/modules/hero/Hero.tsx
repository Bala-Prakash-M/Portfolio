"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroHeadline from "./HeroHeadline";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#FAF9F6] text-zinc-800 flex flex-col justify-between p-6 md:p-8 select-none">
      <HeroBackground />

      {/* 1. GLOBAL NAVIGATION HEADER LAYER */}
      <header className="relative z-20 w-full max-w-7xl mx-auto flex justify-center items-center py-4">
        <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-wide text-zinc-500 font-medium">
          {["Work", "About", "Experience", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-zinc-900 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </header>

      {/* 2. CENTER STAGE: SYSTEM TYPOGRAPHY & CALL TO ACTION */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center py-12 space-y-6">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B3533B] uppercase">
            {"Full stack developer"}
          </span>
          {/* A tiny, fixed geometric anchor */}
          <div className="w-8 h-[1px] bg-[#B3533B]/30" />
        </div>

        <HeroHeadline />

        {/* UPGRADE 2 & 3: Shifted text to zinc-700 for contrast, and pt-2 to pt-6 for breathing room */}
        <p
          className="
    text-zinc-600 
    text-sm md:text-base 
    max-w-md mx-auto 
    leading-relaxed 
    font-normal 
    pt-6 
    tracking-wide
  "
        >
          {
            "I build products with clean architecture, scalable backend systems, and an obsessive focus on the quality of every interaction."
          }
        </p>

        {/* Action Button Layout */}
        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Action Button */}
          <button
            className="
              w-full sm:w-auto px-6 py-3 rounded-lg font-sans text-xs font-semibold tracking-wide
              bg-zinc-900 text-[#FAF9F6] shadow-md shadow-zinc-900/10
              hover:bg-zinc-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2
            "
          >
            {"View My Work"}
            <svg
              className="w-3.5 h-3.5 text-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>

          {/* Secondary Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto px-6 py-3 rounded-lg font-sans text-xs font-semibold tracking-wide
              bg-zinc-100/90 text-zinc-800 border border-zinc-200/80 shadow-sm backdrop-blur-sm
              hover:bg-zinc-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2
            "
          >
            <svg
              className="w-4 h-4 text-zinc-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {"View Resume"}
          </a>
        </div>
      </div>

      {/* 3. RIGHT FLOATING SIDEBAR */}
      <aside className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-6 text-zinc-500">
        <div className="w-px h-12 bg-zinc-300" />
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-950 transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-950 transition-colors block"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="mailto:your@email.com"
          className="hover:text-zinc-950 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </aside>

      {/* 4. BASE INTERFACE ROW: SCROLL CONTEXT */}
      <footer className="relative z-20 w-full pt-8 pb-4 px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto border-t border-zinc-200" />
      </footer>
    </section>
  );
}
