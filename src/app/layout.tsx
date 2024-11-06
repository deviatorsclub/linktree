import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deviators Club | Get in touch with us",
  openGraph: {
    title: "Deviators Club",
    description: "Get in touch with us",
    url: "https://linktree.deviatorsdce.tech",
    siteName: "Deviators Club",
    images: [
      {
        url: "https://linktree.deviatorsdce.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club",
    description: "Get in touch with us",
    creator: "@devpulkitt",
    images: ["https://linktree.deviatorsdce.tech/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
