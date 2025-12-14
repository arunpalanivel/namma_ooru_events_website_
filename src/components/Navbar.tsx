
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Image, Play, Mail, Calendar } from 'lucide-react';
import logo from '../assets/logo.jpg';

import HoverButton from './HoverButton';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
   const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
   const [mobileContactOpen, setMobileContactOpen] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const locations = [
      { name: 'Pudukkottai', path: '#contact' },
      { name: 'Thanjavur', path: '#contact' },
      { name: 'Tiruchirappalli', path: '#contact' },
      { name: 'Contact Map', path: '#contact' }
   ];

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/all-services' },
      { name: 'Testimonials', path: '/testimonials' },
      {
         name: 'Gallery',
         children: [
            { name: 'Photo Gallery', path: '/gallery', icon: Image },
            { name: 'Video Gallery', path: '/video-gallery', icon: Play }
         ]
      },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
   ];

   const handleNavigation = (path: string) => {
      setIsOpen(false);
      setMobileLocationsOpen(false);
      setMobileGalleryOpen(false);
      setMobileContactOpen(false);
      if (path.startsWith('#')) {
         const element = document.getElementById(path.substring(1));
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      } else {
         navigate(path);
         window.scrollTo(0, 0);
      }
   };

   const toggleMobileDropdown = (name: string) => {
      if (name === 'Gallery') {
         setMobileGalleryOpen(!mobileGalleryOpen);
         setMobileContactOpen(false);
      } else if (name === 'Contact') {
         setMobileContactOpen(!mobileContactOpen);
         setMobileGalleryOpen(false);
      }
   };

   return (
      <nav
         className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md py-2 border-b border-white/10' : 'bg-transparent py-4'
            }`}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
               {/* Logo */}
               <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                  <img src={logo} alt="Namma Ooru Events" className="h-10 w-10 rounded-full border border-white" />
                  <span className="text-white font-bold text-lg hidden sm:block">Namma Ooru Events</span>
               </Link>

               {/* Desktop Navigation */}
               <div className="hidden md:flex items-center space-x-6">
                  {/* Standard Links */}
                  {navLinks.map((link) => (
                     link.children ? (
                        <div key={link.name} className="relative group">
                           <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-orange ${location.pathname.includes(link.name.toLowerCase()) ? 'text-brand-orange' : 'text-gray-300'}`}>
                              {link.name} <ChevronDown size={14} />
                           </button>
                           <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                              <div className="py-2">
                                 {link.children.map((child) => (
                                    <button
                                       key={child.name}
                                       onClick={() => handleNavigation(child.path)}
                                       className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2"
                                    >
                                       <child.icon size={14} className="text-brand-orange" />
                                       {child.name}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        </div>
                     ) : (
                        <button
                           key={link.name}
                           onClick={() => handleNavigation(link.path)}
                           className={`text-sm font-medium transition-colors hover:text-brand-orange ${location.pathname === link.path ? 'text-brand-orange' : 'text-gray-300'
                              }`}
                        >
                           {link.name}
                        </button>
                     )
                  ))}

                  {/* Locations Dropdown (Desktop) */}
                  <div className="relative group">
                     {/* ... locations ... */}
                     <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors">
                        Locations <ChevronDown size={14} />
                     </button>

                     {/* Dropdown Menu */}
                     <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                        <div className="py-2">
                           <div className="px-4 py-2 text-xs font-bold text-white/50 border-b border-white/10 mb-1">SERVICE AREAS</div>
                           {locations.map((loc) => (
                              <button
                                 key={loc.name}
                                 onClick={() => handleNavigation(loc.path)}
                                 className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2"
                              >
                                 <MapPin size={12} className="text-brand-orange" />
                                 {loc.name}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  <HoverButton text="Book Now" onClick={() => navigate('/booking')} className="scale-75 origin-right transform" />
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="text-gray-300 hover:text-white p-2"
                  >
                     {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Menu */}
         {isOpen && (
            <div className="md:hidden bg-[#0A192F]/95 backdrop-blur-lg border-b border-white/10 absolute top-full left-0 w-full animate-fadeIn max-h-[80vh] overflow-y-auto">
               <div className="px-4 pt-2 pb-6 space-y-4">
                  {navLinks.map((link) => (
                     link.children ? (
                        <div key={link.name}>
                           <button
                              onClick={() => toggleMobileDropdown(link.name)}
                              className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                           >
                              <span>{link.name}</span>
                              <ChevronDown size={16} className={`transition-transform duration-300 ${(link.name === 'Gallery' ? mobileGalleryOpen : mobileContactOpen) ? 'rotate-180' : ''}`} />
                           </button>
                           {((link.name === 'Gallery' && mobileGalleryOpen) || (link.name === 'Contact' && mobileContactOpen)) && (
                              <div className="pl-6 space-y-2 mt-2 border-l-2 border-brand-orange/30 ml-3">
                                 {link.children.map((child) => (
                                    <button
                                       key={child.name}
                                       onClick={() => handleNavigation(child.path)}
                                       className="flex items-center gap-2 text-sm text-gray-400 py-1 w-full text-left hover:text-white"
                                    >
                                       <child.icon size={14} className="text-brand-orange" />
                                       {child.name}
                                    </button>
                                 ))}
                              </div>
                           )}
                        </div>
                     ) : (
                        <button
                           key={link.name}
                           onClick={() => handleNavigation(link.path)}
                           className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${location.pathname === link.path ? 'text-brand-orange' : 'text-gray-300 hover:text-white'
                              }`}
                        >
                           {link.name}
                        </button>
                     )
                  ))}

                  {/* Locations Dropdown (Mobile) */}
                  <div>
                     <button
                        onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                     >
                        <span>Locations</span>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {mobileLocationsOpen && (
                        <div className="pl-6 space-y-2 mt-2 border-l-2 border-brand-orange/30 ml-3">
                           {locations.map((loc) => (
                              <button
                                 key={loc.name}
                                 onClick={() => handleNavigation(loc.path)}
                                 className="flex items-center gap-2 text-sm text-gray-400 py-1 w-full text-left hover:text-white"
                              >
                                 <MapPin size={12} className="text-brand-orange" />
                                 {loc.name}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>

                  <div className="pt-2 flex justify-center">
                     <HoverButton text="Book Now" onClick={() => handleNavigation('/booking')} className="scale-90 transform" />
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
