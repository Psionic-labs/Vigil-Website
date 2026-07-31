"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { taglineBlocks } from "@/config/site";

export default function AnimatedTaglines() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {taglineBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative py-12 flex flex-col justify-between items-start transition-all duration-300 ${
                index !== 0 ? "border-t border-slate-200" : ""
              }`}
            >

              {/* Large Display Word */}
              <h2 className="font-sans font-extrabold text-5xl sm:text-7xl tracking-tighter text-slate-900 mb-4 transition-all duration-300 group-hover:text-brand-700 group-hover:opacity-90 select-none">
                {block.word}
              </h2>

              {/* Tagline Copy */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                <span className="block">{block.line1}</span>
                <span className="block">{block.line2}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
