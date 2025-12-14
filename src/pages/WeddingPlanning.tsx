import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import weddingImg from '../assets/services/wedding_planning.jpg';

import mehendiImg from '../assets/mehendi.jpg';
import Stack from '../components/Stack';
import AnimatedText from '../components/AnimatedText';
import photo1 from '../assets/wedding/photo1.jpg';
import photo2 from '../assets/wedding/photo2.jpg';
import photo3 from '../assets/wedding/photo3.jpg';
import photo4 from '../assets/wedding/photo4.jpg';

export const WeddingPlanning = () => {

   const features = [
      "CREATIVE DECORATION",
      "CINEMATIC PHOTOGRAPHY",
      "CATERING SERVICES",
      "EVENTS"
   ];

   return (
      <div className="pt-24 pb-16 bg-black">
         {/* Hero Section */}
         <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <img
               src={weddingImg}
               alt="Traditional Indian Wedding"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white text-center font-heebo px-4"
               >
                  <AnimatedText text="Dream Weddings" />
               </motion.h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="bg-zinc-900 rounded-xl shadow-xl p-8 md:p-12 border border-white/10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* Content */}
                  <div>
                     <h2 className="text-3xl font-bold text-brand-orange mb-6">Your Fairy Tale Begins Here</h2>
                     <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        At Namma Ooru Events, we understand that a wedding is not just an event; it's a celebration of love, tradition, and new beginnings. Our dedicated team of wedding planners works tirelessly to bring your vision to life, ensuring every detail is perfect. From traditional ceremonies to modern receptions, we handle it all with grace and precision.
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {features.map((feature, index) => (
                           <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 size={20} className="text-brand-orange" />
                              <span className="text-gray-200 font-medium">{feature}</span>
                           </div>
                        ))}
                     </div>


                  </div>

                  {/* Image/Visual Side */}
                  <div className="hidden lg:flex justify-center items-center h-full min-h-[400px] relative">
                     <div style={{ width: 400, height: 400, position: "relative" }}>
                        <Stack
                           randomRotation={true}
                           sensitivity={180}
                           sendToBackOnClick={true}
                           cards={[photo1, photo2, photo3, photo4].map((src, i) => (
                              <img
                                 key={i}
                                 src={src}
                                 alt={`wedding-memory-${i + 1}`}
                                 className="w-full h-full object-cover rounded-xl pointer-events-none"
                              />
                           ))}
                        />
                     </div>
                  </div>

               </div>
            </div>

            {/* Additional Services / Highlights Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
                  <img
                     src={mehendiImg}
                     alt="Mehendi Ceremony"
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-[#8C0A0A] mb-4">Pre-Wedding Rituals</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                     From colorful Mehendi ceremonies to energetic Sangeet nights, we make every pre-wedding ritual vibrant and memorable. Our team handles traditional decor, entertainment, and logistics so you can enjoy every moment with your loved ones.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
