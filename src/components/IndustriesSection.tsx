"use client";

import React, { useState } from "react";
import { INDUSTRIES, IndustryItem } from "@/data/portfolioData";
import { HeartHandshake, Briefcase, Building2, Lightbulb, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  HeartHandshake: HeartHandshake,
  Briefcase: Briefcase,
  Building2: Building2,
  Lightbulb: Lightbulb,
};

const themeStyles = {
  pink: {
    bg: "bg-[#FEF2F2]",
    border: "border-[#FEE2E2]",
    iconBox: "bg-red-100 text-red-600",
    tagBg: "bg-red-100/70 text-red-700",
  },
  green: {
    bg: "bg-[#ECFDF5]",
    border: "border-[#D1FAE5]",
    iconBox: "bg-emerald-100 text-emerald-600",
    tagBg: "bg-emerald-100/70 text-emerald-700",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    iconBox: "bg-blue-100 text-blue-600",
    tagBg: "bg-blue-100/70 text-blue-700",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    iconBox: "bg-amber-100 text-amber-600",
    tagBg: "bg-amber-100/70 text-amber-700",
  },
};

export const IndustriesSection: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<IndustryItem | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-brand-red uppercase">
              INDUSTRIES I WORK WITH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Helping Businesses Across Sectors
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-brand-red transition-colors group"
          >
            <span>See Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const IconComp = iconMap[industry.iconName];
            const theme = themeStyles[industry.colorTheme];

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCaseStudy(industry)}
                className={`p-6 rounded-2xl ${theme.bg} border ${theme.border} hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl ${theme.iconBox} flex items-center justify-center`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {industry.title}
                  </h3>

                  {/* Subtitle Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/80 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-900/5 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>View Sector Impact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Case Study Highlight Popup */}
        <AnimatePresence>
          {activeCaseStudy && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-8 p-6 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold">
                    <span>CASE STUDY HIGHLIGHT</span>
                    <span>•</span>
                    <span>{activeCaseStudy.title}</span>
                  </div>
                  <h4 className="text-lg font-semibold leading-relaxed text-slate-100">
                    "{activeCaseStudy.caseStudySummary}"
                  </h4>
                </div>

                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
