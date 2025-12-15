import { useState } from 'react';
import { Calendar, User, Mail, Phone, MessageSquare, Send, MapPin, IndianRupee, Users } from 'lucide-react';
import HoverButton from '../components/HoverButton';

// The webhook URL for sending form data
const BOOKING_WEBHOOK_URL = "https://hook.eu1.make.com/tp661ttuloow1ankb7jx3nm1m9wwixd4";


export const Booking = () => {
   // Added 'Users' icon import for guest count input
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      eventType: '', // <-- MISSING INPUT ADDED
      date: '',
      guestCount: '', // <-- MISSING INPUT ADDED
      location: '',
      budget: '',
      message: ''
   });

   const [wordCount, setWordCount] = useState(0);
   const [isLoading, setIsLoading] = useState(false); // <-- NEW: for managing submission state

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      if (name === 'message') {
         // Word count logic
         const words = value.trim().split(/\s+/);
         const count = value.trim() === '' ? 0 : words.length;

         if (count <= 250) {
            setFormData({ ...formData, [name]: value });
            setWordCount(count);
         }
      } else {
         setFormData({ ...formData, [name]: value });
      }
   };

   // <-- CRITICAL FIX: Implementation of the async form submission -->
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true); // Start loading

      try {
         const response = await fetch(BOOKING_WEBHOOK_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            alert('Thank you for your inquiry! We will contact you shortly.');
            // Clear the form after successful submission
            setFormData({
               name: '', email: '', phone: '', eventType: '', date: '',
               guestCount: '', location: '', budget: '', message: ''
            });
            setWordCount(0);
         } else {
            alert('Submission failed. Please try again or contact us directly.');
            console.error('Webhook failed:', response.statusText);
         }
      } catch (error) {
         alert('An error occurred during submission. Please check your connection.');
         console.error('Network Error:', error);
      } finally {
         setIsLoading(false); // Stop loading regardless of success/failure
      }
   };
   // <-- END OF CRITICAL FIX -->

   return (
      <div className="min-h-screen bg-black font-heebo">
         <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <h1 className="text-4xl md:text-5xl font-bold font-kaisei text-white mb-4">Contact Us</h1>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to make memories? Fill out the form below to start planning your perfect event with Namma Ooru Events.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

               {/* Contact Form */}
               <div className="lg:col-span-2 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-white/10">
                  <div className="bg-brand-orange p-6 text-center">
                     <p className="text-white font-medium text-lg">Event Details Form</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div className="space-y-2">
                           <label htmlFor="name" className="block text-sm font-bold text-gray-300">Full Name</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <User className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 required
                                 value={formData.name}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                                 placeholder="Arun"
                              />
                           </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                           <label htmlFor="phone" className="block text-sm font-bold text-gray-300">Contact Number</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <Phone className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="tel"
                                 id="phone"
                                 name="phone"
                                 required
                                 value={formData.phone}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                                 placeholder="+91 98765 43210"
                              />
                           </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                           <label htmlFor="email" className="block text-sm font-bold text-gray-300">Email Address</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <Mail className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 required
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                                 placeholder="saivignesh54@gmail.com"
                              />
                           </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                           <label htmlFor="location" className="block text-sm font-bold text-gray-300">Event Location</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <MapPin className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="text"
                                 id="location"
                                 name="location"
                                 required
                                 value={formData.location}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                                 placeholder="City, Venue, or Address"
                              />
                           </div>
                        </div>
                        
                        {/* 🌟 NEW INPUT: Event Type (was missing) 🌟 */}
                        <div className="space-y-2">
                           <label htmlFor="eventType" className="block text-sm font-bold text-gray-300">Type of Event</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <Calendar className="text-gray-400" size={18} />
                              </div>
                              <select
                                 id="eventType"
                                 name="eventType"
                                 required
                                 value={formData.eventType}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3 appearance-none"
                              >
                                 <option value="">Select Event Type</option>
                                 <option value="Wedding">Wedding / Sangeet / Reception</option>
                                 <option value="Birthday">Birthday / Anniversary</option>
                                 <option value="Corporate">Corporate Event / Meeting</option>
                                 <option value="Festival">Festival / Cultural Event</option>
                                 <option value="Other">Other</option>
                              </select>
                           </div>
                        </div>
                        {/* 🌟 END NEW INPUT 🌟 */}

                        {/* Date */}
                        <div className="space-y-2">
                           <label htmlFor="date" className="block text-sm font-bold text-gray-300">Event Date</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <Calendar className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="date"
                                 id="date"
                                 name="date"
                                 required
                                 value={formData.date}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                              />
                           </div>
                        </div>

                        {/* 🌟 NEW INPUT: Guest Count (was missing) 🌟 */}
                        <div className="space-y-2">
                           <label htmlFor="guestCount" className="block text-sm font-bold text-gray-300">Number of Guests</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <Users className="text-gray-400" size={18} />
                              </div>
                              <input
                                 type="number" // Use type="number" for correct mobile keyboard and validation
                                 id="guestCount"
                                 name="guestCount"
                                 required
                                 value={formData.guestCount}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                                 placeholder="e.g., 150"
                                 min="1"
                              />
                           </div>
                        </div>
                        {/* 🌟 END NEW INPUT 🌟 */}


                        {/* Budget */}
                        <div className="space-y-2">
                           <label htmlFor="budget" className="block text-sm font-bold text-gray-300">Estimated Budget</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <IndianRupee className="text-gray-400" size={18} />
                              </div>
                              <select
                                 id="budget"
                                 name="budget"
                                 required
                                 value={formData.budget}
                                 onChange={handleChange}
                                 className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3 appearance-none"
                              >
                                 <option value="">Select Budget Range</option>
                                 <option value="50k-1L">₹50,000 - ₹1 Lakh</option>
                                 <option value="1L-3L">₹1 Lakh - ₹3 Lakhs</option>
                                 <option value="3L-5L">₹3 Lakhs - ₹5 Lakhs</option>
                                 <option value="5L+">₹5 Lakhs+</option>
                              </select>
                           </div>
                        </div>

                     </div>

                     {/* Feedback / Details */}
                     <div className="space-y-2">
                        <div className="flex justify-between items-center">
                           <label htmlFor="message" className="block text-sm font-bold text-gray-300">Feedback / Requirements</label>
                           <span className={`text-xs ${wordCount >= 250 ? 'text-red-500' : 'text-gray-500'}`}>
                              {wordCount} / 250 words
                           </span>
                        </div>
                        <div className="relative">
                           <div className="absolute top-3 left-3 pointer-events-none">
                              <MessageSquare className="text-gray-400" size={18} />
                           </div>
                           <textarea
                              id="message"
                              name="message"
                              rows={5}
                              value={formData.message}
                              onChange={handleChange}
                              className="pl-10 block w-full rounded-lg border-gray-700 bg-zinc-800 text-white border focus:bg-zinc-700 focus:border-brand-orange focus:ring-brand-orange transition-colors py-3"
                              placeholder="Tell us about your event vision, special requests, or feedback..."
                           ></textarea>
                        </div>
                     </div>

                     <div className="flex justify-center">
                        <HoverButton
                           text={
                              <span className="flex items-center gap-2">
                                 <Send size={20} /> {isLoading ? 'Sending...' : 'Contact'}
                              </span>
                           }
                           type="submit"
                           width="100%"
                           disabled={isLoading} // <-- NEW: Disable button while loading
                        />
                     </div>

                  </form>
               </div>

               {/* Sidebar / Map Area */}
               <div className="lg:col-span-1 space-y-6">
                  {/* Info Card */}
                  <div className="bg-zinc-900 rounded-2xl p-6 border border-white/10">
                     <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
                     <div className="space-y-4 text-gray-300">
                        <p className="flex items-start gap-3">
                           <MapPin className="text-brand-orange min-w-[20px]" />
                           <span>16/4 S.S. COMPLEX Railway station road aranthangi 614616</span>
                        </p>
                        <p className="flex items-center gap-3">
                           <Phone className="text-brand-orange" />
                           <span>+91 93616 69314</span>
                        </p>
                        <p className="flex items-center gap-3">
                           <Mail className="text-brand-orange" />
                           <span>nammaooruevents@gmail.com</span>
                        </p>
                     </div>
                  </div>

                  {/* Map Visual */}
                  <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 h-80 relative group">
                     {/* Placeholder Map Image or Iframe */}
                     <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                        <iframe
                           title="Map"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.07544917638!2d78.9959604!3d10.1601709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006764516768b9%3A0xb30e461a720468!2sAranthangi%2C%20Tamil%20Nadu%20614616!5e0!3m2!1sen!2sin!4v1710521400000!5m2!1sen!2sin"
                           className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};