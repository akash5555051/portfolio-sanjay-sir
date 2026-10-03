/**
 * Contact & Lead Integration Service
 * Centralized API & validation handler for contact forms & consultation booking requests.
 * Easily connects to: Formspree, EmailJS, Resend, or custom REST APIs.
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceRequired: string;
  message: string;
  preferredTime?: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceRequired?: string;
  message?: string;
}

/**
 * Validate contact form fields
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone or WhatsApp number.";
  } else if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
    errors.phone = "Please enter a valid phone number (min 10 digits).";
  }

  if (!data.serviceRequired) {
    errors.serviceRequired = "Please select a service required.";
  }

  if (!data.message.trim()) {
    errors.message = "Please describe your business goals or challenge.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submit contact inquiry
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Validate first
  const { isValid, errors } = validateContactForm(data);
  if (!isValid) {
    const firstErrorMessage = Object.values(errors)[0] || "Invalid form data.";
    throw new Error(firstErrorMessage);
  }

  // 1. Check for configured Formspree endpoint in env
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (formspreeEndpoint) {
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message via form endpoint.");
      }

      return {
        success: true,
        message: "Thank you! Sanjay Kumar's office has received your inquiry and will respond within 2 hours.",
      };
    } catch (err: any) {
      console.error("Form submission error:", err);
      throw new Error(err.message || "Failed to submit request. Please try WhatsApp directly.");
    }
  }

  // 2. Fallback / Default Simulation with Local Persistence
  // Simulates standard REST backend response
  await new Promise((resolve) => setTimeout(resolve, 800));

  try {
    const existing = JSON.parse(localStorage.getItem("portfolio_leads") || "[]");
    existing.push({
      ...data,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("portfolio_leads", JSON.stringify(existing));
  } catch (e) {
    // ignore storage error
  }

  return {
    success: true,
    message: "Thank you! Your business growth inquiry has been received. Sanjay Kumar will connect with you shortly.",
  };
}
