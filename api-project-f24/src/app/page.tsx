"use client";
import { useEffect, useState } from "react";
import { fetchGames } from "@/app/api/lib/igdbFetchHome";
import CardHome from "@/ui/cardHome";
import { useSearchStore } from "../store/searchState";
import useLoadingStore from "../store/LoadingDelay";
import LoadingSpinner from "@/ui/loadingSpinner";
import { GameModal } from "@/components/modal/gamemodal";
import SearchCard from "@/components/motion/searchCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const { results, searchActive, setSelectedGame } = useSearchStore();
  const [fanFavorites, setFanFavorites] = useState([]);
  const { isLoading, setIsLoading, setIsLoaded } = useLoadingStore();

  useEffect(() => {
    const loadFanFavorites = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // delay for spinner
      const data = await fetchGames();
      setFanFavorites(data);
      setIsLoading(false);
      setIsLoaded(true);
    };

    loadFanFavorites();
  }, [setIsLoading, setIsLoaded]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mt-24 space-y-8">
      <GameModal />
      {searchActive && results && results.length > 0 ? (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 pl-15 text-white">
            Search Results
          </h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
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
      ) : (
        <CardHome games={fanFavorites} setSelectedGame={setSelectedGame} />
      )}
    </div>
  );
}
