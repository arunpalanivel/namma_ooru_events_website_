
import './BikeLoader.css';

const BikeLoader = () => {
   return (
      <svg className="loader" viewBox="0 0 48 30" width="48px" height="30px" role="img" aria-label="Cycling Loader">
         <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
            <g transform="translate(9.5,19)">
               <circle className="loader_tire" r="9" strokeDasharray="56.549" strokeDashoffset="56.549" />
               <g className="loader_spokes-spin" strokeDasharray="31.416" strokeDashoffset="31.416">
                  <circle className="loader_spokes" r="5" />
                  <rect className="loader_spokes" width="10" height="1" x="-5" y="-0.5" />
                  <rect className="loader_spokes" width="1" height="10" x="-0.5" y="-5" />
               </g>
            </g>
            <g transform="translate(24,19)">
               <g className="loader_pedals-spin" strokeDasharray="25.133" strokeDashoffset="25.133">
                  <circle className="loader_pedals" r="4" />
                  <path className="loader_pedals" d="M -1.5 -1.5 L 1.5 1.5" />
                  <path className="loader_pedals" d="M 1.5 -1.5 L -1.5 1.5" />
               </g>
            </g>
            <g transform="translate(38.5,19)">
               <circle className="loader_tire" r="9" strokeDasharray="56.549" strokeDashoffset="56.549" />
               <g className="loader_spokes-spin" strokeDasharray="31.416" strokeDashoffset="31.416">
                  <circle className="loader_spokes" r="5" />
                  <rect className="loader_spokes" width="10" height="1" x="-5" y="-0.5" />
                  <rect className="loader_spokes" width="1" height="10" x="-0.5" y="-5" />
               </g>
            </g>

            <path className="loader_seat" d="M 12 21 L 10 9 A 2 2 0 0 1 12 7 L 14 7" strokeDasharray="5" strokeDashoffset="5" />
            <path className="loader_body" d="M 12 21 L 24 21 L 19 9 L 9 19 L 12 21" strokeDasharray="79" strokeDashoffset="79" />

            <path className="loader_front" d="M 38.5 19 L 34 5" strokeDasharray="19" strokeDashoffset="19" />
            <path className="loader_handlebars" d="M 34 5 L 30 4 L 32 4" strokeDasharray="10" strokeDashoffset="10" />

         </g>
      </svg>
   );
};

export default BikeLoader;
