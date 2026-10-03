"use client";

import React from "react";
import { METRICS } from "@/data/portfolioData";
import { Trophy, Users, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Trophy: Trophy,
  Users: Users,
  Target: Target,
  TrendingUp: TrendingUp,
};

export const StatsBanner: React.FC = () => {
  return (
    <section className="relative bg-white py-8 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {METRICS.map((item, idx) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex items-start space-x-4 py-4 sm:py-2 ${
                  idx === 0 ? "sm:pr-6" : idx === METRICS.length - 1 ? "sm:pl-6" : "sm:px-6"
                }`}
              >
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 shrink-0 mt-0.5">
                  <IconComponent className="w-6 h-6 text-slate-800" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                    {item.number}
                  </h3>
                  <p className="text-xs font-bold text-slate-700">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
