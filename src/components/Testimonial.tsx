import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative min-h-[290px] shadow-2xs">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.35 }}
          className="space-y-4"
        >
          {/* Avatar and Quote Icon */}
          <div className="flex items-start space-x-3.5">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
              onError={(e) => {
                // fallback to a clean SVG placeholder if needed
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="text-3xl text-slate-300 font-serif leading-none select-none">
              “
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed text-left">
            {current.quote}
          </p>

          {/* Author Name & Role */}
          <div className="text-left pt-1">
            <h4 className="text-sm font-bold text-[#0A2540]">
              {current.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {current.role}, {current.company}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Bottom Controls */}
      <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between mt-3">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center space-x-1.5">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-5 bg-[#E31E24]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
