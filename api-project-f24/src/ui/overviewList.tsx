"use client";

import { UseGameListStore } from "@/store/gameListState";
import Link from "next/link";
import { useEffect, useState } from "react";

const OverviewLists = () => {
  const { games } = UseGameListStore();
  const [clientGames, setClientGames] = useState<typeof games>([]);

  useEffect(() => {
    setClientGames(games);
  }, [games]);

  if (!clientGames || clientGames.length === 0) {
    return <div className="text-center text-white">No games available.</div>;
  }

  const grouped = clientGames.reduce((acc: Record<string, typeof games>, game) => {
    if (!acc[game.listName]) acc[game.listName] = [];
    acc[game.listName].push(game);
    return acc;
  }, {});

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-10 py-6 max-w-3xl mx-auto">
      {Object.entries(grouped)
        .slice(0, 2)
        .map(([listName, games]) => (
          <div key={listName}>
            <h2 className="text-xl sm:text-2xl text-white font-bold mb-4 text-center sm:text-left">
              {listName}
            </h2>

            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 pb-2">
              {games.slice(0, 4).map((game) => (
                <div
                  key={game.id}
                  className="min-w-[140px] max-w-[150px] bg-[#1E293B] rounded-lg p-3 flex-shrink-0 hover:shadow-[0_4px_6px_1px_#7C3AED] transition-shadow"
                >
                  <Link href="/list">
                    <img
                      src={game.image}
                      alt={game.name}
                      width={150}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="mt-3 text-sm text-white font-medium truncate">
                      {game.name}
                    </div>
                  </Link>
                  <div className="text-xs text-gray-400">{game.status}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default OverviewLists;
