// Project types
export interface Project {
  title: string;
  category: string;
  technologies: string;
  imageUrl: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

// Service types
export interface Service {
  title: string;
  description: string;
  icon: string;
}

// Testimonial types
export interface Testimonial {
  name: string;
  position: string;
  avatar: string;
  quote: string;
}

// Stat types
export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

// Pricing types
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  buttonText: string;
  popular: boolean;
}
