
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/agency/Navbar';
import { Hero } from '../components/agency/Hero';
import { Services } from '../components/agency/Services';
import { Portfolio } from '../components/agency/Portfolio';
import { Testimonials } from '../components/agency/Testimonials';
import { AboutUs } from '../components/agency/AboutUs';
import { Contact } from '../components/agency/Contact';
import { Footer } from '../components/agency/Footer';
import { WhatsAppButton } from '../components/agency/WhatsAppButton';
import { AnimatePresence } from 'framer-motion';

const Index: React.FC = () => {
  // State to track if page is loaded (to prevent reloading issues)
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handler to update image loading
  const handleImageLoad = () => {
    try {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.complete) img.classList.add('loaded');
      });
    } catch (error) {
      console.error('Error handling image load:', error);
    }
  };
  
  // Set loaded state after component mounts and handle images
  useEffect(() => {
    // Safely set the loaded state
    try {
      setIsLoaded(true);
      
      // Add event listener for images already loaded
      window.addEventListener('load', handleImageLoad);
      handleImageLoad();
      
      // Clean up
      return () => {
        window.removeEventListener('load', handleImageLoad);
      };
    } catch (error) {
      console.error('Error in Index component effect:', error);
      // Ensure we still set isLoaded even if there's an error
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      {/* Wrap the main content in an error boundary */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+918700450775" />
    </div>
  );
};

export default Index;
