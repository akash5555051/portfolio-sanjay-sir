import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Trophy,
  Users,
  FileText,
  Target,
  Lightbulb,
  TrendingUp,
  Compass,
  Settings,
  UserCheck,
  Leaf
} from "lucide-react";
import { motion } from "framer-motion";

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white text-slate-800">
      
      {/* =========================================================================
          1. HERO SECTION: ABOUT SANJAY KUMAR (EXACT SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="pt-24 sm:pt-26 lg:pt-28 pb-0 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-start">
            
            {/* Left Content Column (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-5 space-y-3.5 sm:space-y-4 text-left pt-2 pb-6 sm:pb-8 lg:pt-3 lg:pb-10"
            >
              {/* Eyebrow: ABOUT SANJAY KUMAR */}
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#1677FF] uppercase select-none">
                ABOUT SANJAY KUMAR
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12]">
                A Passion for<br />
                <span className="text-[#E31E24]">
                  Business Growth
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                I believe every business, big or small, can achieve more with the right combination of strategy, technology, marketing and the willingness to adapt. My mission is to help business owners and leaders turn their ideas into sustainable growth through practical, real-world solutions.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <a
                  href={PROFILE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
                >
                  <Download className="w-4 h-4 mr-2 text-slate-600" />
                  <span>Download Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual Artwork Column - 100% Real HD Photo + Vector Sharp Text! */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-7 relative flex items-end justify-center lg:justify-end self-end"
            >
              <div className="relative w-full max-w-[700px] overflow-hidden rounded-t-xl sm:rounded-none">
                
                {/* 1. Left Gradient Mask for Silky-Smooth Seamless White Page Blending */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* 2. Top Soft Gradient Mask for Header Blending */}
                <div className="absolute top-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-b from-white via-white/40 to-transparent z-10 pointer-events-none" />

                {/* 3. Right White Wall Gradient Mask for Clean Canvas for Handwriting */}
                <div className="absolute inset-y-0 right-0 w-[35%] lg:w-[38%] bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />

                {/* 4. Real 4K Ultra HD Master Photograph of Sanjay Kumar */}
                <img
                  src="./images/sanjay-about-hd.jpg"
                  alt="Sanjay Kumar - A Passion for Business Growth"
                  className="w-full h-auto object-cover object-bottom select-none block"
                  loading="eager"
                />

                {/* 5. Top-Right Handwriting Words: 100% Crisp Vector Google Font Caveat */}
                <div className="absolute top-3 sm:top-5 right-3 sm:right-6 lg:right-7 z-20 text-right select-none pointer-events-none">
                  <div className="font-handwriting text-xl sm:text-[30px] lg:text-[34px] text-slate-800 font-bold leading-[1.12] -rotate-3 drop-shadow-xs">
                    Technology<br />
                    People<br />
                    Business<br />
                    Growth
                  </div>
                  <svg className="w-20 sm:w-28 h-4 text-[#E31E24] mt-1 ml-auto -rotate-1" viewBox="0 0 100 15" fill="none">
                    <path d="M2 10 C 35 2, 70 2, 98 12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 6. Bottom-Right Dark Navy Quote Card: 100% Crisp HTML Typography */}
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-4 lg:right-6 z-20 max-w-[170px] xs:max-w-[210px] sm:max-w-[245px] lg:max-w-[265px] bg-[#0A2540] text-white rounded-2xl p-3 sm:p-4.5 shadow-2xl border border-slate-700/60 text-left">
                  <span className="text-xl sm:text-3xl text-white/70 font-serif leading-none block mb-1">“</span>
                  <p className="text-[10px] xs:text-[11px] sm:text-xs text-white/95 font-medium leading-relaxed">
                    Technology is most powerful when it creates real opportunities for people and businesses.
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
          2. SECTION: MY STORY & STAT CARDS (2x2 GRID)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: My Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4 text-left"
            >
              <span className="text-base sm:text-lg font-bold text-[#0A2540] block">
                My Story
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                From Curiosity to Creating Real Impact
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                <p>
                  My journey has been driven by a simple curiosity – how businesses can grow faster, work smarter and create better value for their customers.
                </p>
                <p>
                  Over the years, I have worked with diverse industries, businesses and professionals, gaining hands-on experience in business operations, technology implementation, digital marketing and customer growth strategies.
                </p>
                <p>
                  Today, through my consulting work and BizTechX, I help businesses design and implement practical systems that bring measurable results.
                </p>
              </div>

              {/* Quote Block with Red Left Accent */}
              <div className="mt-6 pt-1">
                <div className="border-l-[3px] border-[#E31E24] pl-4 sm:pl-5 py-2.5 bg-slate-50/70 rounded-r-xl">
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                    “ I enjoy working with business owners, leadership teams and professionals who are serious about growth and open to using technology to make it happen.”
                  </p>
                  <span className="block text-right font-bold text-[#0A2540] text-xs sm:text-sm mt-2 not-italic">
                    — Sanjay Kumar
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 4 Stat Cards in 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: 20+ Years */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3 cursor-default"
              >
                <div className="text-[#1677FF]">
                  <Trophy className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    20+ Years
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1 whitespace-pre-line">
                    Business & Technology{"\n"}Experience
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Multiple Industries */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3 cursor-default"
              >
                <div className="text-[#1677FF]">
                  <Users className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    Multiple Industries
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1 whitespace-pre-line">
                    Healthcare | Manufacturing{"\n"}Services | Professional Businesses
                  </p>
                </div>
              </motion.div>

              {/* Card 3: 100+ */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3 cursor-default"
              >
                <div className="text-[#1677FF]">
                  <FileText className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    100+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1 whitespace-pre-line">
                    Projects & Consulting{"\n"}Assignments
                  </p>
                </div>
              </motion.div>

              {/* Card 4: BizTechX */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3 cursor-default"
              >
                <div className="text-[#1677FF]">
                  <Target className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    BizTechX
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1 whitespace-pre-line">
                    Founder & Consultant{"\n"}Business Growth Solutions
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECTION: WHAT DRIVES ME (4 COLORED FEATURE CARDS)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Section Header with Red Vertical Accent Line */}
          <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
            <span className="w-1.5 h-6 bg-[#E31E24] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              What Drives Me
            </h2>
          </div>

          {/* 4 Colored Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Card 1: Make a Difference (Red Tint) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl p-6 sm:p-7 bg-[#FEF2F2] border border-[#FEE2E2] flex flex-col justify-start transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <Target className="w-8 h-8 text-[#E31E24] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Make a Difference
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Create real value for businesses and people.
              </p>
            </motion.div>

            {/* Card 2: Learn & Adapt (Green Tint) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="rounded-2xl p-6 sm:p-7 bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col justify-start transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <Lightbulb className="w-8 h-8 text-[#22C55E] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Learn & Adapt
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Stay curious and keep exploring new possibilities.
              </p>
            </motion.div>

            {/* Card 3: Collaborate (Blue Tint) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="rounded-2xl p-6 sm:p-7 bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col justify-start transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <Users className="w-8 h-8 text-[#1677FF] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Collaborate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Work with great people and build long-term relationships.
              </p>
            </motion.div>

            {/* Card 4: Enable Growth (Yellow/Amber Tint) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="rounded-2xl p-6 sm:p-7 bg-[#FFFBEB] border border-[#FEF3C7] flex flex-col justify-start transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <TrendingUp className="w-8 h-8 text-[#F59E0B] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Enable Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Help businesses achieve sustainable and meaningful growth.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SECTION: MY MISSION (PANORAMIC MOUNTAIN BANNER - ULTRA HD)
          ========================================================================= */}
      <section className="relative overflow-hidden w-full bg-[#0A2540]">
        {/* Background Ultra-HD Mountain Landscape */}
        <div className="absolute inset-0">
          <img
            src="./images/mission-mountain-bg-ultra-hd.jpg"
            alt="Mountain summit representing business growth mission"
            className="w-full h-full object-cover object-right md:object-center select-none"
            loading="lazy"
          />
          {/* Contrast Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061C33]/92 via-[#0A284A]/75 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading and 4 Badges */}
            <div className="lg:col-span-9 space-y-6 sm:space-y-8">
              
              {/* Eyebrow with Red Accent Underline */}
              <div>
                <span className="text-sm sm:text-base font-bold text-white tracking-wide uppercase inline-block">
                  My Mission
                </span>
                <div className="h-0.5 w-12 bg-[#E31E24] mt-1.5 rounded-full" />
              </div>

              {/* Main Mission Statement */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-[1.25] max-w-3xl drop-shadow-xs">
                To empower businesses with the right combination of strategy, technology and execution to achieve sustainable growth.
              </h2>

              {/* 4 Interactive Badges in a Row */}
              <div className="pt-2 grid grid-cols-2 md:flex md:items-center gap-4 sm:gap-6 lg:gap-8">
                
                {/* Badge 1: Practical Solutions */}
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:border-white transition-colors">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
                    Practical<br />Solutions
                  </div>
                </div>

                <div className="hidden md:block h-8 w-px bg-white/25" />

                {/* Badge 2: Real-World Implementation */}
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:border-white transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
                    Real-World<br />Implementation
                  </div>
                </div>

                <div className="hidden md:block h-8 w-px bg-white/25" />

                {/* Badge 3: Long-Term Partnership */}
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:border-white transition-colors">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
                    Long-Term<br />Partnership
                  </div>
                </div>

                <div className="hidden md:block h-8 w-px bg-white/25" />

                {/* Badge 4: Positive Impact */}
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:border-white transition-colors">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-white tracking-wider uppercase leading-tight">
                    Positive<br />Impact
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Slogan Overlay on Summit */}
            <div className="lg:col-span-3 flex justify-end lg:pr-2 pt-4 lg:pt-0">
              <div className="text-right">
                <div className="text-xs sm:text-sm font-black tracking-widest text-white/90 uppercase leading-snug">
                  <div>BIGGER</div>
                  <div>BUSINESSES</div>
                  <div>BRIGHTER</div>
                  <div>TOMORROW</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION: BEYOND WORK - A CONTINUOUS LEARNER
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Heading and Description (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-3.5 text-left"
            >
              {/* Eyebrow with Red Accent Underline */}
              <div>
                <span className="text-base sm:text-lg font-bold text-[#0A2540] block">
                  Beyond Work
                </span>
                <div className="w-8 h-[2.5px] bg-[#E31E24] rounded-full mt-1.5" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                A Continuous Learner
              </h2>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-[13px] lg:text-sm leading-relaxed font-normal pt-1">
                <p>
                  I am a firm believer in continuous learning – whether it's new technologies, market trends or real-life experiences from businesses and people I interact with.
                </p>
                <p>
                  Outside of work, I enjoy reading, learning about emerging technologies like AI, meeting new people, networking through BNI and exploring ideas that can create a better future for businesses and communities.
                </p>
              </div>
            </motion.div>

            {/* Right Column: 3 Ultra-HD Cards Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              
              {/* Card 1: Reading & Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-left group cursor-default"
              >
                <div className="rounded-xl overflow-hidden shadow-2xs border border-slate-200/90 bg-slate-50 aspect-[4/3] relative">
                  <img
                    src="./images/reading-learning-ultra-hd.jpg"
                    alt="Reading & Learning - Books and reading glasses"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0A2540] mt-2.5 group-hover:text-[#E31E24] transition-colors leading-tight">
                  Reading & Learning
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal font-normal">
                  Exploring new ideas and perspectives
                </p>
              </motion.div>

              {/* Card 2: Networking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="text-left group cursor-default"
              >
                <div className="rounded-xl overflow-hidden shadow-2xs border border-slate-200/90 bg-slate-50 aspect-[4/3] relative">
                  <img
                    src="./images/networking-ultra-hd.jpg"
                    alt="Networking - BNI Business Network Event"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0A2540] mt-2.5 group-hover:text-[#E31E24] transition-colors leading-tight">
                  Networking
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal font-normal">
                  Building meaningful connections
                </p>
              </motion.div>

              {/* Card 3: Exploring Possibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="text-left group cursor-default"
              >
                <div className="rounded-xl overflow-hidden shadow-2xs border border-slate-200/90 bg-slate-50 aspect-[4/3] relative">
                  <img
                    src="./images/exploring-possibilities-ultra-hd.jpg"
                    alt="Exploring Possibilities - Mountain Summit Golden Sunrise"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#0A2540] mt-2.5 group-hover:text-[#E31E24] transition-colors leading-tight">
                  Exploring Possibilities
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal font-normal">
                  Always curious about what's next
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECTION: LET'S BUILD SOMETHING MEANINGFUL TOGETHER (CTA - EXACT MATCH)
          ========================================================================= */}
      <section className="pt-6 sm:pt-8 pb-4 sm:pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs"
          >
            {/* Left Content */}
            <div className="text-left space-y-2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
                Let’s Build<br />
                Something Meaningful Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                Have a business challenge or an idea to discuss? I'd love to connect and explore how we can create value together.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full lg:w-auto justify-start lg:justify-end">
              {/* Red Let's Talk Button */}
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* White Chat on WhatsApp Button */}
              <a
                href={PROFILE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-2xs group"
              >
                {/* Official WhatsApp Green SVG */}
                <svg
                  className="w-5 h-5 mr-2 text-[#25D366] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.436 5.176L2 22l4.981-1.309A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.225-1.176l-.303-.18-3.125.82.834-3.045-.198-.315A8.163 8.163 0 0 1 3.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2s-3.678 8.2-8.2 8.2z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
