"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Docs", href: "#docs" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
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

        {/* Right: Auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Sign in
          </button>
          <a
            href="#install"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-700 hover:bg-brand-800 rounded transition-all duration-200"
          >
            Get started free
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 hover:text-slate-900 p-1"
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
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 text-left py-1">
              Sign in
            </button>
            <a
              href="#install"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-brand-700 hover:bg-brand-800 rounded transition-all"
            >
              Get started free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
