"use client";

import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Heading } from "@/components/ui/Heading";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/utils/motion";
import { Button } from "../ui/Button";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="section-divider relative">
      <div className="flex flex-col gap-12">
        <Heading
          eyebrow="Professional Journey"
          title={
            <>
              Real-world{" "}
              <span className="text-gradient">industry experience</span>
            </>
          }
          description="A breakdown of my professional full-stack developer internships and freelancing engineering roles."
          align="center"
        />

        <div className="relative mx-auto max-w-4xl w-full ">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-12 top-6 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500/50 via-cyan-500/40 to-transparent -translate-x-1/2" />

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-12 w-full"
          >
            {experiences.map((exp) => {
              return (
                <motion.div
                  key={exp.company}
                  variants={fadeInUp}
                  className="relative flex items-start justify-center w-full"
                >
                  {/* Timeline icon dot */}
                  <div className="absolute left-4 md:left-12 top-1.5 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-500/30 bg-slate-950 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                    <Briefcase size={14} className="text-indigo-400" />
                  </div>

                  {/* Experience Card Container (72% width on desktop) */}
                  <div className="w-full md:w-[73%] pl-10 md:pl-14">
                    <div className="glass-panel p-6 rounded-2xl border border-white/[0.06] bg-slate-900/10 backdrop-blur-sm hover:border-indigo-500/25 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.06)] hover:-translate-y-1 group">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold tracking-wider text-indigo-400/90 uppercase">
                          {exp.role}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                          <Calendar size={12} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h4 className="text-lg font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
                        {exp.company}
                      </h4>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-[var(--muted)] leading-relaxed"
                          >
                            <span className="text-indigo-400 mt-1.5 select-none font-bold text-xs">
                              •
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlighted stack */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} label={tech} />
                        ))}
                      </div>

                     {exp.link && <div
                        className="mt-4 flex "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="min-h-11 px-5 py-2.5"
                        >
                          Live Demo
                          <ExternalLink size={16} />
                        </Button>
                      </div>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
