"use client";

import DropDown from "@/ui/dropdown";
import LogoNav from "@/ui/logoNav";
import { SearchBar } from "@/ui/searchbar";
import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenu from "@/components/nav/mobileMenu";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="bg-[#1E293B] px-4 py-2 shadow-md top-0 w-full fixed h-20 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <LogoNav />

        {/* SearchBar for Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <SearchBar />
        </div>

        {/* Dropdown and Avatar for Desktop */}
        <div className="hidden md:flex items-center pr-5">
          <DropDown />
          <Image
            src="/avatar.png"
            alt="gamingavatar"
            width={48}
            height={48}
            className="object-contain w-12 h-12"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
}
