"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  background?: "white" | "gray" | "dark";
  containerSize?: "default" | "small";
  className?: string;
  animate?: boolean;
  children: React.ReactNode;
}

export default function Section({
  id,
  background = "white",
  containerSize = "default",
  className = "",
  animate = true,
  children,
}: SectionProps) {
  const bgStyles = {
    white: "bg-white border-b border-slate-100",
    gray: "bg-slate-50 border-b border-slate-200",
    dark: "bg-[#0c0d0e] border-b border-slate-900 text-slate-300",
  };

  const containerStyles = {
    default: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    small: "max-w-4xl mx-auto px-4 sm:px-6",
  };

  const content = (
    <div className={`${containerStyles[containerSize]} ${className}`}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`py-20 scroll-mt-16 overflow-hidden ${bgStyles[background]}`}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={`py-20 scroll-mt-16 overflow-hidden ${bgStyles[background]}`}>
      {content}
    </section>
  );
}
