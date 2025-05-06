
import React from 'react';
import { Header } from '../components/home/Header';
import { Features } from '../components/home/Features';
import { Stats } from '../components/home/Stats';
import { CaseStudy } from '../components/home/CaseStudy';
import { Community } from '../components/home/Community';
import { Footer } from '../components/home/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <Header />
      <main className="flex flex-col items-center w-full max-w-[1200px] px-4">
        <Stats />
        <Features />
        <CaseStudy />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
