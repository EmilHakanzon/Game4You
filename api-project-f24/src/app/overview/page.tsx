"use client";
import FavoriteList from "@/components/FavoriteList/favoriteList";
import OverviewRatings from "@/components/Rating/OverviewRatings";
import OverViewList from "@/ui/overviewList";
import XpStats from "@/ui/xpUi";

export default function OverviewPage() {
  return (
    <div className="mt-28">
      <XpStats />
      <FavoriteList />
      <OverviewRatings />
      {/* <div className="rounded-lg">
        <img src="/Skärmbild 2025-05-06 190955.jpg" alt="hero-img" className="w-full "/>
      </div> */}
      <main className="pl-[230px]">
        <OverViewList />
      </main>
    </div>
  );
}
