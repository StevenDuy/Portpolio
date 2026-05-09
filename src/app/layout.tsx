import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HaloEffect } from "@/components/halo-effect";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HO HOANG DUY — Software Engineering Portfolio",
  description: "Full-stack developer portfolio specializing in Laravel, Next.js, AI-integrated systems, and scalable web applications.",
  openGraph: {
    title: "HO HOANG DUY — Software Engineering Portfolio",
    description: "Full-stack developer portfolio specializing in Laravel, Next.js, AI-integrated systems, and scalable web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HO HOANG DUY — Software Engineering Portfolio",
    description: "Full-stack developer portfolio specializing in Laravel, Next.js, AI-integrated systems, and scalable web applications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-foreground scroll-smooth">
        <HaloEffect />
        {children}
      </body>
    </html>
  );
}
