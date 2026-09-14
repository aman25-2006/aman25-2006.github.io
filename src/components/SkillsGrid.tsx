"use client";

import React, { useState } from "react";
import { candidateData } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Terminal,
  CheckCircle,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-5 h-5 text-cyan-400" />,
  "Databases & Storage": <Database className="w-5 h-5 text-rose-400" />,
  "Cloud & DevOps": <Cloud className="w-5 h-5 text-amber-400" />,
  "Data Science & Generative AI": <Cpu className="w-5 h-5 text-purple-400" />,
  "Developer Tools": <Terminal className="w-5 h-5 text-emerald-400" />,
};

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const categories = candidateData.skills;

  const filteredCategories =
    activeTab === "All"
      ? categories
      : categories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-purple">Skill Matrix</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Grounded in core systems programming, relational database engineering, cloud deployment,
            and contemporary Generative AI integrations.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "All"
                ? "bg-cyan-500 text-obsidian-950 shadow-md shadow-cyan-500/30 scale-105"
                : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700/70"
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.title
                  ? "bg-cyan-500 text-obsidian-950 shadow-md shadow-cyan-500/30 scale-105"
                  : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700/70"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {categoryIcons[category.title] || (
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 transition-colors flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-100">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[11px] text-slate-400">
                            {skill.tag}
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          skill.level === "Advanced"
                            ? "bg-cyan-950 text-cyan-300 border border-cyan-800/40"
                            : "bg-purple-950 text-purple-300 border border-purple-800/40"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

