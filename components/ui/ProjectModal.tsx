"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Compass, Layers, Award, BookOpen, Settings, ZoomIn } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fallback safety checks to resolve data flow gaps and prevent crashes
  const title = project?.title || "Project Details";
  const image = project?.image || "/project1.jpg";
  const gallery = project?.gallery && project.gallery.length > 0 ? project.gallery : [image];
  const overview = project?.overview || project?.description || "No overview provided.";
  const features = project?.features || [];
  const architecture = project?.architecture || "Not specified.";
  const challenges = project?.challenges || "Not specified.";
  const learnings = project?.learnings || "Not specified.";
  const techStack = project?.techStack || [];
  const year = project?.year || "N/A";
  const liveLink = project?.liveLink || "#";
  const githubLink = project?.githubLink || "#";

  // Sync scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Keyboard navigation (Esc handles fullscreen close first, then modal close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight" && gallery.length > 1) {
        setCurrentImgIndex((prev) => (prev + 1) % gallery.length);
      } else if (e.key === "ArrowLeft" && gallery.length > 1) {
        setCurrentImgIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallery.length, isFullscreen, onClose]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Modal Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.45 }}
        className="relative z-10 w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl flex flex-col scrollbar-thin scrollbar-thumb-slate-800"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-slate-950/50 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          <X size={16} />
        </button>

        {/* Two-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 p-6 sm:p-8 md:p-10">
          
          {/* LEFT COLUMN: Gallery Image Slider (Sticky on Desktop) */}
          <div className="lg:sticky lg:top-2 h-fit space-y-4">
            <div 
              onClick={() => setIsFullscreen(true)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950/40 rounded-2xl border border-white/5 group/slider shadow-lg cursor-zoom-in"
            >
              {/* Fade Transition Image wrapper */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImgIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={gallery[currentImgIndex]}
                    alt={`${title} preview ${currentImgIndex + 1}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent pointer-events-none" />

              {/* View Fullscreen Overlay button on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-250 z-10">
                <span className="rounded-full bg-slate-900/90 border border-white/10 px-4 py-2 text-xs text-white font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm">
                  <ZoomIn size={14} />
                  View Fullscreen
                </span>
              </div>

              {/* Previous / Next buttons */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-slate-950/70 text-slate-300 opacity-0 group-hover/slider:opacity-100 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-slate-950/70 text-slate-300 opacity-0 group-hover/slider:opacity-100 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-200"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Image Counter Badge (1 / N) */}
              <div className="absolute top-3 left-3 bg-slate-950/75 border border-white/5 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-300 tracking-wider z-10">
                {currentImgIndex + 1} / {gallery.length}
              </div>
            </div>

            {/* Dots / Indicators */}
            {gallery.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 py-1">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImgIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentImgIndex ? "w-5 bg-indigo-500" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Project Details Case Study */}
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-6">
              
              {/* Header Title & Year */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-indigo-300 font-bold">
                    Case Study
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-l border-white/10 pl-3">
                    Released {year}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {title}
                </h3>
              </div>

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <Compass size={14} className="shrink-0" /> Short Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {overview}
                </p>
              </div>

              {/* Tech Stack visually attractive badges */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-full border border-white/5 bg-slate-950/20 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-300 hover:border-indigo-500/30 hover:bg-slate-950/60 hover:text-white transition duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <Layers size={14} className="shrink-0" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                    {features.map((feat, i) => (
                      <li key={i} className="flex gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="text-indigo-400 font-bold select-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* System Architecture */}
              <div className="space-y-2">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <Settings size={14} className="shrink-0" /> System Architecture
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {architecture}
                </p>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <Award size={14} className="shrink-0" /> Challenges
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {challenges}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <BookOpen size={14} className="shrink-0" /> What I Learned
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {learnings}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons: Full width on mobile, inline-flex on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
              <Button 
                href={liveLink} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:flex-1 min-h-11 text-xs"
              >
               Live Demo
                <ExternalLink size={16} />
              </Button>
              <Button 
                href={githubLink} 
                target="_blank" 
                rel="noreferrer" 
                variant="ghost" 
                className="w-full sm:flex-1 min-h-11 text-xs border border-white/10 hover:border-white/20"
              >
                 Source Code
                <Github size={16} />
              </Button>
            </div>

          </div>

        </div>
      </motion.div>

      {/* FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Dark blurred backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFullscreen(false)}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl cursor-zoom-out"
            />

            {/* Header controls (close button) */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
              <button
                onClick={() => setIsFullscreen(false)}
                aria-label="Close fullscreen view"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-slate-900/60 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Fullscreen Slider Image Container */}
            <div className="relative w-full max-w-5xl h-[75vh] sm:h-[80vh] flex items-center justify-center select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImgIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={gallery[currentImgIndex]}
                    alt={`${title} fullscreen ${currentImgIndex + 1}`}
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain cursor-zoom-out"
                    onClick={() => setIsFullscreen(false)}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-slate-900/70 text-slate-300 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-200 z-10 shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-slate-900/70 text-slate-300 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-200 z-10 shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Floating Info counter at the bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center space-y-2 z-10 pointer-events-none">
              <div className="bg-slate-900/80 border border-white/5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 tracking-wider inline-block shadow-lg">
                {currentImgIndex + 1} / {gallery.length}
              </div>
              <p className="text-xs text-slate-400 font-semibold tracking-wide drop-shadow-md">
                {title} — Case Study Screens
              </p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
