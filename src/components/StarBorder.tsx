import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

interface StarBorderProps<T extends ElementType> {
   as?: T;
   className?: string;
   color?: string; // Kept for API compatibility, unused in rainbow or mapped to glow
   speed?: string; // Kept for API compatibility
   children?: ReactNode;
   onClick?: () => void;
   innerClassName?: string;
}

const StarBorder = <T extends ElementType = 'button'>({
   as,
   className = '',
   innerClassName,
   color,
   speed = '4s',
   children,
   ...rest
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) => {
   const Component = as || 'button';
   const defaultInnerClasses = "bg-gray-900/90 text-white";

   return (
      <div className={`relative z-0 overflow-hidden p-[2px] flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 ${className}`}>
         <div
            className="absolute z-[-2] left-[-50%] top-[-50%] w-[200%] h-[200%] animate-[rotate_4s_linear_infinite]"
            style={{
               backgroundRepeat: 'no-repeat',
               backgroundPosition: '100% 50%',
               backgroundSize: '50% 50%',
               backgroundImage: `linear-gradient(0deg, transparent, ${color || '#FFF'}, transparent)`, // Using user's "beam" concept but fixed gradient
               animationDuration: speed
            }}
         ></div>
         {/* Second beam for symmetry if desired, or just one */}
         <div
            className="absolute z-[-2] left-[-50%] top-[-50%] w-[200%] h-[200%] animate-[rotate_4s_linear_infinite]"
            style={{
               backgroundRepeat: 'no-repeat',
               backgroundPosition: '0% 50%',
               backgroundSize: '50% 50%',
               backgroundImage: `linear-gradient(0deg, transparent, ${color || '#FFF'}, transparent)`,
               animationDuration: speed
            }}
         ></div>

         <Component
            className={`px-8 text-sm py-3 rounded-full font-medium backdrop-blur-sm w-full h-full flex items-center justify-center ${innerClassName || defaultInnerClasses}`}
            {...rest}
         >
            {children}
         </Component>
      </div>
   );
};

export default StarBorder;
