import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Factory,
  Users,
  Store,
  Rocket,
  ArrowRight,
  Download,
  Gauge,
  TrendingUp,
  Globe,
  Handshake,
  ShoppingCart,
  MessageCircle,
  Clock,
  Zap,
  BarChart3,
  Trophy,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

interface CaseStudyItem {
  id: string;
  title: string;
  category: "Healthcare" | "Manufacturing" | "Professional Services" | "SMEs" | "Technology & Startups";
  badgeText: string;
  badgeStyle: string;
  image: string;
  description: string;
  metrics: [
    {
      icon: React.ElementType;
      iconColor: string;
      value: string;
      label: string;
    },
    {
      icon: React.ElementType;
      iconColor: string;
      value: string;
      label: string;
    }
  ];
  fullDetails: {
    client: string;
    industry: string;
    challenge: string;
    solution: string[];
    results: string[];
  };
}

const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "cs-clinic",
    title: "Digital Growth System for a Multi-Speciality Clinic",
    category: "Healthcare",
    badgeText: "Healthcare",
    badgeStyle: "bg-[#FEE2E2] text-[#DC2626] border border-red-200",
    image: "./images/cs-clinic.jpg",
    description:
      "Implemented a complete digital system including website, appointment booking, patient engagement and follow-up automation.",
    metrics: [
      {
        icon: Gauge,
        iconColor: "text-[#DC2626]",
        value: "3X",
        label: "More Appointments",
      },
      {
        icon: Users,
        iconColor: "text-[#2563EB]",
        value: "60%",
        label: "Higher Patient Engagement",
      },
    ],
    fullDetails: {
      client: "Multi-Speciality Clinic Group",
      industry: "Healthcare & Outpatient Care",
      challenge:
        "The clinic was experiencing high front-desk call burdens, missed appointment bookings outside working hours, and inconsistent follow-up recall for preventative consultations.",
      solution: [
        "Deployed a multi-channel digital appointment booking engine with instant doctor slot selection.",
        "Created an automated WhatsApp reminder system delivering notifications 24 hours and 2 hours before appointments.",
        "Built automated follow-up sequences for diagnostic tests and routine health reviews.",
      ],
      results: [
        "300% increase in digital patient appointment bookings within 90 days.",
        "60% improvement in active patient engagement and recall attendance.",
        "Reduced front-desk manual phone inquiry handling time by 45%.",
      ],
    },
  },
  {
    id: "cs-manufacturing",
    title: "Lead Generation for a Processing Equipment Manufacturer",
    category: "Manufacturing",
    badgeText: "Manufacturing",
    badgeStyle: "bg-[#DBEAFE] text-[#2563EB] border border-blue-200",
    image: "./images/cs-manufacturing.jpg",
    description:
      "Created a targeted digital marketing campaign and a lead management system to generate qualified enquiries from India and international markets.",
    metrics: [
      {
        icon: TrendingUp,
        iconColor: "text-[#2563EB]",
        value: "200+",
        label: "Qualified Leads",
      },
      {
        icon: Globe,
        iconColor: "text-[#2563EB]",
        value: "5 New",
        label: "International Clients",
      },
    ],
    fullDetails: {
      client: "Industrial Equipment & Machinery OEM",
      industry: "Industrial Manufacturing & Exports",
      challenge:
        "The manufacturer relied almost entirely on traditional trade fairs and word-of-mouth, which resulted in unpredictable pipeline velocity and zero international inbound visibility.",
      solution: [
        "Constructed a high-converting digital product showcase website highlighting machine technical specs and video demos.",
        "Launched high-intent Google Search & B2B LinkedIn campaigns targeting plant heads and procurement directors.",
        "Set up an automated lead qualification CRM pipeline with instant sales rep notifications.",
      ],
      results: [
        "Generated over 200+ pre-qualified industrial buying inquiries.",
        "Successfully secured 5 new recurring international enterprise distributor contracts.",
        "Average sales inquiry qualification turnaround reduced from 4 days to 2 hours.",
      ],
    },
  },
  {
    id: "cs-tally",
    title: "Business Development for a Tally Partner",
    category: "Professional Services",
    badgeText: "Professional Services",
    badgeStyle: "bg-[#DCFCE7] text-[#16A34A] border border-emerald-200",
    image: "./images/cs-tally.jpg",
    description:
      "Designed and executed a 90-day lead generation program including customer event, digital campaigns and CRM implementation.",
    metrics: [
      {
        icon: Users,
        iconColor: "text-[#2563EB]",
        value: "150+",
        label: "New Prospects",
      },
      {
        icon: Handshake,
        iconColor: "text-[#9333EA]",
        value: "30%",
        label: "Increase in Conversions",
      },
    ],
    fullDetails: {
      client: "Enterprise Software & Tally Solutions Partner",
      industry: "B2B Software & Professional Services",
      challenge:
        "The software partner struggled with fragmented lead tracking across team inboxes and lacked a structured system to educate corporate clients on software module upgrades.",
      solution: [
        "Designed and promoted an executive business leadership webinar & seminar series for SME finance managers.",
        "Implemented a centralized CRM pipeline tracking stage-by-stage demo requests and renewal timelines.",
        "Built automated email and WhatsApp nurturing sequences detailing tax compliance and inventory integrations.",
      ],
      results: [
        "Added 150+ high-intent new prospective business accounts within 90 days.",
        "Increased demonstration-to-closure conversion rate by 30%.",
        "Achieved a 95% on-time subscription renewal rate across existing portfolio.",
      ],
    },
  },
  {
    id: "cs-plant",
    title: "Online Catalogue & Digital Marketing for a Plant Business",
    category: "SMEs",
    badgeText: "Retail & SME",
    badgeStyle: "bg-[#FEF3C7] text-[#D97706] border border-amber-200",
    image: "./images/cs-plant.jpg",
    description:
      "Built an online catalogue with WhatsApp integration and ran local digital campaigns to increase visibility and sales.",
    metrics: [
      {
        icon: ShoppingCart,
        iconColor: "text-[#D97706]",
        value: "3X",
        label: "Increase in Orders",
      },
      {
        icon: MessageCircle,
        iconColor: "text-[#16A34A]",
        value: "70%",
        label: "Orders via WhatsApp",
      },
    ],
    fullDetails: {
      client: "Green Flora & Urban Plant Nursery",
      industry: "Retail & Consumer Horticulture",
      challenge:
        "The nursery had high local customer interest but had no easy way for buyers to browse live inventory, ask care questions, or order home delivery digitally.",
      solution: [
        "Created an ultra-fast mobile catalog featuring plant photos, sunlight requirements, and pot sizes.",
        "Integrated a 1-click 'Order on WhatsApp' cart system with pre-filled order details.",
        "Targeted local radius social media ads reaching plant lovers, interior designers, and balcony gardeners.",
      ],
      results: [
        "Order volume increased by 300% within the first 60 days of launch.",
        "70% of all retail transactions completed frictionlessly through WhatsApp.",
        "Built an organic community of 4,000+ local recurring plant enthusiasts.",
      ],
    },
  },
  {
    id: "cs-ai",
    title: "AI & Automation for a Service Business",
    category: "Technology & Startups",
    badgeText: "Technology & Startups",
    badgeStyle: "bg-[#F3E8FF] text-[#9333EA] border border-purple-200",
    image: "./images/cs-ai.jpg",
    description:
      "Implemented AI tools and automation workflows to streamline customer communication, follow-ups and reporting.",
    metrics: [
      {
        icon: Clock,
        iconColor: "text-[#2563EB]",
        value: "50%",
        label: "Reduction in Manual Work",
      },
      {
        icon: Zap,
        iconColor: "text-[#9333EA]",
        value: "Faster",
        label: "Response Time",
      },
    ],
    fullDetails: {
      client: "Digital Operations & Field Advisory Agency",
      industry: "Technology & Services",
      challenge:
        "Client inquiries and status reports were compiled manually by team members, consuming hours daily and leading to inconsistent customer response times.",
      solution: [
        "Integrated generative AI workflows to automatically draft instant, contextual responses to common client inquiries.",
        "Connected cloud CRM triggers to auto-generate weekly performance summaries and executive updates.",
        "Deployed smart notification webhooks alerting key managers only when high-priority accounts require human intervention.",
      ],
      results: [
        "50% reduction in repetitive manual administrative time across account teams.",
        "Average customer first response speed reduced from 3 hours to under 3 minutes.",
        "Client satisfaction score reached an all-time high of 4.9 / 5.0.",
      ],
    },
  },
  {
    id: "cs-hospital",
    title: "Patient Acquisition System for a Hospital",
    category: "Healthcare",
    badgeText: "Healthcare",
    badgeStyle: "bg-[#FEE2E2] text-[#DC2626] border border-red-200",
    image: "./images/cs-hospital.jpg",
    description:
      "Developed an integrated system combining digital marketing, call management and CRM to improve patient acquisition and retention.",
    metrics: [
      {
        icon: BarChart3,
        iconColor: "text-[#2563EB]",
        value: "2.5X",
        label: "More Patient Leads",
      },
      {
        icon: Heart,
        iconColor: "text-[#DC2626]",
        value: "40%",
        label: "Increase in OPD",
      },
    ],
    fullDetails: {
      client: "Care Today Multispeciality Hospital",
      industry: "Healthcare & Hospital Administration",
      challenge:
        "The hospital faced fragmented patient inquiries across physical walk-ins, phone lines, and marketing ads with zero end-to-end attribution or unified patient recall.",
      solution: [
        "Engineered a unified call tracking and digital inquiry CRM hub with telephony integration.",
        "Targeted clinical specialty campaigns focusing on cardiology, orthopedics, and diagnostics.",
        "Implemented proactive appointment confirmation SMS/WhatsApp nudges and patient feedback protocols.",
      ],
      results: [
        "2.5X growth in qualified inbound patient inquiries across key departments.",
        "40% overall increase in outpatient department (OPD) consults in the first 4 months.",
        "Inquiry drop-off rate dropped from 38% to under 8%.",
      ],
    },
  },
];

