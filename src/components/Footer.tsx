
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Youtube, MessageCircle, ArrowRight, Instagram } from 'lucide-react';
import StarBorder from './StarBorder';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 font-heebo relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2 font-kaisei">Namma Ooru Events</h3>
              <p className="text-white/70 text-sm">Making every moment count.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:nammaooruevents@gmail.com" className="font-medium hover:text-brand-orange transition-colors">nammaooruevents@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Visit Us</p>
                  <a
                    href="https://maps.google.com/?q=16/4+S.S.+COMPLEX+Railway+station+road+aranthangi+614616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-brand-orange transition-colors block"
                  >
                    16/4 S.S. COMPLEX<br />
                    Railway station road aranthangi  614616
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:9361669314" className="font-bold text-lg hover:text-brand-orange transition-colors">9361669314</a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white/5 p-2 rounded-2xl border border-white/10 h-[300px]">
            <iframe
              title="Locate Us"
              src="https://maps.google.com/maps?q=16/4%20S.S.%20COMPLEX%20Railway%20station%20road%20aranthangi%20614616&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-kaisei">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/namma__ooru__events?igsh=MXhueW5pMXN2amRlcA==" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-pink-600 hover:scale-110 transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-red-600 hover:scale-110 transition-all">
                  <Youtube size={24} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-600 hover:scale-110 transition-all">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div className="mt-10 p-6 bg-brand-orange rounded-2xl text-center shadow-lg transform hover:-translate-y-1 transition-transform">
              <h4 className="text-xl font-bold mb-2">Ready to Plan?</h4>
              <p className="text-sm text-white/90 mb-4">Let's make your event unforgettable.</p>
              <StarBorder
                as={Link}
                to="/booking"
                color="#8C0A0A"
                speed="4s"
                className="w-full font-bold flex items-center justify-center gap-2"
              >
                Book Now <ArrowRight size={18} />
              </StarBorder>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 Namma Ooru Events & Management. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
