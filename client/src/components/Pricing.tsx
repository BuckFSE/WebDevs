import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { pricing } from "@/lib/constants";
import { motion } from "framer-motion";

type PricingProps = {
  onContactClick: () => void;
};

export default function Pricing({ onContactClick }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  
  const handleBillingToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Pricing</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Transparent Pricing Plans</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Choose the perfect plan for your project needs with our flexible options.
          </p>
        </div>
        
        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className="text-gray-700 font-medium">Monthly</span>
          <div className="mx-4">
            <Switch 
              checked={isYearly} 
              onCheckedChange={handleBillingToggle}
              aria-label="Toggle billing cycle"
            />
          </div>
          <span className="text-gray-700 font-medium">
            Yearly <span className="text-emerald-500 text-sm ml-1">Save 20%</span>
          </span>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => {
            const isPopular = plan.popular;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${isPopular ? 'z-10 transform scale-105 md:scale-105' : ''}`}
              >
                <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isPopular ? 'border-2 border-primary' : 'border border-gray-200'
                }`}>
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-sm py-1 px-4 rounded-bl-lg font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <CardContent className="p-8 text-center flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex justify-center items-baseline mb-6">
                      <span className="text-5xl font-extrabold text-gray-900">${price}</span>
                      <span className="text-gray-500 ml-2">/project</span>
                    </div>
                    <p className="text-gray-600 mb-8">{plan.description}</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.included ? (
                            <CheckIcon className="w-5 h-5 text-emerald-500 mr-2" />
                          ) : (
                            <XIcon className="w-5 h-5 mr-2" />
                          )}
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="p-8 bg-gray-50 text-center">
                    <Button 
                      onClick={onContactClick}
                      className={`w-full ${
                        isPopular
                          ? 'bg-primary hover:bg-blue-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
