"use client";

import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "@/components/ui/CodeBlock";

export default function AITriageSection() {
  const jsonMockData = `{
  "session_summary": "User attempted checkout and could not submit payment after POST /api/payment returned 500.",
  "goal_completed": false,
  "friction_score": 92,
  "issues": [
    {
      "title": "Payment fails silently on 500 error",
      "severity": "P0",
      "confidence": 0.91,
      "root_cause": "POST /api/payment returns 500 immediately after pay button click. UI provides no error feedback.",
      "suggested_fix": "Check response.ok in the payment handler and surface a recovery message on failure.",
      "reproduction_steps": [
        "Open /checkout",
        "Click pay button",
        "Observe POST /api/payment → 500",
        "Observe no user-facing error shown"
      ]
    }
  ]
}`;

  return (
    <section id="product" className="bg-slate-50 py-20 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
              Deep Triage
            </h2>
            <h3 className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl mb-6">
              AI that reasons, not just flags.
            </h3>
            
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
            <CodeBlock code={jsonMockData} language="json" showLineNumbers={true} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
