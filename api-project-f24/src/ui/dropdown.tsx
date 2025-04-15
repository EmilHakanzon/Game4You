"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export const DropDown = () => {
    const [selected, setSelected] = useState("");
  
  return (
    <div className="ml-1 flex items-center px-3 py-2 rounded-md text-[#3B82F6] cursor-pointer hover:bg-[#1b2435] transition">
      <span className=" text-sm">{selected}</span>
      <ChevronDown size={16} />
    </div>
  );
}


export default DropDown
