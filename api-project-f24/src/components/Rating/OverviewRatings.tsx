"use client";

import Link from "next/link";
import { useRatingStore } from "@/store/ratingState";
import { Star } from "lucide-react";

const OverviewRatings = () => {
  const { ratings, getAverageRating } = useRatingStore();
  if (ratings.length === 0) {
    return (
      <div className=" p-6 rounded-lg shadow-md text-white text-center">
        <h2 className="text-2xl font-bold mb-4">My Game Ratings 🎮</h2>
        <p className="text-gray-400 mb-4">You haven't rated any games yet!</p>

        <Link href="/ratings">
          <button className="mt-4 px-6 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-full text-white font-semibold transition">
            Start Rating
          </button>
        </Link>
      </div>
    );
  }

  // Ta senaste 5 ratings 
  const latestRated = [...ratings].reverse().slice(0, 5);
  return (
    <div className=" p-6 rounded-lg shadow-md text-white text-center">
      <h2 className="text-2xl font-bold mb-4">My Game Ratings 🎮</h2>
      {/* Average Rating */}
      <p className="text-xl mb-6">
        Average Rating:{" "}
        <span className="text-[#3B82F6]">
          {getAverageRating().toFixed(2)} / 5
        </span>
      </p>
      {/* Latest Rated Games */}
      <div className="flex justify-center gap-6 mb-6">
        {latestRated.map((game) => (
          <div key={game.gameId} className="flex flex-col items-center">
            <img
              src={game.gameImage}
              alt={game.gameName}
              className="w-16 h-16 object-cover rounded-md shadow-md hover:scale-110 transition"
            />
            <div className="flex items-center gap-1 mt-1">
              <Star size={14} className="text-[#9810FA] fill-[#9810FA]" />
              <p className="text-sm text-[#9810FA]">{game.rating}</p>
            </div>
          </div>
        ))}
      </div>
      {/* See All Button */}
      <Link href="/ratings">
        <button className="mt-4 px-6 py-2 bg-[#3B82F6] hover:bg-[#2563EB] rounded-full text-white font-semibold transition">
          See All Ratings
        </button>
      </Link>
    
    </div>
  );
};
export default OverviewRatings;
