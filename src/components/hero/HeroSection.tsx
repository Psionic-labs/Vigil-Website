"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import IssuesQueueMockup from "@/components/ui/IssuesQueueMockup";
import { heroMockupIssues } from "@/config/site";

export default function HeroSection() {
  const headlineWords = [
    "Real user sessions.",
    "AI-written bug reports.",
    "GitHub issues in one click.",
  ];

  const trustCompanies = ["Meridian", "Capsule", "Orbital", "Stackframe"];

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* AI Triage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200/50 text-xs font-bold uppercase tracking-wider text-brand-700 mb-6"
            >
              <span>⚡</span> AI triage for every session
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-[1.1] mb-6">
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
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-8"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <Button href="#install" variant="primary" size="md">
                Get started free
              </Button>
              <Button href="#how-it-works" variant="secondary" size="md">
                See how it works
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="border-t border-slate-100 pt-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Used by developers at
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm font-bold tracking-tight text-slate-500">
                {trustCompanies.map((company) => (
                  <span key={company}>{company}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <IssuesQueueMockup issues={heroMockupIssues} animateFloat={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
