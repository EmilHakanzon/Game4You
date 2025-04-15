import { motion } from "framer-motion";
import { fadeIn } from "@/utility/animationCardHome";

export default function Header({ title }: { title: string }) {
  return (
    <motion.h1
      variants={fadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-2xl mb-6 pl-15 text-[#F1F5F9]"
    >
      {title}
    </motion.h1>
  );
}