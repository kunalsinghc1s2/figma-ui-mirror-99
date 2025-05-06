
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Building Digital Experiences That Inspire",
    "Crafting Websites, Creating Success",
    "From Code to Conversion – We've Got You Covered",
    "Design. Develop. Dominate."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-[150px] animate-pulse" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-5 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-sm font-medium">We're open for new projects</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Web Development Agency For
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 ml-3">
              Modern Brands
            </span>
          </motion.h1>

          <motion.div 
            key={currentTagline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="h-12 flex items-center justify-center mb-8"
          >
            <h2 className="text-xl md:text-3xl font-light text-gray-300">
              {taglines[currentTagline]}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mb-10"
          >
            We help businesses transform their digital presence with custom, high-performing
            websites that convert visitors into loyal customers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 
                        text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/30 border-0 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
            
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-[8px] h-[8px] rounded-full bg-white mb-5"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
