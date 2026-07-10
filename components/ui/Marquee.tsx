"use client";

import React from "react";

const brandColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#ffffff",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  "Express.js": "#cbd5e1",
  Firebase: "#FFCA28",
  MongoDB: "#47A248",
  PostgreSQL: "#4169E1",
  Prisma: "#10B981",
  "Tailwind CSS": "#38BDF8",
  "Redux Toolkit": "#764ABC",
  "Framer Motion": "#F024B3",
  Cloudinary: "#3448C5",
  Razorpay: "#0B72E7",
  Git: "#F05032",
  GitHub: "#ffffff",
  Vercel: "#ffffff",
  "REST API": "#FF5722",
  HTML: "#E34F26",
  CSS: "#1572B6",
};

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate elements to ensure seamless scrolling
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade overlay left */}
      <div className="pointer-events-none rounded-l-3xl absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#0b0f19] to-transparent" />
      {/* Fade overlay right */}
      <div className="pointer-events-none rounded-r-3xl absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#0b0f19] to-transparent" />

      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] gap-4">
        {duplicatedItems.map((item, idx) => {
          const color = brandColors[item] || "#94a3b8";

          return (
            <div
              key={`${item}-${idx}`}
              style={
                {
                  "--brand-hover-color": color,
                  "--brand-glow-color": `${color}25`,
                } as React.CSSProperties
              }
              className="group relative flex items-center justify-center rounded-full border border-white/5 bg-slate-900/30 px-5 py-2 text-xs font-semibold tracking-wide text-slate-400 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer hover:border-[var(--brand-hover-color)] hover:text-white hover:bg-slate-950/60 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_16px_var(--brand-glow-color)]"
            >
              {item}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </div>
  );
}
