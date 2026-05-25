"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CodeBlock from "@/components/ui/CodeBlock";
import { aiTriageJson } from "@/config/site";

export default function AITriageSection() {
  return (
    <Section id="product" background="gray" animate={false}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <SectionHeader
            badge="Deep Triage"
            title="AI that reasons, not just flags."
            centered={false}
            className="mb-6"
          />
          
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Most tools detect rage clicks and JS errors.
              Vigil understands what the user was trying to do,
              whether they succeeded, and exactly why they failed.
            </p>
            <p>
              Every session gets a friction score, a goal completion
              verdict, and a list of issues with root causes and
              suggested fixes — written by Claude, ready for your team.
            </p>
          </div>
        </div>

        {/* Right Column: CodeBlock */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 w-full"
        >
          <CodeBlock code={aiTriageJson} language="json" showLineNumbers={true} />
        </motion.div>

      </div>
    </Section>
  );
}
