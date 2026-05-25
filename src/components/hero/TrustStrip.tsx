"use client";

import React from "react";
import { trustCompanies } from "@/config/site";

export default function TrustStrip() {
  // Tripled to ensure enough horizontal fill for infinite seamless marquee
  const items = [...trustCompanies, ...trustCompanies, ...trustCompanies];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200/60 py-5 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap flex-shrink-0">
          Trusted by teams building on:
        </span>
        <div className="relative flex-1 overflow-hidden w-full">
          <div className="flex gap-16 animate-marquee min-w-max">
            {items.map((company, index) => (
              <span
                key={index}
                className="text-xs font-bold tracking-tight text-slate-400 font-sans hover:text-slate-500 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
