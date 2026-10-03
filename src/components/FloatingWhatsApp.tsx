import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      {/* Tooltip on Desktop */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 animate-bounce duration-1000">
          <span>Chat directly on WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={PROFILE_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group"
        aria-label="Chat with Sanjay Kumar on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
