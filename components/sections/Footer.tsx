import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="pb-10 pt-2">
      <Container>
        <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-center text-sm text-[var(--muted)]">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved
        </div>
      </Container>
    </footer>
  );
}
