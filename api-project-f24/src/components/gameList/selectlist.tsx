import React from "react";

type SelectListProps = {
  lists: string[];
  selectedList: string;
  setSelectedList: (list: string) => void;
};

const SelectList = ({
  lists,
  selectedList,
  setSelectedList,
}: SelectListProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        Select List
      </label>
      <select
        value={selectedList}
        onChange={(e) => setSelectedList(e.target.value)}
        className="w-full p-2 rounded bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {lists.map((list) => (
          <option key={list} value={list}>
            {list}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
