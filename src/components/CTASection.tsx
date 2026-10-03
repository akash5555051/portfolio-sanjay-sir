import React from "react";
import { PROFILE_DATA } from "@/data/portfolioData";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <div className="rounded-2xl bg-[#091D3E] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-lg border border-slate-800 min-h-[290px]">
      
      {/* Top Red Accent Stripe */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-[#E31E24] rounded-b-md" />

      {/* Background Graphic Illustration Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none opacity-30 sm:opacity-40">
        <img
          src="/images/cta-mountain-growth.jpg"
          alt="Business Growth Mountain Ascent"
          className="w-full h-full object-cover object-left mix-blend-screen"
        />
      </div>

      {/* Headings */}
      <div className="space-y-2 relative z-10 pt-2 text-left">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
          Have a Business Challenge?
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm font-normal">
          Let's find the right solution together.
        </p>
      </div>

      {/* CTA Buttons Row */}
      <div className="pt-6 relative z-10 flex flex-wrap items-center gap-3">
        {/* Book a Consultation Button */}
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#E31E24] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#C8171D] transition-colors cursor-pointer group"
        >
          <span>Book a Consultation</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* WhatsApp Button */}
        <a
          href={PROFILE_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm border border-white/10 transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-[#22C55E] flex items-center justify-center text-white shrink-0">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-slate-300 uppercase font-semibold leading-none">WhatsApp Me</span>
            <span className="text-xs font-bold text-white tracking-wide">{PROFILE_DATA.whatsappNumber}</span>
          </div>
        </a>
      </div>

    </div>
  );
};
