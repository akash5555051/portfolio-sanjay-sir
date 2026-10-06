import React from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ArrowRight,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  GraduationCap,
  Laptop,
  BarChart3,
  Rocket,
  Heart,
  Factory,
  Store,
  Trophy,
  Lightbulb,
  Star,
  Megaphone,
  Settings,
  FileText,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceProps {
  onOpenConsultation: () => void;
}

// 1. Metric / Highlights Items
const METRIC_HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: "20+ Years",
    subtitle: "Business & Technology Experience",
  },
  {
    icon: Users,
    title: "Multiple Industries",
    subtitle: "Healthcare | Manufacturing\nServices | Professional Businesses",
  },
  {
    icon: Target,
    title: "100+",
    subtitle: "Projects & Consulting Engagements",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    subtitle: "Strategy | Technology\nMarketing | Automation",
  },
];

// 2. Timeline Steps
const TIMELINE_STEPS = [
  {
    badgeIcon: GraduationCap,
    badgeBg: "bg-red-50 text-red-600 border-red-200",
    periodBadge: "Early Career",
    years: "2000 – 2004",
    title: "Foundation & Learning",
    subtitle: "Education & Early Professional Experience",
    description:
      "Built a strong foundation in technology, business operations and problem-solving. Developed curiosity to understand how businesses work and how technology can make a difference.",
  },
  {
    badgeIcon: Briefcase,
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    periodBadge: "2004 – 2010",
    years: "2004 – 2010",
    title: "Business Operations & Technology",
    subtitle: "Corporate Experience",
    description:
      "Worked in various roles, gaining hands-on experience in business operations, customer management and technology implementation across different industries.",
  },
  {
    badgeIcon: Laptop,
    badgeBg: "bg-blue-50 text-blue-600 border-blue-200",
    periodBadge: "2010 – 2016",
    years: "2010 – 2016",
    title: "Digital Transformation & Solutions",
    subtitle: "IT & Digital Solutions",
    description:
      "Focused on website development, cloud solutions, CRM and digital systems. Helped businesses adopt technology to improve efficiency and customer engagement.",
  },
  {
    badgeIcon: BarChart3,
    badgeBg: "bg-amber-50 text-amber-600 border-amber-200",
    periodBadge: "2016 – 2020",
    years: "2016 – 2020",
    title: "Marketing & Business Growth",
    subtitle: "Digital Marketing & Lead Generation",
    description:
      "Worked with businesses to build practical marketing systems, lead generation campaigns and customer acquisition strategies.",
  },
  {
    badgeIcon: Rocket,
    badgeBg: "bg-red-50 text-red-600 border-red-200",
    periodBadge: "2020 – Present",
    years: "2020 – Present",
    title: "BizTechX – Building Growth Systems",
    subtitle: "Founder & Consultant",
    description:
      "Founded BizTechX to bring together strategy, technology, marketing and automation into integrated growth systems for businesses.",
  },
];

// 3. Key Skills with Percentages
const KEY_SKILLS = [
  {
    name: "Business Strategy",
    percentage: 90,
    icon: Target,
    color: "#E31E24",
    bgClass: "bg-[#E31E24]",
  },
  {
    name: "Digital Transformation",
    percentage: 85,
    icon: Laptop,
    color: "#22C55E",
    bgClass: "bg-[#22C55E]",
  },
  {
    name: "Marketing & Lead Generation",
    percentage: 85,
    icon: Megaphone,
    color: "#1677FF",
    bgClass: "bg-[#1677FF]",
  },
  {
    name: "AI & Automation",
    percentage: 80,
    icon: Settings,
    color: "#F59E0B",
    bgClass: "bg-[#F59E0B]",
  },
  {
    name: "CRM & Customer Management",
    percentage: 85,
    icon: Users,
    color: "#E31E24",
    bgClass: "bg-[#E31E24]",
  },
  {
    name: "Project Management",
    percentage: 80,
    icon: FileText,
    color: "#22C55E",
    bgClass: "bg-[#22C55E]",
  },
  {
    name: "Client Communication",
    percentage: 90,
    icon: MessageSquare,
    color: "#1677FF",
    bgClass: "bg-[#1677FF]",
  },
];

