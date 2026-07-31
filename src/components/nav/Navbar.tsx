"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200/80 shadow-sm"
          : "bg-white border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Wordmark */}
        <a href="#" className="flex items-center gap-1.5 focus:outline-none">
          <span className="font-sans font-extrabold tracking-tight text-xl text-slate-900">
            Vigil<span className="text-brand-700">.</span>
          </span>
        </a>

        {/* Center: Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors p-1.5 rounded-lg hover:bg-slate-100"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <Button href="#install" variant="pill" size="sm">
            JOIN WAITLIST
            <ArrowUpRight className="ml-1 w-3.5 h-3.5 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 p-1 focus:outline-none"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 hover:text-slate-900 p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-brand-700 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-px bg-slate-100 my-1" />
          <div className="flex flex-col gap-3">
            <Button href="#install" variant="pill" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              JOIN WAITLIST
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
