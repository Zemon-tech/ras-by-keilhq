import { Guest } from "../types";

export const GUESTS: Guest[] = [
  {
    id: "ravikant-varma",
    slug: "ravikant-varma",
    name: "Ravikant Varma",
    role: "Founder & Lead Designer",
    company: "Solaris Motion",
    image: "/ravikant.png",
    bio: "Ravikant Varma is the Founder & Lead Designer of Solaris Motion, a Delhi-based Atal Incubation Centre startup building AI-driven unmanned ground and aerial systems for logistics and defence. He previously served as President of the KMC Physics Robotics Club and led a 25-member team as Project Head of the KMC Infinite Rover project, competing at the University Rover Challenge 2024 and securing a 14th global ranking at the Australian Rover Challenge 2024.",
    socials: {
      linkedin: "https://linkedin.com/in/ravikant-varma-138526239",
      website: "https://solarismotion.com",
    },
    topics: ["ROBOTICS", "DEFENCE TECH", "AI", "HARDWARE"],
  },
];

export function getGuestBySlug(slug: string): Guest | undefined {
  return GUESTS.find((g) => g.slug === slug);
}
