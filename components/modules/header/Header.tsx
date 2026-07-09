"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import MobileHeader from "./MobileHeader";
import HamburgerMenu from "./HamburgerMenu";

interface HeaderProps {
  onNavigate: (item: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide header on scroll down, show on scroll up, and FORCE show at the absolute bottom
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Calculate if the viewport has hit the bottom floor of the page
    const totalPageHeight = document.documentElement.scrollHeight;
    const currentViewportBottom = latest + window.innerHeight;
    
    // 5px threshold buffer to ensure it triggers cleanly on all devices/browsers
    const isAtAbsoluteBottom = currentViewportBottom >= totalPageHeight - 5;

    if (isAtAbsoluteBottom) {
      setHidden(false);
    } else if (latest > 150 && latest > previous && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 inset-x-0 z-[60] flex justify-end sm:justify-center pointer-events-none px-6 sm:px-4"
      >
        <motion.nav
          initial={{ width: 44, opacity: 0 }}
          animate={
            hidden ? { width: 44, opacity: 0 } : { width: "auto", opacity: 1 }
          }
          transition={{
            type: "spring",
            bounce: 0.22,
            duration: 0.7,
          }}
          className="pointer-events-auto overflow-hidden flex items-center gap-3 sm:gap-6 pl-2 pr-2 sm:pr-5 py-2 rounded-2xl bg-[#FAF9F6]/90 border border-white shadow-[0_4px_24px_-2px_rgba(24,24,27,0.04),0_0_40px_8px_rgba(250,249,246,0.95)]"
        >
          {/* 1. Home Button */}
          <a
            href="#"
            onClick={() => {
              setMenuOpen(false);
              onNavigate("home");
            }}
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#FAF9F6] hover:bg-white text-zinc-800 border border-white/90 shadow-sm transition-all active:scale-95 shrink-0"
            aria-label="Back to home"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            {["About", "Experience", "Projects", "Contact", "Resume"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => onNavigate(item)}
                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700 hover:text-zinc-950 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* 3. Mobile Hamburger Button */}
          <HamburgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        </motion.nav>
      </motion.div>

      {/* 4. Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <MobileHeader setMenuOpen={setMenuOpen} onNavigate={onNavigate}/>
        )}
      </AnimatePresence>
    </>
  );
}