import type { Metadata } from "next";
import { Pixelify_Sans, Quicksand } from "next/font/google";
import "./globals.css";

// Optimized font configuration for Pixelify Sans (main heading font)
const pixelifySans = Pixelify_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-pixelify",
  adjustFontFallback: false, // Better performance
});

// Secondary font for body text
const quicksand = Quicksand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  preload: true,
  variable: "--font-quicksand",
  adjustFontFallback: false, // Better performance
});

// Optimized SEO metadata
export const metadata: Metadata = {
  title: "Linktree | Deviators Club",
  description: "Connect with Deviators Club - Code. Create. Deviate.",
  keywords: ["Deviators Club", "coding", "development", "community", "links"],
  authors: [{ name: "Deviators Club" }],

  openGraph: {
    title: "Linktree | Deviators Club",
    description: "Connect with Deviators Club - Code. Create. Deviate.",
    url: "https://linktree.deviatorsdce.tech",
    siteName: "Deviators Club",
    images: [
      {
        url: "https://linktree.deviatorsdce.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deviators Club - Code. Create. Deviate.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Linktree | Deviators Club",
    description: "Connect with Deviators Club - Code. Create. Deviate.",
    creator: "@deviatorsclub",
    images: ["https://linktree.deviatorsdce.tech/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${quicksand.variable}`}
      suppressHydrationWarning
    >
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
