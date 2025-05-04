type RatingFilterProps = {
  filter: number | null;
  setFilter: (filter: number | null) => void;
};

const RatingFilter = ({ filter, setFilter }: RatingFilterProps) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => setFilter(null)}
        className={`px-4 py-2 rounded ${
          filter === null
            ? "bg-[#7C3AED] text-white"
            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        All Ratings
      </button>
      {[5, 4, 3, 2, 1].map((rating) => (
        <button
          key={rating}
          onClick={() => setFilter(rating)}
          className={`px-4 py-2 rounded ${
            filter === rating
              ? "bg-[#5215ba] text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {rating} ⭐
        </button>
      ))}
    </div>
  );
};

export default RatingFilter;
