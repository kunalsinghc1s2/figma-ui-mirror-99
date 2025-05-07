
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Animated taglines
  const taglines = [
    "Code. Create. Conquer.",
    "Websites That Launch Businesses.",
    "Brilliant Code, Stunning Designs.",
    "We Speak fluent HTML & CSS – And Your Customers' Language.",
    "Designing Pixels, Building Dreams.",
    "From Zero to Website Hero.",
    "Where AI Meets UI – Seamless Web Magic.",
    "Smarter Code. Faster Loads. Better Results.",
    "The Web, Perfected.",
    "We Break the Internet (In a Good Way).",
    "Your Website's Missing Piece? Us.",
    "No Bugs, Just Brilliance."
  ];
  
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (displayText.length < taglines[currentTagline].length) {
        timer = setTimeout(() => {
          setDisplayText(taglines[currentTagline].slice(0, displayText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentTagline, taglines]);

  // Smooth scroll function
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-indigo-950/30 to-zinc-950 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        
        {/* Animated particles/background elements */}
        <motion.div 
          className="absolute top-20 -left-20 w-80 h-80 bg-purple-600/40 rounded-full filter blur-[100px]"
          animate={{
            x: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/30 rounded-full filter blur-[100px]"
          animate={{
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            Building Digital Experiences That Inspire
          </motion.h1>
          
          <motion.div 
            variants={item}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto h-24 flex items-center justify-center"
          >
            <div className="relative">
              <span className="text-gradient-primary text-2xl font-medium">{displayText}</span>
              <motion.span 
                className="absolute right-[-8px] top-0 h-full w-[2px] bg-cyan-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              ></motion.span>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white py-6 px-8 rounded-xl text-lg shadow-lg shadow-purple-600/30 border-0 group relative overflow-hidden"
              >
                <span className="relative z-10">Let's Build</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20 z-0"
                  initial={{ x: "-100%" }}
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="rgba(139, 92, 246, 0.15)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
