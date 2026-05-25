"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";
import SeverityBadge from "./SeverityBadge";
import { Issue } from "@/types";

interface IssuesQueueMockupProps {
  issues: Issue[];
  animateFloat?: boolean;
  className?: string;
}

export default function IssuesQueueMockup({
  issues,
  animateFloat = false,
  className = "",
}: IssuesQueueMockupProps) {
  const floatTransition: Transition | undefined = animateFloat
    ? {
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }
    : undefined;

  const floatAnimation = animateFloat
    ? {
        y: [-8, 0, -8],
      }
    : undefined;

  return (
    <motion.div
      animate={floatAnimation}
      transition={floatTransition}
      className={`w-full max-w-[420px] rounded-xl border border-slate-800 bg-[#0c0d0e] shadow-2xl p-4 text-slate-300 font-sans ${className}`}
    >
      {/* Titlebar */}
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

      {/* Rows */}
      <div className="flex flex-col gap-2.5">
        {issues.map((issue, idx) => (
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
              {issue.github && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wide uppercase border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  <GitBranch className="w-2.5 h-2.5" />
                  GitHub #{issue.github.number}
                </span>
              )}
              {issue.autoRaised && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wide uppercase border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                  auto-raised
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

      {/* Footer bar */}
      <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span>{issues.length} unresolved issues</span>
        <span className="text-brand-400 flex items-center gap-1 cursor-pointer hover:text-brand-300 transition-colors">
          View queue <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
