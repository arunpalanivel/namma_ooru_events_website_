
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import cateringImg from '../assets/services/catering_new.jpg';
import photographyImg from '../assets/services/photography_new.jpg';
import djImg from '../assets/services/dj_new.jpg';
import popcornImg from '../assets/services/popcorn.jpg';
import iceCreamImg from '../assets/services/ice_cream.jpg';
import sweetBeedaImg from '../assets/services/sweet_beeda.jpg';
import weddingPlanningImg from '../assets/services/wedding_planning.jpg';
import garlandImg from '../assets/services/garland.jpg';
import fruitSaladImg from '../assets/services/fruit_salad.jpg';
import freshJuiceImg from '../assets/services/fresh_juice.jpg';
import receptionGirlsImg from '../assets/services/reception_girls.jpg';
import beauticianImg from '../assets/services/beautician.jpg';
import mehandiImg from '../assets/services/mehandi.jpg';
import cottonCandyImg from '../assets/services/cotton_candy.jpg';

const allServices = [
   {
      id: 1,
      title: "WEDDING PLANNING",
      desc: "Your dream day, perfected. Full-service orchestration.",
      link: "/wedding-planning",
      img: weddingPlanningImg
   },
   {
      id: 2,
      title: "PREMIUM CATERING",
      desc: "Exquisite culinary experiences for every palate.",
      link: "/premium-catering",
      img: cateringImg
   },
   {
      id: 3,
      title: "DJ & SOUND SYSTEMS",
      desc: "High-fidelity audio & lighting.",
      link: "/dj-sound-systems",
      img: djImg
   },
   {
      id: 4,
      title: "PROFESSIONAL PHOTOGRAPHY",
      desc: "Capturing every moment cinematically.",
      link: "/professional-photography",
      img: photographyImg
   },




   {
      id: 9,
      title: "SWEET BEEDA",
      desc: "A traditional finish to a grand meal.",
      link: "/booking",
      img: sweetBeedaImg
   },
   {
      id: 10,
      title: "ICE CREAMS",
      desc: "Delicious scoops to cool down.",
      link: "/booking",
      img: iceCreamImg
   },
   {
      id: 11,
      title: "POPCORN",
      desc: "Freshly popped, buttery goodness.",
      link: "/booking",
      img: popcornImg
   },
   {
      id: 12,
      title: "COTTON CANDY",
      desc: "Sweet fluffy clouds of joy.",
      link: "/booking",
      img: cottonCandyImg
   },
   {
      id: 13,
      title: "MEHANDI",
      desc: "Beautiful henna designs for the bride & guests.",
      link: "/booking",
      img: mehandiImg
   },
   {
      id: 14,
      title: "BEAUTICIAN",
      desc: "Professional makeup and styling.",
      link: "/booking",
      img: beauticianImg
   },
   {
      id: 15,
      title: "RECEPTION GIRLS",
      desc: "Welcoming hostesses for your event.",
      link: "/booking",
      img: receptionGirlsImg
   },

   {
      id: 17,
      title: "FRUIT SALAD",
      desc: "Fresh and healthy fruit bowls.",
      link: "/booking",
      img: fruitSaladImg
   },
   {
      id: 18,
      title: "FRESH JUICE",
      desc: "Refreshing natural juices.",
      link: "/booking",
      img: freshJuiceImg
   },
   {
      id: 19,
      title: "GARLAND",
      desc: "Exquisite floral garlands for the couple.",
      link: "/booking",
      img: garlandImg
   }
];

export const AllServices = () => {
   return (
      <div className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-12">
               <Link to="/" className="inline-flex items-center text-brand-orange hover:text-white mb-8 transition-colors">
                  <ArrowLeft className="mr-2" size={20} /> Back to Home
               </Link>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold font-kaisei text-white mb-4"
               >
                  All Our <span className="text-brand-orange">Services</span>
               </motion.h1>
               <p className="text-gray-400 max-w-2xl font-heebo text-lg">
                  Explore our comprehensive range of event management services designed to make your occasion unforgettable.
               </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {allServices.map((service, index) => (
                  <Link
                     to={service.link}
                     key={service.id}
                     className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                  >
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex flex-col h-full"
                     >
                        <div className="relative h-48 overflow-hidden">
                           <img
                              src={service.img}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                           <h3 className="text-xl font-bold text-white font-kaisei mb-2 group-hover:text-brand-orange transition-colors">
                              {service.title}
                           </h3>
                           <p className="text-gray-400 text-sm font-heebo flex-grow">
                              {service.desc}
                           </p>

                           <div className="mt-4 flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase">
                              Contact <ArrowRight size={14} />
                           </div>
                        </div>
                     </motion.div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};
