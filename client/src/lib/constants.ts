import { ReactNode } from "react";
import { 
  LayoutIcon, 
  SettingsIcon, 
  ShieldIcon, 
  DatabaseIcon, 
  CodeIcon, 
  ZapIcon 
} from "lucide-react";

// Services Section
export const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with scalable architectures and modern frameworks to drive your business forward.",
    icon: "layout"
  },
  {
    title: "UX/UI Design",
    description: "User-centered design that creates intuitive and engaging experiences, turning visitors into loyal customers.",
    icon: "settings"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security solutions, ensuring your applications remain secure and compliant.",
    icon: "shield"
  },
  {
    title: "Database Architecture",
    description: "Scalable database solutions engineered for performance, with optimized queries and efficient data structures.",
    icon: "database"
  },
  {
    title: "API Development",
    description: "Robust, well-documented APIs that connect systems and enable seamless data exchange between applications.",
    icon: "code"
  },
  {
    title: "Performance Optimization",
    description: "Speed up your web applications with our expert optimization services, improving load times and user satisfaction.",
    icon: "zap"
  }
];

// Portfolio Section
export const projectCategories = [
  { id: "web", name: "Web Apps" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "mobile", name: "Mobile" }
];

export const projects = [
  {
    title: "AI Generator",
    category: "Saas",
    technologies: "React, Next, Tailwind, Stripe, Supabase, AI",
    imageUrl: "images/ai.png"
  },
  {
    title: "AI Generator",
    category: "Saas",
    technologies: "React, Next, Tailwind, Stripe, Supabase, AI",
    imageUrl: "images/ai2.png"
  },
  {
    title: "Clutch",
    category: "Music",
    technologies: "React, Next, Express, Node, Tailwind, Mui, Typescript, Google cloud, Docker, Mongoose, Mongodb",
    imageUrl: "images/clutch.png"
  },
  {
    title: "Khan Academy",
    category: "Education",
    technologies: "Html, Css",
    imageUrl: "images/academy.png"
  }
];

// Stats Section
export const stats = [
  { value: 120, label: "Projects Delivered", suffix: "+" },
  { value: 85, label: "Client Retention", suffix: "%" },
  { value: 15, label: "Team Members", suffix: "+" },
  { value: 8, label: "Years Experience", suffix: "" }
];

// Testimonials Section
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechVision",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    quote: "DevCraft transformed our business with their exceptional web development expertise. They delivered our e-commerce platform ahead of schedule and exceeded our expectations in every way."
  },
  {
    name: "Michael Anderson",
    position: "Founder, Innovate Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    quote: "Working with DevCraft has been a game-changer for our startup. Their team took our complex requirements and delivered a scalable solution that has become the backbone of our business."
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthX",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    quote: "The DevCraft team consistently delivers top-notch results. Their attention to detail and commitment to quality is unmatched. Our website redesign increased conversions by 40% within months."
  },
  {
    name: "David Kim",
    position: "CTO, HealthTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    quote: "DevCraft's expertise in healthcare applications is impressive. They understood our compliance requirements and delivered a secure platform that our patients and providers love using."
  }
];

// Pricing Section
export const pricing = [
  {
    name: "Starter",
    description: "Perfect for small business websites or landing pages.",
    monthlyPrice: "1,999",
    yearlyPrice: "1,599",
    features: [
      { text: "Up to 5 pages", included: true },
      { text: "Responsive design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form", included: true },
      { text: "Custom functionality", included: false },
      { text: "Database integration", included: false }
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for businesses needing advanced functionality.",
    monthlyPrice: "4,999",
    yearlyPrice: "3,999",
    features: [
      { text: "Up to 15 pages", included: true },
      { text: "Advanced responsive design", included: true },
      { text: "Comprehensive SEO", included: true },
      { text: "Custom forms & integrations", included: true },
      { text: "Custom functionality", included: true },
      { text: "Advanced analytics", included: false }
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large-scale applications with complex requirements.",
    monthlyPrice: "9,999",
    yearlyPrice: "7,999",
    features: [
      { text: "Unlimited pages", included: true },
      { text: "Premium design & animations", included: true },
      { text: "Advanced SEO strategy", included: true },
      { text: "Complex forms & workflows", included: true },
      { text: "Advanced custom functionality", included: true },
      { text: "Database & API integrations", included: true }
    ],
    buttonText: "Contact Us",
    popular: false
  }
];
