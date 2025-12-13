import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, Image as ImageIcon, Star, Quote, User } from 'lucide-react';
import GradientButton from '../components/GradientButton';

export const Testimonials = () => {
   interface Feedback {
      id: number;
      text: string;
      image: string | null;
      name: string;
      date: string;
   }

   const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
   const [feedback, setFeedback] = useState('');
   const [image, setImage] = useState<File | null>(null);

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         setImage(e.target.files[0]);
      }
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newFeedback: Feedback = {
         id: Date.now(),
         text: feedback,
         image: image ? URL.createObjectURL(image) : null,
         name: "Guest User",
         date: new Date().toLocaleDateString()
      };

      setFeedbacks([newFeedback, ...feedbacks]);
      alert("Thank you playing! Your feedback has been added below.");
      setFeedback("");
      setImage(null);
   };

   return (
      <div className="pt-24 min-h-screen bg-black">
         {/* Hero Section */}
         <section className="relative bg-black text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-brand-orange/5 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold font-kaisei mb-6"
               >
                  Client <span className="text-brand-orange">Love</span>
               </motion.h1>
            </div>
         </section>

         {/* Single Testimonial */}
         <section className="py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 p-8 md:p-12 rounded-2xl shadow-lg border border-white/10 relative group"
               >
                  <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Quote size={64} className="text-brand-orange" />
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                     <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-xl font-bold border-2 border-brand-orange/50">
                        VS
                     </div>
                     <div>
                        <h3 className="font-bold text-2xl font-kaisei text-white">Vicky & Sri</h3>
                        <p className="text-brand-orange font-medium">Wedding</p>
                     </div>
                     <div className="flex gap-1 text-brand-orange md:ml-auto">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} size={20} fill="currentColor" />
                        ))}
                     </div>
                  </div>

                  <p className="text-gray-300 font-heebo leading-relaxed italic text-lg relative z-10">
                     "Namma Ooru Events made our wedding absolutely magical! The decor was stunning, and the team managed everything perfectly. We couldn't have asked for a better experience."
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Marquee Section (Right to Left) */}
         <section className="w-full overflow-hidden py-10 relative bg-black">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

            <motion.div
               className="whitespace-nowrap flex gap-8 text-6xl md:text-8xl font-bold text-white/5 font-kaisei uppercase tracking-wider"
               animate={{ x: ["0%", "-50%"] }}
               transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
               }}
            >
               <span>Reviews Coming Soon • Reviews Coming Soon • Reviews Coming Soon •</span>
               <span>Reviews Coming Soon • Reviews Coming Soon • Reviews Coming Soon •</span>
            </motion.div>
         </section>

         {/* Feedback Form Section */}
         <section className="py-12 pb-24">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10"
               >
                  <h3 className="text-3xl font-bold text-white mb-2 text-center font-kaisei">We Value Your <span className="text-brand-orange">Feedback</span></h3>
                  <p className="text-gray-400 text-center mb-8 font-heebo">Share your experience with us. We'd love to hear from you!</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="space-y-2">
                        <label htmlFor="feedback" className="block text-sm font-bold text-gray-300 ml-1">Your Message</label>
                        <textarea
                           id="feedback"
                           value={feedback}
                           onChange={(e) => setFeedback(e.target.value)}
                           rows={5}
                           className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all resize-none placeholder:text-gray-600"
                           placeholder="How was your experience with Namma Ooru Events?"
                           required
                        />
                     </div>

                     <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-300 ml-1">Upload Photo</label>
                        <div className="relative group">
                           <input
                              type="file"
                              accept="image/*"
                              capture="environment"
                              onChange={handleImageChange}
                              className="hidden"
                              id="feedback-image"
                           />
                           <label
                              htmlFor="feedback-image"
                              className={`w-full flex flex-col items-center justify-center gap-3 bg-black/40 border-2 border-dashed ${image ? 'border-brand-orange/50 bg-brand-orange/5' : 'border-white/10 hover:border-brand-orange/40 hover:bg-white/5'} rounded-xl p-8 cursor-pointer transition-all duration-300`}
                           >
                              {image ? (
                                 <>
                                    <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                                       <ImageIcon size={24} />
                                    </div>
                                    <div className="text-center">
                                       <p className="text-brand-orange font-medium truncate max-w-[200px]">{image.name}</p>
                                       <p className="text-xs text-brand-orange/70 mt-1">Click to change</p>
                                    </div>
                                 </>
                              ) : (
                                 <>
                                    <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-brand-orange/20 flex items-center justify-center text-gray-400 group-hover:text-brand-orange transition-colors">
                                       <Upload size={24} />
                                    </div>
                                    <div className="text-center">
                                       <p className="text-gray-300 font-medium group-hover:text-white">Upload or Take Photo</p>
                                       <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">Supports JPG, PNG</p>
                                    </div>
                                 </>
                              )}
                           </label>
                        </div>
                     </div>

                     <div className="pt-4 flex justify-center">
                        <GradientButton
                           type="submit"
                           className="w-full sm:w-auto"
                           btnClassName="px-12 py-3 font-bold text-lg flex items-center justify-center gap-2 w-full"
                        >
                           Submit Feedback <Send size={18} />
                        </GradientButton>
                     </div>
                  </form>
               </motion.div>
            </div>
         </section>
         {/* Recently Submitted Reviews */}
         {feedbacks.length > 0 && (
            <section className="py-20 bg-zinc-900/30 border-t border-white/5">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="text-3xl md:text-5xl font-bold font-kaisei text-white mb-12 text-center"
                  >
                     Recent <span className="text-brand-orange">Feedback</span>
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {feedbacks.map((item) => (
                        <motion.div
                           key={item.id}
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-white/10 relative overflow-hidden"
                        >
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                                 <User className="text-gray-400" size={20} />
                              </div>
                              <div>
                                 <h4 className="font-bold text-white font-kaisei">{item.name}</h4>
                                 <span className="text-xs text-brand-orange">{item.date}</span>
                              </div>
                           </div>

                           <p className="text-gray-300 font-heebo italic mb-4">"{item.text}"</p>

                           {item.image && (
                              <div className="mt-4 rounded-xl overflow-hidden border border-white/10 h-48">
                                 <img
                                    src={item.image}
                                    alt="User upload"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                 />
                              </div>
                           )}
                        </motion.div>
                     ))}
                  </div>
               </div>
            </section>
         )}
      </div>
   );
};
