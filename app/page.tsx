import React from "react";
import { getLatestEpisode } from "@/lib/data/episodes";
import { EpisodeHero } from "@/components/ras/episode/episode-hero";
import { MissionSection } from "@/components/ras/mission-section";

export default function HomePage() {
  const latestEpisode = getLatestEpisode();

  return (
    <div className="flex flex-col w-full">
      {/* 1. LATEST EPISODE HERO (Broadcast interface) */}
      <EpisodeHero episode={latestEpisode} />

      {/* 2. PODCAST MANIFESTO / WHAT IS RAS (FULL-HEIGHT SCROLL-SYNCED HIGHLIGHT) */}
      <MissionSection />
    </div>
  );
}
