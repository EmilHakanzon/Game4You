"use client";

import DropDown from "@/ui/dropdown";
import LogoNav from "@/ui/logoNav";
import SearchBar from "@/ui/searchbar";
import useLoadingStore from "../../../store/LoadingDelay";
import { motion } from "framer-motion";

export default function Navbar() {
  const isLoaded = useLoadingStore((state) => state.isLoaded);

  if (!isLoaded) return null;
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.75 }}
    >
      <header className="bg-[#1E293B] px-4 py-2 shadow-md top-0 w-full fixed h-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          {/* Logo */}
          <LogoNav />
          {/*Search*/}
          <SearchBar />
          {/* Dropdown */}
          <DropDown />
          {/* Konto-knapp */}
          <div className="w-8 h-8 bg-purple-600 rounded-md" />
        </div>
      </header>
    </motion.nav>
  );
}
