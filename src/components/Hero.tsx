import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-14 bg-[#FAFBFD] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (7 Columns on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 text-left"
          >
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] text-slate-500 uppercase"
            >
              {PROFILE_DATA.tagline}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[30px] sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.14]"
            >
              Turning Ideas into{" "}
              <span className="text-[#E31E24] font-black inline-block transform hover:scale-105 transition-transform duration-200">
                Real
              </span>{" "}
              Business Growth
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              {PROFILE_DATA.heroSubtext}
            </motion.p>

            {/* Buttons Row - Responsive mobile layout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            >
              {/* Primary Red Button */}
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] hover:shadow-md transition-all active:scale-[0.98] cursor-pointer group"
              >
                <span>Let's Discuss Your Business</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                {/* Secondary White Button: View My Experience */}
                <Link
                  to="/experience"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
                >
                  <span>View My Experience</span>
                </Link>

                {/* Link: Explore Expertise */}
                <Link
                  to="/expertise"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#E31E24] font-semibold text-sm px-2 py-2 group transition-colors shrink-0"
                >
                  <span>Explore Expertise</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Column: Responsive Proportions & HD Quality */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full pt-3 lg:pt-0"
          >
            {/* ========================================================
                A. MOBILE VIEW (< 1024px): Sleek, perfectly proportioned unified executive card
                ======================================================== */}
            <div className="lg:hidden relative mx-auto w-full max-w-[340px] sm:max-w-[420px]">
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/90">
                {/* HD Portrait with controlled max-height for perfect mobile ratio */}
                <img
                  src="./images/sanjay-kumar-hd.jpg"
                  alt="Sanjay Kumar - Business Technology & Growth Consultant"
                  className="w-full h-auto max-h-[360px] sm:max-h-[440px] object-cover object-top select-none"
                  loading="eager"
                />

                {/* Top-Right Floating Signature */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-right select-none">
                  <span className="font-handwriting text-2xl sm:text-3xl text-slate-800 font-bold block -rotate-2 drop-shadow-xs">
                    Sanjay Kumar
                  </span>
                  <div className="flex items-center space-x-1 justify-end mt-0.5">
                    <span className="h-1 w-2 bg-[#E31E24] rounded-full" />
                    <span className="h-1 w-2 bg-[#F59E0B] rounded-full" />
                    <span className="h-1 w-4 bg-[#1677FF] rounded-full" />
                  </div>
                </div>

                {/* Bottom Floating Glassmorphism Quote Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 shadow-md border border-slate-100/90 text-left">
                  <div className="flex items-start space-x-2">
                    <span className="text-xl sm:text-2xl text-slate-400 font-serif leading-none shrink-0">“</span>
                    <div>
                      <p className="text-[11px] sm:text-xs text-slate-700 font-medium leading-relaxed">
                        My purpose is to help businesses grow with the right mix of strategy, technology and execution.
                      </p>
                      <div className="mt-1 text-[10px] sm:text-[11px] font-bold text-slate-900 text-right">
                        — Sanjay Kumar
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Pillars Row */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-3 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />PEOPLE</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />IDEAS</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />TECHNOLOGY</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />GROWTH</span>
              </div>
            </div>

            {/* ========================================================
                B. DESKTOP VIEW (>= 1024px): Exact Side-by-Side Widescreen Layout
                ======================================================== */}
            <div className="hidden lg:flex items-stretch justify-end gap-5">
              {/* HD Portrait */}
              <div className="relative w-[58%] flex items-end justify-center overflow-hidden rounded-3xl shadow-sm border border-slate-200/70 bg-white">
                <img
                  src="./images/sanjay-kumar-hd.jpg"
                  alt="Sanjay Kumar - Business Technology & Growth Consultant"
                  className="w-full h-auto object-cover object-top select-none hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Right Information Panel (Signature, Pillars, Quote Card) */}
              <div className="w-[42%] flex flex-col justify-between py-2 space-y-4 text-left">
                {/* Handwritten Signature */}
                <div className="pt-1">
                  <span className="font-handwriting text-3xl xl:text-4xl text-slate-700 font-bold block -rotate-2 select-none">
                    Sanjay Kumar
                  </span>
                </div>

                {/* Pillars with Multi-Colored Vertical Bars */}
                <div className="flex items-start space-x-3 py-1">
                  <div className="flex flex-col space-y-1.5 pt-0.5 shrink-0">
                    <div className="w-1 h-3.5 bg-[#E31E24] rounded-full" />
                    <div className="h-3.5 w-1 bg-[#F59E0B] rounded-full" />
                    <div className="w-1 h-7 bg-[#1677FF] rounded-full" />
                  </div>
                  <div className="flex flex-col justify-between text-[11px] xl:text-xs font-bold text-slate-600 tracking-wider uppercase space-y-1">
                    <span className="hover:text-slate-900 transition-colors">PEOPLE</span>
                    <span className="hover:text-slate-900 transition-colors">IDEAS</span>
                    <span className="hover:text-slate-900 transition-colors">TECHNOLOGY</span>
                    <span className="hover:text-slate-900 transition-colors">GROWTH</span>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="bg-white rounded-2xl p-4 xl:p-5 shadow-md border border-slate-100 hover:shadow-lg transition-shadow relative">
                  <span className="text-3xl text-slate-400 font-serif leading-none block mb-1">“</span>
                  <p className="text-xs xl:text-[13px] text-slate-700 font-medium leading-relaxed">
                    My purpose is to help businesses grow with the right mix of strategy, technology and execution.
                  </p>
                  <div className="mt-3 text-[11px] xl:text-xs font-semibold text-slate-800 text-right">
                    — Sanjay Kumar
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
