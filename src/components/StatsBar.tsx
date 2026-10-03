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

export const StatsBar: React.FC = () => {
  return (
    <section className="relative bg-white py-7 sm:py-8 border-b border-slate-200">
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`flex items-start space-x-3.5 py-4 sm:py-2 ${
                  idx === 0 ? "sm:pr-6" : idx === METRICS.length - 1 ? "sm:pl-6" : "sm:px-6"
                }`}
              >
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2540] shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A2540]" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A2540] leading-tight">
                    {item.number}
                  </h3>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
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
