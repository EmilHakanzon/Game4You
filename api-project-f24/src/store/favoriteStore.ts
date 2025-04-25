import type { Game } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
  favorites: Game[];
  xp: number;
  level: number;
  levelUp: boolean;
  addFavorite: (game: Game) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  resetXP: () => void;
  clearLevelUp: () => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      xp: 0,
      level: 1,
      levelUp: false,

      addFavorite: (game) => {
        const alreadyFavorite = get().favorites.some((g) => g.id === game.id);
        if (!alreadyFavorite) {
          const prevXp = get().xp;
          const newXP = prevXp + 10;
          const prevLevel = Math.floor(prevXp / 100) + 1;
          const newLevel = Math.floor(newXP / 100) + 1;

          set((state) => ({
            favorites: [...state.favorites, game],
            xp: newXP,
            level: newLevel,
            levelUp: newLevel > prevLevel,
          }));
        }
      },

      removeFavorite: (id) => {
        const gameToRemove = get().favorites.find((game) => game.id === id);
        if (gameToRemove) {
          const prevXp = get().xp;
          const newXP = Math.max(0, prevXp - 10); // undvik negativ XP
          const newLevel = Math.floor(newXP / 100) + 1;

          set((state) => ({
            favorites: state.favorites.filter((game) => game.id !== id),
            xp: newXP,
            level: newLevel,
            levelUp: true, //  kan sätta true om du vill trigga "Level down"-animation
          }));
        }
      },

      isFavorite: (id) => {
        return get().favorites.some((game) => game.id === id);
      },

      resetXP: () => set({ xp: 0, level: 1, levelUp: false }),

      clearLevelUp: () => set({ levelUp: false }),
    }),
    {
      name: "favorite-games", // localStorage key
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    },
  ),
);
