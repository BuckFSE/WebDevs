import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type HeroProps = {
  onPortfolioClick: () => void;
  onContactClick: () => void;
};

export default function Hero({ onPortfolioClick, onContactClick }: HeroProps) {
  return (
    <section className="relative text-white pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden" 
      style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            We Build Digital Experiences That Drive Results
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl opacity-90 mb-10"
          >
            Expert web development consultancy to transform your ideas into powerful, scalable solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Button 
              onClick={onPortfolioClick}
              className="bg-white hover:bg-gray-100 text-primary"
              size="lg"
            >
              View Our Work
            </Button>
            
            <Button 
              onClick={onContactClick}
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white" 
              size="lg"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="text-gray-50 fill-current h-16 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
