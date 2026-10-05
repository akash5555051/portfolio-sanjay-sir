import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { SERVICES, ServiceItem } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth scroll to a specific service card on mobile
  const scrollToService = useCallback((index: number) => {
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
    const next = (activeIndex + 1) % SERVICES.length;
    scrollToService(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + SERVICES.length) % SERVICES.length;
    scrollToService(prev);
  };

  // Track active card on manual touch/scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;
    const calculatedIndex = Math.round(scrollLeft / cardWidth);
    const clampedIndex = Math.max(0, Math.min(SERVICES.length - 1, calculatedIndex));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  };

  // Auto-slide right-to-left every 3.8s ("khud ba khud sliding")
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % SERVICES.length;
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
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="services" className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0 text-left">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
              WHAT I DO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Practical Solutions for Real Business Impact
            </h2>
          </motion.div>

          {/* Action Link & Mobile Nav Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
            <Link
              to="/expertise"
              className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>

            {/* Mobile Prev / Next Arrows */}
            <div className="flex lg:hidden items-center space-x-1.5 ml-2">
              <button
                onClick={handlePrev}
                aria-label="Previous service"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next service"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            A. MOBILE VIEW (< lg): Auto-Sliding Right-to-Left Carousel
            ======================================================== */}
        <div className="lg:hidden">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-2 pt-1 px-4 -mx-4 sm:px-6 sm:-mx-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center sm:snap-start flex flex-col"
              >
                <ServiceCard
                  service={service}
                  index={index}
                  onSelect={onSelectService}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Mobile Bottom Controls & Status Indicator */}
          <div className="flex items-center justify-between pt-4 px-1 text-left">
            {/* Service Counter */}
            <span className="text-xs font-bold text-slate-500">
              Service <span className="text-[#0A2540] font-extrabold">{activeIndex + 1}</span> of {SERVICES.length}
            </span>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-1.5">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToService(idx)}
                  aria-label={`Go to service ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-6 bg-[#E31E24]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Auto-Slide Indicator / Hint */}
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
              Auto-sliding
            </span>
          </div>
        </div>

        {/* ========================================================
            B. DESKTOP VIEW (>= lg): 4-Column Clean Grid
            ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export const ServicesSection = Services;
export default Services;
