import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ras/header";
import { Footer } from "@/components/ras/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAS by KeilHQ — Rise And Shine Podcast",
  description:
    "The official podcast by KeilHQ featuring the founders, builders, operators, and investors shaping what's next in Indian and global technology.",
  openGraph: {
    title: "RAS by KeilHQ — Rise And Shine Podcast",
    description:
      "Unfiltered conversations with the founders, operators, deeptech researchers, and investors building defining generational companies.",
    siteName: "RAS by KeilHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@keilhq",
    creator: "@keilhq",
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

