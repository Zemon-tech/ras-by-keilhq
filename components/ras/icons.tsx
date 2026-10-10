import React from "react";

export function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function SpotifyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.31a.75.75 0 0 1-1.033.25c-2.827-1.727-6.386-2.118-10.579-1.162a.75.75 0 1 1-.334-1.462c4.59-1.047 8.528-.605 11.696 1.341a.75.75 0 0 1 .25 1.033zm1.469-3.268a.938.938 0 0 1-1.29.31c-3.236-1.99-8.169-2.564-11.996-1.402a.938.938 0 1 1-.546-1.794c4.375-1.328 9.805-.688 13.522 1.596a.937.937 0 0 1 .31 1.29zm.126-3.41c-3.881-2.304-10.285-2.516-13.996-1.39a1.125 1.125 0 1 1-.652-2.153c4.267-1.295 11.332-1.046 15.803 1.608a1.125 1.125 0 0 1-1.155 1.935z" />
    </svg>
  );
}

export function ApplePodcastsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 3.326c4.782 0 8.674 3.892 8.674 8.674a8.653 8.653 0 0 1-3.696 7.087l-1.09-1.524a6.762 6.762 0 0 0 2.875-5.563c0-3.738-3.04-6.763-6.763-6.763S5.237 8.275 5.237 12.013a6.762 6.762 0 0 0 2.875 5.563l-1.09 1.524A8.653 8.653 0 0 1 3.326 12c0-4.782 3.892-8.674 8.674-8.674zm0 3.805a4.874 4.874 0 0 1 4.869 4.869c0 1.706-.88 3.208-2.206 4.076l-1.054-1.562a2.973 2.973 0 0 0 1.349-2.514 2.964 2.964 0 0 0-2.958-2.958 2.964 2.964 0 0 0-2.958 2.958c0 1.054.545 1.983 1.349 2.514l-1.054 1.562A4.856 4.856 0 0 1 7.131 12a4.874 4.874 0 0 1 4.869-4.869zm0 6.652a1.442 1.442 0 1 1 0 2.884 1.442 1.442 0 0 1 0-2.884zm-.956 3.804h1.913v6.087h-1.913z" />
    </svg>
  );
}

export function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.46a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

