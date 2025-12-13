import React from 'react';
import './BookNowButton.css';

interface BookNowButtonProps {
   onClick?: () => void;
   className?: string;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ onClick, className }) => {
   return (
      <div className={`book-now-button ${className || ''}`}>
         <button className="button button-item" onClick={onClick}>
            <div className="button-bg">
               <div className="button-bg-layers">
                  <div className="button-bg-layer button-bg-layer-1 -purple"></div>
                  <div className="button-bg-layer button-bg-layer-2 -turquoise"></div>
                  <div className="button-bg-layer button-bg-layer-3 -yellow"></div>
               </div>
            </div>
            <div className="button-inner">
               <span className="button-inner-static">Book Now</span>
               <span className="button-inner-hover">Book Now</span>
            </div>
         </button>
      </div>
   );
};

export default BookNowButton;