// 4. Industries
const INDUSTRIES_LIST = [
  { name: "Healthcare", icon: Heart, color: "text-[#E31E24]" },
  { name: "Manufacturing", icon: Factory, color: "text-[#E31E24]" },
  { name: "Professional Services", icon: Users, color: "text-[#0A2540]" },
  { name: "SMEs & Retail", icon: Store, color: "text-[#9333EA]" },
  { name: "Education", icon: GraduationCap, color: "text-[#334155]" },
  { name: "Technology & Startups", icon: Rocket, color: "text-[#6366F1]" },
];

// 5. Key Achievements
const ACHIEVEMENTS = [
  {
    icon: Trophy,
    iconColor: "text-[#E31E24]",
    text: "Successfully completed 100+ projects across industries.",
  },
  {
    icon: Users,
    iconColor: "text-[#1677FF]",
    text: "Built long-term relationships with business owners and teams.",
  },
  {
    icon: Lightbulb,
    iconColor: "text-[#F59E0B]",
    text: "Helped businesses adopt digital systems for sustainable growth.",
  },
  {
    icon: Star,
    iconColor: "text-[#EAB308]",
    text: "Continual learner, exploring new technologies like AI and automation.",
  },
];

export const Experience: React.FC<ExperienceProps> = ({ onOpenConsultation }) => {
  const handleDownloadResume = () => {
    // Generate an executive profile view or prompt print
    window.print();
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 bg-white min-h-screen text-slate-800">

      {/* ========================================================
          1. HERO SECTION: 1:1 Unified Master Banner (Zero Gap / Exactly as in Mockup)
          ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-2 sm:pt-4 pb-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="relative w-full rounded-2xl overflow-hidden select-none shadow-xs border border-slate-100/60 bg-white">
            {/* The Master Crisp 2K Banner Image */}
            <img
              src="./images/experience-hero-master-banner-clean.png"
              alt="Experience that Drives Real Impact - Sanjay Kumar"
              className="w-full h-auto block select-none"
              loading="eager"
            />

            {/* Interactive Clickable Hotspot Button: Download Resume */}
            <button
              onClick={handleDownloadResume}
              title="Download Resume"
              aria-label="Download Resume"
              style={{
                left: "5.02%",
                top: "68.61%",
                width: "15.45%",
                height: "11.65%",
              }}
              className="absolute cursor-pointer rounded-lg hover:ring-2 hover:ring-red-500 hover:ring-offset-1 hover:bg-white/10 transition-all active:scale-95"
            />

            {/* Interactive Clickable Hotspot Button: Let's Connect */}
            <button
              onClick={onOpenConsultation}
              title="Let's Connect"
              aria-label="Let's Connect"
              style={{
                left: "22.15%",
                top: "68.28%",
                width: "12.99%",
                height: "12.30%",
              }}
              className="absolute cursor-pointer rounded-lg hover:ring-2 hover:ring-blue-500 hover:ring-offset-1 hover:bg-slate-900/5 transition-all active:scale-95"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HIGHLIGHTS & STATS BAR: Clean 4 Columns with Dividers
          ======================================================== */}
      <section className="bg-white border-y border-slate-200/80 py-5 sm:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 divide-y-0 sm:divide-x divide-slate-100">
            {METRIC_HIGHLIGHTS.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start space-x-2.5 sm:space-x-3.5 text-left py-2 sm:py-1 ${
                    idx === 0
                      ? "sm:pr-6"
                      : idx === METRIC_HIGHLIGHTS.length - 1
                      ? "sm:pl-6"
                      : "sm:px-6"
                  }`}
                >
                  {/* Clean Dark Navy Outline Icon */}
                  <div className="text-[#0A2540] shrink-0 mt-0.5">
                    <IconComp className="w-7 h-7 sm:w-9 sm:h-9 stroke-[1.65]" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-[19px] font-extrabold text-[#0A2540] leading-snug">
                      {metric.title}
                    </h3>
                    <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium whitespace-pre-line leading-snug">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN TWO-COLUMN BODY: Timeline (Left) & Skills / Industries (Right)
          ======================================================== */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* ----------------------------------------------------
                LEFT COLUMN: Timeline (MY PROFESSIONAL JOURNEY)
                ---------------------------------------------------- */}
            <div className="lg:col-span-7 xl:col-span-8 text-left space-y-8">
              
              {/* Section Header */}
              <div className="space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-0.5 bg-[#E31E24]" />
                  <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                    MY PROFESSIONAL JOURNEY
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0A2540] tracking-tight leading-tight">
                  A Journey of Learning, Building and Creating Impact
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Over the years, I have had the opportunity to work across different roles, industries and technologies, which has given me a unique perspective on business growth and technology implementation.
                </p>
              </div>

              {/* Timeline Container */}
              <div className="relative pl-2 sm:pl-4 space-y-8">
                {/* Vertical connecting line */}
                <div className="absolute left-[26px] sm:left-[34px] top-6 bottom-6 w-0.5 bg-slate-200 -z-0" />

                {TIMELINE_STEPS.map((step, idx) => {
                  const IconComp = step.badgeIcon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className="relative flex items-start space-x-4 sm:space-x-5 group"
                    >
                      {/* Icon Circle */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10 bg-white ${step.badgeBg} shadow-xs group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 pt-0.5">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                          <span className="text-xs sm:text-sm font-bold text-slate-700">
                            {step.years}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#0A2540] leading-snug">
                          {step.title}
                        </h3>

                        <h4 className="text-xs sm:text-sm font-semibold text-slate-500 mb-1.5">
                          {step.subtitle}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN: Skills & Industries Cards
                ---------------------------------------------------- */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8 text-left">
              
              {/* Card 1: Key Skills & Competencies */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2540]">
                    Key Skills & Competencies
                  </h3>
                </div>

                <div className="space-y-4">
                  {KEY_SKILLS.map((skill, idx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center space-x-2 font-medium text-slate-700">
                            <SkillIcon
                              className="w-4 h-4"
                              style={{ color: skill.color }}
                            />
                            <span>{skill.name}</span>
                          </div>
                          <span className="font-bold text-slate-500">
                            {skill.percentage}%
                          </span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                            className={`h-full rounded-full ${skill.bgClass}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card 2: Experience Across Industries */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-[#E31E24]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2540]">
                    Experience Across Industries
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-3.5 sm:gap-4">
                  {INDUSTRIES_LIST.map((ind, idx) => {
                    const IndIcon = ind.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all text-center group"
                      >
                        <IndIcon
                          className={`w-6 h-6 mb-2 ${ind.color} group-hover:scale-110 transition-transform`}
                        />
                        <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                          {ind.name}
                        </span>
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
          4. WHAT I'M PROUD OF: Key Achievements (4 Columns)
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#FAFBFD] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-0.5 bg-[#E31E24]" />
              <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                KEY ACHIEVEMENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
              What I’m Proud Of
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ACHIEVEMENTS.map((ach, idx) => {
              const AchIcon = ach.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm transition-shadow"
                >
                  <AchIcon className={`w-7 h-7 shrink-0 ${ach.iconColor} stroke-[1.8]`} />
                  <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                    {ach.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. CTA BANNER: Let's Create the Next Success Story
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-white">
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
                  Let’s Create the Next Success Story
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                  Every business has a unique journey. Let’s discuss how my experience can help you achieve your goals.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow-md hover:bg-[#C8171D] transition-colors cursor-pointer group"
                  >
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Angled Handwriting "Bigger Businesses Brighter Tomorrow" */}
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

export default Experience;
