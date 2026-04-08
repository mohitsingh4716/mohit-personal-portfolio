import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">{children}</body>
    </html>
  );
}
