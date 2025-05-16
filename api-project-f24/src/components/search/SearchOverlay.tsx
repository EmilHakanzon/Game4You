"use client";
import { useSearchStore } from "@/store/searchState";
import SearchCard from "@/components/motion/searchCard";
import { motion } from "framer-motion";

export default function SearchOverlay() {
  const { searchActive, results, setSelectedGame } =
    useSearchStore();

  if (!searchActive || !results) return null;

  return (
    <div className="fixed inset-0 z-40 backdrop-blur-md bg-black/60 overflow-y-auto p-6">
    
      <h2 className="text-2xl text-left mt-15 lg:pl-13 font-bold text-white mb-4">Search Results</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={{
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {results.map((game) => (
          <SearchCard
            key={game.id}
            game={game}
            setSelectedGame={setSelectedGame}
          />
        ))}
      </motion.div>
    </div>
  );
}
