
import React, { useState, useRef, useEffect } from 'react';
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
  
  // Refs for sections to optimize rendering
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      <AnimatePresence>
        {isLoaded && (
          <main>
            <div ref={heroSectionRef}>
              <Hero />
            </div>
            
            <div ref={servicesSectionRef}>
              <Services />
            </div>
            
            <div ref={portfolioSectionRef}>
              <Portfolio />
            </div>
            
            <div ref={testimonialsSectionRef}>
              <Testimonials />
            </div>
            
            <div ref={aboutSectionRef}>
              <AboutUs />
            </div>
            
            <div ref={contactSectionRef}>
              <Contact />
            </div>
          </main>
        )}
      </AnimatePresence>
      <Footer />
      <WhatsAppButton phoneNumber="+918700450775" />
    </div>
  );
};

export default Index;
