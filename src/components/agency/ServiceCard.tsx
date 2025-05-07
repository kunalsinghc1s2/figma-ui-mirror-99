
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceData } from './ServiceModal';

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  // Ensure we have the required service data
  if (!service) {
    return null;
  }
  
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = '/placeholder.svg'; // Use a placeholder image
    target.classList.add('loaded');
  };

  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer shadow-lg hover:shadow-purple-500/10"
      onClick={() => onClick(service)}
    >
      {/* Service image */}
      <div className="aspect-video w-full mb-4 sm:mb-6 overflow-hidden rounded-lg">
        <img 
          src={service.image || '/placeholder.svg'} 
          alt={service.title || 'Service'} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
          onError={handleImageError}
        />
      </div>
      
      <div className="bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl p-3 sm:p-4 shadow-lg shadow-purple-500/20 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
        {service.icon || null}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title || 'Service'}</h3>
      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        {service.description ? `${service.description.substring(0, 120)}...` : 'No description available'}
      </p>
      
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center text-purple-400 font-medium text-sm sm:text-base"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};
