import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Zalando Sans - body text & paragraphs (variable, 200-900)
const zalandoSans = localFont({
  src: [
    {
      path: "../fonts/zalando-sans-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "../fonts/zalando-sans-latin-wght-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-zalando",
});

// Zalando Sans Expanded - headings (variable, 200-900)
const zalandoSansExpanded = localFont({
  src: [
    {
      path: "../fonts/zalando-sans-expanded-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "../fonts/zalando-sans-expanded-latin-wght-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-zalando-expanded",
});

// Optimized SEO metadata
export const metadata: Metadata = {
  title: "Linktree | Deviators Club",
  description:
    "Official links for Deviators Club at Dronacharya College of Engineering (DCE). Connect with our coding community, access our resources, and deviate from the norm.",
  keywords: [
    "deviators club",
    "deviators club links",
    "deviators club linktree",
    "linktree",
    "links",
    "coding",
    "community",
    "dronacharya",
    "dce",
    "dronacharya college",
    "dronacharya clubs",
    "deviators dronacharya",
    "dronacharya college of engineering",
    "dce links",
    "dce linktree",
    "tech club",
    "programming",
  ],
  authors: [{ name: "Deviators Club" }],

  openGraph: {
    title: "Linktree | Deviators Club",
    description:
      "Official links for Deviators Club at Dronacharya College of Engineering (DCE). Connect with our coding community, access our resources, and deviate from the norm.",
    url: "https://linktree.deviators.club",
    siteName: "Deviators Club",
    images: [
      {
        url: "https://linktree.deviators.club/og-image.png",
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
    description:
      "Official links for Deviators Club at Dronacharya College of Engineering (DCE).",
    creator: "@deviatorsclub",
    images: ["https://linktree.deviators.club/og-image.png"],
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
      className={`${zalandoSans.variable} ${zalandoSansExpanded.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
