"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeading from "@/components/shared/components/SectionHeading";

interface MetadataItem {
  label: string;
  value: string;
}

interface ExperienceItem {
  role: string;
  period: string;
  meta: MetadataItem[];
  bullets: React.ReactNode[];
  stack: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Freelance Full-Stack Developer",
      period: "Mar 2026 — Apr 2026",
      meta: [
        { label: "Engagement", value: "Freelance Client" },
        { label: "Project", value: "Production Ecommerce" },
        { label: "Team", value: "2 Developers" },
        { label: "Location", value: "Remote · Tamil Nadu, India" }
      ],
      bullets: [
        <>
          Delivered a <span className="text-zinc-950 font-semibold">production-ready ecommerce platform</span> for a real client, leading end-to-end development across the frontend, backend, database design, deployment, and post-launch maintenance.
        </>,
        <>
          Designed scalable backend services for authentication, cart workflows, checkout, payments, order management, and role-based access using <span className="text-zinc-950 font-medium">RESTful API architecture</span>.
        </>,
        <>
          Developed over <span className="text-zinc-950 font-semibold font-mono">90%</span> of the backend codebase while collaborating in a two-developer team using <span className="text-zinc-950 font-medium">Git-based branching</span> and version control workflows.
        </>,
        <>
          Improved backend API response times by <span className="text-zinc-950 font-semibold font-mono">50–67%</span> (<span className="text-zinc-950 font-semibold font-mono">600ms → 200–300ms</span>) through target <span className="text-zinc-950 font-medium">database query optimization</span> and backend performance tuning.
        </>
      ],
      stack: [
        "React",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "JWT",
        "Google OAuth",
        "Cloudinary"
      ]
    }
  ];

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="experience"
      className="relative z-10 w-full pt-4 pb-24 px-6 md:px-8 max-w-7xl mx-auto border-t border-zinc-100 mt-12 select-none"
    >
      <SectionHeading title="2. Experience" />

      <motion.div 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-6 space-y-20"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={`${exp.role}-${index}`}
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT COLUMN: Period timeline marker + Metadata block grouped safely together */}
            <div className="lg:col-span-3 space-y-6 pt-1">
              
              {/* Timeline marker */}
              <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#B3533B]">
                {exp.period}
              </div>

              {/* Vertical Metadata Stream for clean side scanning */}
              <div className="space-y-3.5 pt-1 border-t border-zinc-100 lg:border-t-0 lg:pt-0">
                {exp.meta.map((item) => (
                  <div key={item.label} className="space-y-0.5">
                    <div className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                      {item.label}
                    </div>
                    <p className="text-[12px] font-medium text-zinc-700 tracking-wide leading-tight">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Execution Profile Core (Role, Narrative Case Bulletins, Stack Arrays) */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* Role Context Profile */}
              <div>
                <h3 className="text-xl font-normal text-zinc-950 tracking-wide leading-tight">
                  {exp.role}
                </h3>
              </div>

              {/* Structured Work Bulletins Container (Max-W-2xl for optimal character reading bounds) */}
              <div className="max-w-2xl space-y-3.5">
                {exp.bullets.map((bullet, idx) => (
                  <p 
                    key={idx} 
                    className="text-zinc-600 text-base leading-relaxed font-normal tracking-wide text-justify"
                  >
                    {bullet}
                  </p>
                ))}
              </div>

              {/* Architecture Deployment Stack Chips */}
              {/* Technology Architecture Section */}
              <div className="space-y-2.5 pt-4">
                <div className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                  Tech Stack
                </div>
                
                <div className="flex flex-wrap gap-1.5 max-w-2xl">
                  {exp.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md bg-white border border-zinc-200/80 font-mono text-[10px] font-medium text-zinc-600 tracking-tight shadow-[0_1px_3px_rgba(0,0,0,0.02)] select-none transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}