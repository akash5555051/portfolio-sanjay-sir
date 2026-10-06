import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, PROFILE_DATA } from "@/data/portfolioData";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-200/80"
          : "bg-white py-3.5 sm:py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Subtitle with 4-Color Accent Line */}
        <Link to="/" className="flex flex-col group text-left min-w-0 pr-2">
          <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#0A2540] group-hover:text-[#E31E24] transition-colors truncate">
            {PROFILE_DATA.name}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-500 font-semibold tracking-wide truncate max-w-[190px] sm:max-w-none">
            {PROFILE_DATA.subTitle}
          </span>
          
          {/* 4-Color Horizontal Accent Line */}
          <div className="flex items-center h-1 w-28 sm:w-44 mt-1 rounded-full overflow-hidden shrink-0">
            <span className="h-full w-1/4 bg-[#E31E24]" />
            <span className="h-full w-1/4 bg-[#22C55E]" />
            <span className="h-full w-1/4 bg-[#1677FF]" />
            <span className="h-full w-1/4 bg-[#F59E0B]" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative px-3 py-1.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#0A2540] font-bold"
                    : "text-slate-600 hover:text-[#0A2540]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E31E24] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#E31E24] text-white text-sm font-bold shadow-sm hover:bg-[#C8171D] transition-colors group cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Action Buttons (Phone + Hamburger) */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 lg:hidden shrink-0">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#E31E24] text-white shadow-sm hover:bg-[#C8171D] transition-colors cursor-pointer"
            aria-label="Let's Talk"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#E31E24] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center px-5 py-3 rounded-full bg-[#E31E24] text-white font-bold text-base shadow hover:bg-[#C8171D] transition-colors"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
