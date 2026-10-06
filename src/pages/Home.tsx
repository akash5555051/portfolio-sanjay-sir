import React, { useState } from "react";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { TestimonialsAndCTA } from "@/components/TestimonialsAndCTA";
import { TrustedBy } from "@/components/TrustedBy";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ServiceItem } from "@/data/services";

interface HomeProps {
  onOpenConsultation: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Stats / Trust Bar */}
      <StatsBar />

      {/* 3. Services Section (WHAT I DO) */}
      <Services onSelectService={(service) => setSelectedService(service)} />

      {/* 4. Process Section (MY APPROACH) */}
      <Process />

      {/* 5. Industries Section (INDUSTRIES I WORK WITH) */}
      <Industries />

      {/* 6. Testimonial + CTA Section */}
      <TestimonialsAndCTA onOpenConsultation={onOpenConsultation} />

      {/* 7. Trusted By Businesses & Professionals */}
      <TrustedBy />

      {/* Modal for Service Deep Dive */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={onOpenConsultation}
      />
    </div>
  );
};

export default Home;
