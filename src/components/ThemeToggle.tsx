import { useState, useEffect } from 'react';

const ThemeToggle = () => {
   const [isDark, setIsDark] = useState(() => {
      // Check local storage or system preference
      if (typeof window !== 'undefined') {
         return localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      return false;
   });

   useEffect(() => {
      const root = window.document.documentElement;
      if (isDark) {
         root.classList.add('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         root.classList.remove('dark');
         localStorage.setItem('theme', 'light');
      }
   }, [isDark]);

   const toggleTheme = () => {
      setIsDark(!isDark);
   };

   return (
      <>
         <style>
            {`
                input:checked ~ .dot {
                    transform: translateX(100%);
                }
                `}
         </style>
         <div className="flex flex-row justify-between toggle">
            <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
               <div className="relative">
                  <input
                     type="checkbox"
                     name="dark-mode"
                     id="dark-toggle"
                     className="checkbox hidden"
                     checked={isDark}
                     onChange={toggleTheme}
                  />
                  <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition-transform duration-300"></div>
               </div>
            </label>
         </div>
      </>
   );
};

export default ThemeToggle;
