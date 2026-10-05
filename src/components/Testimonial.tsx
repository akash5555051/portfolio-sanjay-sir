import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TESTIMONIALS } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
    <div className="bg-[#FAFBFD] border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative min-h-[300px] shadow-xs hover:shadow-md transition-shadow duration-300 text-left">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Avatar and Quote Icon */}
          <div className="flex items-start space-x-3.5">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0 select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "./images/testimonial-dr-amit-clean.jpg";
              }}
            />
            <div className="text-3xl sm:text-4xl text-slate-300 font-serif leading-none select-none pt-1">
              “
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            {current.quote}
          </p>

          {/* Author Name & Role */}
          <div className="pt-1">
            <h4 className="text-sm sm:text-base font-bold text-[#0A2540]">
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
          className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 hover:shadow-xs transition-all cursor-pointer active:scale-95"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center space-x-2">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-6 h-1.5 bg-[#E31E24]"
                  : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button & Case Studies Link */}
        <div className="flex items-center space-x-3">
          <Link
            to="/case-studies"
            className="text-xs font-bold text-[#1677FF] hover:text-[#0A2540] inline-flex items-center gap-1 transition-colors"
          >
            <span>Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 hover:shadow-xs transition-all cursor-pointer active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
