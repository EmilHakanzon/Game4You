"use client";

import EditableStars from "@/ui/EditableStars";
import { X } from "lucide-react";

type RatingCardProps = {
  gameId: string;
  gameImage: string;
  gameName: string;
  rating: number;
  onRatingChange: (newRating: number) => void;
  onRemove: () => void;
};

const RatingCard = ({
  gameId,
  gameImage,
  gameName,
  rating,
  onRatingChange,
  onRemove,
}: RatingCardProps) => {
  return (
    <div className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[200px]">
      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="relative right-2 text-white hover:text-red-500 transition-colors z-50"
      >
        <X size={20} />
      </button>

      <img
        src={gameImage}
        alt={gameName}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="text-lg font-semibold text-white text-center">
        {gameName}
      </h3>

      <div className="flex justify-center mt-3">
        <EditableStars currentRating={rating} onRatingChange={onRatingChange} />
      </div>
    </div>
  );
};

export default RatingCard;
