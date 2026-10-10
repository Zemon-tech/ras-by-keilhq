import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="RAS by KeilHQ Home"
    >
      {/* Brand Icon: Exclusively light logo */}
      <div className="relative flex h-8 sm:h-9 w-auto items-center justify-center shrink-0">
        <Image
          src="/ras-by-keilhq-logo-light.png"
          alt="RAS by KeilHQ Logo"
          width={36}
          height={36}
          className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          style={{ width: "auto" }}
          priority
        />
      </div>

      {/* Editorial Lockup: RAS by KeilHQ Podcast */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="font-mono font-extrabold text-xs sm:text-sm tracking-tight text-ras-black uppercase">
            RAS
          </span>
          <span className="font-mono text-[11px] sm:text-xs font-semibold text-ras-secondary tracking-tight">
            by KeilHQ
          </span>
        </div>
        <span className="font-mono text-[9px] sm:text-[10px] text-ras-orange font-bold tracking-widest uppercase">
          PODCAST
        </span>
      </div>
    </Link>
  );
}
