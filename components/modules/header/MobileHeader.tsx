import { motion } from "framer-motion";

interface MobileHeaderProps {
  setMenuOpen(menuOpen: boolean): void
  onNavigate: (item: string) => void
}

export default function MobileHeader({ setMenuOpen, onNavigate }: MobileHeaderProps) {
  const navItems = ["About", "Experience", "Projects", "Contact", "Resume"];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      // Frosted glass overlay taking up the whole screen
      className="fixed inset-0 z-50 flex flex-col bg-[#FAF9F6]/95 backdrop-blur-2xl sm:hidden pt-32 px-8 pb-12"
    >
      <div className="flex flex-col h-full justify-between">
        {/* Top: Header Nav Links */}
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              onClick={() => {
                setMenuOpen(false)
                onNavigate(item);
              }} // Close menu when a link is clicked
              className="text-3xl font-bold tracking-tight text-zinc-900 border-b border-zinc-200/50 pb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Bottom: Side Nav (Socials) */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400">
            Connect
          </span>
          <div className="flex items-center gap-8 text-zinc-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-zinc-950 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
