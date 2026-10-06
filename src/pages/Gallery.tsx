import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Mic2,
  Briefcase,
  MapPin,
  Trophy,
  Users,
  Search,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Sparkles,
  MessageCircle,
  Building2,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryProps {
  onOpenConsultation: () => void;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Keynotes & Speaking" | "Corporate Workshops" | "Client Visits & Consulting" | "Industry Summits & Awards" | "Mentorship & Moments";
  location: string;
  date: string;
  image: string;
  description: string;
  detailedStory: string;
  highlights: string[];
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Keynote Address: AI & Practical Business Growth",
    category: "Keynotes & Speaking",
    location: "National Tech Summit, New Delhi",
    date: "February 2026",
    image: "./images/gallery/gallery-keynote-ai.jpg",
    description: "Addressing 400+ founders and enterprise executives on pragmatic AI implementation and high-ROI automation.",
    detailedStory: "Delivered the opening keynote on demystifying artificial intelligence for traditional mid-market businesses. Highlighted how automated lead qualification, customer service AI workflows, and CRM intelligence drive sustainable bottom-line margin expansion.",
    highlights: ["400+ Enterprise Leaders", "High-ROI AI Systems", "Live Q&A Session"]
  },
  {
    id: "gal-2",
    title: "Executive Boardroom Strategy Session",
    category: "Corporate Workshops",
    location: "Corporate HQ, Mumbai",
    date: "January 2026",
    image: "./images/gallery/gallery-boardroom-strategy.jpg",
    description: "Guiding the executive leadership board of a multi-crore manufacturer through a 3-year digital transformation roadmap.",
    detailedStory: "Facilitated an intensive full-day executive alignment workshop with board members and department directors. Aligned IT infrastructure, ERP modernization, and distributor portal deployment to accelerate domestic and export sales velocity.",
    highlights: ["Board-Level Alignment", "3-Year Growth Roadmap", "ERP Modernization"]
  },
  {
    id: "gal-3",
    title: "Healthcare Digital Transformation Masterclass",
    category: "Corporate Workshops",
    location: "Medical Association Forum, Patna",
    date: "November 2025",
    image: "./images/gallery/gallery-healthcare-workshop.jpg",
    description: "Equipping hospital directors and senior clinicians with automated patient acquisition and WhatsApp appointment systems.",
    detailedStory: "Conducted an interactive masterclass for 60+ clinic founders on patient recall automation, reducing front-desk telephonic friction, and improving chronic care continuity through HIPAA/compliance-friendly digital workflows.",
    highlights: ["60+ Medical Directors", "Patient Recall Systems", "Zero Front-Desk Bottlenecks"]
  },
  {
    id: "gal-4",
    title: "Panel Address: Scaling MSMEs Sustainably",
    category: "Keynotes & Speaking",
    location: "MSME Leadership Conclave, Bengaluru",
    date: "October 2025",
    image: "./images/gallery/gallery-sme-summit.jpg",
    description: "Participating in an executive panel on capital efficiency, modern B2B lead generation, and scalable business systems.",
    detailedStory: "Shared hands-on perspectives on shifting SMEs from founder-dependent daily operations toward documented, automated business systems that generate predictable recurring revenue without massive marketing burn.",
    highlights: ["MSME Scaling Playbook", "Capital Efficiency", "Predictable Pipeline"]
  },
  {
    id: "gal-5",
    title: "On-Site Industrial Engineering Review",
    category: "Client Visits & Consulting",
    location: "Heavy Machinery Plant, Gujarat",
    date: "September 2025",
    image: "./images/gallery/gallery-consulting-plant.jpg",
    description: "Walking the manufacturing shop floor with production heads to design connected IoT and digital distributor tracking.",
    detailedStory: "Spent two days evaluating factory assembly lines, warehouse inventory throughput, and ERP dispatch alerts to connect customer order intake directly with machine production schedules.",
    highlights: ["Shop Floor Walkthrough", "Live Dispatch Sync", "Supply Chain Optimization"]
  },
  {
    id: "gal-6",
    title: "Fireside Discussion on Enterprise Automation",
    category: "Industry Summits & Awards",
    location: "Global Business Expo, Hyderabad",
    date: "August 2025",
    image: "./images/gallery/gallery-tech-expo.jpg",
    description: "Engaging in an insightful fireside chat on cloud infrastructure, workflow automation, and cross-department data integrity.",
    detailedStory: "Discussed future-proofing mid-market technology stacks against legacy software lock-in, emphasizing modular cloud microservices and automated API integrations that scale smoothly.",
    highlights: ["Fireside Tech Debate", "Cloud Architectures", "Modular Scalability"]
  },
  {
    id: "gal-7",
    title: "Mentoring Emerging Tech Founders & Innovators",
    category: "Mentorship & Moments",
    location: "Startup Incubation Hub, Patna",
    date: "July 2025",
    image: "./images/gallery/gallery-mentorship-startup.jpg",
    description: "Guiding early-stage SaaS and B2B entrepreneurs on product-market fit, unit economics, and enterprise sales cycles.",
    detailedStory: "Held 1-on-1 strategy teardowns for 12 selected startup founders, analyzing customer acquisition costs (CAC), lifetime value (LTV), and strategic outbound positioning.",
    highlights: ["12 Cohort Startups", "Unit Economics Focus", "Go-To-Market Strategy"]
  },
  {
    id: "gal-8",
    title: "Excellence in Strategic Business Advisory Award",
    category: "Industry Summits & Awards",
    location: "Leadership Awards Gala, New Delhi",
    date: "June 2025",
    image: "./images/gallery/gallery-annual-business-award.jpg",
    description: "Honored with the Business Consulting & Technology Transformation Excellence recognition for measurable SME impact.",
    detailedStory: "Recognized among top consulting leaders for spearheading impactful turnaround projects and digital growth systems across healthcare, manufacturing, and professional services across India.",
    highlights: ["Industry Recognition", "20+ Years Leadership", "Proven SME ROI"]
  },
  {
    id: "gal-9",
    title: "Client Milestone & Strategic Retreat",
    category: "Mentorship & Moments",
    location: "Leadership Retreat, Goa",
    date: "May 2025",
    image: "./images/gallery/gallery-team-celebration.jpg",
    description: "Facilitating an annual strategy and milestone reflection retreat for client executive teams.",
    detailedStory: "Guided cross-functional leadership through retrospective KPI evaluations, team culture alignment, and upcoming fiscal year goal cascades in an immersive collaborative setting.",
    highlights: ["Team KPI Cascades", "Culture & Synergy", "Strategic Reflection"]
  },
  {
    id: "gal-10",
    title: "International Partner Strategic Alignment",
    category: "Client Visits & Consulting",
    location: "Executive Center, Dubai",
    date: "April 2025",
    image: "./images/gallery/gallery-executive-briefing.jpg",
    description: "Advising overseas distributors and Middle East channel partners on cross-border market expansion systems.",
    detailedStory: "Structured strategic distributor incentive models and synchronized global customer relationship pipelines for multinational clients spanning the UAE, Saudi Arabia, and India.",
    highlights: ["Cross-Border Growth", "Distributor Incentives", "Global Channel Sync"]
  },
  {
    id: "gal-11",
    title: "Continuous Learning & Systems Research",
    category: "Mentorship & Moments",
    location: "Consulting Office Library",
    date: "March 2025",
    image: "./images/gallery/gallery-reading-research.jpg",
    description: "Researching emerging AI capabilities, growth playbooks, and modern enterprise frameworks in the consulting study.",
    detailedStory: "Dedicated weekly deep-work sessions analyzing the newest developments in generative AI agents, enterprise CRM automation, and cognitive leadership playbooks.",
    highlights: ["Deep Work & Research", "Emerging Tech Analysis", "Strategic Synthesis"]
  },
  {
    id: "gal-12",
    title: "Corporate Sales & CRM Pipeline Masterclass",
    category: "Corporate Workshops",
    location: "Enterprise Academy, Kolkata",
    date: "February 2025",
    image: "./images/gallery/gallery-corporate-training.jpg",
    description: "Training 50+ sales managers and account executives on consultative B2B selling and pipeline hygiene.",
    detailedStory: "Hands-on simulation workshop training enterprise sales professionals to leverage stage-by-stage CRM tracking, automated follow-up cadences, and objection handling strategies.",
    highlights: ["50+ Sales Professionals", "Pipeline Hygiene", "Consultative Selling"]
  }
];

