export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  headline: string;
  impactMetrics: { label: string; value: string }[];
  challenge: string;
  strategy: string[];
  toolsUsed: string[];
  testimonial: { quote: string; author: string; role: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    slug: "healthcare-lead-automation",
    title: "Healthcare Clinic Network: Automated Patient Acquisition & Care System",
    category: "Healthcare",
    client: "Metro Healthcare Diagnostics",
    industry: "Healthcare & Diagnostics",
    headline: "How a multi-clinic network increased repeat visits by 42% and slashed front-desk call load by 70%.",
    impactMetrics: [
      { label: "Repeat Consultation Rate", value: "+42%" },
      { label: "Front Desk Overhead", value: "-70%" },
      { label: "Appointment Attendance", value: "94%" },
      { label: "New Patient Growth", value: "2.8x" }
    ],
    challenge: "The clinic group was losing over 35% of inbound inquiries due to missed phone calls and delayed inquiry responses during peak hours. Diagnostic reports took 24-48 hours to be dispatched manually.",
    strategy: [
      "Designed an intelligent WhatsApp conversational booking assistant available 24/7.",
      "Integrated electronic medical records with auto-dispatch of lab results via secure WhatsApp and SMS links.",
      "Automated appointment reminder nudges 24 hours and 2 hours prior to consultations.",
      "Established automated post-visit feedback loops and preventative health check recall campaigns."
    ],
    toolsUsed: ["WhatsApp Business API", "Custom CRM Connector", "Google Ads", "Twilio SMS", "Cloud Webhooks"],
    testimonial: {
      quote: "Sanjay brought structure and operational sanity to our patient management. Inquiries are handled instantly, and our clinics run at optimal capacity.",
      author: "Dr. Amit Verma",
      role: "Director, Metro Healthcare"
    }
  },
  {
    id: "cs-2",
    slug: "sme-distributor-portal",
    title: "Precision Engineering: Digital Distributor & ERP Ordering Pipeline",
    category: "SMEs & Manufacturing",
    client: "Apex Precision Components",
    industry: "Manufacturing & B2B Distribution",
    headline: "Automating 500+ monthly distributor orders with real-time stock sync and dispatch alerts.",
    impactMetrics: [
      { label: "Order Processing Time", value: "-65%" },
      { label: "Data Entry Errors", value: "Zero" },
      { label: "Monthly Revenue Scaled", value: "+48%" },
      { label: "Customer Re-order Speed", value: "3x Faster" }
    ],
    challenge: "Orders were received across fragmented emails, WhatsApp personal chats, and phone calls. Internal teams manually re-entered SKU details into ERP, causing shipment delays and stock mismatches.",
    strategy: [
      "Engineered a dedicated B2B distributor portal with role-based tiered pricing and live inventory counts.",
      "Automated order approvals, proforma invoice generation, and credit limit validations.",
      "Enabled instant order tracking via automated WhatsApp notifications for distributors.",
      "Built an executive revenue analytics dashboard providing weekly regional sales velocity."
    ],
    toolsUsed: ["Custom React Portal", "PostgreSQL Cloud DB", "Zapier Enterprise", "WhatsApp Alerts API", "Power BI"],
    testimonial: {
      quote: "Working with Sanjay completely transformed our customer acquisition and ordering model. It saved us hundreds of manual labor hours every month while boosting our revenue by 48%.",
      author: "Rajesh Malhotra",
      role: "Managing Director, Apex Precision"
    }
  },
  {
    id: "cs-3",
    slug: "professional-advisory-crm",
    title: "CA & Corporate Legal Advisory: High-Intent Lead Pipeline",
    category: "Professional Services",
    client: "Synergy Global Corporate Advisory",
    industry: "Legal & Financial Consulting",
    headline: "Accelerating consulting client acquisition with targeted authority marketing and instant discovery booking.",
    impactMetrics: [
      { label: "First Response Time", value: "5 mins" },
      { label: "Proposal Win Rate", value: "+31%" },
      { label: "Qualified Deal Flow", value: "3.2x" },
      { label: "Average Deal Size", value: "+28%" }
    ],
    challenge: "High-value business owners were inquiring, but because inquiries took up to 24 hours for partner assignment, prospective clients had already reached out to competing advisory firms.",
    strategy: [
      "Revamped website positioning around high-value compliance, M&A, and corporate tax advisory.",
      "Deployed smart qualifying discovery forms that score prospect intent and revenue size.",
      "Automated calendar scheduling with senior partners immediately upon qualifying submission.",
      "Configured automated follow-up sequences delivering case studies relevant to the prospect's sector."
    ],
    toolsUsed: ["HubSpot Enterprise CRM", "Google Ads (High-Intent B2B)", "Calendly API", "Resend Email Engine"],
    testimonial: {
      quote: "The strategic growth roadmap created by Sanjay gave our firm unmatched clarity. Every automation and marketing channel directly delivers measurable business ROI.",
      author: "Priya Sharma",
      role: "Senior Partner, Synergy Global"
    }
  },
  {
    id: "cs-4",
    slug: "b2b-saas-demo-acceleration",
    title: "B2B SaaS Startup: Product Marketing & Demo Conversion Engine",
    category: "Technology & Digital",
    client: "FlowMetric Cloud",
    industry: "Cloud Software",
    headline: "Doubling qualified enterprise demo bookings within 60 days through conversion-focused positioning.",
    impactMetrics: [
      { label: "Demo Conversion Rate", value: "+114%" },
      { label: "Customer Acquisition Cost", value: "-38%" },
      { label: "Sales Cycle Duration", value: "18 Days (from 45)" },
      { label: "Annual Run Rate", value: "2.1x" }
    ],
    challenge: "The SaaS product was innovative, but marketing copy was technical jargon rather than value-driven business ROI. High bounce rates on landing pages and low demo signups.",
    strategy: [
      "Rewrote product positioning focusing on tangible executive outcomes (cost savings, time saved).",
      "Built interactive ROI calculators allowing CFOs to simulate annual cost reductions.",
      "Optimized Google Search campaigns to focus on high-intent competitor replacement keywords.",
      "Implemented a 4-touch personalized video follow-up cadence for all demo registrants."
    ],
    toolsUsed: ["Next.js / React Landing Pages", "Google Analytics 4", "Hotjar", "ActiveCampaign CRM", "Loom Video Engine"],
    testimonial: {
      quote: "Sanjay knows how to turn complex tech into compelling business value that buyers actually pay for.",
      author: "Arjun Nambiar",
      role: "Co-Founder & CEO, FlowMetric"
    }
  }
];
