"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CodeBlock from "@/components/ui/CodeBlock";
import { installSnippets } from "@/config/site";

type Tab = "script" | "npm";

export default function InstallSection() {
  const [activeTab, setActiveTab] = useState<Tab>("script");

  const stats = [
    { label: "< 25KB gzipped" },
    { label: "Zero performance overhead" },
    { label: "Privacy-first by default" },
  ];

  return (
    <Section id="install" background="white" containerSize="small" animate={false}>
      {/* Section Header */}
      <SectionHeader
        badge="Installation"
        title="Drop in. Done in two minutes."
      />

      {/* Tabs Control */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
          <button
            onClick={() => setActiveTab("script")}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              activeTab === "script"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Script tag
          </button>
          <button
            onClick={() => setActiveTab("npm")}
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              activeTab === "npm"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            npm / pnpm
          </button>
        </div>
      </div>

      {/* Tab Code Output */}
      <div className="max-w-2xl mx-auto mb-10">
        {activeTab === "script" ? (
          <CodeBlock code={installSnippets.script} language="html" showLineNumbers={true} />
        ) : (
          <div className="flex flex-col gap-4">
            <CodeBlock code={installSnippets.npmInstall} language="bash" showLineNumbers={false} />
            <CodeBlock code={installSnippets.npmInit} language="typescript" showLineNumbers={true} />
          </div>
        )}
      </div>

      {/* Stat Pills */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {stats.map((stat, idx) => (
          <span
            key={idx}
            className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 font-sans font-bold text-xs uppercase tracking-wider shadow-sm"
          >
            {stat.label}
          </span>
        ))}
      </div>
    </Section>
  );
}
