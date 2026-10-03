import React, { useState } from "react";
import { INSIGHTS, InsightArticle } from "@/data/insights";
import { ArrowRight, Clock, Calendar, CheckCircle2, BookOpen, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface InsightsProps {
  onOpenConsultation: () => void;
}

export const Insights: React.FC<InsightsProps> = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      
      {/* Header Hero Banner */}
      <section className="bg-[#FAFBFD] py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase">
              STRATEGY & GROWTH INSIGHTS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Executive Articles &{" "}
              <span className="text-[#E31E24]">Practical Frameworks</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Practical perspectives on business technology, marketing funnels, WhatsApp automations, and scalable operations written by Sanjay Kumar.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedArticle(article)}
                className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-md bg-red-100 text-[#E31E24] font-bold">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Read Action */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0A2540]">
                  <span className="group-hover:text-[#E31E24] transition-colors">Read Full Article</span>
                  <ArrowRight className="w-4 h-4 text-[#E31E24] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-xs overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 my-8 text-left space-y-6 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="space-y-3 border-b border-slate-200 pb-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-red-100 text-[#E31E24] text-xs font-bold">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center space-x-3 text-xs text-slate-500 font-medium">
                <span>By Sanjay Kumar</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] space-y-3">
              <h3 className="text-xs font-extrabold text-[#16A34A] uppercase tracking-wider">
                Key Strategic Takeaways
              </h3>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((point, kIdx) => (
                  <li key={kIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-xs sm:text-sm shadow hover:bg-[#C8171D] transition-colors cursor-pointer"
              >
                Discuss This Strategy For Your Business
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Insights;
