import React from "react";
import { Link } from "react-router-dom";
import { PROFILE_DATA } from "@/data/portfolioData";
import { ArrowLeft, Shield } from "lucide-react";

export const PrivacyPolicy: React.FC = () => {
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
            <Shield className="w-6 h-6 text-[#E31E24]" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540]">
              Privacy Policy
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
            Your privacy is of paramount importance to us. This Privacy Policy outlines how Sanjay Kumar and BizTechX collect, utilize, and protect personal and corporate details provided through this portfolio website and consultation channels.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            1. Information We Collect
          </h3>
          <p>
            When you complete a consultation form, contact inquiry, or connect via WhatsApp, we collect information including your name, corporate email address, contact phone number, company name, and details regarding your business challenge.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            2. How We Use Your Information
          </h3>
          <p>
            We use this information exclusively to evaluate your business inquiry, schedule strategy consultations, deliver customized advisory proposals, and communicate project updates. We never sell, rent, or trade your data to third parties.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            3. Confidentiality & Security
          </h3>
          <p>
            All strategic information shared during diagnostics and consultations is treated with strict confidentiality. Non-disclosure agreements (NDAs) are routinely executed prior to reviewing sensitive company financial or operational metrics.
          </p>

          <h3 className="text-lg font-bold text-[#0A2540] pt-2">
            4. Contact
          </h3>
          <p>
            If you have questions regarding data handling, please write to us at{" "}
            <a href={`mailto:${PROFILE_DATA.email}`} className="text-[#E31E24] font-bold underline">
              {PROFILE_DATA.email}
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
