import Image from "next/image";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
}

export function SocialIcons({ links, className = "" }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border-white/10 transition duration-300 hover:scale-105 hover:border-cyan-300/40"
        >
          <Image src={link.icon} alt={link.label} width={20} height={20} className="h-5 w-5 object-contain" />
        </a>
      ))}
    </div>
  );
}
