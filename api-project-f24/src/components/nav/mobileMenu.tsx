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
    <div className="md:hidden bg-[#1E293B] -mt-2 transition-all duration-300 opacity-90 p-4">
      <div className="flex flex-col space-y-4">
        {/* Row: Dropdown, Avatar, and SearchBar */}
        <div className="flex items-center justify-between space-x-4">
          {/* Dropdown */}
          <DropDown />

          {/* Avatar */}
          <img
            src="avatar.png"
            alt="gamingavatar"
            className="object-contain w-12 h-12 rounded-full"
          />

          {/* SearchBar */}
          {pathname === "/" && (
            <div className="flex-1">
              <SearchBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
