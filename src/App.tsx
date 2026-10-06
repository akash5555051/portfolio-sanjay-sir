import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Pages
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Expertise } from "@/pages/Expertise";
import { Experience } from "@/pages/Experience";
import { CaseStudies } from "@/pages/CaseStudies";
import { Insights } from "@/pages/Insights";
import { Gallery } from "@/pages/Gallery";
import { Contact } from "@/pages/Contact";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfUse } from "@/pages/TermsOfUse";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#E31E24] selection:text-white antialiased">
        {/* Fixed Header */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/expertise" element={<Expertise onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/experience" element={<Experience onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/case-studies" element={<CaseStudies onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/insights" element={<Insights onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/gallery" element={<Gallery onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="*" element={<Home onOpenConsultation={handleOpenConsultation} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}

export default App;
