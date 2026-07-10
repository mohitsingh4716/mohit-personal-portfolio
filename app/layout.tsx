import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-fallback",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit Kumar | Full-Stack Developer",
  description:
    "Portfolio of Mohit Kumar, a full-stack developer building polished web experiences with React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">{children}</body>
    </html>
  );
}
