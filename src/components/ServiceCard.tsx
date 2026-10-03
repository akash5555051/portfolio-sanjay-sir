import React from "react";
import { ServiceItem } from "@/data/services";
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
    iconBox: "bg-[#FEE2E2] text-[#EF4444]",
    textHover: "group-hover:text-[#E31E24]",
    arrowColor: "text-[#EF4444]",
  },
  green: {
    bg: "bg-[#F0FDF4]",
    border: "border-[#DCFCE7]",
    iconBox: "bg-[#DCFCE7] text-[#16A34A]",
    textHover: "group-hover:text-[#16A34A]",
    arrowColor: "text-[#16A34A]",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    iconBox: "bg-[#DBEAFE] text-[#2563EB]",
    textHover: "group-hover:text-[#2563EB]",
    arrowColor: "text-[#2563EB]",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    iconBox: "bg-[#FEF3C7] text-[#D97706]",
    textHover: "group-hover:text-[#D97706]",
    arrowColor: "text-[#D97706]",
  },
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onSelect }) => {
  const IconComp = iconMap[service.iconName];
  const theme = themeStyles[service.colorTheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      onClick={() => onSelect(service)}
      className={`group relative p-6 rounded-2xl ${theme.bg} border ${theme.border} hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between`}
    >
      <div className="space-y-4">
        {/* Icon Container */}
        <div className={`w-12 h-12 rounded-xl ${theme.iconBox} flex items-center justify-center transition-transform group-hover:scale-105`}>
          <IconComp className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold text-[#0A2540] ${theme.textHover} transition-colors leading-tight`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* CTA: Know More */}
      <div className="pt-6 mt-4 border-t border-slate-900/5 flex items-center text-sm font-bold text-[#0A2540]">
        <span className={`${theme.textHover} transition-colors`}>Know More</span>
        <ArrowRight className={`w-4 h-4 ml-1.5 ${theme.arrowColor} group-hover:translate-x-1.5 transition-transform`} />
      </div>
    </motion.div>
  );
};
