import { useState } from "react";
import { motion } from "framer-motion";

interface StackProps {
   randomRotation?: boolean;
   sensitivity?: number;
   sendToBackOnClick?: boolean;
   cards: React.ReactNode[];
}

const Stack = ({
   randomRotation = false,
   sensitivity = 180,
   sendToBackOnClick = false,
   cards,
}: StackProps) => {
   const [order, setOrder] = useState(cards.map((_, i) => i));

   const handleClick = () => {
      if (sendToBackOnClick) {
         setOrder((prev) => {
            const newOrder = [...prev];
            const first = newOrder.shift();
            if (first !== undefined) newOrder.push(first);
            return newOrder;
         });
      }
   };

   return (
      <div className="relative w-full h-full cursor-pointer" onClick={handleClick}>
         {order.map((originalIndex, index) => {
            // Calculate the visual position based on the current index in the 'order' array
            // The last item in 'order' is at the bottom visually (z-index 0)
            // The first item in 'order' is at the top visually (z-index: length)

            // Wait, "sendToBackOnClick" implies the top card goes to the back.
            // So the first item in the array is the top card.

            const isTop = index === 0;
            const offset = index * 2; // slight offsetting for depth effect if desired, or 0

            // Random rotation logic (simulated for now, ideally consistent per card)
            // We need consistent rotation for the same card index regardless of position?
            // Or random based on position? "randomRotation" prop usually implies static random rotation.
            // Let's generate a pseudo-random rotation based on the originalIndex to keep it consistent.
            const rotation = randomRotation ? (originalIndex % 2 === 0 ? 3 : -3) * ((originalIndex % 3) + 1) : 0;

            return (
               <motion.div
                  key={originalIndex}
                  layout
                  initial={false}
                  animate={{
                     zIndex: cards.length - index,
                     scale: 1 - index * 0.05, // scale down cards behind
                     y: index * 10, // move down cards behind
                     rotate: index === 0 ? 0 : rotation, // rotate cards behind, top one straight? Or all rotated?
                     // The user example shows "randomRotation={true}".
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                  style={{
                     transformOrigin: "center center"
                  }}
               >
                  {cards[originalIndex]}
               </motion.div>
            );
         })}
      </div>
   );
};

export default Stack;
