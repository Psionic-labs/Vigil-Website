"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Comparison() {
  const withoutVigil = [
    { emoji: "📹", text: "Watch recordings manually for hours" },
    { emoji: "🤔", text: "Guess which sessions are worth your time" },
    { emoji: "📋", text: "Write bug reports from scratch" },
    { emoji: "🔁", text: "Miss duplicate bugs filed separately" },
    { emoji: "🚨", text: "Find out when users complain on Twitter" },
  ];

  const withVigil = [
    { emoji: "⚡", text: "AI triages every session automatically" },
    { emoji: "📊", text: "Issues ranked by severity and affected sessions" },
    { emoji: "📝", text: "Root cause, fix, and reproduction steps written for you" },
    { emoji: "🔗", text: "Repeated failures clustered into one issue group" },
    { emoji: "🔔", text: "Bug is in your queue before users notice" },
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
            Comparison
          </h2>
          <p className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
            Vigil vs. watching recordings yourself.
          </p>
        </div>

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
              {withoutVigil.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-500 font-normal text-sm leading-relaxed">
                  <span className="text-base select-none mt-0.5 filter grayscale opacity-70">{item.emoji}</span>
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
              {withVigil.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 font-semibold text-sm leading-relaxed">
                  <span className="text-base select-none mt-0.5">{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
