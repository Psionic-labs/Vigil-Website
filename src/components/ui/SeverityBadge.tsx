import React from "react";

type Severity = "P0" | "P1" | "P2" | "P3";

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

export default function SeverityBadge({ severity, className = "" }: SeverityBadgeProps) {
  const styles: Record<Severity, string> = {
    P0: "bg-red-50 text-red-700 border-red-200",
    P1: "bg-orange-50 text-orange-700 border-orange-200",
    P2: "bg-amber-50 text-amber-700 border-amber-200",
    P3: "bg-slate-50 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border uppercase tracking-wider ${styles[severity]} ${className}`}
    >
      {severity}
    </span>
  );
}
