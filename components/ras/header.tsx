"use client";

import React, { useState, useRef, useEffect } from "react";
import { Logo } from "./logo";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY.current;

          // Always show header at the very top of the page
          if (currentScrollY <= 30) {
            setIsVisible(true);
          } else if (diff > 8) {
            // Scrolling down: hide header
            setIsVisible(false);
          } else if (diff < -8) {
            // Scrolling up: reveal header
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-ras-background font-mono transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT: Clean Logo Mark */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* RIGHT: Community CTA */}
        <div className="flex items-center">
          <Button
            size="sm"
            className="group rounded-lg inline-flex items-center gap-1.5 px-3 sm:px-3.5 h-8 border border-ras-charcoal bg-ras-charcoal text-ras-background text-[11px] sm:text-xs font-semibold tracking-wider uppercase hover:bg-ras-orange hover:border-ras-orange transition-colors shadow-sm cursor-pointer"
            render={
              <a
                href="https://tally.so/r/b5BdP7"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <span>JOIN RAS</span>
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
