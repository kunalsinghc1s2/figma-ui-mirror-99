
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export const AboutUs: React.FC = () => {
  const countRefs = {
    years: useRef(null),
    projects: useRef(null),
    clients: useRef(null),
    awards: useRef(null),
  };

  const yearCount = useMotionValue(0);
  const projectCount = useMotionValue(0);
  const clientCount = useMotionValue(0);
  const awardCount = useMotionValue(0);

  const yearDisplay = useTransform(yearCount, Math.round);
  const projectDisplay = useTransform(projectCount, Math.round);
  const clientDisplay = useTransform(clientCount, Math.round);
  const awardDisplay = useTransform(awardCount, Math.round);

  const yearsInView = useInView(countRefs.years, { once: true, amount: 0.5 });
  const projectsInView = useInView(countRefs.projects, { once: true, amount: 0.5 });
  const clientsInView = useInView(countRefs.clients, { once: true, amount: 0.5 });
  const awardsInView = useInView(countRefs.awards, { once: true, amount: 0.5 });

  useEffect(() => {
    if (yearsInView) {
      animate(yearCount, 10, { duration: 2 });
    }
  }, [yearsInView, yearCount]);

  useEffect(() => {
    if (projectsInView) {
      animate(projectCount, 250, { duration: 2 });
    }
  }, [projectsInView, projectCount]);

  useEffect(() => {
    if (clientsInView) {
      animate(clientCount, 120, { duration: 2 });
    }
  }, [clientsInView, clientCount]);

  useEffect(() => {
    if (awardsInView) {
      animate(awardCount, 15, { duration: 2 });
    }
  }, [awardsInView, awardCount]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-3">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">We're a Team of Web Enthusiasts</h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Founded with a passion for crafting exceptional digital experiences, we combine technical expertise with creative innovation to build websites that drive real business results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <motion.div 
            ref={countRefs.years}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 flex items-baseline">
              <motion.span>{yearDisplay}</motion.span><span className="text-white">+</span>
            </motion.div>
            <div className="text-gray-300 text-lg">Years of Experience</div>
          </motion.div>

          <motion.div 
            ref={countRefs.projects}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 flex items-baseline">
              <motion.span>{projectDisplay}</motion.span><span className="text-white">+</span>
            </motion.div>
            <div className="text-gray-300 text-lg">Projects Completed</div>
          </motion.div>

          <motion.div 
            ref={countRefs.clients}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 flex items-baseline">
              <motion.span>{clientDisplay}</motion.span><span className="text-white">+</span>
            </motion.div>
            <div className="text-gray-300 text-lg">Happy Clients</div>
          </motion.div>
          
          <motion.div 
            ref={countRefs.awards}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 flex items-baseline">
              <motion.span>{awardDisplay}</motion.span><span className="text-white">+</span>
            </motion.div>
            <div className="text-gray-300 text-lg">Awards Won</div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission & Vision</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Founded in 2015, our agency has grown from a small freelance operation to a full-service web development powerhouse. 
              We're passionate about creating beautiful, functional websites that help businesses succeed online.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Our approach combines technical excellence with creative innovation to deliver websites that not only look great 
              but also perform exceptionally well. We believe in collaboration, transparency, and delivering results that 
              exceed expectations.
            </p>
            
            <div className="mt-8 space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation Focus</h4>
                  <p className="text-gray-300">We stay ahead of design trends and technological advancements to deliver cutting-edge solutions.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-pink-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Quality Guarantee</h4>
                  <p className="text-gray-300">Every project undergoes rigorous testing and quality assurance to ensure flawless performance.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-cyan-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Client Success</h4>
                  <p className="text-gray-300">Our clients' success is our success, and we're committed to helping them achieve their business goals.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative h-full">
              <div className="grid grid-cols-2 gap-5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-lg shadow-purple-500/10"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                    alt="Team working" 
                    className="rounded-lg object-cover h-64 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative overflow-hidden rounded-lg shadow-lg shadow-cyan-500/10 mt-16"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                    alt="Office space" 
                    className="rounded-lg object-cover h-80 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-600 to-cyan-500 p-8 rounded-lg shadow-xl shadow-purple-500/20"
              >
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white text-sm">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
