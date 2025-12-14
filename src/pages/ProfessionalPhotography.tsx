import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export const ProfessionalPhotography = () => {
   const navigate = useNavigate();

   const features = [
      "Candid Wedding Photography",
      "Cinematic Videography",
      "Drone Shoots",
      "Pre-Wedding Service Shoots",
      "Event Live Streaming",
      "Photo Booths with Props",
      "Same-Day Edit Highlights",
      "Premium Photo Albums"
   ];

   return (
      <div className="pt-24 pb-16 bg-black">
         {/* Hero Section */}
         <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <img
               src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=2070&auto=format&fit=crop"
               alt="Professional Photography"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white text-center font-heebo px-4"
               >
                  Professional Photography
               </motion.h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="bg-zinc-900 rounded-xl shadow-xl p-8 md:p-12 border border-white/10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* Content */}
                  <div>
                     <h2 className="text-3xl font-bold text-brand-orange mb-6">Capturing Moments</h2>
                     <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Memories fade, but photos last forever. Our team of expert photographers and cinematographers captures every emotion, smile, and tear of joy. We use cutting-edge equipment and artistic editing to deliver a visual story that you will cherish for a lifetime. From candid shots to grand cinematic films, we cover it all.
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {features.map((feature, index) => (
                           <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 size={20} className="text-brand-orange" />
                              <span className="text-gray-200 font-medium">{feature}</span>
                           </div>
                        ))}
                     </div>

                     <button
                        onClick={() => navigate('/#contact')}
                        className="bg-[#222] text-white px-8 py-3 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center gap-2"
                     >
                        Book Now <ArrowRight size={20} />
                     </button>
                  </div>

                  {/* Image/Visual Side */}
                  <div className="hidden lg:block relative h-full min-h-[400px] rounded-lg overflow-hidden">
                     <img
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop"
                        alt="Camera Lens"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                     />
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};
