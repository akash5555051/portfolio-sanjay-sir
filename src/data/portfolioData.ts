import { SERVICES, ServiceItem } from "./services";
import { INDUSTRIES, IndustryItem } from "./industries";
import { PROCESS_STEPS, ProcessStep } from "./process";
import { TESTIMONIALS, TestimonialItem } from "./testimonials";
import { CASE_STUDIES, CaseStudy } from "./caseStudies";
import { INSIGHTS, InsightArticle } from "./insights";

export {
  SERVICES,
  INDUSTRIES,
  PROCESS_STEPS,
  TESTIMONIALS,
  CASE_STUDIES,
  INSIGHTS,
};

export type {
  ServiceItem,
  IndustryItem,
  ProcessStep,
  TestimonialItem,
  CaseStudy,
  InsightArticle,
};

export interface MetricItem {
  number: string;
  title: string;
  subtitle: string;
  iconName: "Trophy" | "Users" | "Target" | "TrendingUp";
}

export const PROFILE_DATA = {
  name: "Sanjay Kumar",
  subTitle: "Business Technology & Growth Consultant",
  founderBrand: "BizTechX",
  experienceYears: "20+",
  tagline: "STRATEGY  |  TECHNOLOGY  |  MARKETING  |  AUTOMATION  |  GROWTH",
  heroHeading: {
    part1: "Turning Ideas into",
    highlight: "Real",
    part2: "Business Growth"
  },
  heroSubtext: "I help businesses use technology, digital marketing and automation to acquire more customers, improve operations and build sustainable growth systems.",
  heroQuote: "My purpose is to help businesses grow with the right mix of strategy, technology and execution.",
  whatsappNumber: "+91 89358 00557",
  whatsappLink: "https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20business%20growth%20consultation.",
  email: "sanjay@biztechx.com",
  location: "India",
  socials: {
    linkedin: "https://linkedin.com/in/sanjaykumar-growth",
    whatsapp: "https://wa.me/918935800557",
    email: "mailto:sanjay@biztechx.com",
    youtube: "https://youtube.com/@sanjaykumar-growth"
  }
};

export const METRICS: MetricItem[] = [
  {
    number: "20+ Years",
    title: "Business & Technology Experience",
    subtitle: "Enterprise leadership and practical consulting across global organizations & growing SMEs.",
    iconName: "Trophy"
  },
  {
    number: "Multiple Industries",
    title: "Healthcare | Manufacturing",
    subtitle: "Services | Professional Businesses",
    iconName: "Users"
  },
  {
    number: "BizTechX",
    title: "Founder & Consultant",
    subtitle: "Business Growth Solutions",
    iconName: "Target"
  },
  {
    number: "Growth Systems",
    title: "Marketing | CRM | Automation",
    subtitle: "AI | Digital Transformation",
    iconName: "TrendingUp"
  }
];

export const TRUSTED_SECTORS = [
  { name: "Healthcare Business", icon: "Activity" },
  { name: "SME Business", icon: "Settings" },
  { name: "Professional Services", icon: "Users" },
  { name: "Startups", icon: "Rocket" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Technology", icon: "Box" }
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];
