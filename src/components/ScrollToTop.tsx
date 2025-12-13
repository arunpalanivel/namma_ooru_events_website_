import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
   const { pathname, hash } = useLocation();

   useEffect(() => {
      if (hash) {
         // If there is a hash, scroll to the element
         const element = document.getElementById(hash.replace('#', ''));
         if (element) {
            setTimeout(() => {
               element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
         }
      } else {
         // Otherwise scroll to top
         window.scrollTo(0, 0);
      }
   }, [pathname, hash]);

   return null;
}
