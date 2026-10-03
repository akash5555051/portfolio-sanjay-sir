export interface IndustryItem {
  id: string;
  title: string;
  tags: string[];
  colorTheme: "pink" | "green" | "blue" | "yellow";
  iconName: "HeartHandshake" | "Briefcase" | "Building2" | "Lightbulb";
  caseStudySummary: string;
  challenge: string;
  solution: string;
  result: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    tags: ["Clinics | Hospitals", "Doctors | Diagnostic Centres"],
    colorTheme: "pink",
    iconName: "HeartHandshake",
    caseStudySummary: "Built automated patient booking & diagnostic follow-up WhatsApp funnel for a leading clinic network, increasing repeat consultation rate by 42%.",
    challenge: "High patient appointment drop-off rates and fragmented diagnostic report delivery via traditional phone desk.",
    solution: "End-to-end WhatsApp booking bot, automated SMS reminders, and instant digital report retrieval system.",
    result: "42% increase in repeat consultations and 70% decrease in front-desk inbound calls."
  },
  {
    id: "professional-services",
    title: "Professional Services",
    tags: ["Consultants | CA/CS Firms", "Legal | Education"],
    colorTheme: "green",
    iconName: "Briefcase",
    caseStudySummary: "Implemented automated lead qualifying & CRM consultation booking for a CA & Legal advisory firm, reducing turnaround time from 24h to 5 mins.",
    challenge: "High-value inquiries getting delayed in email inboxes with low initial qualification.",
    solution: "Smart qualification forms, Calendly/CRM automated sync, and automated proposal dispatch triggers.",
    result: "Turnaround time reduced from 24 hours to 5 minutes, boosting client close rate by 31%."
  },
  {
    id: "smes",
    title: "SMEs",
    tags: ["Manufacturers | Distributors", "Service Businesses"],
    colorTheme: "blue",
    iconName: "Building2",
    caseStudySummary: "Digitized distributor ordering portal and automated inventory sync for an industrial manufacturer, cutting manual data entry by 80%.",
    challenge: "Manual pen-and-paper order processing leading to fulfillment bottlenecks and invoice delays.",
    solution: "Custom cloud distributor portal connected directly to accounting and WhatsApp dispatch notifications.",
    result: "Order turnaround slashed by 65% and human data-entry errors reduced by 80%."
  },
  {
    id: "tech-digital",
    title: "Technology & Digital",
    tags: ["SaaS | IT Companies", "Startups"],
    colorTheme: "yellow",
    iconName: "Lightbulb",
    caseStudySummary: "Redesigned B2B sales pipeline and AI-driven demo scheduling workflow for a SaaS startup, doubling qualified demo bookings in 60 days.",
    challenge: "Low visitor-to-demo conversion on enterprise software landing pages.",
    solution: "Interactive value calculators, optimized ICP messaging, and instant 1-click video demo scheduling.",
    result: "2.1x increase in booked enterprise demos within 60 days of launch."
  }
];
