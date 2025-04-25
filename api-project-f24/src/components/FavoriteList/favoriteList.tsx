import { useState } from "react";
import { useFavoriteStore } from "@/store/favoriteStore";
import { HeartIcon, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

const FavoriteList = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite);

  const [showList, setShowList] = useState(false);

  if (favorites.length === 0) return null;

  return (
    <div className="mt-6  pt-4">
      <button
        onClick={() => setShowList(!showList)}
        className="flex items-center gap-1 text-sm text-[#3B82F6] hover:underline mb-4"
      >
        {showList ? (
          <>
            Hide Favorites <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Show Favorites ({favorites.length}){" "}
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>

      {showList && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {favorites.map((game) => (
            <div
              key={game.id}
              className="bg-[#1E293B] text-[#F1F5F9] rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 "
            >
              <div className="relative">
                <img
                  src={game.cover?.url.replace("t_thumb", "t_cover_big")}
                  alt={game.name}
                  className="w-full h-60 object-cover rounded-t-lg "
                />
                <HeartIcon
                  className={clsx(
                    "absolute top-2 right-2 w-6 h-6 cursor-pointer z-50",
                    {
                      "text-[#9810FA]": isFavorite(game.id),
                      "text-gray-400": !isFavorite(game.id),
                    },
                  )}
                  onClick={() => removeFavorite(game.id)}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{game.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {game.genres?.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
