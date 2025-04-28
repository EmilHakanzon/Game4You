"use client";

type AverageRatingProps = {
  average: number;
};

const AverageRating = ({ average }: AverageRatingProps) => {
  return (
    <div className="p-4 rounded-lg text-center mb-10 shadow-md">
      <h2 className="text-xl font-semibold text-white mb-2">AVERAGE RATING</h2>
      <p className="text-3xl text-[#3B82F6]">{average.toFixed(2)} / 5</p>
    </div>
  );
};

export default AverageRating;
