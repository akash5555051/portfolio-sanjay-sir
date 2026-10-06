import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Megaphone,
  Settings,
  Bot,
  Heart,
  Rocket,
  Search,
  Bell,
  ArrowRight,
  Clock,
  Send,
  Lightbulb,
  X,
  CheckCircle2,
  Calendar,
  BookOpen,
  Share2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InsightsProps {
  onOpenConsultation: () => void;
}

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  tagLabel: string;
  tagColor: string;
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    intro: string;
    points: { title: string; desc: string }[];
    conclusion: string;
  };
}

const FEATURED_ARTICLE: ArticleItem = {
  id: "featured-1",
  title: "5 Strategic Steps to Build a Future-Ready Business",
  category: "Business Strategy",
  tagLabel: "BUSINESS STRATEGY",
  tagColor: "text-slate-500",
  image: "./images/insights-featured.jpg",
  excerpt:
    "In today’s fast-changing world, businesses need more than just good products or services. They need a clear strategy, the right technology, and a focus on customer experience. Here are five practical steps to make your business future-ready.",
  date: "Sep 10, 2026",
  readTime: "6 min read",
  author: "Sanjay Kumar",
  content: {
    intro:
      "Future-readiness isn't about adopting every passing trend; it's about building operational resilience, tech agility, and predictable customer growth engines that thrive in volatile markets.",
    points: [
      {
        title: "1. Audit Your Core Value Architecture",
        desc: "Regularly assess whether your value proposition still solves high-priority problems for your customers better than modern alternatives.",
      },
      {
        title: "2. Automate Repetitive Back-Office Workflows",
        desc: "Free your leadership and sales talent from manual data entry, fragmented lead sorting, and manual status tracking through connected CRM systems.",
      },
      {
        title: "3. Institutionalize Omnichannel Customer Data",
        desc: "Ensure every customer touchpoint — from WhatsApp and website queries to post-purchase support — lives in a centralized single source of truth.",
      },
      {
        title: "4. Build Predictive Financial & Capacity Metrics",
        desc: "Shift from reactive month-end accounting to weekly lead velocity, customer acquisition cost (CAC), and customer lifetime value (LTV) scorecards.",
      },
      {
        title: "5. Foster a Culture of Continuous Experimentation",
        desc: "Encourage small, low-risk pilot projects with generative AI tools, automated marketing nurturing, and streamlined fulfillment channels.",
      },
    ],
    conclusion:
      "Businesses that align leadership vision with practical operational execution consistently outpace their competition.",
  },
};

