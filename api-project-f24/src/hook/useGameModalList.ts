import { useState, useEffect } from "react";
import { toast } from "sonner";
import { UseGameListStore } from "@/store/gameListState";

export const useGameModalListLogic = (game: {
  id: string;
  name: string;
  image: string;
}) => {
  const { addGameToList, lists, addList } = UseGameListStore();
 const [selectedList, setSelectedList] = useState(lists[0] || "");
  const [newListName, setNewListName] = useState("");
  const [status, setStatus] = useState<
    "Not Started" | "Still Playing" | "Completed"
  >("Not Started");
  const [review, setReview] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

useEffect(() => {
  if (!lists.includes("My List")) {
    addList("My List");
  }
}, [lists]);

  useEffect(() => {
    if (!lists.includes(selectedList)) {
      setSelectedList(lists[0] || "");
    }
  }, [lists, selectedList]);

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
    setSelectedList(newListName);
    setNewListName("");
  };

  const isValidStatus = (
    value: string,
  ): value is "Not Started" | "Still Playing" | "Completed" => {
    return ["Not Started", "Still Playing", "Completed"].includes(value);
  };

  const handleStatusChange = (value: string) => {
    if (isValidStatus(value)) {
      setStatus(value);
    } else {
      console.error("Invalid status value", value);
    }
  };

  return {
    lists,
    selectedList,
    setSelectedList,
    newListName,
    setNewListName,
    status,
    setStatus,
    review,
    setReview,
    timeSpent,
    setTimeSpent,
    handleSave,
    handleAddList,
    handleStatusChange,
  };
};
