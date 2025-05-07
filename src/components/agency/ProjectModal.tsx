
import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  client: string;
  category?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose,
  onContactClick 
}) => {
  // If no project or modal is closed, don't render
  if (!project || !isOpen) return null;

  // Stop propagation to prevent closing when clicking inside the modal
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-zinc-900/95 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={handleContentClick}
          >
            <div className="relative">
              <div className="aspect-video w-full rounded-t-xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent"></div>
              </div>
              
              <button
                onClick={onClose}
                className="absolute right-4 top-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="inline-block bg-purple-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  {project.category?.charAt(0).toUpperCase() + project.category?.slice(1) || 'Project'}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-purple-400 mt-1">Client: {project.client}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-purple-400 mb-2">Description</h4>
                <p className="text-gray-300">{project.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium text-purple-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-zinc-800/80 border border-white/10 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={onContactClick}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-6 h-auto text-base font-medium rounded-lg"
                  >
                    Contact Us About This Project
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
