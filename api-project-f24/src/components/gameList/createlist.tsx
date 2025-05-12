import React from "react";

type CreateListProps = {
  newListName: string;
  setNewListName: (name: string) => void;
  handleAddList: () => void;
};

const CreateList = ({
  newListName,
  setNewListName,
  handleAddList,
}: CreateListProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        Create New List
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter new list name..."
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
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
  );
};

export default CreateList;
