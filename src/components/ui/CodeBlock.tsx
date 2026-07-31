"use client";

import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: "json" | "typescript" | "html" | "bash";
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language,
  className = "",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  // Safe manual syntax highlighting helper
  const getHighlightedHtml = () => {
    if (language === "json") {
      const safeCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return safeCode.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
        (match) => {
          let cls = "text-slate-300";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "text-indigo-400 font-medium";
              return `<span class="${cls}">${match.slice(0, -1)}</span><span class="text-slate-500">:</span>`;
            } else {
              cls = "text-emerald-400";
            }
          } else if (/true|false/.test(match)) {
            cls = "text-rose-400 font-semibold";
          } else if (/null/.test(match)) {
            cls = "text-slate-500";
          } else {
            cls = "text-amber-400";
          }
          return `<span class="${cls}">${match}</span>`;
        }
      );
    }

    if (language === "typescript") {
      const safeCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return safeCode
        .replace(/\b(import|from|const|new|export|default|class|function|return|as|let|var)\b/g, '<span class="text-indigo-400 font-semibold">$1</span>')
        .replace(/\b(Vigil|projectKey|environment|release|init|project|pk_live_xxxxxxxxxxxx)\b/g, '<span class="text-emerald-400">$1</span>')
        .replace(/(["'`][^"'`]*["'`])/g, '<span class="text-amber-400">$1</span>');
    }

    if (language === "html") {
      const safeCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return safeCode
        .replace(/(&lt;script&gt;|&lt;\/script&gt;|&lt;script|&gt;)/g, '<span class="text-indigo-400">$1</span>')
        .replace(/(["'`][^"'`]*["'`])/g, '<span class="text-emerald-400">$1</span>')
        .replace(/\b(src|projectKey|environment|release|init|projectKey)\b/g, '<span class="text-amber-400">$1</span>');
    }

    if (language === "bash") {
      const safeCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return safeCode
        .replace(/\b(npm install|pnpm add|pnpm install|yarn add)\b/g, '<span class="text-indigo-400 font-semibold">$1</span>')
        .replace(/(@[a-zA-Z0-9-/]+)/g, '<span class="text-emerald-400">$1</span>');
    }

    return code;
  };

  const lines = code.trim().split("\n");

  return (
    <div
      className={`relative rounded-xl border border-slate-800/90 bg-[#0c0d0e] font-mono text-sm leading-relaxed text-slate-300 overflow-hidden shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900/90 bg-[#08090a]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
          <span className="ml-2 text-xs font-mono tracking-widest text-slate-400 font-bold uppercase">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded border border-slate-800 bg-[#0c0d0e] text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all flex items-center gap-1 text-xs"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Clipboard className="w-3.5 h-3.5" />
              <span className="font-sans font-medium">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-hidden flex">
        {showLineNumbers && (
          <div className="select-none text-right text-slate-600 pr-4 border-r border-slate-900 mr-4 font-mono text-xs leading-6 flex flex-col justify-start">
            {lines.map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        )}
        <pre className="flex-1 font-mono text-xs leading-6 text-left whitespace-pre-wrap break-words">
          <code
            dangerouslySetInnerHTML={{ __html: getHighlightedHtml() }}
          />
        </pre>
      </div>
    </div>
  );
}
