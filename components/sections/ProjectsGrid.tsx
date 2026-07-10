"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects, Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { staggerChildren } from "@/utils/motion";

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col gap-12">
        <Heading
          eyebrow="Selected Work"
          title={
            <>
              Projects built for <span className="text-gradient">real users and real scale</span>
            </>
          }
          description="A mix of finance, payments, content, and entertainment products built with a product mindset and full-stack ownership."
          align="center"
        />

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
