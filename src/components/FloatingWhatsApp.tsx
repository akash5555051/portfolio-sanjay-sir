import React from "react";
import { MessageCircle } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40" aria-label="WhatsApp Support">
      <a
        href={PROFILE_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all group cursor-pointer"
        aria-label="Chat with Sanjay Kumar on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
