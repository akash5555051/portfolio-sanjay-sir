import React from "react";
import { ServiceItem } from "@/data/services";
import { X, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8"
        >
          {/* Header */}
          <div className="bg-[#0A2540] text-white p-6 relative text-left">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[11px] font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
              SERVICE SCOPE & DELIVERABLES
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              {service.title}
            </h3>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-5 text-left">
            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {service.fullDescription}
            </p>

            {/* Impact Metric Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-[#16A34A] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  PROVEN BUSINESS IMPACT
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0A2540]">
                  {service.impactMetrics}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-[#0A2540] uppercase tracking-wider">
                Key Deliverables & Systems
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#E31E24] text-white font-bold text-xs sm:text-sm shadow hover:bg-[#C8171D] transition-colors cursor-pointer"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
