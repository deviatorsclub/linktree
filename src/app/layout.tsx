import type { Metadata } from "next";
import { Outfit, Unbounded } from "next/font/google";
import "./globals.css";

// Outfit — body text (variable, 100–900) — matching deviatorsclub.tech
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-outfit",
  adjustFontFallback: false,
});

// Unbounded — headings (variable, weight 200–900) — matching deviatorsclub.tech
const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-heading",
  adjustFontFallback: false,
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
      className={`${outfit.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
