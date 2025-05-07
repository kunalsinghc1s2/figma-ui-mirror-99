
import React, { useState, useRef } from 'react';
import { Navbar } from '../components/agency/Navbar';
import { Hero } from '../components/agency/Hero';
import { Services } from '../components/agency/Services';
import { Portfolio } from '../components/agency/Portfolio';
import { Testimonials } from '../components/agency/Testimonials';
import { AboutUs } from '../components/agency/AboutUs';
import { Contact } from '../components/agency/Contact';
import { Footer } from '../components/agency/Footer';
import { WhatsAppButton } from '../components/agency/WhatsAppButton';
import { useInView } from 'framer-motion';

const Index: React.FC = () => {
  // Refs for scroll optimization
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Use InView to conditionally render sections based on viewport
  const servicesInView = useInView(servicesSectionRef, { once: false, amount: 0.1 });
  const portfolioInView = useInView(portfolioSectionRef, { once: false, amount: 0.1 });
  const testimonialsInView = useInView(testimonialsSectionRef, { once: false, amount: 0.1 });
  const aboutInView = useInView(aboutSectionRef, { once: false, amount: 0.1 });
  const contactInView = useInView(contactSectionRef, { once: false, amount: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <div ref={servicesSectionRef}>
          {/* Only fully initialize the component when it's close to viewport */}
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
      <Footer />
      <WhatsAppButton phoneNumber="8700450775" />
    </div>
  );
};

export default Index;
