import { DialogPanel } from "@headlessui/react";
import type { Game } from "@/types/types";
import { GameModalDetails } from "@/components/modal/GameModalDetails";
import { GameModalFooter } from "@/components/modal/GameModalFooter";
import { GameModalHeader } from "@/components/modal/GameModalHeader";
import { GameModalMedia } from "@/components/modal/GameModalMedia";


interface GameModalContentProps {
  game: Game;
  onClose: () => void;
}

export const GameModalContent = ({ game, onClose }: GameModalContentProps) => (
  <DialogPanel className="bg-zinc-900 text-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
    <GameModalHeader game={game} onClose={onClose} />
    <GameModalMedia game={game} />
    <GameModalDetails game={game} />
    <GameModalFooter onClose={onClose} />
  </DialogPanel>
);
