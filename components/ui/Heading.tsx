import { ReactNode } from "react";

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="surface-highlight rounded-full border border-[var(--border-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-strong)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-[var(--muted)] sm:text-base leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
