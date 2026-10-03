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
    iconColor: "text-[#EF4444]",
    textHover: "group-hover:text-[#E31E24]",
    arrowColor: "text-[#EF4444]",
  },
  green: {
    bg: "bg-[#F0FDF4]",
    border: "border-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
    textHover: "group-hover:text-[#16A34A]",
    arrowColor: "text-[#22C55E]",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    iconColor: "text-[#3B82F6]",
    textHover: "group-hover:text-[#2563EB]",
    arrowColor: "text-[#3B82F6]",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
    textHover: "group-hover:text-[#D97706]",
    arrowColor: "text-[#F59E0B]",
  },
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onSelect }) => {
  const IconComp = iconMap[service.iconName] || BarChart3;
  const theme = themeStyles[service.colorTheme] || themeStyles.pink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(service)}
      className={`group relative p-6 sm:p-7 rounded-2xl ${theme.bg} border ${theme.border} hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between text-left`}
    >
      <div className="space-y-4">
        {/* Prominent Colored Icon */}
        <div className="mb-2">
          <IconComp className={`w-9 h-9 sm:w-10 sm:h-10 ${theme.iconColor} stroke-[1.8] group-hover:scale-110 transition-transform duration-200`} />
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold text-[#0A2540] ${theme.textHover} transition-colors leading-tight`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* CTA: Know More */}
      <div className="pt-6 mt-4 flex items-center text-xs sm:text-sm font-bold text-[#0A2540]">
        <span className={`${theme.textHover} transition-colors`}>Know More</span>
        <ArrowRight className={`w-4 h-4 ml-1.5 ${theme.arrowColor} group-hover:translate-x-1.5 transition-transform duration-200`} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
