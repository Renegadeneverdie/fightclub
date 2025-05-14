import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

interface EntryPageProps {
  onAnimationComplete: () => void;
}

function EntryPage({ onAnimationComplete }: EntryPageProps) {
  const [password, setPassword] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Set fixed countdown date to May 21, 2025
  const countdownDate = new Date('2025-05-21T00:00:00');

  const handlePasswordSubmit = () => {
    if (password.toLowerCase() === 'fightclub') {
      setIsAnimating(true);
    }
  };

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="text-[#39FF14] text-6xl font-bold tracking-wider space-x-8 [text-shadow:_0_0_30px_rgb(57_255_20_/_50%)]">
      <span>{days}d</span>
      <span>{hours}h</span>
      <span>{minutes}m</span>
      <span>{seconds}s</span>
    </div>
  );

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
          
          <Countdown 
            date={countdownDate} 
            renderer={renderer}
          />

          {!isAnimating && (
            <div className="flex flex-col items-center space-y-4">
              <input
                type="password"
                placeholder="What's the first rule of fight club?"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-6 py-3 w-96 text-xl bg-black/50 border-2 border-[#39FF14] text-[#39FF14] placeholder-[#39FF14]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50 backdrop-blur-sm"
              />
              <motion.button
                onClick={handlePasswordSubmit}
                className="px-8 py-4 text-2xl font-bold text-[#39FF14] border-2 border-[#39FF14] 
                         hover:bg-[#39FF14] hover:text-black transition-colors duration-300
                         backdrop-blur-sm bg-black/30 [text-shadow:_0_0_10px_rgb(57_255_20_/_70%)]"
              >
                Enter
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
      </motion.div>
    </motion.div>
  );
}

export default EntryPage;