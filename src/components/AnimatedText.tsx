import React from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
   text: string;
   className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
   return (
      <span className={`animated-text ${className}`}>
         {text}
      </span>
   );
};

export default AnimatedText;