const ARTICLES_LIST: ArticleItem[] = [
  {
    id: "art-1",
    title: "How AI Can Help SMEs Do More with Less",
    category: "AI & Automation",
    tagLabel: "AI & AUTOMATION",
    tagColor: "text-[#D97706]",
    image: "./images/in-ai-blocks.jpg",
    excerpt:
      "Practical ways small and medium businesses can use AI to save time, reduce costs and improve customer experience.",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "AI is no longer just for enterprise tech giants. Today, pragmatic AI workflows allow lean SME teams to compete with industry incumbents at a fraction of the cost.",
      points: [
        {
          title: "Automated Customer Support & Lead Routing",
          desc: "AI chatbots can triage inbound inquiries 24/7, qualify prospect budgets, and instantly route hot leads to sales teams.",
        },
        {
          title: "Instant Content & Proposal Drafts",
          desc: "Use generative AI to draft customized client proposals, marketing copy, and internal standard operating procedures (SOPs) in seconds.",
        },
        {
          title: "Predictive Inventory & Cash Flow Forecasting",
          desc: "Identify seasonal buying patterns and forecast inventory reordering requirements before stockouts occur.",
        },
      ],
      conclusion:
        "Start small with one high-friction workflow, measure the time saved, and reinvest those hours into customer relationships.",
    },
  },
  {
    id: "art-2",
    title: "A Practical Guide to Lead Generation for Service Businesses",
    category: "Digital Marketing",
    tagLabel: "DIGITAL MARKETING",
    tagColor: "text-[#2563EB]",
    image: "./images/in-marketing.jpg",
    excerpt:
      "From the right channels to the right messaging – how to attract, engage and convert more customers digitally.",
    date: "Aug 20, 2026",
    readTime: "7 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "Lead generation for consulting, clinics, and professional firms requires credibility and trust rather than aggressive promotional spam.",
      points: [
        {
          title: "Clarity Over Cleverness",
          desc: "Clearly articulate who you help, the exact transformation you deliver, and the measurable business outcome achieved.",
        },
        {
          title: "High-Intent Search vs. Social Awareness",
          desc: "Capture active buyers searching for solutions on Google Search while nurturing passive prospects through LinkedIn and case study content.",
        },
        {
          title: "Frictionless Conversion Gateways",
          desc: "Replace bulky 10-field contact forms with instant WhatsApp chat buttons or 1-click discovery calendar booking links.",
        },
      ],
      conclusion:
        "A structured lead system provides predictability, enabling you to forecast revenue quarters in advance.",
    },
  },
  {
    id: "art-3",
    title: "Digital Growth Opportunities for Clinics and Hospitals",
    category: "Healthcare",
    tagLabel: "HEALTHCARE",
    tagColor: "text-[#DC2626]",
    image: "./images/in-healthcare.jpg",
    excerpt:
      "How healthcare providers can use digital tools, CRM and automation to improve patient acquisition and retention.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "Modern patients demand digital convenience — from frictionless appointment booking to instant diagnostic reports delivered directly to their phone.",
      points: [
        {
          title: "24/7 WhatsApp Appointment Assistance",
          desc: "Reduce missed inquiries by allowing patients to book, reschedule, and verify doctor availability instantly via WhatsApp.",
        },
        {
          title: "Automated Consultation Attendance Nudges",
          desc: "Cut no-show rates by up to 40% with automated reminder messages sent 24 hours and 2 hours prior to scheduled visits.",
        },
        {
          title: "Preventative Care Recall Workflows",
          desc: "Re-engage chronic care and wellness patients with personalized health checkup nudges and automated report follow-ups.",
        },
      ],
      conclusion:
        "Combining clinical excellence with seamless digital touchpoints builds enduring patient trust and loyalty.",
    },
  },
  {
    id: "art-4",
    title: "From Surviving to Thriving: Growth Strategies for SMEs",
    category: "Business Strategy",
    tagLabel: "BUSINESS STRATEGY",
    tagColor: "text-[#16A34A]",
    image: "./images/in-sprout.jpg",
    excerpt:
      "Key strategies for small and medium businesses to create sustainable and profitable growth in a competitive market.",
    date: "Aug 5, 2026",
    readTime: "6 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "Moving from reactive day-to-day survival to structured profitable growth requires shifting from owner-dependent hustle to systemized operations.",
      points: [
        {
          title: "Standardize Before You Scale",
          desc: "Document your core fulfillment processes into repeatable checklists so service quality remains consistent.",
        },
        {
          title: "Focus on High-Margin Customer Segments",
          desc: "Analyze your customer base to identify the 20% of clients who deliver 80% of your bottom-line profits.",
        },
        {
          title: "Establish Recurring & Repeat Revenue Streams",
          desc: "Introduce annual maintenance packages, retainer consulting, or VIP membership tiers to stabilize monthly cash flow.",
        },
      ],
      conclusion:
        "Sustainable growth is built on strong foundations, disciplined execution, and continuous customer listening.",
    },
  },
  {
    id: "art-5",
    title: "Choosing the Right CRM for Your Business",
    category: "Technology & Tools",
    tagLabel: "TECHNOLOGY & TOOLS",
    tagColor: "text-[#2563EB]",
    image: "./images/in-crm.jpg",
    excerpt:
      "A simple framework to evaluate and choose the right CRM based on your business size, industry and growth plans.",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "A CRM is only as good as the team using it. Many businesses overpay for complex enterprise tools when a streamlined solution would yield far better adoption.",
      points: [
        {
          title: "Match CRM Complexity to Sales Velocity",
          desc: "High-volume B2C businesses need automated WhatsApp integration; high-touch B2B consultancies need deal-stage pipeline tracking.",
        },
        {
          title: "Prioritize Team Usability & Mobile Access",
          desc: "If your sales team finds data entry cumbersome on mobile, your pipeline data will be inaccurate and outdated.",
        },
        {
          title: "Verify Native API & Webhook Capabilities",
          desc: "Ensure the CRM easily connects to your advertising channels, landing pages, email marketing, and ERP systems.",
        },
      ],
      conclusion:
        "Pick the simplest system that meets 90% of your current operational needs and offers room to scale.",
    },
  },
  {
    id: "art-6",
    title: "Why Continuous Learning Matters for Business Owners",
    category: "Business Strategy",
    tagLabel: "LEADERSHIP",
    tagColor: "text-[#9333EA]",
    image: "./images/in-learning.jpg",
    excerpt:
      "In a world of constant change, curiosity and continuous learning help you make better decisions and stay ahead.",
    date: "Jul 20, 2026",
    readTime: "4 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "The greatest business risk is assuming yesterday's successful playbook will continue to deliver tomorrow's growth in a changing market.",
      points: [
        {
          title: "Cross-Pollinate Insights from Other Industries",
          desc: "The most innovative solutions often come from adapting a proven strategy from an entirely different industry into your own sector.",
        },
        {
          title: "Maintain Hands-On Curiosity with Emerging Tech",
          desc: "Business leaders don't need to write code, but they must understand what modern automation and AI tools can achieve.",
        },
        {
          title: "Listen to Customer Friction Points Directly",
          desc: "Spend time speaking directly with frontline staff and clients to discover operational bottlenecks before they show up in revenue drop-offs.",
        },
      ],
      conclusion:
        "Curiosity and a willingness to unlearn outdated habits are the ultimate executive competitive advantages.",
    },
  },
  {
    id: "art-7",
    title: "ESG and Sustainable Growth – A Real Business Opportunity",
    category: "Business Strategy",
    tagLabel: "BUSINESS GROWTH",
    tagColor: "text-[#16A34A]",
    image: "./images/in-esg.jpg",
    excerpt:
      "Why environmental, social and governance (ESG) practices are not just good ethics, but also good business.",
    date: "Jul 12, 2026",
    readTime: "5 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "Sustainability is rapidly evolving from a compliance checkbox into a key differentiator that attracts tier-1 enterprise clients and institutional investors.",
      points: [
        {
          title: "Operational Efficiency & Waste Reduction",
          desc: "Transitioning to paperless digital workflows, cloud operations, and energy-conscious logistics directly reduces recurring overhead.",
        },
        {
          title: "Preferred Supplier Advantage in Global Supply Chains",
          desc: "Multinational corporations increasingly mandate ESG compliance across their tier-1 and tier-2 vendor ecosystems.",
        },
        {
          title: "Talent Attraction and Retention",
          desc: "Top professional talent actively prefers working with organizations that demonstrate values, transparency, and ethical governance.",
        },
      ],
      conclusion:
        "Sustainable business practices protect your margin, strengthen your reputation, and de-risk your long-term growth.",
    },
  },
  {
    id: "art-8",
    title: "Common Mistakes That Hold Businesses Back",
    category: "SMEs & Startups",
    tagLabel: "SMES & STARTUPS",
    tagColor: "text-[#2563EB]",
    image: "./images/in-mistakes.jpg",
    excerpt:
      "Insights from real business scenarios on what to avoid and how to build stronger, more resilient businesses.",
    date: "Jul 5, 2026",
    readTime: "5 min read",
    author: "Sanjay Kumar",
    content: {
      intro:
        "Having consulted across hundreds of enterprises and growing SMEs, the barriers to scale are rarely lack of effort — they are strategic blind spots.",
      points: [
        {
          title: "Treating Marketing as an Expense Instead of an Engine",
          desc: "Businesses that view marketing as an inconsistent tap rather than an always-on predictable client acquisition engine struggle with revenue rollercoasters.",
        },
        {
          title: "Failing to Automate Follow-Up Sequences",
          desc: "Over 60% of buyers require 5+ touchpoints before purchasing, yet most businesses abandon inquiries after a single unanswered message.",
        },
        {
          title: "Owner Bottleneck in Daily Operations",
          desc: "When every approval, estimate, and customer email must pass through the founder, company growth hard-caps at the owner's available hours.",
        },
      ],
      conclusion:
        "Identify the bottlenecks holding your operations back, install automated systems, and empower your team to drive results.",
    },
  },
];

