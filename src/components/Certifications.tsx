"use client";

import React from "react";
import { candidateData } from "@/data/portfolioData";
import {
  Award,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  award: Award,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
  shield: ShieldCheck,
};

export default function Certifications() {
  const { certifications } = candidateData;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Standardized Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="text-gradient-gold">Industry Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Externally audited credentials affirming proficiency in Data Science, Enterprise
            Relational Databases, Corporate Readiness, and Cloud Technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.iconName] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 group-hover:border-amber-500/30 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {cert.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Credential</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

