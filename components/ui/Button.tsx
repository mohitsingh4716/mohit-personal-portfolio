import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

interface ButtonAsButton
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: undefined;
}

interface ButtonAsLink
  extends SharedProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--gradient-primary)] text-white shadow-[0_18px_45px_rgba(79,124,255,0.35)] hover:shadow-[0_20px_55px_rgba(139,92,246,0.38)]",
  outline:
    "border border-[var(--border-strong)] bg-white/5 text-white hover:border-cyan-300/60 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-[var(--muted-strong)] hover:bg-white/5 hover:text-white",
};

const sharedClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.99]";

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const classes = `${sharedClassName} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
