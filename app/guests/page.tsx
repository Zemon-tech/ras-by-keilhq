import React from "react";
import { GUESTS } from "@/lib/data/guests";
import { getEpisodesByGuestSlug } from "@/lib/data/episodes";
import { GuestRow } from "@/components/ras/guest/guest-row";

export default function GuestsArchivePage() {
  const guests = [...GUESTS].sort((a, b) => {
    const numA = getEpisodesByGuestSlug(a.slug)[0]?.number ?? 0;
    const numB = getEpisodesByGuestSlug(b.slug)[0]?.number ?? 0;
    return numB - numA;
  });

  return (
    <div className="w-full bg-ras-background font-sans text-ras-black antialiased">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Left ellipse cluster */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-28 top-1/2 hidden -translate-y-1/2 opacity-50 md:block"
        >
          <svg width="300" height="520" viewBox="0 0 300 520" fill="none">
            <ellipse
              cx="100"
              cy="260"
              rx="80"
              ry="230"
              className="stroke-ras-orange"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <ellipse
              cx="160"
              cy="260"
              rx="80"
              ry="230"
              className="stroke-ras-orange"
              strokeWidth="0.8"
              strokeOpacity="0.28"
            />
            <ellipse
              cx="220"
              cy="260"
              rx="80"
              ry="230"
              className="stroke-ras-orange"
              strokeWidth="0.8"
              strokeOpacity="0.18"
            />
          </svg>
        </div>
        <span
          aria-hidden
          className="absolute left-[9%] top-[46%] z-0 hidden h-2.5 w-2.5 rotate-45 bg-ras-orange md:block"
        />
        <span
          aria-hidden
          className="absolute left-[13%] top-[62%] z-0 hidden font-mono text-xl leading-none text-ras-orange md:block"
        >
          +
        </span>

        {/* Right arcs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-44 -top-28 z-0 hidden h-[480px] w-[480px] rounded-full border border-ras-orange/25 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-16 z-0 hidden h-[480px] w-[480px] rounded-full border border-ras-orange/25 md:block"
        />
        <span
          aria-hidden
          className="absolute right-[9%] top-[52%] z-0 hidden h-2.5 w-2.5 rotate-45 bg-ras-orange md:block"
        />
        <span
          aria-hidden
          className="absolute right-[5%] top-[34%] z-0 hidden font-mono text-2xl leading-none text-ras-orange md:block"
        >
          +
        </span>

        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14 text-center">
          {/* Ruled eyebrow */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-px w-12 sm:w-16 bg-ras-orange/60" />
            <p className="font-mono text-[11px] sm:text-[13px] tracking-[0.3em] uppercase text-ras-orange">
              Guest directory
            </p>
            <span className="h-px w-12 sm:w-16 bg-ras-orange/60" />
          </div>

          {/* One-line title */}
          <h1 className="mt-6 font-sans font-extrabold tracking-tight text-ras-black whitespace-nowrap text-[clamp(1.65rem,6vw,4.5rem)] leading-[1.05]">
            THE GUEST ARCHIVE
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-[13px] sm:text-[15px] leading-[1.9] text-ras-black/80">
            Founders, builders, researchers and operators shaping
            India&apos;s frontier technology landscape. Candid conversations on
            ideas, execution and what comes next.
          </p>
        </section>
      </div>

      {/* List — full-width editorial rows */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="space-y-10 border-t border-ras-black pt-10">
          {guests.map((guest) => (
            <GuestRow
              key={guest.id}
              guest={guest}
              episodes={getEpisodesByGuestSlug(guest.slug)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
