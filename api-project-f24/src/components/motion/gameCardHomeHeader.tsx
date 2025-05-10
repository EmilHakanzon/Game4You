import { motion } from "framer-motion";
import { fadeIn } from "@/utility/animationCardHome";
export default function Header({ title }: { title: string }) {
  return (
    <motion.h1
      variants={fadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-center md:text-left md:pl-[60px] text-2xl font-bold mb-6 text-[#F1F5F9] stroke-2"
    >
      {title}
    </motion.h1>
  );
}
