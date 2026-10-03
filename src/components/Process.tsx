import React from "react";
import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "@/data/process";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-20 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 space-y-4 sm:space-y-0">
          <div className="space-y-1.5">
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              MY APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              A Simple, Proven Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal">
              From understanding your business to building systems that deliver long-term growth.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
          >
            <span>How I Work</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Step Process Horizontal Flow */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col text-left group"
              >
                {/* Badge and Connecting Line Row */}
                <div className="flex items-center w-full mb-4">
                  {/* Circular Number Badge */}
                  <div className={`w-8 h-8 rounded-full ${item.badgeBg} text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs z-10`}>
                    {item.step}
                  </div>

                  {/* Connecting Line with Arrowhead (for items 01-04 on desktop) */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center flex-1 ml-2.5 mr-2.5">
                      <div className="h-[1.5px] bg-slate-300 w-full" />
                      <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-b-[3.5px] border-b-transparent border-l-[6px] border-l-slate-400 -ml-1" />
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#E31E24] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export const ProcessSection = Process;
