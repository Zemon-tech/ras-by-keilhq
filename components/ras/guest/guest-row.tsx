"use client";

import React from "react";
import { Guest, Episode } from "@/lib/types";

interface GuestRowProps {
  guest: Guest;
  episodes?: Episode[];
}

function Pill({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center justify-center rounded-full border border-ras-black/80 bg-transparent px-6 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-ras-black transition-colors cursor-pointer hover:bg-ras-black hover:text-ras-white"
    >
      {label}
    </a>
  );
}

export function GuestRow({ guest, episodes = [] }: GuestRowProps) {
  const latestEp = episodes[0];

  const epLabel = latestEp ? `#EPISODE ${latestEp.formattedNumber}` : "#GUEST";
  const companyLine = latestEp
    ? `${guest.company}  |  ${latestEp.displayDate.split(",")[0]}`
    : guest.company;
  const description = latestEp?.description ?? guest.bio;
  const youtube = latestEp?.platforms.youtube;

  return (
    <article className="w-full border-y border-ras-black bg-ras-background">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
        {/* Portrait with brand rail */}
        <div className="relative overflow-hidden bg-ras-charcoal min-h-[280px] md:min-h-[420px]">
          <span
            aria-hidden
            className="ras-rail absolute left-0 top-0 bottom-0 z-10 w-[7px]"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={guest.image}
            alt={guest.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top grayscale"
          />
        </div>

        {/* Body */}
        <div className="flex min-w-0 flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
          <p className="font-mono text-[15px] uppercase tracking-[0.06em] text-ras-black">
            {epLabel}
          </p>

          <div className="mt-4 flex flex-wrap items-start justify-between gap-x-8 gap-y-5">
            <h2 className="font-mono text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-normal uppercase leading-[1.5] sm:leading-[1.3] tracking-tight text-ras-black">
              {guest.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {youtube ? (
                <Pill label="Youtube" href={youtube} />
              ) : (
                <span className="inline-flex h-10 items-center justify-center rounded-full border border-ras-black/25 px-6 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-ras-gray cursor-default">
                  Youtube · Scheduled
                </span>
              )}
            </div>
          </div>

          <p className="mt-5 font-mono text-[17px] font-bold uppercase tracking-[0.04em] text-ras-black">
            {companyLine}
          </p>

          <div className="flex-1" />

          <p className="mt-10 max-w-[660px] font-mono text-[16px] leading-[1.65] text-ras-black">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
