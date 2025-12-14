import { MapPin, Phone, Clock } from 'lucide-react';
import HoverButton from '../components/HoverButton';

const CONTACT_WEBHOOK_URL = "https://hook.eu1.make.com/a623wfcvwqm57xbk7veq6b36ijsyatlj"; 

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Get Form Data from the DOM
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to a JSON object
    const data = Object.fromEntries(formData.entries());
    
    // Add Timestamp (crucial for your spreadsheet)
    data.Timestamp = new Date().toLocaleString();

    // 2. Prepare for Submission using Fetch API
    try {
        const response = await fetch(CONTACT_WEBHOOK_URL, {
            method: 'POST',
            // IMPORTANT: Tell Make we are sending JSON data
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data), 
        });

        // Make typically returns a 200 or 202 status on success
        if (response.ok || response.status === 200 || response.status === 202) {
            alert('Message Sent! We will contact you soon.');
            form.reset(); // Clear the form
        } else {
            // Log the status if the submission failed
            console.error('Submission Failed with status:', response.status);
            alert('Failed to send inquiry. Please check your network.');
        }

    } catch (error) {
        console.error('Network Error:', error);
        alert('A network error occurred.');
    }
};
const Contact = () => {
   return (
      <section className="bg-black pt-20 pb-12" id="contact">
         <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
               <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                  <p className="text-base font-semibold uppercase tracking-wide text-brand-orange">
                     Contact
                  </p>
                  <h2
                     className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl font-kaisei"
                  >
                     Get in Touch
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-400 font-heebo">
                     We are here to help you plan your perfect event. Reach out to us for any inquiries.
                  </p>
               </div>
            </div>
            <div className="flex items-stretch justify-center">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-full pr-6">
                     <p className="mt-3 mb-12 text-lg text-slate-400 font-heebo">
                        Whether you have a question about our services, pricing, or want to book a consultation, our team is ready to answer all your questions.
                     </p>
                     <ul className="mb-6 md:mb-0 space-y-6">
                        <li className="flex">
                           <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                              <MapPin className="h-6 w-6" />
                           </div>
                           <div className="ml-4 mb-4">
                              <h3 className="mb-2 text-lg font-medium leading-6 text-white font-kaisei">Our Address</h3>
                              <p className="text-slate-400 font-heebo">16/4 S.S. COMPLEX</p>
                              <p className="text-slate-400 font-heebo">Railway station road, Aranthangi 614616</p>
                           </div>
                        </li>
                        <li className="flex">
                           <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                              <Phone className="h-6 w-6" />
                           </div>
                           <div className="ml-4 mb-4">
                              <h3 className="mb-2 text-lg font-medium leading-6 text-white font-kaisei">Contact</h3>
                              <p className="text-slate-400 font-heebo">Mobile: +91 93616 69314</p>
                              <p className="text-slate-400 font-heebo">Mail: nammaooruevents@gmail.com</p>
                           </div>
                        </li>
                        <li className="flex">
                           <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                              <Clock className="h-6 w-6" />
                           </div>
                           <div className="ml-4 mb-4">
                              <h3 className="mb-2 text-lg font-medium leading-6 text-white font-kaisei">Working hours</h3>
                              <p className="text-slate-400 font-heebo">Monday - Sunday: 24 Hours</p>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className="card h-fit max-w-6xl p-5 md:p-12 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/10" id="form">
                     <h2 className="mb-4 text-2xl font-bold text-white font-kaisei">Ready to Get Started?</h2>
                     <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="mb-6">
                           <div className="mx-0 mb-1 sm:mb-4">
                              <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider text-white"></label>
                              <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-700 bg-black/50 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0 focus:border-brand-orange focus:ring-brand-orange outline-none transition-colors" name="name" />
                           </div>
                           <div className="mx-0 mb-1 sm:mb-4">
                              <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider text-white"></label>
                              <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-700 bg-black/50 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0 focus:border-brand-orange focus:ring-brand-orange outline-none transition-colors" name="email" />
                           </div>
                           <div className="mx-0 mb-1 sm:mb-4">
                              <label htmlFor="location" className="pb-1 text-xs uppercase tracking-wider text-white"></label>
                              <input type="text" id="location" placeholder="Location" className="mb-2 w-full rounded-md border border-gray-700 bg-black/50 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0 focus:border-brand-orange focus:ring-brand-orange outline-none transition-colors" name="location" />
                           </div>
                           <div className="mx-0 mb-1 sm:mb-4">
                              <label htmlFor="phone" className="pb-1 text-xs uppercase tracking-wider text-white"></label>
                              <input type="tel" id="phone" placeholder="Phone Number" className="mb-2 w-full rounded-md border border-gray-700 bg-black/50 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0 focus:border-brand-orange focus:ring-brand-orange outline-none transition-colors" name="phone" />
                           </div>
                           <div className="mx-0 mb-1 sm:mb-4">
                              <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider text-white"></label>
                              <textarea id="textarea" name="textarea" cols={30} rows={5} placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-700 bg-black/50 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0 focus:border-brand-orange focus:ring-brand-orange outline-none transition-colors"></textarea>
                           </div>
                        </div>
                        <div className="flex justify-center">
                           <HoverButton
                              text="Send Message"
                              type="submit"
                              width="100%"
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </div>

            {/* Google Map */}
            <div className="mt-16 w-full h-[400px] rounded-xl overflow-hidden border border-white/10">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.07544917638!2d78.9959604!3d10.1601709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006764516768b9%3A0xb30e461a720468!2sAranthangi%2C%20Tamil%20Nadu%20614616!5e0!3m2!1sen!2sin!4v1710521400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
               ></iframe>
            </div>
         </div>
      </section>
   );
};

export default Contact;
