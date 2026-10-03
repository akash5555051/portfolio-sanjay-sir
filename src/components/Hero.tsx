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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Tagline / Eyebrow */}
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              {PROFILE_DATA.tagline}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.14]">
              Turning Ideas into{" "}
              <span className="text-[#E31E24] font-black">
                Real
              </span>{" "}
              Business Growth
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              {PROFILE_DATA.heroSubtext}
            </p>

            {/* Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Red Button */}
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Let's Discuss Your Business</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary White Button */}
              <Link
                to="/expertise"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
              >
                <span>Explore My Expertise</span>
              </Link>

              {/* Link: View BizTechX */}
              <Link
                to="/about"
                className="inline-flex items-center text-[#0A2540] hover:text-[#E31E24] font-semibold text-sm px-2 py-2 group transition-colors"
              >
                <span>View BizTechX</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Hero Column: Corporate Portrait & Info Panel (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
              <img
                src="/images/hero-right-panel-hd.jpg"
                alt="Sanjay Kumar - Business Technology & Growth Consultant"
                className="w-full h-auto object-cover object-center"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
