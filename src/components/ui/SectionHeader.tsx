import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl mb-16 ${centered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-700 mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-serif text-slate-900 tracking-tight leading-[1.2] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-500 font-normal text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
