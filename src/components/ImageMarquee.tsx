import { motion } from 'framer-motion';

// Import images
import wedding from '../assets/wedding.jpg';
import decor from '../assets/decor.jpg';
import dj from '../assets/dj.jpg';
import mehendi from '../assets/mehendi.jpg';
import heroBg from '../assets/hero-bg.jpg';
import arcPair from '../assets/arc_pair_studio_new.jpg';
import catering from '../assets/services/catering.jpg';

const images = [wedding, decor, dj, mehendi, heroBg, arcPair, catering];

const ImageMarquee = () => {
   return (
      <div className="w-full overflow-hidden bg-transparent mb-8">
         <div className="flex">
            <motion.div
               className="flex gap-4 flex-shrink-0"
               initial={{ x: 0 }}
               animate={{ x: "-100%" }}
               transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20, // Adjust speed here
               }}
            >
               {/* Duplicate images for seamless loop */}
               {[...images, ...images, ...images].map((img, index) => (
                  <div key={index} className="w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg relative group">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                     <img
                        src={img}
                        alt={`Event ${index}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                     />
                  </div>
               ))}
            </motion.div>

            {/* Second div for the continuous loop effect (if needed, but repeating list is usually enough for simple marquee if width covers) 
            Actually, with x: -100% on a container that has 3 sets, it should loop if the duration matches the width.
            A safer way for infinite loop with Framer Motion is often to use two identical motion divs.
        */}
            <motion.div
               className="flex gap-4 flex-shrink-0 pl-4"
               initial={{ x: 0 }}
               animate={{ x: "-100%" }}
               transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
               }}
            >
               {[...images, ...images, ...images].map((img, index) => (
                  <div key={index} className="w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg relative group">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                     <img
                        src={img}
                        alt={`Event ${index}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                     />
                  </div>
               ))}
            </motion.div>
         </div>
      </div>
   );
};

export default ImageMarquee;
