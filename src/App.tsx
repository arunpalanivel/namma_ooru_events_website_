import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WeddingPlanning } from './pages/WeddingPlanning';
import { PremiumCatering } from './pages/PremiumCatering';
import { DjSoundSystems } from './pages/DjSoundSystems';
import { ProfessionalPhotography } from './pages/ProfessionalPhotography';
import { Testimonials } from './pages/Testimonials';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { VideoGallery } from './pages/VideoGallery';
import { Booking } from './pages/Booking';
import { AllServices } from './pages/AllServices';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import LightRays from './components/LightRays';
import ChatBot from './components/ChatBot';
import LanyardPopup from './components/LanyardPopup';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/premium-catering" element={<PremiumCatering />} />
        <Route path="/dj-sound-systems" element={<DjSoundSystems />} />
        <Route path="/professional-photography" element={<ProfessionalPhotography />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  return location.pathname === '/' ? <Footer /> : null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <LightRays
            raysColor="#4D4D4D"
            raysSpeed={0.2}
            lightSpread={0.2}
            rayLength={0.5}
            fadeDistance={1.0}
            pulsating={true}
            mouseInfluence={0.05}
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <LanyardPopup />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <ChatBot />
          <ConditionalFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
