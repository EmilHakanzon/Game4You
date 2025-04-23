"use client";
import { useSearchStore } from "@/store/searchState";
import { Dialog } from "@headlessui/react";
import { GameModalContent } from "@/ui/modalContent";

export const GameModal = () => {
  const { selectedGame, setSelectedGame } = useSearchStore();

  if (!selectedGame) return null;

  return (
    <Dialog
      open={!!selectedGame}
      onClose={() => setSelectedGame(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <GameModalContent
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </Dialog>
  );
};
