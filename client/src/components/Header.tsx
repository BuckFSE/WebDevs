import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  onServicesClick: () => void;
  onPortfolioClick: () => void;
  onTestimonialsClick: () => void;
  onPricingClick: () => void;
  onContactClick: () => void;
};

export default function Header({
  onServicesClick,
  onPortfolioClick,
  onTestimonialsClick,
  onPricingClick,
  onContactClick
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (clickHandler: () => void) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    clickHandler();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-xl font-bold text-gray-900">DevCraft</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick(onServicesClick)} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => handleNavClick(onPortfolioClick)} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => handleNavClick(onTestimonialsClick)} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => handleNavClick(onPricingClick)} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Pricing
            </button>
          </div>
          
          <Button 
            onClick={() => handleNavClick(onContactClick)} 
            className="hidden md:block bg-primary hover:bg-blue-600 text-white"
          >
            Get in Touch
          </Button>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-2"
            >
              <button onClick={() => handleNavClick(onServicesClick)} className="block py-2 text-gray-700 font-medium hover:text-primary w-full text-left">
                Services
              </button>
              <button onClick={() => handleNavClick(onPortfolioClick)} className="block py-2 text-gray-700 font-medium hover:text-primary w-full text-left">
                Portfolio
              </button>
              <button onClick={() => handleNavClick(onTestimonialsClick)} className="block py-2 text-gray-700 font-medium hover:text-primary w-full text-left">
                Testimonials
              </button>
              <button onClick={() => handleNavClick(onPricingClick)} className="block py-2 text-gray-700 font-medium hover:text-primary w-full text-left">
                Pricing
              </button>
              <Button 
                onClick={() => handleNavClick(onContactClick)} 
                className="block w-full mt-2 bg-primary hover:bg-blue-600 text-white"
              >
                Get in Touch
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
