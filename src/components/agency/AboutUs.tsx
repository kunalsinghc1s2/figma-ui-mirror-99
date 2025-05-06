
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
              <h3 className="text-4xl md:text-5xl font-bold mb-6">We're a Team of Web Enthusiasts</h3>
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
                  variants={statsVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">8+</div>
                  <div className="text-gray-300">Years of Experience</div>
                </motion.div>
                <motion.div 
                  variants={statsVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </motion.div>
                <motion.div 
                  variants={statsVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </motion.div>
                <motion.div 
                  variants={statsVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">15+</div>
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
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                  alt="Team working" 
                  className="rounded-lg object-cover h-64 w-full shadow-lg shadow-purple-500/10"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                  alt="Office space" 
                  className="rounded-lg object-cover h-80 w-full mt-16 shadow-lg shadow-cyan-500/10"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-600 to-cyan-500 p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white text-sm">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-gray-300">
                We believe in creating digital experiences that not only meet but exceed client expectations. Our mission is to 
                combine technical excellence with creative innovation to deliver websites that drive real business results.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Delivering projects on time and within budget</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Creating responsive designs that work across all devices</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Building secure, performance-optimized websites</p>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-gray-300">Providing ongoing support and growth strategies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
