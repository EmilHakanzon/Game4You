"use client";
import { ChevronDown, Loader2 } from "lucide-react";
import { useSearchComponent } from "@/components/search/searchComponent";

export const SearchBar = () => {
  const {
    input,
    setInput,
    handleSearchWithLoading,
    clearSearch,
    showFilter,
    setShowFilter,
    isSearching,
    dropdownOptions,
    handleSelect,
  } = useSearchComponent();

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 w-full relative pl-[200px]">
  
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
          placeholder="Search for a game"
          className="px-4 py-2 rounded bg-purple-600 text-white w-full"
        />
        {isSearching && (
          <Loader2 className="w-5 h-5 text-blue-400 animate-spin absolute right-[230px] mt-2" />
        )}
      </div>
    </div>
  );
};
