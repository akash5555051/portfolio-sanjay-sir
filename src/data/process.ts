export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  colorBg: string;
  badgeBg: string;
  details: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnose",
    desc: "Understand your business, customers and current systems.",
    colorBg: "text-red-600",
    badgeBg: "bg-[#E31E24]",
    details: "In-depth discovery session evaluating your current sales funnels, conversion drop-offs, tech stack efficiency, and operational bottlenecks."
  },
  {
    step: "02",
    title: "Strategize",
    desc: "Identify the highest-impact growth opportunities.",
    colorBg: "text-emerald-600",
    badgeBg: "bg-[#22C55E]",
    details: "Creating a step-by-step roadmap prioritizing quick revenue wins, clear target ROI, and sustainable competitive positioning."
  },
  {
    step: "03",
    title: "Build",
    desc: "Create the required digital assets and technology infrastructure.",
    colorBg: "text-blue-600",
    badgeBg: "bg-[#3B82F6]",
    details: "Developing modern conversion assets, custom websites, CRM pipelines, lead capture forms, and integrated tech stacks."
  },
  {
    step: "04",
    title: "Automate",
    desc: "Connect marketing, CRM, WhatsApp and AI.",
    colorBg: "text-amber-500",
    badgeBg: "bg-[#F59E0B]",
    details: "Wiring automated nurture sequences, WhatsApp alert bots, CRM stage triggers, and intelligent AI workflows that run 24/7."
  },
  {
    step: "05",
    title: "Grow",
    desc: "Measure results and continuously optimize.",
    colorBg: "text-red-700",
    badgeBg: "bg-[#DC2626]",
    details: "Tracking analytics, reviewing performance metrics, A/B testing conversion points, and scaling channels that deliver highest profitability."
  }
];
