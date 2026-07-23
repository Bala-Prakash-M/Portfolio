import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiGit,
  SiBun,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { TbApi } from "react-icons/tb";

interface SkillItem {
  name: string;
  desc: string;
  icon:
    | React.ComponentType<{ className?: string }>
    | ((props: { className?: string }) => React.JSX.Element);
  brandColor: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      {
        name: "JavaScript",
        desc: "ES6+ scripting engine",
        icon: SiJavascript,
        brandColor: "text-[#F7DF1E]",
      },
      {
        name: "TypeScript",
        desc: "Safer and scalable code",
        icon: SiTypescript,
        brandColor: "text-[#3178C6]",
      },
      {
        name: "Java",
        desc: "Object-oriented core systems",
        icon: SiOpenjdk,
        brandColor: "text-[#007396]",
      },
      {
        name: "C/C++",
        desc: "Low-level system runtime",
        icon: SiCplusplus,
        brandColor: "text-[#00599C]",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        desc: "Building dynamic user interfaces",
        icon: SiReact,
        brandColor: "text-[#61DAFB]",
      },
      // HAND-CRAFTED LAG-FREE NEXT.JS SVG PATH
      {
        name: "Next.js",
        desc: "Server-optimized product stacks",
        icon: (props) => (
          <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            {/* Official precise logomark geometry paths */}
            <path d="M64 0C28.66 0 0 28.66 0 64s28.66 64 64 64 64-28.66 64-64S99.34 0 64 0zm21.32 94.83L51.84 51.52V94.8h-9.33V33.2h9.33l33.43 43.18V33.2h9.33v61.63h-9.28z" />
            <path d="M82.25 76.51l-9.33-12.04v30.33h9.33V76.51z" />
          </svg>
        ),
        brandColor: "text-black",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first design architecture",
        icon: SiTailwindcss,
        brandColor: "text-[#06B6D4]",
      },
      {
        name: "Framer Motion",
        desc: "Tactile web physics curves",
        icon: SiFramer,
        brandColor: "text-[#0055FF]",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        desc: "Event-driven platform scale",
        icon: SiNodedotjs,
        brandColor: "text-[#5FA41C]",
      },
      {
        name: "Express.js",
        desc: "Building backend services",
        icon: SiExpress,
        brandColor: "text-zinc-500",
      },
      {
        name: "REST APIs",
        desc: "Connecting applications",
        icon: TbApi,
        brandColor: "text-[#009688]",
      },
      {
        name: "Auth & OAuth",
        desc: "Secure user authentication",
        icon: SiJsonwebtokens,
        brandColor: "text-[#D63AFF]",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MongoDB",
        desc: "Document database",
        icon: SiMongodb,
        brandColor: "text-[#47A248]",
      },
      {
        name: "PostgreSQL",
        desc: "Reliable relational database",
        icon: SiPostgresql,
        brandColor: "text-[#4169E1]",
      },
      {
        name: "Prisma ORM",
        desc: "Simplified database access",
        icon: SiPrisma,
        brandColor: "text-[#2D3748]",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git",
        desc: "Version control",
        icon: SiGit,
        brandColor: "text-[#F05032]",
      },
      // HAND-CRAFTED LAG-FREE GITHUB SVG PATH
      {
        name: "GitHub",
        desc: "Code collaboration",
        icon: (props) => (
          <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
        brandColor: "text-black",
      },
      {
        name: "Bun",
        desc: "Ultra-fast modern runtime execution",
        icon: SiBun,
        brandColor: "text-[#FBF0DF] bg-zinc-950 rounded-full p-[1px]",
      },
      // HAND-CRAFTED LAG-FREE VERCEL SVG PATH
      {
        name: "Vercel",
        desc: "Web application deployment",
        icon: (props) => (
          <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M24 22.525H0L12 1.475l12 21.05z" />
          </svg>
        ),
        brandColor: "text-[#14B8A6]",
      },
      {
        name: "Render",
        desc: "Cloud hosting platform",
        icon: SiRender,
        brandColor: "text-[#46E3B7]",
      },
      {
        name: "Postman",
        desc: "API testing",
        icon: SiPostman,
        brandColor: "text-[#FF6C37]",
      },
    ],
  },
];

export default skillGroups;