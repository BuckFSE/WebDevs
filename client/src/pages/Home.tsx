import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header 
        onServicesClick={() => scrollToSection(servicesRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero onPortfolioClick={() => scrollToSection(portfolioRef)} onContactClick={() => scrollToSection(contactRef)} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Stats />
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={pricingRef}>
        <Pricing onContactClick={() => scrollToSection(contactRef)} />
      </div>
      <CTA onContactClick={() => scrollToSection(contactRef)} />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer 
        onServicesClick={() => scrollToSection(servicesRef)}
        onPortfolioClick={() => scrollToSection(portfolioRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
  );
}
