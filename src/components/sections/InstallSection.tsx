"use client";

import React, { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";

type Tab = "script" | "npm";

export default function InstallSection() {
  const [activeTab, setActiveTab] = useState<Tab>("script");

  const scriptCode = `<script src="https://cdn.usevigilhq.com/sdk/v1/vigil.min.js"></script>
<script>
  Vigil.init({
    projectKey: "pk_live_xxxxxxxxxxxx",
    environment: "production",
    release: "web-2026.05.08",
  });
</script>`;

  const npmInstallCode = `npm install @vigil/sdk`;

  const npmInitCode = `import { Vigil } from "@vigil/sdk";

Vigil.init({
  projectKey: "pk_live_xxxxxxxxxxxx",
  environment: "production",
  release: "web-2026.05.08",
});`;

  const stats = [
    { label: "< 25KB gzipped" },
    { label: "Zero performance overhead" },
    { label: "Privacy-first by default" },
  ];

  return (
    <section id="install" className="bg-white py-20 border-b border-slate-100 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
            Installation
          </h2>
          <p className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
            Drop in. Done in two minutes.
          </p>
        </div>

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
            <CodeBlock code={scriptCode} language="html" showLineNumbers={true} />
          ) : (
            <div className="flex flex-col gap-4">
              <CodeBlock code={npmInstallCode} language="bash" showLineNumbers={false} />
              <CodeBlock code={npmInitCode} language="typescript" showLineNumbers={true} />
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

      </div>
    </section>
  );
}
