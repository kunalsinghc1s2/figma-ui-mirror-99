
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'app', label: 'Web Apps' },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      client: "FashionHub",
    },
    {
      id: 2,
      title: "Real Estate Listing Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      client: "PropertyMasters",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "app",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      client: "MediCare Clinic",
    },
    {
      id: 4,
      title: "Creative Agency Portfolio",
      category: "web",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      client: "ArtistryLabs",
    },
    {
      id: 5,
      title: "Pet Services Booking Platform",
      category: "app",
      image: "https://images.unsplash.com/photo-1583511655826-05700a52f0d3",
      client: "PetPals",
    },
    {
      id: 6,
      title: "Online Learning Dashboard",
      category: "app",
      image: "https://images.unsplash.com/photo-1587691592099-24045742c181",
      client: "EduTech Solutions",
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-pink-400 mb-3">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            Browse our collection of work that demonstrates our expertise and creativity in building amazing digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`
                  ${activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-0 text-white' 
                    : 'border-white/20 text-white hover:bg-white/10 hover:text-white'}
                `}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <span className="text-pink-400 text-sm font-medium">{project.client}</span>
                  <h4 className="text-xl font-semibold text-white mt-1">{project.title}</h4>
                  
                  <div className="mt-4 flex items-center">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-0"
                    >
                      <span className="flex items-center">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
