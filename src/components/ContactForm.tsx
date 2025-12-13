
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import StarBorder from './StarBorder';

interface ContactFormProps {
   className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
   });

   const [errors, setErrors] = useState({
      name: false,
      email: false,
      subject: false,
      message: false
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      // Clear error when user types
      if (errors[name as keyof typeof errors]) {
         setErrors({ ...errors, [name]: false });
      }
   };

   const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors = {
         name: formData.name.trim() === '',
         email: !validateEmail(formData.email),
         subject: formData.subject.trim() === '',
         message: formData.message.trim() === ''
      };

      setErrors(newErrors);

      if (!Object.values(newErrors).some(Boolean)) {
         // Success
         alert('Form submitted successfully!');
         // Reset form
         setFormData({ name: '', email: '', subject: '', message: '' });
      }
   };
   return (
      <section id="contact" className={className || "py-20 bg-black relative"}>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-brand-orange/20">
               <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 border-b border-white/10 text-center">
                  <motion.h3
                     initial={{ opacity: 0, y: -10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-3xl font-bold font-kaisei text-white mb-2"
                  >
                     Contact <span className="text-brand-orange">Us</span>
                  </motion.h3>
                  <p className="text-gray-400 font-heebo">Get in touch with us for any inquiries</p>
               </div>

               <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                     {/* Name */}
                     <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-300">Name</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="text-gray-400" size={18} />
                           </div>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              className={`pl-10 block w-full rounded-lg bg-black/50 border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-orange focus:ring-brand-orange'} text-white transition-colors py-3`}
                           />
                        </div>
                        {errors.name && (
                           <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                              <AlertCircle size={12} /> Please enter your name.
                           </p>
                        )}
                     </div>

                     {/* Email */}
                     <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-300">Email</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="text-gray-400" size={18} />
                           </div>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              className={`pl-10 block w-full rounded-lg bg-black/50 border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-orange focus:ring-brand-orange'} text-white transition-colors py-3`}
                           />
                        </div>
                        {errors.email && (
                           <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                              <AlertCircle size={12} /> Please enter a valid email address.
                           </p>
                        )}
                     </div>

                     {/* Subject */}
                     <div className="md:col-span-2 space-y-2">
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-300">Subject</label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <MessageSquare className="text-gray-400" size={18} />
                           </div>
                           <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Enter the subject"
                              className={`pl-10 block w-full rounded-lg bg-black/50 border ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-orange focus:ring-brand-orange'} text-white transition-colors py-3`}
                           />
                        </div>
                        {errors.subject && (
                           <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                              <AlertCircle size={12} /> Please enter the subject.
                           </p>
                        )}
                     </div>

                     {/* Message */}
                     <div className="md:col-span-2 space-y-2">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-300">Message</label>
                        <textarea
                           id="message"
                           name="message"
                           rows={5}
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Enter your message"
                           className={`w-full rounded-lg bg-black/50 border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-orange focus:ring-brand-orange'} text-white transition-colors p-4`}
                        ></textarea>
                        {errors.message && (
                           <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                              <AlertCircle size={12} /> Please enter your message.
                           </p>
                        )}
                     </div>
                  </div>

                  <div className="pt-4">
                     <StarBorder
                        type="submit"
                        color="#FF9E02"
                        className="w-full font-bold py-3 flex items-center justify-center gap-2"
                     >
                        Submit <Send size={18} />
                     </StarBorder>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default ContactForm;
