import React, { useState } from "react";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ArrowRight, CheckCircle2, TrendingUp, Cpu, BarChart3, Laptop, Megaphone, Settings } from "lucide-react";
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
    badge: "bg-[#EF4444] text-white",
    arrowColor: "text-[#EF4444]",
  },
  green: {
    bg: "bg-[#F0FDF4]",
    border: "border-[#DCFCE7]",
    badge: "bg-[#16A34A] text-white",
    arrowColor: "text-[#16A34A]",
  },
  blue: {
    bg: "bg-[#EFF6FF]",
    border: "border-[#DBEAFE]",
    badge: "bg-[#2563EB] text-white",
    arrowColor: "text-[#2563EB]",
  },
  yellow: {
    bg: "bg-[#FFFBEB]",
    border: "border-[#FEF3C7]",
    badge: "bg-[#D97706] text-white",
    arrowColor: "text-[#D97706]",
  },
};

interface ExpertiseProps {
  onOpenConsultation: () => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#FAFBFD] py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase">
              CONSULTING SERVICES & CAPABILITIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Expertise Engineered for{" "}
              <span className="text-[#E31E24]">Tangible Business Results</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you need to audit your revenue model, digitize operations, automate WhatsApp funnels, or generate qualified sales leads, discover how our structured consulting frameworks unlock lasting business scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, index) => {
            const IconComp = iconMap[service.iconName];
            const theme = themeStyles[service.colorTheme];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-6 sm:p-8 rounded-3xl ${theme.bg} border ${theme.border} text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
              >
                {/* Left Overview (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl ${theme.badge} flex items-center justify-center shrink-0 shadow-xs`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        PILLAR 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200/80 text-xs font-bold text-[#0A2540]">
                    <TrendingUp className="w-4 h-4 text-[#16A34A]" />
                    <span>{service.impactMetrics}</span>
                  </div>
                </div>

                {/* Right Deliverables List (5 Cols) */}
                <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    Core Deliverables
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#0A2540] text-white font-bold text-xs hover:bg-[#071A2E] transition-colors cursor-pointer group"
                    >
                      <span>Explore In-Depth Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal for Service Deep Dive */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={onOpenConsultation}
      />
    </div>
  );
};

export default Expertise;
