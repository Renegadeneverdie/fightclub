import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EntryPageProps {
  onAnimationComplete: () => void;
}

function EntryPage({ onAnimationComplete }: EntryPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlayNow = () => {
    window.open('https://www.roblox.com/games/498688650/Fight-Club', '_blank');
  };

  const handleEnter = () => {
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
        className="w-full h-full relative flex flex-col items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: isAnimating ? 1.5 : 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        onAnimationComplete={() => isAnimating && onAnimationComplete()}
      >
        <img
          src="/images/taverna.png"
          alt="Taverna"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        <div className="relative z-10 flex flex-col items-center space-y-12">
          <img 
            src="/images/soap.png" 
            alt="Soap"
            className="w-24 h-24 object-contain animate-pulse"
          />
          
          {!isAnimating && (
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-5xl font-bold text-white text-center tracking-wider [text-shadow:_0_0_30px_rgba(255,255,255,0.5)]">
                Join Fight Club on Roblox Now
              </h1>
              
              <motion.button
                onClick={handlePlayNow}
                className="group flex items-center space-x-3 px-10 py-5 
                         bg-[#393B3D]/80 hover:bg-[#393B3D] 
                         rounded-xl backdrop-blur-sm transition-all duration-300 
                         border-2 border-[#393B3D] hover:border-white
                         shadow-[0_0_40px_rgba(57,59,61,0.5)]
                         scale-110"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.05 }}
              >
                <img 
                  src="/images/roblox.png" 
                  alt="Roblox" 
                  className="w-10 h-10 group-hover:animate-pulse"
                />
                <span className="text-3xl font-bold text-white">PLAY NOW</span>
              </motion.button>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-12 z-20">
          <a 
            href="https://discord.gg/fightclubroblox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-6 py-3 bg-[#5865F2]/20 hover:bg-[#5865F2]/30 rounded-xl backdrop-blur-sm transition-all duration-300 border border-[#5865F2]/50 hover:border-[#5865F2]"
          >
            <img 
              src="/images/discord.png" 
              alt="Discord" 
              className="w-8 h-8 group-hover:animate-pulse"
            />
            <span className="text-xl font-semibold text-[#5865F2]">Discord</span>
          </a>
          <a 
            href="https://www.tiktok.com/@fightclubbar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 px-6 py-3 bg-[#FE2C55]/20 hover:bg-[#FE2C55]/30 rounded-xl backdrop-blur-sm transition-all duration-300 border border-[#FE2C55]/50 hover:border-[#FE2C55]"
          >
            <img 
              src="/images/tiktok.png" 
              alt="TikTok" 
              className="w-8 h-8 group-hover:animate-pulse"
            />
            <span className="text-xl font-semibold text-[#FE2C55]">TikTok</span>
          </a>
        </div>

        {/* Enter Button */}
        {!isAnimating && (
          <motion.button
            onClick={handleEnter}
            className="absolute bottom-8 left-8 z-20
                     group flex items-center space-x-3 px-6 py-3 
                     bg-[#39FF14]/20 hover:bg-[#39FF14]/30 
                     rounded-xl backdrop-blur-sm transition-all duration-300 
                     border border-[#39FF14]/50 hover:border-[#39FF14]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-semibold text-[#39FF14]">ENTER</span>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default EntryPage;