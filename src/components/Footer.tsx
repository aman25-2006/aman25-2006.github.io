"use client";

import React from "react";
import { candidateData } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-obsidian-950/80 pt-12 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-deep flex items-center justify-center text-white text-xs font-extrabold shadow-md shadow-cyan-500/20">
                AK
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Aman Kumar
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              BCA Scholar (74.13%) • AWS &amp; Google Student Ambassador • Founder @ BrahmaCode
            </p>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center space-x-4">
            <a
              href={candidateData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-accent hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={candidateData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-accent hover:border-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${candidateData.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-accent hover:border-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-colors flex items-center space-x-1 text-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            &copy; {currentYear} Aman Kumar. All rights reserved. Muzaffarpur, Bihar, India.
          </p>
          <p className="flex items-center space-x-1">
            <span>Open for Software Engineering &amp; Related Tech Roles</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

