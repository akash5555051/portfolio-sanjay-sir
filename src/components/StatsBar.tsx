import React from "react";
import { Trophy, Users, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const STAT_ITEMS = [
  {
    icon: Trophy,
    title: "20+ Years",
    subtitle: "Business & Technology\nExperience",
  },
  {
    icon: Users,
    title: "Multiple Industries",
    subtitle: "Healthcare | Manufacturing\nServices | Professional Businesses",
  },
  {
    icon: Target,
    title: "BizTechX",
    subtitle: "Founder & Consultant\nBusiness Growth Solutions",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    subtitle: "Marketing | CRM | Automation\nAI | Digital Transformation",
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="relative bg-white py-8 sm:py-9 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100/90">
          {STAT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`flex items-start space-x-3.5 py-4 sm:py-2 group ${
                  idx === 0
                    ? "sm:pr-6"
                    : idx === STAT_ITEMS.length - 1
                    ? "sm:pl-6"
                    : "sm:px-6"
                }`}
              >
                {/* Clean Blue Icon (stroke outline) */}
                <div className="text-[#1677FF] shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                </div>

                {/* Text Content */}
                <div className="text-left space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] leading-tight group-hover:text-[#E31E24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium whitespace-pre-line leading-snug">
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

export default StatsBar;
