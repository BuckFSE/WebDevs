import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type FooterProps = {
  onServicesClick: () => void;
  onPortfolioClick: () => void;
  onTestimonialsClick: () => void;
  onPricingClick: () => void;
  onContactClick: () => void;
};

export default function Footer({
  onServicesClick,
  onPortfolioClick,
  onTestimonialsClick,
  onPricingClick,
  onContactClick
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-xl font-bold text-white">DevCraft</span>
            </div>
            <p className="text-gray-400 mb-6">
              We combine technical expertise and creative thinking to build web applications that drive business growth and deliver exceptional user experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><button onClick={onServicesClick} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={onPortfolioClick} className="text-gray-400 hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={onTestimonialsClick} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={onPricingClick} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={onContactClick} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UX/UI Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Consulting</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-white placeholder-gray-500" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DevCraft. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
