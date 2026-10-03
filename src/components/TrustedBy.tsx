import React from "react";
import {
  Cross,
  Settings,
  Users,
  Rocket,
  Factory,
  GraduationCap,
  Box,
} from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { name: "Healthcare Business", icon: Cross },
  { name: "SME Business", icon: Settings },
  { name: "Professional Services", icon: Users },
  { name: "Startups", icon: Rocket },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Technology", icon: Box },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow Heading */}
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase text-left sm:text-center">
          TRUSTED BY BUSINESSES & PROFESSIONALS
        </p>

        {/* 7 Horizontal Items Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center justify-center">
          {sectors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex items-center sm:flex-col sm:justify-center p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 hover:text-[#0A2540] group cursor-default space-x-2.5 sm:space-x-0"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 sm:mb-2 text-slate-500 group-hover:text-[#E31E24] transition-colors shrink-0" />
                <span className="text-xs font-bold leading-tight text-slate-800 text-left sm:text-center">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
