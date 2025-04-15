"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <header className="bg-[#1E293B] px-4 py-2 shadow-md top-0 w-full fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
        {/* Logo */}
        <img
          src="/81eb0529-e79f-4ef4-aa52-b5992be36f31.jpg"
          alt="Game4You"
          className="w-15 h-15 rounded-full"
        />

        {/* Sök + dropdown */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-xl flex items-center">
            {/* Input */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for games..."
              className="w-full pl-4 pr-10 py-2 rounded-full bg-purple-600 text-[#F1F5F9] placeholder-[#F1F5F9] focus:outline-none"
            />
            {/* Sökikon */}
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F1F5F9]"
              size={18}
            />
          </div>
        </div>

        {/* Dropdown */}
        <div className="ml-1 flex items-center px-3 py-2 rounded-md text-[#3B82F6] cursor-pointer hover:bg-[#1b2435] transition">
          <span className=" text-sm">{selected}</span>
          <ChevronDown size={16} />
        </div>

        {/* Konto-knapp */}
        <div className="w-8 h-8 bg-purple-600 rounded-md" />
      </div>
    </header>
  );
}
