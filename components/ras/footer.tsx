"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  YoutubeIcon,
  XIcon,
  InstagramIcon,
} from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-ras-background">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16 flex flex-col justify-between min-h-[340px]">
        {/* Top Section: Centered on Mobile, Left/Right Split on Desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 text-center sm:text-left">
          <Link href="/" className="inline-block group">
            <Image
              src="/ras-by-keilhq-light-mode.png"
              alt="RAS by KeilHQ Logo"
              width={480}
              height={200}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Social Icons with ShadCN Tooltip and Button */}
          <div className="flex items-center justify-center sm:justify-end gap-2.5 sm:gap-3">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl border-ras-border bg-ras-surface/70 text-ras-black hover:border-ras-black hover:bg-ras-black hover:text-ras-background shadow-sm cursor-pointer"
                    render={
                      <a
                        href="https://instagram.com/keilhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      />
                    }
                  >
                    <InstagramIcon className="h-4.5 w-4.5" />
                  </Button>
                }
              />
              <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                Instagram / @keilhq
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl border-ras-border bg-ras-surface/70 text-ras-black hover:border-ras-black hover:bg-ras-black hover:text-ras-background shadow-sm cursor-pointer"
                    render={
                      <a
                        href="https://x.com/keilhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                      />
                    }
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                }
              />
              <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                X / @keilhq
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl border-ras-border bg-ras-surface/70 text-ras-black hover:border-ras-black hover:bg-ras-black hover:text-ras-background shadow-sm cursor-pointer"
                    render={
                      <a
                        href="https://youtube.com/@keilhq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      />
                    }
                  >
                    <YoutubeIcon className="h-4.5 w-4.5" />
                  </Button>
                }
              />
              <TooltipContent className="font-mono text-xs uppercase tracking-wider">
                YouTube / @keilhq
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <Separator className="bg-ras-black/10 my-4" />

        {/* Bottom Section: Privacy/Terms • Email • Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold text-ras-black">
          <div className="text-center md:text-left">
            <a
              href="mailto:hello@keilhq.com"
              className="hover:text-ras-orange transition-colors tracking-widest"
            >
              HELLO@KEILHQ.COM
            </a>
          </div>

          <div className="text-right text-ras-black">
            © 2026 RAS BY KEILHQ. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

