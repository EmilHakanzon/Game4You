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
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    const loadFanFavorites = async () => {
      if (!hasLoaded) {
        setIsLoading(true);
        sessionStorage.setItem("hasLoaded", "true");
      }

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

      <CardHome games={fanFavorites} setSelectedGame={setSelectedGame} />
    </div>
  );
}
