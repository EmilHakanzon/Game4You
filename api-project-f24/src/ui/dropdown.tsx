"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const links = [
    { name: "Home", href: "/" },
    { name: "Overview", href: "/overview" },
    { name: "List", href: "/list" },
    { name: "Ratings", href: "/ratings" },
  ];

  const handleSelect = (name: string) => {
    setSelected(name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="ml-1 flex items-center px-3 py-2 rounded-md text-[#3B82F6] cursor-pointer hover:bg-[#1b2435] transition"
      >
        <span className="text-sm mr-1">{selected}</span>
        <ChevronDown size={16} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute mt-2 w-40 bg-[#7C3AED] text-[#F1F5F9] rounded shadow-md z-50">
          {links.map((link) => (
            <li
              key={link.name}
              className="px-4 py-2 hover:bg-[#334155] cursor-pointer transition"
              onClick={() => handleSelect(link.name)}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
