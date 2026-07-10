"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerChildrenFast } from "@/utils/motion";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js", 
  "Firebase", "MongoDB", "PostgreSQL", "Prisma", "Tailwind CSS", "Redux Toolkit", 
  "Framer Motion", "Cloudinary", "Razorpay", "Git", "GitHub", "Vercel", 
  "REST API", "HTML", "CSS"
];

export function SkillsSection() {
  const frontendStack = skills.filter((s) =>
    ["Frontend", "Framework", "Styling", "Animation", "State"].includes(s.category)
  );
  const backendStack = skills.filter((s) =>
    ["Backend", "ORM"].includes(s.category)
  );
  const databaseStack = skills.filter((s) =>
    ["Database", "Deployment"].includes(s.category)
  );

  const groups = [
    { title: "Frontend & Interface", skills: frontendStack },
    { title: "Backend & Systems", skills: backendStack },
    { title: "Databases & DevOps", skills: databaseStack },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-10">
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

        <div className="w-full py-4">
          <Marquee items={marqueeItems} />
        </div>

        <div className="flex flex-col gap-10 mt-4">
          {groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 pl-1">
                {group.title}
              </h3>
              <motion.div
                variants={staggerChildrenFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    className="group glass-panel relative overflow-hidden rounded-[var(--radius-md)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_50%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-indigo-500/10 group-hover:bg-white/[0.08] transition duration-300">
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
                        <span className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-[var(--muted)]">{skill.category}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
