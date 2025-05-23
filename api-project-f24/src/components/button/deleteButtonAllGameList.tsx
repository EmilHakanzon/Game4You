import { X } from "lucide-react";

interface DeleteButtonListProps {
  listName: string;
  deleteList: (name: string) => void;
}

export const DeleteButtonList = ({
  listName,
  deleteList,
}: DeleteButtonListProps) => {
  return (
    <button
      className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition font-bold text-lg"
      onClick={() => deleteList(listName)}
      title="Delete this list"
    >
      <X />
    </button>
  );
};

export default DeleteButtonList;
