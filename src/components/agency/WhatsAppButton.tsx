
import React from 'react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber: string;
  text?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, text = "Get Free Consultation" }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  return (
    <div className="fixed-buttons">
      {/* Regular floating WhatsApp button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] rounded-full p-3.5 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 400, damping: 15 }}
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="white" 
          className="w-6 h-6"
        >
          <path 
            fillRule="evenodd" 
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
            clipRule="evenodd" 
          />
        </svg>
      </motion.a>

      {/* Consultation button (optional based on text parameter) */}
      {text && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 z-40 bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-2 px-4 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 15 }}
        >
          {text}
        </motion.a>
      )}
    </div>
  );
};
