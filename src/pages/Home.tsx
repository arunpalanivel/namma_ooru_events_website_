import { Hero } from '../components/Hero';
import AboutSection from '../components/AboutSection';
import { Services } from '../components/Services';
import { Products } from '../components/Products';


import { motion } from 'framer-motion';


export const Home = () => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.98 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.98 }}
         transition={{ duration: 0.5 }}
      >
         <Hero />
         <Services />
         <AboutSection />
         <Products />



      </motion.div>
   );
};
