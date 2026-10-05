import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "@/data/process";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Process: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll to a specific card
  const scrollToStep = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft - container.offsetLeft - 16,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  const handleNext = () => {
    const next = (activeIndex + 1) % PROCESS_STEPS.length;
    scrollToStep(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length;
    scrollToStep(prev);
  };

  // Track active card on manual touch/scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(PROCESS_STEPS.length - 1, calculatedIndex));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  };

  // Auto-slide right-to-left every 4.5s (pauses on user interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % PROCESS_STEPS.length;
        if (scrollRef.current) {
          const container = scrollRef.current;
          const targetCard = container.children[next] as HTMLElement;
          if (targetCard) {
            container.scrollTo({
              left: targetCard.offsetLeft - container.offsetLeft - 16,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="process" className="py-14 sm:py-20 bg-[#FAFBFD] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 space-y-4 sm:space-y-0 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              MY APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              A Simple, Proven Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal">
              From understanding your business to building systems that deliver long-term growth.
            </p>
          </motion.div>

          {/* Action Link & Mobile Nav Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
            <Link
              to="/experience"
              className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
            >
              <span>How I Work</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            {/* Mobile Prev / Next Arrows */}
            <div className="flex md:hidden items-center space-x-1.5 ml-2">
              <button
                onClick={handlePrev}
                aria-label="Previous step"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next step"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            A. MOBILE VIEW (< md): Horizontal Right-to-Left Sliding Carousel
            ======================================================== */}
        <div className="md:hidden">
          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-2 pt-1 px-4 -mx-4 sm:px-6 sm:-mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                onClick={() => scrollToStep(idx)}
                className={`w-[82vw] max-w-[310px] shrink-0 snap-center rounded-2xl p-5 bg-white border transition-all duration-300 flex flex-col justify-between text-left select-none cursor-pointer ${
                  activeIndex === idx
                    ? "border-slate-300 shadow-md ring-2 ring-red-500/10"
                    : "border-slate-200/90 shadow-2xs opacity-85"
                }`}
              >
                <div>
                  {/* Card Header: Step Badge & Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-full ${item.badgeBg} text-white flex items-center justify-center text-sm font-extrabold shadow-xs`}
                    >
                      {item.step}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Step {item.step} of 05
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer: Next Step Guidance */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {idx < PROCESS_STEPS.length - 1
                      ? `Next: ${PROCESS_STEPS[idx + 1].title}`
                      : "Continuous Scale"}
                  </span>
                  <span className="text-[#1677FF] font-bold">
                    {idx < PROCESS_STEPS.length - 1 ? "Slide next →" : "Target Achieved ✓"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Controls: Step Counter & Pagination Dots */}
          <div className="flex items-center justify-between pt-4 px-1 text-left">
            {/* Step Counter */}
            <span className="text-xs font-bold text-slate-500">
              Stage <span className="text-[#0A2540] font-extrabold">{activeIndex + 1}</span> of {PROCESS_STEPS.length}
            </span>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-1.5">
              {PROCESS_STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  aria-label={`Go to step ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-6 bg-[#E31E24]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Swipe hint */}
            <span className="text-[11px] font-medium text-slate-400">
              👈 Swipe to slide
            </span>
          </div>
        </div>

        {/* ========================================================
            B. DESKTOP VIEW (>= md): Full 5-Step Side-by-Side Flow
            ======================================================== */}
        <div className="hidden md:block relative">
          <div className="grid md:grid-cols-5 gap-4 lg:gap-5 relative">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col text-left group transition-transform duration-200"
              >
                {/* Badge and Connecting Line Row */}
                <div className="flex items-center w-full mb-4">
                  {/* Circular Number Badge */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.badgeBg} text-white flex items-center justify-center text-xs sm:text-sm font-extrabold shrink-0 shadow-sm z-10 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {item.step}
                  </div>

                  {/* Connecting Line with Arrowhead (for items 01-04 on desktop) */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex items-center flex-1 ml-3 mr-2">
                      <div className="h-[2px] bg-slate-300/80 w-full rounded-full" />
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-slate-400 -ml-1" />
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1.5 group-hover:text-[#E31E24] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export const ProcessSection = Process;
export default Process;
