import React from 'react';
import './HeroButton.css';

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   as?: 'button' | 'a';
   href?: string;
   className?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
   children,
   as = 'button',
   href,
   className = '',
   onClick,
   ...props
}) => {
   // Combine the heroBtn class with any passed className
   const combinedClassName = `heroBtn ${className}`;

   if (as === 'a') {
      return (
         <a href={href} className={combinedClassName} onClick={onClick as any}>
            {children}
         </a>
      );
   }

   return (
      <button className={combinedClassName} onClick={onClick} {...props}>
         {children}
      </button>
   );
};

export default HeroButton;
