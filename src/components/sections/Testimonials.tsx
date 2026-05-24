"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      quote: "We had a payment failure affecting 12% of checkout attempts for three days. Nobody noticed because there was no JS error in Sentry — just a silent 500. Vigil caught it on day one.",
      name: "Alex M.",
      title: "Senior Engineer",
      company: "Stackframe",
      initials: "AM",
      colorClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      quote: "I used to spend 45 minutes every Monday watching replays. Now I open Vigil, scan the issue queue, and I'm done in five. The reproduction steps alone are worth it.",
      name: "Priya K.",
      title: "Lead Developer",
      company: "Orbital",
      initials: "PK",
      colorClass: "bg-brand-100 text-brand-800 border-brand-200",
    },
    {
      quote: "The GitHub integration is the thing. One click and there's a proper issue in the repo with the stack trace, the replay link, and steps to reproduce. Our PMs can even understand them.",
      name: "Dan R.",
      title: "Engineering Lead",
      company: "Capsule",
      initials: "DR",
      colorClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
            Feedback
          </h2>
          <p className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
            What developers say.
          </p>
        </div>

        {/* Testimonials 3-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
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

      </div>
    </section>
  );
}
