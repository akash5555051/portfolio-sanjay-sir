import React from "react";
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
    <div className="pt-20 sm:pt-24 bg-white text-slate-800">
      
      {/* =========================================================================
          1. HERO SECTION: ABOUT SANJAY KUMAR
          ========================================================================= */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Eyebrow */}
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
                ABOUT SANJAY KUMAR
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12]">
                A Passion for{" "}
                <span className="text-[#E31E24] block sm:inline">
                  Business Growth
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                I believe every business, big or small, can achieve more with the right combination of strategy, technology, marketing and the willingness to adapt. My mission is to help business owners and leaders turn their ideas into sustainable growth through practical, real-world solutions.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={PROFILE_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
                >
                  <Download className="w-4 h-4 mr-2 text-slate-600" />
                  <span>Download Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-50">
                <img
                  src="/images/about-hero-right-hd.jpg"
                  onError={(e) => {
                    // Fallback if hd image path isn't loaded
                    (e.target as HTMLImageElement).src = "/images/about-hero-right.jpg";
                  }}
                  alt="Sanjay Kumar - Business Technology & Growth Consultant"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SECTION: MY STORY & STAT CARDS
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: My Story */}
            <div className="lg:col-span-6 space-y-4 text-left">
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
                <div className="border-l-[3px] border-[#E31E24] pl-4 sm:pl-5 py-2 bg-slate-50/50 rounded-r-xl">
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                    “ I enjoy working with business owners, leadership teams and professionals who are serious about growth and open to using technology to make it happen.”
                  </p>
                  <span className="block text-right font-bold text-[#0A2540] text-xs sm:text-sm mt-2 not-italic">
                    – Sanjay Kumar
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Stat Cards in 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: 20+ Years */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all text-left space-y-3">
                <div className="text-[#1677FF]">
                  <Trophy className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    20+ Years
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                    Business & Technology Experience
                  </p>
                </div>
              </div>

              {/* Card 2: Multiple Industries */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all text-left space-y-3">
                <div className="text-[#1677FF]">
                  <Users className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    Multiple Industries
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                    Healthcare | Manufacturing<br />
                    Services | Professional Businesses
                  </p>
                </div>
              </div>

              {/* Card 3: 100+ */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all text-left space-y-3">
                <div className="text-[#1677FF]">
                  <FileText className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    100+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                    Projects & Consulting Assignments
                  </p>
                </div>
              </div>

              {/* Card 4: BizTechX */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition-all text-left space-y-3">
                <div className="text-[#1677FF]">
                  <Target className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    BizTechX
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                    Founder & Consultant<br />
                    Business Growth Solutions
                  </p>
                </div>
              </div>

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
            <div className="rounded-2xl p-6 sm:p-7 bg-[#FEF2F2] border border-[#FEE2E2] flex flex-col justify-start hover:-translate-y-1 transition-transform duration-200">
              <div className="mb-4">
                <Target className="w-8 h-8 text-[#E31E24] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Make a Difference
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Create real value for businesses and people.
              </p>
            </div>

            {/* Card 2: Learn & Adapt (Green Tint) */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col justify-start hover:-translate-y-1 transition-transform duration-200">
              <div className="mb-4">
                <Lightbulb className="w-8 h-8 text-[#22C55E] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Learn & Adapt
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Stay curious and keep exploring new possibilities.
              </p>
            </div>

            {/* Card 3: Collaborate (Blue Tint) */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col justify-start hover:-translate-y-1 transition-transform duration-200">
              <div className="mb-4">
                <Users className="w-8 h-8 text-[#2563EB] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Collaborate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Work with great people and build long-term relationships.
              </p>
            </div>

            {/* Card 4: Enable Growth (Yellow/Amber Tint) */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#FFFBEB] border border-[#FEF3C7] flex flex-col justify-start hover:-translate-y-1 transition-transform duration-200">
              <div className="mb-4">
                <TrendingUp className="w-8 h-8 text-[#F59E0B] stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Enable Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Help businesses achieve sustainable and meaningful growth.
              </p>
            </div>

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
            src="/images/mission-mountain-bg-ultra-hd.jpg"
            alt="Mountain summit representing business growth mission"
            className="w-full h-full object-cover object-right md:object-center select-none"
            loading="lazy"
          />
          {/* Subtle contrast gradient for left text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061C33]/92 via-[#0A284A]/75 to-black/20" />
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

              {/* 4 Interactive Badges in a Row with Divider Lines */}
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
              <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-5 text-right shadow-lg">
                <div className="text-xs sm:text-sm font-black tracking-widest text-white uppercase leading-snug">
                  <div>BIGGER</div>
                  <div>BUSINESSES</div>
                  <div>BRIGHTER</div>
                  <div>TOMORROW</div>
                </div>
                <div className="h-0.5 w-12 bg-[#E31E24] mt-2 ml-auto rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION: BEYOND WORK - A CONTINUOUS LEARNER
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Heading and Description (5 Cols) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-base sm:text-lg font-bold text-[#0A2540] block">
                Beyond Work
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                A Continuous Learner
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                <p>
                  I am a firm believer in continuous learning – whether it's new technologies, market trends or real-life experiences from businesses and people I interact with.
                </p>
                <p>
                  Outside of work, I enjoy reading, learning about emerging technologies like AI, meeting new people, networking through BNI and exploring ideas that can create a better future for businesses and communities.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Ultra-HD Cards Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Card 1: Reading & Learning */}
              <div className="text-left group">
                <div className="rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-50 aspect-[16/10] relative">
                  <img
                    src="/images/reading-learning-ultra-hd.jpg"
                    alt="Reading & Learning - Books and reading glasses"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-3 group-hover:text-[#E31E24] transition-colors">
                  Reading & Learning
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  Exploring new ideas and perspectives
                </p>
              </div>

              {/* Card 2: Networking */}
              <div className="text-left group">
                <div className="rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-50 aspect-[16/10] relative">
                  <img
                    src="/images/networking-ultra-hd.jpg"
                    alt="Networking - BNI Business Network"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-3 group-hover:text-[#E31E24] transition-colors">
                  Networking
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  Building meaningful connections
                </p>
              </div>

              {/* Card 3: Exploring Possibilities */}
              <div className="text-left group">
                <div className="rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-50 aspect-[16/10] relative">
                  <img
                    src="/images/exploring-possibilities-ultra-hd.jpg"
                    alt="Exploring Possibilities - Mountain Summit Sunset"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-3 group-hover:text-[#E31E24] transition-colors">
                  Exploring Possibilities
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
                  Always curious about what's next
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECTION: LET'S BUILD SOMETHING MEANINGFUL TOGETHER (CTA)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            
            {/* Left Content */}
            <div className="text-left space-y-2 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                Let’s Build Something Meaningful Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Have a business challenge or an idea to discuss? I'd love to connect and explore how we can create value together.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full md:w-auto justify-start md:justify-end">
              {/* Red Let's Talk Button */}
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E31E24] text-white font-bold text-sm sm:text-base shadow-sm hover:bg-[#C8171D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* White Chat on WhatsApp Button */}
              <a
                href={PROFILE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs group"
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

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
