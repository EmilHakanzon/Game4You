"use client";

import DropDown from "@/ui/dropdown";
import LogoNav from "@/ui/logoNav";
import { SearchBar } from "@/ui/searchbar";

export default function Navbar() {
  return (
    <header className="bg-[#1E293B] px-4 py-2 shadow-md top-0 w-full fixed h-20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo */}
        <LogoNav />
        {/* Search */}
        <SearchBar />
        {/* Dropdown */}
        <DropDown />
        {/* Konto-knapp */}
        <div className="w-8 h-8 bg-purple-600 rounded-md" />
      </div>
    </header>
  );
}
