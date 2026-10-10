"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HOSTS } from "@/lib/data/hosts";
import { XIcon } from "./icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const STATEMENT_TEXT =
  "RISE AND SHINE IS WHERE FOUNDERS, OPERATORS, AND RESEARCHERS DECODE WHAT'S REALLY HAPPENING — IN REAL TIME. NO PR. NO POSTURING. JUST SHARP, BUILDER-BRAINED TAKES ON WHAT MATTERS.";

export function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const words = STATEMENT_TEXT.split(" ");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
          if (totalScrollable <= 0) return;

          const currentScroll = -rect.top;
          const rawProgress = currentScroll / totalScrollable;
          const clamped = Math.max(0, Math.min(1, rawProgress));

          setScrollProgress(clamped);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="explore-section" className="w-full bg-ras-background text-ras-black">
      {/* 2. SCROLL-SYNCED WORD-BY-WORD HIGHLIGHT HERO STAGE (No borders above or below) */}

      <section
        id="manifesto"
        ref={containerRef}
        className="relative w-full h-[190vh] sm:h-[220vh] bg-ras-background"
      >
        {/* Sticky Full-Viewport Stage */}
        <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-ras-background">

          {/* Wireframe Elliptical Loops Overlay on the Left - Scaled to cover mobile screen height */}
          <div className="pointer-events-none absolute left-[-60px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-0 opacity-40 h-[88vh] sm:h-[580px] flex items-center">
            <svg
              className="h-full w-auto"
              viewBox="0 0 360 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="120"
                cy="290"
                rx="90"
                ry="240"
                className="stroke-ras-orange"
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />
              <ellipse
                cx="180"
                cy="290"
                rx="90"
                ry="240"
                className="stroke-ras-orange"
                strokeWidth="0.8"
                strokeOpacity="0.35"
              />
              <ellipse
                cx="240"
                cy="290"
                rx="90"
                ry="240"
                className="stroke-ras-orange"
                strokeWidth="0.8"
                strokeOpacity="0.25"
              />
            </svg>
          </div>

          {/* Subtle Architectural Hairline Grid Line on Right (Matches Reference Image) */}
          <div className="pointer-events-none absolute right-[12%] sm:right-[18%] top-0 bottom-0 w-px bg-ras-black/[0.05] z-0" />
          <div className="pointer-events-none absolute top-1/2 inset-x-0 h-px bg-ras-black/[0.04] z-0" />

          {/* The Content Container */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12 text-left space-y-5 sm:space-y-4">
            {/* Monospace Eyebrow (Aligned flush left with the statement text) */}
            <div className="text-left">
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.25em] text-ras-black uppercase font-bold block text-left leading-relaxed">
                INDIA&apos;S REAL TECH PULSE — UNFILTERED AND ON THE CLOCK.
              </span>
            </div>

            {/* Large All-Caps Monospace Highlight Text - Increased height and line-spacing for mobile */}
            <h2 className="font-mono text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-normal uppercase leading-[1.5] sm:leading-[1.3] tracking-tight select-none max-w-4xl mx-auto text-justify [text-align-last:justify]">
              {words.map((word, index) => {
                // Spread illumination across 8% to 92% of the scroll track
                const startStep = 0.08 + (index / (words.length - 1)) * 0.84;
                const isLit = scrollProgress >= startStep;

                return (
                  <span
                    key={index}
                    className={`inline-block mr-[0.28em] font-normal transition-colors duration-150 ease-out ${isLit
                      ? "text-ras-black"
                      : "text-ras-disabled dark:text-ras-secondary"
                      }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>
      </section>

      {/* 3. TRANSITION STRIP & LIVESTREAMED PLATFORMS */}
      <section className="relative w-full pt-20 sm:pt-24 pb-16 sm:pb-20 bg-ras-background overflow-hidden">
        {/* Centered Manifesto Headline (Matches THE MINDS BEHIND THE MIC font size, style, margins, and padding) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-mono text-xl sm:text-3xl md:text-4xl font-normal uppercase tracking-tight leading-[1.28] sm:leading-[1.3] text-ras-black max-w-4xl mx-auto">
            WE BREAK DOWN NEWS, TOOLS,
            <br className="hidden sm:inline" />
            {" "}FUNDINGS, POLICIES AND TRENDS WITH
            <br className="hidden sm:inline" />
            {" "}THE PEOPLE WHO ACTUALLY BUILD.
          </h2>
        </div>
      </section>

      {/* 4. HOSTED BY SECTION (Matches Reference Images 1 & 2) */}
      <section className="relative w-full bg-ras-background overflow-hidden">

        {/* HOSTED BY Center Bar */}
        <div className="relative z-10 w-full pb-8 sm:pb-10 text-center">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-ras-black uppercase font-bold">
            HOSTED BY
          </span>
        </div>

        {/* Two Hosts with Vertical Split on Desktop, Stacked with Dividers on Mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ras-black/20 border-b border-ras-black/20 md:border-b-0">
            {/* Host 1: Shivang Kandoi (Left Column) */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 gap-6 md:gap-4 min-h-[300px]">
              {/* Info: Name, Role, Socials (Centered on Mobile, Right-aligned on Desktop) */}
              <div className="order-1 flex flex-col items-center md:items-end text-center md:text-right space-y-3.5 py-4 sm:py-6 md:py-8 self-center shrink-0">
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase tracking-tight leading-[1.28] sm:leading-[1.3] text-ras-black whitespace-nowrap">
                    {HOSTS[0].name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-ras-secondary mt-1.5 font-medium tracking-wide whitespace-nowrap">
                    {HOSTS[0].role}
                  </p>
                </div>

                {/* Social Badges: X & LinkedIn */}
                <div className="flex items-center justify-center md:justify-end gap-2.5 pt-1">
                  {HOSTS[0].socials.x && (
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg border-ras-black/70 bg-ras-surface/60 text-ras-black hover:bg-ras-black hover:text-ras-background shadow-2xs cursor-pointer"
                            render={
                              <a
                                href={HOSTS[0].socials.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${HOSTS[0].name} on X`}
                              />
                            }
                          >
                            <XIcon className="h-4 w-4" />
                          </Button>
                        }
                      />
                      <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                        {HOSTS[0].name} on X
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {HOSTS[0].socials.linkedin && (
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            className="group h-9 w-9 sm:h-10 sm:w-10 rounded-lg border-ras-black/70 bg-ras-surface/60 hover:bg-ras-black shadow-2xs cursor-pointer"
                            render={
                              <a
                                href={HOSTS[0].socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${HOSTS[0].name} on LinkedIn`}
                              />
                            }
                          >
                            <Image
                              src="/linkedin.png"
                              alt="LinkedIn"
                              width={18}
                              height={18}
                              className="h-4 w-4 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                            />
                          </Button>
                        }
                      />
                      <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                        {HOSTS[0].name} on LinkedIn
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>

              {/* Portrait: facing inward with bottom fade */}
              <div className="order-2 relative w-48 sm:w-56 md:w-52 lg:w-60 h-64 sm:h-72 md:h-80 overflow-hidden shrink-0 flex items-end justify-center self-center md:self-end">
                <img
                  src={HOSTS[0].image}
                  alt={HOSTS[0].name}
                  className="h-full w-full object-cover object-top grayscale contrast-115 brightness-95"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Host 2: Satyajit Jena (Right Column) */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 gap-6 md:gap-4 min-h-[300px]">
              {/* Portrait: Order 2 on Mobile (below text), Order 1 on Desktop (left of text) */}
              <div className="order-2 md:order-1 relative w-48 sm:w-56 md:w-52 lg:w-60 h-64 sm:h-72 md:h-80 overflow-hidden shrink-0 flex items-end justify-center self-center md:self-end">
                <img
                  src={HOSTS[1].image}
                  alt={HOSTS[1].name}
                  className="h-full w-full object-cover object-top grayscale contrast-115 brightness-95"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </div>

              {/* Info: Order 1 on Mobile (above image), Order 2 on Desktop (right of image) */}
              <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left space-y-3.5 py-4 sm:py-6 md:py-8 self-center shrink-0">
                <div>
                  <h3 className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase tracking-tight leading-[1.28] sm:leading-[1.3] text-ras-black whitespace-nowrap">
                    {HOSTS[1].name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-ras-secondary mt-1.5 font-medium tracking-wide whitespace-nowrap">
                    {HOSTS[1].role}
                  </p>
                </div>

                {/* Social Badges: X & LinkedIn */}
                <div className="flex items-center justify-center md:justify-start gap-2.5 pt-1">
                  {HOSTS[1].socials.x && (
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg border-ras-black/70 bg-ras-surface/60 text-ras-black hover:bg-ras-black hover:text-ras-background shadow-2xs cursor-pointer"
                            render={
                              <a
                                href={HOSTS[1].socials.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${HOSTS[1].name} on X`}
                              />
                            }
                          >
                            <XIcon className="h-4 w-4" />
                          </Button>
                        }
                      />
                      <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                        {HOSTS[1].name} on X
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {HOSTS[1].socials.linkedin && (
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            className="group h-9 w-9 sm:h-10 sm:w-10 rounded-lg border-ras-black/70 bg-ras-surface/60 hover:bg-ras-black shadow-2xs cursor-pointer"
                            render={
                              <a
                                href={HOSTS[1].socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${HOSTS[1].name} on LinkedIn`}
                              />
                            }
                          >
                            <Image
                              src="/linkedin.png"
                              alt="LinkedIn"
                              width={18}
                              height={18}
                              className="h-4 w-4 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                            />
                          </Button>
                        }
                      />
                      <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                        {HOSTS[1].name} on LinkedIn
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. THE MINDS BEHIND THE MIC CALLOUT (Matches Reference Screenshot) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto pt-24 sm:pt-30 pb-24 sm:pb-30 px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-ras-black uppercase font-bold block">
            THE MINDS BEHIND THE MIC
          </span>

          <h3 className="font-mono text-xl sm:text-3xl md:text-4xl font-normal uppercase tracking-tight leading-[1.28] sm:leading-[1.3] text-ras-black max-w-4xl mx-auto">
            FROM BREAKOUT FOUNDERS TO SHARP VCS —
            <br className="hidden sm:inline" />
            {" "}WE&apos;VE HAD THE PEOPLE SHAPING INDIA&apos;S
            <br className="hidden sm:inline" />
            {" "}TECH FUTURE ON THE SHOW.
          </h3>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="ras-gradient px-8 sm:px-10 py-3.5 sm:py-4 h-auto rounded-full font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-ras-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-ras-orange/20 border-none cursor-pointer"
              render={<Link href="/guests" />}
            >
              EXPLORE ALL GUESTS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
