import React from "react";
import { getLatestEpisode } from "@/lib/data/episodes";
import { EpisodeHero } from "@/components/ras/episode/episode-hero";
import { MissionSection } from "@/components/ras/mission-section";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PodcastSeries",
      name: `${SITE_NAME} — Rise And Shine`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "KeilHQ",
        url: "https://keilhq.in",
      },
      publisher: {
        "@type": "Organization",
        name: "KeilHQ",
        url: "https://keilhq.in",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.png`,
        },
      },
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],
};

export default function HomePage() {
  const latestEpisode = getLatestEpisode();

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. LATEST EPISODE HERO (Broadcast interface) */}
      <EpisodeHero episode={latestEpisode} />

      {/* 2. PODCAST MANIFESTO / WHAT IS RAS (FULL-HEIGHT SCROLL-SYNCED HIGHLIGHT) */}
      <MissionSection />
    </div>
  );
}
