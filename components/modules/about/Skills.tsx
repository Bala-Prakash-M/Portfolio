"use client";

import React from "react";
import skillGroups from "./data";

export default function Skills() {
  return (
    <div className="w-full select-none">
      {/* EDITORIAL SECTION HEADER */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          Skills &amp; Stack
        </h3>
      </div>

      {/* MINIMALIST TYPOGRAPHIC STACK WITH INLINE ICONS */}
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-1.5">
            {/* CATEGORY TITLE */}
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#B3533B]">
              {group.category}
            </h4>

            {/* INLINE ICON LIST */}
            <div className="flex flex-wrap items-center gap-y-1 text-zinc-600 font-mono text-[13px]">
              {group.items.map((skill, index) => {
                return (
                  <React.Fragment key={skill.name}>
                    <div className="group relative inline-flex items-center gap-1.5 cursor-default">
                      {/* Tech Name */}
                      <span className="group-hover:text-zinc-950 transition-colors duration-150 font-normal">
                        {skill.name}
                      </span>

                      {/* Low-profile Tooltip */}
                      <span className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 scale-95 opacity-0 pointer-events-none transition-all duration-150 origin-bottom whitespace-nowrap px-2 py-1 rounded bg-zinc-950 text-white text-[9.5px] font-mono tracking-wide shadow-md group-hover:opacity-100 group-hover:scale-100 z-50">
                        {skill.desc}
                      </span>
                    </div>

                    {/* Separator Bullet */}
                    {index < group.items.length - 1 && (
                      <span className="mx-2 text-zinc-300 select-none">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}