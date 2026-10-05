import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Trophy, Users, Target, TrendingUp, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const STAT_ITEMS = [
  {
    icon: Trophy,
    title: "20+ Years",
    subtitle: "Business & Technology\nExperience",
    tag: "Proven Track Record",
    link: "/experience",
  },
  {
    icon: Users,
    title: "Multiple Industries",
    subtitle: "Healthcare | Manufacturing\nServices | Professional Businesses",
    tag: "Cross-Industry Impact",
    link: "/experience",
  },
  {
    icon: Target,
    title: "BizTechX",
    subtitle: "Founder & Consultant\nBusiness Growth Solutions",
    tag: "Consulting Leadership",
    link: "/about",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    subtitle: "Marketing | CRM | Automation\nAI | Digital Transformation",
    tag: "Scale & Automate",
    link: "/expertise",
  },
];

export const StatsBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll to card
  const scrollToStat = useCallback((index: number) => {
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
    const next = (activeIndex + 1) % STAT_ITEMS.length;
    scrollToStat(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + STAT_ITEMS.length) % STAT_ITEMS.length;
    scrollToStat(prev);
  };

  // Track active index on manual scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 14 : 280;
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(STAT_ITEMS.length - 1, calculatedIndex));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  };

  // Auto-slide right-to-left every 3.5s (pauses on interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % STAT_ITEMS.length;
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
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-white py-6 sm:py-8 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            A. MOBILE VIEW (< md): Auto-Sliding Right-to-Left Carousel
            ======================================================== */}
        <div className="md:hidden">
          {/* Top Row: Mini Label + Prev/Next Controls */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
              Core Highlights
            </span>

            {/* Mobile Prev / Next Arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous stat"
                className="w-7 h-7 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next stat"
                className="w-7 h-7 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sliding Cards Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 pb-2 pt-1 px-4 -mx-4 sm:px-6 sm:-mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {STAT_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className={`w-[82vw] max-w-[310px] shrink-0 snap-center rounded-2xl p-4.5 bg-gradient-to-br from-white to-slate-50/90 border transition-all duration-300 flex items-start space-x-3.5 text-left cursor-pointer select-none ${
                    activeIndex === idx
                      ? "border-blue-200 shadow-md ring-2 ring-blue-500/10"
                      : "border-slate-200/80 shadow-2xs opacity-85"
                  }`}
                >
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 shadow-2xs mt-0.5">
                    <Icon className="w-5 h-5 stroke-[1.85]" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold text-[#0A2540] leading-tight">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">
                        {idx + 1}/4
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium whitespace-pre-line leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Dots & Status */}
          <div className="flex items-center justify-between pt-3 px-1 text-left">
            <span className="text-xs font-bold text-slate-500">
              Metric <span className="text-[#0A2540] font-extrabold">{activeIndex + 1}</span> of {STAT_ITEMS.length}
            </span>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-1.5">
              {STAT_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStat(idx)}
                  aria-label={`Go to stat ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-6 bg-[#1677FF]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Auto-Slide Indicator */}
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
              Auto-sliding
            </span>
          </div>
        </div>

        {/* ========================================================
            B. DESKTOP VIEW (>= md): Divided Horizontal Grid
            ======================================================== */}
        <div className="hidden md:grid md:grid-cols-4 divide-x divide-slate-100/90">
          {STAT_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Link
                  to={item.link}
                  className={`flex items-start space-x-3.5 py-2 group cursor-pointer ${
                    idx === 0
                      ? "pr-5 lg:pr-6"
                      : idx === STAT_ITEMS.length - 1
                      ? "pl-5 lg:pl-6"
                      : "px-5 lg:px-6"
                  }`}
                >
                  {/* Clean Blue Icon */}
                  <div className="text-[#1677FF] shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                  </div>

                  {/* Text Content */}
                  <div className="text-left space-y-0.5">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] leading-tight group-hover:text-[#E31E24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium whitespace-pre-line leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const StatsSection = StatsBar;
export default StatsBar;
