import React from "react";

interface FrictionBarProps {
  score: number;
  className?: string;
  showLabel?: boolean;
}

export default function FrictionBar({ score, className = "", showLabel = false }: FrictionBarProps) {
  // Constrain score between 0 and 100
  const normalizedScore = Math.max(0, Math.min(100, score));

  // Determine bar color based on score thresholds
  let colorClass = "bg-emerald-500";
  if (normalizedScore >= 70) {
    colorClass = "bg-red-500";
  } else if (normalizedScore >= 35) {
    colorClass = "bg-amber-500";
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${normalizedScore}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-mono font-bold text-slate-700 w-6 text-right">
          {normalizedScore}
        </span>
      )}
    </div>
  );
}
