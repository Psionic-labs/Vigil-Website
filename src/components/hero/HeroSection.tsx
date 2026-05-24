"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, ExternalLink } from "lucide-react";
import SeverityBadge from "@/components/ui/SeverityBadge";

export default function HeroSection() {
  const headlineWords = [
    "Real user sessions.",
    "AI-written bug reports.",
    "GitHub issues in one click.",
  ];

  const mockupIssues = [
    {
      severity: "P0" as const,
      title: "Silent 500 on POST /api/checkout",
      sessions: "482 sessions",
      confidence: "94% confidence",
      time: "2m ago",
      tag: { text: "auto-raised", type: "purple" },
    },
    {
      severity: "P1" as const,
      title: "JSON parse error in OAuth handler",
      sessions: "89 sessions",
      confidence: "89% confidence",
      time: "14m ago",
      tag: { text: "GitHub #412", type: "green" },
    },
    {
      severity: "P1" as const,
      title: "Settings save button unresponsive on mobile",
      sessions: "34 sessions",
      confidence: "81% confidence",
      time: "1h ago",
    },
    {
      severity: "P2" as const,
      title: "CSS layout breakage in billing panel",
      sessions: "12 sessions",
      confidence: "73% confidence",
      time: "3h ago",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* AI Triage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-brand-50 border border-brand-200/50 text-xs font-bold uppercase tracking-wider text-brand-700 mb-6"
            >
              <span>⚡</span> AI triage for every session
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-[1.1] mb-6">
              {headlineWords.map((phrase, index) => (
                <motion.span
                  key={index}
                  className="block"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                >
                  {phrase}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-8"
            >
              Vigil watches every user session, clusters repeated failures,
              and hands you a prioritized queue of developer-ready bug reports —
              before your users open a support ticket.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href="#install"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-700 hover:bg-brand-800 rounded transition-all duration-200 shadow-sm"
              >
                Get started free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded transition-all duration-200"
              >
                See how it works
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="border-t border-slate-100 pt-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Used by developers at
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm font-bold tracking-tight text-slate-500">
                <span>Meridian</span>
                <span>Capsule</span>
                <span>Orbital</span>
                <span>Stackframe</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [-8, 0, -8] }}
              transition={{
                opacity: { duration: 0.6 },
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
              className="w-full max-w-[420px] rounded-xl border border-slate-800 bg-[#0c0d0e] shadow-2xl p-4 text-slate-300 font-sans"
            >
              {/* Card Titlebar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider ml-2">
                    VIGIL ISSUES
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Mockup Rows */}
              <div className="flex flex-col gap-2.5">
                {mockupIssues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-slate-900 bg-[#08090a]/50 hover:bg-[#08090a] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <SeverityBadge severity={issue.severity} />
                        <h4 className="text-xs font-semibold text-slate-200 line-clamp-1">
                          {issue.title}
                        </h4>
                      </div>
                      {issue.tag && (
                        <span
                          className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wide uppercase border ${
                            issue.tag.type === "purple"
                              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          }`}
                        >
                          {issue.tag.type === "green" && <GitBranch className="w-2.5 h-2.5" />}
                          {issue.tag.text}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <div className="flex items-center gap-2">
                        <span>{issue.sessions}</span>
                        <span>•</span>
                        <span>{issue.confidence}</span>
                      </div>
                      <span>{issue.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Queue Summary Footer */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>14 unresolved issues</span>
                <span className="text-brand-400 flex items-center gap-1">
                  View queue <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
