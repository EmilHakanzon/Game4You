"use client";
import { useEffect, useState } from "react";
import { fetchGames } from "@/app/api/lib/igdbFetchHome";
import CardHome from "@/ui/cardHome";
import { useSearchStore } from "../store/searchState";
import useLoadingStore from "../store/LoadingDelay";
import LoadingSpinner from "@/ui/loadingSpinner";
import { GameModal } from "@/components/modal/gamemodal";


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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((game) => (
              <div
                key={game.id}
                className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[180px] mx-auto transform hover:scale-105 duration-300 ease-in-out"
                onClick={() => setSelectedGame(game)}
              >
                {game.cover?.url && (
                  <img
                    src={game.cover.url.replace("t_thumb", "t_logo_med")}
                    alt={game.name}
                    className="rounded mb-3 w-full h-60 object-cover"
                  />
                )}
                <h3 className="text-sm font-semibold text-[#F1F5F9]">
                  {game.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CardHome games={fanFavorites} setSelectedGame={setSelectedGame} />
      )}
    </div>
  );
}
