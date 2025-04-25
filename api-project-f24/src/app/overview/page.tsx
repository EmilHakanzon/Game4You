"use client";
import FavoriteList from "@/components/FavoriteList/favoriteList";
import XpStats from "@/ui/xpUi";

export default function OverviewPage() {
  return (
    <div className="mt-28">
      <XpStats />
      <FavoriteList />
    </div>
  );
}
