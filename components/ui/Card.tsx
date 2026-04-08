import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glass-panel surface-highlight rounded-[var(--radius-lg)] ${className}`}
    >
      {children}
    </div>
  );
}
