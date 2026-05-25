"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { featureItems } from "@/config/site";

export default function FeaturesGrid() {
  return (
    <Section id="features" background="white" animate={false}>
      {/* Section Header */}
      <SectionHeader
        badge="Features"
        title="Everything your team needs to ship without breaking things."
      />

      {/* Features 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureItems.map((feature, idx) => {
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
    </Section>
  );
}
