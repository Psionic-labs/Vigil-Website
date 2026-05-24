"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, ShieldAlert, GitPullRequest } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Record",
      icon: Terminal,
      desc: "Install @vigil/sdk with a single script tag or npm package. It captures DOM mutations, clicks, errors, network failures, and navigations using rrweb — with all inputs masked by default.",
    },
    {
      num: "02",
      title: "Ingest",
      icon: Cpu,
      desc: "Sessions are batched and flushed to Vigil's ingest API. Storage is asynchronous and non-blocking. Your app never feels the overhead.",
    },
    {
      num: "03",
      title: "Triage",
      icon: ShieldAlert,
      desc: "Every completed session enters the AI triage pipeline. Claude analyzes the full event timeline, detects what went wrong, and decides whether it is a new issue, a duplicate of a known failure, or normal behavior.",
    },
    {
      num: "04",
      title: "Act",
      icon: GitPullRequest,
      desc: "Work from a prioritized issue queue. Each issue has a root cause, a suggested fix, reproduction steps, and evidence. Raise a pre-filled GitHub issue with one click.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 border-b border-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
            Lifecycle
          </h2>
          <p className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
            Four steps from broken session to closed issue.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-brand-200/60 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Number Badge and Icon Container */}
                  <div className="relative mb-6">
                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-mono text-xs flex items-center justify-center font-bold shadow-sm">
                      {step.num}
                    </span>
                    <div className="w-16 h-16 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-300 group-hover:border-brand-700 group-hover:bg-brand-50 group-hover:text-brand-700 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-normal leading-relaxed px-4 md:px-0">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
