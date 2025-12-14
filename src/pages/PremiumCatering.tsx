import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tamilBreakfastImg from '../assets/services/tamil_breakfast.jpg';
import tamilLunchImg from '../assets/services/tamil_lunch.jpg';
import tamilEveningImg from '../assets/services/tamil_evening.jpg';
import tamilNonVegImg from '../assets/services/tamil_non_veg.jpg';

export const PremiumCatering = () => {
   const navigate = useNavigate();

   return (
      <div className="pt-24 pb-16 bg-black">
         {/* Hero Section */}
         <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
            <img
               src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
               alt="Premium Catering"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white text-center font-heebo px-4"
               >
                  Premium Catering
               </motion.h1>
            </div>
         </div>


         {/* Menu Packages Section */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-kaisei mb-12">
               Our <span className="text-brand-orange">Menu Packages</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "MORNING TIFFEN", img: tamilBreakfastImg },
                  { title: "AFTERNOON LUNCH", img: tamilLunchImg },
                  { title: "EVENING DINNER", img: tamilEveningImg },
                  { title: "NON VEGETARIAN", img: tamilNonVegImg }
               ].map((item, index) => (
                  <div key={index} className="bg-[#F4C466] rounded-xl p-6 flex flex-col items-center justify-between h-[450px] relative overflow-hidden group shadow-lg transition-transform hover:-translate-y-2 duration-300">

                     {/* Circular Image Container */}
                     <div className="w-56 h-56 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative z-10 bg-white">
                        <img
                           src={item.img}
                           alt={item.title}
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                     </div>

                     {/* Title */}
                     <h3 className="text-[#8C0A0A] font-bold text-xl md:text-2xl uppercase tracking-wider mb-8 text-center font-heebo">
                        {item.title}
                     </h3>

                     {/* View Button */}
                     <button
                        onClick={() => {
                           if (item.title === "MORNING TIFFEN") {
                              document.getElementById('morning-special-menus')?.scrollIntoView({ behavior: 'smooth' });
                           } else if (item.title === "AFTERNOON LUNCH") {
                              document.getElementById('afternoon-special-menus')?.scrollIntoView({ behavior: 'smooth' });
                           } else if (item.title === "EVENING DINNER") {
                              document.getElementById('evening-special-menus')?.scrollIntoView({ behavior: 'smooth' });
                           } else if (item.title === "NON VEGETARIAN") {
                              document.getElementById('non-veg-special-menus')?.scrollIntoView({ behavior: 'smooth' });
                           } else {
                              navigate('/booking');
                           }
                        }}
                        className="bg-[#222] text-white px-8 py-2 rounded-md font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center gap-2"
                     >
                        View <ArrowRight size={16} />
                     </button>

                     {/* Decorative Elements */}
                     <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                     <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#8C0A0A]/10 rounded-full blur-2xl pointer-events-none"></div>
                  </div>
               ))}
            </div>
         </div>

         {/* Morning Special Menus Section */}
         <div id="morning-special-menus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16 border-t border-white/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-kaisei mb-4">
               Morning <span className="text-brand-orange">Special Menus</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-heebo">
               Authentic South Indian breakfast combinations to start your special day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  {
                     code: "NOC CODE - B01",
                     items: "ஸ்வீட், இட்லி, வெண் பொங்கல், பூரி, பொடி ஊத்தப்பம், தேங்காய் சட்னி, கார சட்னி, சாம்பார், உருளை மசால், மெதுவடை, காபி."
                  },
                  {
                     code: "NOC CODE - B02",
                     items: "ஸ்வீட் அசோகா அல்வா, இட்லி, மிளகு பொங்கல், வெஜ் ஊத்தப்பம், பூரி, உருளை மசால், அடை+அவியல், தேங்காய் சட்னி, கார சட்னி, சாம்பார், மெதுவடை, காபி."
                  },
                  {
                     code: "NOC CODE - B03",
                     items: "ஸ்வீட், இட்லி, மிளகு பொங்கல், மசால் தோசை, பூரி, சேமியா கிச்சடி, வெஜ் பிரியாணி, ஆனியன் பச்சடி, சாம்பார், வடை, உருளை மசால், தேங்காய் சட்னி, புதினா சட்னி, வதக்கல் சட்னி, பில்டர் காபி / டீ, ஐஸ்கிரீம்."
                  },
                  {
                     code: "NOC CODE - B04",
                     items: "ஸ்வீட் ரசமலாய், ஹார்டின் / ஸ்பெஷல் இட்லி, ஸ்பெஷல் தோசை, நெய் புட்டு, கோதுமை ரவா / நெய் மிளகு பொங்கல், ஸ்பெஷல் பூரி, வெஜ் கொத்து இடியாப்பம் / லெமன் சேவ், மஸ்ரூம் பிரியாணி, ஆனியன் பச்சடி, பனியாரம் (காரம் / இனிப்பு), தேங்காய் சட்னி, மல்லி சட்னி, டேங்கர் சட்னி, இட்லி பொடி, நல்லெண்ணெய், சாம்பார், பில்டர் காபி / டீ, ஐஸ்கிரீம், பீடா."
                  }
               ].map((menu, index) => (
                  <div key={index} className="bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-brand-orange/50 transition-colors group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-orange select-none">
                        {menu.code.split('-')[1].trim()}
                     </div>

                     <div className="relative z-10">
                        <h3 className="text-brand-orange font-bold text-xl mb-4 font-heebo border-b border-white/10 pb-2 inline-block">
                           {menu.code}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-heebo">
                           {menu.items}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                           <button
                              onClick={() => navigate('/booking')}
                              className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-brand-orange transition-colors"
                           >
                              Book This Menu <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Afternoon Special Menus Section */}
         <div id="afternoon-special-menus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16 border-t border-white/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-kaisei mb-4">
               Afternoon <span className="text-brand-orange">Special Menus</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-heebo">
               Grand South Indian Lunch feasts to satisfy your guests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  {
                     code: "NOC CODE - L01",
                     items: "ஸ்வீட், சாதம், சாம்பார், வத்தல் குழம்பு, ரசம், மோர், கூட்டு, பொறியல், காரகறி, அப்பளம், பட்டணம் பக்கோடா, பாயாசம், ஊறுகாய்."
                  },
                  {
                     code: "NOC CODE - L02",
                     items: "ஸ்வீட், சாதம், சாம்பார்(க.மு.மா), வத்தல் குழம்பு, ரசம், மோர், பாயாசம், அப்பளம், பருப்பு வடை, கூட்டு, பொறியல், சாப்ஸ், வெண்டைக்காய் புளி மண்டி, வெரைட்டி ரைஸ், கலர் வத்தல், ஊறுகாய்."
                  },
                  {
                     code: "NOC CODE - L03",
                     items: "ஸ்வீட் நெய் மைசூர் பாக், சாதம், பருப்பு + நெய், சாம்பார்(க.மு.மா), வத்தல் குழம்பு, ரசம், கெட்டி மோர், பாயாசம், அப்பளம், போண்டா, பொறியல்(பீன்ஸ் + கேரட்), சாப்ஸ்(சேனை), உருளை பால்கறி, கூட்டு(சவ்சவ்), வெஜ் பிரியாணி, ஆனியன் பச்சடி, மாங்காய் ஊறுகாய், மோர் மிளகாய், கோபி, ஐஸ்கிரீம், பீடா."
                  },
                  {
                     code: "NOC CODE - L04",
                     items: "ஸ்வீட் கார்ன் சூப், ஸ்பெஷல் மில்க் ஸ்வீட், மினி சப்பாத்தி, வெஜ் குருமா, பருப்பு பொடி + நெய் சாதம், சாம்பார், மோர் குழம்பு, தக்காளி ரசம், கெட்டி தயிர், கூட்டு, பொறியல், அவியல், சாப்ஸ், வெஜ் மீன் வறுவல், கோபி மஞ்சூரியன், ஸ்பெஷல் பாயாசம், மஸ்ரூம் பிரியாணி, வெள்ளரி தயிர் பச்சடி, மா இஞ்சி ஊறுகாய், ஐஸ்கிரீம், குல்கந்து பீடா, வாழைப்பழம்."
                  }
               ].map((menu, index) => (
                  <div key={index} className="bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-brand-orange/50 transition-colors group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-orange select-none">
                        {menu.code.split('-')[1].trim()}
                     </div>

                     <div className="relative z-10">
                        <h3 className="text-brand-orange font-bold text-xl mb-4 font-heebo border-b border-white/10 pb-2 inline-block">
                           {menu.code}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-heebo">
                           {menu.items}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                           <button
                              onClick={() => navigate('/booking')}
                              className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-brand-orange transition-colors"
                           >
                              Book This Menu <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Evening Special Menus Section */}
         <div id="evening-special-menus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16 border-t border-white/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-kaisei mb-4">
               Evening <span className="text-brand-orange">Special Menus</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-heebo">
               Delightful dinner combinations for a perfect evening.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  {
                     code: "NOC CODE - D01",
                     items: "ஸ்வீட், இட்லி, மினி ஊத்தப்பம், சப்பாத்தி, சாம்பார் சாதம், தேங்காய் சட்னி, கார சட்னி, சாம்பார், சென்னா மசால், மைசூர் போண்டா, மசாலா பால்."
                  },
                  {
                     code: "NOC CODE - D02",
                     items: "ஸ்வீட், இட்லி / மினி இட்லி, ஊத்தப்பம் (கேரட் / வெஜ்), சேமியா கிச்சடி, புரோட்டா, வெஜ் புலாவ், வெஜ் கட்லட், சாஸ், தேங்காய் சட்னி, தக்காளி சட்னி, சாம்பார், வெஜ் குருமா, பாதாம் பால், ஐஸ்கிரீம்."
                  },
                  {
                     code: "NOC CODE - D03",
                     items: "ஸ்வீட் கோதுமை அல்வா, இட்லி / பொடி இட்லி, நெய் ரோஸ்ட், பிரியாணி (வெஜ் / மஸ்ரூம்), ரோமாலி ரொட்டி / புல்கா, கைமா / சில்லி புரோட்டா, தயிர் சாதம், வெஜ் சீஸ் பால், ஆனியன் பச்சடி, தேங்காய் சட்னி, கார சட்னி, மல்லி சட்னி, சாம்பார், பன்னீர் பட்டர் மசாலா, ஊறுகாய், கற்கண்டு பால், ஐஸ்கிரீம், பீடா."
                  },
                  {
                     code: "NOC CODE - D04",
                     items: "ஸ்வீட் மலாய் சான்ட்விச், வெஜ் சூப், வெஜ் பிஸ் பிங்கர் / கோபி மஞ்சூரியன், ஸ்பெஷல் இட்லி, ஸ்பெஷல் தோசை, (மஸ்ரூம் / பன்னீர்), பட்டர் நாண் / கோதுமை புரோட்டா, வெஜ் / மஸ்ரூம் ப்ரைடு ரைஸ், இடியாப்பம், வத்தல் குழம்பு சாதம் / தயிர் சாதம், தேங்காய் சட்னி, டேங்கர் சட்னி, புதினா சட்னி, இட்லி பொடி, நல்லெண்ணெய், சாம்பார், கடாய் பன்னீர் கிரேவி, வெஜ் குருமா, மாங்காய் தொங்கு, ஸ்பெஷல் பாதாம் பால், ஐஸ்கிரீம் + ட்ரை ஜாமுன், குல்கந்து பீடா."
                  }
               ].map((menu, index) => (
                  <div key={index} className="bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-brand-orange/50 transition-colors group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-orange select-none">
                        {menu.code.split('-')[1].trim()}
                     </div>

                     <div className="relative z-10">
                        <h3 className="text-brand-orange font-bold text-xl mb-4 font-heebo border-b border-white/10 pb-2 inline-block">
                           {menu.code}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-heebo">
                           {menu.items}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                           <button
                              onClick={() => navigate('/booking')}
                              className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-brand-orange transition-colors"
                           >
                              Book This Menu <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* Non-Vegetarian Special Menus Section */}
         <div id="non-veg-special-menus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16 border-t border-white/10 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-kaisei mb-4">
               Non-Vegetarian <span className="text-brand-orange">Special Menus</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-heebo">
               Feast like royalty with our premium non-vegetarian selections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  {
                     code: "NOC CODE - NV-01",
                     items: "ஸ்வீட், தால்சா, சிக்கன் பிரியாணி, முட்டை மசால், ஆனியன் பச்சடி, தயிர்சாதம், ஊறுகாய்."
                  },
                  {
                     code: "NOC CODE - NV-02",
                     items: "ஸ்வீட் பீர்னி, மிளகு சிக்கன் கிரேவி, மட்டன் பிரியாணி, தயிர்சாதம், ஊறுகாய், ஆனியன் பச்சடி, தால்சா."
                  },
                  {
                     code: "NOC CODE - NV-03",
                     items: "ஸ்வீட் பிரட் அல்வா, சிக்கன் 65, மட்டன் பிரியாணி, முட்டை மசால், ஆனியன் பச்சடி, சாதம், ரசம், மோர், தால்சா, ஐஸ்கிரீம், பீடா."
                  },
                  {
                     code: "NOC CODE - NV-04",
                     items: "ஸ்வீட் மொசம்பீர், சிக்கன் மஞ்சூரியன், மட்டன் பிரியாணி, முட்டை வகைகள் (லைவ்), ஆனியன் பச்சடி, Crab Lollypop / Fish Finger, தால்சா, கத்திரிக்காய் புளி கட்டா, சாதம், ரசம், மோர், ஐஸ்கிரீம், குல்கந்து (Live)."
                  }
               ].map((menu, index) => (
                  <div key={index} className="bg-zinc-900 border border-white/10 rounded-xl p-8 hover:border-brand-orange/50 transition-colors group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-brand-orange select-none">
                        {menu.code.replace('NOC CODE - ', '')}
                     </div>

                     <div className="relative z-10">
                        <h3 className="text-brand-orange font-bold text-xl mb-4 font-heebo border-b border-white/10 pb-2 inline-block">
                           {menu.code}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-heebo">
                           {menu.items}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                           <button
                              onClick={() => navigate('/booking')}
                              className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-brand-orange transition-colors"
                           >
                              Book This Menu <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div >
   );
};
