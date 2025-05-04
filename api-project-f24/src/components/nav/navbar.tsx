"use client";

import DropDown from "@/ui/dropdown";
import LogoNav from "@/ui/logoNav";
import { SearchBar } from "@/ui/searchbar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // usePathname används för att hämta den aktuela sidan path
  // sedan så säkerställer den att searchbar bara rederas på home
  const pathname = usePathname();

  return (
    <header className="bg-[#1E293B] px-4 py-2 shadow-md top-0 w-full fixed h-20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <LogoNav />
        {/* SearchBar */}
        <div className="flex-1 flex justify-center">
          {pathname === "/" && <SearchBar />}
        </div>
        {/* Dropdown */}
        <div className="flex items-center pr-5">
          <DropDown />
          {/* Konto-knapp */}
          <img src="avatar.png" alt="gamingavatar" 
          className="object-contain w-12 h-12"/>
        </div>
      </div>
    </header>
  );
}
