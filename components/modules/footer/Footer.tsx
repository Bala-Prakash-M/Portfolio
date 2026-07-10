"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.footer
      /* SINGLE ACCELERATED TRIGGER: Replaces layout-heavy staggers with one clean, unified GPU fade */
      initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "0px" : "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: "translateZ(0)" }}
      className="w-full bg-[#111111] text-zinc-400 mt-32 pt-16 pb-8 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* TOP ROW: Large Typographic Anchor & Edition Timestamp */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
              Portfolio
            </span>
            <h2 className="text-zinc-100 text-3xl md:text-5xl tracking-tight font-medium">
              Bala Prakash M.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2 md:mb-3">
              Last updated
            </span>
            <span className="font-mono text-[12px] text-zinc-300">
              July, 2026
            </span>
          </div>
        </div>

        {/* BOTTOM ROW: The Colophon Grid (Razor-thin borders mimic print layouts) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-zinc-800 pt-10">
          {/* Spec 1 */}
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              I do
            </span>
            <span className="font-sans text-[13px] text-zinc-300">
              Full Stack Engineering
            </span>
          </div>

          {/* Spec 2 */}
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Built with
            </span>
            <span className="font-sans text-[13px] text-zinc-300 leading-relaxed">
              Next.js,
              <br />
              Typescript,
              <br />
              Tailwind,
              <br /> Framer Motion,
              <br />
              Bun
            </span>
          </div>

          {/* Spec 3 */}

          <div className="col-span-2 flex flex-col space-y-2 md:items-end text-left md:text-right">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Ready to
            </span>

            {/* Added 'leading-relaxed' to give the sentences elegant vertical spacing when they naturally wrap on small screens */}
            <span className="font-sans text-[13px] text-zinc-300 leading-relaxed">
              Software Engineering Internships.
              <br /> Freelance Products.
              <br /> Product Collaborations.
            </span>
          </div>
        </div>

        {/* COPYRIGHT BASELINE */}
        <div className="mt-16 md:mt-24 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </motion.footer>
  );
}
