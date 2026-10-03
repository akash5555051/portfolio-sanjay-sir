export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  colorTheme: "pink" | "green" | "blue" | "yellow";
  iconName: "BarChart3" | "Laptop" | "Megaphone" | "Settings";
  fullDescription: string;
  deliverables: string[];
  impactMetrics: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "growth-consulting",
    title: "Business Growth Consulting",
    shortDesc: "Identify opportunities, create growth strategies and build execution plans.",
    colorTheme: "pink",
    iconName: "BarChart3",
    fullDescription: "A comprehensive diagnostic of your business model, revenue levers, market positioning, and operational bottlenecks. We engineer custom roadmap frameworks tailored to achieve sustainable revenue scaling without chaos.",
    deliverables: [
      "Market expansion strategy & positioning blueprint",
      "Revenue engine audit & bottleneck identification",
      "Actionable 90-day growth execution roadmap",
      "Executive KPI dashboard setup & review cycles"
    ],
    impactMetrics: "Average 35% revenue growth accelerated in the first 6 months."
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortDesc: "Implement websites, CRM, cloud applications and modern technology systems.",
    colorTheme: "green",
    iconName: "Laptop",
    fullDescription: "Modernize legacy business operations with high-converting web applications, unified CRM pipelines, cloud database infrastructure, and seamlessly integrated enterprise tools.",
    deliverables: [
      "High-converting modern website & web application architecture",
      "Enterprise CRM setup (HubSpot, Zoho, Salesforce, Custom)",
      "Cloud migration & internal operations digitisation",
      "Real-time business data reporting & pipeline monitoring"
    ],
    impactMetrics: "Reduces manual operational overhead by up to 40%."
  },
  {
    id: "marketing-lead-gen",
    title: "Marketing & Lead Generation",
    shortDesc: "Build practical marketing systems to attract, engage and convert customers.",
    colorTheme: "blue",
    iconName: "Megaphone",
    fullDescription: "Data-driven multi-channel marketing campaigns that generate high-intent inquiries consistently. We structure end-to-end sales funnels that turn cold visitors into loyal paying clients.",
    deliverables: [
      "Targeted Google Search, Display & Meta ad campaigns",
      "High-conversion landing page design & lead magnets",
      "Automated lead nurturing email & WhatsApp sequences",
      "Cost-per-acquisition (CPA) minimization & conversion rate optimization"
    ],
    impactMetrics: "3x average increase in qualified sales inquiries."
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    shortDesc: "Automate repetitive processes, improve productivity and create smarter workflows.",
    colorTheme: "yellow",
    iconName: "Settings",
    fullDescription: "Harness the power of AI agents, Zapier / Make workflow integrations, instant lead routing, and automated WhatsApp CRM triggers to run your business operations smoothly 24/7.",
    deliverables: [
      "Custom WhatsApp & AI conversational chatbots",
      "Zapier & Make multi-app workflow integrations",
      "Automated invoice, proposal & document generation",
      "AI-driven lead scoring, assignment & instant notification alerts"
    ],
    impactMetrics: "Saves 25+ manual work hours per employee weekly."
  }
];
