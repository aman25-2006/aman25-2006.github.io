"use client";

import React from "react";
import { candidateData } from "@/data/portfolioData";
import { Users, Sparkles, CheckCircle2, Trophy, Compass, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  const { leadership } = candidateData;

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Campus Impact &amp; Community Building</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership &amp; <span className="text-gradient-cyan">Campus Honors</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Trusted by global developer ecosystems (AWS, Google) and collegiate leadership to guide
            peer developer communities and organize national-tier hackathon contingents.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 relative overflow-hidden group transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                {item.role}
              </h3>
              <p className="text-xs font-semibold text-purple-300 mt-1">
                {item.organization}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

