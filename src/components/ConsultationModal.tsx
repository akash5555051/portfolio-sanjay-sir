import React, { useState } from "react";
import { X, CheckCircle2, Calendar, Clock, Send, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/data/services";
import { PROFILE_DATA } from "@/data/portfolioData";
import { submitContactForm, validateContactForm, ValidationErrors } from "@/services/contactService";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: SERVICES[0].title,
    preferredTime: "Morning (10 AM - 1 PM)",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatusMessage(null);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    try {
      const response = await submitContactForm(formData);
      setStatusMessage({ type: "success", text: response.message });
    } catch (err: any) {
      setStatusMessage({ type: "error", text: err.message || "Failed to submit request." });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStatusMessage(null);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8"
        >
          {/* Header */}
          <div className="bg-[#0A2540] text-white p-5 sm:p-6 relative">
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[11px] font-bold text-[#E31E24] uppercase tracking-wider block mb-1">
              DIRECT CONSULTATION
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Book a Strategy Call
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Discuss your growth bottlenecks and tech systems directly with Sanjay Kumar.
            </p>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 text-left">
            {statusMessage?.type === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#0A2540]">
                  Consultation Request Sent!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#0A2540]">{formData.name}</span>. {statusMessage.text}
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`${PROFILE_DATA.whatsappLink}&text=Hi%20Sanjay,%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.company || 'my business')}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#22C55E] text-white font-bold text-xs sm:text-sm shadow hover:bg-emerald-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {statusMessage?.type === "error" && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Shah"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border ${
                        errors.name ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24]`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@company.com"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border ${
                        errors.email ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24]`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border ${
                        errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24]`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company Name"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24]"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Business Transformation">
                      Complete Business Transformation (Strategy + Tech + Funnel)
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">
                    Your Business Challenge or Goal *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you would like to achieve or solve..."
                    className={`w-full px-3.5 py-2 text-xs rounded-lg border ${
                      errors.message ? "border-red-500 bg-red-50/30" : "border-slate-300"
                    } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24]`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 mt-0.5">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow hover:bg-[#C8171D] disabled:opacity-70 transition-colors cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Let's Discuss Your Business</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
