
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weddingImg from '../assets/services/wedding_new.jpg';
import cateringImg from '../assets/services/catering_new.jpg';
import photographyImg from '../assets/services/photography_new.jpg';
import djImg from '../assets/services/dj_new.jpg';


// Define the services data structure for the Bento Grid
const services = [
   {
      id: 1,
      title: "WEDDING PLANNING",
      desc: "Your dream day, perfected. Full-service orchestration.",
      link: "/wedding-planning",
      img: weddingImg,
      className: "md:col-span-2 md:row-span-2 min-h-[400px]" // Large feature box
   },
   {
      id: 2,
      title: "PREMIUM CATERING",
      desc: "Exquisite culinary experiences for every palate.",
      link: "/premium-catering",
      img: cateringImg,
      className: "md:col-span-1 md:row-span-2 min-h-[400px]" // Tall box
   },
   {
      id: 3,
      title: "DJ & SOUND SYSTEMS",
      desc: "High-fidelity audio & lighting.",
      link: "/dj-sound-systems",
      img: djImg,
      className: "md:col-span-2 min-h-[250px]" // Wide box
   },
   {
      id: 4,
      title: "PROFESSIONAL PHOTOGRAPHY",
      desc: "Capturing every moment cinematically.",
      link: "/professional-photography",
      img: photographyImg,
      className: "md:col-span-1 min-h-[250px]" // Standard box
   }
];

export const Services = () => {
   return (
      <section id="service" className="py-24 bg-black relative overflow-hidden">
         {/* Background Gradients */}
         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/10 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-blue/10 blur-[100px] rounded-full"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mb-16 text-center">
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold font-kaisei text-white mb-4"
               >
                  Our <span className="text-brand-orange">Premium Services</span>
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 max-w-2xl mx-auto font-heebo"
               >
                  Curated experiences for your most important moments.
               </motion.p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {services.map((service, index) => (
                  <Link
                     to={service.link}
                     key={service.id}
                     className={`group relative overflow-hidden rounded-3xl border border-white/10 ${service.className}`}
                  >
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full h-full"
                     >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                           <img
                              src={service.img}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           {/* Gradient Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                           <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <h3 className="text-2xl md:text-3xl font-bold text-white font-kaisei mb-2 group-hover:text-brand-orange transition-colors">
                                 {service.title}
                              </h3>
                              <p className="text-gray-300 font-heebo text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                 {service.desc}
                              </p>

                              <div className="mt-4 flex items-center gap-2 text-brand-orange font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                 Explore Service <ArrowRight size={16} />
                              </div>
                           </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors duration-300">
                           <ArrowRight size={20} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>

                     </motion.div>
                  </Link>
               ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
               <Link to="/all-services">
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-3 bg-white/5 border border-white/20 rounded-full text-white font-bold tracking-wider hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 flex items-center gap-2"
                  >
                     VIEW ALL SERVICES <ArrowRight size={18} />
                  </motion.button>
               </Link>
            </div>

         </div>
      </section>
   );
};
