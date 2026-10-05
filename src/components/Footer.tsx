import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Linkedin, MessageCircle, Mail, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-6 sm:pt-7 pb-8 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row: 4 Columns with Vertical Dividers */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-6 pb-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-2 text-left lg:w-1/4 shrink-0">
            <Link to="/" className="inline-block group">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight group-hover:text-[#E31E24] transition-colors">
                {PROFILE_DATA.name}
              </h3>
            </Link>
            
            {/* 4-Color Accent Line with subtle gray baseline */}
            <div className="relative flex items-center h-1 w-44 sm:w-48 rounded-full overflow-hidden bg-slate-200">
              <span className="h-full w-1/4 bg-[#E31E24]" />
              <span className="h-full w-1/4 bg-[#22C55E]" />
              <span className="h-full w-1/4 bg-[#1677FF]" />
              <span className="h-full w-1/4 bg-[#F59E0B]" />
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
              {PROFILE_DATA.subTitle}
              <br />
              Founder – <span className="font-bold text-slate-700">{PROFILE_DATA.founderBrand}</span>
            </p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden lg:block w-px h-16 bg-slate-200 self-center shrink-0" />

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5 text-left lg:w-auto shrink-0">
            <span className="text-xs sm:text-[13px] font-bold text-[#0A2540] tracking-wide block">
              Quick Links
            </span>
            <div className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-600">
              <Link to="/" className="hover:text-[#E31E24] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#E31E24] transition-colors">About</Link>
              <Link to="/expertise" className="hover:text-[#E31E24] transition-colors">Expertise</Link>
              <Link to="/experience" className="hover:text-[#E31E24] transition-colors">Experience</Link>
              <Link to="/case-studies" className="hover:text-[#E31E24] transition-colors">Case Studies</Link>
              <Link to="/insights" className="hover:text-[#E31E24] transition-colors">Insights</Link>
              <Link to="/contact" className="hover:text-[#E31E24] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden lg:block w-px h-16 bg-slate-200 self-center shrink-0" />

          {/* Column 3: Connect With Me */}
          <div className="space-y-2.5 text-left lg:w-auto shrink-0">
            <span className="text-xs sm:text-[13px] font-bold text-[#0A2540] tracking-wide block">
              Connect With Me
            </span>
            <div className="flex items-center space-x-2.5 pt-0.5">
              {/* LinkedIn */}
              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-white" />
              </a>

              {/* WhatsApp */}
              <a
                href={PROFILE_DATA.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>

              {/* Email */}
              <a
                href={PROFILE_DATA.socials.email}
                className="w-8 h-8 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href={PROFILE_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Vertical Divider 3 */}
          <div className="hidden lg:block w-px h-16 bg-slate-200 self-center shrink-0" />

          {/* Column 4: Handwritten Script Slogan */}
          <div className="text-left select-none lg:w-auto shrink-0 pt-2 lg:pt-0">
            <div className="font-handwriting text-2xl sm:text-[28px] text-[#0A2540] font-bold leading-[1.1] -rotate-3">
              Let's Build<br />
              Growth Together
            </div>
            <svg className="w-24 h-3.5 text-[#E31E24] mt-1 -rotate-2" viewBox="0 0 100 15" fill="none">
              <path d="M2 10 C 35 2, 70 2, 98 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
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

export default Footer;
