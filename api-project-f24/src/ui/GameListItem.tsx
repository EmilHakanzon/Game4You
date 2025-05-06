"use client"
import { UseGameListStore } from "@/store/gameListState";
import { useState } from "react";

type Props = {
  game: {
    id: string;
    name: string;
    image: string;
    status: string;
    review?: string;
    timeSpent?: number;
  };
};

const GameListItem = ({ game }: Props) => {
  const { updateGameEntry, removeGameFromList } = UseGameListStore();
  const [editing, setEditing] = useState(false);
  const [review, setReview] = useState(game.review || "");
  const [timeSpent, setTimeSpent] = useState(game.timeSpent?.toString() || "");

  const save = () => {
    updateGameEntry(game.id, { review, timeSpent: Number(timeSpent) });
    setEditing(false);
  };

  return (
    <div className="p-4 bg-[#1E293B] rounded-lg shadow hover:shadow-[0_4px_6px_-1px_#7C3AED] transition-all max-w-[180px]">
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-40 object-fit rounded-md"
      />
      <p className="font-bold mt-2 text-[#F1F5F9]  truncate">{game.name}</p>
      <p className="text-sm text-blue-400">Status: {game.status}</p>

      {editing ? (
        <div className="mt-2 space-y-2">
          <textarea
            className="w-full p-2 rounded bg-zinc-700 text-[#F1F5F9]  border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Edit review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time (hours)"
            className="w-full p-2 rounded bg-zinc-700 text-[#F1F5F9]  border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
          <button
            onClick={save}
            className="w-full py-2 bg-[#7C3AED] hover:bg-[rgba(124,58,237,0.35)] text-[#F1F5F9]  font-semibold rounded transition"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-2">
          <p className="text-sm text-gray-300">
            {game.review || "No review yet"}
          </p>
          {game.timeSpent && (
            <p className="text-xs text-gray-500">{game.timeSpent} hours</p>
          )}
        </div>
      )}

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setEditing(!editing)}
          className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-[#F1F5F9]  font-semibold rounded transition"
        >
          {editing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => removeGameFromList(game.id)}
          className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-[#F1F5F9]  font-semibold rounded transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default GameListItem;
