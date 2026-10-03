import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Linkedin, MessageCircle, Mail, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-12 pb-8 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80 items-start">
          
          {/* Brand Info (Left - 4 Cols) */}
          <div className="md:col-span-4 space-y-2.5 text-left">
            <Link to="/" className="inline-block group">
              <h3 className="text-xl font-extrabold text-[#0A2540] tracking-tight group-hover:text-brand-red transition-colors">
                {PROFILE_DATA.name}
              </h3>
            </Link>
            
            {/* 4-Color Horizontal Accent Line */}
            <div className="flex items-center h-1 w-32 rounded-full overflow-hidden">
              <span className="h-full w-1/4 bg-[#E31E24]" />
              <span className="h-full w-1/4 bg-[#22C55E]" />
              <span className="h-full w-1/4 bg-[#1677FF]" />
              <span className="h-full w-1/4 bg-[#F59E0B]" />
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed pt-1">
              {PROFILE_DATA.subTitle}
              <br />
              Founder – <span className="font-bold text-slate-800">{PROFILE_DATA.founderBrand}</span>
            </p>
          </div>

          {/* Quick Links (Center - 4 Cols) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider block">
              Quick Links
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-600">
              <Link to="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#E31E24] transition-colors">About</Link>
              <Link to="/expertise" className="hover:text-[#E31E24] transition-colors">Expertise</Link>
              <Link to="/experience" className="hover:text-[#E31E24] transition-colors">Experience</Link>
              <Link to="/case-studies" className="hover:text-[#E31E24] transition-colors">Case Studies</Link>
              <Link to="/insights" className="hover:text-[#E31E24] transition-colors">Insights</Link>
              <Link to="/contact" className="hover:text-[#E31E24] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect With Me & Script Slogan (Right - 4 Cols) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            
            {/* Social Icons */}
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider block">
                Connect With Me
              </span>
              <div className="flex items-center space-x-2 pt-1">
                {/* LinkedIn */}
                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={PROFILE_DATA.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                </a>

                {/* Email */}
                <a
                  href={PROFILE_DATA.socials.email}
                  className="w-8 h-8 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                  aria-label="Email Sanjay Kumar"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href={PROFILE_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Handwritten Slogan: "Let's Build Growth Together" */}
            <div className="pt-2 lg:pt-0 shrink-0">
              <img
                src="/images/footer-slogan-clean.png"
                alt="Let's Build Growth Together - Sanjay Kumar"
                className="h-12 w-auto object-contain select-none"
              />
            </div>

          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
          <p>© 2026 {PROFILE_DATA.name}. All rights reserved.</p>
          <div className="flex items-center space-x-3 font-medium">
            <Link to="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms-of-use" className="hover:text-slate-800 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
