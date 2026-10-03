export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Sanjay brings a rare combination of business understanding, technology knowledge and practical execution. He helped us create a structured marketing and lead management system which has made a real difference to our business.",
    name: "Dr. Amit Verma",
    role: "Director",
    company: "Healthcare Group",
    avatar: "/images/testimonial-dr-amit-ultra-hd.jpg"
  },
  {
    id: "t2",
    quote: "Working with Sanjay completely transformed our customer acquisition model. His approach to digital transformation and automation saved us hundreds of manual labor hours every month while boosting our revenue by 48%.",
    name: "Rajesh Malhotra",
    role: "Managing Director",
    company: "Apex Precision Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t3",
    quote: "The strategic growth roadmap created by BizTechX gave our firm unmatched clarity. Sanjay doesn't just consult — he ensures every tool, automation, and campaign delivers measurable business ROI.",
    name: "Priya Sharma",
    role: "Senior Partner",
    company: "Synergy Global Advisory",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  }
];
