import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { ArrowRight, CheckCircle2, TrendingUp, Building2, Quote, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Healthcare", "SMEs & Manufacturing", "Professional Services", "Technology & Digital"];

  const filteredStudies = selectedFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category.toLowerCase().includes(selectedFilter.toLowerCase()) || selectedFilter.toLowerCase().includes(cs.category.toLowerCase()));

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      
      {/* Header Hero Banner */}
      <section className="bg-[#FAFBFD] py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase">
              CLIENT SUCCESS STORIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Real Business Transformation{" "}
              <span className="text-[#E31E24]">Across Sectors</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore how clinics, manufacturers, advisory firms, and SaaS companies used our technology, marketing, and automation systems to scale revenue and eliminate operational friction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Studies List */}
          <div className="space-y-12">
            {filteredStudies.map((study, idx) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-xs space-y-8"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md bg-red-100 text-[#E31E24] text-xs font-extrabold mb-2">
                      {study.category}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-[#0A2540]">
                      {study.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                      Client: {study.client} • Sector: {study.industry}
                    </p>
                  </div>
                </div>

                {/* Metrics Highlight Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {study.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <span className="text-2xl sm:text-3xl font-black text-[#E31E24] block">
                        {metric.value}
                      </span>
                      <span className="text-xs text-slate-600 font-medium leading-tight block mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80">
                    <h3 className="text-xs font-extrabold text-[#0A2540] uppercase tracking-wider">
                      The Operational Challenge
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div className="space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80">
                    <h3 className="text-xs font-extrabold text-[#0A2540] uppercase tracking-wider">
                      Solution & Architecture
                    </h3>
                    <ul className="space-y-2">
                      {study.strategy.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Client Quote & Tools */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2 border-t border-slate-200/70">
                  <div className="flex items-start space-x-3 max-w-xl">
                    <Quote className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs sm:text-sm italic text-slate-700">
                        "{study.testimonial.quote}"
                      </p>
                      <p className="text-xs font-bold text-[#0A2540] mt-1">
                        — {study.testimonial.author}, <span className="text-slate-500 font-normal">{study.testimonial.role}</span>
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center space-x-3">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0A2540] text-white text-xs font-bold hover:bg-[#071A2E] transition-colors cursor-pointer group"
                    >
                      <span>Apply Similar System</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default CaseStudies;
