import { fetchGames } from "@/app/api/lib/igdb";
export default async function CardHome() {
  const games = await fetchGames();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 pl-12 text-[#F1F5F9]">
        Top Games...
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((game: any) => (
          <div
            key={game.id}
            className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-indigo-500/70 transition-all max-w-[180px] mx-auto"
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
