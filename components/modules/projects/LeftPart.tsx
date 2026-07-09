"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { selectedWork, Project } from "./data";

interface LeftPartProps {
  activeProject: Project;
  setActiveProject: (project: Project) => void;
}

export default function LeftPart({ activeProject, setActiveProject }: LeftPartProps) {
  const layoutGroupId = useId();

  return (
    <div className="lg:col-span-5 flex flex-col w-full border-t border-zinc-200/80">
      {selectedWork.map((project) => {
        const isActive = activeProject.id === project.id;

        return (
          <motion.div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative w-full pt-5 pb-5 border-b border-zinc-200/80 flex items-start justify-between outline-none select-none cursor-pointer"
          >
            {/* Active Indicator Slide Overlay */}
            {isActive && (
              <motion.div
                layoutId={`indicator-${layoutGroupId}`}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#B3533B]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* INTERACTIVE CLICK ZONE: Info block layout */}
            <div 
              className="flex gap-6 items-start pl-4 flex-1 transition-transform duration-300 ease-[0.16,1,0.3,1] group-hover:translate-x-1"
            >
              <span
                className={`font-mono text-[11px] font-bold tracking-wider transition-colors duration-200 pt-0.5 ${
                  isActive ? "text-[#B3533B]" : "text-zinc-400 group-hover:text-zinc-600"
                }`}
              >
                {project.index}
              </span>

              <div className="space-y-0.5">
                <h3
                  className={`text-base font-medium tracking-tight transition-colors duration-200 ${
                    isActive ? "text-zinc-950" : "text-zinc-600 group-hover:text-zinc-950"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-[12px] font-normal tracking-wide">
                  {project.shortCategory}
                </p>
              </div>
            </div>

            {/* STATIC RIGHT COLUMN: Stacked year value and action icons */}
            <div className="flex flex-col items-end gap-2 pr-2 shrink-0">
              {/* Structural Year Label */}
              <div className="font-mono text-[11px] font-medium text-zinc-400">
                {project.year}
              </div>

              {/* Action Links Row (Always visible and ready to be clicked) */}
              <div className="flex items-center gap-1">
                {project.githubUrl && (
                  <div className="group/btn relative">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} Source Code`}
                      className="p-1 rounded text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors block"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 pointer-events-none transition-opacity duration-100 whitespace-nowrap px-2 py-1 rounded bg-zinc-900 text-zinc-50 text-[10px] font-mono tracking-wide shadow-md group-hover/btn:opacity-100 z-50">
                      src_code
                    </span>
                  </div>
                )}

                {project.liveUrl && (
                  <div className="group/btn relative">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} Live Preview`}
                      className="p-1 rounded text-zinc-400 hover:text-[#B3533B] hover:bg-zinc-100 transition-colors block"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 pointer-events-none transition-opacity duration-100 whitespace-nowrap px-2 py-1 rounded bg-zinc-900 text-zinc-50 text-[10px] font-mono tracking-wide shadow-md group-hover/btn:opacity-100 z-50">
                      live_url
                    </span>
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
}