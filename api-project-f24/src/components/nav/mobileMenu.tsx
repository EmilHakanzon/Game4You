"use client";

import DropDown from "@/ui/dropdown";
import { SearchBar } from "@/ui/searchbar";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#1E293B] -mt-2 transition-all duration-300 opacity-80">
      <div className="flex items-center justify-between">
        {/* Left: Dropdown and Avatar */}
        <div className="flex items-center space-x-1">
          <DropDown />
          <Image
            src="/avatar.png"
            alt="gamingavatar"
            width={48}
            height={48}
            className="object-contain w-12 h-12 rounded-full"
          />
        </div>

        {/* Right: SearchBar */}
          <div className="flex-1">
            <SearchBar />
          </div>
      </div>
    </div>
  );
}
