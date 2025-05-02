import { create } from "zustand";
import { persist } from "zustand/middleware";

type GameEntry = {
  id: string;
  name: string;
  image: string;
  listName: string;
  status: "Not Started" | "Still Playing" | "Completed";
  review: string;
  timeSpent: number;
};

type GameListStore = {
  games: GameEntry[];
  lists: string[];
  addGameToList: (game: GameEntry) => void;
  addList: (listName: string) => void;
  updateGameEntry: (id: string, updated: Partial<GameEntry>) => void;
  removeGameFromList: (id: string) => void;
  getGamesList: (listName: string) => GameEntry[];
  getSummary: () => {
    totalCompleted: number;
    totalHours: number;
  };
};

export const UseGameListStore = create<GameListStore>()(
  persist(
    (set, get) => ({
      games: [],
      lists: ["My List"],
      addGameToList: (game) =>
        set((state) => ({
          games: [...state.games, game],
        })),
      addList: (listName) =>
        set((state) => ({
          lists: state.lists.includes(listName)
            ? state.lists
            : [...state.lists, listName],
        })),
      updateGameEntry: (id, updated) =>
        set((state) => ({
          games: state.games.map((g) =>
            g.id === id ? { ...g, ...updated } : g,
          ),
        })),
      removeGameFromList: (id) =>
        set((state) => ({
          games: state.games.filter((g) => g.id !== id),
        })),
      getGamesList: (listName) =>
        get().games.filter((g) => g.listName === listName),
      getSummary: () => {
        const completedGames = get().games.filter(
          (g) => g.status === "Completed",
        );
        const totalHours = completedGames.reduce(
          (sum, game) => sum + (game.timeSpent || 0),
          0,
        );
        return {
          totalCompleted: completedGames.length,
          totalHours,
        };
      },
    }),
    {
      name: "game-list-storage",
    },
  ),
);
