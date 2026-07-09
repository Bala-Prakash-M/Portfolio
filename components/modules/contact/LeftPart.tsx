import { motion, Variants } from "framer-motion";
import SocialButtons from "./SocialButtons";


const blockVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeftPart() {
  return (
<div className="w-full space-y-6">      {/* 1. LEFT PANEL GROUP */}
      <div className="lg:col-span-6 space-y-6 w-full">
        {/* CASCADING SEGMENT 2: INTRO PARAGRAPH TEXT */}
        <motion.p
          variants={blockVariants}
          className="text-zinc-600 text-[15px] md:text-base leading-relaxed tracking-wide font-normal max-w-xl"
        >
          Whether {"you're"}{" "}
          <span className="text-zinc-950 font-medium">
            reaching out for an opportunity
          </span>
          , a <span className="text-zinc-950 font-medium">collaboration</span>,
          or simply a{" "}
          <span className="text-zinc-950 font-medium">
            conversation about tech
          </span>
          ,{" "}
          <span className="text-[#B3533B] font-semibold">
            {"I'd"} be happy to hear from you.
          </span>
        </motion.p>

        {/* CASCADING SEGMENT 3: ACCENT SOCIAL CHANNELS BUTTONS */}
        <motion.div variants={blockVariants}>
          <SocialButtons />
        </motion.div>
      </div>

      
    </div>
  );
}
