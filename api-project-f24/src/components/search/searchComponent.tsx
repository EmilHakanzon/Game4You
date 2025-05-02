"use client";
import { useSearchStore } from "@/store/searchState";
import { useState } from "react";

export const useSearchComponent = () => {
  const { input, setInput, handleSearch, clearSearch } = useSearchStore();
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
      console.error("Failed to search...", error);
    } finally {
      setIsSearching(false);
    }
  };

  return {
    input,
    setInput,
    handleSearchWithLoading,
    clearSearch,
    showFilter,
    setShowFilter,
    isSearching,
    handleSelect,
  };
};
