"use client";
import { ChevronDown, Loader2 } from "lucide-react";
import { useSearchStore } from "../store/searchState";
import { useState } from "react";

const dropdownOptions = ["Games", "Companies", "Studios"];

export const SearchBar = () => {
  const { input, setInput, handleSearch, clearSearch } =
      useSearchStore();
  const [showFilter, setShowFilter] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSelect = (option: string) => {
    setShowFilter(false);
  };

  const handleSearchWithLoading = async () => {
    if (!input.trim()) return;
    setIsSearching(true);
    try {
      await handleSearch();
    } catch (error) {
      console.error("failed to search...", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 w-full relative pl-[250px]">
      {/* Filter Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="text-[#3B82F6] cursor-pointer hover:bg-[#1b2435] transition"
        >
          <ChevronDown size={16} />
        </button>
        {showFilter && (
          <div className="absolute top-full left-0 mt-2 bg-purple-800 text-white rounded shadow-md z-10 min-w-[150px]">
            {dropdownOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option as any)}
                className="block w-full text-left px-4 py-2 hover:bg-purple-600"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Input */}
      <div className="flex flex-col w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);

            if (value.trim() === "") {
              clearSearch();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchWithLoading();
            }
          }}
          placeholder={`Search for ...`} 
          className="px-4 py-2 rounded bg-purple-600 text-white w-full"
        />
        {isSearching && (
          <Loader2 className="w-5 h-5 text-blue-400 animate-spin absolute right-[230px] mt-2" />
        )}
      </div>
    </div>
  );
};
