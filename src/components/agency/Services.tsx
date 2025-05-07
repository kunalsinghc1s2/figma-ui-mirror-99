
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, BarChart, ShieldCheck, Search } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceModal, ServiceData } from './ServiceModal';

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create custom, responsive websites that engage your audience and drive conversions. Our development team uses cutting-edge technologies to deliver fast, secure, and scalable web solutions.",
      icon: <Code size={28} className="text-white" />,
      image: "public/lovable-uploads/02f83fbe-137d-4fff-9618-e14fb9e7735b.png",
      features: [
        "Custom website development with responsive design",
        "Frontend technologies: React, Vue.js, Angular",
        "Backend solutions: Node.js, Python, PHP",
        "Database design and implementation",
        "API development and integration",
        "Performance optimization and speed enhancements"
      ]
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "We create stunning user interfaces paired with intuitive user experiences that delight your customers and keep them coming back. Our design process focuses on usability, accessibility, and visual appeal.",
      icon: <Palette size={28} className="text-white" />,
      image: "public/lovable-uploads/305dda26-facb-4c08-9a37-c3db1a73cd85.png",
      features: [
        "Custom interface design with brand consistency",
        "User journey mapping and experience optimization",
        "Wireframing and prototyping",
        "Usability testing and research",
        "Design system creation",
        "Interactive animations and micro-interactions"
      ]
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description: "Build and grow your online store with our comprehensive e-commerce solutions. From product catalogs to secure payment gateways, we help businesses sell online effectively and increase revenue.",
      icon: <Globe size={28} className="text-white" />,
      image: "public/lovable-uploads/4bb8d6f3-23cc-43d6-ae15-c91c6fea13d9.png",
      features: [
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory and order management systems",
        "Customer account management",
        "Product recommendation engines"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Drive traffic, generate leads, and increase conversions with our data-driven digital marketing strategies. We help businesses reach their target audience and achieve measurable results.",
      icon: <BarChart size={28} className="text-white" />,
      image: "public/lovable-uploads/0b6246d2-c6c4-4fa4-99b8-136603a71ebd.png",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click (PPC) advertising campaigns",
        "Social media marketing and management",
        "Email marketing automation",
        "Content marketing strategy and creation",
        "Analytics and performance tracking"
      ]
    },
    {
      id: 5,
      title: "App Development",
      description: "Transform your ideas into powerful mobile applications that users love. Our app development team creates native and cross-platform solutions for iOS and Android with a focus on performance and user experience.",
      icon: <ShieldCheck size={28} className="text-white" />,
      image: "public/lovable-uploads/ab83359c-e390-4fee-a7d4-7aac8ee50d4a.png",
      features: [
        "Native iOS and Android app development",
        "Cross-platform solutions with React Native and Flutter",
        "Progressive Web Apps (PWAs)",
        "App store optimization",
        "App maintenance and updates",
        "Push notification strategies and implementation"
      ]
    },
    {
      id: 6,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engine results with our comprehensive SEO services. We help businesses rank higher, attract more organic traffic, and stay ahead of algorithm updates.",
      icon: <Search size={28} className="text-white" />,
      image: "public/lovable-uploads/18b1a8e2-54e1-408a-99e5-6db05eed0ab2.png",
      features: [
        "Technical SEO audits and implementation",
        "Keyword research and strategy development",
        "On-page and off-page optimization",
        "Content strategy for SEO",
        "Link building campaigns",
        "Local SEO for businesses serving specific areas"
      ]
    }
  ];

  const handleCardClick = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const scrollToContact = () => {
    handleCloseModal();
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />
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
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_10px_rgba(79,209,197,0.5)]">What We Offer</h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            We provide a wide range of digital services to help businesses grow online and achieve their goals. Our expert team is passionate about delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                service={service} 
                onClick={handleCardClick} 
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onGetStarted={scrollToContact} 
      />
    </section>
  );
};
