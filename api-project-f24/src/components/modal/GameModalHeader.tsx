import { DialogTitle } from "@headlessui/react";
import { HeartIcon, X } from "lucide-react";
import { useFavoriteStore } from "@/store/favoriteStore";
import type { Game } from "@/types/types";

interface Props {
  game: Game;
  onClose: () => void;
}

export const GameModalHeader = ({ game, onClose }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
  const isFav = isFavorite(game.id);

  const toggleFavorite = () => {
    isFav ? removeFavorite(game.id) : addFavorite(game);
  };

  return (
    <DialogTitle className="text-xl font-bold flex justify-between items-center">
      {game.name}
      <div className="flex gap-5">
        <HeartIcon
          className={`cursor-pointer ${
            isFav ? "text-red-500" : "text-zinc-400"
          } hover:text-white`}
          onClick={toggleFavorite}
        />
        <button onClick={onClose} className="text-zinc-400 hover:text-white">
          <X size={20} />
        </button>
      </div>
    </DialogTitle>
  );
};
