interface HamburgerMenuProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export default function HamburgerMenu({
  menuOpen,
  setMenuOpen,
}: HamburgerMenuProps) {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex sm:hidden items-center justify-center w-7 h-7 rounded-lg hover:bg-white/60 text-zinc-800 transition-all active:scale-95 shrink-0"
      aria-label="Toggle menu"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.2"
      >
        {menuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
