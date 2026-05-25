"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks } from "@/config/site";

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
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button href="#install" variant="primary" size="sm">
            Get started free
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
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
            <Button variant="ghost" className="text-left justify-start" onClick={() => setMobileMenuOpen(false)}>
              Sign in
            </Button>
            <Button href="#install" variant="primary" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Get started free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
