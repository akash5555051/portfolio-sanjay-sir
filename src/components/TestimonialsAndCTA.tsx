import React from "react";
import { Testimonial } from "./Testimonial";
import { CTASection } from "./CTASection";

interface TestimonialsAndCTAProps {
  onOpenConsultation: () => void;
}

export const TestimonialsAndCTA: React.FC<TestimonialsAndCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section id="testimonials-cta" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Testimonial Card */}
          <Testimonial />

          {/* Right: Dark Navy CTA Card */}
          <CTASection onOpenConsultation={onOpenConsultation} />
        </div>
      </div>
    </section>
  );
};
