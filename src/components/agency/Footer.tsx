
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      title: "Services",
      links: [
        { label: "Web Development", href: "#" },
        { label: "E-Commerce", href: "#" },
        { label: "Web Applications", href: "#" },
        { label: "Website Design", href: "#" },
        { label: "SEO Optimization", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "FAQ", href: "#" },
      ]
    }
  ];

  return (
    <footer className="relative bg-black overflow-hidden pt-20 border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-10 right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-4/12 px-4 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                  DevsMagic
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                We create beautiful, functional websites that help businesses grow online. Our team of experts
                is dedicated to delivering the best digital solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index} className="w-full sm:w-6/12 lg:w-2/12 px-4 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <h5 className="text-white text-lg font-semibold mb-6">{column.title}</h5>
                <ul className="space-y-4">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        <div className="w-0 h-0.5 bg-cyan-500 group-hover:w-2 transition-all"></div>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

          <div className="w-full lg:w-4/12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5 className="text-white text-lg font-semibold mb-6">Subscribe to Our Newsletter</h5>
              <p className="text-gray-400 mb-6">
                Get the latest news and updates from our team of web development experts.
              </p>
              <form className="flex mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 focus:border-cyan-500 text-white rounded-r-none"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 
                            text-white border-0 rounded-l-none flex items-center"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400">contact@devsmagic.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400">+91 8700 450 775</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400">123 Web Dev Street, New Delhi, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-white/10 mt-16 py-10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} DevsMagic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
