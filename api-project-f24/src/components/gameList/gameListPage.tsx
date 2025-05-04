import { UseGameListStore } from "@/store/gameListState";
import GameListSummary from "@/components/gameList/GameListSummary";
import GameListItem from "@/ui/GameListItem";

const GameListPage = () => {
  const { games } = UseGameListStore();

  // Denna funktion grupperar spelen efter listnamn
  // och returnerar ett objekt där varje nyckel är ett listnamn
  const groupedByList = games.reduce(
    (acc, game) => {
      if (!acc[game.listName]) acc[game.listName] = [];
      acc[game.listName].push(game);
      return acc;
    },
    {} as Record<string, typeof games>,
  );

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold pl-20">Your Game Lists</h1>

      {Object.entries(groupedByList).map(([listName, listGames]) => (
        <div key={listName}>
          <h2 className="text-xl font-semibold mb-2 -mt-5 pl-20">{listName}</h2>
          <GameListSummary games={listGames} />
          <div className="mt-5 pl-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listGames.map((game) => (
              <GameListItem key={game.id} game={game} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameListPage;
