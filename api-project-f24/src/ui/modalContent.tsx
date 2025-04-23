import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import type { Game } from "@/types/types";
import { getDevelopers, getValidRelease } from "@/utility/gameUtilis";

interface GameModalContentProps {
  game: Game;
  onClose: () => void;
}

export const GameModalContent = ({ game, onClose }: GameModalContentProps) => {
  const {
    name,
    cover,
    summary,
    aggregated_rating,
    platforms,
    genres,
    involved_companies,
    release_dates,
  } = game;

const developers = getDevelopers(involved_companies)
const validRelease = getValidRelease(release_dates);

  return (
    <DialogPanel className="bg-zinc-900 text-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <DialogTitle className="text-xl font-bold flex justify-between items-center">
        {name}
        <button onClick={onClose} className="text-zinc-400 hover:text-white">
          <X size={20} />
        </button>
      </DialogTitle>

      {cover?.url && (
        <img
          src={cover.url.replace("t_thumb", "t_cover_big")}
          alt={name}
          className="rounded mb-4 pt-1"
        />
      )}

      {summary && <p className="text-sm text-zinc-300 mb-4">{summary}</p>}

      {validRelease && (
        <p className="mb-2">
          <span className="font-semibold">Release Date:</span>{" "}
          {new Date(validRelease.date! * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}

      {developers && (
        <p className="mb-2">
          <span className="font-semibold">Developer:</span> {developers}
        </p>
      )}

      {aggregated_rating && (
        <p className="mb-2">
          <span className="font-semibold">Rating:</span>{" "}
          {aggregated_rating.toFixed(1)} / 100
        </p>
      )}

      {platforms?.length > 0 && (
        <p className="mb-2">
          <span className="font-semibold">Platforms:</span>{" "}
          {platforms.map((p) => p.name).join(", ")}
        </p>
      )}

      {genres?.length > 0 && (
        <p className="mb-2">
          <span className="font-semibold">Genres:</span>{" "}
          {genres.map((g) => g.name).join(", ")}
        </p>
      )}

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded text-sm"
        >
          Close
        </button>
      </div>
    </DialogPanel>
  );
};
