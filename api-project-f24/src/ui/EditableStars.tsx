"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const starVariants = {
  initial: { scale: 1 },
  selected: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

interface EditableStarsProps {
  currentRating: number;
  onRatingChange: (rating: number) => void;
}

const EditableStars = ({
  currentRating,
  onRatingChange,
}: EditableStarsProps) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    onRatingChange(rating);
    toast.success(`Rating updated to ${rating} stars!`);
  };

  const getStarStyle = (index: number) => {
    if (hoveredStar !== null) {
      return index <= hoveredStar ? "text-yellow-400" : "text-gray-400";
    }
    return index <= currentRating ? "text-yellow-400" : "text-gray-400";
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(null)}
          className="text-2xl"
          variants={starVariants}
          animate={
            hoveredStar === star || currentRating >= star
              ? "selected"
              : "initial"
          }
          initial="initial"
        >
          <span className={getStarStyle(star)}>★</span>
        </motion.button>
      ))}
    </div>
  );
};

export default EditableStars;
