import React from 'react';
import './GradientButton.css';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   as?: 'button' | 'a';
   href?: string;
   className?: string; // Class for the container
   btnClassName?: string; // Class for the button itself
}

const GradientButton: React.FC<GradientButtonProps> = ({
   children,
   as = 'button',
   href,
   className = '',
   btnClassName = '',
   onClick,
   ...props
}) => {

   const containerClass = `gradient-btn-container ${className}`;
   const btnClass = `gradient-btn ${btnClassName}`;

   if (as === 'a') {
      return (
         <div className={containerClass}>
            <a href={href} className={btnClass} onClick={onClick as any}>
               {children}
            </a>
         </div>
      );
   }

   return (
      <div className={containerClass}>
         <button className={btnClass} onClick={onClick} {...props}>
            {children}
         </button>
      </div>
   );
};

export default GradientButton;
