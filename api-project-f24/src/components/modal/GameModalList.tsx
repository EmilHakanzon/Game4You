"use client";
import { UseGameListStore } from "@/store/gameListState";
import { useState } from "react";
import { toast } from "sonner";

export const GameModalList = ({
  game,
}: {
  game: { id: string; name: string; image: string };
}) => {
  const { addGameToList, lists, addList } = UseGameListStore();
  const [listName, setListName] = useState(lists[0] || ""); // Förvald lista "MY List" är standard
  const [status, setStatus] = useState<
    "Not Started" | "Still Playing" | "Completed"
  >("Not Started");
  const [review, setReview] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleSave = () => {
    addGameToList({
      id: game.id,
      name: game.name,
      image: game.image,
      listName,
      status,
      review,
      timeSpent: Number(timeSpent),
    });

    toast.success(`${game.name} has been added to ${listName}!`);
  };

  const handleAddList = () => {
    if (listName.trim() === "") {
      toast.error("List name cannot be empty!");
      return;
    }
    addList(listName);
    toast.success(`List "${listName}" has been created!`);
  };

  return (
    <div className="p-4 space-y-4 bg-zinc-800 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-white">Add to Your List</h3>

      {/* Välj Lista */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Select List
        </label>
        <select
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {lists.map((list) => (
            <option key={list} value={list}>
              {list}
            </option>
          ))}
        </select>
      </div>

      {/* Skapa Ny Lista */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Create New List
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter new list name..."
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            className="flex-1 p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddList}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>Not Started</option>
          <option>Still Playing</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Review */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Review
        </label>
        <textarea
          placeholder="Write a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      {/* Time Spent */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Time Spent (hours)
        </label>
        <input
          type="number"
          placeholder="Enter time spent..."
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition"
      >
        Add to List
      </button>
    </div>
  );
};

export default GameModalList;
