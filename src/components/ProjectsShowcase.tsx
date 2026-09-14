"use client";

import React, { useState } from "react";
import { candidateData, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Sparkles,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const filterTabs = [
  { label: "All Projects", value: "all" },
  { label: "AI & Hackathons", value: "ai" },
  { label: "Startups & Platforms", value: "startup" },
  { label: "Core CS & OOP", value: "core" },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects } = candidateData;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects &amp; Systems</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Hackathon-winning architectures, government-funded EdTech solutions, and production-grade
            software built with rigorous object-oriented and AI principles.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === tab.value
                  ? "bg-cyan-500 text-obsidian-950 shadow-md shadow-cyan-500/30 scale-105"
                  : "bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-700/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Top Tag & Achievement Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeColor}`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{project.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Highlights &amp; Architecture:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-obsidian-950 transition-colors font-bold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

