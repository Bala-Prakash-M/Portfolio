"use client";

import SectionHeading from "@/components/shared/components/SectionHeading";
import Skills from "@/components/modules/about/Skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 w-full pt-4 pb-24 px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Minimized top padding to pt-4 to virtually eliminate the gap to the hero section */}
      <SectionHeading title="Who I am?" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-start">
        {/* LEFT COLUMN: Clean, Borderless Typography (7 Columns wide) */}
        <div className="lg:col-span-7 space-y-8 text-zinc-600 tracking-wide select-none">
          {/* 1. THE HERO HOOK: Big, high-impact typographic statement */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-800">
              {"I'm "}
              <span className="font-semibold text-zinc-950">Bala Prakash</span>
              {", a third-year IT student building software that's "}
              <span className="font-medium text-zinc-950 underline decoration-[#B3533B]/30 decoration-2 underline-offset-4">
                reliable
              </span>
              {", "}
              <span className="font-medium text-zinc-950 underline decoration-[#B3533B]/30 decoration-2 underline-offset-4">
                scalable
              </span>
              {", and "}
              <span className="font-medium text-zinc-950 underline decoration-[#B3533B]/30 decoration-2 underline-offset-4">
                genuinely enjoyable to use.
              </span>
            </p>
          </div>

          {/* 2. THE CONTEXT SUBGRID: Breaks the text into horizontal scannable blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
            <div className="space-y-2">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Execution
              </h4>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
                Through personal projects and freelance work, {"I've"} shipped{" "}
                <span className="font-medium text-zinc-950">
                  production-ready applications
                </span>
                {
                  " and collaborated with real clients while maintaining an emphasis on "
                }
                <span className="font-medium text-zinc-950">
                  clean architecture
                </span>
                .
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Core Philosophy
              </h4>
              <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
                My work centers around{" "}
                <span className="font-medium text-zinc-950">
                  full-stack product engineering
                </span>
                {
                  "—combining scalable backend mechanics with responsive, tactile user interfaces."
                }
              </p>
            </div>
          </div>

          {/* 3. THE ENGINEERING MANIFESTO: Structural callout anchor */}
          {/* 3. THE ENGINEERING MANIFESTO: Structural callout anchor */}
          <div className="pt-4 border-t border-zinc-100">
            <p className="font-mono text-[12px] md:text-[13px] text-zinc-500 leading-relaxed">
              <span className="text-[#B3533B] font-bold font-sans">→</span>{" "}
              Every project teaches me something new about{" "}
              <span className="text-zinc-950 font-semibold">architecture</span>,{" "}
              <span className="text-zinc-950 font-semibold">performance</span>,
              and{" "}
              <span className="text-zinc-950 font-semibold">
                building better software
              </span>
              .
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Minimalist Quote Placement (5 Columns wide) */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-6 lg:pt-12 lg:pl-12 border-t border-zinc-100 lg:border-t-0 lg:border-l lg:border-zinc-200/60">
          <blockquote className="space-y-3">
            <p className="text-zinc-400 italic text-lg sm:text-xl font-light leading-relaxed tracking-wide select-none">
              “My destination is no longer a place, rather a new way of seeing.”
            </p>
            <footer className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B3533B]/70 select-none">
              — Marcel Proust
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Skills rendered underneath */}
      <Skills />
    </section>
  );
}
