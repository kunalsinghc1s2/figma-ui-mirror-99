
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProjectModal, ProjectData } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'app', label: 'Web Apps' },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      category: "ecommerce",
      image: "public/lovable-uploads/9c23d2bf-d281-42b7-8c86-858d820007fe.png",
      client: "FashionHub",
      description: "A fully responsive e-commerce platform with advanced product filtering, user authentication, and secure payment processing. The platform features a modern design with intuitive navigation and optimized performance.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Redux"]
    },
    {
      id: 2,
      title: "Real Estate Listing Website",
      category: "web",
      image: "public/lovable-uploads/0afd1732-e586-4788-8c80-2bf21b7b34cc.png",
      client: "PropertyMasters",
      description: "An interactive real estate platform allowing users to search for properties using various filters, view detailed listings with virtual tours, and contact agents directly. The site includes advanced mapping features and neighborhood information.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Google Maps API", "Firebase"]
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "app",
      image: "public/lovable-uploads/2d067d6f-9cce-4075-a724-d4d3ea0b5ae6.png",
      client: "MediCare Clinic",
      description: "A comprehensive healthcare management system that streamlines patient appointments, medical records, and billing processes. The application features real-time updates, secure data storage, and integration with existing healthcare systems.",
      techStack: ["React", "TypeScript", "Express", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 4,
      title: "Creative Agency Portfolio",
      category: "web",
      image: "public/lovable-uploads/5be0efce-5efe-4c9c-abf2-438c3200af28.png",
      client: "ArtistryLabs",
      description: "A visually stunning portfolio website for a creative agency, showcasing their projects with immersive animations and interactive elements. The site features smooth scrolling, dynamic content loading, and a custom CMS for easy updates.",
      techStack: ["React", "Framer Motion", "Three.js", "GSAP", "Sanity CMS"]
    },
    {
      id: 5,
      title: "Pet Services Booking Platform",
      category: "app",
      image: "public/lovable-uploads/271517bf-5720-4e73-a358-fdf418defdfa.png",
      client: "PetPals",
      description: "A user-friendly platform for pet owners to book various services including grooming, walking, and veterinary appointments. The application includes a review system, service provider profiles, and real-time availability updates.",
      techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"]
    },
    {
      id: 6,
      title: "Online Learning Dashboard",
      category: "app",
      image: "public/lovable-uploads/f2c0bf48-79a6-4361-9111-4987888ef0eb.png",
      client: "EduTech Solutions",
      description: "An advanced learning management system with interactive course content, progress tracking, and certification features. The platform supports video lectures, quizzes, and community discussions with a focus on user engagement and retention.",
      techStack: ["React", "Redux", "Firebase", "WebRTC", "Material UI"]
    },
    {
      id: 7,
      title: "Fitness Tracking App",
      category: "app",
      image: "public/lovable-uploads/99054480-d7ef-4c65-82cf-3626ebd1ef2a.png",
      client: "FitLife",
      description: "A comprehensive fitness tracking application that allows users to monitor workouts, nutrition, and progress. Features include customized workout plans, meal tracking, goal setting, and social sharing capabilities.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Chart.js", "Socket.io"]
    },
    {
      id: 8,
      title: "Travel Booking Platform",
      category: "web",
      image: "public/lovable-uploads/bdadf8e6-f8cd-4368-9f74-73a3d2729dad.png",
      client: "Wanderlust",
      description: "An all-in-one travel booking platform that enables users to search and book flights, hotels, and experiences. The site features personalized recommendations, trip planning tools, and integrated payment processing.",
      techStack: ["React", "Next.js", "GraphQL", "PostgreSQL", "Redis", "AWS"]
    },
    {
      id: 9,
      title: "Restaurant Management System",
      category: "app",
      image: "public/lovable-uploads/c1d94fe9-cb21-41a2-9b2b-6580b666b108.png",
      client: "Cuisine Connect",
      description: "A complete restaurant management solution with table reservations, order processing, inventory management, and staff scheduling. The system includes a customer-facing app for online orders and a robust admin dashboard.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis"]
    },
    {
      id: 10,
      title: "Subscription Box Service",
      category: "ecommerce",
      image: "public/lovable-uploads/f27c4a1b-5bdb-4f17-a66f-dbaa397f8344.png",
      client: "BoxDelight",
      description: "A subscription-based e-commerce platform that delivers curated product boxes to customers on a recurring basis. Features include subscription management, personalized recommendations, and a robust admin interface for content management.",
      techStack: ["React", "Next.js", "Stripe", "Contentful", "Firebase", "Algolia"]
    },
    {
      id: 11,
      title: "Social Media Dashboard",
      category: "web",
      image: "public/lovable-uploads/849b188e-9cf6-4bf3-92c3-c0a3ff318839.png",
      client: "SocialPulse",
      description: "A comprehensive social media management dashboard that allows businesses to schedule posts, analyze performance, and engage with their audience across multiple platforms from a single interface.",
      techStack: ["React", "Redux", "Node.js", "PostgreSQL", "Chart.js", "AWS"]
    },
    {
      id: 12,
      title: "Investment Portfolio Tracker",
      category: "app",
      image: "public/lovable-uploads/9b7d7dff-7e39-4ca3-9ec4-df59ede111d9.png",
      client: "WealthWise",
      description: "A financial application that helps users track and manage their investment portfolios across various asset classes. Features include real-time market data, performance analytics, and personalized investment recommendations.",
      techStack: ["React", "TypeScript", "Express", "MongoDB", "D3.js", "AWS"]
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
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
    <section id="portfolio" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]" />
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
          <h2 className="text-sm uppercase tracking-wider text-pink-400 mb-3">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            Browse our collection of work that demonstrates our expertise and creativity in building amazing digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map(filter => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`
                    ${activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-0 text-white shadow-lg shadow-pink-500/30' 
                      : 'bg-zinc-900/80 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-pink-500/50'}
                    px-8 py-3 text-sm font-medium rounded-lg transition-all duration-300
                  `}
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/30 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <span className="text-pink-400 text-sm font-medium block mb-1">{project.client}</span>
                    <h4 className="text-xl font-semibold text-white mt-1">{project.title}</h4>
                    
                    <div className="mt-4">
                      <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          className="bg-zinc-900/60 backdrop-blur-md text-white hover:bg-white/20 hover:text-white border-white/20 group-hover:border-pink-500/50 transition-colors flex items-center gap-2"
                        >
                          View Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-all group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/30 px-8 py-6 text-base font-medium border-0 rounded-xl relative overflow-hidden group"
            >
              <span className="relative z-10">View All Projects</span>
              <motion.span 
                className="absolute inset-0 bg-white/10 z-0"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear" 
                }}
              />
            </Button>
          </motion.div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onContactClick={scrollToContact}
      />
    </section>
  );
};
