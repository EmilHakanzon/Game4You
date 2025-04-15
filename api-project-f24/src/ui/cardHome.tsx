import { fetchGames } from "@/app/api/lib/igdb";
import type { Game } from "../../types/types";
export default async function CardHome() {
  const games: Game[] = await fetchGames();
  return (
    <main className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6 pl-12 text-[#F1F5F9]">
        Top Games...
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[180px] mx-auto"
          >
            {game.cover?.url ? (
              <img
                src={game.cover.url.replace("t_thumb", "t_logo_med")}
                alt={game.name}
                className="rounded mb-3 w-full h-60 object-cover"
              />
            ) : (
              <div className="h-40 rounded mb-3" />
            )}
            <h2 className="text-sm font-medium text-[#F1F5F9] text-center">
              {game.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
