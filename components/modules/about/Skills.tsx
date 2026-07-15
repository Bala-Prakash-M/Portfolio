"use client";

import React from "react";
import skillGroups from "./data";

export default function Skills() {
  return (
    <div className="mt-16 pt-8 border-t border-zinc-200/50">
      {/* Editorial Timeline Matrix Wrapper */}
      <div className="relative border-l border-zinc-100 pl-4 md:pl-8 space-y-8 max-w-5xl">
        {skillGroups.map((group) => (
          <div 
            key={group.category} 
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 relative"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[21px] md:-left-[37px] top-[14px] w-2 h-2 rounded-full bg-zinc-200 border border-white" />

            {/* CATEGORY BLOCK */}
            <div className="sm:w-1/4 shrink-0 pt-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#B3533B]">
                {group.category}
              </span>
            </div>

            {/* CHIPS CANVAS */}
            <div className="sm:w-3/4 flex flex-wrap gap-2">
              {group.items.map((skill) => {
  const Icon = skill.icon;
  return (
    <div
      key={skill.name}
      className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border border-zinc-200/70 text-zinc-800 cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all duration-150 ease-out md:hover:-translate-y-[1.5px] md:hover:border-zinc-300 md:hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
    >
      {/* FIXED: Removed inline 'style' prop and appended skill.brandColor straight into the className string */}
      <Icon className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 md:group-hover:scale-105 ${skill.brandColor}`} />
      
      <span className="font-mono text-[12.5px] font-medium tracking-tight text-zinc-700 md:group-hover:text-zinc-950 transition-colors duration-150">
        {skill.name}
      </span>

      {/* Tooltip */}
      <span className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-95 opacity-0 pointer-events-none transition-all duration-150 origin-bottom whitespace-nowrap px-2.5 py-1.5 rounded bg-zinc-950 text-white text-[10px] font-mono tracking-wide shadow-md group-hover:opacity-100 group-hover:scale-100 z-50">
        {skill.desc}
      </span>
    </div>
  );
})}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}