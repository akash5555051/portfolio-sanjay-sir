import React from "react";
import { Link } from "react-router-dom";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-12 sm:py-20 bg-white overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 space-y-3 sm:space-y-0 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              WHAT I DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Practical Solutions for Real Business Impact
            </h2>
          </motion.div>

          {/* Action Link */}
          <div className="flex items-center justify-start sm:justify-end gap-3 pt-1 sm:pt-0">
            <Link
              to="/expertise"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid: 1 Col on Mobile (< sm), 2 Col on Tablet (sm), 4 Col on Desktop (lg) */}
        {/* Absolutely ZERO off-screen nodes, ZERO horizontal overflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 sm:gap-6 w-full max-w-full">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="w-full max-w-full">
              <ServiceCard
                service={service}
                index={index}
                onSelect={onSelectService}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const ServicesSection = Services;
export default Services;
