
import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

interface ServiceModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onGetStarted
}) => {
  if (!service || !isOpen) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-zinc-900/95 border border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={handleContentClick}
          >
            <div className="relative">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-90"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-br from-purple-600 to-cyan-500 p-6 rounded-full shadow-lg shadow-purple-600/30">
                  {service.icon}
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute right-4 top-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">{service.title}</h3>
              
              <div className="mb-6">
                <p className="text-gray-300 text-center">{service.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium text-purple-400 mb-4">What We Offer:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={onGetStarted}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 h-auto text-base font-medium rounded-lg"
                  >
                    Get Started With This Service
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
