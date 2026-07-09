"use client";

import { useState } from "react";
import type { Variants } from "framer-motion";
import { selectedWork, Project } from "./data";
import SectionHeader from "@/components/shared/components/SectionHeading";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(selectedWork[0]);

  

  return (
    <section className="w-full pt-16 pb-6 px-6 md:px-8 max-w-7xl mx-auto border-t border-zinc-200/60 bg-[#FAF9F6] text-zinc-900 select-none">

      <SectionHeader title="3. Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ====================================================================
            LEFT PANEL: PERMANENT PROJECT NAVIGATOR
           ==================================================================== */}
        <LeftPart activeProject={activeProject} setActiveProject={setActiveProject}/>

        {/* ====================================================================
            RIGHT PANEL: PROJECT DETAILS INLINE EDITOR VIEW
           ==================================================================== */}
        <RightPart activeProject={activeProject} />

      </div>
    </section>
  );
}