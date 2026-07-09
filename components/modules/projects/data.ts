export interface EngineeringHighlight {
  label: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  shortCategory: string;
  year: string;
  meta: {
    type: string;
    team: string;
    duration: string;
  };
  overview: string;
  highlights: EngineeringHighlight[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const selectedWork: Project[] = [
  {
    id: "prod-ecommerce",
    index: "01",
    title: "Production Ecommerce",
    shortCategory: "Commerce Platform",
    year: "2026",

    meta: {
      type: "Freelance Client Project",
      team: "2 Developers",
      duration: "Mar 2026 — Apr 2026",
    },

    overview:
      "A production-ready ecommerce platform built for a real client, supporting complete shopping, checkout, and administration workflows through a scalable full-stack architecture.",

    highlights: [
      { label: "45+ REST APIs" },
      { label: "3-Role Authentication" },
      { label: "50+ Product Catalog" },
      { label: "50–67% Faster APIs" },
      { label: "Production Deployment" },
    ],

    stack: [
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Google OAuth",
      "Cloudinary",
    ],

    githubUrl: undefined,
    liveUrl: "https://teezmart-ecom-nzc.vercel.app/",
  },

  {
    id: "notebook-todo",
    index: "02",
    title: "Notebook",
    shortCategory: "Productivity Platform",
    year: "2026",

    meta: {
      type: "Personal Product",
      team: "Solo Project",
      duration: "2026",
    },

    overview:
      "A modern productivity application for organizing notebooks, notes, and tasks in one place. Designed with a clean interface and a maintainable full-stack architecture for everyday use.",

    highlights: [
      { label: "Notebook & Task Management" },
      { label: "Type-Safe Backend" },
      { label: "Prisma + PostgreSQL" },
      { label: "Responsive Design" },
      { label: "Production Deployment" },
    ],

    stack: ["React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],

    githubUrl: "https://github.com/Bala-Prakash-M/Todo-Notes",
    liveUrl: "https://todo-notes-eta.vercel.app/",
  },

  {
    id: "solana-hd-wallet",
    index: "03",
    title: "Solana HD Wallet",
    shortCategory: "Web3 Wallet",
    year: "2026",

    meta: {
      type: "Personal Web3 Project",
      team: "Solo Project",
      duration: "2026",
    },

    overview:
      "A hierarchical deterministic wallet for the Solana ecosystem that enables secure wallet generation, multi-account management, balance retrieval, and transaction workflows across multiple blockchain environments.",

    highlights: [
      { label: "Mainnet · Devnet · Testnet" },
      { label: "BIP39 HD Wallets" },
      { label: "Multi-Account Generation" },
      { label: "Secure Transaction Signing" },
      { label: "Solana RPC Integration" },
    ],

    stack: [
      "React",
      "Solana Web3.js",
      "BIP39",
      "Ed25519",
    ],

    githubUrl: "https://github.com/Bala-Prakash-M/HD-Wallet",
    liveUrl: undefined,
  },
];
