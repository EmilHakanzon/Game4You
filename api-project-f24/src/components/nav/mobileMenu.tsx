"use client";

import DropDown from "@/ui/dropdown";
import { SearchBar } from "@/ui/searchbar";

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
}

export default function MobileMenu({ isOpen, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#1E293B] -mt-2 transition-all duration-300 opacity-80">
      <div className="flex items-center justify-between">
        {/* Left: Dropdown and Avatar */}
        <div className="flex items-center space-x-1">
          <DropDown />
          <img
            src="avatar.png"
            alt="gamingavatar"
            className="object-contain w-12 h-12 rounded-full"
          />
        </div>

        {/* Right: SearchBar */}
        {pathname === "/" && (
          <div className="flex-1">
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  );
}
