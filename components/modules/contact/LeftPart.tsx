"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SocialButtons from "./SocialButtons";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    /* Increased duration to 0.85s for a smoother, premium entry cadence */
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeftPart() {
  return (
    <div className="w-full flex flex-col space-y-8 select-none">
      <motion.p 
        variants={blockVariants}
        className="text-zinc-600 text-[16px] md:text-[18px] leading-relaxed tracking-wide font-normal max-w-xl"
      >
        Whether {"you're"}{" "}
        <span className="text-zinc-950 font-medium">
          reaching out for an opportunity
        </span>
        , a <span className="text-zinc-950 font-medium">collaboration</span>
        , or a{" "}
        <span className="text-zinc-950 font-medium">
          conversation about tech
        </span>
        ,{" "}
        <span className="text-[#B3533B] font-semibold">
          {"I'd"} be happy to hear from you.
        </span>
      </motion.p>

      <motion.div variants={blockVariants} className="pt-2">
        <SocialButtons />
      </motion.div>
    </div>
  );
}