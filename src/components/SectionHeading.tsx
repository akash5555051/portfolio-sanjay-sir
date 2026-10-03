import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  rightLinkText?: string;
  rightLinkTo?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  rightLinkText,
  rightLinkTo,
  centered = false,
}) => {
  return (
    <div
      className={`mb-10 sm:mb-12 ${
        centered
          ? "text-center max-w-2xl mx-auto"
          : "flex flex-col sm:flex-row sm:items-end justify-between space-y-4 sm:space-y-0"
      }`}
    >
      <div className="space-y-1.5 text-left">
        <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase block">
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
          {title}
          {highlight && <span className="text-[#E31E24]"> {highlight}</span>}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {rightLinkText && rightLinkTo && (
        <Link
          to={rightLinkTo}
          className="inline-flex items-center text-sm font-semibold text-[#1677FF] hover:text-[#0A2540] transition-colors group"
        >
          <span>{rightLinkText}</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};
