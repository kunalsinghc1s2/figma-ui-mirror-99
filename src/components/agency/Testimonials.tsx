
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "Working with this agency transformed our online presence completely. Our new website has increased conversions by 45% and provides a much better user experience for our customers.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, GrowFast",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      content: "The team's ability to understand our vision and translate it into a beautiful, functional website was impressive. They delivered on time and the results have exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Founder, PetLovers",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      content: "Our e-commerce site has never performed better. The checkout process is seamless and our customers love the new design. Sales have increased by 60% since the redesign.",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      position: "CTO, PropertyHub",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      content: "The real estate platform they built for us has completely revolutionized how we do business. The search functionality is intuitive and clients can find properties much faster now.",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-purple-600/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h3>
          <p className="max-w-2xl mx-auto text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full flex flex-col"
                >
                  <div className="mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-200 mb-6 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4">
                      <h4 className="font-medium text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 p-8 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl border border-white/10 backdrop-blur-lg text-center"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h4>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            We're excited to hear about your project. Let's create something amazing together.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 
                            text-white px-8 py-3 rounded-lg shadow-lg shadow-purple-500/30
                            transition-all hover:shadow-xl hover:shadow-purple-500/40">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
