"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Activity, Footprints, Github, Zap, ShieldCheck } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Issue Grouping",
      icon: Layers,
      desc: "Vigil clusters repeated failures automatically. Instead of 500 separate reports, you get one issue affecting 500 sessions — with the first seen, last seen, and all the evidence.",
    },
    {
      title: "Friction Score",
      icon: Activity,
      desc: "Every session gets a 0–100 friction score. Sort your queue by who struggled most, not just who errored out.",
    },
    {
      title: "Reproduction Steps",
      icon: Footprints,
      desc: "AI generates step-by-step reproduction paths from the session timeline. Paste them straight into your GitHub issue.",
    },
    {
      title: "GitHub Integration",
      icon: Github,
      desc: "One-click issue creation with AI-written body, severity labels, session replay links, and stack traces pre-attached. One issue per bug group — not one per affected user.",
    },
    {
      title: "Auto-Raise Mode",
      icon: Zap,
      desc: "Configure Vigil to automatically raise GitHub issues for P0/P1 bugs above your confidence threshold. Your repo gets the issue before anyone on your team notices.",
    },
    {
      title: "Privacy First",
      icon: ShieldCheck,
      desc: "All input values are masked by default. Passwords are never captured. The AI only sees structured event summaries — never raw replay data or unmasked text.",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 border-b border-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
            Features
          </h2>
          <p className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
            Everything your team needs to ship without breaking things.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative p-6 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-brand-700/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-start items-start"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center text-slate-700 mb-5 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 font-normal leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
