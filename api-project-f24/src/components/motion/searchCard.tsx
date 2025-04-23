import { motion } from "framer-motion";
import { popup } from "@/utility/animationCardHome";
import type { Game } from "@/types/types";

interface SearchCardProps {
  game: Game;
  setSelectedGame: (game: Game) => void;
}

export default function SearchCard({ game, setSelectedGame }: SearchCardProps) {
  return (
    <motion.div
      variants={popup}
      className="bg-[#1E293B] p-3 rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[180px] mx-auto transform hover:scale-105 duration-300 ease-in-out"
      onClick={() => setSelectedGame(game)}
    >
      {game.cover?.url ? (
        <img
          src={game.cover.url.replace("t_thumb", "t_logo_med")}
          alt={game.name}
          className="rounded mb-3 w-full h-60 object-cover"
        />
      ) : (
          <img
            src="/missingImg.jpg"
            alt="Missing Image"
            className="rounded mb-3 w-full h-60 object-fit"
          />
      )}
      <p className="text-sm font-medium text-[#F1F5F9] text-center">
        {game.name}
      </p>
    </motion.div>
  );
}
