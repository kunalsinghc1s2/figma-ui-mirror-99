
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // In a real scenario, you would send this data to a backend API
      // For now, we'll simulate a submission
      console.log("Form submitted with data:", data);
      console.log("Email to be sent to: devsmagic.io@gmail.com");
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-indigo-950/10 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-3">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Get In Touch</h3>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-black/20">
              <h4 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h4>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-gray-300">Your Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="bg-zinc-800/70 border-white/10 focus:border-purple-500 text-white h-12 placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-gray-300">Your Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="john@example.com"
                              className="bg-zinc-800/70 border-white/10 focus:border-purple-500 text-white h-12 placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-gray-300">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Project Inquiry"
                            className="bg-zinc-800/70 border-white/10 focus:border-purple-500 text-white h-12 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-gray-300">Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={5}
                            placeholder="Tell us about your project..."
                            className="w-full bg-zinc-800/70 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-purple-500 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 
                                  text-white px-8 py-2 h-12 rounded-md shadow-lg shadow-purple-500/20 border-0 w-full md:w-auto relative overflow-hidden group"
                      >
                        <span className="relative z-10">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
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
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10 h-full shadow-xl shadow-black/20">
              <h4 className="text-2xl font-semibold mb-6 text-white">Contact Information</h4>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-lg mr-4 shadow-lg shadow-purple-500/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Phone</h5>
                    <p className="text-gray-300">+91 870 045 0775</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-lg mr-4 shadow-lg shadow-purple-500/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Email</h5>
                    <p className="text-gray-300">devsmagic.io@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-3 rounded-lg mr-4 shadow-lg shadow-purple-500/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Address</h5>
                    <p className="text-gray-300">
                      Delhi, India
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-10">
                <h5 className="text-white font-medium mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.2)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.2)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.2)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.2)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/20"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.63669530117!2d77.04417756326037!3d28.5274670568616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1698351866296!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />
        </motion.div>
      </div>
    </section>
  );
};
