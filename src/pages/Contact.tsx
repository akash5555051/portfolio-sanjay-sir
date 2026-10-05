import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Handshake,
  Target,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Plus,
  Minus,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  // FAQ Accordion State (open question index, -1 means closed)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Phone).",
      });
      return;
    }

    setFormStatus({ type: "loading" });

    // Simulate submission or connect to email / webhook
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. Sanjay will reach out to you within 24 hours.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        message: "",
      });
    }, 1000);
  };

  const FAQ_ITEMS = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "I primarily consult with mid-sized SMEs, healthcare clinics & diagnostic networks, precision manufacturers, professional service firms (CA/legal/consulting), and technology startups looking to establish scalable growth and automation systems.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, 100%. All strategy and advisory sessions are conducted remotely via high-definition Google Meet or Zoom with screen-sharing, enabling seamless collaboration with business owners across India and internationally.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply submit the form on this page or drop a WhatsApp message. We will schedule a focused 30-minute discovery call to evaluate your current business bottlenecks, revenue goals, and technology readiness.",
    },
    {
      question: "Is there a consulting fee for initial discussion?",
      answer:
        "No, the initial 30-minute discovery consultation is completely complimentary and confidential. It allows us to determine mutual alignment and identify clear ROI opportunities before any formal engagement.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes, I regularly consult with global enterprise clients, distributors, and founders across the United States, United Kingdom, UAE/Middle East, and Southeast Asia, accommodating international time zones.",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen text-slate-800">

      {/* ========================================================
          1. HERO SECTION: 1:1 Match to Mockup Design
          ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-6 pb-8 sm:pt-10 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Subtext, Trust Elements */}
            <div className="lg:col-span-6 text-left">
              {/* Tag */}
              <span className="text-xs font-bold tracking-[0.22em] text-slate-500 uppercase block mb-3.5">
                CONTACT ME
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-5">
                Let’s Create <br />
                Something Meaningful <br />
                <span className="text-[#E31E24]">for Your Business</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mb-8">
                Have a business challenge, a project idea, or just want to explore possibilities? I’d love to hear from you. Let’s discuss how strategy, technology and marketing can help you achieve your goals.
              </p>

              {/* 3 Value Propositions / Trust Pills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-slate-700">
                {/* 1. Quick Response */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <MessageSquare className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                    Quick Response
                  </span>
                </div>

                {/* 2. Confidential Discussions */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                    <Handshake className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                    Confidential Discussions
                  </span>
                </div>

                {/* 3. Solution Focused */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <Target className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                    Solution Focused
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Visual Artwork (Sanjay + Laptop + Mug + Books + Handwriting) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src="./images/contact-hero-right-hd.png"
                alt="Sanjay Kumar - Ideas Strategy Technology Growth"
                className="w-full h-auto max-w-[580px] object-contain select-none"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. MAIN CONTENT AREA: Two-Column Layout (Form & Direct Contacts)
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* ----------------------------------------------------
                LEFT COLUMN: Form + Map of Patna
                ---------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-10 text-left">
              
              {/* Form Container */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-0.5 bg-[#E31E24]" />
                    <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                      SEND A MESSAGE
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                    Tell Me About Your Business Needs
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                    Fill in the form below and I'll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company Name <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Dropdown What can I help you with? */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      What can I help you with? <span className="text-[#E31E24]">*</span>
                    </label>
                    <select
                      required
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="Business Growth Strategy">Business Growth Strategy</option>
                      <option value="Digital Transformation & Tech">Digital Transformation & Tech</option>
                      <option value="Lead Generation & Marketing">Lead Generation & Marketing</option>
                      <option value="CRM & Automation Systems">CRM & Automation Systems</option>
                      <option value="AI Implementation for Business">AI Implementation for Business</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  {/* Row 4: Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tell me more about your requirement
                    </label>
                    <textarea
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a few details about your business, current challenges or project idea..."
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:bg-white transition-all resize-none"
                    />
                    <div className="text-right text-[11px] text-slate-400 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  {/* Form Submission Status Notice */}
                  {formStatus.type === "success" && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2.5 text-emerald-800 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  {formStatus.type === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-2.5 text-red-800 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.type === "loading"}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#E31E24] text-white font-bold text-sm hover:bg-[#C8171D] shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                    >
                      {formStatus.type === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Map of Patna Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs group">
                <img
                  src="./images/contact-patna-map.png"
                  alt="Map Location - Patna, Bihar, India"
                  className="w-full h-auto block object-cover select-none"
                />

                {/* Floating Map Location Card (Top-Left) */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-md border border-slate-200/80 text-left">
                  <h4 className="text-sm font-bold text-[#0A2540] leading-none">
                    Patna,
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Bihar, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Patna,Bihar,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold text-[#1677FF] hover:text-[#0A2540] mt-2 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN: Let's Talk Card + Location + Socials + FAQ
                ---------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Card 1: Let's Talk Dark Navy Container */}
              <div className="bg-[#071F38] rounded-3xl p-6 sm:p-7 text-white shadow-xl space-y-6 relative overflow-hidden">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-0.5 bg-[#E31E24]" />
                    <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                      GET IN TOUCH
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Let’s Talk
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-1">
                    Choose the most convenient way to connect. <br />
                    I'm always open to meaningful conversations.
                  </p>
                </div>

                {/* 4 Direct Channel Rows */}
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20business%20growth%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white text-slate-800 hover:bg-slate-50 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-tight">
                          Chat on WhatsApp
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          +91 89358 00557
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0A2540] transition-transform" />
                  </a>

                  {/* Phone Call */}
                  <a
                    href="tel:+918935800557"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white text-slate-800 hover:bg-slate-50 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#E31E24] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-tight">
                          Call Me
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          +91 89358 00557
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0A2540] transition-transform" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:sanjay.kumar@biztechx.in"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white text-slate-800 hover:bg-slate-50 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-tight">
                          Email Me
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          sanjay.kumar@biztechx.in
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0A2540] transition-transform" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/sanjaykumar-growth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white text-slate-800 hover:bg-slate-50 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-tight">
                          Connect on LinkedIn
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          linkedin.com/in/sanjaykumar
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0A2540] transition-transform" />
                  </a>
                </div>
              </div>

              {/* Card 2: My Location Box */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4.5 shadow-2xs flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      My Location
                    </span>
                    <h4 className="text-sm font-bold text-[#0A2540] leading-snug">
                      Patna, Bihar, India
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      (Meetings by appointment)
                    </p>
                  </div>
                </div>

                {/* Subtle Skyline Icon / Monument Outline */}
                <div className="text-slate-300 font-serif text-2xl select-none opacity-40">
                  🏛️
                </div>
              </div>

              {/* Card 3: Let's Connect Online Box */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4.5 shadow-2xs flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540]">
                    Let's Connect Online
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Follow my journey and insights on social media.
                  </p>
                  {/* Social Icons Row */}
                  <div className="flex items-center space-x-2 pt-2.5">
                    <a
                      href="https://linkedin.com/in/sanjaykumar-growth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                    </a>
                    <a
                      href="https://wa.me/918935800557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    </a>
                    <a
                      href="https://youtube.com/@sanjaykumar-growth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-[#E31E24] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <span className="text-[10px] font-bold">▶</span>
                    </a>
                    <a
                      href="mailto:sanjay.kumar@biztechx.in"
                      className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Mail className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>
                </div>

                {/* Handwriting "Stay Connected Grow Together" */}
                <div className="font-handwriting text-right text-slate-700 text-lg leading-tight select-none rotate-[-4deg]">
                  <p>Stay</p>
                  <p>Connected</p>
                  <div className="relative inline-block text-slate-900 font-bold">
                    <span>Grow Together</span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2 text-[#E31E24]"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,8 Q50,1 98,7"
                        stroke="#E31E24"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card 4: Frequently Asked Questions (FAQ) Accordion */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="w-5 h-0.5 bg-[#E31E24]" />
                    <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    Quick Answers
                  </h3>
                </div>

                <div className="space-y-2.5 divide-y divide-slate-100">
                  {FAQ_ITEMS.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="pt-2.5 first:pt-0">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#E31E24] transition-colors py-1 cursor-pointer"
                        >
                          <span className="pr-3 leading-snug">{item.question}</span>
                          <span className="text-slate-400 shrink-0 text-base">
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="text-xs text-slate-600 leading-relaxed pt-2 pb-1 font-normal">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. BOTTOM CTA BANNER: Ready to Take the Next Step?
          ======================================================== */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071C35] rounded-3xl overflow-hidden relative shadow-xl border border-slate-800 text-left">
            
            {/* Background Mountain Photo Overlay */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[55%] pointer-events-none select-none z-0">
              <img
                src="./images/cta-mountain-growth-ultra-hd.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "./images/cta-mountain-growth.jpg";
                }}
                alt="Business Mountain Ascent"
                className="w-full h-full object-cover object-center opacity-70 sm:opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071C35] via-[#071C35]/70 to-transparent" />
            </div>

            <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Button */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Take the Next Step?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                  Every successful business starts with a conversation. <br className="hidden sm:inline" />
                  Let's discuss your goals and explore how we can create value together.
                </p>

                {/* Buttons Row */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#top"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow-md hover:bg-[#C8171D] transition-colors cursor-pointer group"
                  >
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </a>

                  <a
                    href="https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20business%20growth%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20BD5A] transition-colors cursor-pointer group"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Angled Handwriting */}
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <div className="relative font-handwriting text-2xl sm:text-3xl text-slate-100 font-bold leading-tight select-none rotate-[-4deg] text-left">
                  <p>Bigger</p>
                  <p className="ml-1">Businesses</p>
                  <p className="ml-2">Brighter</p>
                  <div className="relative inline-block ml-3">
                    <span>Tomorrow</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#E31E24]"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,8 Q50,1 98,7"
                        stroke="#E31E24"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
