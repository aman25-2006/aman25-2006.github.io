"use client";

import React from "react";
import { candidateData } from "@/data/portfolioData";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Target,
  Briefcase,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutEducation() {
  const { education } = candidateData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence &amp; Corporate Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background &amp; <span className="text-gradient-cyan">Engineering DNA</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Consistently disciplined academic performance paired with practical system design,
            rigorous CS theoretical coursework, and proven initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degree & Institutional Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-bold text-cyan-300 bg-cyan-950/60 rounded-lg border border-cyan-800/40">
                  {education.aggregate}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-slate-300 font-medium text-base mt-1">
                  {education.institution}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {education.location} • {education.duration}
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-300 leading-relaxed">
              Maintained top-percentile academic consistency through Semester 5, emphasizing
              algorithmic depth, low-level data representations, object-oriented software
              paradigms, and relational schema normalization.
            </p>

            {/* Core Coursework Grid */}
            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Computer Science Disciplines</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.keyCoursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TCS Ignite & SWE Alignment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-purple-electric/20 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-obsidian-900"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  TCS Ignite &amp; SDE Alignment
                </h3>
                <p className="text-xs text-purple-300">Why I Excel in Structured Engineering Tracks</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Strong Technical Fundamentals</strong>
                Thoroughly practiced in algorithmic complexity, array and pointer manipulations,
                recursion, and clean OOP principles in both C++ and Java.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Certified Enterprise Database Rigor</strong>
                Oracle Certified Foundations Associate with real-world query drafting, indexing,
                and transactional integrity experience.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">TCS iON Professional Training</strong>
                Completed TCS iON Career Edge certification, preparing me with corporate workplace
                ethics, structured documentation, and problem-solving standards.
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Demonstrated Execution &amp; Leadership</strong>
                Led SIH 2026 collegiate hackathon initiatives and coordinated technical workshops
                for 200+ students as AWS Student Builder Campus Leader.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

