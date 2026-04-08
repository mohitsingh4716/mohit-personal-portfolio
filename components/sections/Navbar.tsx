"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { navItems, socialLinks } from "@/data/portfolio";

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
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.55],
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-0 py-2 sm:py-3 md:py-4"
    >
      <Container>
        <div
          className={`glass-panel flex items-center justify-between gap-4 rounded-full px-3 py-3 sm:px-5 sm:py-2.5 md:px-6 md:py-3 transition duration-300  ${
            scrolled
              ? "border-[var(--border-strong)] shadow-[var(--shadow-glow)] backdrop-blur-md"
              : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-sm font-bold tracking-[0.2em] text-white sm:text-sm md:text-base"
          >
            MOHIT.KUMAR
          </a>

          {/* Nav Links */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[var(--muted)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
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
            <SocialIcons links={socialLinks} className="hidden sm:flex" />
            <Button
              href="#contact"
              variant="outline"
              // className="min-h-10 px-4 py-2 text-xs sm:text-sm"
              className="min-h-8 px-3 py-1.5 text-[10px] sm:min-h-9 sm:text-xs md:min-h-10 md:text-sm"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}