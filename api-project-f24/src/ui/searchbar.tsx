"use client";
import { Loader2 } from "lucide-react";
import { useSearchComponent } from "@/components/search/searchComponent";

export const SearchBar = () => {
  const { input, setInput, handleSearchWithLoading, clearSearch, isSearching } =
    useSearchComponent();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end w-full pl-2 sm:pl-[200px]">
      <div className="flex flex-col w-full max-w-md">
        <div className="flex items-center w-full">
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
            placeholder="Search game..."
            className="p-1 rounded-lg bg-purple-600 text-white w-full text-sm"
          />
          {isSearching === false && input.trim() !== "" && (
            <button
              onClick={clearSearch}
              className="ml-2 text-white bg-red-500 rounded px-2 py-1 text-xs transition-colors hover:bg-red-700"
            >
              X
            </button>
          )}
          {isSearching && (
            <Loader2 className="ml-2 w-5 h-5 text-blue-400 animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};
