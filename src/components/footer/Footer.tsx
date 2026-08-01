"use client";

import React from "react";
import { Github } from "lucide-react";
import { siteConfig, footerLinks } from "@/config/site";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.293 19.494h2.039L6.486 3.24H4.298l13.31 17.407Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-1.5 focus:outline-none">
              <span className="font-sans font-extrabold tracking-tight text-xl text-slate-900">
                {siteConfig.name}<span className="text-brand-700">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="X Profile"
              >
                <XLogo className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column: Product */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Product
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <span className="text-xs font-semibold text-slate-600 cursor-default">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Developers */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Developers
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.developers.map((link, idx) => (
                <li key={idx}>
                  <span className="text-xs font-semibold text-slate-600 cursor-default">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Company */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <span className="text-xs font-semibold text-slate-600 cursor-default">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span>&copy; 2026 Psionics</span>
        </div>

      </div>
    </footer>
  );
}
