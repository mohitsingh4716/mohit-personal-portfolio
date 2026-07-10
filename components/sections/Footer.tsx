import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/20 py-10 md:py-14">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="font-display text-sm font-bold tracking-[0.2em] text-white">
              MOHIT.KUMAR
            </a>
            <p className="text-xs text-[var(--muted)] text-center md:text-left">
              Full-Stack Developer passionate about engineering polished products.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <SocialIcons links={socialLinks} />
            {/* <p className="text-[10px] text-[var(--muted)]">
              Built with Next.js, React & Tailwind CSS.
            </p> */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Mohit Kumar. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
