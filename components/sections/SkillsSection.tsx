"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerChildrenFast } from "@/utils/motion";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-12">
        <Heading
          eyebrow="Core Stack"
          title={
            <>
              Tools I use to ship <span className="text-gradient">fast, reliable products</span>
            </>
          }
          description="A focused full-stack toolkit across frontend, backend, databases, animation, and deployment workflows."
          align="center"
        />

        <motion.div
          variants={staggerChildrenFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              className="group glass-panel relative overflow-hidden rounded-[var(--radius-md)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_50%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={skill.size}
                    height={skill.size}
                    loading="lazy"
                    className="h-auto w-auto object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-[var(--muted)]">{skill.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
