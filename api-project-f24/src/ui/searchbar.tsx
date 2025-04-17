"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { searchFromIGDB } from "@/app/api/lib/igdbSearh";
import { SearchResults } from "@/ui/searchREsult";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<"Games" | "Companies" | "Studios">(
    "Games",
  );
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!search) return;
    try {
      const data = await searchFromIGDB(search, selected);
      setResults(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4">

      {/* Sökfält */}
      <div className="relative w-full max-w-xl flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={`Search for ${selected.toLowerCase()}...`}
          className="w-full pl-4 pr-10 py-2 rounded-full bg-purple-600 text-[#F1F5F9] placeholder-[#F1F5F9] focus:outline-none"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F1F5F9] cursor-pointer"
          size={18}
          onClick={handleSearch}
        />
      </div>
      {/* Checkbox-grupp */}
      <div className="flex gap-4 my-4">
        {["Games", "Companies", "Studios"].map((option) => (
          <label key={option} className="text-white flex gap-2 items-center">
            <input
              type="radio"
              name="category"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option as any)}
              className="accent-purple-500"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Resultat */}
      {results.length > 0 && (
        <div className="w-full max-w-6xl">
          <SearchResults results={results} category={selected} />
        </div>
      )}
    </div>
  );
};
