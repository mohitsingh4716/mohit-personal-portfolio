"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled
      setScrolled(currentScrollY > 16);

      // Scroll direction logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling DOWN → hide
        setShowNavbar(false);
      } else {
        // scrolling UP → show
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140; // threshold for active section activation

      // Edge case: Top of the page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Edge case: Bottom of the page (e.g. Contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Trigger initially

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4 md:py-5"
    >
      <Container>
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5 transition-all duration-500 border border-white/5 backdrop-blur-xl bg-slate-950/35 shadow-[var(--shadow-soft)] ${
            scrolled
              ? "border-indigo-500/15 bg-slate-950/60 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.5)]"
              : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-xs font-bold tracking-[0.2em] text-white sm:text-sm md:text-base hover:opacity-80 transition-opacity"
          >
            MOHIT.KUMAR
          </a>

          {/* Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[var(--muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 border border-indigo-500/15"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* <SocialIcons links={socialLinks} className="hidden sm:flex" /> */}
            <Button
              href="#contact"
              variant="outline"
              className="min-h-8 px-3 py-1.5 text-[10px] sm:min-h-9 sm:text-xs md:min-h-9 md:text-xs"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}