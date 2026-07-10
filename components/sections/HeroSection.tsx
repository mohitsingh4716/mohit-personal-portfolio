"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { fadeInUp, staggerContainer } from "@/utils/motion";
import { socialLinks } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-28 pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-14 lg:pt-8">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-8 max-w-3xl py-4 sm:py-6 md:py-8"
        >
          <div className="flex flex-col items-start gap-6">
            <motion.span
              variants={fadeInUp}
              className="hero-subtitle"
            >
              Full-Stack Developer
            </motion.span>

            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="hero-title">
                Building modern,{" "}
                <span className="text-gradient bg-[length:200%_200%] animate-gradientShift">
                  scalable web products
                </span>
              </h1>
              <p className="hero-description">
                I&apos;m <strong className="hero-highlight">Mohit Kumar</strong>, a <span className="hero-highlight">Full-Stack Developer</span> passionate about building real-world, impactful products using <strong className="hero-highlight">React</strong>, <strong className="hero-highlight"> Next.js, Node.js, and TypeScript</strong>, with a focus on performance, clean design, and scalability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-buttons-container">
              <Button href="#projects">
                View Projects
                <ArrowRight size={16} />
              </Button>
              <Button
                href="https://drive.google.com/file/d/1q7xezZP_iRKe3OJnbNXhPhnPqtZPfk1w/view?usp=sharing"
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
                <Download size={16} />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-sm hero-secondary-text pt-4">
              <span>Open to impactful full-stack roles.</span>
              <SocialIcons links={socialLinks} />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
