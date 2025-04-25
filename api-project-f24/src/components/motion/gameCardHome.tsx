import type { Game } from "@/types/types";
import { popup } from "@/utility/animationCardHome";
import { motion } from "framer-motion";

interface GameCardProps {
  game: Game;
}

export default function GameCardHome({
  game,
  setSelectedGame,
}: GameCardProps & { setSelectedGame: (game: GameCardProps["game"]) => void }) {
  return (
    <motion.div
      key={game.id}
      variants={popup}
      className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[180px] mx-auto"
      onClick={() => setSelectedGame(game)}
    >
      {game.cover?.url ? (
        <img
          src={game.cover.url.replace("t_thumb", "t_logo_med")}
          alt={game.name}
          className="rounded mb-3 w-full h-60 object-cover"
        />
      ) : (
        <div className="h-40 rounded mb-3 bg-gray-700" />
      )}
      <p className="text-sm font-medium text-[#F1F5F9] text-center">
        {game.name}
      </p>
    </motion.div>
  );
}
