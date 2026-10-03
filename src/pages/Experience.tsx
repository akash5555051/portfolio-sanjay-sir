import React from "react";
import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "@/data/process";
import { ArrowRight, Trophy, Briefcase, Building, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceProps {
  onOpenConsultation: () => void;
}

const careerMilestones = [
  {
    period: "2020 – Present",
    role: "Founder & Lead Growth Consultant",
    org: "BizTechX Growth Solutions",
    description: "Architecting end-to-end digital transformation, automated CRM funnels, and business growth engines for mid-market SMEs, clinics, and professional services across India and overseas."
  },
  {
    period: "2014 – 2020",
    role: "Head of Technology & Digital Operations",
    org: "Enterprise Tech & Advisory Firms",
    description: "Led multi-million dollar cloud modernization, ERP integrations, cross-functional sales engineering, and digital workflow initiatives for enterprise clients."
  },
  {
    period: "2008 – 2014",
    role: "Senior Business Solutions Consultant",
    org: "Global IT Services",
    description: "Designed bespoke software architectures, managed client delivery pipelines, and drove tech adoption across diverse sectors including logistics, healthcare, and retail."
  },
  {
    period: "2004 – 2008",
    role: "Systems Engineer & Process Analyst",
    org: "Technology Innovations",
    description: "Specialized in process automation, database optimization, client requirements mapping, and operational workflow modeling."
  }
];

export const Experience: React.FC<ExperienceProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      
      {/* Hero Header */}
      <section className="bg-[#FAFBFD] py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase">
              PROVEN TRACK RECORD
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              20+ Years of Business &{" "}
              <span className="text-[#E31E24]">Technology Leadership</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From architecting complex technology systems to designing high-impact business growth strategies, explore the timeline of results, transformation, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#E31E24] uppercase">
              CAREER TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
              Decades of Practical Experience
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-10">
            {careerMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Circle Marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#E31E24] group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-[#E31E24] px-2.5 py-0.5 rounded-full bg-red-50 border border-red-100">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.org}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2540] pt-1">
                    {item.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* The 5-Step Methodology */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#E31E24] uppercase">
              EXECUTION BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
              The 5-Stage Consulting Methodology
            </h2>
            <p className="text-sm text-slate-600">
              A systematic process refined over 20+ years to guarantee reliable implementation and predictable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className={`w-8 h-8 rounded-full ${step.badgeBg} text-white flex items-center justify-center text-xs font-bold`}>
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#0A2540]">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow hover:bg-[#C8171D] transition-colors cursor-pointer group"
            >
              <span>Work With Sanjay Kumar</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Experience;
