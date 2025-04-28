import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EntryPageProps {
  onAnimationComplete: () => void;
}

function EntryPage({ onAnimationComplete }: EntryPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnterClick = () => {
    setIsAnimating(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={{ scale: 1 }}
        animate={{ scale: isAnimating ? 1.5 : 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => isAnimating && onAnimationComplete()}
      >
        <img
          src="/images/taverna.png"
          alt="Taverna"
          className="w-full h-full object-cover"
        />
        {!isAnimating && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleEnterClick}
            className="absolute left-1/2 bottom-20 -translate-x-1/2
                     px-8 py-4 text-2xl font-bold text-[#39FF14] border-2 border-[#39FF14] 
                     hover:bg-[#39FF14] hover:text-black transition-colors duration-300
                     backdrop-blur-sm bg-black/30 [text-shadow:_0_0_10px_rgb(57_255_20_/_70%)]"
          >
            Enter
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default EntryPage;