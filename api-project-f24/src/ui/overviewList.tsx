"use client";
import { UseGameListStore } from "@/store/gameListState";
import Link from "next/link";

const OverviewLists = () => {
  const { games } = UseGameListStore();

  const grouped = games.reduce((acc: Record<string, typeof games>, game) => {
    if (!acc[game.listName]) acc[game.listName] = [];
    acc[game.listName].push(game);
    return acc;
  }, {});

  return (
    <div className="space-y-6  p-4 rounded-lg  transition max-w-[530px] ">
      {Object.entries(grouped)
        .slice(0, 2)
        .map(([listName, games]) => (
          <div key={listName}>
            <h2 className="text-xl text-white font-bold mb-5">{listName}</h2>
            <div className="flex gap-15 ">
              {games.slice(0, 4).map((game) => (
                <div
                  key={game.id}
                  className="max-w-[150px] bg-[#1E293B] rounded-lg p-3 flex-shrink-0 hover:shadow-[0_4px_6px_1px_#7C3AED]"
                >
                  <Link href="/list">
                    <img
                      src={game.image}
                      alt={game.name}
                      width={150}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="mt-4 text-sm text-white font-medium">
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
