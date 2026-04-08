"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { fadeInUp, floatingAnimation, staggerContainer } from "@/utils/motion";
import { socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-28 pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col items-start gap-6">
            <motion.span
              variants={fadeInUp}
              className="surface-highlight rounded-full border border-[var(--border-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-strong)]"
            >
              Full-Stack Developer
            </motion.span>

            <motion.div variants={fadeInUp} className="space-y-5">
              <h1 className="font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Building modern, {" "}
                {/* products with a{" "} */}
                <span className="text-gradient bg-[length:200%_200%] animate-gradientShift">
                  {/* sharp frontend and scalable backend. */}
                  scalable web products
                </span>
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted)] sm:text-lg">
                I&apos;m Mohit Kumar, a full-Stack Developer passionate about building real-world, impactful products using React, Next.js, and Node.js, with a focus on performance, clean design, and scalability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button href="#projects">
                View Projects
                <ArrowRight size={16} />
              </Button>
              <Button
                href="https://drive.google.com/file/d/14peffnQx01cB9c3rLssU0wX0iYFw2h_A/view?usp=sharing"
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
                   <Download size={16} />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
              <span>Open to impactful full-stack roles.</span>
              <SocialIcons links={socialLinks} />
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            animate={floatingAnimation}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-auto top-12 h-64 w-64 rounded-full bg-purple-500/25 blur-3xl sm:h-80 sm:w-80" />
            <div className="glass-panel relative flex aspect-square w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[32px] border-[var(--border-strong)] p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
              <Image
                src="/cube-unscreen.gif"
                alt="Floating 3D cube"
                width={520}
                height={520}
                priority
                unoptimized
                className="relative z-10 h-auto w-full max-w-[460px] object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.4)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
