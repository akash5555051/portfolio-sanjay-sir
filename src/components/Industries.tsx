import React from "react";
import { Link } from "react-router-dom";
import { INDUSTRIES } from "@/data/industries";
import { Heart, Users, Building2, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  HeartHandshake: Heart,
  Briefcase: Users,
  Building2: Building2,
  Lightbulb: Lightbulb,
};

const themeStyles = {
  pink: {
    bg: "bg-[#FEF2F2]",
    border: "border-[#FEE2E2]",
    iconBg: "bg-[#EF4444] text-white",
  },
  green: {
    bg: "bg-[#F0FDF4]",
    border: "border-[#DCFCE7]",
    iconBg: "bg-[#22C55E] text-white",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    iconBg: "bg-[#3B82F6] text-white",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    iconBg: "bg-[#F59E0B] text-white",
  },
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-1.5">
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              INDUSTRIES I WORK WITH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Helping Businesses Across Sectors
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
          >
            <span>See Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, index) => {
            const IconComp = iconMap[industry.iconName as keyof typeof iconMap] || Building2;
            const theme = themeStyles[industry.colorTheme];

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-5 rounded-2xl ${theme.bg} border ${theme.border} flex items-start space-x-3.5 hover:shadow-md transition-all duration-300 group`}
              >
                {/* Round Icon */}
                <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                  <IconComp className="w-5 h-5 fill-current" />
                </div>

                {/* Content */}
                <div className="space-y-1 text-left">
                  <h3 className="text-base font-bold text-[#0A2540] leading-snug">
                    {industry.title}
                  </h3>
                  <div className="text-xs text-slate-500 space-y-0.5 leading-snug font-medium">
                    {industry.tags.map((tagLine, tIdx) => (
                      <div key={tIdx}>{tagLine}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const IndustriesSection = Industries;
