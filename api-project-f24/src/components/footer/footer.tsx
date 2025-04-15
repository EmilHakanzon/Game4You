"use client"
import { motion } from "framer-motion";
import useLoadingStore from "../../../store/LoadingDelay";

export default function Footer() {
  const isLoaded = useLoadingStore((state) => state.isLoaded);

  if (!isLoaded) return null;
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.75 }}
    >
      <footer className="bg-[#1E293B] text-[#F1F5F9] py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Logo/Text */}
          <div className="flex items-center space-x-2">
            <img
              src="/81eb0529-e79f-4ef4-aa52-b5992be36f31.jpg"
              alt="Game4You"
              className="w-15 h-15 bg-purple-600 rounded-full"
            />
            <span className="text-sm font-light pl-1">© 2025 Game4You</span>
          </div>

          {/* Center - Links */}
          <div className="flex space-x-6 text-sm pr-20">
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              List
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Ratings
            </a>
          </div>

          {/* Right - Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/EmilJohanssonz/framework-project-f24"
              target="_blank"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
}
