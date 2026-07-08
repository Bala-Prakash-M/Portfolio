import { motion } from "framer-motion";
import { useId } from "react";
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
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative w-full text-left pt-5 pb-6 border-b border-zinc-200/80 flex items-start justify-between outline-none transition-colors"
          >
            {/* Active Indicator Slide Overlay */}
            {isActive && (
              <motion.div
                layoutId={`indicator-${layoutGroupId}`}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#B3533B]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Left Structural Metadata Package */}
            <div className="flex gap-6 items-start pl-4 transition-transform duration-300 ease-[0.16,1,0.3,1] group-hover:translate-x-1">
              <span
                className={`font-mono text-[11px] font-bold tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-[#B3533B]"
                    : "text-zinc-400 group-hover:text-zinc-600"
                }`}
              >
                {project.index}
              </span>

              <div className="space-y-1">
                <h3
                  className={`text-base font-medium tracking-tight transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-950"
                      : "text-zinc-600 group-hover:text-zinc-950"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-[12px] font-normal tracking-wide">
                  {project.shortCategory}
                </p>
              </div>
            </div>

            {/* Right Structural Metadata Package (Year Anchor) */}
            <div className="font-mono text-[11px] font-medium text-zinc-400 pr-2 pt-1 transition-opacity group-hover:opacity-100">
              {project.year}
            </div>
          </button>
        );
      })}
    </div>
  );
}
