/** @format */

import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const space_mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title : "Tip Calculator App",
  description: "Calculates tip for each person in a group.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Tip Calculator App",
    description: "Calculates tip for each person in a group.",
    url: "https://tip-calculator-dusky.vercel.app/",
    siteName: "Tip Calculator App",
    images: [
      {
        url: "https://tip-calculator-dusky.vercel.app/api/og",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_mono.className}>{children}</body>
    </html>
  );
}
