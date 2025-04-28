import { create } from "zustand";
import { persist } from "zustand/middleware";

type Rating = {
  gameId: string;
  rating: number;
  gameImage: string;
  gameName: string;
};

type RatingState = {
  ratings: Rating[];
  addRating: (
    gameId: string,
    rating: number,
    gameImage: string,
    gameName: string,
  ) => void;
  updateRating: (gameId: string, newRating: number) => void;
  removeRating: (gameId: string) => void;
  getAverageRating: () => number;
};

export const useRatingStore = create<RatingState>()(
  persist(
    (set, get) => ({
      ratings: [],
      addRating: (gameId, rating, gameImage, gameName) => {
        const existing = get().ratings.find((r) => r.gameId === gameId);
        if (existing) {
          // Om rating redan finns, uppdatera istället
          set((state) => ({
            ratings: state.ratings.map((r) =>
              r.gameId === gameId ? { ...r, rating } : r,
            ),
          }));
        } else {
          // Annars lägg till ny
          set((state) => ({
            ratings: [
              ...state.ratings,
              { gameId, rating, gameImage, gameName },
            ],
          }));
        }
      },
      updateRating: (gameId, newRating) =>
        set((state) => ({
          ratings: state.ratings.map((r) =>
            r.gameId === gameId ? { ...r, rating: newRating } : r,
          ),
        })),
      removeRating: (gameId) =>
        set((state) => ({
          ratings: state.ratings.filter((r) => r.gameId !== gameId),
        })),
      getAverageRating: () => {
        const ratings = get().ratings;
        if (ratings.length === 0) return 0;
        const total = ratings.reduce((acc, curr) => acc + curr.rating, 0);
        return total / ratings.length;
      },
    }),
    {
      // skapar en cache
      name: "rating-storage",
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
