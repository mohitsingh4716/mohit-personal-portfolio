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
    "bg-[var(--gradient-primary)] text-white border border-indigo-400/20 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_24px_rgba(99,102,241,0.45)]",
  outline:
    "border border-white/10 bg-white/[0.03] text-slate-100 hover:border-indigo-500/35 hover:bg-white/[0.08] shadow-sm",
  ghost:
    "border border-transparent bg-transparent text-[var(--muted-strong)] hover:bg-white/[0.05] hover:text-white",
};

const sharedClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0";

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