const CATEGORIES_FILTER = [
  { id: "All", label: "All", icon: null },
  { id: "Business Strategy", label: "Business Strategy", icon: Target, iconColor: "text-red-500" },
  { id: "Digital Marketing", label: "Digital Marketing", icon: Megaphone, iconColor: "text-blue-500" },
  { id: "Technology & Tools", label: "Technology & Tools", icon: Settings, iconColor: "text-purple-500" },
  { id: "AI & Automation", label: "AI & Automation", icon: Bot, iconColor: "text-blue-500" },
  { id: "Healthcare", label: "Healthcare", icon: Heart, iconColor: "text-red-500" },
  { id: "SMEs & Startups", label: "SMEs & Startups", icon: Rocket, iconColor: "text-purple-500" },
];

export const Insights: React.FC<InsightsProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  // Filtered articles based on category pill & search query
  const filteredArticles = useMemo(() => {
    return ARTICLES_LIST.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" ||
        art.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(art.category.toLowerCase());

      const matchesSearch =
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim()) return;
    setSubscribedSuccess(true);
    setSubscriberEmail("");
    setTimeout(() => {
      setSubscribedSuccess(false);
    }, 5000);
  };

  const scrollToArticles = () => {
    const el = document.getElementById("articles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-white min-h-screen text-slate-800">

      {/* ========================================================
          1. HERO SECTION: 1:1 Match to Mockup Design
          ======================================================== */}
      <section className="relative overflow-hidden bg-white pt-4 pb-8 sm:pt-8 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Heading, Subtext, Buttons */}
            <div className="lg:col-span-6 text-left">
              {/* Tag */}
              <span className="text-xs font-bold tracking-[0.22em] text-slate-500 uppercase block mb-3.5">
                INSIGHTS & IDEAS
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0A2540] tracking-tight leading-[1.12] mb-5">
                Practical Insights <br />
                <span className="text-[#E31E24]">for a Smarter Tomorrow</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg mb-8">
                Thoughts, strategies and practical ideas on business growth, technology, marketing, automation and AI – based on real-world experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <button
                  onClick={scrollToArticles}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E31E24] text-white font-bold text-sm shadow-sm hover:bg-[#C8171D] transition-colors cursor-pointer group"
                >
                  <span>Explore Articles</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("newsletter-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-slate-300 text-[#0A2540] font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer group shadow-2xs"
                >
                  <Bell className="w-4 h-4 mr-2 text-slate-600" />
                  <span>Get Updates</span>
                </button>
              </div>
            </div>

            {/* Right Column: Exact Visual Artwork (Coffee Mug + Stack of Books + Quote Card) */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src="./images/insights-hero-right-hd.png"
                alt="Good Ideas Build Better Businesses - Sanjay Kumar"
                className="w-full h-auto max-w-[580px] object-contain select-none"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. CATEGORY FILTER & SEARCH BAR
          ======================================================== */}
      <section className="py-5 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 sm:gap-2.5 pb-2 sm:pb-0 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {CATEGORIES_FILTER.map((cat) => {
                const IconComp = cat.icon;
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0A2540] text-white shadow-xs font-bold"
                        : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {IconComp && (
                      <IconComp
                        className={`w-3.5 h-3.5 ${
                          isActive ? "text-white" : cat.iconColor
                        }`}
                      />
                    )}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Search Box */}
            <div className="relative w-full lg:w-64 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. FEATURED ARTICLE SECTION: Large Split Card
          ======================================================== */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <h2 className="text-lg sm:text-xl font-extrabold text-[#0A2540] mb-4">
            Featured Article
          </h2>

          <div
            onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all grid grid-cols-1 md:grid-cols-12 items-stretch group cursor-pointer"
          >
            {/* Left Image Column with Overlay */}
            <div className="md:col-span-6 lg:col-span-7 relative min-h-[220px] sm:min-h-[280px] overflow-hidden bg-slate-900">
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top-Left Featured Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase bg-[#E31E24] text-white shadow-xs">
                  FEATURED
                </span>
              </div>

              {/* Bottom-Left Handwriting Title Overlay */}
              <div className="absolute bottom-5 left-5 z-10 text-white select-none">
                <div className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                  <p>From Vision</p>
                  <p>to Measurable</p>
                  <div className="relative inline-block">
                    <span>Growth</span>
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#E31E24]"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,8 Q50,1 98,7"
                        stroke="#E31E24"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block">
                  {FEATURED_ARTICLE.tagLabel}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-tight">
                  {FEATURED_ARTICLE.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {FEATURED_ARTICLE.excerpt}
                </p>
              </div>

              {/* Author & Read Time Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src="./images/sanjay-kumar-hd.jpg"
                    alt="Sanjay Kumar"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "./images/sanjay-about-hd.jpg";
                    }}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] leading-none">
                      {FEATURED_ARTICLE.author}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {FEATURED_ARTICLE.date} • {FEATURED_ARTICLE.readTime}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center text-xs sm:text-sm font-bold text-[#1677FF] group-hover:text-[#0A2540] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          4. LATEST INSIGHTS GRID: 8 Cards (4x2 Layout)
          ======================================================== */}
      <section id="articles-section" className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
          
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
              Latest Insights
            </h2>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs sm:text-sm font-bold text-[#1677FF] hover:text-[#0A2540] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 8 Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between text-left group cursor-pointer"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 select-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <span className={`text-[11px] font-extrabold tracking-wider uppercase block ${article.tagColor}`}>
                      {article.tagLabel}
                    </span>

                    <h3 className="text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#E31E24] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer: Date & Read More */}
                <div className="p-4 sm:p-5 pt-0 space-y-2">
                  <p className="text-[11px] text-slate-400 font-medium">
                    {article.date} • {article.readTime}
                  </p>

                  <div className="inline-flex items-center text-xs font-bold text-[#1677FF] group-hover:text-[#0A2540] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-sm font-semibold">
                No articles match your search or filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 px-4 py-2 bg-[#0A2540] text-white rounded-lg text-xs font-bold hover:bg-[#E31E24] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          5. NEWSLETTER SUBSCRIPTION BANNER
          ======================================================== */}
      <section id="newsletter-section" className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
            
            {/* Left: Paper Plane Icon + Heading */}
            <div className="flex items-center space-x-4 max-w-md">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31E24] shrink-0 shadow-2xs">
                <Send className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] leading-snug">
                  Get New Insights in Your Inbox
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                  Join my newsletter to receive practical business, technology and growth insights.
                </p>
              </div>
            </div>

            {/* Middle: Email Form */}
            <div className="w-full lg:max-w-md">
              <form onSubmit={handleSubscribe} className="space-y-1.5">
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
                  <input
                    type="email"
                    required
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-all shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="w-full xs:w-auto px-5 py-2.5 bg-[#E31E24] text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-[#C8171D] transition-colors cursor-pointer shrink-0 shadow-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  {subscribedSuccess ? (
                    <span className="text-emerald-600 font-bold">
                      ✓ Successfully subscribed! Thank you.
                    </span>
                  ) : (
                    "No spam. Unsubscribe anytime."
                  )}
                </p>
              </form>
            </div>

            {/* Right: Ideas Insights Action Handwriting */}
            <div className="flex items-center space-x-3 select-none">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                <Lightbulb className="w-6 h-6 fill-amber-400 text-amber-500" />
              </div>
              <div className="font-handwriting text-2xl sm:text-[28px] text-slate-800 font-bold leading-tight rotate-[-3deg]">
                <p>Ideas</p>
                <p className="ml-1">Insights</p>
                <div className="relative inline-block ml-2">
                  <span>Action</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2.5 text-[#E31E24]"
                    viewBox="0 0 100 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2,8 Q50,1 98,7"
                      stroke="#E31E24"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          6. MODAL: Article Full Reading View
          ======================================================== */}
      <AnimatePresence>
        {selectedArticle && (
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
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E31E24] text-white">
                    {selectedArticle.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 leading-snug">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-100 pb-3">
                  <span>Author: <strong className="text-slate-800">{selectedArticle.author}</strong></span>
                  <span>{selectedArticle.date} • {selectedArticle.readTime}</span>
                </div>

                {/* Intro */}
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedArticle.content.intro}
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {selectedArticle.content.points.map((pt, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <h4 className="text-sm font-bold text-[#0A2540]">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-100">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                    💡 Key Takeaway: {selectedArticle.content.conclusion}
                  </p>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      onOpenConsultation();
                    }}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[#E31E24] text-white font-bold text-sm hover:bg-[#C8171D] transition-colors cursor-pointer"
                  >
                    <span>Discuss Implementation with Sanjay</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <button
                    onClick={() => setSelectedArticle(null)}
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

export default Insights;
