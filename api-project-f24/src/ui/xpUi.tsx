"use client"
import { useFavoriteStore } from "@/store/favoriteStore";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";

const XP_PER_LEVEL = 100;

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

  const progress = ((xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;

  return (
    <div className="text-sm font-semibold text-[#3B82F6] relative p-4 rounded-lg shadow-md bg-[#1a2941] ">
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[#9810FA]">⭐ Level {level}</span>
          <span className="text-[#9810FA]">
            {xp % XP_PER_LEVEL} / {XP_PER_LEVEL} XP
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-blue-500 h-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {showAnimation && (
        <div className="absolute top-[4.5rem] left-0 right-0 mx-auto text-center text-[#9810FA] font-extrabold text-xl animate-bounce">
          Lost xp...
        </div>
      )}

      <button className="relative mt-2">
        <HeartIcon
          className={`w-6 h-6 text-red-500 ${
            favoriteCount > 0 ? "animate-pulse" : ""
          }`}
        />
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