const CATEGORIES = [
  { id: "All", label: "All Moments", icon: Sparkles },
  { id: "Keynotes & Speaking", label: "Keynotes & Speaking", icon: Mic2 },
  { id: "Corporate Workshops", label: "Workshops", icon: Briefcase },
  { id: "Client Visits & Consulting", label: "Client Visits", icon: Building2 },
  { id: "Industry Summits & Awards", label: "Summits & Awards", icon: Trophy },
  { id: "Mentorship & Moments", label: "Mentorship", icon: GraduationCap }
];

export const Gallery: React.FC<GalleryProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        (prev! - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen text-slate-800">

      {/* ========================================================
          1. HERO SECTION: 1:1 Design Language Match
          ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-6 pb-8 sm:pt-10 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Subtext, Stats Pills */}
            <div className="lg:col-span-6 text-left">
              {/* Red Tag */}
              <span className="text-xs font-bold tracking-[0.22em] text-[#E31E24] uppercase block mb-3.5">
                PHOTO &amp; MOMENTS GALLERY
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-5">
                Captured Moments in <br />
                <span className="text-[#E31E24]">Leadership &amp; Growth</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mb-8">
                A visual timeline of keynotes, executive boardroom strategy sessions, client on-site visits, industry summits, and mentorship milestones across India and internationally.
              </p>

              {/* 4 Value Propositions / Stats Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0A2540] block">50+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Keynotes &amp; Talks</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0A2540] block">100+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Workshops Led</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0A2540] block">20+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Summits &amp; Expos</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0A2540] block">15+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Cities Reached</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Definition Photorealistic Hero Visual */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src="./images/gallery-hero-right-hd.png"
                alt="Sanjay Kumar - Leadership Moments & Gallery"
                className="w-full h-auto max-w-[580px] object-contain select-none rounded-2xl shadow-sm"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. FILTER & SEARCH BAR
          ======================================================== */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0A2540] text-white shadow-xs"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#E31E24]" : "text-slate-400"}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[260px] md:max-w-xs">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search moments, topics, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] transition-all bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. GALLERY GRID: 12 Cards in 3-Column Responsive Layout
          ======================================================== */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0A2540]">No matching moments found</h3>
              <p className="text-xs text-slate-500 mt-1">Try selecting another category or clear your search query.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 bg-[#E31E24] text-white rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between text-left cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                        loading="lazy"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                        <span className="text-xs font-semibold flex items-center space-x-1">
                          <Maximize2 className="w-3.5 h-3.5 mr-1" /> View Full HD
                        </span>
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0A2540]/85 text-white backdrop-blur-xs shadow-xs">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      {/* Meta location & date */}
                      <div className="flex items-center space-x-3 text-[11px] font-semibold text-slate-500">
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1 text-[#E31E24]" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights pills */}
                  <div className="p-5 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          4. INTERACTIVE LIGHTBOX MODAL (Ultra-HD View)
          ======================================================== */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative text-left"
            >
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-red-50 text-[#E31E24]">
                    {currentLightboxItem.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Moment {lightboxIndex! + 1} of {filteredItems.length}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevLightbox}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Previous (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                    title="Next (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors ml-2"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-1">
                {/* Large HD Image Display */}
                <div className="relative w-full bg-slate-950 flex items-center justify-center max-h-[500px] overflow-hidden">
                  <img
                    src={currentLightboxItem.image}
                    alt={currentLightboxItem.title}
                    className="w-full h-auto max-h-[500px] object-contain select-none"
                  />
                </div>

                {/* Narrative Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-[#E31E24]" />
                      {currentLightboxItem.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {currentLightboxItem.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                    {currentLightboxItem.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {currentLightboxItem.detailedStory}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A2540] block mb-2">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentLightboxItem.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-[#0A2540] border border-slate-200/80"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Interested in having Sanjay Kumar speak or consult?
                </span>
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenConsultation();
                  }}
                  className="px-4 py-2 rounded-lg bg-[#E31E24] text-white text-xs font-bold shadow-xs hover:bg-[#C8171D] transition-colors inline-flex items-center"
                >
                  <span>Book a Keynote / Workshop</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          5. BOTTOM CTA BANNER: Mountain Overlay
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071C35] rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white shadow-xl text-left">
            
            {/* Background Graphic */}
            <div className="absolute inset-y-0 right-0 w-full sm:w-[60%] pointer-events-none select-none z-0">
              <img
                src="./images/cta-mountain-growth-ultra-hd.jpg"
                alt="Leadership"
                className="w-full h-full object-cover object-center opacity-65 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071C35] via-[#071C35]/85 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#E31E24] uppercase block">
                INVITE SANJAY KUMAR
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Want Sanjay Kumar to Speak at Your Next Event or Lead an Executive Workshop?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Available for corporate keynote addresses, executive strategy workshops, panel moderations, and on-site business transformation consulting across India and globally.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm shadow-md hover:bg-[#C8171D] transition-colors cursor-pointer group"
                >
                  <span>Book Keynote / Workshop</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20speaking%20invitation%20or%20executive%20workshop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20BD5A] transition-colors cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
