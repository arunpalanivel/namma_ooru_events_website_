import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import djImg from '../assets/dj.jpg';
import StarBorder from '../components/StarBorder';

export const DjSoundSystems = () => {
   const navigate = useNavigate();

   const features = [
      "Professional DJs & VJs",
      "High-End Sound Systems (JBL, Bose)",
      "Intelligent Lighting & Lasers",
      "LED Walls & Visuals",
      "Smoke & Fog Machines",
      "Karaoke Setup",
      "Dance Floor Setup",
      "Live Sound Engineering"
   ];

   return (
      <div className="pt-24 pb-16 bg-black">
         {/* Hero Section */}
         <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <img
               src={djImg}
               alt="DJ and Sound setup"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white text-center font-heebo px-4"
               >
                  DJ & Sound Systems
               </motion.h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <div className="bg-zinc-900 rounded-xl shadow-xl p-8 md:p-12 border border-white/10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* Content */}
                  <div>
                     <h2 className="text-3xl font-bold text-brand-orange mb-6">Drop the Beat</h2>
                     <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        Set the pulse of your event with our state-of-the-art sound systems and electrifying DJ services. Whether it's a Sangeet night, a corporate after-party, or a private bash, we ensure crystal clear audio and lighting effects that transform any venue into a concert arena. Our professional DJs know exactly how to read the crowd and keep the dance floor full.
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {features.map((feature, index) => (
                           <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 size={20} className="text-brand-orange" />
                              <span className="text-gray-200 font-medium">{feature}</span>
                           </div>
                        ))}
                     </div>

                     <StarBorder
                        as="button"
                        onClick={() => navigate('/#contact')}
                        color="#8C0A0A"
                        speed="4s"
                        className="px-8 py-3 font-bold text-lg flex items-center gap-2"
                     >
                        Book DJ & Sound <ArrowRight size={20} />
                     </StarBorder>
                  </div>

                  {/* Image/Visual Side */}
                  <div className="hidden lg:block relative h-full min-h-[400px] rounded-lg overflow-hidden">
                     <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
                        alt="Party Lighting"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                     />
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};
