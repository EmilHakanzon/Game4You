"use client";
import FavoriteList from "@/components/FavoriteList/favoriteList";
import OverviewRatings from "@/components/Rating/OverviewRatings";
import XpStats from "@/ui/xpUi";

export default function OverviewPage() {
  return (
    <div className="mt-28">
      <XpStats />
      <FavoriteList />
      <OverviewRatings />
    </div>
  );
}
