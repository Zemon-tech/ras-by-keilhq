"use client";

import Image from "next/image";
import { Episode } from "@/lib/types";

interface EpisodeHeroProps {
  episode?: Episode;
}

const NETWORK_PARTNERS = [
  {
    name: "KeilHQ",
    src: "/keilhq.png",
    width: 240,
    height: 90,
    className: "h-8 sm:h-10 md:h-12",
  },
  {
    name: "Qeno AI",
    src: "/qeno-ai.png",
    width: 220,
    height: 90,
    className: "h-9 sm:h-11 md:h-13",
  },
  {
    name: "Unmaster",
    src: "/unmaster.png",
    width: 240,
    height: 90,
    className: "h-9 sm:h-11 md:h-13",
  },
  {
    name: "Solaris Motion",
    src: "/solaris-motion.png",
    width: 240,
    height: 90,
    className: "h-8 sm:h-10 md:h-12",
  },
  {
    name: "Nuzio AI",
    src: "/nuzio-ai.png",
    width: 240,
    height: 90,
    className: "h-8 sm:h-10 md:h-12",
  },
  {
    name: "Zemon",
    src: "/zemon.png",
    width: 240,
    height: 90,
    className: "h-7 sm:h-9 md:h-10",
  },
  {
    name: "Stingray Robotix",
    src: "/stingray-robotix.png",
    width: 240,
    height: 90,
    className: "h-8 sm:h-10 md:h-12",
  },
];

export function EpisodeHero({ episode: _episode }: EpisodeHeroProps) {

  return (
    <section className="relative w-full bg-ras-background text-ras-black overflow-hidden flex flex-col">

      {/* Kept as-is: wireframe spiral ellipses */}
      <div className="pointer-events-none absolute left-[-40px] sm:left-[-10px] top-[10px] sm:top-[20px] z-0 opacity-100">
        <svg width="340" height="420" viewBox="0 0 340 420" fill="none">
          <ellipse
            cx="110"
            cy="210"
            rx="95"
            ry="190"
            className="stroke-ras-orange"
            strokeWidth="0.8"
            strokeOpacity="0.45"
          />
          <ellipse
            cx="170"
            cy="210"
            rx="95"
            ry="190"
            className="stroke-ras-orange"
            strokeWidth="0.8"
            strokeOpacity="0.32"
          />
          <ellipse
            cx="230"
            cy="210"
            rx="95"
            ry="190"
            className="stroke-ras-orange"
            strokeWidth="0.8"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      {/* Reference: small deco marks */}
      <span
        aria-hidden
        className="absolute left-[12%] top-[36%] z-0 hidden md:block h-2 w-2 bg-ras-orange"
      />
      <span
        aria-hidden
        className="absolute left-[6.5%] bottom-[32%] z-0 hidden md:block font-mono text-xl leading-none text-ras-orange"
      >
        +
      </span>
      <span
        aria-hidden
        className="absolute right-[6%] top-[14%] z-0 hidden md:block font-mono text-2xl leading-none text-ras-black/30"
      >
        +
      </span>
      <span
        aria-hidden
        className="absolute right-[5%] top-[56%] z-0 hidden md:block h-2 w-2 bg-ras-black/30"
      />

      {/* Centered hero copy */}
      <div className="relative z-10 w-full mx-auto max-w-4xl px-4 sm:px-6 pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 text-center">
        {/* Ruled eyebrow */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="h-px w-12 sm:w-20 bg-ras-black/25" />
          <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.32em] uppercase text-ras-black">
            A tech podcast
          </span>
          <span className="h-px w-12 sm:w-20 bg-ras-black/25" />
        </div>

        {/* Sans headline with orange square dot */}
        <h1 className="mx-auto mt-8 max-w-4xl font-sans font-semibold tracking-[-0.03em] leading-[1.02] text-ras-black text-[clamp(2.75rem,7vw,5.25rem)]">
          Conversations that
          <br className="hidden sm:block" />
          {" "}build what&apos;s next
          <span
            aria-hidden
            className="ml-[0.08em] inline-block h-[0.22em] w-[0.22em] bg-ras-orange"
          />
        </h1>

        {/* Subcopy */}
        <p className="mx-auto mt-7 max-w-2xl font-mono text-[13px] sm:text-[15px] leading-[1.9] text-ras-black/80">
          Unfiltered conversations with founders, creators, builders and
          researchers shaping India&apos;s tech future.
        </p>
      </div>

      {/* BOTTOM ARCHITECTURAL STRIP: Our Network Marquee (kept as-is) */}
      <div className="w-full">
        {/* Ruled Eyebrow Label */}
        <div className="w-full px-4 pt-3 pb-2">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 sm:gap-6">
            <span className="h-px w-24 sm:w-48 bg-ras-black/20" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-ras-secondary uppercase font-semibold">
              Our network
            </span>
            <span className="h-px w-24 sm:w-48 bg-ras-black/20" />
          </div>
        </div>

        {/* Infinite Marquee Track with Feathered Edge Gradients */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20">
            {/* Duplicated array for seamless infinite looping */}
            {[...NETWORK_PARTNERS, ...NETWORK_PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center shrink-0 h-12 sm:h-14 md:h-16 px-2"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`${partner.className} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
