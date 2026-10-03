"use client";

import React from "react";
import { SERVICES, ServiceItem } from "@/data/portfolioData";
import { BarChart3, Laptop, Megaphone, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  BarChart3: BarChart3,
  Laptop: Laptop,
  Megaphone: Megaphone,
  Settings: Settings,
};

const themeStyles = {
  pink: {
    bg: "bg-[#FEF2F2]",
    border: "border-[#FEE2E2]",
    iconBox: "bg-red-100 text-red-600",
    textHover: "group-hover:text-red-600",
    arrowColor: "text-red-600",
  },
  green: {
    bg: "bg-[#ECFDF5]",
    border: "border-[#D1FAE5]",
    iconBox: "bg-emerald-100 text-emerald-600",
    textHover: "group-hover:text-emerald-600",
    arrowColor: "text-emerald-600",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    iconBox: "bg-blue-100 text-blue-600",
    textHover: "group-hover:text-blue-600",
    arrowColor: "text-blue-600",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    iconBox: "bg-amber-100 text-amber-600",
    textHover: "group-hover:text-amber-600",
    arrowColor: "text-amber-600",
  },
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-brand-red uppercase">
              WHAT I DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Practical Solutions for Real Business Impact
            </h2>
          </div>
          <button
            onClick={() => onSelectService(SERVICES[0])}
            className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-brand-red transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComp = iconMap[service.iconName];
            const theme = themeStyles[service.colorTheme];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onSelectService(service)}
                className={`group relative p-6 rounded-2xl ${theme.bg} border ${theme.border} hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl ${theme.iconBox} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-slate-900 ${theme.textHover} transition-colors`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-4 border-t border-slate-900/5 flex items-center text-sm font-bold text-slate-900">
                  <span className={`${theme.textHover} transition-colors`}>Know More</span>
                  <ArrowRight className={`w-4 h-4 ml-1.5 ${theme.arrowColor} group-hover:translate-x-1 transition-transform`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
