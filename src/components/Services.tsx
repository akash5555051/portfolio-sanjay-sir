import React from "react";
import { Link } from "react-router-dom";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-1.5">
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              WHAT I DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Practical Solutions for Real Business Impact
            </h2>
          </div>
          <Link
            to="/expertise"
            className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export const ServicesSection = Services;
