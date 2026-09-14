"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { candidateData } from "@/data/portfolioData";
import {
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-black/30" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-deep flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold tracking-wider text-sm">AK</span>
          </div>
          <span className="font-semibold text-lg text-slate-100 group-hover:text-cyan-accent transition-colors">
            Aman <span className="text-cyan-accent">Kumar</span>
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            BCA &apos;25
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Socials */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={candidateData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-accent hover:bg-slate-800/80 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={candidateData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-accent hover:bg-slate-800/80 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={candidateData.resumePath}
            download="Aman_Kumar_Resume.pdf"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={candidateData.resumePath}
            download="Aman_Kumar_Resume.pdf"
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-slate-800 px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-accent hover:bg-slate-800/60 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex space-x-4">
                  <a
                    href={candidateData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-accent"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={candidateData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-accent"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500 text-obsidian-950"
                >
                  Hire Aman
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

