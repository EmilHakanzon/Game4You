"use client";

import { fetchGames } from "@/app/api/lib/igdbFetchHome";
import type { Game } from "../../types/types";
import { motion } from "framer-motion";
import { fadeIn } from "@/utility/animationCardHome";
import { useEffect, useState } from "react";
import useLoadingStore from "../../store/LoadingDelay";
import LoadingSpinner from "./loadingSpinner";
import GameCard from "@/components/motion/gameCardHome";
import Header from "@/components/motion/gameCardHomeHeader";

export default function CardHome() {
  const [games, setGames] = useState<Game[]>([]);
  const setIsLoaded = useLoadingStore((state) => state.setIsLoaded);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  useEffect(() => {
    let isMounted = true; // flagga för att kolla på komponenten
    async function getGames() {
      // console.log("Setting isLoading to true");
      setIsLoading(true); // start loading innan api call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // skapa delay för lodingSpinner
      
      if (isMounted) {
      const data = await fetchGames();
      setGames(data); // uppdatera state från apiet,fetch innehåller Game[]
      setIsLoading(false);
      setIsLoaded(true);
      // console.log("Setting isLoading to false");
    }
    }
    getGames();

    return () => {
      isMounted = false; // cleanup funktion
    }
  }, [setIsLoaded, setIsLoading]);

  return (
    <main className="p-6 mt-20">
      <LoadingSpinner />
      {/* Rubrik  */}
      <Header title="Fan Favorites" />
      {/* Kort  */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </motion.div>
    </main>
  );
}
