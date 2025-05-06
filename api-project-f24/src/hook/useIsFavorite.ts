import { useFavoriteStore } from "@/store/favoriteStore";
// skappar en custom hook från min zustand state för att se om favorite är true or false
export const useIsFavorite = (id: string) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return favorites.some((fav) => fav.id === Number(id));
};
