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
      className="flex sm:hidden flex-col items-center justify-center gap-[4px] w-7 h-7 rounded-lg hover:bg-white/60 text-zinc-800 transition-all active:scale-95 shrink-0 will-change-transform"
      aria-label="Toggle menu"
      style={{ transform: "translateZ(0)" }} // Forces immediate GPU layer promotion
    >
      {/* TOP LINE */}
      <span
        className={`w-4 h-[1.75px] bg-current rounded-full transition-all duration-300 ease-out will-change-transform ${
          menuOpen ? "rotate-45 translate-y-[5.75px]" : ""
        }`}
      />

      {/* MIDDLE LINE */}
      <span
        className={`w-4 h-[1.75px] bg-current rounded-full transition-all duration-200 ease-out will-change-transform ${
          menuOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />

      {/* BOTTOM LINE */}
      <span
        className={`w-4 h-[1.75px] bg-current rounded-full transition-all duration-300 ease-out will-change-transform ${
          menuOpen ? "-rotate-45 -translate-y-[5.75px]" : ""
        }`}
      />
    </button>
  );
}