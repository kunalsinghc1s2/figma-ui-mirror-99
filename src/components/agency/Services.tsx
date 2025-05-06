
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  delay: number;
  longDescription?: string;
  features?: string[];
  image?: string;
  coverImage?: string;
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(null);
  
  const services: ServiceProps[] = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "Tailored solutions that perfectly align with your business needs and goals.",
      longDescription: "Our custom website development services deliver unique, tailored solutions designed specifically for your business requirements. We focus on creating websites that not only look beautiful but also function seamlessly to achieve your business goals. From responsive designs to advanced functionality, we build solutions that grow with your business.",
      features: ["Responsive design", "Custom functionality", "SEO optimization", "Performance tuning", "Content management systems"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: "💻",
      color: "from-purple-500 to-indigo-600",
      delay: 0.1
    },
    {
      id: 2,
      title: "Real Estate Websites",
      description: "Modern property listing sites with advanced search and filtering capabilities.",
      longDescription: "Elevate your real estate business with our specialized property websites. We create intuitive platforms that showcase your properties with elegance and provide powerful search and filtering tools for potential buyers. Our real estate solutions integrate with MLS systems, feature virtual tours, and offer lead generation tools to boost your conversions.",
      features: ["Property listings", "Advanced search filters", "Virtual tours", "Agent profiles", "Lead capture forms"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      icon: "🏠",
      color: "from-cyan-500 to-blue-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "Clinic & Healthcare Sites",
      description: "Patient-friendly interfaces with secure appointment booking systems.",
      longDescription: "Our healthcare websites prioritize patient experience while maintaining the highest security standards. We develop HIPAA-compliant platforms with secure patient portals, appointment scheduling systems, and telemedicine integrations. Our solutions help medical practices streamline operations while providing convenient digital access for patients.",
      features: ["Online appointment booking", "Patient portals", "HIPAA compliance", "Telemedicine integration", "Electronic forms"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      coverImage: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb",
      icon: "🏥",
      color: "from-green-500 to-emerald-600",
      delay: 0.3
    },
    {
      id: 4,
      title: "Digital Agency Solutions",
      description: "Showcase your creative work with pixel-perfect portfolio websites.",
      longDescription: "Stand out in the creative industry with our digital agency website solutions. We design stunning, interactive showcases for your portfolio that highlight your expertise and captivate potential clients. Our agency websites incorporate cutting-edge design trends, seamless animations, and compelling UX to reflect your creative identity.",
      features: ["Interactive portfolios", "Case study layouts", "Team showcases", "Client testimonials", "Blog integration"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      delay: 0.4
    },
    {
      id: 5,
      title: "E-Commerce Platforms",
      description: "Highly converting online stores with seamless checkout experiences.",
      longDescription: "Transform your retail business with our powerful e-commerce solutions. We build online stores that drive sales, with optimized product displays, streamlined checkout processes, and comprehensive inventory management. Our e-commerce platforms integrate smoothly with payment gateways, shipping services, and marketing tools to maximize your online revenue.",
      features: ["Product catalogs", "Secure payment processing", "Inventory management", "Abandoned cart recovery", "Mobile shopping optimization"],
      image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4",
      coverImage: "https://images.unsplash.com/photo-1629372417583-bd40b322a449",
      icon: "🛒",
      color: "from-amber-500 to-orange-600",
      delay: 0.5
    },
    {
      id: 6,
      title: "Pet Service Websites",
      description: "Engaging platforms for pet services with booking and customer management.",
      longDescription: "Delight pet owners with our specialized pet service websites. Whether for veterinary practices, grooming salons, or boarding facilities, we create cheerful, user-friendly platforms that simplify appointment booking and pet management. Our solutions include features for health records, service scheduling, and personalized pet profiles.",
      features: ["Appointment scheduling", "Pet profiles", "Service galleries", "Customer reviews", "Mobile notifications"],
      image: "https://images.unsplash.com/photo-1583511655826-05700a52f0d3",
      coverImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      icon: "🐾",
      color: "from-violet-500 to-purple-600",
      delay: 0.6
    },
    {
      id: 7,
      title: "Portfolio Websites",
      description: "Stunning personal or company portfolios that showcase your best work.",
      longDescription: "Make a lasting impression with our professional portfolio websites. We design elegant, visually striking platforms that highlight your accomplishments, projects, and expertise. Our portfolio solutions incorporate striking visuals, smooth animations, and organized content structures to present your work in the best possible light.",
      features: ["Project showcases", "Filterable galleries", "About sections", "Contact forms", "Resume/CV integration"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      icon: "📂",
      color: "from-blue-500 to-indigo-600",
      delay: 0.7
    },
    {
      id: 8,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your conversion rates.",
      longDescription: "Drive action with our conversion-focused landing pages. We craft compelling, targeted pages that turn visitors into leads or customers. Using principles of persuasive design and psychology, our landing pages include clear value propositions, strong CTAs, and streamlined forms to maximize your marketing ROI.",
      features: ["A/B testing ready", "Lead capture forms", "Compelling CTAs", "Social proof elements", "Mobile optimization"],
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      coverImage: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      icon: "🚀",
      color: "from-teal-500 to-green-600",
      delay: 0.8
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-900/90 backdrop-blur-xl">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 drop-shadow-[0_0_10px_rgba(79,209,197,0.5)]">What We Do Best</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            We offer a comprehensive range of web development services tailored to meet the unique needs of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onClick={() => setSelectedService(service)}
              className="relative bg-zinc-800/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 
                        hover:border-white/20 transition-all group cursor-pointer shadow-lg shadow-black/20"
            >
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={service.coverImage || service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-zinc-900/30"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-5 
                                backdrop-blur-sm text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h4 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                
                <div className="mt-5 flex items-center text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transform 
                              translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
              <DialogContent className="sm:max-w-[650px] bg-gradient-to-br from-zinc-900 to-zinc-950 border-white/10 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="relative">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute right-0 top-0 text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-3xl">{selectedService.icon}</span>
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300">
                    Unlock the full potential of your online presence
                  </DialogDescription>
                </DialogHeader>
                
                <div className="overflow-hidden rounded-xl mb-4 h-64">
                  {selectedService.coverImage && (
                    <motion.img 
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      src={selectedService.coverImage}
                      alt={selectedService.title}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300">{selectedService.longDescription}</p>
                  
                  {selectedService.features && (
                    <div>
                      <h4 className="font-medium text-white mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedService.features.map((feature, index) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <span className={`h-2 w-2 rounded-full bg-gradient-to-br ${selectedService.color}`}></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${selectedService.color} text-white font-medium mt-4`}
                  >
                    Get Started with This Service
                  </motion.button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
