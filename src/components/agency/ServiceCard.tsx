
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceData } from './ServiceModal';

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer shadow-lg hover:shadow-purple-500/10"
      onClick={() => onClick(service)}
    >
      <div className="bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl p-4 shadow-lg shadow-purple-500/20 w-16 h-16 flex items-center justify-center mb-6">
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description.substring(0, 120)}...</p>
      
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center text-purple-400 font-medium"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};
