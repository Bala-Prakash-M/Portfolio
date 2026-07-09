import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        {/* SPEC SHEET BLOCK */}
        <motion.div variants={blockVariants} className="space-y-5">
          <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            THIS PORTFOLIO
          </h4>
          <div className="space-y-2 max-w-md font-mono text-[12px]">
            {[
              { label: "Framework", val: "Next.js" },
              { label: "Runtime", val: "Bun" },
              { label: "Language", val: "TypeScript" },
              { label: "Styling", val: "Tailwind CSS" },
              { label: "Animation", val: "Framer Motion" },
              { label: "Deployment", val: "Vercel" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-baseline border-b border-zinc-100 pb-1"
              >
                <span className="text-zinc-400 font-normal">{spec.label}</span>
                <span className="text-zinc-800 font-medium text-right">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RUNTIME METADATA INFO BLOCK */}
        <motion.div variants={blockVariants} className="space-y-5">
          <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            INFO
          </h4>
          <div className="space-y-2 max-w-md font-mono text-[12px]">
            {[
              { label: "Version", val: "v1.0.0" },
              { label: "Updated", val: "July 2026" },
              { label: "Status", val: "Open to Opportunities", isStatus: true },
            ].map((info) => (
              <div
                key={info.label}
                className="flex justify-between items-baseline border-b border-zinc-100 pb-1"
              >
                <span className="text-zinc-400 font-normal">{info.label}</span>
                <span
                  className={`font-medium text-right ${info.isStatus ? "text-[#B3533B]" : "text-zinc-800"}`}
                >
                  {info.val}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* HORIZONTAL RULE */}
      <motion.div
        variants={lineVariants}
        className="w-full h-[1px] bg-zinc-200/80 origin-left"
      />

      {/* ====================================================================
          FOOTER SIGNATURE STRIP
         ==================================================================== */}
      <motion.div
        variants={blockVariants}
        className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-zinc-400 text-xs font-mono"
      >
        <div className="space-y-0.5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
            Designed & Engineered by
          </p>
          <p className="text-[13px] font-sans font-medium text-zinc-900 tracking-tight">
            Bala Prakash
          </p>
        </div>
        <div className="text-[12px] font-medium text-zinc-400 pr-1 pt-2 sm:pt-0">
          © 2026
        </div>
      </motion.div>
    </>
  );
}
