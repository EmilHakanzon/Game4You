"use client";

import { useParams } from "next/navigation";
import { deslugify } from "@/utility/slugify";
import { useState, useEffect } from "react";
import SingleGameListPage from "@/components/gameList/SingleGameListPage";

export default function ListDetailPage() {
  const params = useParams();
  const slug = params?.listId as string;
  const listId = deslugify(slug);

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  // Ny LoadingSpinner-komponent
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <LoadingSpinner /> 
          <p className="text-white mt-4">Loading list...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-lg p-4 mt-15">
      <SingleGameListPage listId={listId} />
    </div>
  );
}
