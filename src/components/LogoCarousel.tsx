import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Chrome } from 'lucide-react';
import arcPairLogoOld from '../assets/arc-pair-studio-logo.png'; // Renamed to avoid conflict


const CompanyLogoData = [
   { Icon: Facebook, alt: 'Facebook' },
   { Icon: Instagram, alt: 'Instagram' },
   { Icon: Twitter, alt: 'Twitter' },
   { Icon: Youtube, alt: 'YouTube' },
   { Icon: Chrome, alt: 'Google' },
   { Icon: ({ className }: { className?: string }) => <img src={arcPairLogoOld} alt="Arc Pair Studio" className={className} style={{ filter: 'invert(1)' }} />, alt: 'Arc Pair Studio' },
];

const LogoCarousel = () => {
   return (
      <div className="container mx-auto p-5">
         <h2 className="text-center text-xl text-white/70 my-5 font-ibmMono">
            Namma Ooru Events & Management
         </h2>
         <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-black before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-black after:to-transparent after:content-['']">
            <motion.div
               transition={{
                  duration: 20,
                  ease: 'linear',
                  repeat: Infinity,
               }}
               initial={{ translateX: 0 }}
               animate={{ translateX: '-50%' }}
               className="flex flex-none gap-16 pr-16"
            >
               {[...new Array(2)].fill(0).map((_, index) => (
                  <React.Fragment key={index}>
                     {CompanyLogoData.map(({ Icon, alt }) => (
                        <div key={`${alt}-${index}`} className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors">
                           <Icon className="h-8 w-auto flex-none" />
                           <span className="text-lg font-bold font-sans hidden md:block">{alt}</span>
                        </div>
                     ))}
                  </React.Fragment>
               ))}
            </motion.div>
         </div>
      </div>
   );
};

export default LogoCarousel;
