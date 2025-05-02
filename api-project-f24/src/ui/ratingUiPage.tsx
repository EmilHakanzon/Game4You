"use client";

import { useState } from "react";
import { useRatingStore } from "@/store/ratingState";
import AverageRating from "@/components/Rating/AverageRating";
import RatingCard from "@/components/Rating/RatingCard";
import RatingFilter from "@/components/Rating/ratingFIlter";

const RatingUiPage = () => {
  const { ratings, updateRating, getAverageRating, removeRating } =
    useRatingStore();
  const [filter, setFilter] = useState<number | null>(null); // Filter för betyg

  // Skapar en funktion för att hantera betygsändringar, som uppdaterar betyget i store
  // och tar emot gameId och det nya betyget som argument
  const handleRatingChange = (gameId: string, newRating: number) => {
    updateRating(gameId, newRating);
  };

  const handleRemoveRating = (gameId: string) => {
    removeRating(gameId);
  };

  // Filtrera betyg baserat på valt filter
  const filteredRatings = filter
    ? ratings.filter((rating) => rating.rating === filter)
    : ratings;

  if (ratings.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-xl">No Ratings... ⭐</p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-white mb-5 text-center">
        My Ratings...
      </h1>
      {/* Average Rating */}
      <AverageRating average={getAverageRating()} />
      {/* Antal spel */}
      <p className="text-white text-center mb-4 -mt-2">
        Total Rated Games: {ratings.length}
      </p>
      {/* Filter */}
      <RatingFilter filter={filter} setFilter={setFilter} />
      {/* List of Ratings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredRatings.map((rating) => (
          <RatingCard
            key={rating.gameId}
            gameId={rating.gameId}
            gameImage={rating.gameImage}
            gameName={rating.gameName}
            rating={rating.rating}
            onRatingChange={(newRating) =>
              handleRatingChange(rating.gameId, newRating)
            }
            onRemove={() => handleRemoveRating(rating.gameId)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingUiPage;
