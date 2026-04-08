"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[-3] overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-purple-600/14 blur-3xl" />
        <div className="absolute bottom-16 right-[-4%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div
        className="pointer-events-none fixed z-[-2] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_62%)] blur-2xl md:block"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
