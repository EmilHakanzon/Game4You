"use client";

import type { Game } from "../types/types";
import { motion } from "framer-motion";
import GameCard from "@/components/motion/gameCardHome";
import Header from "@/components/motion/gameCardHomeHeader";
import LoadingSpinner from "./loadingSpinner";

interface CardHomeProps {
  games: Game[];
}

export default function CardHome({
  games,
  setSelectedGame,
}: CardHomeProps & { setSelectedGame: (game: Game) => void }) {
  return (
    <>
      <main className="p-6 mt-20">
        <LoadingSpinner />
        {/* Rubrik */}
        <Header title="Fan Favorites" />
        {/* Kort */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              setSelectedGame={setSelectedGame}
            />
          ))}
        </motion.div>
      </main>
    </>
  );
}