
import React from 'react';
import { Navbar } from '../components/agency/Navbar';
import { Hero } from '../components/agency/Hero';
import { Services } from '../components/agency/Services';
import { Portfolio } from '../components/agency/Portfolio';
import { Testimonials } from '../components/agency/Testimonials';
import { AboutUs } from '../components/agency/AboutUs';
import { Contact } from '../components/agency/Contact';
import { Footer } from '../components/agency/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-indigo-900/20 to-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
