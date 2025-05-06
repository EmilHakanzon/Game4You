import { DialogTitle } from "@headlessui/react";
import { HeartIcon, X } from "lucide-react";
import { useFavoriteStore } from "@/store/favoriteStore";
import { useIsFavorite } from "@/hook/useIsFavorite";
import type { Game } from "@/types/types";
import { toast } from "sonner";

interface Props {
  game: Game;
  onClose: () => void;
}

export const GameModalHeader = ({ game, onClose }: Props) => {
  const { addFavorite, removeFavorite } = useFavoriteStore();
  const isFav = useIsFavorite(game.id.toString()); 

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(game.id);
      toast.error("Removed from favorites");
    } else {
      addFavorite(game);
      toast.success("Added to favorites");
    }
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
