import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

export const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <section className="bg-[#FAFBFD] py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-bold text-[#E31E24] mb-4 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-2">
            <FileText className="w-6 h-6 text-[#E31E24]" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
              Terms of Use
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Last Updated: January 2026 • Sanjay Kumar / BizTechX
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
          <p>
            Welcome to the official portfolio and advisory website of Sanjay Kumar (BizTechX). By browsing this website, requesting a strategy session, or using our materials, you acknowledge and agree to the following terms.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            1. Nature of Advisory Content
          </h3>
          <p>
            The frameworks, articles, case studies, and insights shared on this site are intended for general business information and strategic guidance. While based on proven methodologies and 20+ years of practice, specific business outcomes depend on industry conditions, execution discipline, and market dynamics.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            2. Intellectual Property
          </h3>
          <p>
            All custom graphics, written articles, service frameworks, and branding elements featured on this website are the property of Sanjay Kumar and BizTechX. Re-publication or commercial redistribution without written consent is prohibited.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            3. Client Engagements
          </h3>
          <p>
            All formal consulting engagements are governed by separate, signed master services agreements (MSAs) defining specific deliverables, milestone timelines, confidentiality guidelines, and commercial terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
