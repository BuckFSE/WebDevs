import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type CTAProps = {
  onContactClick: () => void;
};

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl opacity-90 mb-10">
            Let's collaborate to create something extraordinary that exceeds your expectations and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={onContactClick}
              className="bg-primary hover:bg-blue-600 text-white" 
              size="lg"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white" 
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
