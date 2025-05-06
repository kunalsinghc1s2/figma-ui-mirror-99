
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export const AboutUs: React.FC = () => {
  const countRefs = {
    years: useRef(null),
    projects: useRef(null),
    members: useRef(null),
    awards: useRef(null),
  };

  const yearCount = useMotionValue(0);
  const projectCount = useMotionValue(0);
  const memberCount = useMotionValue(0);
  const awardCount = useMotionValue(0);

  const yearDisplay = useTransform(yearCount, Math.round);
  const projectDisplay = useTransform(projectCount, Math.round);
  const memberDisplay = useTransform(memberCount, Math.round);
  const awardDisplay = useTransform(awardCount, Math.round);

  const yearsInView = useInView(countRefs.years, { once: true, amount: 0.5 });
  const projectsInView = useInView(countRefs.projects, { once: true, amount: 0.5 });
  const membersInView = useInView(countRefs.members, { once: true, amount: 0.5 });
  const awardsInView = useInView(countRefs.awards, { once: true, amount: 0.5 });

  useEffect(() => {
    if (yearsInView) {
      animate(yearCount, 8, { duration: 2 });
    }
  }, [yearsInView, yearCount]);

  useEffect(() => {
    if (projectsInView) {
      animate(projectCount, 200, { duration: 2 });
    }
  }, [projectsInView, projectCount]);

  useEffect(() => {
    if (membersInView) {
      animate(memberCount, 50, { duration: 2 });
    }
  }, [membersInView, memberCount]);

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
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="sticky top-32">
              <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">We're a Team of Web Enthusiasts</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Founded in 2015, PixelCraft has grown from a small freelance operation to a full-service web development agency. 
                We're passionate about creating beautiful, functional websites that help businesses succeed online.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                Our approach combines technical expertise with creative design to deliver websites that not only look great 
                but also perform exceptionally well. We believe in collaboration, transparency, and delivering results that 
                exceed expectations.
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.div 
                  ref={countRefs.years}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <motion.span>{yearDisplay}</motion.span>+
                  </motion.div>
                  <div className="text-gray-300">Years of Experience</div>
                </motion.div>
                <motion.div 
                  ref={countRefs.projects}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <motion.span>{projectDisplay}</motion.span>+
                  </motion.div>
                  <div className="text-gray-300">Projects Completed</div>
                </motion.div>
                <motion.div 
                  ref={countRefs.members}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <motion.span>{memberDisplay}</motion.span>+
                  </motion.div>
                  <div className="text-gray-300">Team Members</div>
                </motion.div>
                <motion.div 
                  ref={countRefs.awards}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <motion.span>{awardDisplay}</motion.span>+
                  </motion.div>
                  <div className="text-gray-300">Awards Won</div>
                </motion.div>
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
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                  alt="Team working" 
                  className="rounded-lg object-cover h-64 w-full shadow-lg shadow-purple-500/10"
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                  alt="Office space" 
                  className="rounded-lg object-cover h-80 w-full mt-16 shadow-lg shadow-cyan-500/10"
                />
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
            
            <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl shadow-black/20">
              <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-gray-300">
                We believe in creating digital experiences that not only meet but exceed client expectations. Our mission is to 
                combine technical excellence with creative innovation to deliver websites that drive real business results.
              </p>
              
              <div className="mt-8 space-y-4">
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Delivering projects on time and within budget</p>
                </motion.div>
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Creating responsive designs that work across all devices</p>
                </motion.div>
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Building secure, performance-optimized websites</p>
                </motion.div>
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Providing ongoing support and growth strategies</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
