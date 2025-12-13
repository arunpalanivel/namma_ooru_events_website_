
import { useEffect, useState } from 'react';
import BikeLoader from './BikeLoader';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LanyardPopup() {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      // Show for 8 seconds
      const timer = setTimeout(() => {
         setVisible(false);
      }, 8000);
      return () => clearTimeout(timer);
   }, []);

   return (
      <AnimatePresence>
         {visible && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            >
               <div className="absolute top-4 right-4 z-[101]">
                  <button
                     onClick={() => setVisible(false)}
                     className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors border border-white/20"
                  >
                     <X size={24} />
                  </button>
               </div>

               <div className="w-full h-full relative flex flex-col items-center justify-center gap-8">
                  <BikeLoader />

                  <div className="text-center">
                     <p className="text-white/80 font-bold tracking-widest text-lg uppercase">
                        MADE WITH ARC PAIR STUDIO
                     </p>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
