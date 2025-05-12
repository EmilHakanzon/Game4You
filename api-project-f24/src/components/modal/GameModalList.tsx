"use client";
import { UseGameListStore } from "@/store/gameListState";
import { useState } from "react";
import { toast } from "sonner";
import SelectList from "@/components/gameList/selectlist";
import CreateList from "@/components/gameList/createlist";

export const GameModalList = ({
  game,
}: {
  game: { id: string; name: string; image: string };
}) => {
  const { addGameToList, lists, addList } = UseGameListStore();

  const [selectedList, setSelectedList] = useState(lists[0] || "");
  const [newListName, setNewListName] = useState("");
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
      listName: selectedList,
      status,
      review,
      timeSpent: Number(timeSpent),
    });

    toast.success(`${game.name} has been added to ${selectedList}!`);
  };

  const handleAddList = () => {
    if (newListName.trim() === "") {
      toast.error("List name cannot be empty!");
      return;
    }

    addList(newListName);
    toast.success(`List "${newListName}" has been created!`);
    setSelectedList(newListName); // sätt den som vald direkt
    setNewListName(""); // töm input
  };

  const isValidStatus = (value: string): value is "Not Started" | "Still Playing" | "Completed" => {
    return ["Not Started", "Still Playing", "Completed"].includes(value);
  };

  const handleStatusChange = (value:string) => {
    if (isValidStatus(value)) {
      setStatus(value);
    } else {
      console.error("Invalid status value", value);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-zinc-800 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-white">Add to Your List</h3>
      {/* Välj Lista */}
      <SelectList
        lists={lists}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      {/* Skapa Ny Lista */}
      <CreateList
        newListName={newListName}
        setNewListName={setNewListName}
        handleAddList={handleAddList}
      />
      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
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
