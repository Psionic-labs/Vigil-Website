"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/config/site";

export default function Testimonials() {
  return (
    <Section background="gray" animate={false}>
      {/* Section Header */}
      <SectionHeader badge="Feedback" title="What developers say." />

      {/* Testimonials Layout */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-center">
        {testimonials.map((rev, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-md p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Quote */}
            <p className="text-sm text-slate-600 font-normal leading-relaxed italic mb-6">
              &ldquo;{rev.quote}&rdquo;
            </p>

            {/* Developer Details */}
            <div className="flex items-center gap-3 mt-auto">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-bold select-none ${rev.colorClass}`}>
                {rev.initials}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">{rev.name}</h4>
                <p className="text-[10px] font-medium text-slate-400">
                  {rev.title}, {rev.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
