import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Our Work</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our latest work showcasing the depth and breadth of our capabilities.
          </p>
        </div>
        
        {/* Project Filters */}
        
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                >
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{project.technologies}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-blue-600 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
