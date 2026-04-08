"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  contentClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-divider relative scroll-mt-28 py-20 sm:py-24 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={contentClassName}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
