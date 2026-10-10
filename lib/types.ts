export type TranscriptSection = {
  speaker: string;
  speakerType: "host" | "guest";
  text: string;
  timestamp?: string;
};

export type Guest = {
  id: string;
  slug: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  socials: {
    x?: string;
    linkedin?: string;
    website?: string;
    github?: string;
  };
  topics: string[];
};

export type Host = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    x?: string;
    linkedin?: string;
  };
};

export type EpisodePlatforms = {
  youtube?: string;
  spotify?: string;
  apple?: string;
  x?: string;
};

export type Episode = {
  id: string;
  slug: string;
  number: number;
  formattedNumber: string; // e.g. "016"
  title: string;
  guest: Guest;
  description: string;
  date: string;
  displayDate: string; // e.g. "OCTOBER 08, 2026"
  duration: string; // e.g. "1h 24m"
  thumbnail: string;
  youtubeId?: string;
  topics: string[];
  platforms: EpisodePlatforms;
  transcript: {
    wordCount: number;
    sections: TranscriptSection[];
  };
  featured?: boolean;
  highlightQuote?: string;
};
