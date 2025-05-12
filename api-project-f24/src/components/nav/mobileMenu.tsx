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
    <div className="md:hidden bg-[#1E293B] -mt-2 transition-all duration-300 opacity-80 p-4">
      <div className="flex flex-col space-y-4">
        {/* Left: Dropdown and Avatar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DropDown />
            <img
              src="avatar.png"
              alt="gamingavatar"
              className="object-contain w-12 h-12 rounded-full"
            />
          </div>
        </div>

        {/* Right: SearchBar */}
        {pathname === "/" && (
          <div className="w-full">
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  );
}
