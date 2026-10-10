import { Episode } from "../types";
import { GUESTS } from "./guests";

export const EPISODES: Episode[] = [
  {
    id: "ep-001",
    slug: "ravikant-varma-redefining-logistics-with-autonomous-systems",
    number: 1,
    formattedNumber: "001",
    title: "REDEFINING LOGISTICS WITH UNMANNED GROUND AND AERIAL SYSTEMS",
    guest: GUESTS[0], // Ravikant Varma
    description:
      "Ravikant Varma walks through Solaris Motion's mission to redefine logistics with rugged, AI-driven unmanned ground and aerial platforms, how a student rover team that ranked 14th globally grew into a defence-tech startup, and what it takes to build autonomous systems from Delhi for the world.",
    date: "",
    displayDate: "SCHEDULED",
    duration: "TBD",
    thumbnail: "/ravikant.png",
    topics: ["ROBOTICS", "DEFENCE TECH", "AI", "HARDWARE"],
    platforms: {},
    transcript: {
      wordCount: 0,
      sections: [],
    },
  },
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return EPISODES.find((e) => e.slug === slug);
}

export function getLatestEpisode(): Episode {
  return EPISODES[0];
}

export function getEpisodesByGuestSlug(guestSlug: string): Episode[] {
  return EPISODES.filter((e) => e.guest.slug === guestSlug);
}

export function getRelatedEpisodes(currentSlug: string, count: number = 3): Episode[] {
  return EPISODES.filter((e) => e.slug !== currentSlug).slice(0, count);
}
