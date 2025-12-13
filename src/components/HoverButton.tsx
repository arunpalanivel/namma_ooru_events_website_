import React from 'react';

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   text: React.ReactNode;
   hoverText?: React.ReactNode;
   width?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
   text,
   hoverText,
   width = '140px',
   className = '',
   ...props
}) => {
   const displayHoverText = hoverText || text;

   return (
      <button
         className={`relative h-[50px] bg-gradient-to-t from-[#00154c] via-[#12376e] to-[#23487f] text-white rounded-[50px] border-none outline-none cursor-pointer shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden group ${className}`}
         style={{ width }}
         {...props}
      >
         <span className="absolute w-full top-1/2 left-0 -translate-y-1/2 text-lg font-bold tracking-[1px] transition-[top] duration-500 group-hover:-top-[100%] flex items-center justify-center">
            {text}
         </span>
         <span className="absolute w-full top-[150%] left-0 -translate-y-1/2 text-lg font-bold tracking-[1px] transition-[top] duration-500 group-hover:top-1/2 flex items-center justify-center">
            {displayHoverText}
         </span>
      </button>
   );
};

export default HoverButton;