// Category filter configuration
const CATEGORIES = [
  { id: "All", label: "All", icon: null },
  { id: "Healthcare", label: "Healthcare", icon: Heart, iconColor: "text-red-500 fill-red-500" },
  { id: "Manufacturing", label: "Manufacturing", icon: Factory, iconColor: "text-red-500 fill-red-500" },
  { id: "Professional Services", label: "Professional Services", icon: Users, iconColor: "text-blue-500" },
  { id: "SMEs", label: "SMEs", icon: Store, iconColor: "text-blue-500" },
  { id: "Technology & Startups", label: "Technology & Startups", icon: Rocket, iconColor: "text-purple-500" },
];

// Stats Bar Metrics
const STATS_ITEMS = [
  {
    icon: Trophy,
    title: "100+",
    subtitle: "Projects & Assignments",
  },
  {
    icon: Users,
    title: "Multiple",
    subtitle: "Industries Served",
  },
  {
    icon: TrendingUp,
    title: "Measurable",
    subtitle: "Business Impact",
  },
  {
    icon: Handshake,
    title: "Long-term",
    subtitle: "Client Relationships",
  },
];

// Testimonials Carousel Data
const TESTIMONIALS_DATA = [
  {
    id: "t-amit",
    quote:
      "Sanjay brings a rare combination of business understanding, technology knowledge and practical execution. He helped us create a structured marketing and lead management system which has made a real difference to our business.",
    author: "Dr. Amit Verma",
    role: "Director, Healthcare Group",
    image: "./images/testimonial-dr-amit-ultra-hd.jpg",
  },
  {
    id: "t-rajesh",
    quote:
      "Working with Sanjay completely transformed our customer acquisition and ordering model. It saved us hundreds of manual labor hours every month while boosting our revenue by 48%.",
    author: "Rajesh Malhotra",
    role: "Managing Director, Manufacturing Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: "t-priya",
    quote:
      "The strategic growth roadmap created by Sanjay gave our advisory firm unmatched clarity. Every automation and marketing channel directly delivers measurable business ROI.",
    author: "Priya Sharma",
    role: "Senior Partner, Corporate Advisory",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
];

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [modalStudy, setModalStudy] = useState<CaseStudyItem | null>(null);

  const filteredStudies =
    selectedFilter === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((item) => item.category === selectedFilter);

  const handleDownloadBrief = () => {
    window.print();
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-white min-h-screen text-slate-800">

      {/* ========================================================
          1. HERO SECTION: 1:1 Match to Mockup Design
          ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-4 pb-8 sm:pt-8 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Subtext, Action Buttons */}
            <div className="lg:col-span-6 text-left">
              {/* Tag */}
              <span className="text-xs font-bold tracking-[0.22em] text-slate-500 uppercase block mb-3.5">
                CASE STUDIES
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-5">
                Real Businesses. <br />
                <span className="text-[#E31E24]">Real Results.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mb-8">
                Explore how I have helped businesses across industries use strategy, technology and marketing to solve challenges, create opportunities and achieve measurable growth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E31E24] text-white font-bold text-sm shadow-sm hover:bg-[#C8171D] transition-colors cursor-pointer group"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDownloadBrief}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer group shadow-2xs"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Case Study Brief</span>
                </button>
              </div>
            </div>

            {/* Right Column: Exact Visual Artwork (Mug + Laptop + Quote Card) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src="./images/case-studies-hero-right-hd.png"
                alt="Ideas Solutions Results - Real Businesses Real Results"
                className="w-full h-auto max-w-[580px] object-contain select-none"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. CATEGORY FILTER BAR: Horizontal Pills
          ======================================================== */}
      <section className="py-5 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start gap-2 sm:gap-3 pb-2 sm:pb-0 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0A2540] text-white shadow-xs font-bold"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {IconComp && (
                    <IconComp
                      className={`w-4 h-4 ${
                        isActive ? "text-white fill-white" : cat.iconColor
                      }`}
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CASE STUDIES GRID: 6 Cards in 3x2 Layout
          ======================================================== */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Card Image Banner with Badge */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                    />
                    {/* Category Badge overlay on top-left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold shadow-xs backdrop-blur-xs ${study.badgeStyle}`}>
                        {study.badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A2540] leading-snug group-hover:text-[#E31E24] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Metrics Row & Link */}
                <div className="p-5 sm:p-6 pt-0 space-y-4">
                  {/* Two Metrics in 2 Columns */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    {study.metrics.map((m, mIdx) => {
                      const MetricIcon = m.icon;
                      return (
                        <div key={mIdx} className="flex items-start space-x-2">
                          <MetricIcon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 mt-0.5 ${m.iconColor}`} />
                          <div>
                            <span className="text-sm sm:text-base font-extrabold text-[#0A2540] block leading-tight">
                              {m.value}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium leading-tight block mt-0.5">
                              {m.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* View Case Study Link Button */}
                  <div className="pt-1">
                    <button
                      onClick={() => setModalStudy(study)}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1677FF] hover:text-[#0A2540] transition-colors cursor-pointer group"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. STATS BAR: 4 Columns with Blue Outline Icons
          ======================================================== */}
      <section className="py-6 sm:py-8 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-2xs">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 divide-y-0 sm:divide-x divide-slate-100">
              {STATS_ITEMS.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start space-x-2.5 sm:space-x-3.5 text-left py-2 sm:py-1 ${
                      idx === 0
                        ? "sm:pr-6"
                        : idx === STATS_ITEMS.length - 1
                        ? "sm:pl-6"
                        : "sm:px-6"
                    }`}
                  >
                    {/* Clean Dark Navy / Blue Outline Icon */}
                    <div className="text-[#0A2540] shrink-0 mt-0.5">
                      <IconComp className="w-7 h-7 sm:w-9 sm:h-9 stroke-[1.65]" />
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-[19px] font-extrabold text-[#0A2540] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium whitespace-pre-line leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. TESTIMONIAL & CTA SIDE-BY-SIDE SECTION (2 Cards)
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1 (Left): Dr. Amit Verma Testimonial Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between text-left space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "./images/testimonial-dr-amit-clean.jpg";
                  }}
                  className="w-13 h-13 rounded-full object-cover border border-slate-200 shrink-0 select-none shadow-2xs"
                />
                <div className="space-y-1 flex-1">
                  <div className="text-3xl text-slate-300 font-serif leading-none select-none">“</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {currentTestimonial.quote}
                  </p>
                  <div className="pt-2">
                    <h4 className="text-sm font-bold text-[#0A2540]">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-1.5">
                  {TESTIMONIALS_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeTestimonialIdx
                          ? "w-5 bg-[#E31E24]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2 (Right): Have a Similar Challenge? Dark Navy CTA Card */}
            <div className="bg-[#071C35] rounded-3xl p-6 sm:p-8 relative overflow-hidden text-white shadow-xl flex flex-col justify-between text-left">
              {/* Background Mountain Photo Overlay */}
              <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] pointer-events-none select-none z-0">
                <img
                  src="./images/cta-mountain-growth-ultra-hd.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "./images/cta-mountain-growth.jpg";
                  }}
                  alt="Business Mountain Ascent"
                  className="w-full h-full object-cover object-center opacity-70 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071C35] via-[#071C35]/80 to-transparent" />
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Have a Similar Challenge?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                  Let's discuss how we can create a success story together.
                </p>
              </div>

              {/* Action Buttons: Let's Talk & Chat on WhatsApp */}
              <div className="relative z-10 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#E31E24] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#C8171D] transition-colors cursor-pointer group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20case%20study%20and%20business%20growth%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#20BD5A] transition-colors cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          6. MODAL: Detailed Case Study Deep Dive
          ======================================================== */}
      <AnimatePresence>
        {modalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalStudy(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={modalStudy.image}
                  alt={modalStudy.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${modalStudy.badgeStyle}`}>
                    {modalStudy.badgeText}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 leading-snug">
                    {modalStudy.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-semibold border-b border-slate-100 pb-4">
                  <span>Client: <strong className="text-slate-800">{modalStudy.fullDetails.client}</strong></span>
                  <span>Industry: <strong className="text-slate-800">{modalStudy.fullDetails.industry}</strong></span>
                </div>

                {/* Challenge */}
                <div className="space-y-2">
                  <h4 className="text-sm font-extrabold text-[#0A2540] uppercase tracking-wider">
                    The Business Challenge
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {modalStudy.fullDetails.challenge}
                  </p>
                </div>

                {/* Strategy & Solution */}
                <div className="space-y-2.5">
                  <h4 className="text-sm font-extrabold text-[#0A2540] uppercase tracking-wider">
                    Strategic Execution & Solution
                  </h4>
                  <ul className="space-y-2">
                    {modalStudy.fullDetails.solution.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Results */}
                <div className="space-y-2.5">
                  <h4 className="text-sm font-extrabold text-[#0A2540] uppercase tracking-wider">
                    Measurable Results Achieved
                  </h4>
                  <ul className="space-y-2">
                    {modalStudy.fullDetails.results.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0 mt-2 mr-2.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setModalStudy(null);
                      onOpenConsultation();
                    }}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm hover:bg-[#C8171D] transition-colors cursor-pointer"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <button
                    onClick={() => setModalStudy(null)}
                    className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CaseStudies;
