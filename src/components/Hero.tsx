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
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 bg-[#FAFBFD] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase"
            >
              {PROFILE_DATA.tagline}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.14]"
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
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              {PROFILE_DATA.heroSubtext}
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Primary Red Button */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Let's Discuss Your Business</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary White Button */}
              <Link
                to="/expertise"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
              >
                <span>Explore My Expertise</span>
              </Link>

              {/* Link: View BizTechX */}
              <Link
                to="/about"
                className="inline-flex items-center text-[#0A2540] hover:text-[#E31E24] font-semibold text-sm px-2 py-2 group transition-colors"
              >
                <span>View BizTechX</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero Column: Corporate Portrait & Info Panel (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src="/images/hero-right-panel-ultra-hd.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/hero-right-panel-hd.jpg";
                }}
                alt="Sanjay Kumar - Business Technology & Growth Consultant"
                className="w-full h-auto object-cover object-center select-none"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
