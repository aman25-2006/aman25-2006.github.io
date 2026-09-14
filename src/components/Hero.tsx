"use client";

import React from "react";
import { motion } from "framer-motion";
import { candidateData } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Mail,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
  Flame,
} from "lucide-react";

const techBadges = [
  { name: "C++ / DSA", icon: "⚡", color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30" },
  { name: "Java Enterprise", icon: "☕", color: "from-orange-500/20 to-red-500/20 border-orange-500/30" },
  { name: "Python & AI", icon: "🐍", color: "from-yellow-500/20 to-emerald-500/20 border-emerald-500/30" },
  { name: "Oracle SQL & RDBMS", icon: "🗄️", color: "from-red-500/20 to-rose-500/20 border-red-500/30" },
  { name: "AWS Cloud Leader", icon: "☁️", color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30" },
  { name: "Gemini / GenAI", icon: "✨", color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Core Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Target Track Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-1" />
                <span>Open for Software Engineer &amp; Related Roles</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-electric/10 text-purple-300 border border-purple-electric/30">
                <MapPin className="w-3 h-3 text-purple-400" />
                <span>Muzaffarpur, Bihar</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building <span className="text-gradient-cyan">AI-Powered</span> Systems &amp;{" "}
              <span className="text-gradient-purple">Scalable Cloud</span> Solutions.
            </h1>

            {/* Subheadline with Key Qualifications */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hello, I&apos;m <strong className="text-white font-semibold">Aman Kumar</strong> — a disciplined{" "}
              <span className="text-cyan-accent font-medium">BCA Candidate (74.13% Aggregate)</span>,{" "}
              <span className="text-purple-300 font-medium">AWS Student Builder Campus Leader</span>, and{" "}
              <span className="text-blue-300 font-medium">Google Student Ambassador</span>. Architecting software
              with deep CS foundations in DSA, OOP, Oracle RDBMS, and state-funded GenAI platforms.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={candidateData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Aman_Kumar_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 hover:border-slate-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-cyan-accent" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Micro Credentials Line */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>NPTEL Silver (Data Science)</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Oracle Foundations Certified</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>TCS iON Career Edge</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visual Console & Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[480px] xl:w-[520px] relative"
          >
            {/* Terminal Window Card */}
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/60">
              {/* Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">aman@brahmacode:~$</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  SYSTEM READY
                </span>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs space-y-3 bg-obsidian-950/80 text-slate-300">
                <div>
                  <span className="text-emerald-400">&gt; candidate.getProfile()</span>
                  <div className="mt-1 pl-3 text-slate-400 border-l border-slate-700 space-y-0.5">
                    <p><span className="text-cyan-300">&quot;name&quot;</span>: <span className="text-amber-300">&quot;Aman Kumar&quot;</span>,</p>
                    <p><span className="text-cyan-300">&quot;degree&quot;</span>: <span className="text-amber-300">&quot;BCA (5th Sem, LNMCBM)&quot;</span>,</p>
                    <p><span className="text-cyan-300">&quot;aggregate&quot;</span>: <span className="text-emerald-300">&quot;74.13%&quot;</span>,</p>
                    <p><span className="text-cyan-300">&quot;track&quot;</span>: <span className="text-amber-300">&quot;Software Engineer &amp; Related Roles&quot;</span>,</p>
                    <p><span className="text-cyan-300">&quot;startup&quot;</span>: <span className="text-amber-300">&quot;Founder @ BrahmaCode (Seed Funded)&quot;</span>,</p>
                    <p><span className="text-cyan-300">&quot;hackathon&quot;</span>: <span className="text-purple-300">&quot;SIH 2026 Lead (Skill Saarthi)&quot;</span></p>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-emerald-400">&gt; candidate.deployFocus()</span>
                  <div className="mt-1 flex flex-wrap gap-1.5 pl-3">
                    <span className="px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 text-[11px] border border-blue-700/40">
                      OOP in C++ &amp; Java
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-300 text-[11px] border border-emerald-700/40">
                      DSA Logic
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-900/40 text-cyan-300 text-[11px] border border-cyan-700/40">
                      Oracle &amp; SQL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 text-[11px] border border-purple-700/40">
                      AWS Cloud
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-slate-500 flex items-center justify-between border-t border-slate-800">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px]">Zero Compile Errors • Production Ready</span>
                  </span>
                  <span className="text-[10px] text-cyan-400">Node v22 • Next.js 14</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges around Terminal */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {techBadges.map((badge, idx) => (
                <div
                  key={badge.name}
                  className={`px-2.5 py-1.5 rounded-xl border bg-gradient-to-br ${badge.color} backdrop-blur-md flex items-center space-x-2 text-xs font-medium text-slate-200 shadow-sm transition-transform hover:-translate-y-0.5`}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="truncate">{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

