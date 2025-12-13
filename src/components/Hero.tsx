import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';
import TextType from './TextType';

import HoverButton from './HoverButton';
import ExploreButton from './ExploreButton';
import LogoCarousel from './LogoCarousel';
import VariableProximity from './VariableProximity';
import ImageMarquee from './ImageMarquee';
import logo from '../assets/logo.jpg';




export const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="home" className="bg-black pb-0 relative overflow-hidden min-h-screen">
      {/* Full Width Image Marquee */}
      <div className="w-full pt-32 pb-8 relative z-20">
        <ImageMarquee />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">

        {/* Welcome Heading */}
        <div className="mb-12 flex justify-center">
          <TextType
            text={[
              'Welcome to Namma Ooru Events',
              'Making Every Moment Count',
              'Your Dream Event Awaits'
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={1500}
            loop={true}
            cursorCharacter="|"
            cursorClassName="text-[#FF9E02]"
            textColors={['#ffffff', '#FF9E02', '#8C0A0A']}
            className="text-xl md:text-2xl font-bold font-kaisei"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">

          {/* Left Column: Text, Services & Buttons */}
          <div className="w-full space-y-8">

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border border-white/50" />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  <span className="font-extrabold">நம்ம ஊரு</span> Events & Management
                </h3>
              </div>
              <div
                ref={containerRef}
                className="text-white text-base leading-relaxed font-sans relative"
                style={{ minHeight: '100px' }} // Ensure container has height
              >
                <VariableProximity
                  label="A lifetime of happiness. With years of experience, we're experts in perfecting the details and creating the extraordinary. We exist so that you can enjoy the fun parts of planning and leave the stress behind."
                  className="cursor-pointer"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef as React.RefObject<HTMLElement>}
                  radius={100}
                  falloff="linear"
                />
              </div>
            </motion.div>

            {/* Buttons Row - Moved here */}
            <div className="flex flex-row items-center justify-start gap-6 w-full">
              {/* Book Now Button */}
              <HoverButton
                text="Booknow!!!"
                width="170px"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />

              <ExploreButton
                onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
              />

            </div>

            {/* Our Team / Services Section */}
            <div className="space-y-6 pt-24">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">OUR SERVICES</h3>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Service List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 flex-grow">
                  {[
                    'WEDDING', 'CATERING',
                    'DJ', 'PHOTOGRAPHY'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 group cursor-pointer"
                      onClick={() => {
                        const routes: { [key: string]: string } = {
                          'WEDDING': '/wedding-planning',
                          'CATERING': '/premium-catering',
                          'DJ': '/dj-sound-systems',
                          'PHOTOGRAPHY': '/professional-photography'
                        };
                        navigate(routes[item]);
                      }}
                    >
                      <ArrowRightCircle size={20} className="text-white group-hover:text-brand-orange transition-colors" />
                      <span className="font-bold text-white text-sm md:text-base tracking-wider group-hover:text-brand-orange transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>


              </div>
            </div>

          </div>



        </div>
      </div >

      {/* Infinite Logo Scroll */}
      < LogoCarousel />
    </div >
  );
};
