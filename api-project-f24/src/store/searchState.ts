import { create } from "zustand";
import { searchFromIGDB } from "@/app/api/lib/igdbSearh";
import { Game } from "@/types/types";

type Category = "Games" | "Companies" | "Studios";

interface SearchStore {
  input: string;
  category: Category;
  results: Game[] | null;
  fanFavorites: Game[] | null;
  searchActive: boolean;
  setInput: (val: string) => void;
  setCategory: (val: Category) => void;
  handleSearch: () => Promise<void>;
  clearSearch: () => void;
  setFanFavorites: (games: Game[]) => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  input: "",
  category: "Games",
  results: null,
  fanFavorites: null,
  searchActive: false,

  setInput: (val) => {
    const current = get().input;
    if (current === val) return;
    set({ input: val });
  },

  setCategory: (val) => set({ category: val }),

  handleSearch: async () => {
    const { input, category } = get();
    if (!input.trim()) {
      set({ searchActive: false, results: null });
      return;
    }

    const data = await searchFromIGDB(input, category);
    set({ results: data, searchActive: true });
  },

  clearSearch: () => {
    set({
      input: "",
      results: null,
      searchActive: false,
    });
  },

  setFanFavorites: (games) => set({ fanFavorites: games }),
}));