// import Image from "next/image";
// import type { Game } from "../types/types";

// interface SearchResultProps {
//   results: any[];
//   category: "Games" | "Companies" | "Studios";
  
// }

// export const SearchResults = ({ results, category }: SearchResultProps) => {
//   if (!results.length)
//     return <p className="text-white mt-4">No results found.</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//       {results.map((item) => {
//         if (category === "Games") {
//           const game = item as Game;
//           return (
//             <div
//               key={game.id}
//               className="bg-purple-700 rounded-xl p-4 shadow-md text-white"
//             >
//               <h2 className="text-lg font-semibold mb-2">{game.name}</h2>
//               {game.cover?.url && (
//                 <Image
//                   src={`https:${game.cover.url.replace("t_thumb", "t_cover_big")}`}
//                   alt={game.name}
//                   width={200}
//                   height={200}
//                   className="rounded-md mb-2"
//                 />
//               )}
//             </div>
//           );
//         }

//         // fallback för andra kategorier
//         return (
//           <div
//             key={item.id}
//             className="bg-purple-700 rounded-xl p-4 shadow-md text-white"
//           >
//             <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
//             {item.description && (
//               <p className="text-sm text-gray-300">
//                 {item.description.slice(0, 100)}...
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
