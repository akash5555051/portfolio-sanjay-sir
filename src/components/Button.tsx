import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text" | "whatsapp";
  to?: string;
  href?: string;
  onClick?: () => void;
  withArrow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  withArrow = false,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#E31E24] text-white hover:bg-[#C8171D] shadow-sm rounded-lg px-6 py-3.5 text-sm sm:text-base",
    secondary:
      "bg-[#0A2540] text-white hover:bg-[#071A2E] shadow-sm rounded-lg px-6 py-3.5 text-sm sm:text-base",
    outline:
      "bg-white border border-slate-300 text-[#0A2540] hover:bg-slate-50 hover:border-slate-400 rounded-lg px-5 sm:px-6 py-3.5 text-sm sm:text-base shadow-2xs",
    text: "text-[#0A2540] hover:text-[#E31E24] px-2 py-1.5 text-sm",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BA5A] rounded-xl px-5 py-3 text-sm shadow-sm",
  };

  const combined = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combined}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${combined}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combined}`}
    >
      {content}
    </button>
  );
};
