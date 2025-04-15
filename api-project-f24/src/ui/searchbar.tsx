"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  return (
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
  );
};

export default SearchBar;
