import React, { useState } from "react";
import { PROFILE_DATA } from "@/data/portfolioData";
import { SERVICES } from "@/data/services";
import { submitContactForm, validateContactForm, ValidationErrors } from "@/services/contactService";
import { Mail, Phone, MessageCircle, Clock, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceRequired: SERVICES[0].title,
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceRequired: SERVICES[0].title,
        message: "",
      });
    } catch (err: any) {
      setStatusMessage({ type: "error", text: err.message || "Failed to submit request." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#FAFBFD] py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Let's Discuss Your{" "}
              <span className="text-[#E31E24]">Business Growth</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are looking to fix lead generation bottlenecks, automate your customer workflows, or transform your technology architecture, let's schedule an initial discovery conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A2540]">
                  Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect with Sanjay Kumar directly or through the BizTechX office.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={PROFILE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center space-x-3.5 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Direct WhatsApp
                    </span>
                    <span className="text-sm font-bold text-[#0A2540] group-hover:text-[#16A34A] transition-colors">
                      {PROFILE_DATA.whatsappNumber}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center space-x-3.5 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <span className="text-sm font-bold text-[#0A2540] group-hover:text-[#2563EB] transition-colors">
                      {PROFILE_DATA.email}
                    </span>
                  </div>
                </a>

                {/* Office Hours */}
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Consultation Hours
                    </span>
                    <span className="text-sm font-bold text-[#0A2540]">
                      Monday – Saturday (9:30 AM – 7:30 PM IST)
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="p-6 rounded-2xl bg-[#FEF2F2] border border-[#FEE2E2] space-y-2">
                <span className="text-3xl text-red-300 font-serif leading-none block select-none">“</span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                  {PROFILE_DATA.heroQuote}
                </p>
                <p className="text-xs font-bold text-[#0A2540] pt-1">
                  — Sanjay Kumar
                </p>
              </div>
            </div>

            {/* Right: Working Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#FAFBFD] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs text-left">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold tracking-widest text-[#E31E24] uppercase">
                  DIRECT CONSULTATION INQUIRY
                </span>
                <h2 className="text-2xl font-extrabold text-[#0A2540]">
                  Send a Message
                </h2>
                <p className="text-xs text-slate-500">
                  Fill in your details below and we will get back to you within 2 business hours.
                </p>
              </div>

              {statusMessage?.type === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Request Received Successfully!</h4>
                    <p className="text-xs mt-0.5">{statusMessage.text}</p>
                  </div>
                </div>
              )}

              {statusMessage?.type === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Submission Error</h4>
                    <p className="text-xs mt-0.5">{statusMessage.text}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.name ? "border-red-500 bg-red-50/40" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@company.com"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.email ? "border-red-500 bg-red-50/40" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.phone ? "border-red-500 bg-red-50/40" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
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
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white"
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
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white"
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
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current business bottlenecks, revenue targets, or questions..."
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.message ? "border-red-500 bg-red-50/40" : "border-slate-300"
                    } focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#E31E24] bg-white`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow hover:bg-[#C8171D] disabled:opacity-70 transition-colors cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
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
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
