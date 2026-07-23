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

export const experiences: ExperienceItem[] = [
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