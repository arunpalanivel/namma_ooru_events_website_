
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Trophy, Users, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import HoverButton from '../components/HoverButton';

export const About = () => {
   const navigate = useNavigate();

   return (
      <div className="pt-24 min-h-screen bg-black">
         {/* Hero Section */}
         <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <img
                  src="https://images.unsplash.com/photo-1609151162377-794d081831e5?auto=format&fit=crop&q=80"
                  alt="Event Management Team"
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white font-kaisei mb-6"
               >
                  About <span className="text-brand-orange">Us</span>
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-200 font-heebo leading-relaxed"
               >
                  Namma Ooru Events Management Since 2025
               </motion.p>
            </div>
         </section>

         {/* About Us Section */}
         <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
               {/* Left Column - Image */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 relative"
               >
                  <div className="relative aspect-square max-w-md mx-auto">
                     {/* Circular Glow */}
                     <div className="absolute inset-0 rounded-full bg-brand-orange/20 blur-3xl transform scale-110"></div>
                     {/* Main Image Container */}
                     <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white bg-white flex items-center justify-center p-8 group hover:border-brand-orange/50 transition-colors duration-500">
                        <img
                           src={logo}
                           alt="Namma Ooru Events Logo"
                           className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                        />
                     </div>
                  </div>
               </motion.div>

               {/* Right Column - Content */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 space-y-8"
               >
                  <div>
                     <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">About Us</span>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-kaisei leading-tight">
                        Namma Ooru <br />
                        <span className="text-gray-400">Event and Management</span>
                     </h2>
                  </div>

                  <div className="space-y-6 text-gray-400 font-heebo text-lg leading-relaxed">
                     <p>
                        Namma Ooru Events & Management is a premier event planning agency based in Pudukkottai. We specialize in bringing your vision to life with creativity, precision, and passion.
                     </p>
                     <p>
                        From intimate weddings to grand corporate galas, we treat every event as a masterpiece waiting to be painted. Our dedicated team ensures every detail is perfect, allowing you to cherish every moment.
                     </p>
                  </div>

                  <div className="mt-8">
                     <HoverButton
                        text={
                           <span className="flex items-center gap-2">
                              READ MORE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                           </span>
                        }
                        onClick={() => navigate('/contact')}
                        width="180px"
                     />
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Vision & Mission */}
         <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/10 skew-x-12 transform translate-x-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors"
                  >
                     <div className="bg-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                        <Eye size={32} className="text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 font-kaisei">Our Vision</h3>
                     <p className="text-gray-300 leading-relaxed font-heebo">
                        To be the most trusted and innovative event management company, setting global standards for creativity and excellence in the industry.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors"
                  >
                     <div className="bg-brand-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                        <Target size={32} className="text-white" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 font-kaisei">Our Mission</h3>
                     <p className="text-gray-300 leading-relaxed font-heebo">
                        To deliver seamless, high-quality, and personalized event experiences that exceed client expectations, while maintaining the highest standards of integrity and professionalism.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Why Choose Us */}
         <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-brand-blue font-kaisei mb-4 text-white">Why Choose Us?</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">We don't just plan events; we design experiences that leave a lasting impression.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { icon: Heart, title: "Passionate Team", desc: "Dedicated professionals who love what they do." },
                     { icon: Shield, title: "Reliability", desc: "Trusted by clients for timely and flawless execution." },
                     { icon: Trophy, title: "Excellence", desc: "Commitment to the highest quality in every detail." },
                     { icon: Users, title: "Client Focus", desc: "Your vision is our top priority, always." }
                  ].map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900 p-8 rounded-xl shadow-lg border-b-4 border-brand-orange text-center hover:-translate-y-2 transition-transform duration-300 border border-white/10"
                     >
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                           <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 font-kaisei">{item.title}</h3>
                        <p className="text-gray-400 text-sm font-heebo">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-brand-orange">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
               <h2 className="text-3xl md:text-5xl font-bold font-kaisei mb-6">Ready to Plan Your Next Event?</h2>
               <p className="text-xl mb-8 font-heebo">Let's work together to create something spectacular.</p>
               <Link
                  to="/#contact"
                  className="inline-block bg-white text-brand-orange py-4 px-10 rounded-full font-bold shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all text-lg tracking-wide"
               >
                  CONTACT US
               </Link>
            </div>
         </section>
      </div>
   );
};
