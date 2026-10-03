"use client";

import React, { useState } from "react";
import { PROCESS_STEPS, ProcessStep } from "@/data/portfolioData";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const badgeColors = {
  "01": "bg-red-500 text-white shadow-red-200",
  "02": "bg-emerald-500 text-white shadow-emerald-200",
  "03": "bg-blue-500 text-white shadow-blue-200",
  "04": "bg-amber-500 text-white shadow-amber-200",
  "05": "bg-red-600 text-white shadow-red-200",
};

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep>(PROCESS_STEPS[0]);

  return (
    <section id="experience" className="py-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-brand-red uppercase">
              MY APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Simple, Proven Process
            </h2>
            <p className="text-base text-slate-600 max-w-xl">
              From understanding your business to building systems that deliver long-term growth.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-brand-red transition-colors group"
          >
            <span>How I Work</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5-Step Process Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {PROCESS_STEPS.map((item, idx) => {
            const isSelected = selectedStep.step === item.step;
            const badgeStyle = badgeColors[item.step as keyof typeof badgeColors];

            return (
              <div key={item.step} className="relative flex flex-col">
                
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setSelectedStep(item)}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between ${
                    isSelected
                      ? "border-brand-red shadow-lg ring-2 ring-red-100 scale-105 z-10"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Circle Step Number Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-full ${badgeStyle} flex items-center justify-center text-xs font-extrabold shadow-sm`}>
                        {item.step}
                      </div>
                      {idx < PROCESS_STEPS.length - 1 && (
                        <ChevronRight className="hidden md:block w-4 h-4 text-slate-300" />
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Interactive Expanded Detail Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-red-50 text-brand-red shrink-0 mt-1 sm:mt-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-brand-red uppercase">
                      Stage {selectedStep.step} Deep-Dive
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      • {selectedStep.title}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mt-1 font-medium">
                    {selectedStep.details}
                  </p>
                </div>
              </div>
              
              <a
                href="#contact"
                className="shrink-0 px-4 py-2 text-xs font-bold text-brand-red bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
              >
                Discuss Stage {selectedStep.step} →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
