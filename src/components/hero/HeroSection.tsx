"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const headlineWords = [
    "Real user sessions.",
    "AI-written bug reports.",
    "GitHub issues in one click.",
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-100">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 h-[350px] w-[600px] rounded-full bg-brand-400/10 blur-[100px] opacity-75 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 hero-grid-pattern pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* AI Triage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200/50 text-xs font-bold uppercase tracking-wider text-brand-700 mb-6"
        >
          <span>⚡</span> AI triage for every session
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-3xl">
          {headlineWords.map((phrase, index) => (
            <motion.span
              key={index}
              className="block"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              {phrase}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-8"
        >
          Vigil watches every user session, clusters repeated failures,
          and hands you a prioritized queue of developer-ready bug reports —
          before your users open a support ticket.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button href="#install" variant="pill" size="md">
            JOIN WAITLIST
            <ArrowUpRight className="ml-1.5 w-4 h-4 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
