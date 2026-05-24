"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-slate-50 py-24 border-b border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-serif text-slate-900 tracking-tight leading-[1.2] mb-4"
        >
          Stop watching replays. Start fixing bugs.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-10"
        >
          Vigil triages every session automatically. Your first 1,000 sessions are free.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a
            href="#install"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-700 hover:bg-brand-800 rounded transition-all duration-200 shadow-sm"
          >
            Get started free
          </a>
          <a
            href="#docs"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded transition-all duration-200"
          >
            Read the docs
          </a>
        </motion.div>

        {/* Supporting notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[10px] font-bold uppercase tracking-widest text-slate-400"
        >
          No credit card required. Installs in under 2 minutes.
        </motion.p>

      </div>
    </section>
  );
}
