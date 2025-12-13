import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoGallery = () => {
   return (
      <div className="pt-24 min-h-screen bg-black">
         <section className="relative bg-black text-white py-20 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-brand-orange/5 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 inline-block p-6 rounded-full bg-zinc-900 border border-brand-orange/20 text-brand-orange"
               >
                  <Play size={48} fill="currentColor" />
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold font-kaisei mb-6"
               >
                  Video <span className="text-brand-orange">Gallery</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto font-heebo"
               >
                  Our cinematic moments are coming soon. Stay tuned for visuals that move you.
               </motion.p>
            </div>
         </section>
      </div>
   );
};
