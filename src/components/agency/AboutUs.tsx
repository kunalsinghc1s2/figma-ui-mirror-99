
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const team = [
    {
      id: 1,
      name: "Alex Morgan",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "With over 15 years in web development, Alex leads our agency with a passion for creating beautiful, functional websites.",
      delay: 0.1
    },
    {
      id: 2,
      name: "Jessica Chen",
      position: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Jessica brings creative vision to every project, ensuring each design is unique and aligned with brand objectives.",
      delay: 0.2
    },
    {
      id: 3,
      name: "Marcus Johnson",
      position: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "Marcus specializes in front-end development, creating responsive and interactive user experiences that engage visitors.",
      delay: 0.3
    },
    {
      id: 4,
      name: "Sophia Rodriguez",
      position: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "Sophia crafts user-centered designs that balance aesthetics with functionality for optimal user experiences.",
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">We're a Team of Web Enthusiasts</h3>
            <p className="text-gray-300 mb-6">
              Founded in 2015, PixelCraft has grown from a small freelance operation to a full-service web development agency. 
              We're passionate about creating beautiful, functional websites that help businesses succeed online.
            </p>
            <p className="text-gray-300 mb-6">
              Our approach combines technical expertise with creative design to deliver websites that not only look great 
              but also perform exceptionally well. We believe in collaboration, transparency, and delivering results that 
              exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">8+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-300">Awards Won</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative h-full">
              <div className="grid grid-cols-2 gap-5">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                  alt="Team working" 
                  className="rounded-lg object-cover h-64 w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c" 
                  alt="Office space" 
                  className="rounded-lg object-cover h-80 w-full mt-16"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-600 to-cyan-500 p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-3">Our Team</h2>
            <h3 className="text-4xl font-bold mb-6">Meet The Experts</h3>
            <p className="max-w-2xl mx-auto text-gray-300">
              Our talented team of professionals is dedicated to delivering the best web solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.delay }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Facebook className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{member.name}</h4>
                  <p className="text-purple-400 mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
