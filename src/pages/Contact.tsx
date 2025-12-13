import { Canvas } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
   return (
      <div className="relative min-h-screen bg-black overflow-hidden pt-20">
         <div className="absolute inset-0 z-0">
            <Canvas>
               <PerspectiveCamera makeDefault position={[0, 0, 10]} />
               <color attach="background" args={['#050505']} />
               <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
         </div>

         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 min-h-screen flex items-center justify-center pointer-events-none"
         >
            <div className="w-full pointer-events-auto">
               <ContactForm className="bg-black/20 backdrop-blur-sm relative py-20" />
            </div>
         </motion.div>
      </div>
   );
};

export default Contact;
