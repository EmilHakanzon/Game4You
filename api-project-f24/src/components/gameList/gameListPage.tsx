// import { UseGameListStore } from "@/store/gameListState";
// import GameListSummary from "@/components/gameList/GameListSummary";
// import GameListItem from "@/ui/GameListItem";
// import Link from "next/link";
// interface GameListPageProps {
//   listId: string;
// }

// const GameListPage = ({listId}: GameListPageProps) => {
//   const { games } = UseGameListStore();

//   const groupedByList = games.reduce(
//     (acc, game) => {
//       if (!acc[game.listName]) acc[game.listName] = [];
//       acc[game.listName].push(game);
//       return acc;
//     },
//     {} as Record<string, typeof games>,
//   );

//   return (
//     <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 space-y-12 max-w-7xl mx-auto">
//       <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-slate-100">
//         Your Game Lists
//       </h1>

//       {Object.entries(groupedByList).map(([listName, listGames]) => (
//         <div key={listName}>
//           <Link href={`/list/${listName}`}>
//             <h2 className="text-xl sm:text-2xl text-center md:text-left font-semibold mb-4  text-slate-200">
//               {listName}
//             </h2>
//           </Link>
//           <div className="flex justify-center items-center pr-10 md:text-left md:justify-start md:-ml-16">
//             <GameListSummary games={listGames} />
//           </div>
//           <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {listGames.map((game) => (
//               <GameListItem key={game.id} game={game} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GameListPage;
