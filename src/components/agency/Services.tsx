
import React from 'react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "Tailored solutions that perfectly align with your business needs and goals.",
      icon: "💻",
      color: "from-purple-500 to-indigo-600",
      delay: 0.1
    },
    {
      id: 2,
      title: "Real Estate Websites",
      description: "Modern property listing sites with advanced search and filtering capabilities.",
      icon: "🏠",
      color: "from-cyan-500 to-blue-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "Clinic & Healthcare Sites",
      description: "Patient-friendly interfaces with secure appointment booking systems.",
      icon: "🏥",
      color: "from-green-500 to-emerald-600",
      delay: 0.3
    },
    {
      id: 4,
      title: "Digital Agency Solutions",
      description: "Showcase your creative work with pixel-perfect portfolio websites.",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      delay: 0.4
    },
    {
      id: 5,
      title: "E-Commerce Platforms",
      description: "Highly converting online stores with seamless checkout experiences.",
      icon: "🛒",
      color: "from-amber-500 to-orange-600",
      delay: 0.5
    },
    {
      id: 6,
      title: "Pet Service Websites",
      description: "Engaging platforms for pet services with booking and customer management.",
      icon: "🐾",
      color: "from-violet-500 to-purple-600",
      delay: 0.6
    },
    {
      id: 7,
      title: "Portfolio Websites",
      description: "Stunning personal or company portfolios that showcase your best work.",
      icon: "📂",
      color: "from-blue-500 to-indigo-600",
      delay: 0.7
    },
    {
      id: 8,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your conversion rates.",
      icon: "🚀",
      color: "from-teal-500 to-green-600",
      delay: 0.8
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What We Do Best</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            We offer a comprehensive range of web development services tailored to meet the unique needs of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 
                        transition-all group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 
                              transition-opacity duration-300`} />
              
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-5 
                              backdrop-blur-sm text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
              
              <div className="mt-5 flex items-center text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transform 
                            translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
