"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { workflowSteps } from "@/config/site";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="white" animate={false}>
      {/* Section Header */}
      <SectionHeader badge="Lifecycle" title="Four steps from broken session to closed issue." />

      {/* Steps Grid */}
      <div className="relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-brand-200/60 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {workflowSteps.map((step, idx) => {
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
    </Section>
  );
}
