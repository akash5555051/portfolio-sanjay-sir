import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Users, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const STAT_ITEMS = [
  {
    icon: Trophy,
    title: "20+ Years",
    subtitle: "Business & Technology\nExperience",
    link: "/experience",
  },
  {
    icon: Users,
    title: "Multiple Industries",
    subtitle: "Healthcare | Manufacturing\nServices | Professional Businesses",
    link: "/experience",
  },
  {
    icon: Target,
    title: "BizTechX",
    subtitle: "Founder & Consultant\nBusiness Growth Solutions",
    link: "/about",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    subtitle: "Marketing | CRM | Automation\nAI | Digital Transformation",
    link: "/expertise",
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="relative bg-white py-5 sm:py-7 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View (< md): 2x2 Clean Grid (Zero overflow, zero sliding) */}
        <div className="grid grid-cols-2 md:hidden gap-2.5">
          {STAT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Link
                  to={item.link}
                  className="flex flex-col items-start p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all text-left group h-full shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1677FF] shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0A2540] leading-tight group-hover:text-[#E31E24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium whitespace-pre-line leading-tight mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View (>= md): 4 Columns Divided */}
        <div className="hidden md:grid md:grid-cols-4 divide-x divide-slate-100/90">
          {STAT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Link
                  to={item.link}
                  className={`flex items-start space-x-3.5 py-2 group cursor-pointer ${
                    idx === 0
                      ? "pr-5 lg:pr-6"
                      : idx === STAT_ITEMS.length - 1
                      ? "pl-5 lg:pl-6"
                      : "px-5 lg:px-6"
                  }`}
                >
                  <div className="text-[#1677FF] shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] leading-tight group-hover:text-[#E31E24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium whitespace-pre-line leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const StatsSection = StatsBar;
export default StatsBar;
