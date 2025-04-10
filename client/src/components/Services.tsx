import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/constants";
import { motion } from "framer-motion";
import { 
  LayoutIcon, 
  SettingsIcon, 
  ShieldIcon, 
  DatabaseIcon, 
  CodeIcon, 
  ZapIcon 
} from "lucide-react";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <LayoutIcon className="w-12 h-12" />;
      case 'settings':
        return <SettingsIcon className="w-12 h-12" />;
      case 'shield':
        return <ShieldIcon className="w-12 h-12" />;
      case 'database':
        return <DatabaseIcon className="w-12 h-12" />;
      case 'code':
        return <CodeIcon className="w-12 h-12" />;
      case 'zap':
        return <ZapIcon className="w-12 h-12" />;
      default:
        return <LayoutIcon className="w-12 h-12" />;
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">What We Do</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Our Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We combine technical expertise and creative thinking to deliver solutions that drive business growth.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-5">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-block font-medium text-primary hover:text-blue-700 transition-colors">
                Learn more 
                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
