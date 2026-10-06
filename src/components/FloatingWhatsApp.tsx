import React from "react";
import { PROFILE_DATA } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group select-none" aria-label="WhatsApp Support">
      
      {/* Floating Tooltip Label (Desktop Hover) */}
      <div className="hidden sm:flex items-center space-x-2 mr-3 px-3.5 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-full shadow-lg border border-slate-200/80 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={PROFILE_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat with Sanjay Kumar on WhatsApp"
      >
        {/* Subtle Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none -z-10" />

        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 64 64"
          className="w-6 h-6 sm:w-8 sm:h-8 fill-white drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M48.5 15.5C44.1 11.1 38.3 8.7 32.1 8.7 19.3 8.7 8.9 19.1 8.9 31.9c0 4.1 1.1 8.1 3.1 11.6l-3.3 12.1 12.4-3.2c3.4 1.8 7.2 2.8 11 2.8h0c12.8 0 23.2-10.4 23.2-23.2 0-6.2-2.4-12-6.8-16.5zm-16.4 37.3h0c-3.5 0-6.9-.9-9.9-2.7l-.7-.4-7.4 1.9 2-7.2-.5-.7c-2-3.1-3-6.7-3-10.4 0-10.7 8.7-19.4 19.5-19.4 5.2 0 10.1 2 13.8 5.7 3.7 3.7 5.7 8.6 5.7 13.8 0 10.6-8.7 19.4-19.5 19.4zm10.7-14.6c-.6-.3-3.5-1.7-4-1.9-.6-.2-.9-.3-1.3.3-.4.6-1.5 1.9-1.9 2.3-.3.4-.7.4-1.3.1-.6-.3-2.4-.9-4.6-2.9-1.7-1.5-2.9-3.4-3.2-4-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1 .3-.3.4-.6.6-1 .2-.4.1-.7-.1-1-.1-.3-1.3-3.1-1.8-4.3-.5-1.1-.9-1-1.3-1-.4 0-.8 0-1.2 0s-1 .1-1.5.7c-.5.6-2 2-2 4.8s2.1 5.6 2.4 6c.3.4 4.1 6.2 9.9 8.7 1.4.6 2.5 1 3.3 1.2 1.4.4 2.7.4 3.7.2 1.1-.2 3.5-1.4 4-2.8.5-1.4.5-2.5.3-2.8-.1-.3-.5-.4-1.1-.7z" />
        </svg>

        {/* Small Online Green Indicator Badge */}
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
