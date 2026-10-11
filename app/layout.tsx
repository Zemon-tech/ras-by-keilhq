import type { Metadata, Viewport } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ras/header";
import { Footer } from "@/components/ras/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "RAS podcast",
    "Rise And Shine",
    "KeilHQ",
    "Indian tech podcast",
    "startup podcast India",
    "founders",
    "builders",
    "researchers",
    "frontier technology",
    "deeptech India",
  ],
  authors: [{ name: "KeilHQ", url: "https://keilhq.in" }],
  creator: "KeilHQ",
  publisher: "KeilHQ",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icon.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Conversations that build what's next.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rasbykeilhq",
    creator: "@rasbykeilhq",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-ras-background text-ras-black font-mono selection:bg-ras-orange/20 selection:text-ras-black">
        <TooltipProvider delay={150}>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}

