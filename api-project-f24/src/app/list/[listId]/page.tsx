"use client";

import { useParams } from "next/navigation";
import { deslugify } from "@/utility/slugify";
import SingleGameListPage from "@/components/gameList/SingleGameListPage";

export default function ListDetailPage() {
  const params = useParams();
  const slug = params?.listId as string;
  const listId = deslugify(slug);

  return (
    <div className="text-lg p-4 mt-15">
      <SingleGameListPage listId={listId} />
    </div>
  );
}
