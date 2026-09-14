"use client";

import React from "react";
import { candidateData } from "@/data/portfolioData";
import { GraduationCap, Rocket, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";

const icons = [GraduationCap, Rocket, Trophy, Award];

export default function MetricsBar() {
  return (
    <section className="relative py-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {candidateData.metrics.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all text-slate-300">
                  <Icon className="w-12 h-12" />
                </div>

                <div className="relative z-10">
                  <span
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.value}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-100 tracking-wide">
                    {item.label}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

