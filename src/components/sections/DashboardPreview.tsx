"use client";

import React from "react";
import { motion } from "framer-motion";
import { Filter, ArrowUpDown, Search, GitMerge } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import SeverityBadge from "@/components/ui/SeverityBadge";
import { previewIssues } from "@/config/site";

export default function DashboardPreview() {
  return (
    <Section background="gray" animate={false}>
      {/* Section Header */}
      <SectionHeader
        badge="Interface"
        title="The issue queue developers actually want."
      />

      {/* 3D-Tilt Mockup Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 3 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 3 }}
        whileHover={{ rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
        className="w-full rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden font-sans text-left"
      >
        {/* Header/Controls of Dashboard */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-sans font-bold text-slate-800 text-base">Issues</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-200/60 text-slate-700">
              14 open
            </span>
          </div>
          
          {/* Filter and Search mockups */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter issues..."
                disabled
                className="pl-8 pr-3 py-1.5 rounded border border-slate-200 bg-white text-xs text-slate-600 focus:outline-none w-48"
              />
            </div>
            <button disabled className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white text-xs font-bold text-slate-600">
              <Filter className="w-3.5 h-3.5" />
              Environment
            </button>
            <button disabled className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 bg-white text-xs font-bold text-slate-600">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/20 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <th className="px-6 py-3 text-left w-20">Severity</th>
                <th className="px-6 py-3 text-left">Issue Summary</th>
                <th className="px-6 py-3 text-left w-28">Affected Users</th>
                <th className="px-6 py-3 text-left w-28">Confidence</th>
                <th className="px-6 py-3 text-left w-24">Last Seen</th>
                <th className="px-6 py-3 text-right w-36">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {previewIssues.map((issue, idx) => (
                <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                  <td className="px-6 py-4.5 whitespace-nowrap">
                    <SeverityBadge severity={issue.severity} />
                  </td>
                  <td className="px-6 py-4.5">
                    <div className="text-xs font-bold text-slate-800 tracking-tight hover:text-brand-700 transition-colors cursor-pointer">
                      {issue.title}
                    </div>
                  </td>
                  <td className="px-6 py-4.5 whitespace-nowrap text-xs font-mono font-medium text-slate-500">
                    {issue.sessions}
                  </td>
                  <td className="px-6 py-4.5 whitespace-nowrap text-xs font-mono font-medium text-slate-500">
                    {issue.confidence}
                  </td>
                  <td className="px-6 py-4.5 whitespace-nowrap text-xs font-mono text-slate-400">
                    {issue.time}
                  </td>
                  <td className="px-6 py-4.5 whitespace-nowrap text-right">
                    {issue.github?.linked && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <GitMerge className="w-3.5 h-3.5" />
                        GitHub #{issue.github.number}
                      </span>
                    )}
                    {issue.autoRaised && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide uppercase bg-indigo-50 text-indigo-700 border border-indigo-200">
                        vigil-auto-raised
                      </span>
                    )}
                    {!issue.github?.linked && !issue.autoRaised && (
                      <button disabled className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors">
                        Link to GitHub
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Caption */}
      <p className="mt-8 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
        Sort by severity. Filter by environment. Raise a GitHub issue without leaving the page.
      </p>
    </Section>
  );
}
