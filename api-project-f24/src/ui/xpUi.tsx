import { useFavoriteStore } from "@/store/favoriteStore";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";

const XpStats = () => {
  const xp = useFavoriteStore((state) => state.xp);
  const level = useFavoriteStore((state) => state.level);
  const levelUp = useFavoriteStore((state) => state.levelUp);
  const clearLevelUp = useFavoriteStore((state) => state.clearLevelUp);
  const favoriteCount = useFavoriteStore((state) => state.favorites.length);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (levelUp) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        clearLevelUp();
      }, 2000);
    }
  }, [levelUp]);

  return (
    <div className="text-sm font-semibold text-[#3B82F6] relative">
      Level {level} | XP: {xp}
      {showAnimation && (
        <div className="absolute top-[-2rem] left-0 right-0 mx-auto text-center text-[#3B82F6]  font-bold text-xl animate-bounce">
          LEVEL XP Lost ....
        </div>
      )}
      <button className="relative">
        <HeartIcon className="w-6 h-6 text-red-500" />
        {favoriteCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {favoriteCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default XpStats;
