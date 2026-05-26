"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { comparisonBefore, comparisonAfter } from "@/config/site";

export default function Comparison() {
  return (
    <Section background="white" containerSize="small" animate={false}>
      {/* Section Header */}
      <SectionHeader
        badge="Comparison"
        title="Vigil vs. watching recordings yourself."
      />

      {/* Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Column: Without Vigil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-start"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6 border-b border-slate-200/60 pb-3">
            Without Vigil
          </h3>
          <ul className="space-y-4">
            {comparisonBefore.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-500 font-normal text-sm leading-relaxed">
                <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column: With Vigil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-8 rounded-lg bg-white border-2 border-brand-700/80 shadow-md flex flex-col justify-start relative overflow-hidden"
        >
          {/* Top Indicator Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-700" />
          
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-6 border-b border-brand-100 pb-3">
            With Vigil
          </h3>
          <ul className="space-y-4">
            {comparisonAfter.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-800 font-semibold text-sm leading-relaxed">
                <Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </Section>
  );
}
