import { create } from "zustand";
import { searchFromIGDB } from "@/app/api/lib/igdbSearh";
import { Game } from "@/types/types";

interface SearchStore {
  input: string;
  results: Game[] | null;
  selectedGame: Game | null;
  searchActive: boolean;
  setInput: (val: string) => void;
  handleSearch: () => Promise<void>;
  clearSearch: () => void;
  setSelectedGame: (game: Game | null) => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  input: "",
  results: null,
  selectedGame: null,
  searchActive: false,
  setSelectedGame: (game) => set({ selectedGame: game }),

  setInput: (val) => {
    const current = get().input;
    if (current === val) return;
    set({ input: val });
  },

  handleSearch: async () => {
    const { input } = get();
    if (!input.trim()) {
      set({ searchActive: false, results: null });
      return;
    }

    const data = await searchFromIGDB(input);
    set({ results: data, searchActive: true });
  },

  clearSearch: () => {
    set({
      input: "",
      results: null,
      searchActive: false,
      selectedGame: null,
    });
  },

}));
