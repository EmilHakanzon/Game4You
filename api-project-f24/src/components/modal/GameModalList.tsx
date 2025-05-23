"use client";
import SelectList from "@/components/gameList/selectlist";
import CreateList from "@/components/gameList/createlist";
import { useGameModalListLogic } from "@/hook/useGameModalList";

export const GameModalList = ({
  game,
}: {
  game: { id: string; name: string; image: string };
}) => {
  const {
    lists,
    selectedList,
    setSelectedList,
    newListName,
    setNewListName,
    status,
    review,
    setReview,
    timeSpent,
    setTimeSpent,
    handleSave,
    handleAddList,
    handleStatusChange,
  } = useGameModalListLogic(game);

  return (
    <div className="p-4 space-y-4 bg-zinc-800 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-white">Add to Your List</h3>
      <SelectList
        lists={lists}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <CreateList
        newListName={newListName}
        setNewListName={setNewListName}
        handleAddList={handleAddList}
      />
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
