import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIRAVAT — UX Case Study",
  description:
    "A deep-dive UX case study of AIRAVAT 3.0 — a 24-hour national AI hackathon website. Exploring product design, user flows, and interface decisions.",
  keywords: ["UX Case Study", "AIRAVAT", "Hackathon", "AI", "Product Design"],
  openGraph: {
    title: "AIRAVAT — UX Case Study",
    description:
      "A brutalist design publication exploring the UX of AIRAVAT 3.0, a national-level AI hackathon platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
