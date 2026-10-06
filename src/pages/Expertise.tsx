import React, { useState } from "react";
import { PROFILE_DATA } from "@/data/portfolioData";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import {
  ArrowRight,
  Download,
  Check,
  Laptop,
  Megaphone,
  Settings,
  Cloud,
  Users,
  PieChart,
  Handshake,
  Lightbulb,
  HeartPulse,
  Factory,
  Store,
  Rocket,
  Plus,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface ExpertiseProps {
  onOpenConsultation: () => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Handle overview download / consultation
  const handleDownloadOverview = () => {
    // Generate and download a formatted text summary or trigger consultation
    const content = `SANJAY KUMAR - EXPERTISE OVERVIEW
Business Technology & Growth Consultant | Founder - BizTechX
Website: https://sanjaykumar.biz
WhatsApp: ${PROFILE_DATA.whatsappNumber}

1. BUSINESS GROWTH CONSULTING
- Business Strategy
- Market Opportunity Analysis
- Growth Roadmaps
- Execution Planning

2. DIGITAL TRANSFORMATION
- Website & Digital Platforms
- CRM & Cloud Applications
- Process Optimization
- System Integration

3. MARKETING & LEAD GENERATION
- Digital Marketing Strategy
- Google & Meta Ads
- Content & Social Media
- Lead Management Systems

4. AI & BUSINESS AUTOMATION
- Workflow Automation
- AI Tools & Applications
- WhatsApp Automation
- Reporting & Analytics

ADDITIONAL EXPERTISE:
- Cloud & IT Solutions
- Customer Experience & Engagement
- Data & Analytics
- Partnerships & Business Development
- Training & Knowledge Sharing

INDUSTRIES:
- Healthcare (Clinics, Hospitals, Diagnostic Centres)
- Professional Services (Consultants, CA/CS, Legal, Education)
- Manufacturing (Manufacturers, Distributors)
- SMEs & Service Business (Retail, Trading, Services, Local Businesses)
- Startups & Technology (SaaS, IT Companies, Digital Businesses)
`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sanjay-Kumar-Expertise-Overview.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white text-slate-800">
      {/* =========================================================================
          1. HERO SECTION: "MY EXPERTISE" (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="pt-28 sm:pt-32 lg:pt-32 pb-0 bg-gradient-to-b from-[#FAFBFD] to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start">
            
            {/* Left Content Column (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-6 space-y-4 text-left pt-3 pb-8 lg:pt-6 lg:pb-12"
            >
              {/* Eyebrow: MY EXPERTISE */}
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-slate-500 uppercase select-none">
                MY EXPERTISE
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12]">
                Turning Business<br />
                Challenges into<br />
                <span className="text-[#E31E24]">
                  Growth Opportunities
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal max-w-xl">
                I bring together business understanding, technology expertise and marketing insight to create practical solutions that help businesses grow, operate better and stay ahead in a digital world.
              </p>

              {/* Action Buttons Row */}
              <div className="pt-3 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                {/* Discuss Your Requirements */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </button>

                {/* Download Expertise Overview */}
                <button
                  onClick={handleDownloadOverview}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-2xs cursor-pointer group"
                >
                  <Download className="w-4 h-4 mr-2 text-slate-700 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Expertise Overview</span>
                </button>
              </div>
            </motion.div>

            {/* Right Visual Artwork Column (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-6 relative flex items-end justify-center lg:justify-end self-end"
            >
              <div className="relative w-full max-w-[640px] overflow-hidden rounded-t-2xl sm:rounded-none">
                
                {/* Left Gradient Mask for Seamless Page Blending */}
                <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAFBFD] via-[#FAFBFD]/80 to-transparent z-10 pointer-events-none" />

                {/* Top Soft Gradient Mask */}
                <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#FAFBFD] via-[#FAFBFD]/40 to-transparent z-10 pointer-events-none" />

                {/* Right Soft Gradient Mask */}
                <div className="absolute inset-y-0 right-0 w-[32%] bg-gradient-to-l from-[#FAFBFD] via-[#FAFBFD]/90 to-transparent z-10 pointer-events-none" />

                {/* Sanjay Kumar High-Resolution Portrait */}
                <img
                  src="./images/sanjay-about-hd.jpg"
                  alt="Sanjay Kumar - Business Technology & Growth Consultant"
                  className="w-full h-auto object-cover object-bottom select-none block"
                  loading="eager"
                />

                {/* Top-Right Handwriting Words: Ideas Strategy Technology Growth */}
                <div className="absolute top-3 sm:top-5 right-3 sm:right-6 lg:right-7 z-20 text-right select-none pointer-events-none">
                  <div className="font-handwriting text-xl sm:text-[32px] lg:text-[36px] text-slate-800 font-bold leading-[1.12] -rotate-3 drop-shadow-xs">
                    Ideas<br />
                    Strategy<br />
                    Technology<br />
                    Growth
                  </div>
                  <svg className="w-20 sm:w-28 h-4 text-[#E31E24] mt-1 ml-auto -rotate-1" viewBox="0 0 100 15" fill="none">
                    <path d="M2 10 C 35 2, 70 2, 98 12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Bottom-Right Dark Navy Quote Card */}
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-4 lg:right-6 z-20 max-w-[170px] xs:max-w-[210px] sm:max-w-[245px] lg:max-w-[265px] bg-[#0A2540] text-white rounded-2xl p-3 sm:p-4.5 shadow-2xl border border-slate-700/60 text-left">
                  <span className="text-xl sm:text-3xl text-white/70 font-serif leading-none block mb-1">“</span>
                  <p className="text-[10px] xs:text-[11px] sm:text-xs text-white/95 font-medium leading-relaxed">
                    I don't just recommend solutions, I help you implement them.
                  </p>
                  <div className="mt-1.5 sm:mt-2 text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-white/80 text-right">
                    — Sanjay Kumar
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CORE EXPERTISE AREAS / "What I Do" (4 PILLARS)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-4 text-left">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.18em] text-[#E31E24] uppercase mb-1">
                <span className="w-6 h-1 bg-[#E31E24] rounded-full inline-block" />
                <span>CORE EXPERTISE AREAS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                What I Do
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              I work at the intersection of business, technology and marketing to help organizations build systems for sustainable growth. Here are my core areas of expertise:
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 01: Business Growth Consulting (Pink/Red Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Top Row: 01 and 3D Growth Chart Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#E31E24]">01</span>
                  {/* Stylized Red Bar Chart with Upward Trend Arrow */}
                  <svg className="w-9 h-9 text-[#E31E24]" viewBox="0 0 32 32" fill="none">
                    <rect x="5" y="18" width="5" height="10" rx="1.5" fill="#E31E24" />
                    <rect x="13.5" y="13" width="5" height="15" rx="1.5" fill="#E31E24" />
                    <rect x="22" y="8" width="5" height="20" rx="1.5" fill="#E31E24" />
                    <path d="M6 12L15 5L24 2" stroke="#E31E24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 2H25V8" stroke="#E31E24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-snug">
                  Business Growth Consulting
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Helping businesses identify opportunities, solve key challenges and create structured growth strategies.
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 pt-2">
                  {[
                    "Business Strategy",
                    "Market Opportunity Analysis",
                    "Growth Roadmaps",
                    "Execution Planning"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#E31E24] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Know More Link */}
              <div className="pt-6 mt-2 border-t border-red-100/60">
                <button
                  onClick={() => setSelectedService(SERVICES[0])}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#E31E24] hover:text-[#C8171D] transition-colors cursor-pointer group/link"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>

            {/* Card 02: Digital Transformation (Green Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Top Row: 02 and Laptop Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#16A34A]">02</span>
                  <Laptop className="w-9 h-9 text-[#16A34A] stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] group-hover:text-[#16A34A] transition-colors leading-snug">
                  Digital Transformation
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Helping businesses adopt the right technology, tools and processes to become more efficient, customer-focused and future-ready.
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 pt-2">
                  {[
                    "Website & Digital Platforms",
                    "CRM & Cloud Applications",
                    "Process Optimization",
                    "System Integration"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Know More Link */}
              <div className="pt-6 mt-2 border-t border-emerald-100/60">
                <button
                  onClick={() => setSelectedService(SERVICES[1])}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#16A34A] hover:text-[#15803D] transition-colors cursor-pointer group/link"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>

            {/* Card 03: Marketing & Lead Generation (Blue Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Top Row: 03 and Megaphone Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#2563EB]">03</span>
                  <Megaphone className="w-9 h-9 text-[#2563EB] stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] group-hover:text-[#2563EB] transition-colors leading-snug">
                  Marketing & Lead Generation
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Building practical and measurable marketing systems to attract, engage and convert the right customers.
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 pt-2">
                  {[
                    "Digital Marketing Strategy",
                    "Google & Meta Ads",
                    "Content & Social Media",
                    "Lead Management Systems"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Know More Link */}
              <div className="pt-6 mt-2 border-t border-blue-100/60">
                <button
                  onClick={() => setSelectedService(SERVICES[2])}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer group/link"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>

            {/* Card 04: AI & Business Automation (Amber/Yellow Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Top Row: 04 and Gear/Settings Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#D97706]">04</span>
                  <Settings className="w-9 h-9 text-[#D97706] stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] group-hover:text-[#D97706] transition-colors leading-snug">
                  AI & Business Automation
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Helping businesses use AI and automation to reduce manual work, improve productivity and enhance customer experience.
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 pt-2">
                  {[
                    "Workflow Automation",
                    "AI Tools & Applications",
                    "WhatsApp Automation",
                    "Reporting & Analytics"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#D97706] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Know More Link */}
              <div className="pt-6 mt-2 border-t border-amber-100/60">
                <button
                  onClick={() => setSelectedService(SERVICES[3])}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#D97706] hover:text-[#B45309] transition-colors cursor-pointer group/link"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ADDITIONAL EXPERTISE / "Other Areas I Work In"
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.18em] text-[#E31E24] uppercase mb-1">
              <span className="w-6 h-1 bg-[#E31E24] rounded-full inline-block" />
              <span>ADDITIONAL EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Other Areas I Work In
            </h2>
          </div>

          {/* 5 Items in Single Rounded Container */}
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 lg:divide-slate-200/80">
              
              {/* 1. Cloud & IT Solutions */}
              <div className="p-5 sm:p-6 flex items-center space-x-4 hover:bg-slate-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Cloud className="w-6 h-6 text-[#1677FF]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                  Cloud & IT<br className="hidden sm:inline" /> Solutions
                </span>
              </div>

              {/* 2. Customer Experience & Engagement */}
              <div className="p-5 sm:p-6 flex items-center space-x-4 hover:bg-slate-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#1677FF]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                  Customer Experience<br className="hidden sm:inline" /> & Engagement
                </span>
              </div>

              {/* 3. Data & Analytics */}
              <div className="p-5 sm:p-6 flex items-center space-x-4 hover:bg-slate-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <PieChart className="w-6 h-6 text-[#1677FF]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                  Data & Analytics
                </span>
              </div>

              {/* 4. Partnerships & Business Development */}
              <div className="p-5 sm:p-6 flex items-center space-x-4 hover:bg-slate-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-[#1677FF]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                  Partnerships<br className="hidden sm:inline" /> & Business Development
                </span>
              </div>

              {/* 5. Training & Knowledge Sharing */}
              <div className="p-5 sm:p-6 flex items-center space-x-4 hover:bg-slate-50/70 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-[#1677FF]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0A2540] leading-snug">
                  Training &<br className="hidden sm:inline" /> Knowledge Sharing
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. TOOLS & PLATFORMS / "Technologies I Work With" (8 CARDS)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-3 text-left">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.18em] text-[#E31E24] uppercase mb-1">
                <span className="w-6 h-1 bg-[#E31E24] rounded-full inline-block" />
                <span>TOOLS & PLATFORMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                Technologies I Work With
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              I work with a wide range of tools and platforms to deliver the right solutions for each business need.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            
            {/* 1. Google */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">Google</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">Ads, Analytics</span>
            </div>

            {/* 2. Meta */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.99 5.5c-1.89 0-3.52 1.02-4.99 2.76C10.53 6.52 8.9 5.5 7.01 5.5 3.39 5.5 1 8.5 1 12.33 1 16.32 3.53 19.5 7.15 19.5c2.14 0 3.86-1.15 4.85-2.66.99 1.51 2.71 2.66 4.85 2.66 3.62 0 6.15-3.18 6.15-7.17 0-3.83-2.39-6.83-6.01-6.83zm-9.84 11.8c-2.43 0-4.05-2.22-4.05-4.97 0-2.62 1.51-4.63 3.91-4.63 1.9 0 3.23 1.48 4.29 3.42-1.07 2.59-2.34 6.18-4.15 6.18zm9.69 0c-1.81 0-3.08-3.59-4.15-6.18 1.06-1.94 2.39-3.42 4.29-3.42 2.4 0 3.91 2.01 3.91 4.63 0 2.75-1.62 4.97-4.05 4.97z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">Meta</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">Ads, Business Suite</span>
            </div>

            {/* 3. WordPress */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 2.21.724 4.254 1.947 5.914l4.02-11.66c.21-.61.64-1.02 1.3-.98.05.004.1.01.15.018l2.97 8.87 2.42-7.85c.16-.52.54-.87 1.09-.87h.03c.53 0 .91.35 1.07.87l3.63 10.74C21.05 15.68 22 13.94 22 12c0-5.514-4.486-10-10-10zm-6.9 14.12l3.47 10.08c-2.73-1.69-4.57-4.64-4.57-8.02 0-.74.1-1.46.29-2.14l.81.08zm13.8 0c.19.68.29 1.4.29 2.14 0 3.38-1.84 6.33-4.57 8.02l3.47-10.08.81-.08zM12 22c-1.41 0-2.73-.34-3.9-.94l3.19-9.25 3.19 9.25c-1.17.6-2.49.94-3.9.94z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">WordPress</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">Web Development</span>
            </div>

            {/* 4. HubSpot */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF7A59">
                  <path d="M18.8 7.37V5.05c.87-.36 1.48-1.22 1.48-2.22 0-1.34-1.09-2.43-2.43-2.43-1.34 0-2.43 1.09-2.43 2.43 0 1 .61 1.86 1.48 2.22v2.32c-1.04.4-1.92 1.1-2.52 2L6.85 5.86c.07-.27.12-.55.12-.86 0-1.84-1.49-3.33-3.33-3.33S.31 3.16.31 5s1.49 3.33 3.33 3.33c.55 0 1.06-.14 1.52-.37l7.46 3.51c-.24.71-.38 1.47-.38 2.26 0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7zm.43 9.43c-1.34 0-2.43-1.09-2.43-2.43s1.09-2.43 2.43-2.43 2.43 1.09 2.43 2.43-1.09 2.43-2.43 2.43z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">HubSpot</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">CRM & Marketing</span>
            </div>

            {/* 5. Zoho */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-8 h-7" viewBox="0 0 100 80">
                  <rect x="2" y="2" width="44" height="36" rx="6" fill="#E31E24" />
                  <text x="24" y="27" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Z</text>
                  <rect x="54" y="2" width="44" height="36" rx="6" fill="#22C55E" />
                  <text x="76" y="27" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">O</text>
                  <rect x="2" y="42" width="44" height="36" rx="6" fill="#1677FF" />
                  <text x="24" y="67" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">H</text>
                  <rect x="54" y="42" width="44" height="36" rx="6" fill="#F59E0B" />
                  <text x="76" y="67" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">O</text>
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">Zoho</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">CRM & Business Apps</span>
            </div>

            {/* 6. Shopify */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#95BF47">
                  <path d="M19.467 5.713c-.04-.267-.28-.427-.533-.427-.053 0-.107.013-.16.027l-1.92.56c-.52-1.347-1.427-2.493-2.733-3.08-.493-.227-1.04-.347-1.613-.347-3.013 0-4.547 2.76-4.907 4.547L4.547 7.9c-.293.093-.467.4-.413.707l2.853 13.787a.65.65 0 0 0 .64.52h11.2a.653.653 0 0 0 .64-.52l2.853-13.787c.053-.293-.12-.6-.413-.707l-2.44-1.18zm-6.96-1.507c.36 0 .707.08 1.027.227.973.44 1.667 1.347 2.067 2.44l-5.067 1.48c.36-1.507 1.48-4.147 1.973-4.147z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">Shopify</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">E-commerce</span>
            </div>

            {/* 7. OpenAI */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#0A2540]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.28 10.87a6.22 6.22 0 0 0-.54-5.23 6.18 6.18 0 0 0-4.59-3.13 6.25 6.25 0 0 0-5.71 1.72 6.23 6.23 0 0 0-4.2-1.57c-2.34 0-4.47 1.34-5.46 3.44a6.23 6.23 0 0 0-1.35 5.12 6.17 6.17 0 0 0 1.66 4.31 6.22 6.22 0 0 0 .54 5.23 6.18 6.18 0 0 0 4.59 3.13 6.23 6.23 0 0 0 5.71-1.72 6.23 6.23 0 0 0 4.2 1.57c2.34 0 4.47-1.34 5.46-3.44a6.23 6.23 0 0 0 1.35-5.12 6.17 6.17 0 0 0-1.66-4.31zm-8.87 10.15a4.7 4.7 0 0 1-3.08-1.14l.15-.09 5.09-2.94a.77.77 0 0 0 .39-.67v-5.69l1.71.99a.08.08 0 0 1 .04.07v5.82a4.72 4.72 0 0 1-4.3 3.65zm-8.11-3.69a4.7 4.7 0 0 1-.58-3.23l.15.09 5.09 2.94a.77.77 0 0 0 .78 0l4.93-2.85v1.98a.08.08 0 0 1-.03.07l-5.04 2.91a4.72 4.72 0 0 1-5.34-1.91zm-1.17-8.8a4.7 4.7 0 0 1 2.5-2.09v6.05a.77.77 0 0 0 .39.67l4.93 2.85-1.71.99a.08.08 0 0 1-.08 0l-5.04-2.91a4.72 4.72 0 0 1-.99-5.56zm14.15 3.32l-4.93-2.85 1.71-.99a.08.08 0 0 1 .08 0l5.04 2.91a4.72 4.72 0 0 1-1.02 8.35v-6.05a.77.77 0 0 0-.39-.67l-.49-.7zm2.46-3.27l-.15-.09-5.09-2.94a.77.77 0 0 0-.78 0l-4.93 2.85v-1.98a.08.08 0 0 1 .03-.07l5.04-2.91a4.72 4.72 0 0 1 5.88 5.14zm-9.33-1.64l2.46 1.42v2.84l-2.46 1.42-2.46-1.42v-2.84l2.46-1.42z" />
                </svg>
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">OpenAI</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">AI Solutions</span>
            </div>

            {/* 8. And More */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="h-9 flex items-center justify-center">
                <Plus className="w-8 h-8 text-[#0A2540] stroke-[2.5]" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#0A2540] mt-3 block">And More</span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">Tools</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INDUSTRIES I FOCUS ON / "Industry Experience" (5 CARDS)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-3 text-left">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold tracking-[0.18em] text-[#E31E24] uppercase mb-1">
                <span className="w-6 h-1 bg-[#E31E24] rounded-full inline-block" />
                <span>INDUSTRIES I FOCUS ON</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                Industry Experience
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              I have worked with businesses across multiple industries, with a special focus on healthcare and professional services.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* 1. Healthcare */}
            <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-2xl p-4.5 sm:p-5 flex items-start space-x-3.5 text-left hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-[#E31E24]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0A2540] leading-tight">
                  Healthcare
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                  Clinics | Hospitals<br />Diagnostic Centres
                </p>
              </div>
            </div>

            {/* 2. Professional Services */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl p-4.5 sm:p-5 flex items-start space-x-3.5 text-left hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#16A34A]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0A2540] leading-tight">
                  Professional Services
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                  Consultants | CA/CS<br />Legal | Education
                </p>
              </div>
            </div>

            {/* 3. Manufacturing */}
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-4.5 sm:p-5 flex items-start space-x-3.5 text-left hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0A2540] leading-tight">
                  Manufacturing
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                  Manufacturers<br />Distributors
                </p>
              </div>
            </div>

            {/* 4. SMEs & Service Business */}
            <div className="bg-[#FAF5FF] border border-[#F3E8FF] rounded-2xl p-4.5 sm:p-5 flex items-start space-x-3.5 text-left hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-[#9333EA]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0A2540] leading-tight">
                  SMEs & Service Business
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                  Retail | Trading | Services<br />Local Businesses
                </p>
              </div>
            </div>

            {/* 5. Startups & Technology */}
            <div className="bg-[#EEF2FF] border border-[#E0E7FF] rounded-2xl p-4.5 sm:p-5 flex items-start space-x-3.5 text-left hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0A2540] leading-tight">
                  Startups & Technology
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                  SaaS | IT Companies<br />Digital Businesses
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BOTTOM CTA BANNER: "Let's Put This Expertise to Work for Your Business"
          ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071C35] rounded-3xl overflow-hidden relative shadow-2xl border border-slate-800/90 text-left">
            
            {/* Background Mountain Photo Overlay */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[55%] pointer-events-none select-none z-0">
              <img
                src="./images/cta-mountain-growth-ultra-hd.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "./images/cta-mountain-growth.jpg";
                }}
                alt="Business Mountain Ascent"
                className="w-full h-full object-cover object-center opacity-75 sm:opacity-85 mix-blend-screen"
              />
              {/* Subtle Gradient Transition from Dark Navy Left to Photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#071C35] via-[#071C35]/70 to-transparent" />
            </div>

            {/* Content Row */}
            <div className="relative z-10 p-6 sm:p-9 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              {/* Left Column: Heading & Subtext */}
              <div className="max-w-xl space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-[1.2]">
                  Let's Put This Expertise to Work<br />
                  for Your Business
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-1">
                  Have a project in mind or want to explore possibilities?<br className="hidden sm:inline" />
                  {" "}Let's discuss how I can help.
                </p>
              </div>

              {/* Middle/Right Column: Stacked Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
                {/* Red Let's Talk Button */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow-md hover:bg-[#C8171D] hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </button>

                {/* Dark / Translucent WhatsApp Button */}
                <a
                  href={PROFILE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0A2540]/90 hover:bg-[#0A2540] border border-white/20 text-white font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-[#25D366] fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Far Right Artistic Script: Bigger Businesses Brighter Tomorrow */}
              <div className="hidden lg:block text-right select-none pl-4 pr-2">
                <div className="font-handwriting text-2xl xl:text-3xl text-slate-200 font-bold leading-tight -rotate-3 drop-shadow-xs">
                  Bigger<br />
                  Businesses<br />
                  Brighter<br />
                  Tomorrow
                </div>
                <svg className="w-24 xl:w-28 h-4 text-[#E31E24] mt-1 ml-auto -rotate-1" viewBox="0 0 100 15" fill="none">
                  <path d="M2 10 C 35 2, 70 2, 98 12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </div>

            </div>

          </div>
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
