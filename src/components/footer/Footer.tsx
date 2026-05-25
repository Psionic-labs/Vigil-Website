"use client";

import React from "react";
import { Github, Twitter } from "lucide-react";
import { siteConfig, footerLinks } from "@/config/site";

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
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
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
                  <a
                    href={link.href}
                    className="text-xs font-semibold text-slate-600 hover:text-brand-700 transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-xs font-semibold text-slate-600 hover:text-brand-700 transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-xs font-semibold text-slate-600 hover:text-brand-700 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span>&copy; 2026 {siteConfig.name}. Built for developers.</span>
        </div>

      </div>
    </footer>
  );
}
