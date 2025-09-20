import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyanshu Rawat - Full Stack Developer",
  description:
    "Full Stack Developer passionate about building innovative solutions with modern technologies and exploring the decentralized web. Specializing in React, Next.js, TypeScript, and Blockchain development.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Blockchain",
    "Web3",
    "AI",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Divyanshu Rawat" }],
  creator: "Divyanshu Rawat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divyanshu-portfolio.vercel.app/",
    title: "Divyanshu Rawat - Full Stack Developer",
    description:
      "Full Stack Developer passionate about building innovative solutions with modern technologies and exploring the decentralized web.",
    siteName: "Divyanshu Rawat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Rawat - Full Stack Developer",
    description:
      "Full Stack Developer passionate about building innovative solutions with modern technologies and exploring the decentralized web.",
    creator: "@divyanshu_dev",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
