"use client";

import { useRatingStore } from "@/store/ratingState";
import AverageRating from "@/components/Rating/AverageRating";
import RatingCard from "@/components/Rating/RatingCard";

const RatingUiPage = () => {
  const { ratings, updateRating, getAverageRating, removeRating } =
    useRatingStore();

  const handleRatingChange = (gameId: string, newRating: number) => {
    updateRating(gameId, newRating);
  };

  const handleRemoveRating = (gameId: string) => {
    removeRating(gameId);
  };

  if (ratings.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-xl">No Ratings... ⭐</p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        My Ratings...
      </h1>

      {/* Average Rating */}
      <AverageRating average={getAverageRating()} />

      {/* List of Ratings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {ratings.map((rating) => (
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
