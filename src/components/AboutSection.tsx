import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about_section_image.jpg';

const AboutSection = () => {
   return (
      <section className="py-24 bg-black relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

               {/* Image Side */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2 relative"
               >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                     <img
                        src={aboutImg}
                        alt="Event Management Team"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>


               </motion.div>

               {/* Content Side */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-1/2 space-y-8"
               >
                  <div>
                     <h2 className="text-brand-orange font-bold tracking-wider text-sm mb-2 uppercase">About Us</h2>
                     <h3 className="text-4xl md:text-5xl font-bold text-white font-kaisei leading-tight">
                        Namma Ooru <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Event and Management</span>
                     </h3>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed font-heebo">
                     Namma Ooru Events & Management is a premier event planning agency based in Pudukkottai. We specialize in bringing your vision to life with creativity, precision, and passion.
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed font-heebo">
                     From intimate weddings to grand corporate galas, we treat every event as a masterpiece waiting to be painted. Our dedicated team ensures every detail is perfect, allowing you to cherish every moment.
                  </p>

                  <div className="pt-4">
                     <Link to="/about">
                        <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="group px-8 py-3 bg-white text-black rounded-full font-bold tracking-wide hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                           READ MORE
                           <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                     </Link>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default AboutSection;
