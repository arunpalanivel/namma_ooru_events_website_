import React from 'react';

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   text: React.ReactNode;
   width?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
   text,
   width = '140px',
   className = '',
   ...props
}) => {


   return (
      <button
         className={`pulse-button cursor-pointer flex items-center justify-center ${className}`}
         style={{ width: width !== '140px' ? width : undefined }}
         {...props}
      >
         {text}
      </button>
   );
};

export default HoverButton;
