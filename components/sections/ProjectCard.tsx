"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { projectCardVariant } from "@/utils/motion";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={projectCardVariant}>
      <Card className="group flex h-full flex-col overflow-hidden border-transparent transition duration-300 hover:-translate-y-2 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-glow)]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(5,5,16,0.9)] via-transparent to-transparent opacity-70" />
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={720}
            loading="lazy"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] sm:text-base">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button href={project.liveLink} target="_blank" rel="noreferrer" className="min-h-11 px-5 py-2.5">
              Live Demo
              <ExternalLink size={16} />
            </Button>
            <Button
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              className="min-h-11 border border-white/10 px-5 py-2.5 hover:border-white/20"
            >
              Source Code
              <Github size={16} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
